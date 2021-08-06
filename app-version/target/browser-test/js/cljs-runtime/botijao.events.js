goog.provide('botijao.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("botijao.events","initialize-db","botijao.events/initialize-db",18423311),(function (_,___$1){
return botijao.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("botijao.events","navigate","botijao.events/navigate",710343222),(function (_,p__58424){
var vec__58426 = p__58424;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58426,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58426,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),handler], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("botijao.events","set-active-panel","botijao.events/set-active-panel",-892789479),(function (p__58432,p__58433){
var map__58437 = p__58432;
var map__58437__$1 = cljs.core.__destructure_map(map__58437);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58437__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__58438 = p__58433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58438,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58438,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
}));

//# sourceMappingURL=botijao.events.js.map
