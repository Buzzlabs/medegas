goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43052){
var map__43054 = p__43052;
var map__43054__$1 = cljs.core.__destructure_map(map__43054);
var m = map__43054__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43054__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43066_43409 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43067_43410 = null;
var count__43068_43411 = (0);
var i__43069_43412 = (0);
while(true){
if((i__43069_43412 < count__43068_43411)){
var f_43413 = chunk__43067_43410.cljs$core$IIndexed$_nth$arity$2(null,i__43069_43412);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43413], 0));


var G__43414 = seq__43066_43409;
var G__43415 = chunk__43067_43410;
var G__43416 = count__43068_43411;
var G__43417 = (i__43069_43412 + (1));
seq__43066_43409 = G__43414;
chunk__43067_43410 = G__43415;
count__43068_43411 = G__43416;
i__43069_43412 = G__43417;
continue;
} else {
var temp__5753__auto___43418 = cljs.core.seq(seq__43066_43409);
if(temp__5753__auto___43418){
var seq__43066_43419__$1 = temp__5753__auto___43418;
if(cljs.core.chunked_seq_QMARK_(seq__43066_43419__$1)){
var c__4638__auto___43420 = cljs.core.chunk_first(seq__43066_43419__$1);
var G__43421 = cljs.core.chunk_rest(seq__43066_43419__$1);
var G__43422 = c__4638__auto___43420;
var G__43423 = cljs.core.count(c__4638__auto___43420);
var G__43424 = (0);
seq__43066_43409 = G__43421;
chunk__43067_43410 = G__43422;
count__43068_43411 = G__43423;
i__43069_43412 = G__43424;
continue;
} else {
var f_43425 = cljs.core.first(seq__43066_43419__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43425], 0));


var G__43431 = cljs.core.next(seq__43066_43419__$1);
var G__43432 = null;
var G__43433 = (0);
var G__43434 = (0);
seq__43066_43409 = G__43431;
chunk__43067_43410 = G__43432;
count__43068_43411 = G__43433;
i__43069_43412 = G__43434;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43436 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43436], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43436)))?cljs.core.second(arglists_43436):arglists_43436)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43110_43441 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43111_43442 = null;
var count__43112_43443 = (0);
var i__43113_43444 = (0);
while(true){
if((i__43113_43444 < count__43112_43443)){
var vec__43144_43447 = chunk__43111_43442.cljs$core$IIndexed$_nth$arity$2(null,i__43113_43444);
var name_43448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43144_43447,(0),null);
var map__43147_43449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43144_43447,(1),null);
var map__43147_43450__$1 = cljs.core.__destructure_map(map__43147_43449);
var doc_43451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43147_43450__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43147_43450__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43448], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43452], 0));

if(cljs.core.truth_(doc_43451)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43451], 0));
} else {
}


var G__43459 = seq__43110_43441;
var G__43460 = chunk__43111_43442;
var G__43461 = count__43112_43443;
var G__43462 = (i__43113_43444 + (1));
seq__43110_43441 = G__43459;
chunk__43111_43442 = G__43460;
count__43112_43443 = G__43461;
i__43113_43444 = G__43462;
continue;
} else {
var temp__5753__auto___43465 = cljs.core.seq(seq__43110_43441);
if(temp__5753__auto___43465){
var seq__43110_43470__$1 = temp__5753__auto___43465;
if(cljs.core.chunked_seq_QMARK_(seq__43110_43470__$1)){
var c__4638__auto___43472 = cljs.core.chunk_first(seq__43110_43470__$1);
var G__43473 = cljs.core.chunk_rest(seq__43110_43470__$1);
var G__43474 = c__4638__auto___43472;
var G__43475 = cljs.core.count(c__4638__auto___43472);
var G__43476 = (0);
seq__43110_43441 = G__43473;
chunk__43111_43442 = G__43474;
count__43112_43443 = G__43475;
i__43113_43444 = G__43476;
continue;
} else {
var vec__43154_43485 = cljs.core.first(seq__43110_43470__$1);
var name_43486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43154_43485,(0),null);
var map__43157_43487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43154_43485,(1),null);
var map__43157_43488__$1 = cljs.core.__destructure_map(map__43157_43487);
var doc_43489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43157_43488__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43157_43488__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43486], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43490], 0));

if(cljs.core.truth_(doc_43489)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43489], 0));
} else {
}


var G__43508 = cljs.core.next(seq__43110_43470__$1);
var G__43509 = null;
var G__43510 = (0);
var G__43511 = (0);
seq__43110_43441 = G__43508;
chunk__43111_43442 = G__43509;
count__43112_43443 = G__43510;
i__43113_43444 = G__43511;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__43159 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43160 = null;
var count__43161 = (0);
var i__43163 = (0);
while(true){
if((i__43163 < count__43161)){
var role = chunk__43160.cljs$core$IIndexed$_nth$arity$2(null,i__43163);
var temp__5753__auto___43525__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___43525__$1)){
var spec_43530 = temp__5753__auto___43525__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43530)], 0));
} else {
}


