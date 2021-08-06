goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59499){
var map__59500 = p__59499;
var map__59500__$1 = cljs.core.__destructure_map(map__59500);
var m = map__59500__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59500__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__59501_59721 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59502_59722 = null;
var count__59503_59723 = (0);
var i__59504_59724 = (0);
while(true){
if((i__59504_59724 < count__59503_59723)){
var f_59725 = chunk__59502_59722.cljs$core$IIndexed$_nth$arity$2(null,i__59504_59724);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59725], 0));


var G__59726 = seq__59501_59721;
var G__59727 = chunk__59502_59722;
var G__59728 = count__59503_59723;
var G__59729 = (i__59504_59724 + (1));
seq__59501_59721 = G__59726;
chunk__59502_59722 = G__59727;
count__59503_59723 = G__59728;
i__59504_59724 = G__59729;
continue;
} else {
var temp__5753__auto___59730 = cljs.core.seq(seq__59501_59721);
if(temp__5753__auto___59730){
var seq__59501_59731__$1 = temp__5753__auto___59730;
if(cljs.core.chunked_seq_QMARK_(seq__59501_59731__$1)){
var c__4638__auto___59732 = cljs.core.chunk_first(seq__59501_59731__$1);
var G__59733 = cljs.core.chunk_rest(seq__59501_59731__$1);
var G__59734 = c__4638__auto___59732;
var G__59735 = cljs.core.count(c__4638__auto___59732);
var G__59736 = (0);
seq__59501_59721 = G__59733;
chunk__59502_59722 = G__59734;
count__59503_59723 = G__59735;
i__59504_59724 = G__59736;
continue;
} else {
var f_59737 = cljs.core.first(seq__59501_59731__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59737], 0));


var G__59738 = cljs.core.next(seq__59501_59731__$1);
var G__59739 = null;
var G__59740 = (0);
var G__59741 = (0);
seq__59501_59721 = G__59738;
chunk__59502_59722 = G__59739;
count__59503_59723 = G__59740;
i__59504_59724 = G__59741;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59742 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_59742], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_59742)))?cljs.core.second(arglists_59742):arglists_59742)], 0));
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
var seq__59512_59743 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59513_59744 = null;
var count__59514_59745 = (0);
var i__59515_59746 = (0);
while(true){
if((i__59515_59746 < count__59514_59745)){
var vec__59527_59747 = chunk__59513_59744.cljs$core$IIndexed$_nth$arity$2(null,i__59515_59746);
var name_59748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59527_59747,(0),null);
var map__59530_59749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59527_59747,(1),null);
var map__59530_59750__$1 = cljs.core.__destructure_map(map__59530_59749);
var doc_59751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59530_59750__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59530_59750__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59748], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59752], 0));

if(cljs.core.truth_(doc_59751)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59751], 0));
} else {
}


var G__59753 = seq__59512_59743;
var G__59754 = chunk__59513_59744;
var G__59755 = count__59514_59745;
var G__59756 = (i__59515_59746 + (1));
seq__59512_59743 = G__59753;
chunk__59513_59744 = G__59754;
count__59514_59745 = G__59755;
i__59515_59746 = G__59756;
continue;
} else {
var temp__5753__auto___59760 = cljs.core.seq(seq__59512_59743);
if(temp__5753__auto___59760){
var seq__59512_59761__$1 = temp__5753__auto___59760;
if(cljs.core.chunked_seq_QMARK_(seq__59512_59761__$1)){
var c__4638__auto___59762 = cljs.core.chunk_first(seq__59512_59761__$1);
var G__59763 = cljs.core.chunk_rest(seq__59512_59761__$1);
var G__59764 = c__4638__auto___59762;
var G__59765 = cljs.core.count(c__4638__auto___59762);
var G__59766 = (0);
seq__59512_59743 = G__59763;
chunk__59513_59744 = G__59764;
count__59514_59745 = G__59765;
i__59515_59746 = G__59766;
continue;
} else {
var vec__59533_59767 = cljs.core.first(seq__59512_59761__$1);
var name_59768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59533_59767,(0),null);
var map__59536_59769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59533_59767,(1),null);
var map__59536_59770__$1 = cljs.core.__destructure_map(map__59536_59769);
var doc_59771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59536_59770__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59536_59770__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59768], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59772], 0));

if(cljs.core.truth_(doc_59771)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59771], 0));
} else {
}


var G__59773 = cljs.core.next(seq__59512_59761__$1);
var G__59774 = null;
var G__59775 = (0);
var G__59776 = (0);
seq__59512_59743 = G__59773;
chunk__59513_59744 = G__59774;
count__59514_59745 = G__59775;
i__59515_59746 = G__59776;
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

var seq__59537 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59538 = null;
var count__59539 = (0);
var i__59540 = (0);
while(true){
if((i__59540 < count__59539)){
var role = chunk__59538.cljs$core$IIndexed$_nth$arity$2(null,i__59540);
var temp__5753__auto___59781__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___59781__$1)){
var spec_59782 = temp__5753__auto___59781__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59782)], 0));
} else {
}


var G__59783 = seq__59537;
var G__59784 = chunk__59538;
var G__59785 = count__59539;
var G__59786 = (i__59540 + (1));
seq__59537 = G__59783;
chunk__59538 = G__59784;
count__59539 = G__59785;
i__59540 = G__59786;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__59537);
if(temp__5753__auto____$1){
var seq__59537__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59537__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__59537__$1);
var G__59787 = cljs.core.chunk_rest(seq__59537__$1);
var G__59788 = c__4638__auto__;
var G__59789 = cljs.core.count(c__4638__auto__);
var G__59790 = (0);
seq__59537 = G__59787;
chunk__59538 = G__59788;
count__59539 = G__59789;
i__59540 = G__59790;
continue;
} else {
var role = cljs.core.first(seq__59537__$1);
var temp__5753__auto___59791__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___59791__$2)){
var spec_59794 = temp__5753__auto___59791__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59794)], 0));
} else {
}


