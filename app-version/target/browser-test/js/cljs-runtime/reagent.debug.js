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
var G__56816__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56817__i = 0, G__56817__a = new Array(arguments.length -  0);
while (G__56817__i < G__56817__a.length) {G__56817__a[G__56817__i] = arguments[G__56817__i + 0]; ++G__56817__i;}
  args = new cljs.core.IndexedSeq(G__56817__a,0,null);
} 
return G__56816__delegate.call(this,args);};
G__56816.cljs$lang$maxFixedArity = 0;
G__56816.cljs$lang$applyTo = (function (arglist__56818){
var args = cljs.core.seq(arglist__56818);
return G__56816__delegate(args);
});
G__56816.cljs$core$IFn$_invoke$arity$variadic = G__56816__delegate;
return G__56816;
})()
);

(o.error = (function() { 
var G__56819__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56820__i = 0, G__56820__a = new Array(arguments.length -  0);
while (G__56820__i < G__56820__a.length) {G__56820__a[G__56820__i] = arguments[G__56820__i + 0]; ++G__56820__i;}
  args = new cljs.core.IndexedSeq(G__56820__a,0,null);
} 
return G__56819__delegate.call(this,args);};
G__56819.cljs$lang$maxFixedArity = 0;
G__56819.cljs$lang$applyTo = (function (arglist__56822){
var args = cljs.core.seq(arglist__56822);
return G__56819__delegate(args);
});
G__56819.cljs$core$IFn$_invoke$arity$variadic = G__56819__delegate;
return G__56819;
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
