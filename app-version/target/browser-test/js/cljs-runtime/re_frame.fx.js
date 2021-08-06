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
var _STAR_current_trace_STAR__orig_val__58056 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__58057 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__58057);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___58209 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___58209)){
var new_db_58210 = temp__5753__auto___58209;
var fexpr__58064_58211 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__58064_58211.cljs$core$IFn$_invoke$arity$1 ? fexpr__58064_58211.cljs$core$IFn$_invoke$arity$1(new_db_58210) : fexpr__58064_58211.call(null,new_db_58210));
} else {
}

var seq__58065 = cljs.core.seq(effects_without_db);
var chunk__58066 = null;
var count__58067 = (0);
var i__58068 = (0);
while(true){
if((i__58068 < count__58067)){
var vec__58079 = chunk__58066.cljs$core$IIndexed$_nth$arity$2(null,i__58068);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58079,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58079,(1),null);
var temp__5751__auto___58216 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___58216)){
var effect_fn_58217 = temp__5751__auto___58216;
(effect_fn_58217.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58217.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58217.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58218 = seq__58065;
var G__58219 = chunk__58066;
var G__58220 = count__58067;
var G__58221 = (i__58068 + (1));
seq__58065 = G__58218;
chunk__58066 = G__58219;
count__58067 = G__58220;
i__58068 = G__58221;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58065);
if(temp__5753__auto__){
var seq__58065__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58065__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58065__$1);
var G__58223 = cljs.core.chunk_rest(seq__58065__$1);
var G__58224 = c__4638__auto__;
var G__58225 = cljs.core.count(c__4638__auto__);
var G__58226 = (0);
seq__58065 = G__58223;
chunk__58066 = G__58224;
count__58067 = G__58225;
i__58068 = G__58226;
continue;
} else {
var vec__58083 = cljs.core.first(seq__58065__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58083,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58083,(1),null);
var temp__5751__auto___58227 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___58227)){
var effect_fn_58228 = temp__5751__auto___58227;
(effect_fn_58228.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58228.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58228.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58229 = cljs.core.next(seq__58065__$1);
var G__58230 = null;
var G__58231 = (0);
var G__58232 = (0);
seq__58065 = G__58229;
chunk__58066 = G__58230;
count__58067 = G__58231;
i__58068 = G__58232;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__29508__auto___58233 = re_frame.interop.now();
var duration__29509__auto___58234 = (end__29508__auto___58233 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29509__auto___58234,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__29508__auto___58233);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__58056);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___58235 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___58235)){
var new_db_58236 = temp__5753__auto___58235;
var fexpr__58091_58237 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__58091_58237.cljs$core$IFn$_invoke$arity$1 ? fexpr__58091_58237.cljs$core$IFn$_invoke$arity$1(new_db_58236) : fexpr__58091_58237.call(null,new_db_58236));
} else {
}

