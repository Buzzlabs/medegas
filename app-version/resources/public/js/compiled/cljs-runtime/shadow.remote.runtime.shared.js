goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__40293,res){
var map__40294 = p__40293;
var map__40294__$1 = cljs.core.__destructure_map(map__40294);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__40326 = res;
var G__40326__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40326,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__40326);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40326__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__40326__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__40334 = arguments.length;
switch (G__40334) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__40337,msg,handlers,timeout_after_ms){
var map__40339 = p__40337;
var map__40339__$1 = cljs.core.__destructure_map(map__40339);
var runtime = map__40339__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40339__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___40463 = arguments.length;
var i__4819__auto___40464 = (0);
while(true){
if((i__4819__auto___40464 < len__4818__auto___40463)){
args__4824__auto__.push((arguments[i__4819__auto___40464]));

var G__40466 = (i__4819__auto___40464 + (1));
i__4819__auto___40464 = G__40466;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__40345,ev,args){
var map__40346 = p__40345;
var map__40346__$1 = cljs.core.__destructure_map(map__40346);
var runtime = map__40346__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40346__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__40347 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__40350 = null;
var count__40351 = (0);
var i__40352 = (0);
while(true){
if((i__40352 < count__40351)){
var ext = chunk__40350.cljs$core$IIndexed$_nth$arity$2(null,i__40352);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__40475 = seq__40347;
var G__40476 = chunk__40350;
var G__40477 = count__40351;
var G__40478 = (i__40352 + (1));
seq__40347 = G__40475;
chunk__40350 = G__40476;
count__40351 = G__40477;
i__40352 = G__40478;
continue;
} else {
var G__40479 = seq__40347;
var G__40480 = chunk__40350;
var G__40481 = count__40351;
var G__40482 = (i__40352 + (1));
seq__40347 = G__40479;
chunk__40350 = G__40480;
count__40351 = G__40481;
i__40352 = G__40482;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40347);
if(temp__5753__auto__){
var seq__40347__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40347__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40347__$1);
var G__40486 = cljs.core.chunk_rest(seq__40347__$1);
var G__40487 = c__4638__auto__;
var G__40488 = cljs.core.count(c__4638__auto__);
var G__40489 = (0);
seq__40347 = G__40486;
chunk__40350 = G__40487;
count__40351 = G__40488;
i__40352 = G__40489;
continue;
} else {
var ext = cljs.core.first(seq__40347__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__40491 = cljs.core.next(seq__40347__$1);
var G__40492 = null;
var G__40493 = (0);
var G__40494 = (0);
seq__40347 = G__40491;
chunk__40350 = G__40492;
count__40351 = G__40493;
i__40352 = G__40494;
continue;
} else {
var G__40495 = cljs.core.next(seq__40347__$1);
var G__40496 = null;
var G__40497 = (0);
var G__40498 = (0);
seq__40347 = G__40495;
chunk__40350 = G__40496;
count__40351 = G__40497;
i__40352 = G__40498;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq40341){
var G__40342 = cljs.core.first(seq40341);
var seq40341__$1 = cljs.core.next(seq40341);
var G__40343 = cljs.core.first(seq40341__$1);
var seq40341__$2 = cljs.core.next(seq40341__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40342,G__40343,seq40341__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__40358,p__40359){
var map__40360 = p__40358;
var map__40360__$1 = cljs.core.__destructure_map(map__40360);
var runtime = map__40360__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__40361 = p__40359;
var map__40361__$1 = cljs.core.__destructure_map(map__40361);
var msg = map__40361__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40361__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__40362 = cljs.core.deref(state_ref);
var map__40362__$1 = cljs.core.__destructure_map(map__40362);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40362__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40362__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__40365){
var map__40366 = p__40365;
var map__40366__$1 = cljs.core.__destructure_map(map__40366);
var runtime = map__40366__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40366__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__40370,msg){
var map__40371 = p__40370;
var map__40371__$1 = cljs.core.__destructure_map(map__40371);
var runtime = map__40371__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40371__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__40383,key,p__40384){
var map__40388 = p__40383;
var map__40388__$1 = cljs.core.__destructure_map(map__40388);
var state = map__40388__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40388__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__40389 = p__40384;
var map__40389__$1 = cljs.core.__destructure_map(map__40389);
var spec = map__40389__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40389__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__40398,key,spec){
var map__40399 = p__40398;
var map__40399__$1 = cljs.core.__destructure_map(map__40399);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40399__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__40407_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__40407_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__40408_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__40408_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__40409_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__40409_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__40410_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__40410_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__40411_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__40411_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__40420,key){
var map__40421 = p__40420;
var map__40421__$1 = cljs.core.__destructure_map(map__40421);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40421__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__40424,msg){
var map__40425 = p__40424;
var map__40425__$1 = cljs.core.__destructure_map(map__40425);
var runtime = map__40425__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40425__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__40428,p__40429){
var map__40430 = p__40428;
var map__40430__$1 = cljs.core.__destructure_map(map__40430);
var runtime = map__40430__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__40431 = p__40429;
var map__40431__$1 = cljs.core.__destructure_map(map__40431);
var msg = map__40431__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40431__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40431__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__40433 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__40435 = null;
var count__40436 = (0);
var i__40437 = (0);
while(true){
if((i__40437 < count__40436)){
var map__40451 = chunk__40435.cljs$core$IIndexed$_nth$arity$2(null,i__40437);
var map__40451__$1 = cljs.core.__destructure_map(map__40451);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40451__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__40516 = seq__40433;
var G__40517 = chunk__40435;
var G__40518 = count__40436;
var G__40519 = (i__40437 + (1));
seq__40433 = G__40516;
chunk__40435 = G__40517;
count__40436 = G__40518;
i__40437 = G__40519;
continue;
} else {
var G__40520 = seq__40433;
var G__40521 = chunk__40435;
var G__40522 = count__40436;
var G__40523 = (i__40437 + (1));
seq__40433 = G__40520;
chunk__40435 = G__40521;
count__40436 = G__40522;
i__40437 = G__40523;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40433);
if(temp__5753__auto__){
var seq__40433__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40433__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40433__$1);
var G__40524 = cljs.core.chunk_rest(seq__40433__$1);
var G__40525 = c__4638__auto__;
var G__40526 = cljs.core.count(c__4638__auto__);
var G__40527 = (0);
seq__40433 = G__40524;
chunk__40435 = G__40525;
count__40436 = G__40526;
i__40437 = G__40527;
continue;
} else {
var map__40454 = cljs.core.first(seq__40433__$1);
var map__40454__$1 = cljs.core.__destructure_map(map__40454);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40454__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__40530 = cljs.core.next(seq__40433__$1);
var G__40531 = null;
var G__40532 = (0);
var G__40533 = (0);
seq__40433 = G__40530;
chunk__40435 = G__40531;
count__40436 = G__40532;
i__40437 = G__40533;
continue;
} else {
var G__40534 = cljs.core.next(seq__40433__$1);
var G__40535 = null;
var G__40536 = (0);
var G__40537 = (0);
seq__40433 = G__40534;
chunk__40435 = G__40535;
count__40436 = G__40536;
i__40437 = G__40537;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
