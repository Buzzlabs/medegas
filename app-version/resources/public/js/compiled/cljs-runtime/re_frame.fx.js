goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__45841 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__45842 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__45842);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___45997 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___45997)){
var new_db_45998 = temp__5753__auto___45997;
var fexpr__45845_45999 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__45845_45999.cljs$core$IFn$_invoke$arity$1 ? fexpr__45845_45999.cljs$core$IFn$_invoke$arity$1(new_db_45998) : fexpr__45845_45999.call(null,new_db_45998));
} else {
}

var seq__45847 = cljs.core.seq(effects_without_db);
var chunk__45848 = null;
var count__45849 = (0);
var i__45850 = (0);
while(true){
if((i__45850 < count__45849)){
var vec__45864 = chunk__45848.cljs$core$IIndexed$_nth$arity$2(null,i__45850);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45864,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45864,(1),null);
var temp__5751__auto___46000 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___46000)){
var effect_fn_46001 = temp__5751__auto___46000;
(effect_fn_46001.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46001.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46001.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46002 = seq__45847;
var G__46003 = chunk__45848;
var G__46004 = count__45849;
var G__46005 = (i__45850 + (1));
seq__45847 = G__46002;
chunk__45848 = G__46003;
count__45849 = G__46004;
i__45850 = G__46005;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45847);
if(temp__5753__auto__){
var seq__45847__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45847__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45847__$1);
var G__46006 = cljs.core.chunk_rest(seq__45847__$1);
var G__46007 = c__4638__auto__;
var G__46008 = cljs.core.count(c__4638__auto__);
var G__46009 = (0);
seq__45847 = G__46006;
chunk__45848 = G__46007;
count__45849 = G__46008;
i__45850 = G__46009;
continue;
} else {
var vec__45868 = cljs.core.first(seq__45847__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45868,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45868,(1),null);
var temp__5751__auto___46010 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___46010)){
var effect_fn_46011 = temp__5751__auto___46010;
(effect_fn_46011.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46011.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46011.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46012 = cljs.core.next(seq__45847__$1);
var G__46013 = null;
var G__46014 = (0);
var G__46015 = (0);
seq__45847 = G__46012;
chunk__45848 = G__46013;
count__45849 = G__46014;
i__45850 = G__46015;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__29508__auto___46016 = re_frame.interop.now();
var duration__29509__auto___46017 = (end__29508__auto___46016 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29509__auto___46017,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__29508__auto___46016);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__45841);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___46018 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___46018)){
var new_db_46019 = temp__5753__auto___46018;
var fexpr__45874_46020 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__45874_46020.cljs$core$IFn$_invoke$arity$1 ? fexpr__45874_46020.cljs$core$IFn$_invoke$arity$1(new_db_46019) : fexpr__45874_46020.call(null,new_db_46019));
} else {
}

