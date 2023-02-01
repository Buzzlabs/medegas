(ns medegas.api
  (:require
   [medegas.pitch-detect :as pitch]
   [medegas.database :as db]))

#_(use 'clojure.pprint)

(defn results [user]
  (let [result (db/get-result user db/conn)]
    (->> (group-by last result)
         (map (fn [[k v]]
                (let [[value] v]
                  {k (second value)})))
         (apply merge))))

(defn pitch-detect
  [{:keys [url id output]}]
  (pitch/download-file url output)
  (pitch/oga-2-wav output)
  (let [result (pitch/medegas (str output ".wav") (results id))
        pitch-id (java.util.UUID/randomUUID)
        payload {:result (long result)
                 :type :calibration/default
                 :user id
                 :id pitch-id}]
    (println @(db/tx-pitch payload db/conn))
    (pitch/delete-file [(str output ".wav") output])
    {:result result :id pitch-id}))

(defn sound-type [{:keys [id types]}]
  (println id)
  (println @(db/tx-pitch-type {:type (keyword (str "calibration/" types))
                        :id id} 
                       db/conn)))