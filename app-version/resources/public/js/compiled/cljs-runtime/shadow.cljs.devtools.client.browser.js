goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___45113 = arguments.length;
var i__4819__auto___45114 = (0);
while(true){
if((i__4819__auto___45114 < len__4818__auto___45113)){
args__4824__auto__.push((arguments[i__4819__auto___45114]));

var G__45117 = (i__4819__auto___45114 + (1));
i__4819__auto___45114 = G__45117;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44865){
var G__44866 = cljs.core.first(seq44865);
var seq44865__$1 = cljs.core.next(seq44865);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44866,seq44865__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44873 = cljs.core.seq(sources);
var chunk__44874 = null;
var count__44875 = (0);
var i__44876 = (0);
while(true){
if((i__44876 < count__44875)){
var map__44884 = chunk__44874.cljs$core$IIndexed$_nth$arity$2(null,i__44876);
var map__44884__$1 = cljs.core.__destructure_map(map__44884);
var src = map__44884__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44885){var e_45118 = e44885;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45118);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45118.message)].join('')));
}

var G__45119 = seq__44873;
var G__45120 = chunk__44874;
var G__45121 = count__44875;
var G__45122 = (i__44876 + (1));
seq__44873 = G__45119;
chunk__44874 = G__45120;
count__44875 = G__45121;
i__44876 = G__45122;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44873);
if(temp__5753__auto__){
var seq__44873__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44873__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__44873__$1);
var G__45123 = cljs.core.chunk_rest(seq__44873__$1);
var G__45124 = c__4638__auto__;
var G__45125 = cljs.core.count(c__4638__auto__);
var G__45126 = (0);
seq__44873 = G__45123;
chunk__44874 = G__45124;
count__44875 = G__45125;
i__44876 = G__45126;
continue;
} else {
var map__44886 = cljs.core.first(seq__44873__$1);
var map__44886__$1 = cljs.core.__destructure_map(map__44886);
var src = map__44886__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44886__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44886__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44886__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44886__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44887){var e_45127 = e44887;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45127);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45127.message)].join('')));
}

var G__45128 = cljs.core.next(seq__44873__$1);
var G__45129 = null;
var G__45130 = (0);
var G__45131 = (0);
seq__44873 = G__45128;
chunk__44874 = G__45129;
count__44875 = G__45130;
i__44876 = G__45131;
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
var seq__44888 = cljs.core.seq(js_requires);
var chunk__44889 = null;
var count__44890 = (0);
var i__44891 = (0);
while(true){
if((i__44891 < count__44890)){
var js_ns = chunk__44889.cljs$core$IIndexed$_nth$arity$2(null,i__44891);
var require_str_45133 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45133);


var G__45134 = seq__44888;
var G__45135 = chunk__44889;
var G__45136 = count__44890;
var G__45137 = (i__44891 + (1));
seq__44888 = G__45134;
chunk__44889 = G__45135;
count__44890 = G__45136;
i__44891 = G__45137;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44888);
if(temp__5753__auto__){
var seq__44888__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44888__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__44888__$1);
var G__45138 = cljs.core.chunk_rest(seq__44888__$1);
var G__45139 = c__4638__auto__;
var G__45140 = cljs.core.count(c__4638__auto__);
var G__45141 = (0);
seq__44888 = G__45138;
chunk__44889 = G__45139;
count__44890 = G__45140;
i__44891 = G__45141;
continue;
} else {
var js_ns = cljs.core.first(seq__44888__$1);
var require_str_45142 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45142);


