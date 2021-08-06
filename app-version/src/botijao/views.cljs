(ns botijao.views
  (:require
   [re-frame.core :as rf]
   [botijao.events :as events]
   [botijao.routes :as routes]
   [botijao.subs :as subs]
   ))


;; home
(defn record-button []
  [:div
   [:p "Grave com o botao abaixo uma batida com madeira no centro do botijao"]
   [:button
    {:type     "button"
     :on-click #(rf/dispatch [::events/start-recording])}
    "Gravar"]])

(defn recording-play []
  (let [{:keys [url mime-type]} @(rf/subscribe [::subs/recording-audio])]
    (when url
      [:div
       [:p "Escute o som gravado:"]
       [:audio {:controls true}
        [:source {:src  url
                  :type mime-type}]]])))

(defn recording-pitch []
  (let [pitch @(rf/subscribe [::subs/recording-pitch])]
    (when pitch
      [:div
       [:p (str "Pitch Detectado: " pitch)]])))

(defn home-panel []
  (let [name (rf/subscribe [::subs/name])]
    [:div
     [:h1
      (str "Descubra quanto lhe resta de Gas no botijao")]
     [record-button]
     [recording-play]
     [recording-pitch]]))

(defmethod routes/panels :home-panel [] [home-panel])

;; main
(defn main-panel []
  (let [active-panel (rf/subscribe [::subs/active-panel])]
    (routes/panels @active-panel)))




(comment 
  [:div
   [:a {:on-click #(rf/dispatch [::events/navigate :about])}
    "go to About Page"]])