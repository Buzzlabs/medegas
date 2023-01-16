(ns medegas.handlers
  (:require [clojure.java.io :as io]

            [meinside.clogram :as cg]
            [medegas.libraries.pitch :as lib.pitch]))

(defn get-file
  [bot file-id]
  (let [{:keys [file-url file-path]} (:result (cg/get-file bot file-id))
        file-output (str "resources/" file-path)]
    (with-open [in (io/input-stream file-url)
                out (io/output-stream file-output)]
      (io/copy in out))
    file-output))

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
      (let [file-path (get-file bot file)
            _ (lib.pitch/ogg-2-wav file-path)
            medegas (lib.pitch/medegas (str file-path ".wav"))
            mede-text (str "seu gás esta aproximadamente em: " medegas)
            result (cg/send-message bot chat-id mede-text
                                    :reply-to-message-id reply-to)]
        (when (not (:ok result))
          (println "*** failed to send message:" (:reason-phrase result)))))
    (if (= text "/terminate") ;; DEV only
      (do
        (println ">>> received: /terminate")
        (cg/stop-polling-updates bot))
      #_(let [echoed-text (str "echo: " text)
            result (cg/send-message bot chat-id echoed-text
                                    :reply-to-message-id reply-to)]
        (when (not (:ok result))
          (println "*** failed to send message:" (:reason-phrase result)))))))

