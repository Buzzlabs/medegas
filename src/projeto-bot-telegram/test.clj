(ns projeto-bot-telegram.test)

(def v (range 20))

(defn histogram [vector]
  (mapv (fn [x]
          (cond
            (and (>= x 0) (<= x 5))   {:pouco x}
            (and (>= x 6) (<= x 10))  {:pouco-medio x}
            (and (>= x 11) (<= x 15)) {:muito-medio x}
            (>= x 16) {:muito x}
            :else {:ignore x})) vector))


(defn sei-la [x]
  (let [bla (histogram x)
        bla-keys (map keys bla)
        freq (frequencies bla-keys)
        fn-max (partial apply max-key val)
        mais (->> freq
                  fn-max
                  key
                  first)
        filter-bla (->> (filter mais bla)
                        (map vals)
                        (flatten)
                        (apply +))
        counter (double (->> freq 
                             fn-max 
                             val))]
    (/ filter-bla counter)))

(defn filter-frequencies [coll]
  (filter #(> % 500) coll))

(defn histogram-2 [coll]
  (reduce
   (fn [acc x]
     (let [p (quot x 100)
           v (get acc p [])]
       (update acc p (fn [_] (conj v x)))))
   {} (filter-frequencies coll)))

(defn m 
  [pitches]
  (let [histogram (histogram-2 pitches)
        histogram-inter (map (fn [[key value]] {key (count value)}) histogram)
        histogram-map (into {} histogram-inter)
        histogram-key  (key (apply max-key val histogram-map))
        histogram-freq (get histogram-map histogram-key)
        histogram-total (apply + (get histogram histogram-key))]
    (println histogram)
    (clojure.pprint/pprint (get histogram histogram-key))
    (clojure.pprint/pprint histogram-map)
    (clojure.pprint/pprint histogram-key)
    (clojure.pprint/pprint histogram-freq)
    (clojure.pprint/pprint histogram-total)
    (/ histogram-total histogram-freq)))

(defn m [pitches]
   (try 
     (let [hist (filter some? (histogram pitches))
           hist-keys (map keys hist)
           freq (frequencies hist-keys)
           fn-max (partial apply max-key val)
           mais (->> freq
                     fn-max
                     key
                     first)
           filter-hist (->> (filter mais hist)
                            (map vals)
                            (flatten)
                            (apply +))
           counter (double (->> freq
                                fn-max
                                val))]
       (clojure.pprint/pprint mais)
       (clojure.pprint/pprint freq)
       (/ filter-hist counter))
     (catch Exception e 
       (println e)
       0)))


(defn testando [value] 
  (cond
    (and (>= value 0) (< value 12.5)) (println "foto vazio")
    (and (>= value 12.5) (< value 25)) (println "foto  quase vazio")
    (and (>= value 25) (< value 37.5)) (println "foto  quase quase vazio")
    (and (>= value 37.5) (< value 50)) (println "foto  quase metade")
    (and (>= value 50) (< value 62.5)) (println "foto metade")
    (and (>= value 62.5) (< value 75)) (println "foto quase quase cheio")
    (and (>= value 75.5) (< value 87.5)) (println "foto quase cheio")
    (and (>= value 87.5) (< value 100)) (println "foto cheio")
    ))

(comment

  (def ex1 [443.33743 448.38153 452.27695 426.78134 442.21228 84.79815 61.852074 84.73765 61.91983 61.73767 61.732937 61.750546 953.61487 61.637177 61.69248 61.852425 61.68412 282.32776 61.763657 85.187065 61.652306 922.5043 61.792355 61.716248 924.59515 947.9858 61.54691 65.80627 933.74817 943.50305 917.1956 65.83221 920.7709 956.9516 904.8513 66.1398 921.1235 65.83222 61.69961 936.90045 903.8204 286.409 906.3972 61.756535 922.1822 915.2955 941.5132 890.1857 919.2599 919.2898 921.613 889.7016 924.9309 925.08606])

  (def ex2 [443.33743 448.38153 452.27695 426.78134 442.21228 84.79815 61.852074 84.73765 61.91983 61.73767 61.732937 61.750546 953.61487 61.637177 61.69248 61.852425 61.68412 282.32776 61.763657 85.187065 61.652306 922.5043 61.792355 61.716248 924.59515 947.9858 61.54691 65.80627 933.74817 943.50305 917.1956 65.83221 920.7709 956.9516 904.8513 66.1398 921.1235 65.83222 61.69961 936.90045 903.8204 286.409 906.3972 61.756535 922.1822 915.2955 941.5132 890.1857 919.2599 919.2898 921.613 889.7016 924.9309 925.08606])

  (def t (histogram-2 (shuffle ex1)))
  ;;{9.0 [921.1235 941.5132 953.61487 943.50305 906.3972 917.1956 956.9516 936.90045 915.2955 921.613 922.1822 903.8204 924.59515 933.74817 924.9309 919.2898 922.5043 920.7709 925.08606 904.8513 919.2599 947.9858], 8.0 [890.1857 889.7016]}
  (sei-la t)
  

  (let [bla (histogram-2 ex1)
        bla-test (map (fn [[key value]] {key (count value)}) bla)
        bla-map (into {} '({8.0 22} {9.0 2} {2.0 100}))
        key  (key (apply max-key val bla-map))]
    key)
  
  (m ex1)

  
  )

  