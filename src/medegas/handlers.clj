(ns medegas.handlers
  (:require [clojure.java.io :as io]

            [meinside.clogram :as cg]
            [medegas.api :as api]))

(defn get-file
  [bot file-id]
  (let [{:keys [file-url file-path file-id file-unique-id]} (:result (cg/get-file bot file-id))
        file-output (str "resources/" file-path)]
    {:url file-url
     :output (str file-unique-id ".oga")}))

#_(use 'clojure.pprint)

(defn handle-bot
  [bot update]
  (let [chat-id (get-in update [:message :chat :id])
        msg-id (get-in update [:message :message-id])
        text (get-in update [:message :text])
        file (get-in update [:message :voice :file-id])]
    #_(pprint file)
    ;; 'typing...'
    (let [result (cg/send-chat-action bot chat-id :typing)]
      (when (not (:ok result))
        (println "*** failed to send chat action:" (:reason-pharse result))))

    (when file
      (let [file-payload (get-file bot file)
            user-payload {:id (str chat-id) :type "telegram"}
            payload {:user user-payload :file file-payload}
            response (api/pitch-detect payload)
            result (get-in response ["result"]) 
            mede-text (cond (string? response) response
                            (and (pos? result) (> 100 result)) (str "seu gás esta aproximadamente em: " result "%")
                            :else "ERROR: envie um audio novamente")
            result (cg/send-message bot chat-id mede-text
                                    :reply-to-message-id msg-id)]
        (when (not (:ok result))
          (println "*** failed to send message:" (:reason-phrase result)))))))