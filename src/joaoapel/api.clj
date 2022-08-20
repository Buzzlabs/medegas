(ns joaoapel.api
	(:require 
		[ring.adapter.jetty :as jetty]
		[ring.middleware.params :refer [wrap-params]]
		[ring.middleware.json :refer [wrap-json-body]]
     	[clojure.pprint]
     	[clojure.data.json :as cj]
     	[clojure.java.io :as io]
     	[clojure.java.shell :refer [sh]]
	)
	
)

(import org.jtransforms.fft.FloatFFT_1D)

(def TG_API_BASE "https://api.telegram.org/bot")
(def TG_API_KEY (System/getenv "TG_API_KEY"))
(def WAV_META_OFFSET 11) ;;https://ccrma.stanford.edu/courses/422-winter-2014/projects/WaveFormat/

(defn register-web-hook [hook-uri]
	(slurp (str TG_API_BASE TG_API_KEY "/setWebhook?url=" hook-uri "/tg-bot/medgascheck-v1"))
)

(defn download-file [uri file-tmp-path]
;;download file to /tmp folder for further processing
;;returns absolute path to downloaded file

	(try 
	 	(with-open [
	 			in (io/input-stream uri)
	          	out (io/output-stream file-tmp-path)]
		(io/copy in out))

		(println "File downloaded to: " file-tmp-path)

		(catch Exception e
			(println "DOWNLOAD ERROR: " (.getMessage e))
		)
	)

	;;return absolute path to local file
	file-tmp-path
)

(defn populate-list [array-list data]

	(try
		(map (fn [byte] (.add array-list byte)) data)
		(catch Exception e 
			(false)
		)
	)
)



(defn dot-product 
"Returns dot product of two vectors v1 and v2"
([vec1 vec2] (if (not (= (count vec1) (count vec2)))
	nil
	(dot-product vec1 vec2 0)
	)
)
([vec1 vec2 total]
	(if (or (empty? vec1) (empty? vec2))
		total

		(dot-product (rest vec1) (rest vec2)
		(+ total (* (first vec1) (first vec2)))
		)
	)
))


(defn- read-stream [stream]
  (let [buf (byte-array 4)]
    (when-not (= -1 (.read stream buf))
      buf)))


(defn byte-chunk-seq [stream]
  (lazy-seq (if-let [buf (read-stream stream)]
              (cons buf (byte-chunk-seq stream))
              nil)))



(defn byte->int [ba]
	(.getInt (.order (java.nio.ByteBuffer/wrap ba) java.nio.ByteOrder/LITTLE_ENDIAN))
)


