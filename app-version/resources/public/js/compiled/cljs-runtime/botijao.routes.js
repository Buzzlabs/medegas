goog.provide('botijao.routes');
if((typeof botijao !== 'undefined') && (typeof botijao.routes !== 'undefined') && (typeof botijao.routes.panels !== 'undefined')){
} else {
botijao.routes.panels = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__34190 = cljs.core.get_global_hierarchy;
return (fexpr__34190.cljs$core$IFn$_invoke$arity$0 ? fexpr__34190.cljs$core$IFn$_invoke$arity$0() : fexpr__34190.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("botijao.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
botijao.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
botijao.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 1, ["",new cljs.core.Keyword(null,"home","home",-74557309)], null)], null));
botijao.routes.parse = (function botijao$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(botijao.routes.routes),url);
});
botijao.routes.url_for = (function botijao$routes$url_for(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34200 = arguments.length;
var i__4819__auto___34201 = (0);
while(true){
if((i__4819__auto___34201 < len__4818__auto___34200)){
args__4824__auto__.push((arguments[i__4819__auto___34201]));

var G__34202 = (i__4819__auto___34201 + (1));
i__4819__auto___34201 = G__34202;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return botijao.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(botijao.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(botijao.routes.routes)], null),args));
}));

(botijao.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(botijao.routes.url_for.cljs$lang$applyTo = (function (seq34191){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34191));
}));

botijao.routes.dispatch = (function botijao$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.events","set-active-panel","botijao.events/set-active-panel",-892789479),panel], null));
});
if((typeof botijao !== 'undefined') && (typeof botijao.routes !== 'undefined') && (typeof botijao.routes.history !== 'undefined')){
} else {
botijao.routes.history = pushy.core.pushy(botijao.routes.dispatch,botijao.routes.parse);
}
botijao.routes.navigate_BANG_ = (function botijao$routes$navigate_BANG_(handler){
return botijao.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,botijao.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0)));
});
botijao.routes.start_BANG_ = (function botijao$routes$start_BANG_(){
return botijao.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return botijao.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=botijao.routes.js.map
