(ns joaoapel.core
	(:gen-class)
	(
	:require
		[joaoapel.api :as mg-api] 
		[ring.adapter.jetty :as jetty]
	)
)


(defn -main
  []
  (mg-api/start-server 9090))
