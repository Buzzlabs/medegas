(defproject medegas "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                   :creds :gpg}}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [com.github.st-h/TarsosDSP "2.4.1"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [dev.meinside/clogram "0.15.0"]
                 
                 [com.datomic/datomic-pro "1.0.6527"]

                 [com.github.st-h/TarsosDSP "2.4.1"]
                 [org.clojure/math.numeric-tower "0.0.4"]]
  :main ^:skip-aot medegas.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
