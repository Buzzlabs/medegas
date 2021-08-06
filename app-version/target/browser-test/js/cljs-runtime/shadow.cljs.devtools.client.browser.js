goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___57182 = arguments.length;
var i__4819__auto___57183 = (0);
while(true){
if((i__4819__auto___57183 < len__4818__auto___57182)){
args__4824__auto__.push((arguments[i__4819__auto___57183]));

var G__57184 = (i__4819__auto___57183 + (1));
i__4819__auto___57183 = G__57184;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq57010){
var G__57011 = cljs.core.first(seq57010);
var seq57010__$1 = cljs.core.next(seq57010);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57011,seq57010__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__57017 = cljs.core.seq(sources);
var chunk__57018 = null;
var count__57019 = (0);
var i__57020 = (0);
while(true){
if((i__57020 < count__57019)){
var map__57028 = chunk__57018.cljs$core$IIndexed$_nth$arity$2(null,i__57020);
var map__57028__$1 = cljs.core.__destructure_map(map__57028);
var src = map__57028__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57028__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57028__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57028__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57028__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e57029){var e_57185 = e57029;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57185);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57185.message)].join('')));
}

var G__57186 = seq__57017;
var G__57187 = chunk__57018;
var G__57188 = count__57019;
var G__57189 = (i__57020 + (1));
seq__57017 = G__57186;
chunk__57018 = G__57187;
count__57019 = G__57188;
i__57020 = G__57189;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57017);
if(temp__5753__auto__){
var seq__57017__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57017__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__57017__$1);
var G__57190 = cljs.core.chunk_rest(seq__57017__$1);
var G__57191 = c__4638__auto__;
var G__57192 = cljs.core.count(c__4638__auto__);
var G__57193 = (0);
seq__57017 = G__57190;
chunk__57018 = G__57191;
count__57019 = G__57192;
i__57020 = G__57193;
continue;
} else {
var map__57030 = cljs.core.first(seq__57017__$1);
var map__57030__$1 = cljs.core.__destructure_map(map__57030);
var src = map__57030__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57030__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57030__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57030__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57030__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e57031){var e_57194 = e57031;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57194);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57194.message)].join('')));
}

var G__57195 = cljs.core.next(seq__57017__$1);
var G__57196 = null;
var G__57197 = (0);
var G__57198 = (0);
seq__57017 = G__57195;
chunk__57018 = G__57196;
count__57019 = G__57197;
i__57020 = G__57198;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__57032 = cljs.core.seq(js_requires);
var chunk__57033 = null;
var count__57034 = (0);
var i__57035 = (0);
while(true){
if((i__57035 < count__57034)){
var js_ns = chunk__57033.cljs$core$IIndexed$_nth$arity$2(null,i__57035);
var require_str_57201 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57201);


var G__57202 = seq__57032;
var G__57203 = chunk__57033;
var G__57204 = count__57034;
var G__57205 = (i__57035 + (1));
seq__57032 = G__57202;
chunk__57033 = G__57203;
count__57034 = G__57204;
i__57035 = G__57205;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57032);
if(temp__5753__auto__){
var seq__57032__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57032__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__57032__$1);
var G__57206 = cljs.core.chunk_rest(seq__57032__$1);
var G__57207 = c__4638__auto__;
var G__57208 = cljs.core.count(c__4638__auto__);
var G__57209 = (0);
seq__57032 = G__57206;
chunk__57033 = G__57207;
count__57034 = G__57208;
i__57035 = G__57209;
continue;
} else {
var js_ns = cljs.core.first(seq__57032__$1);
var require_str_57210 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57210);


