goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__45331 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__45332 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__45332);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__45333 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__45334 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__45334);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__45333);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__45331);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__45346 = arguments.length;
switch (G__45346) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__45349 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45349,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45349,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__45356_45379 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__45357_45380 = null;
var count__45358_45381 = (0);
var i__45359_45382 = (0);
while(true){
if((i__45359_45382 < count__45358_45381)){
var vec__45370_45384 = chunk__45357_45380.cljs$core$IIndexed$_nth$arity$2(null,i__45359_45382);
var container_45385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45370_45384,(0),null);
var comp_45386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45370_45384,(1),null);
reagent.dom.re_render_component(comp_45386,container_45385);


var G__45387 = seq__45356_45379;
var G__45388 = chunk__45357_45380;
var G__45389 = count__45358_45381;
var G__45390 = (i__45359_45382 + (1));
seq__45356_45379 = G__45387;
chunk__45357_45380 = G__45388;
count__45358_45381 = G__45389;
i__45359_45382 = G__45390;
continue;
} else {
var temp__5753__auto___45391 = cljs.core.seq(seq__45356_45379);
if(temp__5753__auto___45391){
var seq__45356_45393__$1 = temp__5753__auto___45391;
if(cljs.core.chunked_seq_QMARK_(seq__45356_45393__$1)){
var c__4638__auto___45394 = cljs.core.chunk_first(seq__45356_45393__$1);
var G__45395 = cljs.core.chunk_rest(seq__45356_45393__$1);
var G__45396 = c__4638__auto___45394;
var G__45397 = cljs.core.count(c__4638__auto___45394);
var G__45398 = (0);
seq__45356_45379 = G__45395;
chunk__45357_45380 = G__45396;
count__45358_45381 = G__45397;
i__45359_45382 = G__45398;
continue;
} else {
var vec__45374_45399 = cljs.core.first(seq__45356_45393__$1);
var container_45400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45374_45399,(0),null);
var comp_45401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45374_45399,(1),null);
reagent.dom.re_render_component(comp_45401,container_45400);


var G__45402 = cljs.core.next(seq__45356_45393__$1);
var G__45403 = null;
var G__45404 = (0);
var G__45405 = (0);
seq__45356_45379 = G__45402;
chunk__45357_45380 = G__45403;
count__45358_45381 = G__45404;
i__45359_45382 = G__45405;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
