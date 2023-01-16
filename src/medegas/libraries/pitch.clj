(ns medegas.libraries.pitch
  (:require [clojure.java.io :as io]
            [clojure.math.numeric-tower :as math]
            [clojure.java.shell :as shell])
  (:import  (be.tarsos.dsp.pitch PitchDetectionHandler  PitchProcessor
                                 PitchProcessor$PitchEstimationAlgorithm)
            (be.tarsos.dsp.io.jvm AudioDispatcherFactory)))

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


(comment

  (def pitch-cheio (detection-pitch "resources/cheio.wav"))
;; [3101.7964 3027.681 2972.9382 3012.6914 3031.5923 2998.6375 3075.689 2983.422 2961.255 3059.9988 3000.423 2988.0486 3005.1084 2966.1685 3010.116 3022.9795 3010.4536 3001.2773 2980.396 2981.8906 2988.5947 2992.0083 2995.5598 2981.1301 2978.1184 2977.2422 2974.5566 2978.9016 2975.8687 2974.8704 2968.6257]

  (detection-pitch "resources/usado.wav")
;; [3672.9734 3678.2732 3669.2021 3704.9304 3667.7002 3672.4224 3686.109 3689.4797 3740.7163 61.175144]

  (m [3672.9734 3678.2732 3669.2021 3704.9304 3667.7002 3672.4224 3686.109 3689.4797 3740.7163 61.175144])
  (histogram [3672.9734 3678.2732 3669.2021 3704.9304 3667.7002 3672.4224 3686.109 3689.4797 3740.7163 61.175144])
  (filter-frequencies {36.0 [3672.9734 3678.2732 3669.2021 3667.7002 3672.4224 3686.109 3689.4797], 37.0 [3704.9304 3740.7163]})

  (detection-pitch "resources/android3.m4a.wav")
;; [3507.6023]
  )

(defn fullness [medido]
  (try
    (let [d (- 1450 920)
          m (- 1450 (detection-pitch medido))]
      (-> (quot m d)
          (* 100)
          (math/ceil)))
    (catch ArithmeticException _
      (str "divisão por zero"))))

(comment (fullness "resources/ExemploGasVazio.wav")
         (fullness "resources/ExemploGasVazio2.wav")

         (detection-pitch "resources/v2.wav")
         (detection-pitch "resources/usado.wav")
         (detection-pitch "resources/cheio.wav"))

(defn medegas
  [file-path]
  (let [value (fullness file-path)]
    (if (string? value)
      -1
      value)))

(comment (medegas "resources/ExemploGasVazio.wav")
         (medegas "resources/ExemploGasVazio2.wav")

         (medegas "resources/iphone1.m4a.wav")
         (medegas "resources/iphone2.m4a.wav")
         (medegas "resources/iphone3.m4a.wav")

         (medegas "resources/android1.m4a.wav")
         (medegas "resources/android2.m4a.wav")
         (medegas "resources/android3.m4a.wav")
         
         (fullness "resources/android3.m4a.wav"))