var seq__45875 = cljs.core.seq(effects_without_db);
var chunk__45876 = null;
var count__45877 = (0);
var i__45878 = (0);
while(true){
if((i__45878 < count__45877)){
var vec__45886 = chunk__45876.cljs$core$IIndexed$_nth$arity$2(null,i__45878);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45886,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45886,(1),null);
var temp__5751__auto___46021 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___46021)){
var effect_fn_46022 = temp__5751__auto___46021;
(effect_fn_46022.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46022.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46022.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46023 = seq__45875;
var G__46024 = chunk__45876;
var G__46025 = count__45877;
var G__46026 = (i__45878 + (1));
seq__45875 = G__46023;
chunk__45876 = G__46024;
count__45877 = G__46025;
i__45878 = G__46026;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45875);
if(temp__5753__auto__){
var seq__45875__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45875__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45875__$1);
var G__46027 = cljs.core.chunk_rest(seq__45875__$1);
var G__46028 = c__4638__auto__;
var G__46029 = cljs.core.count(c__4638__auto__);
var G__46030 = (0);
seq__45875 = G__46027;
chunk__45876 = G__46028;
count__45877 = G__46029;
i__45878 = G__46030;
continue;
} else {
var vec__45894 = cljs.core.first(seq__45875__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45894,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45894,(1),null);
var temp__5751__auto___46031 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___46031)){
var effect_fn_46032 = temp__5751__auto___46031;
(effect_fn_46032.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46032.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46032.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46033 = cljs.core.next(seq__45875__$1);
var G__46034 = null;
var G__46035 = (0);
var G__46036 = (0);
seq__45875 = G__46033;
chunk__45876 = G__46034;
count__45877 = G__46035;
i__45878 = G__46036;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__45898){
var map__45899 = p__45898;
var map__45899__$1 = cljs.core.__destructure_map(map__45899);
var effect = map__45899__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45899__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45899__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__45903 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45904 = null;
var count__45905 = (0);
var i__45906 = (0);
while(true){
if((i__45906 < count__45905)){
var effect = chunk__45904.cljs$core$IIndexed$_nth$arity$2(null,i__45906);
re_frame.fx.dispatch_later(effect);


var G__46037 = seq__45903;
var G__46038 = chunk__45904;
var G__46039 = count__45905;
var G__46040 = (i__45906 + (1));
seq__45903 = G__46037;
chunk__45904 = G__46038;
count__45905 = G__46039;
i__45906 = G__46040;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45903);
if(temp__5753__auto__){
var seq__45903__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45903__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45903__$1);
var G__46041 = cljs.core.chunk_rest(seq__45903__$1);
var G__46042 = c__4638__auto__;
var G__46043 = cljs.core.count(c__4638__auto__);
var G__46044 = (0);
seq__45903 = G__46041;
chunk__45904 = G__46042;
count__45905 = G__46043;
i__45906 = G__46044;
continue;
} else {
var effect = cljs.core.first(seq__45903__$1);
re_frame.fx.dispatch_later(effect);


var G__46045 = cljs.core.next(seq__45903__$1);
var G__46046 = null;
var G__46047 = (0);
var G__46048 = (0);
seq__45903 = G__46045;
chunk__45904 = G__46046;
count__45905 = G__46047;
i__45906 = G__46048;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__45928 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__45929 = null;
var count__45930 = (0);
var i__45931 = (0);
while(true){
if((i__45931 < count__45930)){
var vec__45945 = chunk__45929.cljs$core$IIndexed$_nth$arity$2(null,i__45931);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45945,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45945,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___46049 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___46049)){
var effect_fn_46050 = temp__5751__auto___46049;
(effect_fn_46050.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46050.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46050.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__46051 = seq__45928;
var G__46052 = chunk__45929;
var G__46053 = count__45930;
var G__46054 = (i__45931 + (1));
seq__45928 = G__46051;
chunk__45929 = G__46052;
count__45930 = G__46053;
i__45931 = G__46054;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45928);
if(temp__5753__auto__){
var seq__45928__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45928__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45928__$1);
var G__46055 = cljs.core.chunk_rest(seq__45928__$1);
var G__46056 = c__4638__auto__;
var G__46057 = cljs.core.count(c__4638__auto__);
var G__46058 = (0);
seq__45928 = G__46055;
chunk__45929 = G__46056;
count__45930 = G__46057;
i__45931 = G__46058;
continue;
} else {
var vec__45949 = cljs.core.first(seq__45928__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45949,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45949,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___46059 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___46059)){
var effect_fn_46060 = temp__5751__auto___46059;
(effect_fn_46060.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46060.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46060.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__46061 = cljs.core.next(seq__45928__$1);
var G__46062 = null;
var G__46063 = (0);
var G__46064 = (0);
seq__45928 = G__46061;
chunk__45929 = G__46062;
count__45930 = G__46063;
i__45931 = G__46064;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__45954 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45955 = null;
var count__45956 = (0);
var i__45957 = (0);
while(true){
if((i__45957 < count__45956)){
var event = chunk__45955.cljs$core$IIndexed$_nth$arity$2(null,i__45957);
re_frame.router.dispatch(event);


var G__46065 = seq__45954;
var G__46066 = chunk__45955;
var G__46067 = count__45956;
var G__46068 = (i__45957 + (1));
seq__45954 = G__46065;
chunk__45955 = G__46066;
count__45956 = G__46067;
i__45957 = G__46068;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45954);
if(temp__5753__auto__){
var seq__45954__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45954__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45954__$1);
var G__46069 = cljs.core.chunk_rest(seq__45954__$1);
var G__46070 = c__4638__auto__;
var G__46071 = cljs.core.count(c__4638__auto__);
var G__46072 = (0);
seq__45954 = G__46069;
chunk__45955 = G__46070;
count__45956 = G__46071;
i__45957 = G__46072;
continue;
} else {
var event = cljs.core.first(seq__45954__$1);
re_frame.router.dispatch(event);


var G__46073 = cljs.core.next(seq__45954__$1);
var G__46074 = null;
var G__46075 = (0);
var G__46076 = (0);
seq__45954 = G__46073;
chunk__45955 = G__46074;
count__45956 = G__46075;
i__45957 = G__46076;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__45991 = cljs.core.seq(value);
var chunk__45992 = null;
var count__45993 = (0);
var i__45994 = (0);
while(true){
if((i__45994 < count__45993)){
var event = chunk__45992.cljs$core$IIndexed$_nth$arity$2(null,i__45994);
clear_event(event);


var G__46077 = seq__45991;
var G__46078 = chunk__45992;
var G__46079 = count__45993;
var G__46080 = (i__45994 + (1));
seq__45991 = G__46077;
chunk__45992 = G__46078;
count__45993 = G__46079;
i__45994 = G__46080;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45991);
if(temp__5753__auto__){
var seq__45991__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45991__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45991__$1);
var G__46082 = cljs.core.chunk_rest(seq__45991__$1);
var G__46083 = c__4638__auto__;
var G__46084 = cljs.core.count(c__4638__auto__);
var G__46085 = (0);
seq__45991 = G__46082;
chunk__45992 = G__46083;
count__45993 = G__46084;
i__45994 = G__46085;
continue;
} else {
var event = cljs.core.first(seq__45991__$1);
clear_event(event);


var G__46086 = cljs.core.next(seq__45991__$1);
var G__46087 = null;
var G__46088 = (0);
var G__46089 = (0);
seq__45991 = G__46086;
chunk__45992 = G__46087;
count__45993 = G__46088;
i__45994 = G__46089;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
