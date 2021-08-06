goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_43313 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_43313(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_43315 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_43315(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__42209 = coll;
var G__42210 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__42209,G__42210) : shadow.dom.lazy_native_coll_seq.call(null,G__42209,G__42210));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__42229 = arguments.length;
switch (G__42229) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__42246 = arguments.length;
switch (G__42246) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__42261 = arguments.length;
switch (G__42261) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__42273 = arguments.length;
switch (G__42273) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__42281 = arguments.length;
switch (G__42281) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__42297 = arguments.length;
switch (G__42297) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e42305){if((e42305 instanceof Object)){
var e = e42305;
return console.log("didnt support attachEvent",el,e);
} else {
throw e42305;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__42315 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__42316 = null;
var count__42317 = (0);
var i__42318 = (0);
while(true){
if((i__42318 < count__42317)){
var el = chunk__42316.cljs$core$IIndexed$_nth$arity$2(null,i__42318);
var handler_43350__$1 = ((function (seq__42315,chunk__42316,count__42317,i__42318,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__42315,chunk__42316,count__42317,i__42318,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43350__$1);


var G__43351 = seq__42315;
var G__43352 = chunk__42316;
var G__43353 = count__42317;
var G__43354 = (i__42318 + (1));
seq__42315 = G__43351;
chunk__42316 = G__43352;
count__42317 = G__43353;
i__42318 = G__43354;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42315);
if(temp__5753__auto__){
var seq__42315__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42315__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42315__$1);
var G__43359 = cljs.core.chunk_rest(seq__42315__$1);
var G__43360 = c__4638__auto__;
var G__43361 = cljs.core.count(c__4638__auto__);
var G__43362 = (0);
seq__42315 = G__43359;
chunk__42316 = G__43360;
count__42317 = G__43361;
i__42318 = G__43362;
continue;
} else {
var el = cljs.core.first(seq__42315__$1);
var handler_43363__$1 = ((function (seq__42315,chunk__42316,count__42317,i__42318,el,seq__42315__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__42315,chunk__42316,count__42317,i__42318,el,seq__42315__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43363__$1);


var G__43368 = cljs.core.next(seq__42315__$1);
var G__43369 = null;
var G__43370 = (0);
var G__43371 = (0);
seq__42315 = G__43368;
chunk__42316 = G__43369;
count__42317 = G__43370;
i__42318 = G__43371;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__42339 = arguments.length;
switch (G__42339) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__42365 = cljs.core.seq(events);
var chunk__42366 = null;
var count__42367 = (0);
var i__42368 = (0);
while(true){
if((i__42368 < count__42367)){
var vec__42392 = chunk__42366.cljs$core$IIndexed$_nth$arity$2(null,i__42368);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42392,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42392,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43374 = seq__42365;
var G__43375 = chunk__42366;
var G__43376 = count__42367;
var G__43377 = (i__42368 + (1));
seq__42365 = G__43374;
chunk__42366 = G__43375;
count__42367 = G__43376;
i__42368 = G__43377;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42365);
if(temp__5753__auto__){
var seq__42365__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42365__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42365__$1);
var G__43379 = cljs.core.chunk_rest(seq__42365__$1);
var G__43380 = c__4638__auto__;
var G__43381 = cljs.core.count(c__4638__auto__);
var G__43382 = (0);
seq__42365 = G__43379;
chunk__42366 = G__43380;
count__42367 = G__43381;
i__42368 = G__43382;
continue;
} else {
var vec__42401 = cljs.core.first(seq__42365__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42401,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43383 = cljs.core.next(seq__42365__$1);
var G__43384 = null;
var G__43385 = (0);
var G__43386 = (0);
seq__42365 = G__43383;
chunk__42366 = G__43384;
count__42367 = G__43385;
i__42368 = G__43386;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__42406 = cljs.core.seq(styles);
var chunk__42407 = null;
var count__42408 = (0);
var i__42409 = (0);
while(true){
if((i__42409 < count__42408)){
var vec__42419 = chunk__42407.cljs$core$IIndexed$_nth$arity$2(null,i__42409);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42419,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43392 = seq__42406;
var G__43393 = chunk__42407;
var G__43394 = count__42408;
var G__43395 = (i__42409 + (1));
seq__42406 = G__43392;
chunk__42407 = G__43393;
count__42408 = G__43394;
i__42409 = G__43395;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42406);
if(temp__5753__auto__){
var seq__42406__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42406__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42406__$1);
var G__43396 = cljs.core.chunk_rest(seq__42406__$1);
var G__43397 = c__4638__auto__;
var G__43398 = cljs.core.count(c__4638__auto__);
var G__43399 = (0);
seq__42406 = G__43396;
chunk__42407 = G__43397;
count__42408 = G__43398;
i__42409 = G__43399;
continue;
} else {
var vec__42426 = cljs.core.first(seq__42406__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42426,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43400 = cljs.core.next(seq__42406__$1);
var G__43401 = null;
var G__43402 = (0);
var G__43404 = (0);
seq__42406 = G__43400;
chunk__42407 = G__43401;
count__42408 = G__43402;
i__42409 = G__43404;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__42434_43405 = key;
var G__42434_43406__$1 = (((G__42434_43405 instanceof cljs.core.Keyword))?G__42434_43405.fqn:null);
switch (G__42434_43406__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_43408 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_43408,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_43408,"aria-");
}
})())){
el.setAttribute(ks_43408,value);
} else {
(el[ks_43408] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__42472){
var map__42473 = p__42472;
var map__42473__$1 = cljs.core.__destructure_map(map__42473);
var props = map__42473__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42473__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__42475 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42475,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42475,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42475,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__42478 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__42478,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__42478;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__42483 = arguments.length;
switch (G__42483) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__42487){
var vec__42489 = p__42487;
var seq__42490 = cljs.core.seq(vec__42489);
var first__42491 = cljs.core.first(seq__42490);
var seq__42490__$1 = cljs.core.next(seq__42490);
var nn = first__42491;
var first__42491__$1 = cljs.core.first(seq__42490__$1);
var seq__42490__$2 = cljs.core.next(seq__42490__$1);
var np = first__42491__$1;
var nc = seq__42490__$2;
var node = vec__42489;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42501 = nn;
var G__42502 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42501,G__42502) : create_fn.call(null,G__42501,G__42502));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42503 = nn;
var G__42504 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42503,G__42504) : create_fn.call(null,G__42503,G__42504));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__42507 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42507,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42507,(1),null);
var seq__42510_43455 = cljs.core.seq(node_children);
var chunk__42511_43456 = null;
var count__42512_43457 = (0);
var i__42513_43458 = (0);
while(true){
if((i__42513_43458 < count__42512_43457)){
var child_struct_43463 = chunk__42511_43456.cljs$core$IIndexed$_nth$arity$2(null,i__42513_43458);
var children_43464 = shadow.dom.dom_node(child_struct_43463);
if(cljs.core.seq_QMARK_(children_43464)){
var seq__42563_43466 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43464));
var chunk__42565_43467 = null;
var count__42566_43468 = (0);
var i__42567_43469 = (0);
while(true){
if((i__42567_43469 < count__42566_43468)){
var child_43471 = chunk__42565_43467.cljs$core$IIndexed$_nth$arity$2(null,i__42567_43469);
if(cljs.core.truth_(child_43471)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43471);


var G__43477 = seq__42563_43466;
var G__43478 = chunk__42565_43467;
var G__43479 = count__42566_43468;
var G__43480 = (i__42567_43469 + (1));
seq__42563_43466 = G__43477;
chunk__42565_43467 = G__43478;
count__42566_43468 = G__43479;
i__42567_43469 = G__43480;
continue;
} else {
var G__43481 = seq__42563_43466;
var G__43482 = chunk__42565_43467;
var G__43483 = count__42566_43468;
var G__43484 = (i__42567_43469 + (1));
seq__42563_43466 = G__43481;
chunk__42565_43467 = G__43482;
count__42566_43468 = G__43483;
i__42567_43469 = G__43484;
continue;
}
} else {
var temp__5753__auto___43491 = cljs.core.seq(seq__42563_43466);
if(temp__5753__auto___43491){
var seq__42563_43493__$1 = temp__5753__auto___43491;
if(cljs.core.chunked_seq_QMARK_(seq__42563_43493__$1)){
var c__4638__auto___43494 = cljs.core.chunk_first(seq__42563_43493__$1);
var G__43495 = cljs.core.chunk_rest(seq__42563_43493__$1);
var G__43496 = c__4638__auto___43494;
var G__43497 = cljs.core.count(c__4638__auto___43494);
var G__43498 = (0);
seq__42563_43466 = G__43495;
chunk__42565_43467 = G__43496;
count__42566_43468 = G__43497;
i__42567_43469 = G__43498;
continue;
} else {
var child_43499 = cljs.core.first(seq__42563_43493__$1);
if(cljs.core.truth_(child_43499)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43499);


var G__43500 = cljs.core.next(seq__42563_43493__$1);
var G__43501 = null;
var G__43502 = (0);
var G__43503 = (0);
seq__42563_43466 = G__43500;
chunk__42565_43467 = G__43501;
count__42566_43468 = G__43502;
i__42567_43469 = G__43503;
continue;
} else {
var G__43504 = cljs.core.next(seq__42563_43493__$1);
var G__43505 = null;
var G__43506 = (0);
var G__43507 = (0);
seq__42563_43466 = G__43504;
chunk__42565_43467 = G__43505;
count__42566_43468 = G__43506;
i__42567_43469 = G__43507;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43464);
}


var G__43512 = seq__42510_43455;
var G__43513 = chunk__42511_43456;
var G__43514 = count__42512_43457;
var G__43515 = (i__42513_43458 + (1));
seq__42510_43455 = G__43512;
chunk__42511_43456 = G__43513;
count__42512_43457 = G__43514;
i__42513_43458 = G__43515;
continue;
} else {
var temp__5753__auto___43516 = cljs.core.seq(seq__42510_43455);
if(temp__5753__auto___43516){
var seq__42510_43517__$1 = temp__5753__auto___43516;
if(cljs.core.chunked_seq_QMARK_(seq__42510_43517__$1)){
var c__4638__auto___43518 = cljs.core.chunk_first(seq__42510_43517__$1);
var G__43519 = cljs.core.chunk_rest(seq__42510_43517__$1);
var G__43520 = c__4638__auto___43518;
var G__43521 = cljs.core.count(c__4638__auto___43518);
var G__43522 = (0);
seq__42510_43455 = G__43519;
chunk__42511_43456 = G__43520;
count__42512_43457 = G__43521;
i__42513_43458 = G__43522;
continue;
} else {
var child_struct_43523 = cljs.core.first(seq__42510_43517__$1);
var children_43524 = shadow.dom.dom_node(child_struct_43523);
if(cljs.core.seq_QMARK_(children_43524)){
var seq__42595_43526 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43524));
var chunk__42599_43527 = null;
var count__42600_43528 = (0);
var i__42601_43529 = (0);
while(true){
if((i__42601_43529 < count__42600_43528)){
var child_43531 = chunk__42599_43527.cljs$core$IIndexed$_nth$arity$2(null,i__42601_43529);
if(cljs.core.truth_(child_43531)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43531);


var G__43537 = seq__42595_43526;
var G__43538 = chunk__42599_43527;
var G__43539 = count__42600_43528;
var G__43540 = (i__42601_43529 + (1));
seq__42595_43526 = G__43537;
chunk__42599_43527 = G__43538;
count__42600_43528 = G__43539;
i__42601_43529 = G__43540;
continue;
} else {
var G__43541 = seq__42595_43526;
var G__43542 = chunk__42599_43527;
var G__43543 = count__42600_43528;
var G__43544 = (i__42601_43529 + (1));
seq__42595_43526 = G__43541;
chunk__42599_43527 = G__43542;
count__42600_43528 = G__43543;
i__42601_43529 = G__43544;
continue;
}
} else {
var temp__5753__auto___43548__$1 = cljs.core.seq(seq__42595_43526);
if(temp__5753__auto___43548__$1){
var seq__42595_43553__$1 = temp__5753__auto___43548__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42595_43553__$1)){
var c__4638__auto___43554 = cljs.core.chunk_first(seq__42595_43553__$1);
var G__43555 = cljs.core.chunk_rest(seq__42595_43553__$1);
var G__43556 = c__4638__auto___43554;
var G__43557 = cljs.core.count(c__4638__auto___43554);
var G__43558 = (0);
seq__42595_43526 = G__43555;
chunk__42599_43527 = G__43556;
count__42600_43528 = G__43557;
i__42601_43529 = G__43558;
continue;
} else {
var child_43561 = cljs.core.first(seq__42595_43553__$1);
if(cljs.core.truth_(child_43561)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43561);


var G__43562 = cljs.core.next(seq__42595_43553__$1);
var G__43563 = null;
var G__43564 = (0);
var G__43565 = (0);
seq__42595_43526 = G__43562;
chunk__42599_43527 = G__43563;
count__42600_43528 = G__43564;
i__42601_43529 = G__43565;
continue;
} else {
var G__43570 = cljs.core.next(seq__42595_43553__$1);
var G__43571 = null;
var G__43572 = (0);
var G__43573 = (0);
seq__42595_43526 = G__43570;
chunk__42599_43527 = G__43571;
count__42600_43528 = G__43572;
i__42601_43529 = G__43573;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43524);
}


var G__43574 = cljs.core.next(seq__42510_43517__$1);
var G__43575 = null;
var G__43576 = (0);
var G__43577 = (0);
seq__42510_43455 = G__43574;
chunk__42511_43456 = G__43575;
count__42512_43457 = G__43576;
i__42513_43458 = G__43577;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__42654 = cljs.core.seq(node);
var chunk__42655 = null;
var count__42656 = (0);
var i__42657 = (0);
while(true){
if((i__42657 < count__42656)){
var n = chunk__42655.cljs$core$IIndexed$_nth$arity$2(null,i__42657);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43580 = seq__42654;
var G__43581 = chunk__42655;
var G__43582 = count__42656;
var G__43583 = (i__42657 + (1));
seq__42654 = G__43580;
chunk__42655 = G__43581;
count__42656 = G__43582;
i__42657 = G__43583;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42654);
if(temp__5753__auto__){
var seq__42654__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42654__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42654__$1);
var G__43584 = cljs.core.chunk_rest(seq__42654__$1);
var G__43585 = c__4638__auto__;
var G__43586 = cljs.core.count(c__4638__auto__);
var G__43587 = (0);
seq__42654 = G__43584;
chunk__42655 = G__43585;
count__42656 = G__43586;
i__42657 = G__43587;
continue;
} else {
var n = cljs.core.first(seq__42654__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43588 = cljs.core.next(seq__42654__$1);
var G__43589 = null;
var G__43590 = (0);
var G__43591 = (0);
seq__42654 = G__43588;
chunk__42655 = G__43589;
count__42656 = G__43590;
i__42657 = G__43591;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__42671 = arguments.length;
switch (G__42671) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__42688 = arguments.length;
switch (G__42688) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__42710 = arguments.length;
switch (G__42710) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___43597 = arguments.length;
var i__4819__auto___43598 = (0);
while(true){
if((i__4819__auto___43598 < len__4818__auto___43597)){
args__4824__auto__.push((arguments[i__4819__auto___43598]));

var G__43599 = (i__4819__auto___43598 + (1));
i__4819__auto___43598 = G__43599;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__42748_43600 = cljs.core.seq(nodes);
var chunk__42749_43601 = null;
var count__42750_43602 = (0);
var i__42751_43603 = (0);
while(true){
if((i__42751_43603 < count__42750_43602)){
var node_43604 = chunk__42749_43601.cljs$core$IIndexed$_nth$arity$2(null,i__42751_43603);
fragment.appendChild(shadow.dom._to_dom(node_43604));


var G__43605 = seq__42748_43600;
var G__43606 = chunk__42749_43601;
var G__43607 = count__42750_43602;
var G__43608 = (i__42751_43603 + (1));
seq__42748_43600 = G__43605;
chunk__42749_43601 = G__43606;
count__42750_43602 = G__43607;
i__42751_43603 = G__43608;
continue;
} else {
var temp__5753__auto___43609 = cljs.core.seq(seq__42748_43600);
if(temp__5753__auto___43609){
var seq__42748_43610__$1 = temp__5753__auto___43609;
if(cljs.core.chunked_seq_QMARK_(seq__42748_43610__$1)){
var c__4638__auto___43611 = cljs.core.chunk_first(seq__42748_43610__$1);
var G__43612 = cljs.core.chunk_rest(seq__42748_43610__$1);
var G__43613 = c__4638__auto___43611;
var G__43614 = cljs.core.count(c__4638__auto___43611);
var G__43615 = (0);
seq__42748_43600 = G__43612;
chunk__42749_43601 = G__43613;
count__42750_43602 = G__43614;
i__42751_43603 = G__43615;
continue;
} else {
var node_43616 = cljs.core.first(seq__42748_43610__$1);
fragment.appendChild(shadow.dom._to_dom(node_43616));


var G__43617 = cljs.core.next(seq__42748_43610__$1);
var G__43618 = null;
var G__43619 = (0);
var G__43620 = (0);
seq__42748_43600 = G__43617;
chunk__42749_43601 = G__43618;
count__42750_43602 = G__43619;
i__42751_43603 = G__43620;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq42738){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42738));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__42781_43621 = cljs.core.seq(scripts);
var chunk__42782_43622 = null;
var count__42783_43623 = (0);
var i__42784_43624 = (0);
while(true){
if((i__42784_43624 < count__42783_43623)){
var vec__42795_43625 = chunk__42782_43622.cljs$core$IIndexed$_nth$arity$2(null,i__42784_43624);
var script_tag_43626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42795_43625,(0),null);
var script_body_43627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42795_43625,(1),null);
eval(script_body_43627);


var G__43628 = seq__42781_43621;
var G__43629 = chunk__42782_43622;
var G__43630 = count__42783_43623;
var G__43631 = (i__42784_43624 + (1));
seq__42781_43621 = G__43628;
chunk__42782_43622 = G__43629;
count__42783_43623 = G__43630;
i__42784_43624 = G__43631;
continue;
} else {
var temp__5753__auto___43632 = cljs.core.seq(seq__42781_43621);
if(temp__5753__auto___43632){
var seq__42781_43633__$1 = temp__5753__auto___43632;
if(cljs.core.chunked_seq_QMARK_(seq__42781_43633__$1)){
var c__4638__auto___43634 = cljs.core.chunk_first(seq__42781_43633__$1);
var G__43635 = cljs.core.chunk_rest(seq__42781_43633__$1);
var G__43636 = c__4638__auto___43634;
var G__43637 = cljs.core.count(c__4638__auto___43634);
var G__43638 = (0);
seq__42781_43621 = G__43635;
chunk__42782_43622 = G__43636;
count__42783_43623 = G__43637;
i__42784_43624 = G__43638;
continue;
} else {
var vec__42799_43639 = cljs.core.first(seq__42781_43633__$1);
var script_tag_43640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42799_43639,(0),null);
var script_body_43641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42799_43639,(1),null);
eval(script_body_43641);


var G__43642 = cljs.core.next(seq__42781_43633__$1);
var G__43643 = null;
var G__43644 = (0);
var G__43645 = (0);
seq__42781_43621 = G__43642;
chunk__42782_43622 = G__43643;
count__42783_43623 = G__43644;
i__42784_43624 = G__43645;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__42802){
var vec__42803 = p__42802;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42803,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42803,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__42812 = arguments.length;
switch (G__42812) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__42835 = cljs.core.seq(style_keys);
var chunk__42836 = null;
var count__42837 = (0);
var i__42838 = (0);
while(true){
if((i__42838 < count__42837)){
var it = chunk__42836.cljs$core$IIndexed$_nth$arity$2(null,i__42838);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43653 = seq__42835;
var G__43654 = chunk__42836;
var G__43655 = count__42837;
var G__43656 = (i__42838 + (1));
seq__42835 = G__43653;
chunk__42836 = G__43654;
count__42837 = G__43655;
i__42838 = G__43656;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42835);
if(temp__5753__auto__){
var seq__42835__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42835__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42835__$1);
var G__43657 = cljs.core.chunk_rest(seq__42835__$1);
var G__43658 = c__4638__auto__;
var G__43659 = cljs.core.count(c__4638__auto__);
var G__43660 = (0);
seq__42835 = G__43657;
chunk__42836 = G__43658;
count__42837 = G__43659;
i__42838 = G__43660;
continue;
} else {
var it = cljs.core.first(seq__42835__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43661 = cljs.core.next(seq__42835__$1);
var G__43662 = null;
var G__43663 = (0);
var G__43664 = (0);
seq__42835 = G__43661;
chunk__42836 = G__43662;
count__42837 = G__43663;
i__42838 = G__43664;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k42853,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__42866 = k42853;
var G__42866__$1 = (((G__42866 instanceof cljs.core.Keyword))?G__42866.fqn:null);
switch (G__42866__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42853,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__42870){
var vec__42872 = p__42870;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42872,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42872,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42852){
var self__ = this;
var G__42852__$1 = this;
return (new cljs.core.RecordIter((0),G__42852__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42854,other42855){
var self__ = this;
var this42854__$1 = this;
return (((!((other42855 == null)))) && ((((this42854__$1.constructor === other42855.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42854__$1.x,other42855.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42854__$1.y,other42855.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42854__$1.__extmap,other42855.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k42853){
var self__ = this;
var this__4468__auto____$1 = this;
var G__42894 = k42853;
var G__42894__$1 = (((G__42894 instanceof cljs.core.Keyword))?G__42894.fqn:null);
switch (G__42894__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42853);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__42852){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__42898 = cljs.core.keyword_identical_QMARK_;
var expr__42899 = k__4470__auto__;
if(cljs.core.truth_((pred__42898.cljs$core$IFn$_invoke$arity$2 ? pred__42898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__42899) : pred__42898.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__42899)))){
return (new shadow.dom.Coordinate(G__42852,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42898.cljs$core$IFn$_invoke$arity$2 ? pred__42898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__42899) : pred__42898.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__42899)))){
return (new shadow.dom.Coordinate(self__.x,G__42852,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__42852),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__42852){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__42852,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__42861){
var extmap__4501__auto__ = (function (){var G__42921 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42861,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__42861)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42921);
} else {
return G__42921;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__42861),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__42861),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k42931,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__42945 = k42931;
var G__42945__$1 = (((G__42945 instanceof cljs.core.Keyword))?G__42945.fqn:null);
switch (G__42945__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42931,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__42949){
var vec__42953 = p__42949;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42953,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42953,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42930){
var self__ = this;
var G__42930__$1 = this;
return (new cljs.core.RecordIter((0),G__42930__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42932,other42933){
var self__ = this;
var this42932__$1 = this;
return (((!((other42933 == null)))) && ((((this42932__$1.constructor === other42933.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42932__$1.w,other42933.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42932__$1.h,other42933.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42932__$1.__extmap,other42933.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k42931){
var self__ = this;
var this__4468__auto____$1 = this;
var G__42956 = k42931;
var G__42956__$1 = (((G__42956 instanceof cljs.core.Keyword))?G__42956.fqn:null);
switch (G__42956__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42931);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__42930){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__42957 = cljs.core.keyword_identical_QMARK_;
var expr__42958 = k__4470__auto__;
if(cljs.core.truth_((pred__42957.cljs$core$IFn$_invoke$arity$2 ? pred__42957.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__42958) : pred__42957.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__42958)))){
return (new shadow.dom.Size(G__42930,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42957.cljs$core$IFn$_invoke$arity$2 ? pred__42957.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__42958) : pred__42957.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__42958)))){
return (new shadow.dom.Size(self__.w,G__42930,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__42930),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__42930){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__42930,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__42937){
var extmap__4501__auto__ = (function (){var G__42978 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42937,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__42937)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42978);
} else {
return G__42978;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__42937),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__42937),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__43685 = (i + (1));
var G__43686 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__43685;
ret = G__43686;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43006){
var vec__43007 = p__43006;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43007,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__43016 = arguments.length;
switch (G__43016) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__43688 = ps;
var G__43689 = (i + (1));
el__$1 = G__43688;
i = G__43689;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__43062 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__43071_43691 = cljs.core.seq(props);
var chunk__43072_43692 = null;
var count__43073_43693 = (0);
var i__43074_43694 = (0);
while(true){
if((i__43074_43694 < count__43073_43693)){
var vec__43092_43695 = chunk__43072_43692.cljs$core$IIndexed$_nth$arity$2(null,i__43074_43694);
var k_43696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43092_43695,(0),null);
var v_43697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43092_43695,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_43696);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43696),v_43697);


var G__43700 = seq__43071_43691;
var G__43701 = chunk__43072_43692;
var G__43702 = count__43073_43693;
var G__43703 = (i__43074_43694 + (1));
seq__43071_43691 = G__43700;
chunk__43072_43692 = G__43701;
count__43073_43693 = G__43702;
i__43074_43694 = G__43703;
continue;
} else {
var temp__5753__auto___43704 = cljs.core.seq(seq__43071_43691);
if(temp__5753__auto___43704){
var seq__43071_43705__$1 = temp__5753__auto___43704;
if(cljs.core.chunked_seq_QMARK_(seq__43071_43705__$1)){
var c__4638__auto___43706 = cljs.core.chunk_first(seq__43071_43705__$1);
var G__43708 = cljs.core.chunk_rest(seq__43071_43705__$1);
var G__43709 = c__4638__auto___43706;
var G__43710 = cljs.core.count(c__4638__auto___43706);
var G__43711 = (0);
seq__43071_43691 = G__43708;
chunk__43072_43692 = G__43709;
count__43073_43693 = G__43710;
i__43074_43694 = G__43711;
continue;
} else {
var vec__43098_43712 = cljs.core.first(seq__43071_43705__$1);
var k_43713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098_43712,(0),null);
var v_43714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098_43712,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_43713);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43713),v_43714);


var G__43717 = cljs.core.next(seq__43071_43705__$1);
var G__43718 = null;
var G__43719 = (0);
var G__43720 = (0);
seq__43071_43691 = G__43717;
chunk__43072_43692 = G__43718;
count__43073_43693 = G__43719;
i__43074_43694 = G__43720;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__43124 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43124,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43124,(1),null);
var seq__43127_43722 = cljs.core.seq(node_children);
var chunk__43129_43723 = null;
var count__43130_43724 = (0);
var i__43131_43725 = (0);
while(true){
if((i__43131_43725 < count__43130_43724)){
var child_struct_43726 = chunk__43129_43723.cljs$core$IIndexed$_nth$arity$2(null,i__43131_43725);
if((!((child_struct_43726 == null)))){
if(typeof child_struct_43726 === 'string'){
var text_43727 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43727),child_struct_43726].join(''));
} else {
var children_43728 = shadow.dom.svg_node(child_struct_43726);
if(cljs.core.seq_QMARK_(children_43728)){
var seq__43165_43729 = cljs.core.seq(children_43728);
var chunk__43167_43730 = null;
var count__43168_43731 = (0);
var i__43169_43732 = (0);
while(true){
if((i__43169_43732 < count__43168_43731)){
var child_43734 = chunk__43167_43730.cljs$core$IIndexed$_nth$arity$2(null,i__43169_43732);
if(cljs.core.truth_(child_43734)){
node.appendChild(child_43734);


var G__43736 = seq__43165_43729;
var G__43737 = chunk__43167_43730;
var G__43738 = count__43168_43731;
var G__43739 = (i__43169_43732 + (1));
seq__43165_43729 = G__43736;
chunk__43167_43730 = G__43737;
count__43168_43731 = G__43738;
i__43169_43732 = G__43739;
continue;
} else {
var G__43741 = seq__43165_43729;
var G__43742 = chunk__43167_43730;
var G__43743 = count__43168_43731;
var G__43744 = (i__43169_43732 + (1));
seq__43165_43729 = G__43741;
chunk__43167_43730 = G__43742;
count__43168_43731 = G__43743;
i__43169_43732 = G__43744;
continue;
}
} else {
var temp__5753__auto___43745 = cljs.core.seq(seq__43165_43729);
if(temp__5753__auto___43745){
var seq__43165_43746__$1 = temp__5753__auto___43745;
if(cljs.core.chunked_seq_QMARK_(seq__43165_43746__$1)){
var c__4638__auto___43747 = cljs.core.chunk_first(seq__43165_43746__$1);
var G__43748 = cljs.core.chunk_rest(seq__43165_43746__$1);
var G__43749 = c__4638__auto___43747;
var G__43750 = cljs.core.count(c__4638__auto___43747);
var G__43751 = (0);
seq__43165_43729 = G__43748;
chunk__43167_43730 = G__43749;
count__43168_43731 = G__43750;
i__43169_43732 = G__43751;
continue;
} else {
var child_43752 = cljs.core.first(seq__43165_43746__$1);
if(cljs.core.truth_(child_43752)){
node.appendChild(child_43752);


var G__43753 = cljs.core.next(seq__43165_43746__$1);
var G__43754 = null;
var G__43755 = (0);
var G__43756 = (0);
seq__43165_43729 = G__43753;
chunk__43167_43730 = G__43754;
count__43168_43731 = G__43755;
i__43169_43732 = G__43756;
continue;
} else {
var G__43757 = cljs.core.next(seq__43165_43746__$1);
var G__43758 = null;
var G__43759 = (0);
var G__43760 = (0);
seq__43165_43729 = G__43757;
chunk__43167_43730 = G__43758;
count__43168_43731 = G__43759;
i__43169_43732 = G__43760;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43728);
}
}


var G__43761 = seq__43127_43722;
var G__43762 = chunk__43129_43723;
var G__43763 = count__43130_43724;
var G__43764 = (i__43131_43725 + (1));
seq__43127_43722 = G__43761;
chunk__43129_43723 = G__43762;
count__43130_43724 = G__43763;
i__43131_43725 = G__43764;
continue;
} else {
var G__43765 = seq__43127_43722;
var G__43766 = chunk__43129_43723;
var G__43767 = count__43130_43724;
var G__43768 = (i__43131_43725 + (1));
seq__43127_43722 = G__43765;
chunk__43129_43723 = G__43766;
count__43130_43724 = G__43767;
i__43131_43725 = G__43768;
continue;
}
} else {
var temp__5753__auto___43769 = cljs.core.seq(seq__43127_43722);
if(temp__5753__auto___43769){
var seq__43127_43770__$1 = temp__5753__auto___43769;
if(cljs.core.chunked_seq_QMARK_(seq__43127_43770__$1)){
var c__4638__auto___43771 = cljs.core.chunk_first(seq__43127_43770__$1);
var G__43772 = cljs.core.chunk_rest(seq__43127_43770__$1);
var G__43773 = c__4638__auto___43771;
var G__43774 = cljs.core.count(c__4638__auto___43771);
var G__43775 = (0);
seq__43127_43722 = G__43772;
chunk__43129_43723 = G__43773;
count__43130_43724 = G__43774;
i__43131_43725 = G__43775;
continue;
} else {
var child_struct_43776 = cljs.core.first(seq__43127_43770__$1);
if((!((child_struct_43776 == null)))){
if(typeof child_struct_43776 === 'string'){
var text_43778 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43778),child_struct_43776].join(''));
} else {
var children_43780 = shadow.dom.svg_node(child_struct_43776);
if(cljs.core.seq_QMARK_(children_43780)){
var seq__43171_43781 = cljs.core.seq(children_43780);
var chunk__43173_43782 = null;
var count__43174_43783 = (0);
var i__43175_43784 = (0);
while(true){
if((i__43175_43784 < count__43174_43783)){
var child_43785 = chunk__43173_43782.cljs$core$IIndexed$_nth$arity$2(null,i__43175_43784);
if(cljs.core.truth_(child_43785)){
node.appendChild(child_43785);


var G__43786 = seq__43171_43781;
var G__43787 = chunk__43173_43782;
var G__43788 = count__43174_43783;
var G__43789 = (i__43175_43784 + (1));
seq__43171_43781 = G__43786;
chunk__43173_43782 = G__43787;
count__43174_43783 = G__43788;
i__43175_43784 = G__43789;
continue;
} else {
var G__43790 = seq__43171_43781;
var G__43791 = chunk__43173_43782;
var G__43792 = count__43174_43783;
var G__43793 = (i__43175_43784 + (1));
seq__43171_43781 = G__43790;
chunk__43173_43782 = G__43791;
count__43174_43783 = G__43792;
i__43175_43784 = G__43793;
continue;
}
} else {
var temp__5753__auto___43794__$1 = cljs.core.seq(seq__43171_43781);
if(temp__5753__auto___43794__$1){
var seq__43171_43795__$1 = temp__5753__auto___43794__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43171_43795__$1)){
var c__4638__auto___43796 = cljs.core.chunk_first(seq__43171_43795__$1);
var G__43797 = cljs.core.chunk_rest(seq__43171_43795__$1);
var G__43798 = c__4638__auto___43796;
var G__43799 = cljs.core.count(c__4638__auto___43796);
var G__43800 = (0);
seq__43171_43781 = G__43797;
chunk__43173_43782 = G__43798;
count__43174_43783 = G__43799;
i__43175_43784 = G__43800;
continue;
} else {
var child_43801 = cljs.core.first(seq__43171_43795__$1);
if(cljs.core.truth_(child_43801)){
node.appendChild(child_43801);


var G__43802 = cljs.core.next(seq__43171_43795__$1);
var G__43803 = null;
var G__43804 = (0);
var G__43805 = (0);
seq__43171_43781 = G__43802;
chunk__43173_43782 = G__43803;
count__43174_43783 = G__43804;
i__43175_43784 = G__43805;
continue;
} else {
var G__43806 = cljs.core.next(seq__43171_43795__$1);
var G__43807 = null;
var G__43808 = (0);
var G__43809 = (0);
seq__43171_43781 = G__43806;
chunk__43173_43782 = G__43807;
count__43174_43783 = G__43808;
i__43175_43784 = G__43809;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43780);
}
}


var G__43810 = cljs.core.next(seq__43127_43770__$1);
var G__43811 = null;
var G__43812 = (0);
var G__43813 = (0);
seq__43127_43722 = G__43810;
chunk__43129_43723 = G__43811;
count__43130_43724 = G__43812;
i__43131_43725 = G__43813;
continue;
} else {
var G__43814 = cljs.core.next(seq__43127_43770__$1);
var G__43815 = null;
var G__43816 = (0);
var G__43817 = (0);
seq__43127_43722 = G__43814;
chunk__43129_43723 = G__43815;
count__43130_43724 = G__43816;
i__43131_43725 = G__43817;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___43820 = arguments.length;
var i__4819__auto___43821 = (0);
while(true){
if((i__4819__auto___43821 < len__4818__auto___43820)){
args__4824__auto__.push((arguments[i__4819__auto___43821]));

var G__43822 = (i__4819__auto___43821 + (1));
i__4819__auto___43821 = G__43822;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq43179){
var G__43180 = cljs.core.first(seq43179);
var seq43179__$1 = cljs.core.next(seq43179);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43180,seq43179__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__43207 = arguments.length;
switch (G__43207) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__39709__auto___43826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_43255){
var state_val_43259 = (state_43255[(1)]);
if((state_val_43259 === (1))){
var state_43255__$1 = state_43255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43255__$1,(2),once_or_cleanup);
} else {
if((state_val_43259 === (2))){
var inst_43248 = (state_43255[(2)]);
var inst_43253 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_43255__$1 = (function (){var statearr_43267 = state_43255;
(statearr_43267[(7)] = inst_43248);

return statearr_43267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43255__$1,inst_43253);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__39542__auto__ = null;
var shadow$dom$state_machine__39542__auto____0 = (function (){
var statearr_43272 = [null,null,null,null,null,null,null,null];
(statearr_43272[(0)] = shadow$dom$state_machine__39542__auto__);

(statearr_43272[(1)] = (1));

return statearr_43272;
});
var shadow$dom$state_machine__39542__auto____1 = (function (state_43255){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_43255);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e43276){var ex__39545__auto__ = e43276;
var statearr_43280_43828 = state_43255;
(statearr_43280_43828[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_43255[(4)]))){
var statearr_43281_43829 = state_43255;
(statearr_43281_43829[(1)] = cljs.core.first((state_43255[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43830 = state_43255;
state_43255 = G__43830;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
shadow$dom$state_machine__39542__auto__ = function(state_43255){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__39542__auto____0.call(this);
case 1:
return shadow$dom$state_machine__39542__auto____1.call(this,state_43255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__39542__auto____0;
shadow$dom$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__39542__auto____1;
return shadow$dom$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_43283 = f__39710__auto__();
(statearr_43283[(6)] = c__39709__auto___43826);

return statearr_43283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
