(ns medegas.libraries.database
  (:require [datomic.api :as d]))


(def db-uri "datomic:dev://localhost:4334/medegas")

(defn create-db [] (d/create-database db-uri))
(defn delete-db [] (d/delete-database db-uri))

#_(create-db)

(def conn (d/connect db-uri))


(defn create-tx-id
  ([n]
   (create-tx-id n [(rand-int 9)]))
  ([n id]
   (if (= n 1)
     (apply str id)
     (->> (apply merge id [(rand-int 9)])
          (create-tx-id (- n 1))))))
