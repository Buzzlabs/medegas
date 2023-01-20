(ns medegas.api
  (:require
   [clj-http.client :as client]
   [clojure.data.json :as json]))

(def base-url (System/getenv "BASE_URL"))

#_(use 'clojure.pprint)

(defn resp->json [response] (json/read-str (:body response)))

(defn pitch-detect
  [payload]
  (let [url (str base-url "pitches")]
    (try (-> (client/post url {:body (json/write-str payload)
                               :content-type :json})
             (resp->json))
         (catch Exception e 
           "servico indisponivel no momento"))))

(defn historic-pitch
  [id]
  (let [url (str base-url "pitches?user=" id)
        response (client/get url)]
    (json/read-str (:body response))))

