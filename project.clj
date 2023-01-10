(defproject medegas "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME" 
  :dependencies [[org.clojure/clojure "1.11.1"]]
  :main ^:skip-aot medegas.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
