(ns medegas.handlers.pitch
  (:require
   [medegas.libraries.pitch-detect :as lib.detect]
   [medegas.libraries.transactions.pitch :as tx.pitch]
   [medegas.libraries.database :as lib.db]))

(defn results [{:keys [id]}]
  (let [result (tx.pitch/get-result id lib.db/conn)]
    (->> (group-by last result)
         (map (fn [[k v]]
                (let [[value] v]
                  {k (second value)})))
         (apply merge))))

(defn new-pitch
  [{:keys [json-params]}]
  (let [{:keys [file user]} json-params
        {:keys [url output]} file
        file-out (str "resources/" output)]
    (lib.detect/download-file url file-out)
    (lib.detect/oga-2-wav file-out)
    (let [result (lib.detect/medegas (str file-out ".wav") (results user))
          id (java.util.UUID/randomUUID)
          payload {:result (long result)
                   :type :calibration/default
                   :user (:id user)
                   :id id}]
      (println @(tx.pitch/tx-pitch payload lib.db/conn))
      {:status 200
       :body {:result result :id id}})))

(defn sound-type [{:keys [json-params]}]
  (let [{:keys [id types]} json-params]
    (println (tx.pitch/tx-pitch-type {:type (keyword (str "calibration/" types))
                                      :id id}
                            lib.db/conn))
    {:status 200 :body "response"}))

(defn view-pitch-user
  [{:keys [query-params]}]
  (let [result (tx.pitch/get-pitch-by-user (:user query-params) lib.db/conn)]
    {:status 200
     :body result}))



 