(ns medegas.libraries.transactions.pitch
  (:require
   [datomic.api :as d]))

(defn tx-pitch
  [{:keys [tx-id id result type calibration calibration-type conn]}]
  (d/transact conn [[:db/add tx-id :pitch/id (java.util.UUID/randomUUID)]
                    [:db/add tx-id :pitch/user id]
                    [:db/add tx-id :pitch/type (keyword type)]
                    [:db/add tx-id :pitch/result result]
                    [:db/add tx-id :pitch/histogram calibration]
                    [:db/add tx-id :pitch/calibration-type calibration-type]]))

(defn get-pitch-by-user
  [user conn]
  (d/q '[:find (pull ?e [*])
         :in $ ?user
         :where
         [?e :pitch/user ?user]] (d/db conn) user))

(defn get-histogram
  [user conn]
  (d/q '[:find ?e ?histogram
         :in $ ?user
         :where
         [?e :pitch/user ?user]
         [?e :pitch/histogram ?histogram]] (d/db conn) user))
