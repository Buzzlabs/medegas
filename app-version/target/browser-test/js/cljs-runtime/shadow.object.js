goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_56324 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._id[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.object._id["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_56324(this$);
}
});

var shadow$object$IObject$_type$dyn_56329 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._type[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.object._type["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_56329(this$);
}
});

var shadow$object$IObject$_data$dyn_56330 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._data[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.object._data["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_56330(this$);
}
});

var shadow$object$IObject$_update$dyn_56331 = (function (this$,update_fn){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._update[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4510__auto__.call(null,this$,update_fn));
} else {
var m__4508__auto__ = (shadow.object._update["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4508__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_56331(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_56332 = (function (this$,cause){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4510__auto__.call(null,this$,cause));
} else {
var m__4508__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4508__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_56332(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__55374 = arguments.length;
switch (G__55374) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4212__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5753__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5753__auto__)){
var oid = temp__5753__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5753__auto__)){
var parent_id = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__56339 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__56339;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55547_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__55547_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__55581 = arguments.length;
switch (G__55581) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55590_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__55590_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__55603){
var map__55605 = p__55603;
var map__55605__$1 = cljs.core.__destructure_map(map__55605);
var oref = map__55605__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55605__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__55611 = arguments.length;
switch (G__55611) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55608_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__55608_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5751__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5751__auto__)){
var obj = temp__5751__auto__;
return obj;
} else {
var temp__5753__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__56342 = parent;
dom = G__56342;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___56343 = arguments.length;
var i__4819__auto___56344 = (0);
while(true){
if((i__4819__auto___56344 < len__4818__auto___56343)){
args__4824__auto__.push((arguments[i__4819__auto___56344]));

var G__56345 = (i__4819__auto___56344 + (1));
i__4819__auto___56344 = G__56345;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5753__auto__)){
var reactions_to_trigger = temp__5753__auto__;
var seq__55717 = cljs.core.seq(reactions_to_trigger);
var chunk__55718 = null;
var count__55719 = (0);
var i__55720 = (0);
while(true){
if((i__55720 < count__55719)){
var rfn = chunk__55718.cljs$core$IIndexed$_nth$arity$2(null,i__55720);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__56346 = seq__55717;
var G__56347 = chunk__55718;
var G__56348 = count__55719;
var G__56349 = (i__55720 + (1));
seq__55717 = G__56346;
chunk__55718 = G__56347;
count__55719 = G__56348;
i__55720 = G__56349;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__55717);
if(temp__5753__auto____$1){
var seq__55717__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__55717__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__55717__$1);
var G__56350 = cljs.core.chunk_rest(seq__55717__$1);
var G__56351 = c__4638__auto__;
var G__56352 = cljs.core.count(c__4638__auto__);
var G__56353 = (0);
seq__55717 = G__56350;
chunk__55718 = G__56351;
count__55719 = G__56352;
i__55720 = G__56353;
continue;
} else {
var rfn = cljs.core.first(seq__55717__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__56354 = cljs.core.next(seq__55717__$1);
var G__56355 = null;
var G__56356 = (0);
var G__56357 = (0);
seq__55717 = G__56354;
chunk__55718 = G__56355;
count__55719 = G__56356;
i__55720 = G__56357;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq55701){
var G__55702 = cljs.core.first(seq55701);
var seq55701__$1 = cljs.core.next(seq55701);
var G__55703 = cljs.core.first(seq55701__$1);
var seq55701__$2 = cljs.core.next(seq55701__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55702,G__55703,seq55701__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__55801_56360 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__55802_56361 = null;
var count__55803_56362 = (0);
var i__55804_56363 = (0);
while(true){
if((i__55804_56363 < count__55803_56362)){
var child_56364 = chunk__55802_56361.cljs$core$IIndexed$_nth$arity$2(null,i__55804_56363);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_56364,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_56364,ev,notify_fn));


var G__56365 = seq__55801_56360;
var G__56366 = chunk__55802_56361;
var G__56367 = count__55803_56362;
var G__56368 = (i__55804_56363 + (1));
seq__55801_56360 = G__56365;
chunk__55802_56361 = G__56366;
count__55803_56362 = G__56367;
i__55804_56363 = G__56368;
continue;
} else {
var temp__5753__auto___56369 = cljs.core.seq(seq__55801_56360);
if(temp__5753__auto___56369){
var seq__55801_56371__$1 = temp__5753__auto___56369;
if(cljs.core.chunked_seq_QMARK_(seq__55801_56371__$1)){
var c__4638__auto___56372 = cljs.core.chunk_first(seq__55801_56371__$1);
var G__56376 = cljs.core.chunk_rest(seq__55801_56371__$1);
var G__56377 = c__4638__auto___56372;
var G__56378 = cljs.core.count(c__4638__auto___56372);
var G__56379 = (0);
seq__55801_56360 = G__56376;
chunk__55802_56361 = G__56377;
count__55803_56362 = G__56378;
i__55804_56363 = G__56379;
continue;
} else {
var child_56380 = cljs.core.first(seq__55801_56371__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_56380,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_56380,ev,notify_fn));


var G__56381 = cljs.core.next(seq__55801_56371__$1);
var G__56382 = null;
var G__56383 = (0);
var G__56384 = (0);
seq__55801_56360 = G__56381;
chunk__55802_56361 = G__56382;
count__55803_56362 = G__56383;
i__55804_56363 = G__56384;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___56385 = arguments.length;
var i__4819__auto___56386 = (0);
while(true){
if((i__4819__auto___56386 < len__4818__auto___56385)){
args__4824__auto__.push((arguments[i__4819__auto___56386]));

var G__56387 = (i__4819__auto___56386 + (1));
i__4819__auto___56386 = G__56387;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq55817){
var G__55818 = cljs.core.first(seq55817);
var seq55817__$1 = cljs.core.next(seq55817);
var G__55819 = cljs.core.first(seq55817__$1);
var seq55817__$2 = cljs.core.next(seq55817__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55818,G__55819,seq55817__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___56390 = arguments.length;
var i__4819__auto___56391 = (0);
while(true){
if((i__4819__auto___56391 < len__4818__auto___56390)){
args__4824__auto__.push((arguments[i__4819__auto___56391]));

var G__56392 = (i__4819__auto___56391 + (1));
i__4819__auto___56391 = G__56392;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__56393 = shadow.object.get_parent(current);
current = G__56393;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq55826){
var G__55827 = cljs.core.first(seq55826);
var seq55826__$1 = cljs.core.next(seq55826);
var G__55828 = cljs.core.first(seq55826__$1);
var seq55826__$2 = cljs.core.next(seq55826__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55827,G__55828,seq55826__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___56395 = arguments.length;
var i__4819__auto___56396 = (0);
while(true){
if((i__4819__auto___56396 < len__4818__auto___56395)){
args__4824__auto__.push((arguments[i__4819__auto___56396]));

var G__56397 = (i__4819__auto___56396 + (1));
i__4819__auto___56396 = G__56397;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq55847){
var G__55852 = cljs.core.first(seq55847);
var seq55847__$1 = cljs.core.next(seq55847);
var G__55853 = cljs.core.first(seq55847__$1);
var seq55847__$2 = cljs.core.next(seq55847__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55852,G__55853,seq55847__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5751__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5751__auto__)){
var custom_remove = temp__5751__auto__;
var G__55968 = this$;
var G__55969 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__55968,G__55969) : custom_remove.call(null,G__55968,G__55969));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__55973 = arguments.length;
switch (G__55973) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__55977 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__55978 = null;
var count__55979 = (0);
var i__55980 = (0);
while(true){
if((i__55980 < count__55979)){
var vec__55997 = chunk__55978.cljs$core$IIndexed$_nth$arity$2(null,i__55980);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55997,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55997,(1),null);
var ev_def = vec__55997;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_56400__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__55977,chunk__55978,count__55979,i__55980,vec__55997,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__55977,chunk__55978,count__55979,i__55980,vec__55997,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__55977,chunk__55978,count__55979,i__55980,handler_56400__$1,vec__55997,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_56400__$1.cljs$core$IFn$_invoke$arity$3 ? handler_56400__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_56400__$1.call(null,oref,e,el));
});})(seq__55977,chunk__55978,count__55979,i__55980,handler_56400__$1,vec__55997,ev,handler,ev_def))
);


var G__56402 = seq__55977;
var G__56403 = chunk__55978;
var G__56404 = count__55979;
var G__56405 = (i__55980 + (1));
seq__55977 = G__56402;
chunk__55978 = G__56403;
count__55979 = G__56404;
i__55980 = G__56405;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55977);
if(temp__5753__auto__){
var seq__55977__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55977__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__55977__$1);
var G__56406 = cljs.core.chunk_rest(seq__55977__$1);
var G__56407 = c__4638__auto__;
var G__56408 = cljs.core.count(c__4638__auto__);
var G__56409 = (0);
seq__55977 = G__56406;
chunk__55978 = G__56407;
count__55979 = G__56408;
i__55980 = G__56409;
continue;
} else {
var vec__56003 = cljs.core.first(seq__55977__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56003,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56003,(1),null);
var ev_def = vec__56003;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_56410__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__55977,chunk__55978,count__55979,i__55980,vec__56003,ev,handler,ev_def,seq__55977__$1,temp__5753__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__55977,chunk__55978,count__55979,i__55980,vec__56003,ev,handler,ev_def,seq__55977__$1,temp__5753__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__55977,chunk__55978,count__55979,i__55980,handler_56410__$1,vec__56003,ev,handler,ev_def,seq__55977__$1,temp__5753__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_56410__$1.cljs$core$IFn$_invoke$arity$3 ? handler_56410__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_56410__$1.call(null,oref,e,el));
});})(seq__55977,chunk__55978,count__55979,i__55980,handler_56410__$1,vec__56003,ev,handler,ev_def,seq__55977__$1,temp__5753__auto__))
);


