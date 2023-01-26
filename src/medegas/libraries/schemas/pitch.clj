(ns medegas.libraries.schemas.pitch
  (:require [datomic.api :as d]))

(def schema
  [{:db/ident :pitch/id
    :db/valueType :db.type/uuid
    :db/unique :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident :pitch/user
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc "id from chat"}
   {:db/ident :pitch/sound-id
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one}
   {:db/ident :pitch/result
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one
    :db/doc "result from pitch detection"} 
   {:db/ident :pitch/type
    :db/valueType :db.type/keyword
    :db/cardinality :db.cardinality/one
    :db/doc ":calibration/full :calibration/empty :calibration/default"}])

(defn tx-schema [conn]
  (d/transact conn schema))