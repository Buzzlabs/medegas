(ns medegas.libraries.transactions.pitch
  (:require
   [datomic.api :as d]
   [medegas.libraries.database :as lib.db]))

(defn tx-pitch
  [data conn]
  (let [{:keys [type user id result]} data]
    (d/transact conn [{:pitch/result result
                       :pitch/type type
                       :pitch/user user
                       :pitch/id id}])))

(defn tx-pitch-type
  [data conn] 
  (let [{:keys [id type]} data]
    (d/transact conn [{:db/id id
                       :pitch/type type}])))

(defn get-pitch-by-user
  [user conn]
  (d/q '[:find (pull ?e [*])
         :in $ ?user
         :where
         [?e :pitch/user ?user]] (d/db conn) user))

(defn get-result
  [user conn]
  (d/q '[:find ?e ?result ?type
         :in $ ?user
         :where
         [?e :pitch/user ?user]
         [?e :pitch/result ?result]
         (or [?e :pitch/type ?type]
             [?e :pitch/type ?type])] (d/db conn) user))