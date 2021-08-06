(ns botijao.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
 ::name
 (fn [db]
   (:name db)))

(rf/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))



(rf/reg-sub
 ::recording
 (fn [db]
   (:recording db)))

(rf/reg-sub
 ::recording-audio
 :<- [::recording]
 (fn [recording]
   (select-keys recording [:mime-type :url])))

(rf/reg-sub
 ::recording-pitch
 (fn [db]
   (:pitch db)))