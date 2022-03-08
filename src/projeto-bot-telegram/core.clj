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
                           #_(t/send-text pbt/bot-token id (str "porcentagem: " value "%"))
                           (cond
                             (and (>= value 0) (< value 12.5)) (t/send-photo pbt/bot-token id (io/file (io/resource "img/vazio.png")))
                             (and (>= value 12.5) (< value 25)) (t/send-text pbt/bot-token id (str "porcentagem: " 25 "%"))
                             (and (>= value 25) (< value 37.5)) (t/send-photo pbt/bot-token id (io/file (io/resource "img/meiovazio.png")))
                             (and (>= value 37.5) (< value 50)) (t/send-text pbt/bot-token id (str "porcentagem: " 50 "%"))
                             (and (>= value 50) (< value 62.5)) (t/send-text pbt/bot-token id (str "porcentagem: " 62.5 "%"))
                             (and (>= value 62.5) (< value 75)) (t/send-photo pbt/bot-token id (io/file (io/resource "img/meiocheio.png")))
                             (and (>= value 75.5) (< value 87.5)) (t/send-text pbt/bot-token id (str "porcentagem: " 87.5 "%"))
                             (and (>= value 87.5) (<= value 100)) (t/send-photo pbt/bot-token id (io/file (io/resource "img/cheio.png")))
                             :else  (t/send-text pbt/bot-token id "envie o audio novamente"))
                           ;;(io/delete-file (str "resources/" file-path))
                           ;;(io/delete-file (str "resources/" file-path ".wav"))
                           (println file-path)
                           (println value)
                           ))
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


