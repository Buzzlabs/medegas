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
             h-inter (if (empty? histogram-inter)
                       '({1 1}) histogram-inter)
             histogram-map (into {} h-inter)
             histogram-key  (key (apply max-key val histogram-map))
             histogram-freq (get histogram-map histogram-key)
             histogram-total (apply + (get histogram histogram-key))]
         (/ histogram-total histogram-freq))
       (catch Exception e
         (println e)
         1)))

(defn deep-merge
  [coll]
  (reduce into coll))

;; recebe os histogram anteriores
;; 3 vazio 
;; 3 cheio
;; 3 usado
;; 3 default
;; obs: acho que 3 de cada é o suficiente; 
(defn calibration
  [calibration]
  (let [result (->>
                (map last calibration)
                deep-merge
                merge)]
    (-> (reduce + result)
        (quot 3))))

(defn pitch-detect [source dt-cali]
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
    (let [result (-> (into [@pitch] dt-cali)
                     (deep-merge)
                     m)]
      [result @pitch])))

(defn fullness [medido dt-cali]
  (try
    (let [[value pitch] (pitch-detect medido dt-cali)
          d (- 1450 920)
          m (- 1450 value)
          result (-> (/ m d)
                     (* 100)
                     math/round)]
      [result pitch])
    (catch ArithmeticException _
      (str "divisão por zero"))))

(defn medegas
  [file-path dt-cali]
  (let [[value pitch] (fullness file-path dt-cali)]
    (if (string? value)
      -1
      [value pitch])))

(comment
  (def a (medegas "resources/AgADxgIAArnOUUY.oga.wav"))
  (def b (medegas "resources/AgADxAIAArnOUUY.oga.wav"))
  (def mock [60.227486 56.910854 62.347782 62.252205 63.083084 57.940166 57.63024 57.11252 60.95631 58.33256 57.35026 61.82084 62.940445 62.795856 53.306656 111.84364 1172.9867 1147.5742 1145.4203 1229.0464])

  (pitch-detect "resources/AgADxAIAArnOUUY.oga.wav" [c c])


  (m [(* 3 56) (calibration b b b)])
  
  (medegas "resources/AgADxAIAArnOUUY.oga.wav" [mock mock])
  
  )
