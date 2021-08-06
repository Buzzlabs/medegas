goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__44131__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__44131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44132__i = 0, G__44132__a = new Array(arguments.length -  0);
while (G__44132__i < G__44132__a.length) {G__44132__a[G__44132__i] = arguments[G__44132__i + 0]; ++G__44132__i;}
  args = new cljs.core.IndexedSeq(G__44132__a,0,null);
} 
return G__44131__delegate.call(this,args);};
G__44131.cljs$lang$maxFixedArity = 0;
G__44131.cljs$lang$applyTo = (function (arglist__44133){
var args = cljs.core.seq(arglist__44133);
return G__44131__delegate(args);
});
G__44131.cljs$core$IFn$_invoke$arity$variadic = G__44131__delegate;
return G__44131;
})()
);

(o.error = (function() { 
var G__44134__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__44134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44135__i = 0, G__44135__a = new Array(arguments.length -  0);
while (G__44135__i < G__44135__a.length) {G__44135__a[G__44135__i] = arguments[G__44135__i + 0]; ++G__44135__i;}
  args = new cljs.core.IndexedSeq(G__44135__a,0,null);
} 
return G__44134__delegate.call(this,args);};
G__44134.cljs$lang$maxFixedArity = 0;
G__44134.cljs$lang$applyTo = (function (arglist__44136){
var args = cljs.core.seq(arglist__44136);
return G__44134__delegate(args);
});
G__44134.cljs$core$IFn$_invoke$arity$variadic = G__44134__delegate;
return G__44134;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
