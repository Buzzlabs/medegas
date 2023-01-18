(ns medegas.libraries.transactions.pitch
  (:require
   [datomic.api :as d]))

(defn tx-pitch
  [{:keys [tx-id id result type conn]}]
  (d/transact conn [[:db/add tx-id :pitch/id (java.util.UUID/randomUUID)]
                    [:db/add tx-id :pitch/user id]
                    [:db/add tx-id :pitch/type-user (keyword type)]
                    [:db/add tx-id :pitch/result result]]))

(defn get-pitch-by-user
  [user conn]
  (d/q '[:find (pull ?e [*])
         :in $ ?user
         :where
         [?e :pitch/user ?user]] (d/db conn) user))
