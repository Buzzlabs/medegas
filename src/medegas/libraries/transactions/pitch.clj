(ns medegas.libraries.transactions.pitch
  (:require
   [datomic.api :as d]
   [medegas.libraries.database :as lib.db]))

(defn tx-pitch
  [data conn]
  (let [{:keys [tx-id id result type sound-id]} data]
    (d/transact conn [[:db/add tx-id :pitch/id (java.util.UUID/randomUUID)]
                      [:db/add tx-id :pitch/user id]
                      [:db/add tx-id :pitch/type (keyword (str "calibration/" type))]
                      [:db/add tx-id :pitch/result result]
                      [:db/add tx-id :pitch/sound-id sound-id]])))

(defn tx-pitch-type
  [data conn]
  (let [{:keys [tx-id type user sound]} data
        [_ pitch-id] (first (d/q '[:find ?e ?id
                                   :in $ ?user ?sound
                                   :where
                                   [?e :pitch/user ?user]
                                   [?e :pitch/id ?id]
                                   [?e :pitch/sound-id ?sound]] (d/db lib.db/conn) user sound))]
    (d/transact conn [[:db/add tx-id :pitch/id pitch-id]
                      [:db/add tx-id :pitch/sound-id sound]
                      [:db/add tx-id :pitch/type (keyword (str "calibration/" type))]])))

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
