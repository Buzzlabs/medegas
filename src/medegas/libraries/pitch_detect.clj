(ns medegas.libraries.pitch-detect
  (:require
   [clojure.java.io :as io]
   [clojure.java.shell :as shell]
   [clojure.math.numeric-tower :as math])
  (:import
   (be.tarsos.dsp.pitch PitchDetectionHandler  PitchProcessor
                        PitchProcessor$PitchEstimationAlgorithm)
   (be.tarsos.dsp.io.jvm AudioDispatcherFactory)))

(defn download-file
  [file-url file-output]
  (println file-url file-output)
  (with-open [in (io/input-stream file-url)
              out (io/output-stream file-output)]
    (io/copy in out)))

(defn oga-2-wav [file]
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
    (println "pitch: " @pitch)
    (m @pitch)))

(defn fullness [medido]
  (try
    (let [d (- 1450 920)
          m (- 1450 (detection-pitch medido))]
      (-> (quot m d)
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

#_(medegas "resources/iphone2.m4a.wav")