var G__56411 = cljs.core.next(seq__55977__$1);
var G__56412 = null;
var G__56413 = (0);
var G__56414 = (0);
seq__55977 = G__56411;
chunk__55978 = G__56412;
count__55979 = G__56413;
i__55980 = G__56414;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__56009){
var vec__56010 = p__56009;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56010,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56010,(1),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = event;
if(cljs.core.truth_(and__4210__auto__)){
return handler;
} else {
return and__4210__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4824__auto__ = [];
var len__4818__auto___56416 = arguments.length;
var i__4819__auto___56417 = (0);
while(true){
if((i__4819__auto___56417 < len__4818__auto___56416)){
args__4824__auto__.push((arguments[i__4819__auto___56417]));

var G__56419 = (i__4819__auto___56417 + (1));
i__4819__auto___56417 = G__56419;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e56025){if((e56025 instanceof Object)){
var e = e56025;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e56025;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq56018){
var G__56019 = cljs.core.first(seq56018);
var seq56018__$1 = cljs.core.next(seq56018);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56019,seq56018__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__56040 = arguments.length;
switch (G__56040) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__56042 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__56042) : shadow.dom.build.call(null,G__56042));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k56047,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__56054 = k56047;
var G__56054__$1 = (((G__56054 instanceof cljs.core.Keyword))?G__56054.fqn:null);
switch (G__56054__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56047,else__4464__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__56057){
var vec__56058 = p__56057;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56058,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56058,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.object.Watch{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56046){
var self__ = this;
var G__56046__$1 = this;
return (new cljs.core.RecordIter((0),G__56046__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56049,other56050){
var self__ = this;
var this56049__$1 = this;
return (((!((other56050 == null)))) && ((((this56049__$1.constructor === other56050.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56049__$1.key,other56050.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56049__$1.handler,other56050.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56049__$1.__extmap,other56050.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k56047){
var self__ = this;
var this__4468__auto____$1 = this;
var G__56072 = k56047;
var G__56072__$1 = (((G__56072 instanceof cljs.core.Keyword))?G__56072.fqn:null);
switch (G__56072__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56047);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__56046){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__56074 = cljs.core.keyword_identical_QMARK_;
var expr__56075 = k__4470__auto__;
if(cljs.core.truth_((pred__56074.cljs$core$IFn$_invoke$arity$2 ? pred__56074.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__56075) : pred__56074.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__56075)))){
return (new shadow.object.Watch(G__56046,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56074.cljs$core$IFn$_invoke$arity$2 ? pred__56074.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__56075) : pred__56074.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__56075)))){
return (new shadow.object.Watch(self__.key,G__56046,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__56046),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__56046){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__56046,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__56052){
var extmap__4501__auto__ = (function (){var G__56077 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56052,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__56052)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56077);
} else {
return G__56077;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__56052),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__56052),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56083_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__56083_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__56104 = cljs.core.seq(self__.watches);
var chunk__56105 = null;
var count__56106 = (0);
var i__56107 = (0);
while(true){
if((i__56107 < count__56106)){
var map__56116 = chunk__56105.cljs$core$IIndexed$_nth$arity$2(null,i__56107);
var map__56116__$1 = cljs.core.__destructure_map(map__56116);
var watch = map__56116__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56116__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56116__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__56469 = seq__56104;
var G__56470 = chunk__56105;
var G__56471 = count__56106;
var G__56472 = (i__56107 + (1));
seq__56104 = G__56469;
chunk__56105 = G__56470;
count__56106 = G__56471;
i__56107 = G__56472;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56104);
if(temp__5753__auto__){
var seq__56104__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56104__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__56104__$1);
var G__56473 = cljs.core.chunk_rest(seq__56104__$1);
var G__56474 = c__4638__auto__;
var G__56475 = cljs.core.count(c__4638__auto__);
var G__56476 = (0);
seq__56104 = G__56473;
chunk__56105 = G__56474;
count__56106 = G__56475;
i__56107 = G__56476;
continue;
} else {
var map__56117 = cljs.core.first(seq__56104__$1);
var map__56117__$1 = cljs.core.__destructure_map(map__56117);
var watch = map__56117__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56117__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56117__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__56478 = cljs.core.next(seq__56104__$1);
var G__56479 = null;
var G__56480 = (0);
var G__56481 = (0);
seq__56104 = G__56478;
chunk__56105 = G__56479;
count__56106 = G__56480;
i__56107 = G__56481;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__56125_56482 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__56126_56483 = null;
var count__56127_56484 = (0);
var i__56128_56485 = (0);
while(true){
if((i__56128_56485 < count__56127_56484)){
var child_56486 = chunk__56126_56483.cljs$core$IIndexed$_nth$arity$2(null,i__56128_56485);
shadow.object._destroy_BANG_(child_56486,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__56487 = seq__56125_56482;
var G__56488 = chunk__56126_56483;
var G__56489 = count__56127_56484;
var G__56490 = (i__56128_56485 + (1));
seq__56125_56482 = G__56487;
chunk__56126_56483 = G__56488;
count__56127_56484 = G__56489;
i__56128_56485 = G__56490;
continue;
} else {
var temp__5753__auto___56491 = cljs.core.seq(seq__56125_56482);
if(temp__5753__auto___56491){
var seq__56125_56492__$1 = temp__5753__auto___56491;
if(cljs.core.chunked_seq_QMARK_(seq__56125_56492__$1)){
var c__4638__auto___56493 = cljs.core.chunk_first(seq__56125_56492__$1);
var G__56494 = cljs.core.chunk_rest(seq__56125_56492__$1);
var G__56495 = c__4638__auto___56493;
var G__56496 = cljs.core.count(c__4638__auto___56493);
var G__56497 = (0);
seq__56125_56482 = G__56494;
chunk__56126_56483 = G__56495;
count__56127_56484 = G__56496;
i__56128_56485 = G__56497;
continue;
} else {
var child_56498 = cljs.core.first(seq__56125_56492__$1);
shadow.object._destroy_BANG_(child_56498,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__56499 = cljs.core.next(seq__56125_56492__$1);
var G__56500 = null;
var G__56501 = (0);
var G__56502 = (0);
seq__56125_56482 = G__56499;
chunk__56126_56483 = G__56500;
count__56127_56484 = G__56501;
i__56128_56485 = G__56502;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_56508 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_56508 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_56508);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__56144 = arguments.length;
switch (G__56144) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__56152 = arguments.length;
switch (G__56152) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4824__auto__ = [];
var len__4818__auto___56519 = arguments.length;
var i__4819__auto___56520 = (0);
while(true){
if((i__4819__auto___56520 < len__4818__auto___56519)){
args__4824__auto__.push((arguments[i__4819__auto___56520]));

var G__56521 = (i__4819__auto___56520 + (1));
i__4819__auto___56520 = G__56521;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_56528 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5751__auto___56529 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5751__auto___56529)){
var dom_56530 = temp__5751__auto___56529;
shadow.dom.set_data(dom_56530,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_56530,dom_events_56528);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_56530], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_56530], 0));
} else {
var temp__5753__auto___56532 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___56532)){
var dom_fn_56533 = temp__5753__auto___56532;
var dom_56534 = (function (){var G__56161 = (dom_fn_56533.cljs$core$IFn$_invoke$arity$2 ? dom_fn_56533.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_56533.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__56161) : shadow.dom.build.call(null,G__56161));
})();
shadow.dom.set_data(dom_56534,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_56534], 0));

shadow.object.bind_dom_events(oref,dom_56534,dom_events_56528);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_56534], 0));
} else {
}
}

var temp__5753__auto___56535 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___56535)){
var watches_56536 = temp__5753__auto___56535;
var seq__56162_56537 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_56536));
var chunk__56163_56538 = null;
var count__56164_56539 = (0);
var i__56165_56540 = (0);
while(true){
if((i__56165_56540 < count__56164_56539)){
var vec__56180_56541 = chunk__56163_56538.cljs$core$IIndexed$_nth$arity$2(null,i__56165_56540);
var attr_56542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56180_56541,(0),null);
var handler_56543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56180_56541,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_56542,((function (seq__56162_56537,chunk__56163_56538,count__56164_56539,i__56165_56540,vec__56180_56541,attr_56542,handler_56543,watches_56536,temp__5753__auto___56535,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_56543.cljs$core$IFn$_invoke$arity$3 ? handler_56543.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_56543.call(null,oref,old,new$));
});})(seq__56162_56537,chunk__56163_56538,count__56164_56539,i__56165_56540,vec__56180_56541,attr_56542,handler_56543,watches_56536,temp__5753__auto___56535,oid,parent,result_chan,odef,obj,oref))
);


