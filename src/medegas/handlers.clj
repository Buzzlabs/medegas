(ns medegas.handlers
  (:require [clojure.java.io :as io]

            [meinside.clogram :as cg]
            [meinside.clogram.helper :as cgh]))


#_(use 'clojure.pprint)

(defn handle-bot
  [bot update]
  (let [chat-id (get-in update [:message :chat :id])
        reply-to (get-in update [:message :message-id])
        text (get-in update [:message :text])
        file (get-in update [:message :voice :file-id])]
    #_(pprint file)
    ;; 'typing...'
    (let [result (cg/send-chat-action bot chat-id :typing)]
      (when (not (:ok result))
        (println "*** failed to send chat action:" (:reason-pharse result))))

    (when file
      (get-file bot file))
    (if (= text "/terminate") ;; DEV only
      (do
        (println ">>> received: /terminate")
        (cg/stop-polling-updates bot))
      (let [echoed-text (str "echo: " text)
            result (cg/send-message bot chat-id echoed-text
                                    :reply-to-message-id reply-to)]
        (when (not (:ok result))
          (println "*** failed to send message:" (:reason-phrase result)))))))