var G__57211 = cljs.core.next(seq__57032__$1);
var G__57212 = null;
var G__57213 = (0);
var G__57214 = (0);
seq__57032 = G__57211;
chunk__57033 = G__57212;
count__57034 = G__57213;
i__57035 = G__57214;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__57039){
var map__57040 = p__57039;
var map__57040__$1 = cljs.core.__destructure_map(map__57040);
var msg = map__57040__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57040__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57040__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57041(s__57042){
return (new cljs.core.LazySeq(null,(function (){
var s__57042__$1 = s__57042;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__57042__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__57051 = cljs.core.first(xs__6308__auto__);
var map__57051__$1 = cljs.core.__destructure_map(map__57051);
var src = map__57051__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57051__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__57042__$1,map__57051,map__57051__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__57040,map__57040__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57041_$_iter__57043(s__57044){
return (new cljs.core.LazySeq(null,((function (s__57042__$1,map__57051,map__57051__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__57040,map__57040__$1,msg,info,reload_info){
return (function (){
var s__57044__$1 = s__57044;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__57044__$1);
if(temp__5753__auto____$1){
var s__57044__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57044__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__57044__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__57046 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__57045 = (0);
while(true){
if((i__57045 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__57045);
cljs.core.chunk_append(b__57046,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__57215 = (i__57045 + (1));
i__57045 = G__57215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57046),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57041_$_iter__57043(cljs.core.chunk_rest(s__57044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57046),null);
}
} else {
var warning = cljs.core.first(s__57044__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57041_$_iter__57043(cljs.core.rest(s__57044__$2)));
}
} else {
return null;
}
break;
}
});})(s__57042__$1,map__57051,map__57051__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__57040,map__57040__$1,msg,info,reload_info))
,null,null));
});})(s__57042__$1,map__57051,map__57051__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__57040,map__57040__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57041(cljs.core.rest(s__57042__$1)));
} else {
var G__57216 = cljs.core.rest(s__57042__$1);
s__57042__$1 = G__57216;
continue;
}
} else {
var G__57217 = cljs.core.rest(s__57042__$1);
s__57042__$1 = G__57217;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__57057_57218 = cljs.core.seq(warnings);
var chunk__57058_57219 = null;
var count__57059_57220 = (0);
var i__57060_57221 = (0);
while(true){
if((i__57060_57221 < count__57059_57220)){
var map__57066_57222 = chunk__57058_57219.cljs$core$IIndexed$_nth$arity$2(null,i__57060_57221);
var map__57066_57223__$1 = cljs.core.__destructure_map(map__57066_57222);
var w_57224 = map__57066_57223__$1;
var msg_57225__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57066_57223__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57066_57223__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57066_57223__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57066_57223__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57228)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57226),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57227),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57225__$1)].join(''));


var G__57229 = seq__57057_57218;
var G__57230 = chunk__57058_57219;
var G__57231 = count__57059_57220;
var G__57232 = (i__57060_57221 + (1));
seq__57057_57218 = G__57229;
chunk__57058_57219 = G__57230;
count__57059_57220 = G__57231;
i__57060_57221 = G__57232;
continue;
} else {
var temp__5753__auto___57233 = cljs.core.seq(seq__57057_57218);
if(temp__5753__auto___57233){
var seq__57057_57234__$1 = temp__5753__auto___57233;
if(cljs.core.chunked_seq_QMARK_(seq__57057_57234__$1)){
var c__4638__auto___57235 = cljs.core.chunk_first(seq__57057_57234__$1);
var G__57236 = cljs.core.chunk_rest(seq__57057_57234__$1);
var G__57237 = c__4638__auto___57235;
var G__57238 = cljs.core.count(c__4638__auto___57235);
var G__57239 = (0);
seq__57057_57218 = G__57236;
chunk__57058_57219 = G__57237;
count__57059_57220 = G__57238;
i__57060_57221 = G__57239;
continue;
} else {
var map__57069_57240 = cljs.core.first(seq__57057_57234__$1);
var map__57069_57241__$1 = cljs.core.__destructure_map(map__57069_57240);
var w_57242 = map__57069_57241__$1;
var msg_57243__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57069_57241__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57069_57241__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57069_57241__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57069_57241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57246)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57244),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57245),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57243__$1)].join(''));


