goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__32310 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__32310)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__32310)){
var G__32312 = (console["error"]);
var G__32313 = msg;
var G__32314 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__32311 = oops.state.get_console_reporter();
return (fexpr__32311.cljs$core$IFn$_invoke$arity$3 ? fexpr__32311.cljs$core$IFn$_invoke$arity$3(G__32312,G__32313,G__32314) : fexpr__32311.call(null,G__32312,G__32313,G__32314));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__32310)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32310)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__32315 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__32315)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__32315)){
var G__32317 = (console["warn"]);
var G__32318 = msg;
var G__32319 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__32316 = oops.state.get_console_reporter();
return (fexpr__32316.cljs$core$IFn$_invoke$arity$3 ? fexpr__32316.cljs$core$IFn$_invoke$arity$3(G__32317,G__32318,G__32319) : fexpr__32316.call(null,G__32317,G__32318,G__32319));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__32315)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32315)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32392 = arguments.length;
var i__4819__auto___32393 = (0);
while(true){
if((i__4819__auto___32393 < len__4818__auto___32392)){
args__4824__auto__.push((arguments[i__4819__auto___32393]));

var G__32394 = (i__4819__auto___32393 + (1));
i__4819__auto___32393 = G__32394;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__32322){
var vec__32323 = p__32322;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32323,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__32326_32395 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__32326_32395)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__32326_32395)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__32326_32395)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32326_32395)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32326_32395)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq32320){
var G__32321 = cljs.core.first(seq32320);
var seq32320__$1 = cljs.core.next(seq32320);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32321,seq32320__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.boolean_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4210__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)):true):true);
if(cljs.core.truth_(and__4210__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5755__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5755__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
return true;

}
}
} else {
var descriptor_32327 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_32327);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_32328 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_32328,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
}
}
} else {
return true;
}
} else {
return and__4210__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_32330 = oops.config.get_child_factory();
var child_factory_32330__$1 = (function (){var G__32331 = child_factory_32330;
var G__32331__$1 = (((G__32331 instanceof cljs.core.Keyword))?G__32331.fqn:null);
switch (G__32331__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_32330;

}
})();

var child_obj_32329 = (child_factory_32330__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_32330__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_32330__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_32329);
} else {
}

return child_obj_32329;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_32334 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_32334);

return selector_path_32334;
} else {
var selector_path_32335 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_32335);