var G__56545 = seq__56162_56537;
var G__56546 = chunk__56163_56538;
var G__56547 = count__56164_56539;
var G__56548 = (i__56165_56540 + (1));
seq__56162_56537 = G__56545;
chunk__56163_56538 = G__56546;
count__56164_56539 = G__56547;
i__56165_56540 = G__56548;
continue;
} else {
var temp__5753__auto___56549__$1 = cljs.core.seq(seq__56162_56537);
if(temp__5753__auto___56549__$1){
var seq__56162_56550__$1 = temp__5753__auto___56549__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56162_56550__$1)){
var c__4638__auto___56551 = cljs.core.chunk_first(seq__56162_56550__$1);
var G__56552 = cljs.core.chunk_rest(seq__56162_56550__$1);
var G__56553 = c__4638__auto___56551;
var G__56554 = cljs.core.count(c__4638__auto___56551);
var G__56555 = (0);
seq__56162_56537 = G__56552;
chunk__56163_56538 = G__56553;
count__56164_56539 = G__56554;
i__56165_56540 = G__56555;
continue;
} else {
var vec__56187_56556 = cljs.core.first(seq__56162_56550__$1);
var attr_56557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56187_56556,(0),null);
var handler_56558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56187_56556,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_56557,((function (seq__56162_56537,chunk__56163_56538,count__56164_56539,i__56165_56540,vec__56187_56556,attr_56557,handler_56558,seq__56162_56550__$1,temp__5753__auto___56549__$1,watches_56536,temp__5753__auto___56535,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_56558.cljs$core$IFn$_invoke$arity$3 ? handler_56558.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_56558.call(null,oref,old,new$));
});})(seq__56162_56537,chunk__56163_56538,count__56164_56539,i__56165_56540,vec__56187_56556,attr_56557,handler_56558,seq__56162_56550__$1,temp__5753__auto___56549__$1,watches_56536,temp__5753__auto___56535,oid,parent,result_chan,odef,obj,oref))
);