var G__57247 = cljs.core.next(seq__57057_57234__$1);
var G__57248 = null;
var G__57249 = (0);
var G__57250 = (0);
seq__57057_57218 = G__57247;
chunk__57058_57219 = G__57248;
count__57059_57220 = G__57249;
i__57060_57221 = G__57250;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__57038_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__57038_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__57074){
var map__57075 = p__57074;
var map__57075__$1 = cljs.core.__destructure_map(map__57075);
var msg = map__57075__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57075__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__57076 = cljs.core.seq(updates);
var chunk__57078 = null;
var count__57079 = (0);
var i__57080 = (0);
while(true){
if((i__57080 < count__57079)){
var path = chunk__57078.cljs$core$IIndexed$_nth$arity$2(null,i__57080);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57116_57253 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57120_57254 = null;
var count__57121_57255 = (0);
var i__57122_57256 = (0);
while(true){
if((i__57122_57256 < count__57121_57255)){
var node_57257 = chunk__57120_57254.cljs$core$IIndexed$_nth$arity$2(null,i__57122_57256);
if(cljs.core.not(node_57257.shadow$old)){
var path_match_57258 = shadow.cljs.devtools.client.browser.match_paths(node_57257.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57258)){
var new_link_57259 = (function (){var G__57130 = node_57257.cloneNode(true);
G__57130.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57258),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57130;
})();
(node_57257.shadow$old = true);

(new_link_57259.onload = ((function (seq__57116_57253,chunk__57120_57254,count__57121_57255,i__57122_57256,seq__57076,chunk__57078,count__57079,i__57080,new_link_57259,path_match_57258,node_57257,path,map__57075,map__57075__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57257);
});})(seq__57116_57253,chunk__57120_57254,count__57121_57255,i__57122_57256,seq__57076,chunk__57078,count__57079,i__57080,new_link_57259,path_match_57258,node_57257,path,map__57075,map__57075__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57258], 0));

goog.dom.insertSiblingAfter(new_link_57259,node_57257);


var G__57260 = seq__57116_57253;
var G__57261 = chunk__57120_57254;
var G__57262 = count__57121_57255;
var G__57263 = (i__57122_57256 + (1));
seq__57116_57253 = G__57260;
chunk__57120_57254 = G__57261;
count__57121_57255 = G__57262;
i__57122_57256 = G__57263;
continue;
} else {
var G__57264 = seq__57116_57253;
var G__57265 = chunk__57120_57254;
var G__57266 = count__57121_57255;
var G__57267 = (i__57122_57256 + (1));
seq__57116_57253 = G__57264;
chunk__57120_57254 = G__57265;
count__57121_57255 = G__57266;
i__57122_57256 = G__57267;
continue;
}
} else {
var G__57268 = seq__57116_57253;
var G__57269 = chunk__57120_57254;
var G__57270 = count__57121_57255;
var G__57271 = (i__57122_57256 + (1));
seq__57116_57253 = G__57268;
chunk__57120_57254 = G__57269;
count__57121_57255 = G__57270;
i__57122_57256 = G__57271;
continue;
}
} else {
var temp__5753__auto___57272 = cljs.core.seq(seq__57116_57253);
if(temp__5753__auto___57272){
var seq__57116_57273__$1 = temp__5753__auto___57272;
if(cljs.core.chunked_seq_QMARK_(seq__57116_57273__$1)){
var c__4638__auto___57274 = cljs.core.chunk_first(seq__57116_57273__$1);
var G__57275 = cljs.core.chunk_rest(seq__57116_57273__$1);
var G__57276 = c__4638__auto___57274;
var G__57277 = cljs.core.count(c__4638__auto___57274);
var G__57278 = (0);
seq__57116_57253 = G__57275;
chunk__57120_57254 = G__57276;
count__57121_57255 = G__57277;
i__57122_57256 = G__57278;
continue;
} else {
var node_57279 = cljs.core.first(seq__57116_57273__$1);
if(cljs.core.not(node_57279.shadow$old)){
var path_match_57280 = shadow.cljs.devtools.client.browser.match_paths(node_57279.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57280)){
var new_link_57281 = (function (){var G__57131 = node_57279.cloneNode(true);
G__57131.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57280),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57131;
})();
(node_57279.shadow$old = true);

(new_link_57281.onload = ((function (seq__57116_57253,chunk__57120_57254,count__57121_57255,i__57122_57256,seq__57076,chunk__57078,count__57079,i__57080,new_link_57281,path_match_57280,node_57279,seq__57116_57273__$1,temp__5753__auto___57272,path,map__57075,map__57075__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57279);
});})(seq__57116_57253,chunk__57120_57254,count__57121_57255,i__57122_57256,seq__57076,chunk__57078,count__57079,i__57080,new_link_57281,path_match_57280,node_57279,seq__57116_57273__$1,temp__5753__auto___57272,path,map__57075,map__57075__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57280], 0));

goog.dom.insertSiblingAfter(new_link_57281,node_57279);


var G__57282 = cljs.core.next(seq__57116_57273__$1);
var G__57283 = null;
var G__57284 = (0);
var G__57285 = (0);
seq__57116_57253 = G__57282;
chunk__57120_57254 = G__57283;
count__57121_57255 = G__57284;
i__57122_57256 = G__57285;
continue;
} else {
var G__57286 = cljs.core.next(seq__57116_57273__$1);
var G__57287 = null;
var G__57288 = (0);
var G__57289 = (0);
seq__57116_57253 = G__57286;
chunk__57120_57254 = G__57287;
count__57121_57255 = G__57288;
i__57122_57256 = G__57289;
continue;
}
} else {
var G__57290 = cljs.core.next(seq__57116_57273__$1);
var G__57291 = null;
var G__57292 = (0);
var G__57293 = (0);
seq__57116_57253 = G__57290;
chunk__57120_57254 = G__57291;
count__57121_57255 = G__57292;
i__57122_57256 = G__57293;
continue;
}
}
} else {
}
}
break;
}


