(ns medegas.api
  (:require
   [clj-http.client :as client]
   [clojure.data.json :as json]))

(def base-url (System/getenv "BASE_URL"))

#_(use 'clojure.pprint)

(defn pitch-detect
  [payload]
  (let [url (str base-url "pitches")
        response (client/post url {:body (json/write-str payload)
                                   :content-type :json})]
    (json/read-str (:body response))))

(defn historic-pitch
  [id]
  (let [url (str base-url "pitches?user=" id)
        response (client/get url)]
    (json/read-str (:body response))))