var G__56559 = cljs.core.next(seq__56162_56550__$1);
var G__56560 = null;
var G__56561 = (0);
var G__56562 = (0);
seq__56162_56537 = G__56559;
chunk__56163_56538 = G__56560;
count__56164_56539 = G__56561;
i__56165_56540 = G__56562;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq56158){
var G__56159 = cljs.core.first(seq56158);
var seq56158__$1 = cljs.core.next(seq56158);
var G__56160 = cljs.core.first(seq56158__$1);
var seq56158__$2 = cljs.core.next(seq56158__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56159,G__56160,seq56158__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__56202 = arguments.length;
switch (G__56202) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__56195_SHARP_){
var G__56209 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__56195_SHARP_) : node_gen.call(null,p1__56195_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__56209) : shadow.dom.build.call(null,G__56209));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__56223_56575 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__56224_56576 = null;
var count__56225_56577 = (0);
var i__56226_56578 = (0);
while(true){
if((i__56226_56578 < count__56225_56577)){
var obj_56579 = chunk__56224_56576.cljs$core$IIndexed$_nth$arity$2(null,i__56226_56578);
var obj_56581__$1 = shadow.object.get_from_dom(obj_56579);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_56581__$1);


var G__56585 = seq__56223_56575;
var G__56586 = chunk__56224_56576;
var G__56587 = count__56225_56577;
var G__56588 = (i__56226_56578 + (1));
seq__56223_56575 = G__56585;
chunk__56224_56576 = G__56586;
count__56225_56577 = G__56587;
i__56226_56578 = G__56588;
continue;
} else {
var temp__5753__auto___56589 = cljs.core.seq(seq__56223_56575);
if(temp__5753__auto___56589){
var seq__56223_56590__$1 = temp__5753__auto___56589;
if(cljs.core.chunked_seq_QMARK_(seq__56223_56590__$1)){
var c__4638__auto___56591 = cljs.core.chunk_first(seq__56223_56590__$1);
var G__56593 = cljs.core.chunk_rest(seq__56223_56590__$1);
var G__56594 = c__4638__auto___56591;
var G__56595 = cljs.core.count(c__4638__auto___56591);
var G__56596 = (0);
seq__56223_56575 = G__56593;
chunk__56224_56576 = G__56594;
count__56225_56577 = G__56595;
i__56226_56578 = G__56596;
continue;
} else {
var obj_56597 = cljs.core.first(seq__56223_56590__$1);
var obj_56598__$1 = shadow.object.get_from_dom(obj_56597);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_56598__$1);


var G__56599 = cljs.core.next(seq__56223_56590__$1);
var G__56600 = null;
var G__56601 = (0);
var G__56602 = (0);
seq__56223_56575 = G__56599;
chunk__56224_56576 = G__56600;
count__56225_56577 = G__56601;
i__56226_56578 = G__56602;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__56242 = arguments.length;
switch (G__56242) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__56237_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__56237_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__56246){
var vec__56247 = p__56246;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56247,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56247,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__56252_56610 = cljs.core.seq((function (){var G__56265 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__56265) : coll_transform.call(null,G__56265));
})());
var chunk__56253_56611 = null;
var count__56254_56612 = (0);
var i__56255_56613 = (0);
while(true){
if((i__56255_56613 < count__56254_56612)){
var item_56616 = chunk__56253_56611.cljs$core$IIndexed$_nth$arity$2(null,i__56255_56613);
shadow.object.dom_enter(coll_dom,make_item_fn(item_56616));


var G__56617 = seq__56252_56610;
var G__56618 = chunk__56253_56611;
var G__56619 = count__56254_56612;
var G__56620 = (i__56255_56613 + (1));
seq__56252_56610 = G__56617;
chunk__56253_56611 = G__56618;
count__56254_56612 = G__56619;
i__56255_56613 = G__56620;
continue;
} else {
var temp__5753__auto___56621 = cljs.core.seq(seq__56252_56610);
if(temp__5753__auto___56621){
var seq__56252_56622__$1 = temp__5753__auto___56621;
if(cljs.core.chunked_seq_QMARK_(seq__56252_56622__$1)){
var c__4638__auto___56624 = cljs.core.chunk_first(seq__56252_56622__$1);
var G__56625 = cljs.core.chunk_rest(seq__56252_56622__$1);
var G__56626 = c__4638__auto___56624;
var G__56627 = cljs.core.count(c__4638__auto___56624);
var G__56628 = (0);
seq__56252_56610 = G__56625;
chunk__56253_56611 = G__56626;
count__56254_56612 = G__56627;
i__56255_56613 = G__56628;
continue;
} else {
var item_56629 = cljs.core.first(seq__56252_56622__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_56629));


var G__56630 = cljs.core.next(seq__56252_56622__$1);
var G__56631 = null;
var G__56632 = (0);
var G__56633 = (0);
seq__56252_56610 = G__56630;
chunk__56253_56611 = G__56631;
count__56254_56612 = G__56632;
i__56255_56613 = G__56633;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4298__auto__ = count_new;
var y__4299__auto__ = count_children;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
var n__4695__auto___56636 = count_children__$1;
var idx_56637 = (0);
while(true){
if((idx_56637 < n__4695__auto___56636)){
var cn_56638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_56637);
var cc_56639 = shadow.object.get_from_dom(cn_56638);
var ckey_56640 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_56639);
var cval_56641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_56639,item_key);
var vec__56266_56642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_56637);
var nkey_56643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56266_56642,(0),null);
var nval_56644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56266_56642,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_56640,nkey_56643)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_56641,nval_56644)))){
} else {
var new_obj_56648 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_56643,nval_56644], null));
shadow.dom.replace_node(cn_56638,new_obj_56648);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_56639);