var G__57294 = seq__57076;
var G__57295 = chunk__57078;
var G__57296 = count__57079;
var G__57297 = (i__57080 + (1));
seq__57076 = G__57294;
chunk__57078 = G__57295;
count__57079 = G__57296;
i__57080 = G__57297;
continue;
} else {
var G__57298 = seq__57076;
var G__57299 = chunk__57078;
var G__57300 = count__57079;
var G__57301 = (i__57080 + (1));
seq__57076 = G__57298;
chunk__57078 = G__57299;
count__57079 = G__57300;
i__57080 = G__57301;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57076);
if(temp__5753__auto__){
var seq__57076__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57076__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__57076__$1);
var G__57302 = cljs.core.chunk_rest(seq__57076__$1);
var G__57303 = c__4638__auto__;
var G__57304 = cljs.core.count(c__4638__auto__);
var G__57305 = (0);
seq__57076 = G__57302;
chunk__57078 = G__57303;
count__57079 = G__57304;
i__57080 = G__57305;
continue;
} else {
var path = cljs.core.first(seq__57076__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57132_57306 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57136_57307 = null;
var count__57137_57308 = (0);
var i__57138_57309 = (0);
while(true){
if((i__57138_57309 < count__57137_57308)){
var node_57310 = chunk__57136_57307.cljs$core$IIndexed$_nth$arity$2(null,i__57138_57309);
if(cljs.core.not(node_57310.shadow$old)){
var path_match_57311 = shadow.cljs.devtools.client.browser.match_paths(node_57310.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57311)){
var new_link_57312 = (function (){var G__57144 = node_57310.cloneNode(true);
G__57144.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57311),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57144;
})();
(node_57310.shadow$old = true);

(new_link_57312.onload = ((function (seq__57132_57306,chunk__57136_57307,count__57137_57308,i__57138_57309,seq__57076,chunk__57078,count__57079,i__57080,new_link_57312,path_match_57311,node_57310,path,seq__57076__$1,temp__5753__auto__,map__57075,map__57075__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57310);
});})(seq__57132_57306,chunk__57136_57307,count__57137_57308,i__57138_57309,seq__57076,chunk__57078,count__57079,i__57080,new_link_57312,path_match_57311,node_57310,path,seq__57076__$1,temp__5753__auto__,map__57075,map__57075__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57311], 0));

goog.dom.insertSiblingAfter(new_link_57312,node_57310);


var G__57313 = seq__57132_57306;
var G__57314 = chunk__57136_57307;
var G__57315 = count__57137_57308;
var G__57316 = (i__57138_57309 + (1));
seq__57132_57306 = G__57313;
chunk__57136_57307 = G__57314;
count__57137_57308 = G__57315;
i__57138_57309 = G__57316;
continue;
} else {
var G__57317 = seq__57132_57306;
var G__57318 = chunk__57136_57307;
var G__57319 = count__57137_57308;
var G__57320 = (i__57138_57309 + (1));
seq__57132_57306 = G__57317;
chunk__57136_57307 = G__57318;
count__57137_57308 = G__57319;
i__57138_57309 = G__57320;
continue;
}
} else {
var G__57321 = seq__57132_57306;
var G__57322 = chunk__57136_57307;
var G__57323 = count__57137_57308;
var G__57324 = (i__57138_57309 + (1));
seq__57132_57306 = G__57321;
chunk__57136_57307 = G__57322;
count__57137_57308 = G__57323;
i__57138_57309 = G__57324;
continue;
}
} else {
var temp__5753__auto___57325__$1 = cljs.core.seq(seq__57132_57306);
if(temp__5753__auto___57325__$1){
var seq__57132_57326__$1 = temp__5753__auto___57325__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57132_57326__$1)){
var c__4638__auto___57327 = cljs.core.chunk_first(seq__57132_57326__$1);
var G__57328 = cljs.core.chunk_rest(seq__57132_57326__$1);
var G__57329 = c__4638__auto___57327;
var G__57330 = cljs.core.count(c__4638__auto___57327);
var G__57331 = (0);
seq__57132_57306 = G__57328;
chunk__57136_57307 = G__57329;
count__57137_57308 = G__57330;
i__57138_57309 = G__57331;
continue;
} else {
var node_57332 = cljs.core.first(seq__57132_57326__$1);
if(cljs.core.not(node_57332.shadow$old)){
var path_match_57333 = shadow.cljs.devtools.client.browser.match_paths(node_57332.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57333)){
var new_link_57335 = (function (){var G__57145 = node_57332.cloneNode(true);
G__57145.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57333),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57145;
})();
(node_57332.shadow$old = true);

(new_link_57335.onload = ((function (seq__57132_57306,chunk__57136_57307,count__57137_57308,i__57138_57309,seq__57076,chunk__57078,count__57079,i__57080,new_link_57335,path_match_57333,node_57332,seq__57132_57326__$1,temp__5753__auto___57325__$1,path,seq__57076__$1,temp__5753__auto__,map__57075,map__57075__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57332);
});})(seq__57132_57306,chunk__57136_57307,count__57137_57308,i__57138_57309,seq__57076,chunk__57078,count__57079,i__57080,new_link_57335,path_match_57333,node_57332,seq__57132_57326__$1,temp__5753__auto___57325__$1,path,seq__57076__$1,temp__5753__auto__,map__57075,map__57075__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57333], 0));

