(ns medegas.service
  (:require [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.body-params :as body-params]
            [ring.util.response :as ring-resp]
            
            [medegas.libraries.database :as lib.db]
            
            [medegas.handlers.pitch :as h.pitch]
            
            [medegas.libraries.schemas.pitch :as schema.pitch]))

(defn about-page
  [request]
  (ring-resp/response (format "Clojure %s - served from %s"
                              (clojure-version)
                              (route/url-for ::about-page))))

(defn home-page
  [request]
  (ring-resp/response "Hello World!"))

(def common-interceptors [(body-params/body-params) http/json-body])

(def routes #{["/" :get (conj common-interceptors `home-page)]
              ["/about" :get (conj common-interceptors `about-page)]
              ["/pitches" :post (conj common-interceptors `h.pitch/new-pitch)]
              ["/pitches/types" :post (conj common-interceptors `h.pitch/sound-type)]
              ["/pitches" :get (conj common-interceptors `h.pitch/view-pitch-user)]})

(defn startup
  []
  (schema.pitch/tx-schema lib.db/conn))

#_(use 'clojure.pprint)
#_(pprint (startup))

(def service {:env :prod
              ::http/routes routes
              ::http/resource-path "/public"
              ::http/type :jetty
              ::http/host "0.0.0.0"
              ::http/port 3000
              ::http/container-options {:h2c? true
                                        :h2? false
                                        :ssl? false}})
