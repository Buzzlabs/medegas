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
                  {k (second value)}))))))

(defn new-pitch
  [{:keys [json-params]}]
  (let [{:keys [file user calibration]} json-params
        {:keys [url output]} file
        file-out (str "resources/" output)]
    (lib.detect/download-file url file-out)
    (lib.detect/oga-2-wav file-out)
    (let [result (lib.detect/medegas (str file-out ".wav") (results user))
          payload (merge user file)]
      (tx.pitch/tx-pitch (assoc payload
                                :result (str result)
                                :type (or calibration "default")
                                :tx-id (lib.db/create-tx-id 20)) lib.db/conn)
      {:status 200
       :body {:result result}})))

(defn view-pitch-user
  [{:keys [query-params]}]
  (let [result (tx.pitch/get-pitch-by-user (:user query-params) lib.db/conn)]
    {:status 200
     :body result}))



 