(defn convert-to-wav [file-path]
	(let [path-match-ogg (re-matches #"(.+)\.ogg$" file-path)
		  path-match-wav (re-matches #"(.+)\.wav$" file-path)
		  path-new-wav (str (second path-match-ogg) ".wav")
		  ]

		(when (and (empty? path-match-wav) (empty? path-match-ogg))
			(throw (Exception. "Invalid audio format"))
		)

		(if (not (empty? path-match-wav))
			file-path
			(do
				(when (not (empty? path-match-ogg))
					(if (= 0 (:exit (sh  
						"ffmpeg" "-i" file-path path-new-wav)))
						(str (second path-match-ogg) ".wav")
						
						(throw (Exception. "Error converting audio format"))
					)
				)
			)
		)

	)
)


;;vamos fazer algum math
(defn process-signal 
([total] total)
([file-path frequency-start frequency-end]
"Accepts file-path frequency-start frequency-end"
"Returns a score given"

;;Let's convert incoming ogg to wav
	(with-open [rdr (java.io.FileInputStream. file-path)]
	(first (doall
		(let [signal (byte-chunk-seq rdr);;(map (fn[ba] (.getInt (java.nio.ByteBuffer/wrap ba))) 
			length (count signal)
			frequency-range (- frequency-end frequency-start) ;;range

			;;float array 
			fh! (float-array (map (fn[ba] (byte->int ba))
							 (nthrest signal WAV_META_OFFSET) ))
			fft (FloatFFT_1D. (- length WAV_META_OFFSET))
			]

			;;perform forward transform
			(.realForward fft fh!)

			;;Sum up amplitudes in given fq range
			(let [level-score (dot-product 
						(map (fn [fh] (Math/log (+ 1 (Math/abs (* fh (/ 1 length)))))) ;;multiply by two to account for folding
				 			(take frequency-range (nthrest fh! frequency-start)))
						(take frequency-range (repeat 1)))
				  vaz-score 36000
				  che-score 30640

				  ; score-vaz-dis (- level-score) ;distance from vazio
				  score-norm-dis (- level-score che-score)
				  level (+ 100 (* score-norm-dis (/ -1 54))) ;;simple linear function y=(-1/54)x+100 ,y:fullness x:score
				  ]

				  (lazy-seq 0 [level])
			)
		)
	))
	)
))


(defn get-file-uri [request fn-file-resp]
;;prepare remote file for download
;;return remote file uri and absolute path to local file

	(let [
		chat-id (get-in request [:body "message" "chat" "id"])
		message-id (get-in request [:body "message" "message_id"])
		file-id (get-in request [:body "message" "voice" "file_id"])
		doc-id (get-in request [:body "message" "document" "file_id"])

		;;Query remote file info
		file-resp (slurp (str TG_API_BASE TG_API_KEY "/getFile?file_id=" file-id))
		
		file-path (get-in (cj/read-str file-resp) ["result" "file_path"])

		;;construct full uri to file
		file-uri (str "https://api.telegram.org/file/bot" TG_API_KEY "/" file-path)
		;;construct local file uri
		file-tmp-path (str "/tmp/" file-id (if (nil? file-id) ".wav" ".ogg"))
		]

		[file-uri file-tmp-path]
	)
)

(defn bot-handler [request]
"Resonsible for handling chat requests from telegram bot"
"Receive request from router"
"returns HashMap in case of success or"
	(clojure.pprint/pprint request)

	(if (not (= (:request-method request) :post))
		{:status 404 :body "Pagina nao existe :("}

		(let [voice-mime-type (get-in request [:body "message" "voice" "mime_type"])

			;;DEBUG accept wav uploads for testing
			;;TODO should be removed once ogg -> wav conversion is complete
			doc-mime-type (get-in request [:body "message" "document" "mime_type"])] 

			;;(println (get-in request [:body "message"]))
			(if (not (or (= voice-mime-type "audio/ogg") (= doc-mime-type "audio/x-wav")))
				(do
					(println "Oooops, nao sei o que fazer como isso format, " voice-mime-type)
					{:status 200 :error "Invalid format"}
				)

				(do
					;;get audio
					(let [chat-id (get-in request [:body "message" "chat" "id"])
						  fpath (get-file-uri request)
						  frequency-start 10000 ;;start of frequency we are interested in
						  frequency-end 13000 ;;end of frequency we're interested in

						  level (format "%.2f" (process-signal 
						  						(convert-to-wav 
						  						(download-file (nth fpath 0) (nth fpath 1)))
						  					 frequency-start frequency-end))]
						;;send response to user

						(slurp (str TG_API_BASE TG_API_KEY "/sendMessage?chat_id=" chat-id "&text=" level))
						{:status 200 :error nil :body level}
					)
				)
			)
		)
	)
)


(defn welcome-handler [request]
;;default handler
	{
		:status 200
		:body "Bem venido, para meu canal!"
	}
)

(def handler-map {
	:tg-bot #'bot-handler
	:welcome #'welcome-handler
})


(defn router []
;;A simple middleware responsible for dispatching incoming requests to appropriate handlers
;;Matches handler from handler-map and pass request object to handler
	(fn [request]

		;;for debugging purposes only
		;;(def update request)
		(if (= (:uri request) "/tg-bot/medgascheck-v1") 
			((:tg-bot handler-map) request)
			((:welcome handler-map) request))
	)
)

(def app-handler
	(->
	 router ;;dispatch incoming request to handler
	 wrap-json-body ;;parse incoming json-body to clojure data types
	 wrap-params
	)
)

(defonce server (atom nil))

(defn start-server [port]
	;;throw exception if env variable is missing
	(if (nil? TG_API_KEY)
		(throw (Exception. "Por favor, colocar chave em TG_API_KEY env variable"))
	)
	
	(swap! server (jetty/run-jetty #'app-handler {:port port :join? false}))
)

(defn stop-server []
	(swap! server (fn [_] nil))
)
