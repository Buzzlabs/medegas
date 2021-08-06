goog.provide('botijao.events');
var module$node_modules$recorder_js$index=shadow.js.require("module$node_modules$recorder_js$index", {});
var module$node_modules$wav_decoder$index=shadow.js.require("module$node_modules$wav_decoder$index", {});
var module$node_modules$pitchfinder$lib$index=shadow.js.require("module$node_modules$pitchfinder$lib$index", {});
/**
 * Helper function. Takes js/Error object and returns a map with its name and massage.
 */
botijao.events.err_map = (function botijao$events$err_map(error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(function (){var target_obj_33924 = error;
var _STAR_runtime_state_STAR__orig_val__33926 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33927 = oops.state.prepare_state(target_obj_33924,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33927);

try{var next_obj_33925 = ((oops.core.validate_object_access_dynamically(target_obj_33924,(0),"name",true,true,false))?(target_obj_33924["name"]):null);
return next_obj_33925;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33926);
}})(),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var target_obj_33928 = error;
var _STAR_runtime_state_STAR__orig_val__33930 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33931 = oops.state.prepare_state(target_obj_33928,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33931);

try{var next_obj_33929 = ((oops.core.validate_object_access_dynamically(target_obj_33928,(0),"message",true,true,false))?(target_obj_33928["message"]):null);
return next_obj_33929;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33930);
}})()], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("botijao.events","initialize-db","botijao.events/initialize-db",18423311),(function (_,___$1){
return botijao.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("botijao.events","navigate","botijao.events/navigate",710343222),(function (_,p__33932){
var vec__33933 = p__33932;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33933,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33933,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),handler], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("botijao.events","set-active-panel","botijao.events/set-active-panel",-892789479),(function (p__33936,p__33937){
var map__33938 = p__33936;
var map__33938__$1 = cljs.core.__destructure_map(map__33938);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33938__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33939 = p__33937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
}));
botijao.events.on_start_fn = (function botijao$events$on_start_fn(p__33942,p__33943){
var map__33944 = p__33942;
var map__33944__$1 = cljs.core.__destructure_map(map__33944);
var tick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33944__$1,new cljs.core.Keyword(null,"tick","tick",-835886976));
var ticker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33944__$1,new cljs.core.Keyword(null,"ticker","ticker",214613162));
var map__33945 = p__33943;
var map__33945__$1 = cljs.core.__destructure_map(map__33945);
var on_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33945__$1,new cljs.core.Keyword(null,"on-started","on-started",-458493453));
var on_tick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33945__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
return (function (){
re_frame.core.dispatch(on_started);

var c__30054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30055__auto__ = (function (){var switch__29984__auto__ = (function (state_33952){
var state_val_33953 = (state_33952[(1)]);
if((state_val_33953 === (1))){
var inst_33946 = (function (){return (function (){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_tick,new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(tick)));
});
})();
var inst_33947 = new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(tick);
var inst_33948 = setInterval(inst_33946,inst_33947);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33952__$1,(2),ticker,inst_33948);
} else {
if((state_val_33953 === (2))){
var inst_33950 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33952__$1,inst_33950);
} else {
return null;
}
}
});
return (function() {
var botijao$events$on_start_fn_$_state_machine__29985__auto__ = null;
var botijao$events$on_start_fn_$_state_machine__29985__auto____0 = (function (){
var statearr_33954 = [null,null,null,null,null,null,null];
(statearr_33954[(0)] = botijao$events$on_start_fn_$_state_machine__29985__auto__);

(statearr_33954[(1)] = (1));

return statearr_33954;
});
var botijao$events$on_start_fn_$_state_machine__29985__auto____1 = (function (state_33952){
while(true){
var ret_value__29986__auto__ = (function (){try{while(true){
var result__29987__auto__ = switch__29984__auto__(state_33952);
if(cljs.core.keyword_identical_QMARK_(result__29987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29987__auto__;
}
break;
}
}catch (e33955){var ex__29988__auto__ = e33955;
var statearr_33956_34192 = state_33952;
(statearr_33956_34192[(2)] = ex__29988__auto__);


if(cljs.core.seq((state_33952[(4)]))){
var statearr_33957_34193 = state_33952;
(statearr_33957_34193[(1)] = cljs.core.first((state_33952[(4)])));

} else {
throw ex__29988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34194 = state_33952;
state_33952 = G__34194;
continue;
} else {
return ret_value__29986__auto__;
}
break;
}
});
botijao$events$on_start_fn_$_state_machine__29985__auto__ = function(state_33952){
switch(arguments.length){
case 0:
return botijao$events$on_start_fn_$_state_machine__29985__auto____0.call(this);
case 1:
return botijao$events$on_start_fn_$_state_machine__29985__auto____1.call(this,state_33952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
botijao$events$on_start_fn_$_state_machine__29985__auto__.cljs$core$IFn$_invoke$arity$0 = botijao$events$on_start_fn_$_state_machine__29985__auto____0;
botijao$events$on_start_fn_$_state_machine__29985__auto__.cljs$core$IFn$_invoke$arity$1 = botijao$events$on_start_fn_$_state_machine__29985__auto____1;
return botijao$events$on_start_fn_$_state_machine__29985__auto__;
})()
})();
var state__30056__auto__ = (function (){var statearr_33958 = f__30055__auto__();
(statearr_33958[(6)] = c__30054__auto__);

return statearr_33958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30056__auto__);
}));

return c__30054__auto__;
});
});
botijao.events.on_stop_fn = (function botijao$events$on_stop_fn(p__33960,_){
var map__33961 = p__33960;
var map__33961__$1 = cljs.core.__destructure_map(map__33961);
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"mime-type","mime-type",1058646439));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"stream","stream",1534941648));
var ticker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"ticker","ticker",214613162));
return (function (audio){
var blob = (function (){var target_obj_33962 = audio;
var _STAR_runtime_state_STAR__orig_val__33964 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33965 = oops.state.prepare_state(target_obj_33962,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33965);

try{var next_obj_33963 = ((oops.core.validate_object_access_dynamically(target_obj_33962,(0),"blob",true,true,false))?(target_obj_33962["blob"]):null);
return next_obj_33963;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33964);
}})();
var filetype = cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mime_type,/\//));
var file = (new File([blob],[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filetype)].join(''),({"type": mime_type})));
var target_obj_33966_34195 = (function (){var target_obj_33970 = stream;
var _STAR_runtime_state_STAR__orig_val__33974 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33975 = oops.state.prepare_state(target_obj_33970,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33975);

try{var call_info_33972 = [target_obj_33970,(function (){var next_obj_33973 = ((oops.core.validate_object_access_dynamically(target_obj_33970,(0),"getTracks",true,true,false))?(target_obj_33970["getTracks"]):null);
return next_obj_33973;
})()];
var fn_33971 = (call_info_33972[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33971,oops.state.get_last_access_modifier())){
if((!((fn_33971 == null)))){
return fn_33971.call((call_info_33972[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33974);
}})();
var _STAR_runtime_state_STAR__orig_val__33976_34196 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33977_34197 = oops.state.prepare_state(target_obj_33966_34195,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33977_34197);

try{var call_info_33968_34198 = [target_obj_33966_34195,(function (){var next_obj_33969 = ((oops.core.validate_object_access_dynamically(target_obj_33966_34195,(0),"forEach",true,true,false))?(target_obj_33966_34195["forEach"]):null);
return next_obj_33969;
})()];
var fn_33967_34199 = (call_info_33968_34198[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33967_34199,oops.state.get_last_access_modifier())){
if((!((fn_33967_34199 == null)))){
fn_33967_34199.call((call_info_33968_34198[(0)]),(function (p1__33959_SHARP_){
return p1__33959_SHARP_.stop();
}));
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33976_34196);
}
var c__30054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30055__auto__ = (function (){var switch__29984__auto__ = (function (state_34034){
var state_val_34035 = (state_34034[(1)]);
if((state_val_34035 === (7))){
var inst_33983 = (state_34034[(7)]);
var inst_34003 = (inst_33983["createObjectURL"]);
var state_34034__$1 = state_34034;
var statearr_34036_34203 = state_34034__$1;
(statearr_34036_34203[(2)] = inst_34003);

(statearr_34036_34203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (1))){
var inst_33983 = (state_34034[(7)]);
var inst_33978 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),new cljs.core.Keyword(null,"url","url",276297046)];
var inst_33983__$1 = URL;
var inst_33986 = oops.state._STAR_runtime_state_STAR_;
var inst_33987 = (new Error());
var inst_33988 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_33989 = oops.state.prepare_state(inst_33983__$1,inst_33987,inst_33988);
var inst_33990 = (oops.state._STAR_runtime_state_STAR_ = inst_33989);
var state_34034__$1 = (function (){var statearr_34037 = state_34034;
(statearr_34037[(7)] = inst_33983__$1);

(statearr_34037[(8)] = inst_33990);

(statearr_34037[(9)] = inst_33986);

(statearr_34037[(10)] = inst_33978);

return statearr_34037;
})();
var statearr_34038_34204 = state_34034__$1;
(statearr_34038_34204[(2)] = null);

(statearr_34038_34204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (4))){
var inst_33978 = (state_34034[(10)]);
var inst_34025 = (state_34034[(2)]);
var inst_34026 = [id,file,filetype,mime_type,inst_34025];
var inst_34027 = cljs.core.PersistentHashMap.fromArrays(inst_33978,inst_34026);
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34034__$1,(2),output,inst_34027);
} else {
if((state_val_34035 === (15))){
var inst_34019 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
var statearr_34040_34205 = state_34034__$1;
(statearr_34040_34205[(2)] = inst_34019);

(statearr_34040_34205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (13))){
var inst_34007 = (state_34034[(11)]);
var inst_34008 = (state_34034[(12)]);
var inst_34015 = (inst_34007[(0)]);
var inst_34016 = inst_34008.call(inst_34015,blob);
var state_34034__$1 = state_34034;
var statearr_34041_34206 = state_34034__$1;
(statearr_34041_34206[(2)] = inst_34016);

(statearr_34041_34206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (6))){
var ___$1 = (function (){var statearr_34042 = state_34034;
(statearr_34042[(4)] = cljs.core.rest((state_34034[(4)])));

return statearr_34042;
})();
var state_34034__$1 = state_34034;
var ex34039 = (state_34034__$1[(2)]);
var statearr_34043_34208 = state_34034__$1;
(statearr_34043_34208[(5)] = ex34039);


throw ex34039;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (3))){
var inst_33983 = (state_34034[(7)]);
var ___$1 = (function (){var statearr_34044 = state_34034;
(statearr_34044[(4)] = cljs.core.cons((5),(state_34034[(4)])));

return statearr_34044;
})();
var ___$2 = (function (){var statearr_34045 = state_34034;
(statearr_34045[(4)] = cljs.core.cons((6),(state_34034[(4)])));

return statearr_34045;
})();
var inst_34001 = oops.core.validate_object_access_dynamically(inst_33983,(0),"createObjectURL",true,true,false);
var state_34034__$1 = state_34034;
if(inst_34001){
var statearr_34046_34209 = state_34034__$1;
(statearr_34046_34209[(1)] = (7));

} else {
var statearr_34047_34210 = state_34034__$1;
(statearr_34047_34210[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (12))){
var inst_34022 = (state_34034[(2)]);
var ___$1 = (function (){var statearr_34048 = state_34034;
(statearr_34048[(4)] = cljs.core.rest((state_34034[(4)])));

return statearr_34048;
})();
var state_34034__$1 = state_34034;
var statearr_34049_34211 = state_34034__$1;
(statearr_34049_34211[(2)] = inst_34022);

(statearr_34049_34211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (2))){
var inst_34029 = (state_34034[(2)]);
var state_34034__$1 = (function (){var statearr_34050 = state_34034;
(statearr_34050[(13)] = inst_34029);

return statearr_34050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34034__$1,(16),ticker);
} else {
if((state_val_34035 === (11))){
var state_34034__$1 = state_34034;
var statearr_34051_34212 = state_34034__$1;
(statearr_34051_34212[(2)] = null);

(statearr_34051_34212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (9))){
var inst_34007 = (state_34034[(11)]);
var inst_33983 = (state_34034[(7)]);
var inst_34008 = (state_34034[(12)]);
var inst_34006 = (state_34034[(2)]);
var inst_34007__$1 = [inst_33983,inst_34006];
var inst_34008__$1 = (inst_34007__$1[(1)]);
var inst_34009 = oops.state.get_last_access_modifier();
var inst_34010 = oops.core.validate_fn_call_dynamically(inst_34008__$1,inst_34009);
var state_34034__$1 = (function (){var statearr_34052 = state_34034;
(statearr_34052[(11)] = inst_34007__$1);

(statearr_34052[(12)] = inst_34008__$1);

return statearr_34052;
})();
if(inst_34010){
var statearr_34053_34213 = state_34034__$1;
(statearr_34053_34213[(1)] = (10));

} else {
var statearr_34054_34214 = state_34034__$1;
(statearr_34054_34214[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (5))){
var inst_33986 = (state_34034[(9)]);
var ___$1 = (function (){var statearr_34055 = state_34034;
(statearr_34055[(4)] = cljs.core.rest((state_34034[(4)])));

return statearr_34055;
})();
var inst_33992 = (state_34034[(2)]);
var inst_33993 = (oops.state._STAR_runtime_state_STAR_ = inst_33986);
var ___$2 = (function (){var temp__5753__auto__ = (state_34034[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__29229__auto__ = temp__5753__auto__;
throw e__29229__auto__;
} else {
return null;
}
})();
var state_34034__$1 = (function (){var statearr_34056 = state_34034;
(statearr_34056[(14)] = inst_33993);

return statearr_34056;
})();
var statearr_34057_34215 = state_34034__$1;
(statearr_34057_34215[(2)] = inst_33992);

(statearr_34057_34215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (14))){
var state_34034__$1 = state_34034;
var statearr_34058_34216 = state_34034__$1;
(statearr_34058_34216[(2)] = null);

(statearr_34058_34216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (16))){
var inst_34031 = (state_34034[(2)]);
var inst_34032 = clearInterval(inst_34031);
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34034__$1,inst_34032);
} else {
if((state_val_34035 === (10))){
var inst_34008 = (state_34034[(12)]);
var inst_34012 = (inst_34008 == null);
var inst_34013 = cljs.core.not(inst_34012);
var state_34034__$1 = state_34034;
if(inst_34013){
var statearr_34059_34217 = state_34034__$1;
(statearr_34059_34217[(1)] = (13));

} else {
var statearr_34060_34218 = state_34034__$1;
(statearr_34060_34218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (8))){
var state_34034__$1 = state_34034;
var statearr_34061_34219 = state_34034__$1;
(statearr_34061_34219[(2)] = null);

(statearr_34061_34219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var botijao$events$on_stop_fn_$_state_machine__29985__auto__ = null;
var botijao$events$on_stop_fn_$_state_machine__29985__auto____0 = (function (){
var statearr_34062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34062[(0)] = botijao$events$on_stop_fn_$_state_machine__29985__auto__);

(statearr_34062[(1)] = (1));

return statearr_34062;
});
var botijao$events$on_stop_fn_$_state_machine__29985__auto____1 = (function (state_34034){
while(true){
var ret_value__29986__auto__ = (function (){try{while(true){
var result__29987__auto__ = switch__29984__auto__(state_34034);
if(cljs.core.keyword_identical_QMARK_(result__29987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29987__auto__;
}
break;
}
}catch (e34063){var ex__29988__auto__ = e34063;
var statearr_34064_34220 = state_34034;
(statearr_34064_34220[(2)] = ex__29988__auto__);


if(cljs.core.seq((state_34034[(4)]))){
var statearr_34065_34221 = state_34034;
(statearr_34065_34221[(1)] = cljs.core.first((state_34034[(4)])));

} else {
throw ex__29988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34222 = state_34034;
state_34034 = G__34222;
continue;
} else {
return ret_value__29986__auto__;
}
break;
}
});
botijao$events$on_stop_fn_$_state_machine__29985__auto__ = function(state_34034){
switch(arguments.length){
case 0:
return botijao$events$on_stop_fn_$_state_machine__29985__auto____0.call(this);
case 1:
return botijao$events$on_stop_fn_$_state_machine__29985__auto____1.call(this,state_34034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
botijao$events$on_stop_fn_$_state_machine__29985__auto__.cljs$core$IFn$_invoke$arity$0 = botijao$events$on_stop_fn_$_state_machine__29985__auto____0;
botijao$events$on_stop_fn_$_state_machine__29985__auto__.cljs$core$IFn$_invoke$arity$1 = botijao$events$on_stop_fn_$_state_machine__29985__auto____1;
return botijao$events$on_stop_fn_$_state_machine__29985__auto__;
})()
})();
var state__30056__auto__ = (function (){var statearr_34066 = f__30055__auto__();
(statearr_34066[(6)] = c__30054__auto__);

return statearr_34066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30056__auto__);
}));

return c__30054__auto__;
});
});
botijao.events.set_start_BANG_ = (function botijao$events$set_start_BANG_(recorder,p__34067,events){
var map__34068 = p__34067;
var map__34068__$1 = cljs.core.__destructure_map(map__34068);
var params = map__34068__$1;
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34068__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
return setTimeout((function (){
var target_obj_34069 = (function (){var target_obj_34073 = recorder;
var _STAR_runtime_state_STAR__orig_val__34077 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34078 = oops.state.prepare_state(target_obj_34073,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34078);

try{var call_info_34075 = [target_obj_34073,(function (){var next_obj_34076 = ((oops.core.validate_object_access_dynamically(target_obj_34073,(0),"start",true,true,false))?(target_obj_34073["start"]):null);
return next_obj_34076;
})()];
var fn_34074 = (call_info_34075[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_34074,oops.state.get_last_access_modifier())){
if((!((fn_34074 == null)))){
return fn_34074.call((call_info_34075[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34077);
}})();
var _STAR_runtime_state_STAR__orig_val__34079 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34080 = oops.state.prepare_state(target_obj_34069,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34080);

try{var call_info_34071 = [target_obj_34069,(function (){var next_obj_34072 = ((oops.core.validate_object_access_dynamically(target_obj_34069,(0),"then",true,true,false))?(target_obj_34069["then"]):null);
return next_obj_34072;
})()];
var fn_34070 = (call_info_34071[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_34070,oops.state.get_last_access_modifier())){
if((!((fn_34070 == null)))){
return fn_34070.call((call_info_34071[(0)]),botijao.events.on_start_fn(params,events));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34079);
}}),delay);
});
botijao.events.set_stop_BANG_ = (function botijao$events$set_stop_BANG_(recorder,p__34081,events){
var map__34082 = p__34081;
var map__34082__$1 = cljs.core.__destructure_map(map__34082);
var params = map__34082__$1;
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34082__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34082__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return setTimeout((function (){
var target_obj_34083 = (function (){var target_obj_34087 = recorder;
var _STAR_runtime_state_STAR__orig_val__34091 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34092 = oops.state.prepare_state(target_obj_34087,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34092);

try{var call_info_34089 = [target_obj_34087,(function (){var next_obj_34090 = ((oops.core.validate_object_access_dynamically(target_obj_34087,(0),"stop",true,true,false))?(target_obj_34087["stop"]):null);
return next_obj_34090;
})()];
var fn_34088 = (call_info_34089[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_34088,oops.state.get_last_access_modifier())){
if((!((fn_34088 == null)))){
return fn_34088.call((call_info_34089[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34091);
}})();
var _STAR_runtime_state_STAR__orig_val__34093 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34094 = oops.state.prepare_state(target_obj_34083,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34094);

try{var call_info_34085 = [target_obj_34083,(function (){var next_obj_34086 = ((oops.core.validate_object_access_dynamically(target_obj_34083,(0),"then",true,true,false))?(target_obj_34083["then"]):null);
return next_obj_34086;
})()];
var fn_34084 = (call_info_34085[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_34084,oops.state.get_last_access_modifier())){
if((!((fn_34084 == null)))){
return fn_34084.call((call_info_34085[(0)]),botijao.events.on_stop_fn(params,events));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34093);
}}),(delay + limit));
});
botijao.events.record_stream_fn = (function botijao$events$record_stream_fn(recorder,params,events){
return (function (stream){
var params_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"stream","stream",1534941648),stream,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ticker","ticker",214613162),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], 0));
var target_obj_34095_34223 = recorder;
var _STAR_runtime_state_STAR__orig_val__34099_34224 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34100_34225 = oops.state.prepare_state(target_obj_34095_34223,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34100_34225);

try{var call_info_34097_34226 = [target_obj_34095_34223,(function (){var next_obj_34098 = ((oops.core.validate_object_access_dynamically(target_obj_34095_34223,(0),"init",true,true,false))?(target_obj_34095_34223["init"]):null);
return next_obj_34098;
})()];
var fn_34096_34227 = (call_info_34097_34226[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_34096_34227,oops.state.get_last_access_modifier())){
if((!((fn_34096_34227 == null)))){
fn_34096_34227.call((call_info_34097_34226[(0)]),stream);
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34099_34224);
}
botijao.events.set_start_BANG_(recorder,params_SINGLEQUOTE_,events);

return botijao.events.set_stop_BANG_(recorder,params_SINGLEQUOTE_,events);
});
});
botijao.events.record_BANG_ = (function botijao$events$record_BANG_(p__34102,events){
var map__34103 = p__34102;
var map__34103__$1 = cljs.core.__destructure_map(map__34103);
var params = map__34103__$1;
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34103__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var audio_context = (new AudioContext());
var recorder = (new module$node_modules$recorder_js$index.default(audio_context));
var pstream = (function (){var target_obj_34104 = navigator;
var _STAR_runtime_state_STAR__orig_val__34110 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34111 = oops.state.prepare_state(target_obj_34104,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34111);

try{var call_info_34106 = (function (){var target_obj_34107 = (function (){var next_obj_34108 = ((oops.core.validate_object_access_dynamically(target_obj_34104,(0),"mediaDevices",true,true,false))?(target_obj_34104["mediaDevices"]):null);
return next_obj_34108;
})();
return [target_obj_34107,(function (){var next_obj_34109 = ((oops.core.validate_object_access_dynamically(target_obj_34107,(0),"getUserMedia",true,true,false))?(target_obj_34107["getUserMedia"]):null);
return next_obj_34109;
})()];
})();
var fn_34105 = (call_info_34106[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_34105,oops.state.get_last_access_modifier())){
if((!((fn_34105 == null)))){
return fn_34105.call((call_info_34106[(0)]),({"audio": true}));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34110);
}})();
var on_error = (function (p1__34101_SHARP_){
var c__30054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30055__auto__ = (function (){var switch__29984__auto__ = (function (state_34115){
var state_val_34116 = (state_34115[(1)]);
if((state_val_34116 === (1))){
var state_34115__$1 = state_34115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34115__$1,(2),output,p1__34101_SHARP_);
} else {
if((state_val_34116 === (2))){
var inst_34113 = (state_34115[(2)]);
var state_34115__$1 = state_34115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34115__$1,inst_34113);
} else {
return null;
}
}
});
return (function() {
var botijao$events$record_BANG__$_state_machine__29985__auto__ = null;
var botijao$events$record_BANG__$_state_machine__29985__auto____0 = (function (){
var statearr_34117 = [null,null,null,null,null,null,null];
(statearr_34117[(0)] = botijao$events$record_BANG__$_state_machine__29985__auto__);

(statearr_34117[(1)] = (1));

return statearr_34117;
});
var botijao$events$record_BANG__$_state_machine__29985__auto____1 = (function (state_34115){
while(true){
var ret_value__29986__auto__ = (function (){try{while(true){
var result__29987__auto__ = switch__29984__auto__(state_34115);
if(cljs.core.keyword_identical_QMARK_(result__29987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29987__auto__;
}
break;
}
}catch (e34118){var ex__29988__auto__ = e34118;
var statearr_34119_34228 = state_34115;
(statearr_34119_34228[(2)] = ex__29988__auto__);


if(cljs.core.seq((state_34115[(4)]))){
var statearr_34120_34229 = state_34115;
(statearr_34120_34229[(1)] = cljs.core.first((state_34115[(4)])));

} else {
throw ex__29988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34230 = state_34115;
state_34115 = G__34230;
continue;
} else {
return ret_value__29986__auto__;
}
break;
}
});
botijao$events$record_BANG__$_state_machine__29985__auto__ = function(state_34115){
switch(arguments.length){
case 0:
return botijao$events$record_BANG__$_state_machine__29985__auto____0.call(this);
case 1:
return botijao$events$record_BANG__$_state_machine__29985__auto____1.call(this,state_34115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
botijao$events$record_BANG__$_state_machine__29985__auto__.cljs$core$IFn$_invoke$arity$0 = botijao$events$record_BANG__$_state_machine__29985__auto____0;
botijao$events$record_BANG__$_state_machine__29985__auto__.cljs$core$IFn$_invoke$arity$1 = botijao$events$record_BANG__$_state_machine__29985__auto____1;
return botijao$events$record_BANG__$_state_machine__29985__auto__;
})()
})();
var state__30056__auto__ = (function (){var statearr_34121 = f__30055__auto__();
(statearr_34121[(6)] = c__30054__auto__);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30056__auto__);
}));

return c__30054__auto__;
});
var target_obj_34122 = (function (){var target_obj_34126 = pstream;
var _STAR_runtime_state_STAR__orig_val__34130 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34131 = oops.state.prepare_state(target_obj_34126,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34131);

try{var call_info_34128 = [target_obj_34126,(function (){var next_obj_34129 = ((oops.core.validate_object_access_dynamically(target_obj_34126,(0),"then",true,true,false))?(target_obj_34126["then"]):null);
return next_obj_34129;
})()];
var fn_34127 = (call_info_34128[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_34127,oops.state.get_last_access_modifier())){
if((!((fn_34127 == null)))){
return fn_34127.call((call_info_34128[(0)]),botijao.events.record_stream_fn(recorder,params,events));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34130);
}})();
var _STAR_runtime_state_STAR__orig_val__34132 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34133 = oops.state.prepare_state(target_obj_34122,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34133);

try{var call_info_34124 = [target_obj_34122,(function (){var next_obj_34125 = ((oops.core.validate_object_access_dynamically(target_obj_34122,(0),"catch",true,true,false))?(target_obj_34122["catch"]):null);
return next_obj_34125;
})()];
var fn_34123 = (call_info_34124[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_34123,oops.state.get_last_access_modifier())){
if((!((fn_34123 == null)))){
return fn_34123.call((call_info_34124[(0)]),on_error);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34132);
}});
re_frame.core.reg_fx(new cljs.core.Keyword("botijao.events","record-audio!","botijao.events/record-audio!",1585277860),(function (p__34134){
var vec__34135 = p__34134;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34135,(0),null);
var map__34138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34135,(1),null);
var map__34138__$1 = cljs.core.__destructure_map(map__34138);
var events = map__34138__$1;
var on_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34138__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34138__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var output = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__30054__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30055__auto__ = (function (){var switch__29984__auto__ = (function (state_34151){
var state_val_34152 = (state_34151[(1)]);
if((state_val_34152 === (1))){
var inst_34139 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"output","output",-1105869043),output);
var inst_34140 = botijao.events.record_BANG_(inst_34139,events);
var state_34151__$1 = (function (){var statearr_34153 = state_34151;
(statearr_34153[(7)] = inst_34140);

return statearr_34153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34151__$1,(2),output);
} else {
if((state_val_34152 === (2))){
var inst_34142 = (state_34151[(8)]);
var inst_34142__$1 = (state_34151[(2)]);
var inst_34143 = (inst_34142__$1 instanceof Error);
var state_34151__$1 = (function (){var statearr_34154 = state_34151;
(statearr_34154[(8)] = inst_34142__$1);

return statearr_34154;
})();
if(cljs.core.truth_(inst_34143)){
var statearr_34155_34231 = state_34151__$1;
(statearr_34155_34231[(1)] = (3));

} else {
var statearr_34156_34232 = state_34151__$1;
(statearr_34156_34232[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (3))){
var state_34151__$1 = state_34151;
var statearr_34157_34233 = state_34151__$1;
(statearr_34157_34233[(2)] = on_error);

(statearr_34157_34233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (4))){
var state_34151__$1 = state_34151;
var statearr_34158_34234 = state_34151__$1;
(statearr_34158_34234[(2)] = on_stop);

(statearr_34158_34234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (5))){
var inst_34142 = (state_34151[(8)]);
var inst_34147 = (state_34151[(2)]);
var inst_34148 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_34147,inst_34142);
var inst_34149 = re_frame.core.dispatch(inst_34148);
var state_34151__$1 = state_34151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34151__$1,inst_34149);
} else {
return null;
}
}
}
}
}
});
return (function() {
var botijao$events$state_machine__29985__auto__ = null;
var botijao$events$state_machine__29985__auto____0 = (function (){
var statearr_34159 = [null,null,null,null,null,null,null,null,null];
(statearr_34159[(0)] = botijao$events$state_machine__29985__auto__);

(statearr_34159[(1)] = (1));

return statearr_34159;
});
var botijao$events$state_machine__29985__auto____1 = (function (state_34151){
while(true){
var ret_value__29986__auto__ = (function (){try{while(true){
var result__29987__auto__ = switch__29984__auto__(state_34151);
if(cljs.core.keyword_identical_QMARK_(result__29987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29987__auto__;
}
break;
}
}catch (e34160){var ex__29988__auto__ = e34160;
var statearr_34161_34235 = state_34151;
(statearr_34161_34235[(2)] = ex__29988__auto__);


if(cljs.core.seq((state_34151[(4)]))){
var statearr_34162_34236 = state_34151;
(statearr_34162_34236[(1)] = cljs.core.first((state_34151[(4)])));

} else {
throw ex__29988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34237 = state_34151;
state_34151 = G__34237;
continue;
} else {
return ret_value__29986__auto__;
}
break;
}
});
botijao$events$state_machine__29985__auto__ = function(state_34151){
switch(arguments.length){
case 0:
return botijao$events$state_machine__29985__auto____0.call(this);
case 1:
return botijao$events$state_machine__29985__auto____1.call(this,state_34151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
botijao$events$state_machine__29985__auto__.cljs$core$IFn$_invoke$arity$0 = botijao$events$state_machine__29985__auto____0;
botijao$events$state_machine__29985__auto__.cljs$core$IFn$_invoke$arity$1 = botijao$events$state_machine__29985__auto____1;
return botijao$events$state_machine__29985__auto__;
})()
})();
var state__30056__auto__ = (function (){var statearr_34163 = f__30055__auto__();
(statearr_34163[(6)] = c__30054__auto__);

return statearr_34163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30056__auto__);
}));

return c__30054__auto__;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("botijao.events","start-recording","botijao.events/start-recording",1222770914),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__34165,_){
var map__34166 = p__34165;
var map__34166__$1 = cljs.core.__destructure_map(map__34166);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34166__$1,new cljs.core.Keyword(null,"db","db",993250759));
var limit = (2000);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"transcribe","transcribe",545952664),(function (p1__34164_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34164_SHARP_,new cljs.core.Keyword(null,"transcription","transcription",622086462));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transcribe","transcribe",545952664),new cljs.core.Keyword(null,"recording","recording",322996097)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"initialized","initialized",-962017594),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),limit,new cljs.core.Keyword(null,"current","current",-1088038603),(0)], null)], null)),new cljs.core.Keyword("botijao.events","record-audio!","botijao.events/record-audio!",1585277860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"delay","delay",-574225219),(500),new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),"audio/wav",new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),(1000)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-started","on-started",-458493453),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.events","recording-started","botijao.events/recording-started",358029724)], null),new cljs.core.Keyword(null,"on-tick","on-tick",-56973396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.events","update-recording-progress","botijao.events/update-recording-progress",309210074)], null),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.events","stop-recording","botijao.events/stop-recording",-1075646304)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.events","recording-error","botijao.events/recording-error",-51917654)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("botijao.events","recording-started","botijao.events/recording-started",358029724),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transcribe","transcribe",545952664),new cljs.core.Keyword(null,"recording","recording",322996097),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"pending","pending",-220036727));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("botijao.events","update-recording-progress","botijao.events/update-recording-progress",309210074),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__34167){
var vec__34168 = p__34167;
var tick_delay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34168,(0),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transcribe","transcribe",545952664),new cljs.core.Keyword(null,"recording","recording",322996097),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"current","current",-1088038603)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,tick_delay));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("botijao.events","stop-recording","botijao.events/stop-recording",-1075646304),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__34171,p__34172){
var map__34173 = p__34171;
var map__34173__$1 = cljs.core.__destructure_map(map__34173);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34173__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34174 = p__34172;
var recording = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34174,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transcribe","transcribe",545952664),new cljs.core.Keyword(null,"recording","recording",322996097),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"success","success",1890645906)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transcribe","transcribe",545952664),new cljs.core.Keyword(null,"recording","recording",322996097),new cljs.core.Keyword(null,"progress","progress",244323547)], null),(function (p__34177){
var map__34178 = p__34177;
var map__34178__$1 = cljs.core.__destructure_map(map__34178);
var progress = map__34178__$1;
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34178__$1,new cljs.core.Keyword(null,"max","max",61366548));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(progress,new cljs.core.Keyword(null,"current","current",-1088038603),max);
})),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.events","detect-pitch","botijao.events/detect-pitch",1472151144),recording], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("botijao.events","recording-error","botijao.events/recording-error",-51917654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__34179){
var vec__34180 = p__34179;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34180,(0),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transcribe","transcribe",545952664),new cljs.core.Keyword(null,"recording","recording",322996097)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),botijao.events.err_map(error)], null));
}));
botijao.events.get_pitch = (function botijao$events$get_pitch(file){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["PITCH FOR FILE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(file)], 0));

return (1234);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("botijao.events","detect-pitch","botijao.events/detect-pitch",1472151144),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__34183,p__34184){
var map__34185 = p__34183;
var map__34185__$1 = cljs.core.__destructure_map(map__34185);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34185__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34186 = p__34184;
var recording = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34186,(0),null);
var file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(recording);
var pitch = botijao.events.get_pitch(file);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"recording","recording",322996097),recording),new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch)], null);
}));

//# sourceMappingURL=botijao.events.js.map
