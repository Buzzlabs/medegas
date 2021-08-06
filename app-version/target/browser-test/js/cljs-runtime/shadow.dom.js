goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_55285 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_55285(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_55286 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_55286(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__54252 = coll;
var G__54253 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__54252,G__54253) : shadow.dom.lazy_native_coll_seq.call(null,G__54252,G__54253));
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
var G__54275 = arguments.length;
switch (G__54275) {
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
var G__54281 = arguments.length;
switch (G__54281) {
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
var G__54292 = arguments.length;
switch (G__54292) {
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
var G__54307 = arguments.length;
switch (G__54307) {
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
var G__54315 = arguments.length;
switch (G__54315) {
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
var G__54330 = arguments.length;
switch (G__54330) {
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
}catch (e54340){if((e54340 instanceof Object)){
var e = e54340;
return console.log("didnt support attachEvent",el,e);
} else {
throw e54340;

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
var seq__54350 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__54351 = null;
var count__54352 = (0);
var i__54353 = (0);
while(true){
if((i__54353 < count__54352)){
var el = chunk__54351.cljs$core$IIndexed$_nth$arity$2(null,i__54353);
var handler_55306__$1 = ((function (seq__54350,chunk__54351,count__54352,i__54353,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54350,chunk__54351,count__54352,i__54353,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_55306__$1);


var G__55307 = seq__54350;
var G__55308 = chunk__54351;
var G__55309 = count__54352;
var G__55310 = (i__54353 + (1));
seq__54350 = G__55307;
chunk__54351 = G__55308;
count__54352 = G__55309;
i__54353 = G__55310;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54350);
if(temp__5753__auto__){
var seq__54350__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54350__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__54350__$1);
var G__55311 = cljs.core.chunk_rest(seq__54350__$1);
var G__55312 = c__4638__auto__;
var G__55313 = cljs.core.count(c__4638__auto__);
var G__55314 = (0);
seq__54350 = G__55311;
chunk__54351 = G__55312;
count__54352 = G__55313;
i__54353 = G__55314;
continue;
} else {
var el = cljs.core.first(seq__54350__$1);
var handler_55315__$1 = ((function (seq__54350,chunk__54351,count__54352,i__54353,el,seq__54350__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54350,chunk__54351,count__54352,i__54353,el,seq__54350__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_55315__$1);


var G__55320 = cljs.core.next(seq__54350__$1);
var G__55321 = null;
var G__55322 = (0);
var G__55323 = (0);
seq__54350 = G__55320;
chunk__54351 = G__55321;
count__54352 = G__55322;
i__54353 = G__55323;
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
var G__54373 = arguments.length;
switch (G__54373) {
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
var seq__54391 = cljs.core.seq(events);
var chunk__54392 = null;
var count__54393 = (0);
var i__54394 = (0);
while(true){
if((i__54394 < count__54393)){
var vec__54404 = chunk__54392.cljs$core$IIndexed$_nth$arity$2(null,i__54394);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54404,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__55336 = seq__54391;
var G__55337 = chunk__54392;
var G__55338 = count__54393;
var G__55339 = (i__54394 + (1));
seq__54391 = G__55336;
chunk__54392 = G__55337;
count__54393 = G__55338;
i__54394 = G__55339;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54391);
if(temp__5753__auto__){
var seq__54391__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54391__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__54391__$1);
var G__55344 = cljs.core.chunk_rest(seq__54391__$1);
var G__55345 = c__4638__auto__;
var G__55346 = cljs.core.count(c__4638__auto__);
var G__55347 = (0);
seq__54391 = G__55344;
chunk__54392 = G__55345;
count__54393 = G__55346;
i__54394 = G__55347;
continue;
} else {
var vec__54408 = cljs.core.first(seq__54391__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54408,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54408,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__55348 = cljs.core.next(seq__54391__$1);
var G__55349 = null;
var G__55350 = (0);
var G__55351 = (0);
seq__54391 = G__55348;
chunk__54392 = G__55349;
count__54393 = G__55350;
i__54394 = G__55351;
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
var seq__54414 = cljs.core.seq(styles);
var chunk__54415 = null;
var count__54416 = (0);
var i__54417 = (0);
while(true){
if((i__54417 < count__54416)){
var vec__54446 = chunk__54415.cljs$core$IIndexed$_nth$arity$2(null,i__54417);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54446,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__55356 = seq__54414;
var G__55357 = chunk__54415;
var G__55358 = count__54416;
var G__55359 = (i__54417 + (1));
seq__54414 = G__55356;
chunk__54415 = G__55357;
count__54416 = G__55358;
i__54417 = G__55359;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54414);
if(temp__5753__auto__){
var seq__54414__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54414__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__54414__$1);
var G__55360 = cljs.core.chunk_rest(seq__54414__$1);
var G__55361 = c__4638__auto__;
var G__55362 = cljs.core.count(c__4638__auto__);
var G__55363 = (0);
seq__54414 = G__55360;
chunk__54415 = G__55361;
count__54416 = G__55362;
i__54417 = G__55363;
continue;
} else {
var vec__54460 = cljs.core.first(seq__54414__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54460,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54460,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__55365 = cljs.core.next(seq__54414__$1);
var G__55366 = null;
var G__55367 = (0);
var G__55368 = (0);
seq__54414 = G__55365;
chunk__54415 = G__55366;
count__54416 = G__55367;
i__54417 = G__55368;
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
var G__54474_55370 = key;
var G__54474_55371__$1 = (((G__54474_55370 instanceof cljs.core.Keyword))?G__54474_55370.fqn:null);
switch (G__54474_55371__$1) {
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
var ks_55379 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_55379,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_55379,"aria-");
}
})())){
el.setAttribute(ks_55379,value);
} else {
(el[ks_55379] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__54505){
var map__54506 = p__54505;
var map__54506__$1 = cljs.core.__destructure_map(map__54506);
var props = map__54506__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54506__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__54507 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54507,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54507,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54507,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__54512 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__54512,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__54512;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__54516 = arguments.length;
switch (G__54516) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__54532){
var vec__54535 = p__54532;
var seq__54536 = cljs.core.seq(vec__54535);
var first__54537 = cljs.core.first(seq__54536);
var seq__54536__$1 = cljs.core.next(seq__54536);
var nn = first__54537;
var first__54537__$1 = cljs.core.first(seq__54536__$1);
var seq__54536__$2 = cljs.core.next(seq__54536__$1);
var np = first__54537__$1;
var nc = seq__54536__$2;
var node = vec__54535;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54539 = nn;
var G__54540 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54539,G__54540) : create_fn.call(null,G__54539,G__54540));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54542 = nn;
var G__54543 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54542,G__54543) : create_fn.call(null,G__54542,G__54543));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__54546 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54546,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54546,(1),null);
var seq__54549_55448 = cljs.core.seq(node_children);
var chunk__54550_55449 = null;
var count__54551_55450 = (0);
var i__54552_55451 = (0);
while(true){
if((i__54552_55451 < count__54551_55450)){
var child_struct_55452 = chunk__54550_55449.cljs$core$IIndexed$_nth$arity$2(null,i__54552_55451);
var children_55453 = shadow.dom.dom_node(child_struct_55452);
if(cljs.core.seq_QMARK_(children_55453)){
var seq__54602_55458 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55453));
var chunk__54604_55459 = null;
var count__54605_55460 = (0);
var i__54606_55461 = (0);
while(true){
if((i__54606_55461 < count__54605_55460)){
var child_55462 = chunk__54604_55459.cljs$core$IIndexed$_nth$arity$2(null,i__54606_55461);
if(cljs.core.truth_(child_55462)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55462);


var G__55463 = seq__54602_55458;
var G__55464 = chunk__54604_55459;
var G__55465 = count__54605_55460;
var G__55466 = (i__54606_55461 + (1));
seq__54602_55458 = G__55463;
chunk__54604_55459 = G__55464;
count__54605_55460 = G__55465;
i__54606_55461 = G__55466;
continue;
} else {
var G__55467 = seq__54602_55458;
var G__55468 = chunk__54604_55459;
var G__55469 = count__54605_55460;
var G__55470 = (i__54606_55461 + (1));
seq__54602_55458 = G__55467;
chunk__54604_55459 = G__55468;
count__54605_55460 = G__55469;
i__54606_55461 = G__55470;
continue;
}
} else {
var temp__5753__auto___55475 = cljs.core.seq(seq__54602_55458);
if(temp__5753__auto___55475){
var seq__54602_55476__$1 = temp__5753__auto___55475;
if(cljs.core.chunked_seq_QMARK_(seq__54602_55476__$1)){
var c__4638__auto___55481 = cljs.core.chunk_first(seq__54602_55476__$1);
var G__55482 = cljs.core.chunk_rest(seq__54602_55476__$1);
var G__55483 = c__4638__auto___55481;
var G__55484 = cljs.core.count(c__4638__auto___55481);
var G__55485 = (0);
seq__54602_55458 = G__55482;
chunk__54604_55459 = G__55483;
count__54605_55460 = G__55484;
i__54606_55461 = G__55485;
continue;
} else {
var child_55486 = cljs.core.first(seq__54602_55476__$1);
if(cljs.core.truth_(child_55486)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55486);


var G__55488 = cljs.core.next(seq__54602_55476__$1);
var G__55489 = null;
var G__55490 = (0);
var G__55491 = (0);
seq__54602_55458 = G__55488;
chunk__54604_55459 = G__55489;
count__54605_55460 = G__55490;
i__54606_55461 = G__55491;
continue;
} else {
var G__55493 = cljs.core.next(seq__54602_55476__$1);
var G__55494 = null;
var G__55495 = (0);
var G__55496 = (0);
seq__54602_55458 = G__55493;
chunk__54604_55459 = G__55494;
count__54605_55460 = G__55495;
i__54606_55461 = G__55496;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55453);
}


var G__55501 = seq__54549_55448;
var G__55502 = chunk__54550_55449;
var G__55503 = count__54551_55450;
var G__55504 = (i__54552_55451 + (1));
seq__54549_55448 = G__55501;
chunk__54550_55449 = G__55502;
count__54551_55450 = G__55503;
i__54552_55451 = G__55504;
continue;
} else {
var temp__5753__auto___55507 = cljs.core.seq(seq__54549_55448);
if(temp__5753__auto___55507){
var seq__54549_55510__$1 = temp__5753__auto___55507;
if(cljs.core.chunked_seq_QMARK_(seq__54549_55510__$1)){
var c__4638__auto___55515 = cljs.core.chunk_first(seq__54549_55510__$1);
var G__55520 = cljs.core.chunk_rest(seq__54549_55510__$1);
var G__55521 = c__4638__auto___55515;
var G__55522 = cljs.core.count(c__4638__auto___55515);
var G__55523 = (0);
seq__54549_55448 = G__55520;
chunk__54550_55449 = G__55521;
count__54551_55450 = G__55522;
i__54552_55451 = G__55523;
continue;
} else {
var child_struct_55524 = cljs.core.first(seq__54549_55510__$1);
var children_55526 = shadow.dom.dom_node(child_struct_55524);
if(cljs.core.seq_QMARK_(children_55526)){
var seq__54626_55527 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55526));
var chunk__54628_55528 = null;
var count__54629_55529 = (0);
var i__54630_55530 = (0);
while(true){
if((i__54630_55530 < count__54629_55529)){
var child_55535 = chunk__54628_55528.cljs$core$IIndexed$_nth$arity$2(null,i__54630_55530);
if(cljs.core.truth_(child_55535)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55535);


var G__55543 = seq__54626_55527;
var G__55544 = chunk__54628_55528;
var G__55545 = count__54629_55529;
var G__55546 = (i__54630_55530 + (1));
seq__54626_55527 = G__55543;
chunk__54628_55528 = G__55544;
count__54629_55529 = G__55545;
i__54630_55530 = G__55546;
continue;
} else {
var G__55548 = seq__54626_55527;
var G__55549 = chunk__54628_55528;
var G__55550 = count__54629_55529;
var G__55551 = (i__54630_55530 + (1));
seq__54626_55527 = G__55548;
chunk__54628_55528 = G__55549;
count__54629_55529 = G__55550;
i__54630_55530 = G__55551;
continue;
}
} else {
var temp__5753__auto___55553__$1 = cljs.core.seq(seq__54626_55527);
if(temp__5753__auto___55553__$1){
var seq__54626_55554__$1 = temp__5753__auto___55553__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54626_55554__$1)){
var c__4638__auto___55555 = cljs.core.chunk_first(seq__54626_55554__$1);
var G__55556 = cljs.core.chunk_rest(seq__54626_55554__$1);
var G__55557 = c__4638__auto___55555;
var G__55558 = cljs.core.count(c__4638__auto___55555);
var G__55559 = (0);
seq__54626_55527 = G__55556;
chunk__54628_55528 = G__55557;
count__54629_55529 = G__55558;
i__54630_55530 = G__55559;
continue;
} else {
var child_55564 = cljs.core.first(seq__54626_55554__$1);
if(cljs.core.truth_(child_55564)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55564);


var G__55565 = cljs.core.next(seq__54626_55554__$1);
var G__55566 = null;
var G__55567 = (0);
var G__55568 = (0);
seq__54626_55527 = G__55565;
chunk__54628_55528 = G__55566;
count__54629_55529 = G__55567;
i__54630_55530 = G__55568;
continue;
} else {
var G__55569 = cljs.core.next(seq__54626_55554__$1);
var G__55570 = null;
var G__55571 = (0);
var G__55572 = (0);
seq__54626_55527 = G__55569;
chunk__54628_55528 = G__55570;
count__54629_55529 = G__55571;
i__54630_55530 = G__55572;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55526);
}


var G__55573 = cljs.core.next(seq__54549_55510__$1);
var G__55574 = null;
var G__55575 = (0);
var G__55576 = (0);
seq__54549_55448 = G__55573;
chunk__54550_55449 = G__55574;
count__54551_55450 = G__55575;
i__54552_55451 = G__55576;
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
var seq__54668 = cljs.core.seq(node);
var chunk__54669 = null;
var count__54670 = (0);
var i__54671 = (0);
while(true){
if((i__54671 < count__54670)){
var n = chunk__54669.cljs$core$IIndexed$_nth$arity$2(null,i__54671);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55586 = seq__54668;
var G__55587 = chunk__54669;
var G__55588 = count__54670;
var G__55589 = (i__54671 + (1));
seq__54668 = G__55586;
chunk__54669 = G__55587;
count__54670 = G__55588;
i__54671 = G__55589;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54668);
if(temp__5753__auto__){
var seq__54668__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54668__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__54668__$1);
var G__55591 = cljs.core.chunk_rest(seq__54668__$1);
var G__55592 = c__4638__auto__;
var G__55593 = cljs.core.count(c__4638__auto__);
var G__55594 = (0);
seq__54668 = G__55591;
chunk__54669 = G__55592;
count__54670 = G__55593;
i__54671 = G__55594;
continue;
} else {
var n = cljs.core.first(seq__54668__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55595 = cljs.core.next(seq__54668__$1);
var G__55596 = null;
var G__55597 = (0);
var G__55598 = (0);
seq__54668 = G__55595;
chunk__54669 = G__55596;
count__54670 = G__55597;
i__54671 = G__55598;
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
var G__54676 = arguments.length;
switch (G__54676) {
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
var G__54684 = arguments.length;
switch (G__54684) {
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
var G__54729 = arguments.length;
switch (G__54729) {
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
var len__4818__auto___55622 = arguments.length;
var i__4819__auto___55624 = (0);
while(true){
if((i__4819__auto___55624 < len__4818__auto___55622)){
args__4824__auto__.push((arguments[i__4819__auto___55624]));

var G__55625 = (i__4819__auto___55624 + (1));
i__4819__auto___55624 = G__55625;
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
var seq__54763_55626 = cljs.core.seq(nodes);
var chunk__54764_55627 = null;
var count__54765_55628 = (0);
var i__54766_55629 = (0);
while(true){
if((i__54766_55629 < count__54765_55628)){
var node_55635 = chunk__54764_55627.cljs$core$IIndexed$_nth$arity$2(null,i__54766_55629);
fragment.appendChild(shadow.dom._to_dom(node_55635));


var G__55636 = seq__54763_55626;
var G__55637 = chunk__54764_55627;
var G__55638 = count__54765_55628;
var G__55639 = (i__54766_55629 + (1));
seq__54763_55626 = G__55636;
chunk__54764_55627 = G__55637;
count__54765_55628 = G__55638;
i__54766_55629 = G__55639;
continue;
} else {
var temp__5753__auto___55645 = cljs.core.seq(seq__54763_55626);
if(temp__5753__auto___55645){
var seq__54763_55646__$1 = temp__5753__auto___55645;
if(cljs.core.chunked_seq_QMARK_(seq__54763_55646__$1)){
var c__4638__auto___55647 = cljs.core.chunk_first(seq__54763_55646__$1);
var G__55653 = cljs.core.chunk_rest(seq__54763_55646__$1);
var G__55654 = c__4638__auto___55647;
var G__55655 = cljs.core.count(c__4638__auto___55647);
var G__55656 = (0);
seq__54763_55626 = G__55653;
chunk__54764_55627 = G__55654;
count__54765_55628 = G__55655;
i__54766_55629 = G__55656;
continue;
} else {
var node_55657 = cljs.core.first(seq__54763_55646__$1);
fragment.appendChild(shadow.dom._to_dom(node_55657));


var G__55658 = cljs.core.next(seq__54763_55646__$1);
var G__55659 = null;
var G__55660 = (0);
var G__55661 = (0);
seq__54763_55626 = G__55658;
chunk__54764_55627 = G__55659;
count__54765_55628 = G__55660;
i__54766_55629 = G__55661;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq54759){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54759));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__54768_55670 = cljs.core.seq(scripts);
var chunk__54769_55671 = null;
var count__54770_55672 = (0);
var i__54771_55673 = (0);
while(true){
if((i__54771_55673 < count__54770_55672)){
var vec__54786_55674 = chunk__54769_55671.cljs$core$IIndexed$_nth$arity$2(null,i__54771_55673);
var script_tag_55675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54786_55674,(0),null);
var script_body_55676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54786_55674,(1),null);
eval(script_body_55676);


var G__55677 = seq__54768_55670;
var G__55678 = chunk__54769_55671;
var G__55679 = count__54770_55672;
var G__55680 = (i__54771_55673 + (1));
seq__54768_55670 = G__55677;
chunk__54769_55671 = G__55678;
count__54770_55672 = G__55679;
i__54771_55673 = G__55680;
continue;
} else {
var temp__5753__auto___55681 = cljs.core.seq(seq__54768_55670);
if(temp__5753__auto___55681){
var seq__54768_55682__$1 = temp__5753__auto___55681;
if(cljs.core.chunked_seq_QMARK_(seq__54768_55682__$1)){
var c__4638__auto___55683 = cljs.core.chunk_first(seq__54768_55682__$1);
var G__55685 = cljs.core.chunk_rest(seq__54768_55682__$1);
var G__55686 = c__4638__auto___55683;
var G__55687 = cljs.core.count(c__4638__auto___55683);
var G__55688 = (0);
seq__54768_55670 = G__55685;
chunk__54769_55671 = G__55686;
count__54770_55672 = G__55687;
i__54771_55673 = G__55688;
continue;
} else {
var vec__54794_55689 = cljs.core.first(seq__54768_55682__$1);
var script_tag_55690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54794_55689,(0),null);
var script_body_55691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54794_55689,(1),null);
eval(script_body_55691);


var G__55692 = cljs.core.next(seq__54768_55682__$1);
var G__55693 = null;
var G__55694 = (0);
var G__55695 = (0);
seq__54768_55670 = G__55692;
chunk__54769_55671 = G__55693;
count__54770_55672 = G__55694;
i__54771_55673 = G__55695;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__54800){
var vec__54801 = p__54800;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54801,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54801,(1),null);
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
var G__54813 = arguments.length;
switch (G__54813) {
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
var seq__54838 = cljs.core.seq(style_keys);
var chunk__54839 = null;
var count__54840 = (0);
var i__54841 = (0);
while(true){
if((i__54841 < count__54840)){
var it = chunk__54839.cljs$core$IIndexed$_nth$arity$2(null,i__54841);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55705 = seq__54838;
var G__55706 = chunk__54839;
var G__55707 = count__54840;
var G__55708 = (i__54841 + (1));
seq__54838 = G__55705;
chunk__54839 = G__55706;
count__54840 = G__55707;
i__54841 = G__55708;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54838);
if(temp__5753__auto__){
var seq__54838__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54838__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__54838__$1);
var G__55709 = cljs.core.chunk_rest(seq__54838__$1);
var G__55710 = c__4638__auto__;
var G__55711 = cljs.core.count(c__4638__auto__);
var G__55712 = (0);
seq__54838 = G__55709;
chunk__54839 = G__55710;
count__54840 = G__55711;
i__54841 = G__55712;
continue;
} else {
var it = cljs.core.first(seq__54838__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55713 = cljs.core.next(seq__54838__$1);
var G__55714 = null;
var G__55715 = (0);
var G__55716 = (0);
seq__54838 = G__55713;
chunk__54839 = G__55714;
count__54840 = G__55715;
i__54841 = G__55716;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k54854,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__54864 = k54854;
var G__54864__$1 = (((G__54864 instanceof cljs.core.Keyword))?G__54864.fqn:null);
switch (G__54864__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54854,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__54868){
var vec__54869 = p__54868;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54869,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54869,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54853){
var self__ = this;
var G__54853__$1 = this;
return (new cljs.core.RecordIter((0),G__54853__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54855,other54856){
var self__ = this;
var this54855__$1 = this;
return (((!((other54856 == null)))) && ((((this54855__$1.constructor === other54856.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54855__$1.x,other54856.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54855__$1.y,other54856.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54855__$1.__extmap,other54856.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k54854){
var self__ = this;
var this__4468__auto____$1 = this;
var G__54893 = k54854;
var G__54893__$1 = (((G__54893 instanceof cljs.core.Keyword))?G__54893.fqn:null);
switch (G__54893__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k54854);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__54853){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__54895 = cljs.core.keyword_identical_QMARK_;
var expr__54896 = k__4470__auto__;
if(cljs.core.truth_((pred__54895.cljs$core$IFn$_invoke$arity$2 ? pred__54895.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__54896) : pred__54895.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__54896)))){
return (new shadow.dom.Coordinate(G__54853,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54895.cljs$core$IFn$_invoke$arity$2 ? pred__54895.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__54896) : pred__54895.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__54896)))){
return (new shadow.dom.Coordinate(self__.x,G__54853,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__54853),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__54853){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54853,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54859){
var extmap__4501__auto__ = (function (){var G__54922 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54859,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54859)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54922);
} else {
return G__54922;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54859),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54859),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k54928,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__54943 = k54928;
var G__54943__$1 = (((G__54943 instanceof cljs.core.Keyword))?G__54943.fqn:null);
switch (G__54943__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54928,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__54959){
var vec__54965 = p__54959;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54965,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54965,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54927){
var self__ = this;
var G__54927__$1 = this;
return (new cljs.core.RecordIter((0),G__54927__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54929,other54930){
var self__ = this;
var this54929__$1 = this;
return (((!((other54930 == null)))) && ((((this54929__$1.constructor === other54930.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54929__$1.w,other54930.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54929__$1.h,other54930.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54929__$1.__extmap,other54930.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k54928){
var self__ = this;
var this__4468__auto____$1 = this;
var G__55025 = k54928;
var G__55025__$1 = (((G__55025 instanceof cljs.core.Keyword))?G__55025.fqn:null);
switch (G__55025__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k54928);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__54927){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__55031 = cljs.core.keyword_identical_QMARK_;
var expr__55032 = k__4470__auto__;
if(cljs.core.truth_((pred__55031.cljs$core$IFn$_invoke$arity$2 ? pred__55031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__55032) : pred__55031.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__55032)))){
return (new shadow.dom.Size(G__54927,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55031.cljs$core$IFn$_invoke$arity$2 ? pred__55031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__55032) : pred__55031.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__55032)))){
return (new shadow.dom.Size(self__.w,G__54927,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__54927),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__54927){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54927,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54931){
var extmap__4501__auto__ = (function (){var G__55054 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54931,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54931)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55054);
} else {
return G__55054;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54931),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54931),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__55823 = (i + (1));
var G__55824 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__55823;
ret = G__55824;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55118){
var vec__55122 = p__55118;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55122,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__55130 = arguments.length;
switch (G__55130) {
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
var G__55829 = ps;
var G__55830 = (i + (1));
el__$1 = G__55829;
i = G__55830;
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
var vec__55176 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55176,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55176,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55176,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__55179_55832 = cljs.core.seq(props);
var chunk__55180_55833 = null;
var count__55181_55834 = (0);
var i__55182_55835 = (0);
while(true){
if((i__55182_55835 < count__55181_55834)){
var vec__55189_55836 = chunk__55180_55833.cljs$core$IIndexed$_nth$arity$2(null,i__55182_55835);
var k_55837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55189_55836,(0),null);
var v_55838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55189_55836,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_55837);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55837),v_55838);


var G__55840 = seq__55179_55832;
var G__55841 = chunk__55180_55833;
var G__55842 = count__55181_55834;
var G__55843 = (i__55182_55835 + (1));
seq__55179_55832 = G__55840;
chunk__55180_55833 = G__55841;
count__55181_55834 = G__55842;
i__55182_55835 = G__55843;
continue;
} else {
var temp__5753__auto___55844 = cljs.core.seq(seq__55179_55832);
if(temp__5753__auto___55844){
var seq__55179_55845__$1 = temp__5753__auto___55844;
if(cljs.core.chunked_seq_QMARK_(seq__55179_55845__$1)){
var c__4638__auto___55846 = cljs.core.chunk_first(seq__55179_55845__$1);
var G__55848 = cljs.core.chunk_rest(seq__55179_55845__$1);
var G__55849 = c__4638__auto___55846;
var G__55850 = cljs.core.count(c__4638__auto___55846);
var G__55851 = (0);
seq__55179_55832 = G__55848;
chunk__55180_55833 = G__55849;
count__55181_55834 = G__55850;
i__55182_55835 = G__55851;
continue;
} else {
var vec__55193_55854 = cljs.core.first(seq__55179_55845__$1);
var k_55855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55193_55854,(0),null);
var v_55856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55193_55854,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_55855);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55855),v_55856);


var G__55861 = cljs.core.next(seq__55179_55845__$1);
var G__55862 = null;
var G__55863 = (0);
var G__55864 = (0);
seq__55179_55832 = G__55861;
chunk__55180_55833 = G__55862;
count__55181_55834 = G__55863;
i__55182_55835 = G__55864;
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
var vec__55203 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55203,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55203,(1),null);
var seq__55206_55869 = cljs.core.seq(node_children);
var chunk__55208_55870 = null;
var count__55209_55871 = (0);
var i__55210_55872 = (0);
while(true){
if((i__55210_55872 < count__55209_55871)){
var child_struct_55873 = chunk__55208_55870.cljs$core$IIndexed$_nth$arity$2(null,i__55210_55872);
if((!((child_struct_55873 == null)))){
if(typeof child_struct_55873 === 'string'){
var text_55874 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55874),child_struct_55873].join(''));
} else {
var children_55875 = shadow.dom.svg_node(child_struct_55873);
if(cljs.core.seq_QMARK_(children_55875)){
var seq__55235_55876 = cljs.core.seq(children_55875);
var chunk__55237_55877 = null;
var count__55238_55878 = (0);
var i__55239_55879 = (0);
while(true){
if((i__55239_55879 < count__55238_55878)){
var child_55880 = chunk__55237_55877.cljs$core$IIndexed$_nth$arity$2(null,i__55239_55879);
if(cljs.core.truth_(child_55880)){
node.appendChild(child_55880);


var G__55881 = seq__55235_55876;
var G__55882 = chunk__55237_55877;
var G__55883 = count__55238_55878;
var G__55884 = (i__55239_55879 + (1));
seq__55235_55876 = G__55881;
chunk__55237_55877 = G__55882;
count__55238_55878 = G__55883;
i__55239_55879 = G__55884;
continue;
} else {
var G__55885 = seq__55235_55876;
var G__55886 = chunk__55237_55877;
var G__55887 = count__55238_55878;
var G__55888 = (i__55239_55879 + (1));
seq__55235_55876 = G__55885;
chunk__55237_55877 = G__55886;
count__55238_55878 = G__55887;
i__55239_55879 = G__55888;
continue;
}
} else {
var temp__5753__auto___55889 = cljs.core.seq(seq__55235_55876);
if(temp__5753__auto___55889){
var seq__55235_55890__$1 = temp__5753__auto___55889;
if(cljs.core.chunked_seq_QMARK_(seq__55235_55890__$1)){
var c__4638__auto___55891 = cljs.core.chunk_first(seq__55235_55890__$1);
var G__55892 = cljs.core.chunk_rest(seq__55235_55890__$1);
var G__55893 = c__4638__auto___55891;
var G__55894 = cljs.core.count(c__4638__auto___55891);
var G__55895 = (0);
seq__55235_55876 = G__55892;
chunk__55237_55877 = G__55893;
count__55238_55878 = G__55894;
i__55239_55879 = G__55895;
continue;
} else {
var child_55896 = cljs.core.first(seq__55235_55890__$1);
if(cljs.core.truth_(child_55896)){
node.appendChild(child_55896);


var G__55897 = cljs.core.next(seq__55235_55890__$1);
var G__55898 = null;
var G__55899 = (0);
var G__55900 = (0);
seq__55235_55876 = G__55897;
chunk__55237_55877 = G__55898;
count__55238_55878 = G__55899;
i__55239_55879 = G__55900;
continue;
} else {
var G__55901 = cljs.core.next(seq__55235_55890__$1);
var G__55902 = null;
var G__55903 = (0);
var G__55904 = (0);
seq__55235_55876 = G__55901;
chunk__55237_55877 = G__55902;
count__55238_55878 = G__55903;
i__55239_55879 = G__55904;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55875);
}
}


var G__55905 = seq__55206_55869;
var G__55906 = chunk__55208_55870;
var G__55907 = count__55209_55871;
var G__55908 = (i__55210_55872 + (1));
seq__55206_55869 = G__55905;
chunk__55208_55870 = G__55906;
count__55209_55871 = G__55907;
i__55210_55872 = G__55908;
continue;
} else {
var G__55909 = seq__55206_55869;
var G__55910 = chunk__55208_55870;
var G__55911 = count__55209_55871;
var G__55912 = (i__55210_55872 + (1));
seq__55206_55869 = G__55909;
chunk__55208_55870 = G__55910;
count__55209_55871 = G__55911;
i__55210_55872 = G__55912;
continue;
}
} else {
var temp__5753__auto___55913 = cljs.core.seq(seq__55206_55869);
if(temp__5753__auto___55913){
var seq__55206_55914__$1 = temp__5753__auto___55913;
if(cljs.core.chunked_seq_QMARK_(seq__55206_55914__$1)){
var c__4638__auto___55915 = cljs.core.chunk_first(seq__55206_55914__$1);
var G__55916 = cljs.core.chunk_rest(seq__55206_55914__$1);
var G__55917 = c__4638__auto___55915;
var G__55918 = cljs.core.count(c__4638__auto___55915);
var G__55919 = (0);
seq__55206_55869 = G__55916;
chunk__55208_55870 = G__55917;
count__55209_55871 = G__55918;
i__55210_55872 = G__55919;
continue;
} else {
var child_struct_55920 = cljs.core.first(seq__55206_55914__$1);
if((!((child_struct_55920 == null)))){
if(typeof child_struct_55920 === 'string'){
var text_55921 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55921),child_struct_55920].join(''));
} else {
var children_55922 = shadow.dom.svg_node(child_struct_55920);
if(cljs.core.seq_QMARK_(children_55922)){
var seq__55245_55923 = cljs.core.seq(children_55922);
var chunk__55247_55924 = null;
var count__55248_55925 = (0);
var i__55249_55926 = (0);
while(true){
if((i__55249_55926 < count__55248_55925)){
var child_55931 = chunk__55247_55924.cljs$core$IIndexed$_nth$arity$2(null,i__55249_55926);
if(cljs.core.truth_(child_55931)){
node.appendChild(child_55931);


var G__55932 = seq__55245_55923;
var G__55933 = chunk__55247_55924;
var G__55934 = count__55248_55925;
var G__55935 = (i__55249_55926 + (1));
seq__55245_55923 = G__55932;
chunk__55247_55924 = G__55933;
count__55248_55925 = G__55934;
i__55249_55926 = G__55935;
continue;
} else {
var G__55936 = seq__55245_55923;
var G__55937 = chunk__55247_55924;
var G__55938 = count__55248_55925;
var G__55939 = (i__55249_55926 + (1));
seq__55245_55923 = G__55936;
chunk__55247_55924 = G__55937;
count__55248_55925 = G__55938;
i__55249_55926 = G__55939;
continue;
}
} else {
var temp__5753__auto___55940__$1 = cljs.core.seq(seq__55245_55923);
if(temp__5753__auto___55940__$1){
var seq__55245_55941__$1 = temp__5753__auto___55940__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55245_55941__$1)){
var c__4638__auto___55942 = cljs.core.chunk_first(seq__55245_55941__$1);
var G__55943 = cljs.core.chunk_rest(seq__55245_55941__$1);
var G__55944 = c__4638__auto___55942;
var G__55945 = cljs.core.count(c__4638__auto___55942);
var G__55946 = (0);
seq__55245_55923 = G__55943;
chunk__55247_55924 = G__55944;
count__55248_55925 = G__55945;
i__55249_55926 = G__55946;
continue;
} else {
var child_55947 = cljs.core.first(seq__55245_55941__$1);
if(cljs.core.truth_(child_55947)){
node.appendChild(child_55947);


var G__55948 = cljs.core.next(seq__55245_55941__$1);
var G__55949 = null;
var G__55950 = (0);
var G__55951 = (0);
seq__55245_55923 = G__55948;
chunk__55247_55924 = G__55949;
count__55248_55925 = G__55950;
i__55249_55926 = G__55951;
continue;
} else {
var G__55952 = cljs.core.next(seq__55245_55941__$1);
var G__55953 = null;
var G__55954 = (0);
var G__55955 = (0);
seq__55245_55923 = G__55952;
chunk__55247_55924 = G__55953;
count__55248_55925 = G__55954;
i__55249_55926 = G__55955;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55922);
}
}


var G__55956 = cljs.core.next(seq__55206_55914__$1);
var G__55957 = null;
var G__55958 = (0);
var G__55959 = (0);
seq__55206_55869 = G__55956;
chunk__55208_55870 = G__55957;
count__55209_55871 = G__55958;
i__55210_55872 = G__55959;
continue;
} else {
var G__55960 = cljs.core.next(seq__55206_55914__$1);
var G__55961 = null;
var G__55962 = (0);
var G__55963 = (0);
seq__55206_55869 = G__55960;
chunk__55208_55870 = G__55961;
count__55209_55871 = G__55962;
i__55210_55872 = G__55963;
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
var len__4818__auto___55965 = arguments.length;
var i__4819__auto___55966 = (0);
while(true){
if((i__4819__auto___55966 < len__4818__auto___55965)){
args__4824__auto__.push((arguments[i__4819__auto___55966]));

var G__55967 = (i__4819__auto___55966 + (1));
i__4819__auto___55966 = G__55967;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq55258){
var G__55259 = cljs.core.first(seq55258);
var seq55258__$1 = cljs.core.next(seq55258);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55259,seq55258__$1);
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
var G__55261 = arguments.length;
switch (G__55261) {
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
var c__39709__auto___55974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_55269){
var state_val_55270 = (state_55269[(1)]);
if((state_val_55270 === (1))){
var state_55269__$1 = state_55269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55269__$1,(2),once_or_cleanup);
} else {
if((state_val_55270 === (2))){
var inst_55266 = (state_55269[(2)]);
var inst_55267 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_55269__$1 = (function (){var statearr_55271 = state_55269;
(statearr_55271[(7)] = inst_55266);

return statearr_55271;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55269__$1,inst_55267);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__39542__auto__ = null;
var shadow$dom$state_machine__39542__auto____0 = (function (){
var statearr_55272 = [null,null,null,null,null,null,null,null];
(statearr_55272[(0)] = shadow$dom$state_machine__39542__auto__);

(statearr_55272[(1)] = (1));

return statearr_55272;
});
var shadow$dom$state_machine__39542__auto____1 = (function (state_55269){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_55269);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e55273){var ex__39545__auto__ = e55273;
var statearr_55274_55975 = state_55269;
(statearr_55274_55975[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_55269[(4)]))){
var statearr_55275_55976 = state_55269;
(statearr_55275_55976[(1)] = cljs.core.first((state_55269[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55981 = state_55269;
state_55269 = G__55981;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
shadow$dom$state_machine__39542__auto__ = function(state_55269){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__39542__auto____0.call(this);
case 1:
return shadow$dom$state_machine__39542__auto____1.call(this,state_55269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__39542__auto____0;
shadow$dom$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__39542__auto____1;
return shadow$dom$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_55276 = f__39710__auto__();
(statearr_55276[(6)] = c__39709__auto___55974);

return statearr_55276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
