(ns projeto-bot-telegram.core
  (:require
   [projeto-bot-telegram.config :as pbt]
   )
(:gen-class))

;; (def env 
;;   (load-config :resource "dev-config.edn"))

;; (def my-token 
;;   (-> env :my-token))

;; (def url-base 
;;   (-> env :test))

(defn -main 
  []
  (println pbt/my-token))

