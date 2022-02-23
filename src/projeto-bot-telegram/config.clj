(ns projeto-bot-telegram.config
  (:require
   [cprop.core :refer [load-config]]
   )
(:gen-class))

(def env 
  (load-config :resource "config.edn"))

(def bot-token 
  (-> env :bot-token))

(def url-base 
  (-> env :url-base))

(def download
  (-> env :download))