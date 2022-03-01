(ns projeto-bot-telegram.medegas
  (:require [clojure.java.io :as io]
            [clojure.math.numeric-tower :as math]
            [clojure.java.shell :as shell])
  (:import  (be.tarsos.dsp.pitch PitchDetectionHandler  PitchProcessor
                                  PitchProcessor$PitchEstimationAlgorithm)
            (be.tarsos.dsp.io.jvm AudioDispatcherFactory ))
  (:gen-class))

(defn ogg-2-wav [file]
  (let [out-file (str file ".wav")]
    (shell/sh "ffmpeg" "-i" file "-ar" "16000" out-file)))


(defn m [pitches] 
  (/ (apply + pitches) (count pitches)))

(defn detection-pitch [source]
  (let [dispatcher (AudioDispatcherFactory/fromFile (io/file source) 2048 1024)
        algorithm (PitchProcessor$PitchEstimationAlgorithm/YIN)
        pitch (atom[])
        pdh (reify PitchDetectionHandler
              (handlePitch [this result event]
                (let [p (.getPitch result)]
                  (when (pos? p)
                    (swap! pitch conj p)))))
        pitch-processor (PitchProcessor. algorithm 44100 2048 pdh)]
    (.addAudioProcessor dispatcher pitch-processor)
    (.run dispatcher)
    (m @pitch)))


(defn fullness [medido]
  (try 
    (let [d (- 3222 2755)
        m (- 3222 (detection-pitch medido))]
     (-> (/ m d) 
         (* 100)
         (math/ceil)))
    (catch ArithmeticException _ 
      (str "divisão por zero"))))



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

(defn medegas
  [file-path]
  (let [value (fullness file-path)]
    (println value)
    (if (string? value)
      -1
      value)))