goog.dom.insertSiblingAfter(new_link_57335,node_57332);


var G__57336 = cljs.core.next(seq__57132_57326__$1);
var G__57337 = null;
var G__57338 = (0);
var G__57339 = (0);
seq__57132_57306 = G__57336;
chunk__57136_57307 = G__57337;
count__57137_57308 = G__57338;
i__57138_57309 = G__57339;
continue;
} else {
var G__57340 = cljs.core.next(seq__57132_57326__$1);
var G__57341 = null;
var G__57342 = (0);
var G__57343 = (0);
seq__57132_57306 = G__57340;
chunk__57136_57307 = G__57341;
count__57137_57308 = G__57342;
i__57138_57309 = G__57343;
continue;
}
} else {
var G__57344 = cljs.core.next(seq__57132_57326__$1);
var G__57345 = null;
var G__57346 = (0);
var G__57347 = (0);
seq__57132_57306 = G__57344;
chunk__57136_57307 = G__57345;
count__57137_57308 = G__57346;
i__57138_57309 = G__57347;
continue;
}
}
} else {
}
}
break;
}


var G__57348 = cljs.core.next(seq__57076__$1);
var G__57349 = null;
var G__57350 = (0);
var G__57351 = (0);
seq__57076 = G__57348;
chunk__57078 = G__57349;
count__57079 = G__57350;
i__57080 = G__57351;
continue;
} else {
var G__57352 = cljs.core.next(seq__57076__$1);
var G__57353 = null;
var G__57354 = (0);
var G__57355 = (0);
seq__57076 = G__57352;
chunk__57078 = G__57353;
count__57079 = G__57354;
i__57080 = G__57355;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__57149){
var map__57151 = p__57149;
var map__57151__$1 = cljs.core.__destructure_map(map__57151);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57151__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__57154){
var map__57155 = p__57154;
var map__57155__$1 = cljs.core.__destructure_map(map__57155);
var _ = map__57155__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57155__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__57156,done,error){
var map__57157 = p__57156;
var map__57157__$1 = cljs.core.__destructure_map(map__57157);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57157__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__57161,done,error){
var map__57162 = p__57161;
var map__57162__$1 = cljs.core.__destructure_map(map__57162);
var msg = map__57162__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57162__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57162__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57162__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__57163){
var map__57164 = p__57163;
var map__57164__$1 = cljs.core.__destructure_map(map__57164);
var src = map__57164__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57164__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__57165 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__57165) : done.call(null,G__57165));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__57166){
var map__57167 = p__57166;
var map__57167__$1 = cljs.core.__destructure_map(map__57167);
var msg__$1 = map__57167__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57167__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e57168){var ex = e57168;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__57169){
var map__57170 = p__57169;
var map__57170__$1 = cljs.core.__destructure_map(map__57170);
var env = map__57170__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57170__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__57171){
var map__57172 = p__57171;
var map__57172__$1 = cljs.core.__destructure_map(map__57172);
var msg = map__57172__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57172__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__57173){
var map__57174 = p__57173;
var map__57174__$1 = cljs.core.__destructure_map(map__57174);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57174__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57174__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__57175){
var map__57176 = p__57175;
var map__57176__$1 = cljs.core.__destructure_map(map__57176);
var svc = map__57176__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57176__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
