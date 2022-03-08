(ns projeto-bot-telegram.medegas
  (:require [clojure.java.io :as io]
            [clojure.math.numeric-tower :as math]
            [clojure.java.shell :as shell])
  (:import  (be.tarsos.dsp.pitch PitchDetectionHandler  PitchProcessor
                                  PitchProcessor$PitchEstimationAlgorithm)
            (be.tarsos.dsp.io.jvm AudioDispatcherFactory))
  (:gen-class))

(defn ogg-2-wav [file]
  (let [out-file (str file ".wav")]
    (shell/sh "ffmpeg" "-i" file  out-file)))

(defn filter-frequencies [coll]
  (filter #(> % 900) coll))

(defn histogram [coll]
  (reduce
   (fn [acc x]
     (let [p (quot x 100)
           v (get acc p [])]
       (update acc p (fn [_] (conj v x)))))
   {} (filter-frequencies coll)))


(defn m 
  [pitches]
  (try (let [histogram (histogram pitches)
        histogram-inter (map (fn [[key value]] {key (count value)}) histogram)
        histogram-map (into {} histogram-inter)
        histogram-key  (key (apply max-key val histogram-map))
        histogram-freq (get histogram-map histogram-key)
        histogram-total (apply + (get histogram histogram-key))]
    (println "histogram: " histogram)
    (clojure.pprint/pprint ["histogram-map: " histogram-map])
    (clojure.pprint/pprint ["histogram-key: " histogram-key])
    (clojure.pprint/pprint ["histogram-freq: " histogram-freq])
    (clojure.pprint/pprint ["Data: " (get histogram histogram-key)])
    (clojure.pprint/pprint ["histogram-total: " histogram-total])
    (/ histogram-total histogram-freq))
       (catch Exception e
         (println e)
         0)))

(defn detection-pitch [source]
  (let [dispatcher (AudioDispatcherFactory/fromFile (io/file source) 2048 1024)
        algorithm (PitchProcessor$PitchEstimationAlgorithm/YIN)
        pitch (atom [])
        pdh (reify PitchDetectionHandler
              (handlePitch [this result event]
                (let [p (.getPitch result)]
                  (when (pos? p)
                    (swap! pitch conj p)))))
        pitch-processor (PitchProcessor. algorithm 48000 2048 pdh)]
    (.addAudioProcessor dispatcher pitch-processor)
    (.run dispatcher)
    (println @pitch)
    (m @pitch)))


(defn fullness [medido]
  (try 
    (let [d (- 1450 920)
          m (- 1450 (detection-pitch medido))]
     (-> (/ m d) 
         (* 100)
         (math/ceil)))
    (catch ArithmeticException _ 
      (str "divisão por zero"))))


(defn medegas
  [file-path]
  (let [value (fullness file-path)]
    (if (string? value)
      -1
      value)))


(comment

  (detection-pitch "resources/audios/AudioExemploLeandro01.wav")
  ;;[441.731 426.09195 424.06616 1377.7058 1311.1531 1278.371 1277.2747 1382.4496 1369.8411 1314.605 1239.342 1247.6068 1316.9783 1255.7856 1242.491 171.30713 1232.2167 172.03001 50.37196 172.08821 172.48047 109.477974 109.87379 433.3149 433.6711 434.77725 424.17166 432.65314 425.60938 412.76843 416.36166 107.03053]

  ;;[-1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 441.731 426.09195 -1.0 424.06616 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 1377.7058 1311.1531 1278.371 1277.2747 1382.4496 1369.8411 1314.605 1239.342 1247.6068 1316.9783 -1.0 -1.0 1255.7856 1242.491 171.30713 -1.0 -1.0 -1.0 1232.2167 172.03001 50.37196 -1.0 -1.0 -1.0 -1.0 172.08821 172.48047 -1.0 -1.0 -1.0 109.477974 109.87379 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 433.3149 433.6711 -1.0 434.77725 -1.0 -1.0 -1.0 424.17166 432.65314 425.60938 -1.0 412.76843 -1.0 -1.0 416.36166 107.03053 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0]

  (fullness "resources/audios/AudioExemploLeandro01.wav")
  ;; histograma 400 - 1500 98%
  ;; histograma 500 - 1500 23%
  ;; 24 ------ 2048

  (detection-pitch "resources/audios/AudioExemploLeandro02.wav")
  ;;[443.33743 448.38153 452.27695 426.78134 442.21228 84.79815 61.852074 84.73765 61.91983 61.73767 61.732937 61.750546 953.61487 61.637177 61.69248 61.852425 61.68412 282.32776 61.763657 85.187065 61.652306 922.5043 61.792355 61.716248 924.59515 947.9858 61.54691 65.80627 933.74817 943.50305 917.1956 65.83221 920.7709 956.9516 904.8513 66.1398 921.1235 65.83222 61.69961 936.90045 903.8204 286.409 906.3972 61.756535 922.1822 915.2955 941.5132 890.1857 919.2599 919.2898 921.613 889.7016 924.9309 925.08606]

  ;;[-1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 443.33743 448.38153 452.27695 -1.0 -1.0 -1.0 426.78134 442.21228 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 84.79815 -1.0 -1.0 -1.0 61.852074 -1.0 -1.0 84.73765 61.91983 -1.0 -1.0 61.73767 -1.0 -1.0 -1.0 61.732937 -1.0 -1.0 61.750546 953.61487 61.637177 61.69248 61.852425 61.68412 282.32776 61.763657 85.187065 -1.0 61.652306 922.5043 61.792355 -1.0 61.716248 924.59515 947.9858 61.54691 65.80627 933.74817 943.50305 917.1956 65.83221 920.7709 956.9516 904.8513 66.1398 921.1235 65.83222 61.69961 936.90045 903.8204 286.409 906.3972 61.756535 -1.0 -1.0 922.1822 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 915.2955 941.5132 890.1857 919.2599 919.2898 921.613 889.7016 924.9309 925.08606]

  (fullness "resources/audios/AudioExemploLeandro02.wav")
   ;; histograma 400 - 1500 53%
   ;; histograma 500 - 1500 53%
   ;; 58


  (detection-pitch "resources/audios/AudioExemploLeandro03.wav")
  ;;[1437.9937 1419.0776 1415.3922]

  ;;[-1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 1437.9937 -1.0 1419.0776 1415.3922 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0]

  (fullness "resources/audios/AudioExemploLeandro03.wav")
   ;; histograma 400 - 1500 7%
   ;; histograma 500 - 1500 7%
   ;; 5%

  (detection-pitch "resources/audios/AudioExemploLeandro04.wav")
  ;;[1061.5493 990.06995 963.5505 973.23737 71.83452 945.97125 963.2392 960.81104 951.09924 985.1042 941.4193 943.5838 940.80023 93.95025 943.0446 944.16003 93.67204 946.00354 940.8903 957.1287 943.4218 935.36426 976.2452 930.6469 942.7895 942.8253 931.2107 947.89026 94.771515]

  ;; [-1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 1061.5493 -1.0 990.06995 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 -1.0 963.5505 973.23737 -1.0 -1.0 71.83452 -1.0 -1.0 945.97125 963.2392 -1.0 -1.0 960.81104 951.09924 -1.0 985.1042 941.4193 -1.0 -1.0 943.5838 940.80023 -1.0 93.95025 943.0446 944.16003 -1.0 93.67204 946.00354 940.8903 -1.0 957.1287 943.4218 935.36426 976.2452 930.6469 942.7895 942.8253 -1.0 931.2107 947.89026 94.771515]

  (fullness "resources/audios/AudioExemploLeandro04.wav")
   ;; histograma 400 - 1500 50%
   ;; histograma 500 - 1500 50%
   ;; 55.5%

  (fullness "./resources/cheio/a1.wav")



  )


(comment 
  
  (detection-pitch "./resources/cheio/a1.wav")
;; => 336.3449350992839

(detection-pitch "./resources/cheio/a2.wav")
;; => 358.95327654751867

(detection-pitch "./resources/cheio/a3.wav")
;; => 48.72014570236206

(detection-pitch "./resources/vazio/v2.wav")
;; => 55.05217695236206

(detection-pitch "./resources/vazio/v3.wav")
;; => 51.68473434448242

(detection-pitch "./vazio.wav")
;; => 3222.609619140625

(detection-pitch "./usado.wav")
;; => 3054.1989822387695

(detection-pitch "./cheio.wav")
;; => 2755.599168346774
;;
(detection-pitch "resources/voice/audioexemplovazio2.wav")
(detection-pitch "resources/voice/file95usadoexemplo.wav")

  (def a [1178.8186 3561.6433 3745.269 3457.5576 3443.4814 473.20193 474.4183 1193.7081 1158.3037 1181.2972])
  
  (histogram a)

  (fullness "resources/voice/audioexemplovazio2.wav")
  (fullness "resources/voice/file95usadoexemplo.wav")
  (fullness "./cheio.wav")
  (fullness "resources/voice/audioexemplole1.wav")
  (fullness "resources/voice/audioexemplole2.wav")
  (fullness "resources/voice/audioexemplole3.wav")
  (fullness "resources/voice/audioexemplole4.wav")
  
  (let [hist (filter some? (histogram a))
         hist-keys (map keys hist)
        freq (frequencies hist-keys)]
    (clojure.pprint/pprint freq)
    
     (let [d (- 3300 2700)]
       )
  ))