goog.provide('pushy.core');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__57969 = h;
G__57969.setUseFragment(false);

G__57969.setPathPrefix("");

G__57969.setEnabled(true);

return G__57969;
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
var G__57974 = arguments.length;
switch (G__57974) {
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

var pushy$core$IHistory$set_token_BANG_$dyn_58125 = (function() {
var G__58126 = null;
var G__58126__2 = (function (this$,token){
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
var G__58126__3 = (function (this$,token,title){
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
G__58126 = function(this$,token,title){
switch(arguments.length){
case 2:
return G__58126__2.call(this,this$,token);
case 3:
return G__58126__3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58126.cljs$core$IFn$_invoke$arity$2 = G__58126__2;
G__58126.cljs$core$IFn$_invoke$arity$3 = G__58126__3;
return G__58126;
})()
;
pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__57984 = arguments.length;
switch (G__57984) {
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
return pushy$core$IHistory$set_token_BANG_$dyn_58125(this$,token);
}
}));

(pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
return pushy$core$IHistory$set_token_BANG_$dyn_58125(this$,token,title);
}
}));

(pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3);


var pushy$core$IHistory$replace_token_BANG_$dyn_58137 = (function() {
var G__58138 = null;
var G__58138__2 = (function (this$,token){
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
var G__58138__3 = (function (this$,token,title){
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
G__58138 = function(this$,token,title){
switch(arguments.length){
case 2:
return G__58138__2.call(this,this$,token);
case 3:
return G__58138__3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58138.cljs$core$IFn$_invoke$arity$2 = G__58138__2;
G__58138.cljs$core$IFn$_invoke$arity$3 = G__58138__3;
return G__58138;
})()
;
pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__57998 = arguments.length;
switch (G__57998) {
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
return pushy$core$IHistory$replace_token_BANG_$dyn_58137(this$,token);
}
}));

(pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
return pushy$core$IHistory$replace_token_BANG_$dyn_58137(this$,token,title);
}
}));

(pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3);


var pushy$core$IHistory$get_token$dyn_58144 = (function (this$){
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
return pushy$core$IHistory$get_token$dyn_58144(this$);
}
});

var pushy$core$IHistory$start_BANG_$dyn_58145 = (function (this$){
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
return pushy$core$IHistory$start_BANG_$dyn_58145(this$);
}
});

var pushy$core$IHistory$stop_BANG_$dyn_58146 = (function (this$){
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
return pushy$core$IHistory$stop_BANG_$dyn_58146(this$);
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_(uri)))) && (((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || ((!((cljs.core.re_matches(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
var fragment = uri.getFragment();
var G__58024 = path;
var G__58024__$1 = ((cljs.core.seq(query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58024),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''):G__58024);
if(cljs.core.seq(fragment)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58024__$1),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
} else {
return G__58024__$1;
}
});
pushy.core.valid_link_QMARK_ = (function pushy$core$valid_link_QMARK_(el){
var and__4210__auto__ = (function (){var G__58026 = el.tagName;
var fexpr__58025 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["AREA",null,"A",null], null), null);
return (fexpr__58025.cljs$core$IFn$_invoke$arity$1 ? fexpr__58025.cljs$core$IFn$_invoke$arity$1(G__58026) : fexpr__58025.call(null,G__58026));
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
var len__4818__auto___58157 = arguments.length;
var i__4819__auto___58158 = (0);
while(true){
if((i__4819__auto___58158 < len__4818__auto___58157)){
args__4824__auto__.push((arguments[i__4819__auto___58158]));

var G__58159 = (i__4819__auto___58158 + (1));
i__4819__auto___58158 = G__58159;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__58030){
var map__58031 = p__58030;
var map__58031__$1 = cljs.core.__destructure_map(map__58031);
var processable_url_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58031__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58031__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58031__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly(false));
var history = pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();
var event_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof pushy !== 'undefined') && (typeof pushy.core !== 'undefined') && (typeof pushy.core.t_pushy$core58032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core58032 = (function (event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,p__58030,history,processable_url_QMARK_,map__58031,match_fn,meta58033){
this.event_keys = event_keys;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.dispatch_fn = dispatch_fn;
this.p__58030 = p__58030;
this.history = history;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.map__58031 = map__58031;
this.match_fn = match_fn;
this.meta58033 = meta58033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(pushy.core.t_pushy$core58032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58034,meta58033__$1){
var self__ = this;
var _58034__$1 = this;
return (new pushy.core.t_pushy$core58032(self__.event_keys,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.dispatch_fn,self__.p__58030,self__.history,self__.processable_url_QMARK_,self__.map__58031,self__.match_fn,meta58033__$1));
}));

(pushy.core.t_pushy$core58032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58034){
var self__ = this;
var _58034__$1 = this;
return self__.meta58033;
}));

(pushy.core.t_pushy$core58032.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(pushy.core.t_pushy$core58032.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
}));

(pushy.core.t_pushy$core58032.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
}));

(pushy.core.t_pushy$core58032.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
}));

(pushy.core.t_pushy$core58032.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
}));

(pushy.core.t_pushy$core58032.prototype.pushy$core$IHistory$get_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
}));

