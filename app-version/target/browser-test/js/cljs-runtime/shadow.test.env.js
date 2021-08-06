goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__4611__auto__ = (function shadow$test$env$get_test_vars_$_iter__56453(s__56454){
return (new cljs.core.LazySeq(null,(function (){
var s__56454__$1 = s__56454;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56454__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__56460 = cljs.core.first(xs__6308__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56460,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56460,(1),null);
var iterys__4607__auto__ = ((function (s__56454__$1,vec__56460,ns,ns_info,xs__6308__auto__,temp__5753__auto__){
return (function shadow$test$env$get_test_vars_$_iter__56453_$_iter__56455(s__56456){
return (new cljs.core.LazySeq(null,((function (s__56454__$1,vec__56460,ns,ns_info,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__56456__$1 = s__56456;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__56456__$1);
if(temp__5753__auto____$1){
var s__56456__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56456__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__56456__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__56458 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__56457 = (0);
while(true){
if((i__56457 < size__4610__auto__)){
var var$ = cljs.core._nth(c__4609__auto__,i__56457);
cljs.core.chunk_append(b__56458,var$);

var G__56522 = (i__56457 + (1));
i__56457 = G__56522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56458),shadow$test$env$get_test_vars_$_iter__56453_$_iter__56455(cljs.core.chunk_rest(s__56456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56458),null);
}
} else {
var var$ = cljs.core.first(s__56456__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__56453_$_iter__56455(cljs.core.rest(s__56456__$2)));
}
} else {
return null;
}
break;
}
});})(s__56454__$1,vec__56460,ns,ns_info,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__56454__$1,vec__56460,ns,ns_info,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$test$env$get_test_vars_$_iter__56453(cljs.core.rest(s__56454__$1)));
} else {
var G__56524 = cljs.core.rest(s__56454__$1);
s__56454__$1 = G__56524;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__4611__auto__ = (function shadow$test$env$get_test_count_$_iter__56504(s__56505){
return (new cljs.core.LazySeq(null,(function (){
var s__56505__$1 = s__56505;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56505__$1);
if(temp__5753__auto__){
var s__56505__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56505__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__56505__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__56507 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__56506 = (0);
while(true){
if((i__56506 < size__4610__auto__)){
var map__56509 = cljs.core._nth(c__4609__auto__,i__56506);
var map__56509__$1 = cljs.core.__destructure_map(map__56509);
var test_ns = map__56509__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56509__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__56507,cljs.core.count(vars));

var G__56531 = (i__56506 + (1));
i__56506 = G__56531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56507),shadow$test$env$get_test_count_$_iter__56504(cljs.core.chunk_rest(s__56505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56507),null);
}
} else {
var map__56511 = cljs.core.first(s__56505__$2);
var map__56511__$1 = cljs.core.__destructure_map(map__56511);
var test_ns = map__56511__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56511__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__56504(cljs.core.rest(s__56505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
