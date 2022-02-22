(ns projeto-bot-telegram.config
  (:require
   [cprop.core :refer [load-config]]
   )
(:gen-class))

(def env 
  (load-config :resource "config.edn"))

(def my-token 
  (-> env :my-token))

(def url-base 
  (-> env :test))