(pushy.core.t_pushy$core58032.prototype.pushy$core$IHistory$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.pushy$core$IHistory$stop_BANG_$arity$1(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,(function (e){
var temp__5753__auto__ = (function (){var G__58058 = (function (){var G__58060 = e.token;
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__58060) : self__.match_fn.call(null,G__58060));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__58058) : self__.identity_fn.call(null,G__58058));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var match = temp__5753__auto__;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match) : self__.dispatch_fn.call(null,match));
} else {
return null;
}
})));

var temp__5753__auto___58166 = (function (){var G__58062 = (function (){var G__58063 = this$__$1.pushy$core$IHistory$get_token$arity$1(null);
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__58063) : self__.match_fn.call(null,G__58063));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__58062) : self__.identity_fn.call(null,G__58062));
})();
if(cljs.core.truth_(temp__5753__auto___58166)){
var match_58170 = temp__5753__auto___58166;
(self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match_58170) : self__.dispatch_fn.call(null,match_58170));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,pushy.core.on_click((function (e){
var temp__5753__auto__ = (function (){var G__58073 = e;
var G__58073__$1 = (((G__58073 == null))?null:G__58073.target);
if((G__58073__$1 == null)){
return null;
} else {
return goog.dom.getAncestor(G__58073__$1,pushy.core.valid_link_QMARK_,true);
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
if(cljs.core.truth_((function (){var G__58082 = (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(next_token) : self__.match_fn.call(null,next_token));
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__58082) : self__.identity_fn.call(null,G__58082));
})())){
var temp__5751__auto___58171 = el.title;
if(cljs.core.truth_(temp__5751__auto___58171)){
var title_58174 = temp__5751__auto___58171;
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$3(null,next_token,title_58174);
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

(pushy.core.t_pushy$core58032.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__58086_58177 = cljs.core.seq(cljs.core.deref(self__.event_keys));
var chunk__58087_58178 = null;
var count__58088_58179 = (0);
var i__58089_58180 = (0);
while(true){
if((i__58089_58180 < count__58088_58179)){
var key_58181 = chunk__58087_58178.cljs$core$IIndexed$_nth$arity$2(null,i__58089_58180);
goog.events.unlistenByKey(key_58181);


var G__58182 = seq__58086_58177;
var G__58183 = chunk__58087_58178;
var G__58184 = count__58088_58179;
var G__58185 = (i__58089_58180 + (1));
seq__58086_58177 = G__58182;
chunk__58087_58178 = G__58183;
count__58088_58179 = G__58184;
i__58089_58180 = G__58185;
continue;
} else {
var temp__5753__auto___58186 = cljs.core.seq(seq__58086_58177);
if(temp__5753__auto___58186){
var seq__58086_58187__$1 = temp__5753__auto___58186;
if(cljs.core.chunked_seq_QMARK_(seq__58086_58187__$1)){
var c__4638__auto___58188 = cljs.core.chunk_first(seq__58086_58187__$1);
var G__58189 = cljs.core.chunk_rest(seq__58086_58187__$1);
var G__58190 = c__4638__auto___58188;
var G__58191 = cljs.core.count(c__4638__auto___58188);
var G__58192 = (0);
seq__58086_58177 = G__58189;
chunk__58087_58178 = G__58190;
count__58088_58179 = G__58191;
i__58089_58180 = G__58192;
continue;
} else {
var key_58193 = cljs.core.first(seq__58086_58187__$1);
goog.events.unlistenByKey(key_58193);


var G__58194 = cljs.core.next(seq__58086_58187__$1);
var G__58195 = null;
var G__58196 = (0);
var G__58197 = (0);
seq__58086_58177 = G__58194;
chunk__58087_58178 = G__58195;
count__58088_58179 = G__58196;
i__58089_58180 = G__58197;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(self__.event_keys,null);
}));

(pushy.core.t_pushy$core58032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"p__58030","p__58030",-587528404,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"map__58031","map__58031",-993321861,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"meta58033","meta58033",124909867,null)], null);
}));

(pushy.core.t_pushy$core58032.cljs$lang$type = true);

(pushy.core.t_pushy$core58032.cljs$lang$ctorStr = "pushy.core/t_pushy$core58032");

(pushy.core.t_pushy$core58032.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"pushy.core/t_pushy$core58032");
}));

/**
 * Positional factory function for pushy.core/t_pushy$core58032.
 */
pushy.core.__GT_t_pushy$core58032 = (function pushy$core$__GT_t_pushy$core58032(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,p__58030__$1,history__$1,processable_url_QMARK___$1,map__58031__$2,match_fn__$1,meta58033){
return (new pushy.core.t_pushy$core58032(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,p__58030__$1,history__$1,processable_url_QMARK___$1,map__58031__$2,match_fn__$1,meta58033));
});

}

return (new pushy.core.t_pushy$core58032(event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,p__58030,history,processable_url_QMARK_,map__58031__$1,match_fn,cljs.core.PersistentArrayMap.EMPTY));
}));

(pushy.core.pushy.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(pushy.core.pushy.cljs$lang$applyTo = (function (seq58027){
var G__58028 = cljs.core.first(seq58027);
var seq58027__$1 = cljs.core.next(seq58027);
var G__58029 = cljs.core.first(seq58027__$1);
var seq58027__$2 = cljs.core.next(seq58027__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58028,G__58029,seq58027__$2);
}));

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__58109 = arguments.length;
switch (G__58109) {
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
var G__58123 = arguments.length;
switch (G__58123) {
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
