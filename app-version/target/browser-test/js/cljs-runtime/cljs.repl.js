goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55287){
var map__55288 = p__55287;
var map__55288__$1 = cljs.core.__destructure_map(map__55288);
var m = map__55288__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55288__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__55294_55721 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55295_55722 = null;
var count__55296_55723 = (0);
var i__55297_55724 = (0);
while(true){
if((i__55297_55724 < count__55296_55723)){
var f_55726 = chunk__55295_55722.cljs$core$IIndexed$_nth$arity$2(null,i__55297_55724);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_55726], 0));


var G__55727 = seq__55294_55721;
var G__55728 = chunk__55295_55722;
var G__55729 = count__55296_55723;
var G__55730 = (i__55297_55724 + (1));
seq__55294_55721 = G__55727;
chunk__55295_55722 = G__55728;
count__55296_55723 = G__55729;
i__55297_55724 = G__55730;
continue;
} else {
var temp__5753__auto___55731 = cljs.core.seq(seq__55294_55721);
if(temp__5753__auto___55731){
var seq__55294_55732__$1 = temp__5753__auto___55731;
if(cljs.core.chunked_seq_QMARK_(seq__55294_55732__$1)){
var c__4638__auto___55733 = cljs.core.chunk_first(seq__55294_55732__$1);
var G__55734 = cljs.core.chunk_rest(seq__55294_55732__$1);
var G__55735 = c__4638__auto___55733;
var G__55736 = cljs.core.count(c__4638__auto___55733);
var G__55737 = (0);
seq__55294_55721 = G__55734;
chunk__55295_55722 = G__55735;
count__55296_55723 = G__55736;
i__55297_55724 = G__55737;
continue;
} else {
var f_55738 = cljs.core.first(seq__55294_55732__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_55738], 0));


var G__55739 = cljs.core.next(seq__55294_55732__$1);
var G__55740 = null;
var G__55741 = (0);
var G__55742 = (0);
seq__55294_55721 = G__55739;
chunk__55295_55722 = G__55740;
count__55296_55723 = G__55741;
i__55297_55724 = G__55742;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55743 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_55743], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_55743)))?cljs.core.second(arglists_55743):arglists_55743)], 0));
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
var seq__55316_55744 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55317_55745 = null;
var count__55318_55746 = (0);
var i__55319_55747 = (0);
while(true){
if((i__55319_55747 < count__55318_55746)){
var vec__55340_55750 = chunk__55317_55745.cljs$core$IIndexed$_nth$arity$2(null,i__55319_55747);
var name_55751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55340_55750,(0),null);
var map__55343_55752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55340_55750,(1),null);
var map__55343_55753__$1 = cljs.core.__destructure_map(map__55343_55752);
var doc_55754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55343_55753__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55343_55753__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_55751], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_55755], 0));

if(cljs.core.truth_(doc_55754)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_55754], 0));
} else {
}


var G__55758 = seq__55316_55744;
var G__55759 = chunk__55317_55745;
var G__55760 = count__55318_55746;
var G__55761 = (i__55319_55747 + (1));
seq__55316_55744 = G__55758;
chunk__55317_55745 = G__55759;
count__55318_55746 = G__55760;
i__55319_55747 = G__55761;
continue;
} else {
var temp__5753__auto___55762 = cljs.core.seq(seq__55316_55744);
if(temp__5753__auto___55762){
var seq__55316_55763__$1 = temp__5753__auto___55762;
if(cljs.core.chunked_seq_QMARK_(seq__55316_55763__$1)){
var c__4638__auto___55764 = cljs.core.chunk_first(seq__55316_55763__$1);
var G__55765 = cljs.core.chunk_rest(seq__55316_55763__$1);
var G__55766 = c__4638__auto___55764;
var G__55767 = cljs.core.count(c__4638__auto___55764);
var G__55768 = (0);
seq__55316_55744 = G__55765;
chunk__55317_55745 = G__55766;
count__55318_55746 = G__55767;
i__55319_55747 = G__55768;
continue;
} else {
var vec__55352_55769 = cljs.core.first(seq__55316_55763__$1);
var name_55770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55352_55769,(0),null);
var map__55355_55771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55352_55769,(1),null);
var map__55355_55772__$1 = cljs.core.__destructure_map(map__55355_55771);
var doc_55773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55355_55772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55355_55772__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_55770], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_55774], 0));

if(cljs.core.truth_(doc_55773)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_55773], 0));
} else {
}


var G__55780 = cljs.core.next(seq__55316_55763__$1);
var G__55781 = null;
var G__55782 = (0);
var G__55783 = (0);
seq__55316_55744 = G__55780;
chunk__55317_55745 = G__55781;
count__55318_55746 = G__55782;
i__55319_55747 = G__55783;
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

var seq__55375 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55376 = null;
var count__55377 = (0);
var i__55378 = (0);
while(true){
if((i__55378 < count__55377)){
var role = chunk__55376.cljs$core$IIndexed$_nth$arity$2(null,i__55378);
var temp__5753__auto___55788__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___55788__$1)){
var spec_55789 = temp__5753__auto___55788__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_55789)], 0));
} else {
}


var G__55791 = seq__55375;
var G__55792 = chunk__55376;
var G__55793 = count__55377;
var G__55794 = (i__55378 + (1));
seq__55375 = G__55791;
chunk__55376 = G__55792;
count__55377 = G__55793;
i__55378 = G__55794;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__55375);
if(temp__5753__auto____$1){
var seq__55375__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__55375__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__55375__$1);
var G__55795 = cljs.core.chunk_rest(seq__55375__$1);
var G__55796 = c__4638__auto__;
var G__55797 = cljs.core.count(c__4638__auto__);
var G__55798 = (0);
seq__55375 = G__55795;
chunk__55376 = G__55796;
count__55377 = G__55797;
i__55378 = G__55798;
continue;
} else {
var role = cljs.core.first(seq__55375__$1);
var temp__5753__auto___55799__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___55799__$2)){
var spec_55800 = temp__5753__auto___55799__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_55800)], 0));
} else {
}


