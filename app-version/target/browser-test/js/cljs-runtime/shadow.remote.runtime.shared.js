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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__52912,res){
var map__52914 = p__52912;
var map__52914__$1 = cljs.core.__destructure_map(map__52914);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__52915 = res;
var G__52915__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52915,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__52915);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52915__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__52915__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__52923 = arguments.length;
switch (G__52923) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__52928,msg,handlers,timeout_after_ms){
var map__52929 = p__52928;
var map__52929__$1 = cljs.core.__destructure_map(map__52929);
var runtime = map__52929__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52929__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___53024 = arguments.length;
var i__4819__auto___53025 = (0);
while(true){
if((i__4819__auto___53025 < len__4818__auto___53024)){
args__4824__auto__.push((arguments[i__4819__auto___53025]));

var G__53026 = (i__4819__auto___53025 + (1));
i__4819__auto___53025 = G__53026;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__52943,ev,args){
var map__52944 = p__52943;
var map__52944__$1 = cljs.core.__destructure_map(map__52944);
var runtime = map__52944__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52944__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__52946 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__52949 = null;
var count__52950 = (0);
var i__52951 = (0);
while(true){
if((i__52951 < count__52950)){
var ext = chunk__52949.cljs$core$IIndexed$_nth$arity$2(null,i__52951);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__53027 = seq__52946;
var G__53028 = chunk__52949;
var G__53029 = count__52950;
var G__53030 = (i__52951 + (1));
seq__52946 = G__53027;
chunk__52949 = G__53028;
count__52950 = G__53029;
i__52951 = G__53030;
continue;
} else {
var G__53031 = seq__52946;
var G__53032 = chunk__52949;
var G__53033 = count__52950;
var G__53034 = (i__52951 + (1));
seq__52946 = G__53031;
chunk__52949 = G__53032;
count__52950 = G__53033;
i__52951 = G__53034;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52946);
if(temp__5753__auto__){
var seq__52946__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52946__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52946__$1);
var G__53036 = cljs.core.chunk_rest(seq__52946__$1);
var G__53037 = c__4638__auto__;
var G__53038 = cljs.core.count(c__4638__auto__);
var G__53039 = (0);
seq__52946 = G__53036;
chunk__52949 = G__53037;
count__52950 = G__53038;
i__52951 = G__53039;
continue;
} else {
var ext = cljs.core.first(seq__52946__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__53040 = cljs.core.next(seq__52946__$1);
var G__53041 = null;
var G__53042 = (0);
var G__53043 = (0);
seq__52946 = G__53040;
chunk__52949 = G__53041;
count__52950 = G__53042;
i__52951 = G__53043;
continue;
} else {
var G__53044 = cljs.core.next(seq__52946__$1);
var G__53045 = null;
var G__53046 = (0);
var G__53047 = (0);
seq__52946 = G__53044;
chunk__52949 = G__53045;
count__52950 = G__53046;
i__52951 = G__53047;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq52934){
var G__52935 = cljs.core.first(seq52934);
var seq52934__$1 = cljs.core.next(seq52934);
var G__52936 = cljs.core.first(seq52934__$1);
var seq52934__$2 = cljs.core.next(seq52934__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52935,G__52936,seq52934__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__52964,p__52965){
var map__52966 = p__52964;
var map__52966__$1 = cljs.core.__destructure_map(map__52966);
var runtime = map__52966__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52966__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__52967 = p__52965;
var map__52967__$1 = cljs.core.__destructure_map(map__52967);
var msg = map__52967__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52967__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__52968 = cljs.core.deref(state_ref);
var map__52968__$1 = cljs.core.__destructure_map(map__52968);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52968__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52968__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__52970){
var map__52971 = p__52970;
var map__52971__$1 = cljs.core.__destructure_map(map__52971);
var runtime = map__52971__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__52973,msg){
var map__52974 = p__52973;
var map__52974__$1 = cljs.core.__destructure_map(map__52974);
var runtime = map__52974__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52974__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__52976,key,p__52977){
var map__52978 = p__52976;
var map__52978__$1 = cljs.core.__destructure_map(map__52978);
var state = map__52978__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52978__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__52979 = p__52977;
var map__52979__$1 = cljs.core.__destructure_map(map__52979);
var spec = map__52979__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52979__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__52980,key,spec){
var map__52981 = p__52980;
var map__52981__$1 = cljs.core.__destructure_map(map__52981);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52981__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__52983_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__52983_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__52984_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__52984_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__52985_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__52985_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__52986_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__52986_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__52987_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__52987_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__52989,key){
var map__52990 = p__52989;
var map__52990__$1 = cljs.core.__destructure_map(map__52990);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52990__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__52995,msg){
var map__52996 = p__52995;
var map__52996__$1 = cljs.core.__destructure_map(map__52996);
var runtime = map__52996__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__53003,p__53004){
var map__53005 = p__53003;
var map__53005__$1 = cljs.core.__destructure_map(map__53005);
var runtime = map__53005__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53005__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__53006 = p__53004;
var map__53006__$1 = cljs.core.__destructure_map(map__53006);
var msg = map__53006__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53006__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53006__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__53008 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__53010 = null;
var count__53011 = (0);
var i__53012 = (0);
while(true){
if((i__53012 < count__53011)){
var map__53016 = chunk__53010.cljs$core$IIndexed$_nth$arity$2(null,i__53012);
var map__53016__$1 = cljs.core.__destructure_map(map__53016);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53016__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__53119 = seq__53008;
var G__53120 = chunk__53010;
var G__53121 = count__53011;
var G__53122 = (i__53012 + (1));
seq__53008 = G__53119;
chunk__53010 = G__53120;
count__53011 = G__53121;
i__53012 = G__53122;
continue;
} else {
var G__53123 = seq__53008;
var G__53124 = chunk__53010;
var G__53125 = count__53011;
var G__53126 = (i__53012 + (1));
seq__53008 = G__53123;
chunk__53010 = G__53124;
count__53011 = G__53125;
i__53012 = G__53126;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53008);
if(temp__5753__auto__){
var seq__53008__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53008__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__53008__$1);
var G__53128 = cljs.core.chunk_rest(seq__53008__$1);
var G__53129 = c__4638__auto__;
var G__53130 = cljs.core.count(c__4638__auto__);
var G__53131 = (0);
seq__53008 = G__53128;
chunk__53010 = G__53129;
count__53011 = G__53130;
i__53012 = G__53131;
continue;
} else {
var map__53018 = cljs.core.first(seq__53008__$1);
var map__53018__$1 = cljs.core.__destructure_map(map__53018);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53018__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__53134 = cljs.core.next(seq__53008__$1);
var G__53135 = null;
var G__53136 = (0);
var G__53137 = (0);
seq__53008 = G__53134;
chunk__53010 = G__53135;
count__53011 = G__53136;
i__53012 = G__53137;
continue;
} else {
var G__53138 = cljs.core.next(seq__53008__$1);
var G__53139 = null;
var G__53140 = (0);
var G__53141 = (0);
seq__53008 = G__53138;
chunk__53010 = G__53139;
count__53011 = G__53140;
i__53012 = G__53141;
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