var G__45143 = cljs.core.next(seq__44888__$1);
var G__45144 = null;
var G__45145 = (0);
var G__45146 = (0);
seq__44888 = G__45143;
chunk__44889 = G__45144;
count__44890 = G__45145;
i__44891 = G__45146;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44899){
var map__44900 = p__44899;
var map__44900__$1 = cljs.core.__destructure_map(map__44900);
var msg = map__44900__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44901(s__44902){
return (new cljs.core.LazySeq(null,(function (){
var s__44902__$1 = s__44902;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__44902__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__44907 = cljs.core.first(xs__6308__auto__);
var map__44907__$1 = cljs.core.__destructure_map(map__44907);
var src = map__44907__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44907__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44907__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__44902__$1,map__44907,map__44907__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44900,map__44900__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44901_$_iter__44903(s__44904){
return (new cljs.core.LazySeq(null,((function (s__44902__$1,map__44907,map__44907__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44900,map__44900__$1,msg,info,reload_info){
return (function (){
var s__44904__$1 = s__44904;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__44904__$1);
if(temp__5753__auto____$1){
var s__44904__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44904__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__44904__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__44906 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__44905 = (0);
while(true){
if((i__44905 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__44905);
cljs.core.chunk_append(b__44906,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45147 = (i__44905 + (1));
i__44905 = G__45147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44906),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44901_$_iter__44903(cljs.core.chunk_rest(s__44904__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44906),null);
}
} else {
var warning = cljs.core.first(s__44904__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44901_$_iter__44903(cljs.core.rest(s__44904__$2)));
}
} else {
return null;
}
break;
}
});})(s__44902__$1,map__44907,map__44907__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44900,map__44900__$1,msg,info,reload_info))
,null,null));
});})(s__44902__$1,map__44907,map__44907__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44900,map__44900__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44901(cljs.core.rest(s__44902__$1)));
} else {
var G__45151 = cljs.core.rest(s__44902__$1);
s__44902__$1 = G__45151;
continue;
}
} else {
var G__45152 = cljs.core.rest(s__44902__$1);
s__44902__$1 = G__45152;
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
var seq__44913_45155 = cljs.core.seq(warnings);
var chunk__44914_45156 = null;
var count__44915_45157 = (0);
var i__44916_45158 = (0);
while(true){
if((i__44916_45158 < count__44915_45157)){
var map__44922_45159 = chunk__44914_45156.cljs$core$IIndexed$_nth$arity$2(null,i__44916_45158);
var map__44922_45160__$1 = cljs.core.__destructure_map(map__44922_45159);
var w_45161 = map__44922_45160__$1;
var msg_45162__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44922_45160__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44922_45160__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44922_45160__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44922_45160__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45165)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45163),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45164),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45162__$1)].join(''));


var G__45166 = seq__44913_45155;
var G__45167 = chunk__44914_45156;
var G__45168 = count__44915_45157;
var G__45169 = (i__44916_45158 + (1));
seq__44913_45155 = G__45166;
chunk__44914_45156 = G__45167;
count__44915_45157 = G__45168;
i__44916_45158 = G__45169;
continue;
} else {
var temp__5753__auto___45170 = cljs.core.seq(seq__44913_45155);
if(temp__5753__auto___45170){
var seq__44913_45171__$1 = temp__5753__auto___45170;
if(cljs.core.chunked_seq_QMARK_(seq__44913_45171__$1)){
var c__4638__auto___45172 = cljs.core.chunk_first(seq__44913_45171__$1);
var G__45173 = cljs.core.chunk_rest(seq__44913_45171__$1);
var G__45174 = c__4638__auto___45172;
var G__45175 = cljs.core.count(c__4638__auto___45172);
var G__45176 = (0);
seq__44913_45155 = G__45173;
chunk__44914_45156 = G__45174;
count__44915_45157 = G__45175;
i__44916_45158 = G__45176;
continue;
} else {
var map__44926_45177 = cljs.core.first(seq__44913_45171__$1);
var map__44926_45178__$1 = cljs.core.__destructure_map(map__44926_45177);
var w_45179 = map__44926_45178__$1;
var msg_45180__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44926_45178__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44926_45178__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44926_45178__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44926_45178__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45183)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45181),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45182),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45180__$1)].join(''));


