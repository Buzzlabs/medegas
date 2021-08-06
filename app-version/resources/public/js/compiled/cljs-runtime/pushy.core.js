goog.provide('pushy.core');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__45753 = h;
G__45753.setUseFragment(false);

G__45753.setPathPrefix("");

G__45753.setEnabled(true);

return G__45753;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
(t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.hash)].join('');
}));

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
(t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
}));

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__45756 = arguments.length;
switch (G__45756) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1(pushy.core.set_create_url_BANG_(pushy.core.set_retrieve_token_BANG_((new goog.history.Html5History.TokenTransformer()))));
}));

(pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_((new goog.history.Html5History(window,transformer)));
}));

(pushy.core.new_history.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
pushy.core.IHistory = function(){};

var pushy$core$IHistory$set_token_BANG_$dyn_45890 = (function() {
var G__45893 = null;
var G__45893__2 = (function (this$,token){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4510__auto__.call(null,this$,token));
} else {
var m__4508__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4508__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
});
var G__45893__3 = (function (this$,token,title){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4510__auto__.call(null,this$,token,title));
} else {
var m__4508__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4508__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
});
G__45893 = function(this$,token,title){
switch(arguments.length){
case 2:
return G__45893__2.call(this,this$,token);
case 3:
return G__45893__3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45893.cljs$core$IFn$_invoke$arity$2 = G__45893__2;
G__45893.cljs$core$IFn$_invoke$arity$3 = G__45893__3;
return G__45893;
})()
;
pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__45765 = arguments.length;
switch (G__45765) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
return pushy$core$IHistory$set_token_BANG_$dyn_45890(this$,token);
}
}));

(pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
return pushy$core$IHistory$set_token_BANG_$dyn_45890(this$,token,title);
}
}));

(pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3);


var pushy$core$IHistory$replace_token_BANG_$dyn_45900 = (function() {
var G__45901 = null;
var G__45901__2 = (function (this$,token){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4510__auto__.call(null,this$,token));
} else {
var m__4508__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4508__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
});
var G__45901__3 = (function (this$,token,title){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4510__auto__.call(null,this$,token,title));
} else {
var m__4508__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4508__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
});
G__45901 = function(this$,token,title){
switch(arguments.length){
case 2:
return G__45901__2.call(this,this$,token);
case 3:
return G__45901__3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45901.cljs$core$IFn$_invoke$arity$2 = G__45901__2;
G__45901.cljs$core$IFn$_invoke$arity$3 = G__45901__3;
return G__45901;
})()
;
pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__45782 = arguments.length;
switch (G__45782) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
return pushy$core$IHistory$replace_token_BANG_$dyn_45900(this$,token);
}
}));

(pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
return pushy$core$IHistory$replace_token_BANG_$dyn_45900(this$,token,title);
}
}));

(pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3);


var pushy$core$IHistory$get_token$dyn_45908 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (pushy.core.get_token[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (pushy.core.get_token["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.get-token",this$);
}
}
});
pushy.core.get_token = (function pushy$core$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$get_token$arity$1 == null)))))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
return pushy$core$IHistory$get_token$dyn_45908(this$);
}
});

var pushy$core$IHistory$start_BANG_$dyn_45917 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (pushy.core.start_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.start!",this$);
}
}
});
pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
return pushy$core$IHistory$start_BANG_$dyn_45917(this$);
}
});