shadow.object.notify_tree_BANG_(new_obj_56648,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__56649 = (idx_56637 + (1));
idx_56637 = G__56649;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__56269_56651 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__56270_56652 = null;
var count__56271_56653 = (0);
var i__56272_56654 = (0);
while(true){
if((i__56272_56654 < count__56271_56653)){
var item_56655 = chunk__56270_56652.cljs$core$IIndexed$_nth$arity$2(null,i__56272_56654);
shadow.object.dom_enter(coll_dom,make_item_fn(item_56655));


var G__56656 = seq__56269_56651;
var G__56657 = chunk__56270_56652;
var G__56658 = count__56271_56653;
var G__56659 = (i__56272_56654 + (1));
seq__56269_56651 = G__56656;
chunk__56270_56652 = G__56657;
count__56271_56653 = G__56658;
i__56272_56654 = G__56659;
continue;
} else {
var temp__5753__auto___56660 = cljs.core.seq(seq__56269_56651);
if(temp__5753__auto___56660){
var seq__56269_56661__$1 = temp__5753__auto___56660;
if(cljs.core.chunked_seq_QMARK_(seq__56269_56661__$1)){
var c__4638__auto___56663 = cljs.core.chunk_first(seq__56269_56661__$1);
var G__56664 = cljs.core.chunk_rest(seq__56269_56661__$1);
var G__56665 = c__4638__auto___56663;
var G__56666 = cljs.core.count(c__4638__auto___56663);
var G__56667 = (0);
seq__56269_56651 = G__56664;
chunk__56270_56652 = G__56665;
count__56271_56653 = G__56666;
i__56272_56654 = G__56667;
continue;
} else {
var item_56668 = cljs.core.first(seq__56269_56661__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_56668));


var G__56670 = cljs.core.next(seq__56269_56661__$1);
var G__56671 = null;
var G__56672 = (0);
var G__56673 = (0);
seq__56269_56651 = G__56670;
chunk__56270_56652 = G__56671;
count__56271_56653 = G__56672;
i__56272_56654 = G__56673;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4210__auto__ = key;
if(cljs.core.truth_(and__4210__auto__)){
return path;
} else {
return and__4210__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__56273 = "inspect!";
var G__56274 = shadow.object._id(oref);
var G__56275 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__56276 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__56273,G__56274,G__56275,G__56276) : shadow.object.info.call(null,G__56273,G__56274,G__56275,G__56276));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__56277_56678 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__56278_56679 = null;
var count__56279_56680 = (0);
var i__56280_56681 = (0);
while(true){
if((i__56280_56681 < count__56279_56680)){
var vec__56302_56683 = chunk__56278_56679.cljs$core$IIndexed$_nth$arity$2(null,i__56280_56681);
var id_56684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56302_56683,(0),null);
var oref_56685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56302_56683,(1),null);
var G__56305_56686 = "dump";
var G__56306_56687 = id_56684;
var G__56307_56688 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_56685)], 0));
var G__56308_56689 = cljs.core.deref(shadow.object._data(oref_56685));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__56305_56686,G__56306_56687,G__56307_56688,G__56308_56689) : shadow.object.info.call(null,G__56305_56686,G__56306_56687,G__56307_56688,G__56308_56689));


