(defproject medegas "0.1.0-SNAPSHOT"
  :description "MedeGasBot"
  :url "https://github.com/Buzzlabs/medegas"
  :uberjar-name "medegas.jar"
  :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                   :creds :gpg}}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [com.github.st-h/TarsosDSP "2.4.1"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [dev.meinside/clogram "0.16.0"]
                 [com.amazonaws/aws-java-sdk-dynamodb "1.11.600"]

                 [com.datomic/datomic-pro "1.0.6165"]]
  :main medegas.core
  :aot  [medegas.core]
  :target-path "target/"
  :profiles {:uberjar {:aot          :all
                       :main         medegas.core
                       :uberjar-name "medegas.jar"}})