var G__43532 = seq__43159;
var G__43533 = chunk__43160;
var G__43534 = count__43161;
var G__43535 = (i__43163 + (1));
seq__43159 = G__43532;
chunk__43160 = G__43533;
count__43161 = G__43534;
i__43163 = G__43535;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__43159);
if(temp__5753__auto____$1){
var seq__43159__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43159__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43159__$1);
var G__43549 = cljs.core.chunk_rest(seq__43159__$1);
var G__43550 = c__4638__auto__;
var G__43551 = cljs.core.count(c__4638__auto__);
var G__43552 = (0);
seq__43159 = G__43549;
chunk__43160 = G__43550;
count__43161 = G__43551;
i__43163 = G__43552;
continue;
} else {
var role = cljs.core.first(seq__43159__$1);
var temp__5753__auto___43559__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___43559__$2)){
var spec_43560 = temp__5753__auto___43559__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43560)], 0));
} else {
}


var G__43566 = cljs.core.next(seq__43159__$1);
var G__43567 = null;
var G__43568 = (0);
var G__43569 = (0);
seq__43159 = G__43566;
chunk__43160 = G__43567;
count__43161 = G__43568;
i__43163 = G__43569;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__43578 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43579 = cljs.core.ex_cause(t);
via = G__43578;
t = G__43579;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__43183 = datafied_throwable;
var map__43183__$1 = cljs.core.__destructure_map(map__43183);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43183__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43183__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43183__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43184 = cljs.core.last(via);
var map__43184__$1 = cljs.core.__destructure_map(map__43184);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43184__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43184__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43184__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43185 = data;
var map__43185__$1 = cljs.core.__destructure_map(map__43185);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43185__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43185__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43185__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43186 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43186__$1 = cljs.core.__destructure_map(map__43186);
var top_data = map__43186__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43186__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43204 = phase;
var G__43204__$1 = (((G__43204 instanceof cljs.core.Keyword))?G__43204.fqn:null);
switch (G__43204__$1) {
case "read-source":
var map__43205 = data;
var map__43205__$1 = cljs.core.__destructure_map(map__43205);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43205__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43205__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43208 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43208__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43208,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43208);
var G__43208__$2 = (cljs.core.truth_((function (){var fexpr__43216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43216.cljs$core$IFn$_invoke$arity$1 ? fexpr__43216.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43216.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43208__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43208__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43208__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43208__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43217 = top_data;
var G__43217__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43217,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43217);
var G__43217__$2 = (cljs.core.truth_((function (){var fexpr__43224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43224.cljs$core$IFn$_invoke$arity$1 ? fexpr__43224.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43224.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43217__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43217__$1);
var G__43217__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43217__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43217__$2);
var G__43217__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43217__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43217__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43217__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43217__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43241 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43241,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43241,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43241,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43241,(3),null);
var G__43266 = top_data;
var G__43266__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43266,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43266);
var G__43266__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43266__$1);
var G__43266__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43266__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43266__$2);
var G__43266__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43266__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43266__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43266__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43266__$4;
}

break;
case "execution":
var vec__43277 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43182_SHARP_){
var or__4212__auto__ = (p1__43182_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__43288 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43288.cljs$core$IFn$_invoke$arity$1 ? fexpr__43288.cljs$core$IFn$_invoke$arity$1(p1__43182_SHARP_) : fexpr__43288.call(null,p1__43182_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__43295 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43295__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43295,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43295);
var G__43295__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43295__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43295__$1);
var G__43295__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43295__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43295__$2);
var G__43295__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43295__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43295__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43295__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43295__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43204__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43314){
var map__43316 = p__43314;
var map__43316__$1 = cljs.core.__destructure_map(map__43316);
var triage_data = map__43316__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__43320 = phase;
var G__43320__$1 = (((G__43320 instanceof cljs.core.Keyword))?G__43320.fqn:null);
switch (G__43320__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43322 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43323 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43324 = loc;
var G__43325 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43328_43649 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43329_43650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43330_43651 = true;
var _STAR_print_fn_STAR__temp_val__43331_43652 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43330_43651);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43331_43652);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43311_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43311_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43329_43650);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43328_43649);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43322,G__43323,G__43324,G__43325) : format.call(null,G__43322,G__43323,G__43324,G__43325));

break;
case "macroexpansion":
var G__43334 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43335 = cause_type;
var G__43336 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43337 = loc;
var G__43338 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43334,G__43335,G__43336,G__43337,G__43338) : format.call(null,G__43334,G__43335,G__43336,G__43337,G__43338));

break;
case "compile-syntax-check":
var G__43339 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43340 = cause_type;
var G__43341 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43342 = loc;
var G__43343 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43339,G__43340,G__43341,G__43342,G__43343) : format.call(null,G__43339,G__43340,G__43341,G__43342,G__43343));

break;
case "compilation":
var G__43345 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43346 = cause_type;
var G__43347 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43348 = loc;
var G__43349 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43345,G__43346,G__43347,G__43348,G__43349) : format.call(null,G__43345,G__43346,G__43347,G__43348,G__43349));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43355 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43356 = symbol;
var G__43357 = loc;
var G__43358 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43364_43666 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43365_43667 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43366_43668 = true;
var _STAR_print_fn_STAR__temp_val__43367_43669 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43366_43668);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43367_43669);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43312_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43312_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43365_43667);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43364_43666);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43355,G__43356,G__43357,G__43358) : format.call(null,G__43355,G__43356,G__43357,G__43358));
} else {
var G__43387 = "Execution error%s at %s(%s).\n%s\n";
var G__43388 = cause_type;
var G__43389 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43390 = loc;
var G__43391 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43387,G__43388,G__43389,G__43390,G__43391) : format.call(null,G__43387,G__43388,G__43389,G__43390,G__43391));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43320__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