return selector_path_32335;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_32336 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_32336);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_32345 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_32345,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_32338 = (function (){var path_32337 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_32337,(0));

return path_32337;
})();
var len_32339 = path_32338.length;
var i_32340 = (0);
var obj_32341 = obj;
while(true){
if((i_32340 < len_32339)){
var mode_32342 = (path_32338[i_32340]);
var key_32343 = (path_32338[(i_32340 + (1))]);
var next_obj_32344 = oops.core.get_key_dynamically(obj_32341,key_32343,mode_32342);
var G__32346 = mode_32342;
switch (G__32346) {
case (0):
var G__32400 = (i_32340 + (2));
var G__32401 = next_obj_32344;
i_32340 = G__32400;
obj_32341 = G__32401;
continue;

break;
case (1):
if((!((next_obj_32344 == null)))){
var G__32402 = (i_32340 + (2));
var G__32403 = next_obj_32344;
i_32340 = G__32402;
obj_32341 = G__32403;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_32344 == null)))){
var G__32404 = (i_32340 + (2));
var G__32405 = next_obj_32344;
i_32340 = G__32404;
obj_32341 = G__32405;
continue;
} else {
var G__32406 = (i_32340 + (2));
var G__32407 = oops.core.punch_key_dynamically_BANG_.call(null,obj_32341,key_32343);
i_32340 = G__32406;
obj_32341 = G__32407;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32346)].join('')));

}
} else {
return obj_32341;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_32372 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_32372,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_32348 = (function (){var path_32347 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_32347,(0));

return path_32347;
})();
var len_32349 = path_32348.length;
if((len_32349 < (4))){
return [obj,(function (){var path_32351 = path_32348;
var len_32352 = path_32351.length;
var i_32353 = (0);
var obj_32354 = obj;
while(true){
if((i_32353 < len_32352)){
var mode_32355 = (path_32351[i_32353]);
var key_32356 = (path_32351[(i_32353 + (1))]);
var next_obj_32357 = oops.core.get_key_dynamically(obj_32354,key_32356,mode_32355);
var G__32373 = mode_32355;
switch (G__32373) {
case (0):
var G__32411 = (i_32353 + (2));
var G__32412 = next_obj_32357;
i_32353 = G__32411;
obj_32354 = G__32412;
continue;

break;
case (1):
if((!((next_obj_32357 == null)))){
var G__32413 = (i_32353 + (2));
var G__32414 = next_obj_32357;
i_32353 = G__32413;
obj_32354 = G__32414;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_32357 == null)))){
var G__32415 = (i_32353 + (2));
var G__32416 = next_obj_32357;
i_32353 = G__32415;
obj_32354 = G__32416;
continue;
} else {
var G__32417 = (i_32353 + (2));
var G__32418 = oops.core.punch_key_dynamically_BANG_.call(null,obj_32354,key_32356);
i_32353 = G__32417;
obj_32354 = G__32418;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32373)].join('')));

}
} else {
return obj_32354;
}
break;
}
})()];
} else {
var target_obj_32350 = (function (){var path_32358 = path_32348.slice((0),(len_32349 - (2)));
var len_32359 = path_32358.length;
var i_32360 = (0);
var obj_32361 = obj;
while(true){
if((i_32360 < len_32359)){
var mode_32362 = (path_32358[i_32360]);
var key_32363 = (path_32358[(i_32360 + (1))]);
var next_obj_32364 = oops.core.get_key_dynamically(obj_32361,key_32363,mode_32362);
var G__32374 = mode_32362;
switch (G__32374) {
case (0):
var G__32420 = (i_32360 + (2));
var G__32421 = next_obj_32364;
i_32360 = G__32420;
obj_32361 = G__32421;
continue;

break;
case (1):
if((!((next_obj_32364 == null)))){
var G__32422 = (i_32360 + (2));
var G__32423 = next_obj_32364;
i_32360 = G__32422;
obj_32361 = G__32423;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_32364 == null)))){
var G__32424 = (i_32360 + (2));
var G__32425 = next_obj_32364;
i_32360 = G__32424;
obj_32361 = G__32425;
continue;
} else {
var G__32426 = (i_32360 + (2));
var G__32427 = oops.core.punch_key_dynamically_BANG_.call(null,obj_32361,key_32363);
i_32360 = G__32426;
obj_32361 = G__32427;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32374)].join('')));

}
} else {
return obj_32361;
}
break;
}
})();
return [target_obj_32350,(function (){var path_32365 = [(path_32348[(len_32349 - (2))]),(path_32348[(len_32349 - (1))])];
var len_32366 = path_32365.length;
var i_32367 = (0);
var obj_32368 = target_obj_32350;
while(true){
if((i_32367 < len_32366)){
var mode_32369 = (path_32365[i_32367]);
var key_32370 = (path_32365[(i_32367 + (1))]);
var next_obj_32371 = oops.core.get_key_dynamically(obj_32368,key_32370,mode_32369);
var G__32375 = mode_32369;
switch (G__32375) {
case (0):
var G__32429 = (i_32367 + (2));
var G__32430 = next_obj_32371;
i_32367 = G__32429;
obj_32368 = G__32430;
continue;

break;
case (1):
if((!((next_obj_32371 == null)))){
var G__32431 = (i_32367 + (2));
var G__32432 = next_obj_32371;
i_32367 = G__32431;
obj_32368 = G__32432;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_32371 == null)))){
var G__32433 = (i_32367 + (2));
var G__32434 = next_obj_32371;
i_32367 = G__32433;
obj_32368 = G__32434;
continue;
} else {
var G__32435 = (i_32367 + (2));
var G__32436 = oops.core.punch_key_dynamically_BANG_.call(null,obj_32368,key_32370);
i_32367 = G__32435;
obj_32368 = G__32436;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32375)].join('')));

}
} else {
return obj_32368;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_32390 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_32390,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_32377 = (function (){var path_32376 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_32376,(1));

return path_32376;
})();
var len_32380 = path_32377.length;
var parent_obj_path_32381 = path_32377.slice((0),(len_32380 - (2)));
var key_32378 = (path_32377[(len_32380 - (1))]);
var mode_32379 = (path_32377[(len_32380 - (2))]);
var parent_obj_32382 = (function (){var path_32383 = parent_obj_path_32381;
var len_32384 = path_32383.length;
var i_32385 = (0);
var obj_32386 = obj;
while(true){
if((i_32385 < len_32384)){
var mode_32387 = (path_32383[i_32385]);
var key_32388 = (path_32383[(i_32385 + (1))]);
var next_obj_32389 = oops.core.get_key_dynamically(obj_32386,key_32388,mode_32387);
var G__32391 = mode_32387;
switch (G__32391) {
case (0):
var G__32440 = (i_32385 + (2));
var G__32441 = next_obj_32389;
i_32385 = G__32440;
obj_32386 = G__32441;
continue;

break;
case (1):
if((!((next_obj_32389 == null)))){
var G__32442 = (i_32385 + (2));
var G__32443 = next_obj_32389;
i_32385 = G__32442;
obj_32386 = G__32443;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_32389 == null)))){
var G__32444 = (i_32385 + (2));
var G__32445 = next_obj_32389;
i_32385 = G__32444;
obj_32386 = G__32445;
continue;
} else {
var G__32446 = (i_32385 + (2));
var G__32447 = oops.core.punch_key_dynamically_BANG_.call(null,obj_32386,key_32388);
i_32385 = G__32446;
obj_32386 = G__32447;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32391)].join('')));

}
} else {
return obj_32386;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_32382,key_32378,val,mode_32379);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
