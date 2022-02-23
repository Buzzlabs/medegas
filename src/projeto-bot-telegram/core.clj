(ns projeto-bot-telegram.core
  (:require
   [clojure.core.async :refer [<!!]]
   [clojure.string :as str]
   [projeto-bot-telegram.config :as pbt]
   [morse.handlers :as h]
   [morse.polling :as p]
   [morse.api :as t]
   [clj-http.client :as client]
   [clojure.data.json :as json])
(:gen-class))

(defn copy-uri-to-file [uri file]
  (with-open [in (clojure.java.io/input-stream uri)
              out (clojure.java.io/output-stream (str "resources/" file ".wav" ))]
    (clojure.java.io/copy in out)))

(h/defhandler handler
  (h/command-fn "start" (fn [{{id :id :as chat} :chat}]
                          (println "Bot se conectou a um novo chat" chat)
                          (t/send-text pbt/bot-token id "Bem Vindo!")))
  
  (h/command-fn "help" (fn [{{ id :id :as chat } :chat}]
                           (println "commando help requisitado" chat)
                           (t/send-text pbt/bot-token id "Usando um objeto de madeira, grave o audio do seu botijão de gás")))
  
  (h/message-fn  (fn [{{id :id} :chat :as message}]
                   (if (contains? message :voice)
                     (do (println "mensagem interceptada")
                         (let [get-file ((client/get 
                                          (str pbt/url-base pbt/bot-token "/getFile?file_id="
                                               ((get message :voice) :file_id))) :body)
                               file-path (get 
                                          ((json/read-str get-file :key-fn keyword) :result) :file_path)]
                           (copy-uri-to-file (str pbt/download pbt/bot-token "/" file-path) file-path)
                         ))
                     (do (println "mensagem interceptada " message)
                         (t/send-text pbt/bot-token id "envie o audio do seu gás"))))))

(defn -main 
  []
  (when (str/blank? pbt/bot-token)
    (println "Token em branco ou inválido"))
  (println "Começando o projeto")
  (<!! (p/start pbt/bot-token handler)))
;; => Syntax error compiling at (src/projeto-bot-telegram/core.clj:40:1).
;;    Unable to resolve symbol: defn in this context