var G__45185 = cljs.core.next(seq__44913_45171__$1);
var G__45186 = null;
var G__45187 = (0);
var G__45188 = (0);
seq__44913_45155 = G__45185;
chunk__44914_45156 = G__45186;
count__44915_45157 = G__45187;
i__44916_45158 = G__45188;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44898_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44898_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__44933){
var map__44936 = p__44933;
var map__44936__$1 = cljs.core.__destructure_map(map__44936);
var msg = map__44936__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44936__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__44937 = cljs.core.seq(updates);
var chunk__44939 = null;
var count__44940 = (0);
var i__44941 = (0);
while(true){
if((i__44941 < count__44940)){
var path = chunk__44939.cljs$core$IIndexed$_nth$arity$2(null,i__44941);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45045_45189 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45049_45190 = null;
var count__45050_45191 = (0);
var i__45051_45192 = (0);
while(true){
if((i__45051_45192 < count__45050_45191)){
var node_45193 = chunk__45049_45190.cljs$core$IIndexed$_nth$arity$2(null,i__45051_45192);
if(cljs.core.not(node_45193.shadow$old)){
var path_match_45194 = shadow.cljs.devtools.client.browser.match_paths(node_45193.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45194)){
var new_link_45195 = (function (){var G__45057 = node_45193.cloneNode(true);
G__45057.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45194),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45057;
})();
(node_45193.shadow$old = true);

(new_link_45195.onload = ((function (seq__45045_45189,chunk__45049_45190,count__45050_45191,i__45051_45192,seq__44937,chunk__44939,count__44940,i__44941,new_link_45195,path_match_45194,node_45193,path,map__44936,map__44936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45193);
});})(seq__45045_45189,chunk__45049_45190,count__45050_45191,i__45051_45192,seq__44937,chunk__44939,count__44940,i__44941,new_link_45195,path_match_45194,node_45193,path,map__44936,map__44936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45194], 0));

goog.dom.insertSiblingAfter(new_link_45195,node_45193);


var G__45196 = seq__45045_45189;
var G__45197 = chunk__45049_45190;
var G__45198 = count__45050_45191;
var G__45199 = (i__45051_45192 + (1));
seq__45045_45189 = G__45196;
chunk__45049_45190 = G__45197;
count__45050_45191 = G__45198;
i__45051_45192 = G__45199;
continue;
} else {
var G__45200 = seq__45045_45189;
var G__45201 = chunk__45049_45190;
var G__45202 = count__45050_45191;
var G__45203 = (i__45051_45192 + (1));
seq__45045_45189 = G__45200;
chunk__45049_45190 = G__45201;
count__45050_45191 = G__45202;
i__45051_45192 = G__45203;
continue;
}
} else {
var G__45204 = seq__45045_45189;
var G__45205 = chunk__45049_45190;
var G__45206 = count__45050_45191;
var G__45207 = (i__45051_45192 + (1));
seq__45045_45189 = G__45204;
chunk__45049_45190 = G__45205;
count__45050_45191 = G__45206;
i__45051_45192 = G__45207;
continue;
}
} else {
var temp__5753__auto___45208 = cljs.core.seq(seq__45045_45189);
if(temp__5753__auto___45208){
var seq__45045_45209__$1 = temp__5753__auto___45208;
if(cljs.core.chunked_seq_QMARK_(seq__45045_45209__$1)){
var c__4638__auto___45210 = cljs.core.chunk_first(seq__45045_45209__$1);
var G__45211 = cljs.core.chunk_rest(seq__45045_45209__$1);
var G__45212 = c__4638__auto___45210;
var G__45213 = cljs.core.count(c__4638__auto___45210);
var G__45214 = (0);
seq__45045_45189 = G__45211;
chunk__45049_45190 = G__45212;
count__45050_45191 = G__45213;
i__45051_45192 = G__45214;
continue;
} else {
var node_45215 = cljs.core.first(seq__45045_45209__$1);
if(cljs.core.not(node_45215.shadow$old)){
var path_match_45216 = shadow.cljs.devtools.client.browser.match_paths(node_45215.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45216)){
var new_link_45217 = (function (){var G__45058 = node_45215.cloneNode(true);
G__45058.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45216),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45058;
})();
(node_45215.shadow$old = true);

(new_link_45217.onload = ((function (seq__45045_45189,chunk__45049_45190,count__45050_45191,i__45051_45192,seq__44937,chunk__44939,count__44940,i__44941,new_link_45217,path_match_45216,node_45215,seq__45045_45209__$1,temp__5753__auto___45208,path,map__44936,map__44936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45215);
});})(seq__45045_45189,chunk__45049_45190,count__45050_45191,i__45051_45192,seq__44937,chunk__44939,count__44940,i__44941,new_link_45217,path_match_45216,node_45215,seq__45045_45209__$1,temp__5753__auto___45208,path,map__44936,map__44936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45216], 0));

goog.dom.insertSiblingAfter(new_link_45217,node_45215);


var G__45218 = cljs.core.next(seq__45045_45209__$1);
var G__45219 = null;
var G__45220 = (0);
var G__45221 = (0);
seq__45045_45189 = G__45218;
chunk__45049_45190 = G__45219;
count__45050_45191 = G__45220;
i__45051_45192 = G__45221;
continue;
} else {
var G__45222 = cljs.core.next(seq__45045_45209__$1);
var G__45223 = null;
var G__45224 = (0);
var G__45225 = (0);
seq__45045_45189 = G__45222;
chunk__45049_45190 = G__45223;
count__45050_45191 = G__45224;
i__45051_45192 = G__45225;
continue;
}
} else {
var G__45226 = cljs.core.next(seq__45045_45209__$1);
var G__45227 = null;
var G__45228 = (0);
var G__45229 = (0);
seq__45045_45189 = G__45226;
chunk__45049_45190 = G__45227;
count__45050_45191 = G__45228;
i__45051_45192 = G__45229;
continue;
}
}
} else {
}
}
break;
}


