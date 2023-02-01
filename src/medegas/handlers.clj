(ns medegas.handlers
  (:require
   [meinside.clogram :as cg]
   [medegas.api :as api]
   
   [clojure.string :as cstr]))

(defn- get-file
  [bot file-id]
  (let [{:keys [file-url file-path file-id file-unique-id]} (:result (cg/get-file bot file-id))]
    {:url file-url
     :output (str file-unique-id ".oga")}))

#_(use 'clojure.pprint)

(defn- when-not-result [result]
  (when-not (:ok result)
    (println "*** failed to send message:" (:reason-phrase result))))

(def msg-help (str "sou o medegas, um bot para te "
                   "ajudar no dia a dia, descobrir "
                   " a quantidade aproximada do gas de cozinha."
                   " pegue uma colher"
                   "- coloque o celular proximo ao botijão de gás \n"
                   "- bata com a colher não muito forte no botijão"))

(def sound (atom {}))

(defn help
  [bot chat-id]
  (let [result (cg/send-message bot chat-id msg-help)]
    (when-not-result result)))

(defn start [bot chat-id]
  (let [result (cg/send-message bot chat-id (str "Olá, bem vindo(a)! \n" msg-help))]
    (when-not-result result)))

(defn- select-sound [chats chat-id]
  (println chat-id)
  (-> (filterv (fn [[k v]]
                (= k (str chat-id))) @chats)
      (first)))

(defn- insert-sound [chats chat-id sound-id]
  (swap! chats assoc (str chat-id) sound-id))

(defn- make-resquest [bot file msg-id chat-id] 
  (let [file-payload (get-file bot file)
        user-payload {:id (str chat-id) :sound-id msg-id}
        payload (merge user-payload file-payload)]
    (api/pitch-detect payload)))

(defn audios [bot chat-id msg-id file]
  (let [{:keys [result id]} (make-resquest bot file msg-id chat-id)
        _ (println result id)
        mede-text (cond (string? result) result
                        (and (pos? result) (> 100 result)) (str "seu gás esta aproximadamente em: " result "% \n" 
                                                                    "Gostaria de usar como calibragem? \n"
                                                                    "basta /cheio se estiver cheio e "
                                                                    "/vazio se estiver vazio")
                        :else "ERROR: envie um audio novamente") 
        result (cg/send-message bot chat-id mede-text
                                :reply-to-message-id msg-id)]
    (insert-sound sound chat-id id)
    (when-not-result result)))

(defn types [bot chat-id types]
  (let [[_ sound] (select-sound sound chat-id)
        _ (api/sound-type {:id sound :types types :user chat-id})
        result (cg/send-message bot chat-id "salvo!")] 
    (when-not-result result)))

(defn handle-bot
  [bot update]
  (let [chat-id (get-in update [:message :chat :id])
        msg-id (get-in update [:message :message-id])
        text (get-in update [:message :text])
        file (get-in update [:message :voice :file-id])]
    (let [result (cg/send-chat-action bot chat-id :typing)]
      (when-not-result result))
    (cond 
      file (audios bot chat-id msg-id file) 
      (= text "/help") (help bot chat-id)
      (= text "/start") (start bot chat-id)
      (= text "/cheio") (types bot chat-id "full")
      (= text "/vazio") (types bot chat-id "empty")
      :else "mande novamente")))