var pushy$core$IHistory$stop_BANG_$dyn_45927 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (pushy.core.stop_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.stop!",this$);
}
}
});
pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
return pushy$core$IHistory$stop_BANG_$dyn_45927(this$);
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_(uri)))) && (((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || ((!((cljs.core.re_matches(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
var fragment = uri.getFragment();
var G__45800 = path;
var G__45800__$1 = ((cljs.core.seq(query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45800),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''):G__45800);
if(cljs.core.seq(fragment)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45800__$1),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
} else {
return G__45800__$1;
}
});
pushy.core.valid_link_QMARK_ = (function pushy$core$valid_link_QMARK_(el){
var and__4210__auto__ = (function (){var G__45805 = el.tagName;
var fexpr__45804 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["AREA",null,"A",null], null), null);
return (fexpr__45804.cljs$core$IFn$_invoke$arity$1 ? fexpr__45804.cljs$core$IFn$_invoke$arity$1(G__45805) : fexpr__45804.call(null,G__45805));
})();
if(cljs.core.truth_(and__4210__auto__)){
return el.hasAttribute("href");
} else {
return and__4210__auto__;
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__4824__auto__ = [];
var len__4818__auto___45938 = arguments.length;
var i__4819__auto___45939 = (0);
while(true){
if((i__4819__auto___45939 < len__4818__auto___45938)){
args__4824__auto__.push((arguments[i__4819__auto___45939]));

var G__45940 = (i__4819__auto___45939 + (1));
i__4819__auto___45939 = G__45940;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__45815){
var map__45816 = p__45815;
var map__45816__$1 = cljs.core.__destructure_map(map__45816);
var processable_url_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45816__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45816__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45816__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly(false));
var history = pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();
var event_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof pushy !== 'undefined') && (typeof pushy.core !== 'undefined') && (typeof pushy.core.t_pushy$core45817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core45817 = (function (event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,map__45816,history,processable_url_QMARK_,p__45815,match_fn,meta45818){
this.event_keys = event_keys;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.dispatch_fn = dispatch_fn;
this.map__45816 = map__45816;
this.history = history;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.p__45815 = p__45815;
this.match_fn = match_fn;
this.meta45818 = meta45818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(pushy.core.t_pushy$core45817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45819,meta45818__$1){
var self__ = this;
var _45819__$1 = this;
return (new pushy.core.t_pushy$core45817(self__.event_keys,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.dispatch_fn,self__.map__45816,self__.history,self__.processable_url_QMARK_,self__.p__45815,self__.match_fn,meta45818__$1));
}));

(pushy.core.t_pushy$core45817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45819){
var self__ = this;
var _45819__$1 = this;
return self__.meta45818;
}));

(pushy.core.t_pushy$core45817.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(pushy.core.t_pushy$core45817.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
}));

(pushy.core.t_pushy$core45817.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
}));

(pushy.core.t_pushy$core45817.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
}));

(pushy.core.t_pushy$core45817.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
}));

(pushy.core.t_pushy$core45817.prototype.pushy$core$IHistory$get_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
}));

(pushy.core.t_pushy$core45817.prototype.pushy$core$IHistory$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.pushy$core$IHistory$stop_BANG_$arity$1(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,(function (e){
var temp__5753__auto__ = (function (){var G__45820 = (function (){var G__45821 = e.token;
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__45821) : self__.match_fn.call(null,G__45821));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__45820) : self__.identity_fn.call(null,G__45820));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var match = temp__5753__auto__;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match) : self__.dispatch_fn.call(null,match));
} else {
return null;
}
})));

var temp__5753__auto___45952 = (function (){var G__45822 = (function (){var G__45823 = this$__$1.pushy$core$IHistory$get_token$arity$1(null);
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__45823) : self__.match_fn.call(null,G__45823));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__45822) : self__.identity_fn.call(null,G__45822));
})();
if(cljs.core.truth_(temp__5753__auto___45952)){
var match_45953 = temp__5753__auto___45952;
(self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match_45953) : self__.dispatch_fn.call(null,match_45953));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,pushy.core.on_click((function (e){
var temp__5753__auto__ = (function (){var G__45824 = e;
var G__45824__$1 = (((G__45824 == null))?null:G__45824.target);
if((G__45824__$1 == null)){
return null;
} else {
return goog.dom.getAncestor(G__45824__$1,pushy.core.valid_link_QMARK_,true);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__4210__auto__ = (self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1(uri) : self__.processable_url_QMARK_.call(null,uri));
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core.not(e.altKey)) && (((cljs.core.not(e.ctrlKey)) && (((cljs.core.not(e.metaKey)) && (((cljs.core.not(e.shiftKey)) && (((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (((((cljs.core.not(el.hasAttribute("data-pushy-ignore"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.getAttribute("data-pushy-ignore"),"false")))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button)))))))))))));
} else {
return and__4210__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri(uri);
if(cljs.core.truth_((function (){var G__45828 = (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(next_token) : self__.match_fn.call(null,next_token));
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__45828) : self__.identity_fn.call(null,G__45828));
})())){
var temp__5751__auto___45958 = el.title;
if(cljs.core.truth_(temp__5751__auto___45958)){
var title_45959 = temp__5751__auto___45958;
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$3(null,next_token,title_45959);
} else {
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$2(null,next_token);
}

return e.preventDefault();
} else {
if(cljs.core.truth_((self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1(next_token) : self__.prevent_default_when_no_match_QMARK_.call(null,next_token)))){
return e.preventDefault();
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
})));

return null;
}));

