goog.provide('botijao.core');
botijao.core.dev_setup = (function botijao$core$dev_setup(){
if(botijao.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
botijao.core.mount_root = (function botijao$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [botijao.views.main_panel], null),root_el);
});
botijao.core.init = (function botijao$core$init(){
botijao.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.events","initialize-db","botijao.events/initialize-db",18423311)], null));

botijao.core.dev_setup();

return botijao.core.mount_root();
});

//# sourceMappingURL=botijao.core.js.map