var G__56690 = seq__56277_56678;
var G__56691 = chunk__56278_56679;
var G__56692 = count__56279_56680;
var G__56693 = (i__56280_56681 + (1));
seq__56277_56678 = G__56690;
chunk__56278_56679 = G__56691;
count__56279_56680 = G__56692;
i__56280_56681 = G__56693;
continue;
} else {
var temp__5753__auto___56694 = cljs.core.seq(seq__56277_56678);
if(temp__5753__auto___56694){
var seq__56277_56695__$1 = temp__5753__auto___56694;
if(cljs.core.chunked_seq_QMARK_(seq__56277_56695__$1)){
var c__4638__auto___56696 = cljs.core.chunk_first(seq__56277_56695__$1);
var G__56698 = cljs.core.chunk_rest(seq__56277_56695__$1);
var G__56699 = c__4638__auto___56696;
var G__56700 = cljs.core.count(c__4638__auto___56696);
var G__56701 = (0);
seq__56277_56678 = G__56698;
chunk__56278_56679 = G__56699;
count__56279_56680 = G__56700;
i__56280_56681 = G__56701;
continue;
} else {
var vec__56309_56702 = cljs.core.first(seq__56277_56695__$1);
var id_56703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56309_56702,(0),null);
var oref_56704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56309_56702,(1),null);
var G__56312_56706 = "dump";
var G__56313_56707 = id_56703;
var G__56314_56708 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_56704)], 0));
var G__56315_56709 = cljs.core.deref(shadow.object._data(oref_56704));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__56312_56706,G__56313_56707,G__56314_56708,G__56315_56709) : shadow.object.info.call(null,G__56312_56706,G__56313_56707,G__56314_56708,G__56315_56709));


var G__56710 = cljs.core.next(seq__56277_56695__$1);
var G__56711 = null;
var G__56712 = (0);
var G__56713 = (0);
seq__56277_56678 = G__56710;
chunk__56278_56679 = G__56711;
count__56279_56680 = G__56712;
i__56280_56681 = G__56713;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
