(ns medegas.core
  (:gen-class)
  (:require [meinside.clogram :as cg]

            [medegas.handlers :as handlers]))

(def token (System/getenv "TOKEN_BOT"))

(def bot (cg/new-bot token :verbose? true))
(def interval 1)

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!")
  (.addShutdownHook (Runtime/getRuntime)
                    (Thread. #(do
                                (println ">>> terminating application...")
                                (cg/stop-polling-updates bot))))
  (cg/poll-updates bot interval handlers/handle-bot))

#_(-main)
