goog.provide('botijao.views');
botijao.views.record_button = (function botijao$views$record_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Grave com o botao abaixo uma batida com madeira no centro do botijao"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.events","start-recording","botijao.events/start-recording",1222770914)], null));
})], null),"Gravar"], null)], null);
});
botijao.views.recording_play = (function botijao$views$recording_play(){
var map__34207 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.subs","recording-audio","botijao.subs/recording-audio",944539495)], null)));
var map__34207__$1 = cljs.core.__destructure_map(map__34207);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34207__$1,new cljs.core.Keyword(null,"url","url",276297046));
var mime_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34207__$1,new cljs.core.Keyword(null,"mime-type","mime-type",1058646439));
if(cljs.core.truth_(url)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Escute o som gravado:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"controls","controls",1340701452),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"type","type",1174270348),mime_type], null)], null)], null)], null);
} else {
return null;
}
});
botijao.views.recording_pitch = (function botijao$views$recording_pitch(){
var pitch = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.subs","recording-pitch","botijao.subs/recording-pitch",-894201007)], null)));
if(cljs.core.truth_(pitch)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Pitch Detectado: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pitch)].join('')], null)], null);
} else {
return null;
}
});
botijao.views.home_panel = (function botijao$views$home_panel(){
var name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.subs","name","botijao.subs/name",-1660902906)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Descubra quanto lhe resta de Gas no botijao"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [botijao.views.record_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [botijao.views.recording_play], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [botijao.views.recording_pitch], null)], null);
});
botijao.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [botijao.views.home_panel], null);
}));
botijao.views.main_panel = (function botijao$views$main_panel(){
var active_panel = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("botijao.subs","active-panel","botijao.subs/active-panel",1709876847)], null));
return botijao.routes.panels.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(active_panel));
});

//# sourceMappingURL=botijao.views.js.map
