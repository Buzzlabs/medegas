(ns botijao.events
  (:require
   [cljs.core.async :as async]
   ["recorder-js" :default Recorder]
   ["wav-decoder" :as WavDecoder]
   ["pitchfinder" :default Pitchfinder]

   [re-frame.core :as rf]
   [botijao.db :as db]
   [botijao.subs :as subs]
   [oops.core :refer [oget oset! ocall!]]
   [clojure.string :as s]))


(defn err-map
  "Helper function. Takes js/Error object and returns a map with its name and massage."
  [error]
  {:name    (oget error :name)
   :message (oget error :message)})

;; NAVIGATE  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-fx
  ::navigate
  (fn [_ [_ handler]]
   {:navigate handler}))

(rf/reg-event-fx
 ::set-active-panel
 (fn [{:keys [db]} [_ active-panel]]
   {:db (assoc db :active-panel active-panel)}))


;; AUDIO FUNCTIONS ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn on-start-fn
  [{:keys [tick ticker]} {:keys [on-started on-tick]}]
  (fn []
    (rf/dispatch on-started)
    (async/go
      (async/>! ticker
            (js/setInterval
             #(rf/dispatch (conj on-tick (:interval tick)))
             (:interval tick))))))

(defn on-stop-fn
  [{:keys [mime-type output id stream ticker]} _]
  (fn [audio]
    (let [blob      (oget audio :blob)
          filetype  (-> mime-type (s/split #"/") second)
          file      (new js/File #js[blob] (str id "." filetype) #js{:type mime-type})]
      (-> stream (ocall! :getTracks) (ocall! :forEach #(.stop %)))
      (async/go
        (async/>! output
              {:id        id
               :file      file
               :type      filetype
               :mime-type mime-type
               :url       (ocall! js/URL :createObjectURL blob)})
        (js/clearInterval (async/<! ticker))))))

(defn set-start!
  [recorder {:keys [delay] :as params} events]
  (js/setTimeout
   #(-> recorder (ocall! :start) (ocall! :then (on-start-fn params events)))
   delay))

(defn set-stop!
  [recorder {:keys [delay limit] :as params} events]
  (js/setTimeout
   #(-> recorder (ocall! :stop) (ocall! :then (on-stop-fn params events)))
   (+ delay limit)))

(defn record-stream-fn
  [recorder params events]
  (fn [stream]
    (let [params' (assoc params :stream stream :ticker (async/chan))]
      (ocall! recorder :init stream)
      (set-start! recorder params' events)
      (set-stop! recorder params' events))))

(defn record!
  [{:keys [output] :as params} events]
  (let [audio-context (new js/AudioContext)
        recorder      (new Recorder audio-context)
        pstream       (ocall! js/navigator :mediaDevices.getUserMedia #js{:audio true})
        on-error      #(async/go (async/>! output %))]
    (-> pstream
        (ocall! :then (record-stream-fn recorder params events))
        (ocall! :catch on-error))))



;; FX     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(rf/reg-fx
 ::record-audio!
 (fn [[params {:keys [on-stop on-error] :as events}]]
   (let [output (async/chan)]
     (async/go
       (record! (assoc params :output output) events)
       (let [result (async/<! output)
             event  (if (instance? js/Error result) on-error on-stop)]
         (rf/dispatch (conj event result)))))))





;; EVENTS ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(rf/reg-event-fx
 ::start-recording
 [rf/trim-v]
 (fn [{:keys [db]} _]
   (let [limit 2000]
     {:db                (-> db
                             (update :transcribe #(dissoc % :transcription))
                             (assoc-in [:transcribe :recording] {:status   :initialized
                                                                 :progress {:max     limit
                                                                            :current 0}}))
      ::record-audio! [{:delay     500
                        :limit     limit
                        :id        (random-uuid)
                        :mime-type "audio/wav"
                        :tick      {:interval 1000}}
                        {:on-started [::recording-started]
                         :on-tick    [::update-recording-progress]
                         :on-stop    [::stop-recording]
                         :on-error   [::recording-error]}]})))

(rf/reg-event-db
 ::recording-started
 [rf/trim-v]
 (fn [db _]
   (assoc-in db [:transcribe :recording :status] :pending)))

(rf/reg-event-db
 ::update-recording-progress
 [rf/trim-v]
 (fn [db [tick-delay]]
   (update-in db [:transcribe :recording :progress :current] (partial + tick-delay))))

(rf/reg-event-fx
 ::stop-recording
 [rf/trim-v]
 (fn [{:keys [db]} [recording]]
   {:db       (-> db
                  (assoc-in [:transcribe :recording :status] :success)
                  (update-in [:transcribe :recording :progress] (fn [{:keys [max] :as progress}]
                                                                  (assoc progress :current max))))
    :dispatch [::detect-pitch recording]}))

(rf/reg-event-db
 ::recording-error
 [rf/trim-v]
 (fn [db [error]]
   (assoc-in db [:transcribe :recording] {:status :failure
                                          :error  (err-map error)})))


(defn get-pitch 
  [file]
  (print (str "PITCH FOR FILE: " file))
  (print (type file))
  1234)

(rf/reg-event-fx
 ::detect-pitch
 [rf/trim-v]
 (fn [{:keys [db]} [recording]]
   (let [file    (:file recording)
         pitch (get-pitch file)]
    {:db       (-> db 
                   (assoc :recording recording)
                   (assoc :pitch pitch)
                   )})))


(comment
  
  (def buffer (-> @(rf/subscribe [::subs/recording])
                  :file))
  
  (type buffer)
  (as-> buffer %
    (.stream %)
    (.valueOf %)
    (.sync (.-decode WavDecoder) %)
    )
 (.decode WavDecoder buffer)

  (def decoder (new WavDecoder))
  (let [decoder (new WavDecoder)]
   (-> @rec
      :file
      type
      ))

  (->
    @rec
   :file
   #(fn [buffer] (.decode WavDecoder buffer))
   (.then
    (fn [audioData]
      (.log js/console (.-sampleRate audioData))
      (.log js/console (aget (.-channelData audioData) 0))
      (.log js/console (aget (.-channelData audioData) 1)))))

  )

(comment
  (def buffer-size (* 2 8192))

  (def detect-pitch
    (pitchfinder/AMDF))

  (defn dispatch-frequency-and-red-key [frequency]
    (when frequency
      (let [{:keys [octave key]} (notes/frequency->keyboard-key frequency)]
        (re-frame/dispatch [:pitch-detect/frequency frequency])
        (re-frame/dispatch [:keyboard/highlight-red-key octave key]))))

  (defn pitch-detect-on-audio-process [event]
    (let [frequency (-> event
                        .-inputBuffer
                        (.getChannelData 0)
                        detect-pitch)]
      (dispatch-frequency-and-red-key frequency)))

  (defn success-callback [audio-ctx stream]
    (let [stream-source                 (.createMediaStreamSource audio-ctx stream)
          pitch-detect-script-processor (.createScriptProcessor audio-ctx buffer-size)]
      (.addEventListener pitch-detect-script-processor "audioprocess" pitch-detect-on-audio-process)
      (.connect stream-source pitch-detect-script-processor)
      (.connect pitch-detect-script-processor (.-destination audio-ctx))))

  (defn start-pitch-detect [audio-ctx]
    (js/navigator.getUserMedia #js {:audio true}
                               #(success-callback audio-ctx %1)
                               js/alert))
  )