var G__45230 = seq__44937;
var G__45231 = chunk__44939;
var G__45232 = count__44940;
var G__45233 = (i__44941 + (1));
seq__44937 = G__45230;
chunk__44939 = G__45231;
count__44940 = G__45232;
i__44941 = G__45233;
continue;
} else {
var G__45234 = seq__44937;
var G__45235 = chunk__44939;
var G__45236 = count__44940;
var G__45237 = (i__44941 + (1));
seq__44937 = G__45234;
chunk__44939 = G__45235;
count__44940 = G__45236;
i__44941 = G__45237;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44937);
if(temp__5753__auto__){
var seq__44937__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44937__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__44937__$1);
var G__45238 = cljs.core.chunk_rest(seq__44937__$1);
var G__45239 = c__4638__auto__;
var G__45240 = cljs.core.count(c__4638__auto__);
var G__45241 = (0);
seq__44937 = G__45238;
chunk__44939 = G__45239;
count__44940 = G__45240;
i__44941 = G__45241;
continue;
} else {
var path = cljs.core.first(seq__44937__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45059_45242 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45063_45243 = null;
var count__45064_45244 = (0);
var i__45065_45245 = (0);
while(true){
if((i__45065_45245 < count__45064_45244)){
var node_45246 = chunk__45063_45243.cljs$core$IIndexed$_nth$arity$2(null,i__45065_45245);
if(cljs.core.not(node_45246.shadow$old)){
var path_match_45247 = shadow.cljs.devtools.client.browser.match_paths(node_45246.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45247)){
var new_link_45248 = (function (){var G__45071 = node_45246.cloneNode(true);
G__45071.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45247),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45071;
})();
(node_45246.shadow$old = true);

(new_link_45248.onload = ((function (seq__45059_45242,chunk__45063_45243,count__45064_45244,i__45065_45245,seq__44937,chunk__44939,count__44940,i__44941,new_link_45248,path_match_45247,node_45246,path,seq__44937__$1,temp__5753__auto__,map__44936,map__44936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45246);
});})(seq__45059_45242,chunk__45063_45243,count__45064_45244,i__45065_45245,seq__44937,chunk__44939,count__44940,i__44941,new_link_45248,path_match_45247,node_45246,path,seq__44937__$1,temp__5753__auto__,map__44936,map__44936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45247], 0));

goog.dom.insertSiblingAfter(new_link_45248,node_45246);


var G__45249 = seq__45059_45242;
var G__45250 = chunk__45063_45243;
var G__45251 = count__45064_45244;
var G__45252 = (i__45065_45245 + (1));
seq__45059_45242 = G__45249;
chunk__45063_45243 = G__45250;
count__45064_45244 = G__45251;
i__45065_45245 = G__45252;
continue;
} else {
var G__45253 = seq__45059_45242;
var G__45254 = chunk__45063_45243;
var G__45255 = count__45064_45244;
var G__45256 = (i__45065_45245 + (1));
seq__45059_45242 = G__45253;
chunk__45063_45243 = G__45254;
count__45064_45244 = G__45255;
i__45065_45245 = G__45256;
continue;
}
} else {
var G__45257 = seq__45059_45242;
var G__45258 = chunk__45063_45243;
var G__45259 = count__45064_45244;
var G__45260 = (i__45065_45245 + (1));
seq__45059_45242 = G__45257;
chunk__45063_45243 = G__45258;
count__45064_45244 = G__45259;
i__45065_45245 = G__45260;
continue;
}
} else {
var temp__5753__auto___45261__$1 = cljs.core.seq(seq__45059_45242);
if(temp__5753__auto___45261__$1){
var seq__45059_45262__$1 = temp__5753__auto___45261__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45059_45262__$1)){
var c__4638__auto___45263 = cljs.core.chunk_first(seq__45059_45262__$1);
var G__45264 = cljs.core.chunk_rest(seq__45059_45262__$1);
var G__45265 = c__4638__auto___45263;
var G__45266 = cljs.core.count(c__4638__auto___45263);
var G__45267 = (0);
seq__45059_45242 = G__45264;
chunk__45063_45243 = G__45265;
count__45064_45244 = G__45266;
i__45065_45245 = G__45267;
continue;
} else {
var node_45268 = cljs.core.first(seq__45059_45262__$1);
if(cljs.core.not(node_45268.shadow$old)){
var path_match_45269 = shadow.cljs.devtools.client.browser.match_paths(node_45268.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45269)){
var new_link_45270 = (function (){var G__45073 = node_45268.cloneNode(true);
G__45073.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45269),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45073;
})();
(node_45268.shadow$old = true);

(new_link_45270.onload = ((function (seq__45059_45242,chunk__45063_45243,count__45064_45244,i__45065_45245,seq__44937,chunk__44939,count__44940,i__44941,new_link_45270,path_match_45269,node_45268,seq__45059_45262__$1,temp__5753__auto___45261__$1,path,seq__44937__$1,temp__5753__auto__,map__44936,map__44936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_45268);
});})(seq__45059_45242,chunk__45063_45243,count__45064_45244,i__45065_45245,seq__44937,chunk__44939,count__44940,i__44941,new_link_45270,path_match_45269,node_45268,seq__45059_45262__$1,temp__5753__auto___45261__$1,path,seq__44937__$1,temp__5753__auto__,map__44936,map__44936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45269], 0));

