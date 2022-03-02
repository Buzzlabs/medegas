(ns projeto-bot-telegram.core
  (:require
   [clojure.core.async :refer [<!!]]
   [clojure.string :as str]
   [projeto-bot-telegram.config :as pbt]
   [projeto-bot-telegram.medegas :refer [medegas ogg-2-wav]]
   [morse.handlers :as h]
   [morse.polling :as p]
   [morse.api :as t]
   [clj-http.client :as client]
   [clojure.data.json :as json]
   [clojure.java.io :as io])
(:gen-class))

(defn copy-uri-to-file [uri file]
  (with-open [in (io/input-stream uri)
              out (io/output-stream (str "resources/" file))]
    (io/copy in out)))

(h/defhandler handler
  (h/command-fn "start" (fn [{{id :id :as chat} :chat}]
                          (println "Bot se conectou a um novo chat" chat)
                          (t/send-text pbt/bot-token id "Bem Vindo, ao Olhaogas! Este bot tem como objetivo auxiliá-lo a entender como se encontra a situação do seu botijão de gás. Será que ele está cheio ou vazio? Utilizando uma colher de madeira mande audio com som gerado no seu botijão.")))
  
  (h/command-fn "help" (fn [{{ id :id :as chat } :chat}]
                           (println "commando help requisitado" chat)
                           (t/send-text pbt/bot-token id "Usando uma colher de madeira, envie um audio com o som gerado do seu botijão de gás.")))
  
  (h/message-fn  (fn [{{id :id} :chat :as message}]
                   (if (contains? message :voice)
                     (do (println "mensagem interceptada")
                         (let [get-file ((client/get
                                          (str pbt/url-base pbt/bot-token "/getFile?file_id="
                                               ((get message :voice) :file_id))) :body)
                               file-path (get
                                          ((json/read-str get-file :key-fn keyword) :result) :file_path)
                               _ (copy-uri-to-file (str pbt/download pbt/bot-token "/" file-path) file-path)
                               _ (ogg-2-wav (str "resources/" file-path))
                               send-photo (partial t/send-photo pbt/bot-token id)
                               value (medegas (str "resources/" file-path ".wav"))]
                           (cond
                             (>= value 75) (send-photo (io/file (io/resource "img/cheio.png")))
                             (>= value 50) (send-photo (io/file (io/resource "img/meiocheio.png")))
                             (>= value 25) (send-photo (io/file (io/resource "img/meiovazio.png")))
                             (>= value 0) (send-photo (io/file (io/resource "img/vazio.png")))
                             :else  (t/send-text pbt/bot-token id "mande o audio novamente"))
                           (io/delete-file (str "resources/" file-path))
                           (io/delete-file (str "resources/" file-path ".wav"))))
                     (do (println "mensagem interceptada " message)
                         (t/send-text pbt/bot-token id "envie o audio do seu botijão de gás"))))))

(defn -main 
  []
  (when (str/blank? pbt/bot-token)
    (println "Token em branco ou inválido"))
  (println "Começando o projeto")
  (<!! (p/start pbt/bot-token handler)))
;; => Syntax error compiling at (src/projeto-bot-telegram/core.clj:40:1).
;;    Unable to resolve symbol: defn in this context