var G__59795 = cljs.core.next(seq__59537__$1);
var G__59796 = null;
var G__59797 = (0);
var G__59798 = (0);
seq__59537 = G__59795;
chunk__59538 = G__59796;
count__59539 = G__59797;
i__59540 = G__59798;
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
var G__59799 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__59800 = cljs.core.ex_cause(t);
via = G__59799;
t = G__59800;
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
var map__59641 = datafied_throwable;
var map__59641__$1 = cljs.core.__destructure_map(map__59641);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59641__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59641__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59641__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59642 = cljs.core.last(via);
var map__59642__$1 = cljs.core.__destructure_map(map__59642);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59642__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59642__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59642__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59643 = data;
var map__59643__$1 = cljs.core.__destructure_map(map__59643);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59643__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59643__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59643__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59644 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__59644__$1 = cljs.core.__destructure_map(map__59644);
var top_data = map__59644__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59644__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__59647 = phase;
var G__59647__$1 = (((G__59647 instanceof cljs.core.Keyword))?G__59647.fqn:null);
switch (G__59647__$1) {
case "read-source":
var map__59648 = data;
var map__59648__$1 = cljs.core.__destructure_map(map__59648);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59648__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59648__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59650 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__59650__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59650,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59650);
var G__59650__$2 = (cljs.core.truth_((function (){var fexpr__59651 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59651.cljs$core$IFn$_invoke$arity$1 ? fexpr__59651.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59651.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59650__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59650__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59650__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59650__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__59652 = top_data;
var G__59652__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59652,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59652);
var G__59652__$2 = (cljs.core.truth_((function (){var fexpr__59653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59653.cljs$core$IFn$_invoke$arity$1 ? fexpr__59653.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59653.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59652__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59652__$1);
var G__59652__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59652__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59652__$2);
var G__59652__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59652__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59652__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59652__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59652__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__59654 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59654,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59654,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59654,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59654,(3),null);
var G__59661 = top_data;
var G__59661__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59661,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__59661);
var G__59661__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59661__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__59661__$1);
var G__59661__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59661__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__59661__$2);
var G__59661__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59661__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59661__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59661__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59661__$4;
}

break;
case "execution":
var vec__59666 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59666,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59666,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59666,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59666,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59639_SHARP_){
var or__4212__auto__ = (p1__59639_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__59669 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59669.cljs$core$IFn$_invoke$arity$1 ? fexpr__59669.cljs$core$IFn$_invoke$arity$1(p1__59639_SHARP_) : fexpr__59669.call(null,p1__59639_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__59670 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__59670__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59670,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__59670);
var G__59670__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59670__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59670__$1);
var G__59670__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59670__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__59670__$2);
var G__59670__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59670__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__59670__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59670__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59670__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59647__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__59674){
var map__59675 = p__59674;
var map__59675__$1 = cljs.core.__destructure_map(map__59675);
var triage_data = map__59675__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59675__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59675__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59675__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59675__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59675__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59675__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59675__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59675__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__59677 = phase;
var G__59677__$1 = (((G__59677 instanceof cljs.core.Keyword))?G__59677.fqn:null);
switch (G__59677__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__59678 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__59679 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59680 = loc;
var G__59681 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59682_59810 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59683_59811 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59684_59812 = true;
var _STAR_print_fn_STAR__temp_val__59685_59813 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59684_59812);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59685_59813);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59672_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59672_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59683_59811);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59682_59810);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59678,G__59679,G__59680,G__59681) : format.call(null,G__59678,G__59679,G__59680,G__59681));

break;
case "macroexpansion":
var G__59687 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__59688 = cause_type;
var G__59689 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59690 = loc;
var G__59691 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59687,G__59688,G__59689,G__59690,G__59691) : format.call(null,G__59687,G__59688,G__59689,G__59690,G__59691));

break;
case "compile-syntax-check":
var G__59692 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__59693 = cause_type;
var G__59694 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59695 = loc;
var G__59696 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59692,G__59693,G__59694,G__59695,G__59696) : format.call(null,G__59692,G__59693,G__59694,G__59695,G__59696));

break;
case "compilation":
var G__59697 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__59698 = cause_type;
var G__59699 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59700 = loc;
var G__59701 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59697,G__59698,G__59699,G__59700,G__59701) : format.call(null,G__59697,G__59698,G__59699,G__59700,G__59701));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__59702 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__59703 = symbol;
var G__59704 = loc;
var G__59705 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59708_59817 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59709_59818 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59710_59819 = true;
var _STAR_print_fn_STAR__temp_val__59711_59820 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59710_59819);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59711_59820);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59673_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59673_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59709_59818);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59708_59817);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59702,G__59703,G__59704,G__59705) : format.call(null,G__59702,G__59703,G__59704,G__59705));
} else {
var G__59714 = "Execution error%s at %s(%s).\n%s\n";
var G__59715 = cause_type;
var G__59716 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59717 = loc;
var G__59718 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59714,G__59715,G__59716,G__59717,G__59718) : format.call(null,G__59714,G__59715,G__59716,G__59717,G__59718));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59677__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