var G__55805 = cljs.core.next(seq__55375__$1);
var G__55806 = null;
var G__55807 = (0);
var G__55808 = (0);
seq__55375 = G__55805;
chunk__55376 = G__55806;
count__55377 = G__55807;
i__55378 = G__55808;
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
var G__55810 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__55811 = cljs.core.ex_cause(t);
via = G__55810;
t = G__55811;
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
var map__55454 = datafied_throwable;
var map__55454__$1 = cljs.core.__destructure_map(map__55454);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55454__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55454__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55454__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__55455 = cljs.core.last(via);
var map__55455__$1 = cljs.core.__destructure_map(map__55455);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55455__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55455__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55455__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__55456 = data;
var map__55456__$1 = cljs.core.__destructure_map(map__55456);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55456__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55456__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55456__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__55457 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__55457__$1 = cljs.core.__destructure_map(map__55457);
var top_data = map__55457__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55457__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__55480 = phase;
var G__55480__$1 = (((G__55480 instanceof cljs.core.Keyword))?G__55480.fqn:null);
switch (G__55480__$1) {
case "read-source":
var map__55487 = data;
var map__55487__$1 = cljs.core.__destructure_map(map__55487);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55487__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55487__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__55492 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__55492__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55492,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__55492);
var G__55492__$2 = (cljs.core.truth_((function (){var fexpr__55506 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55506.cljs$core$IFn$_invoke$arity$1 ? fexpr__55506.cljs$core$IFn$_invoke$arity$1(source) : fexpr__55506.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55492__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__55492__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55492__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__55492__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__55519 = top_data;
var G__55519__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55519,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__55519);
var G__55519__$2 = (cljs.core.truth_((function (){var fexpr__55525 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55525.cljs$core$IFn$_invoke$arity$1 ? fexpr__55525.cljs$core$IFn$_invoke$arity$1(source) : fexpr__55525.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55519__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__55519__$1);
var G__55519__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55519__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__55519__$2);
var G__55519__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55519__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__55519__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55519__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__55519__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__55540 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55540,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55540,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55540,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55540,(3),null);
var G__55552 = top_data;
var G__55552__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55552,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__55552);
var G__55552__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__55552__$1);
var G__55552__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55552__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__55552__$2);
var G__55552__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55552__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__55552__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55552__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__55552__$4;
}

break;
case "execution":
var vec__55578 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55578,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55578,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55578,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55578,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55433_SHARP_){
var or__4212__auto__ = (p1__55433_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__55583 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55583.cljs$core$IFn$_invoke$arity$1 ? fexpr__55583.cljs$core$IFn$_invoke$arity$1(p1__55433_SHARP_) : fexpr__55583.call(null,p1__55433_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__55584 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__55584__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55584,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__55584);
var G__55584__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55584__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__55584__$1);
var G__55584__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55584__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__55584__$2);
var G__55584__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55584__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__55584__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55584__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__55584__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55480__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__55602){
var map__55604 = p__55602;
var map__55604__$1 = cljs.core.__destructure_map(map__55604);
var triage_data = map__55604__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__55612 = phase;
var G__55612__$1 = (((G__55612 instanceof cljs.core.Keyword))?G__55612.fqn:null);
switch (G__55612__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__55614 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__55615 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55616 = loc;
var G__55617 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55618_55865 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55619_55866 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55620_55867 = true;
var _STAR_print_fn_STAR__temp_val__55621_55868 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55620_55867);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55621_55868);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55599_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55599_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55619_55866);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55618_55865);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__55614,G__55615,G__55616,G__55617) : format.call(null,G__55614,G__55615,G__55616,G__55617));

break;
case "macroexpansion":
var G__55630 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__55631 = cause_type;
var G__55632 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55633 = loc;
var G__55634 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55630,G__55631,G__55632,G__55633,G__55634) : format.call(null,G__55630,G__55631,G__55632,G__55633,G__55634));

break;
case "compile-syntax-check":
var G__55640 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__55641 = cause_type;
var G__55642 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55643 = loc;
var G__55644 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55640,G__55641,G__55642,G__55643,G__55644) : format.call(null,G__55640,G__55641,G__55642,G__55643,G__55644));

break;
case "compilation":
var G__55648 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__55649 = cause_type;
var G__55650 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55651 = loc;
var G__55652 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55648,G__55649,G__55650,G__55651,G__55652) : format.call(null,G__55648,G__55649,G__55650,G__55651,G__55652));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__55662 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__55663 = symbol;
var G__55664 = loc;
var G__55665 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55666_55927 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55667_55928 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55668_55929 = true;
var _STAR_print_fn_STAR__temp_val__55669_55930 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55668_55929);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55669_55930);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55601_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55601_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55667_55928);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55666_55927);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__55662,G__55663,G__55664,G__55665) : format.call(null,G__55662,G__55663,G__55664,G__55665));
} else {
var G__55696 = "Execution error%s at %s(%s).\n%s\n";
var G__55697 = cause_type;
var G__55698 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55699 = loc;
var G__55700 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55696,G__55697,G__55698,G__55699,G__55700) : format.call(null,G__55696,G__55697,G__55698,G__55699,G__55700));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55612__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