var seq__58092 = cljs.core.seq(effects_without_db);
var chunk__58093 = null;
var count__58094 = (0);
var i__58095 = (0);
while(true){
if((i__58095 < count__58094)){
var vec__58105 = chunk__58093.cljs$core$IIndexed$_nth$arity$2(null,i__58095);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58105,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58105,(1),null);
var temp__5751__auto___58238 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___58238)){
var effect_fn_58239 = temp__5751__auto___58238;
(effect_fn_58239.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58239.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58239.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58240 = seq__58092;
var G__58241 = chunk__58093;
var G__58242 = count__58094;
var G__58243 = (i__58095 + (1));
seq__58092 = G__58240;
chunk__58093 = G__58241;
count__58094 = G__58242;
i__58095 = G__58243;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58092);
if(temp__5753__auto__){
var seq__58092__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58092__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58092__$1);
var G__58244 = cljs.core.chunk_rest(seq__58092__$1);
var G__58245 = c__4638__auto__;
var G__58246 = cljs.core.count(c__4638__auto__);
var G__58247 = (0);
seq__58092 = G__58244;
chunk__58093 = G__58245;
count__58094 = G__58246;
i__58095 = G__58247;
continue;
} else {
var vec__58127 = cljs.core.first(seq__58092__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58127,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58127,(1),null);
var temp__5751__auto___58248 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___58248)){
var effect_fn_58249 = temp__5751__auto___58248;
(effect_fn_58249.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58249.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58249.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58250 = cljs.core.next(seq__58092__$1);
var G__58251 = null;
var G__58252 = (0);
var G__58253 = (0);
seq__58092 = G__58250;
chunk__58093 = G__58251;
count__58094 = G__58252;
i__58095 = G__58253;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__58131){
var map__58132 = p__58131;
var map__58132__$1 = cljs.core.__destructure_map(map__58132);
var effect = map__58132__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58132__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__58140 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__58141 = null;
var count__58142 = (0);
var i__58143 = (0);
while(true){
if((i__58143 < count__58142)){
var effect = chunk__58141.cljs$core$IIndexed$_nth$arity$2(null,i__58143);
re_frame.fx.dispatch_later(effect);


var G__58254 = seq__58140;
var G__58255 = chunk__58141;
var G__58256 = count__58142;
var G__58257 = (i__58143 + (1));
seq__58140 = G__58254;
chunk__58141 = G__58255;
count__58142 = G__58256;
i__58143 = G__58257;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58140);
if(temp__5753__auto__){
var seq__58140__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58140__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58140__$1);
var G__58258 = cljs.core.chunk_rest(seq__58140__$1);
var G__58259 = c__4638__auto__;
var G__58260 = cljs.core.count(c__4638__auto__);
var G__58261 = (0);
seq__58140 = G__58258;
chunk__58141 = G__58259;
count__58142 = G__58260;
i__58143 = G__58261;
continue;
} else {
var effect = cljs.core.first(seq__58140__$1);
re_frame.fx.dispatch_later(effect);


var G__58262 = cljs.core.next(seq__58140__$1);
var G__58263 = null;
var G__58264 = (0);
var G__58265 = (0);
seq__58140 = G__58262;
chunk__58141 = G__58263;
count__58142 = G__58264;
i__58143 = G__58265;
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
var seq__58150 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__58151 = null;
var count__58152 = (0);
var i__58153 = (0);
while(true){
if((i__58153 < count__58152)){
var vec__58163 = chunk__58151.cljs$core$IIndexed$_nth$arity$2(null,i__58153);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58163,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58163,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___58266 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___58266)){
var effect_fn_58267 = temp__5751__auto___58266;
(effect_fn_58267.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58267.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58267.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__58268 = seq__58150;
var G__58269 = chunk__58151;
var G__58270 = count__58152;
var G__58271 = (i__58153 + (1));
seq__58150 = G__58268;
chunk__58151 = G__58269;
count__58152 = G__58270;
i__58153 = G__58271;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58150);
if(temp__5753__auto__){
var seq__58150__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58150__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58150__$1);
var G__58272 = cljs.core.chunk_rest(seq__58150__$1);
var G__58273 = c__4638__auto__;
var G__58274 = cljs.core.count(c__4638__auto__);
var G__58275 = (0);
seq__58150 = G__58272;
chunk__58151 = G__58273;
count__58152 = G__58274;
i__58153 = G__58275;
continue;
} else {
var vec__58167 = cljs.core.first(seq__58150__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58167,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58167,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___58278 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___58278)){
var effect_fn_58280 = temp__5751__auto___58278;
(effect_fn_58280.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58280.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58280.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__58284 = cljs.core.next(seq__58150__$1);
var G__58285 = null;
var G__58286 = (0);
var G__58287 = (0);
seq__58150 = G__58284;
chunk__58151 = G__58285;
count__58152 = G__58286;
i__58153 = G__58287;
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
var seq__58172 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__58173 = null;
var count__58175 = (0);
var i__58176 = (0);
while(true){
if((i__58176 < count__58175)){
var event = chunk__58173.cljs$core$IIndexed$_nth$arity$2(null,i__58176);
re_frame.router.dispatch(event);


var G__58292 = seq__58172;
var G__58293 = chunk__58173;
var G__58294 = count__58175;
var G__58295 = (i__58176 + (1));
seq__58172 = G__58292;
chunk__58173 = G__58293;
count__58175 = G__58294;
i__58176 = G__58295;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58172);
if(temp__5753__auto__){
var seq__58172__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58172__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58172__$1);
var G__58296 = cljs.core.chunk_rest(seq__58172__$1);
var G__58297 = c__4638__auto__;
var G__58298 = cljs.core.count(c__4638__auto__);
var G__58299 = (0);
seq__58172 = G__58296;
chunk__58173 = G__58297;
count__58175 = G__58298;
i__58176 = G__58299;
continue;
} else {
var event = cljs.core.first(seq__58172__$1);
re_frame.router.dispatch(event);


var G__58300 = cljs.core.next(seq__58172__$1);
var G__58301 = null;
var G__58302 = (0);
var G__58303 = (0);
seq__58172 = G__58300;
chunk__58173 = G__58301;
count__58175 = G__58302;
i__58176 = G__58303;
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
var seq__58198 = cljs.core.seq(value);
var chunk__58199 = null;
var count__58200 = (0);
var i__58201 = (0);
while(true){
if((i__58201 < count__58200)){
var event = chunk__58199.cljs$core$IIndexed$_nth$arity$2(null,i__58201);
clear_event(event);


var G__58304 = seq__58198;
var G__58305 = chunk__58199;
var G__58306 = count__58200;
var G__58307 = (i__58201 + (1));
seq__58198 = G__58304;
chunk__58199 = G__58305;
count__58200 = G__58306;
i__58201 = G__58307;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58198);
if(temp__5753__auto__){
var seq__58198__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58198__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58198__$1);
var G__58308 = cljs.core.chunk_rest(seq__58198__$1);
var G__58309 = c__4638__auto__;
var G__58310 = cljs.core.count(c__4638__auto__);
var G__58311 = (0);
seq__58198 = G__58308;
chunk__58199 = G__58309;
count__58200 = G__58310;
i__58201 = G__58311;
continue;
} else {
var event = cljs.core.first(seq__58198__$1);
clear_event(event);


var G__58312 = cljs.core.next(seq__58198__$1);
var G__58313 = null;
var G__58314 = (0);
var G__58315 = (0);
seq__58198 = G__58312;
chunk__58199 = G__58313;
count__58200 = G__58314;
i__58201 = G__58315;
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