(pushy.core.t_pushy$core45817.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__45835_45968 = cljs.core.seq(cljs.core.deref(self__.event_keys));
var chunk__45836_45969 = null;
var count__45837_45970 = (0);
var i__45838_45971 = (0);
while(true){
if((i__45838_45971 < count__45837_45970)){
var key_45974 = chunk__45836_45969.cljs$core$IIndexed$_nth$arity$2(null,i__45838_45971);
goog.events.unlistenByKey(key_45974);


var G__45975 = seq__45835_45968;
var G__45976 = chunk__45836_45969;
var G__45977 = count__45837_45970;
var G__45978 = (i__45838_45971 + (1));
seq__45835_45968 = G__45975;
chunk__45836_45969 = G__45976;
count__45837_45970 = G__45977;
i__45838_45971 = G__45978;
continue;
} else {
var temp__5753__auto___45979 = cljs.core.seq(seq__45835_45968);
if(temp__5753__auto___45979){
var seq__45835_45980__$1 = temp__5753__auto___45979;
if(cljs.core.chunked_seq_QMARK_(seq__45835_45980__$1)){
var c__4638__auto___45981 = cljs.core.chunk_first(seq__45835_45980__$1);
var G__45982 = cljs.core.chunk_rest(seq__45835_45980__$1);
var G__45983 = c__4638__auto___45981;
var G__45984 = cljs.core.count(c__4638__auto___45981);
var G__45985 = (0);
seq__45835_45968 = G__45982;
chunk__45836_45969 = G__45983;
count__45837_45970 = G__45984;
i__45838_45971 = G__45985;
continue;
} else {
var key_45986 = cljs.core.first(seq__45835_45980__$1);
goog.events.unlistenByKey(key_45986);


var G__45987 = cljs.core.next(seq__45835_45980__$1);
var G__45988 = null;
var G__45989 = (0);
var G__45990 = (0);
seq__45835_45968 = G__45987;
chunk__45836_45969 = G__45988;
count__45837_45970 = G__45989;
i__45838_45971 = G__45990;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(self__.event_keys,null);
}));

(pushy.core.t_pushy$core45817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"map__45816","map__45816",1232598410,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"p__45815","p__45815",-471687465,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"meta45818","meta45818",1050990223,null)], null);
}));

(pushy.core.t_pushy$core45817.cljs$lang$type = true);

(pushy.core.t_pushy$core45817.cljs$lang$ctorStr = "pushy.core/t_pushy$core45817");

(pushy.core.t_pushy$core45817.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"pushy.core/t_pushy$core45817");
}));

/**
 * Positional factory function for pushy.core/t_pushy$core45817.
 */
pushy.core.__GT_t_pushy$core45817 = (function pushy$core$__GT_t_pushy$core45817(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,map__45816__$2,history__$1,processable_url_QMARK___$1,p__45815__$1,match_fn__$1,meta45818){
return (new pushy.core.t_pushy$core45817(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,map__45816__$2,history__$1,processable_url_QMARK___$1,p__45815__$1,match_fn__$1,meta45818));
});

}

return (new pushy.core.t_pushy$core45817(event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,map__45816__$1,history,processable_url_QMARK_,p__45815,match_fn,cljs.core.PersistentArrayMap.EMPTY));
}));

(pushy.core.pushy.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(pushy.core.pushy.cljs$lang$applyTo = (function (seq45809){
var G__45810 = cljs.core.first(seq45809);
var seq45809__$1 = cljs.core.next(seq45809);
var G__45811 = cljs.core.first(seq45809__$1);
var seq45809__$2 = cljs.core.next(seq45809__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45810,G__45811,seq45809__$2);
}));

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__45867 = arguments.length;
switch (G__45867) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1(window);
}));

(pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
}));

(pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1);

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__45873 = arguments.length;
switch (G__45873) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3(dispatch_fn,match_fn,cljs.core.identity);
}));

(pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(dispatch_fn,match_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn], 0));
h.pushy$core$IHistory$start_BANG_$arity$1(null);

return h;
}));

(pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=pushy.core.js.map
