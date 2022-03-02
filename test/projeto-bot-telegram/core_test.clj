(ns projeto-bot-telegram.core-test
  (:require [clojure.test :refer :all]
            [clojure.math.numeric-tower :as math]
            [projeto-bot-telegram.medegas :refer :all]))

(deftest detection-pitch-test
  (testing "Testando a função principal"
    (is (= 3223.0 (math/ceil (detection-pitch "./vazio.wav"))))))

