(ns medegas.handlers
  (:require [clojure.java.io :as io]

            [meinside.clogram :as cg]
            [medegas.api :as api]))

(defn get-file
  [bot file-id]
  (let [{:keys [file-url file-path]} (:result (cg/get-file bot file-id))
        file-output (str "resources/" file-path)]
    (with-open [in (io/input-stream file-url)
                out (io/output-stream file-output)]
      (io/copy in out))
    file-output))

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
        reply-to (get-in update [:message :message-id])
        text (get-in update [:message :text])
        file (get-in update [:message :voice :file-id])]
    #_(pprint file)
    ;; 'typing...'
    (let [result (cg/send-chat-action bot chat-id :typing)]
      (println ";;;" chat-id)
      (when (not (:ok result))
        (println "*** failed to send chat action:" (:reason-pharse result))))

    (when file
      (let [file-payload (get-file bot file)
            user-payload {:id reply-to :type "telegram"}
            payload {:user user-payload :file file-payload}
            response (api/pitch-detect payload)
            mede-text (str "seu gás esta aproximadamente em: " (get-in response ["result"]) "%")
            result (cg/send-message bot chat-id mede-text
                                    :reply-to-message-id reply-to)]
        (when (not (:ok result))
          (println "*** failed to send message:" (:reason-phrase result)))))))