goog.dom.insertSiblingAfter(new_link_45270,node_45268);


var G__45271 = cljs.core.next(seq__45059_45262__$1);
var G__45272 = null;
var G__45273 = (0);
var G__45274 = (0);
seq__45059_45242 = G__45271;
chunk__45063_45243 = G__45272;
count__45064_45244 = G__45273;
i__45065_45245 = G__45274;
continue;
} else {
var G__45275 = cljs.core.next(seq__45059_45262__$1);
var G__45276 = null;
var G__45277 = (0);
var G__45278 = (0);
seq__45059_45242 = G__45275;
chunk__45063_45243 = G__45276;
count__45064_45244 = G__45277;
i__45065_45245 = G__45278;
continue;
}
} else {
var G__45279 = cljs.core.next(seq__45059_45262__$1);
var G__45280 = null;
var G__45281 = (0);
var G__45282 = (0);
seq__45059_45242 = G__45279;
chunk__45063_45243 = G__45280;
count__45064_45244 = G__45281;
i__45065_45245 = G__45282;
continue;
}
}
} else {
}
}
break;
}


var G__45283 = cljs.core.next(seq__44937__$1);
var G__45284 = null;
var G__45285 = (0);
var G__45286 = (0);
seq__44937 = G__45283;
chunk__44939 = G__45284;
count__44940 = G__45285;
i__44941 = G__45286;
continue;
} else {
var G__45287 = cljs.core.next(seq__44937__$1);
var G__45288 = null;
var G__45289 = (0);
var G__45290 = (0);
seq__44937 = G__45287;
chunk__44939 = G__45288;
count__44940 = G__45289;
i__44941 = G__45290;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__45078){
var map__45079 = p__45078;
var map__45079__$1 = cljs.core.__destructure_map(map__45079);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45079__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__45082){
var map__45083 = p__45082;
var map__45083__$1 = cljs.core.__destructure_map(map__45083);
var _ = map__45083__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45083__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45084,done,error){
var map__45085 = p__45084;
var map__45085__$1 = cljs.core.__destructure_map(map__45085);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45085__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45086,done,error){
var map__45087 = p__45086;
var map__45087__$1 = cljs.core.__destructure_map(map__45087);
var msg = map__45087__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45087__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45087__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45087__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45088){
var map__45089 = p__45088;
var map__45089__$1 = cljs.core.__destructure_map(map__45089);
var src = map__45089__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45090 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45090) : done.call(null,G__45090));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45091){
var map__45092 = p__45091;
var map__45092__$1 = cljs.core.__destructure_map(map__45092);
var msg__$1 = map__45092__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45092__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45093){var ex = e45093;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45094){
var map__45095 = p__45094;
var map__45095__$1 = cljs.core.__destructure_map(map__45095);
var env = map__45095__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__45104){
var map__45105 = p__45104;
var map__45105__$1 = cljs.core.__destructure_map(map__45105);
var msg = map__45105__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45105__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45107){
var map__45108 = p__45107;
var map__45108__$1 = cljs.core.__destructure_map(map__45108);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45108__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45108__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__45109){
var map__45110 = p__45109;
var map__45110__$1 = cljs.core.__destructure_map(map__45110);
var svc = map__45110__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45110__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
