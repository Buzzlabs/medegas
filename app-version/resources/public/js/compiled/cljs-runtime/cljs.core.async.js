goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39790 = arguments.length;
switch (G__39790) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39791 = (function (f,blockable,meta39792){
this.f = f;
this.blockable = blockable;
this.meta39792 = meta39792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39793,meta39792__$1){
var self__ = this;
var _39793__$1 = this;
return (new cljs.core.async.t_cljs$core$async39791(self__.f,self__.blockable,meta39792__$1));
}));

(cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39793){
var self__ = this;
var _39793__$1 = this;
return self__.meta39792;
}));

(cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async39791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39792","meta39792",-1866763133,null)], null);
}));

(cljs.core.async.t_cljs$core$async39791.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39791");

(cljs.core.async.t_cljs$core$async39791.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async39791");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39791.
 */
cljs.core.async.__GT_t_cljs$core$async39791 = (function cljs$core$async$__GT_t_cljs$core$async39791(f__$1,blockable__$1,meta39792){
return (new cljs.core.async.t_cljs$core$async39791(f__$1,blockable__$1,meta39792));
});

}

return (new cljs.core.async.t_cljs$core$async39791(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39807 = arguments.length;
switch (G__39807) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39814 = arguments.length;
switch (G__39814) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39821 = arguments.length;
switch (G__39821) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_42141 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42141) : fn1.call(null,val_42141));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42141) : fn1.call(null,val_42141));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39834 = arguments.length;
switch (G__39834) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___42147 = n;
var x_42148 = (0);
while(true){
if((x_42148 < n__4695__auto___42147)){
(a[x_42148] = x_42148);

var G__42149 = (x_42148 + (1));
x_42148 = G__42149;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39839 = (function (flag,meta39840){
this.flag = flag;
this.meta39840 = meta39840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39841,meta39840__$1){
var self__ = this;
var _39841__$1 = this;
return (new cljs.core.async.t_cljs$core$async39839(self__.flag,meta39840__$1));
}));

(cljs.core.async.t_cljs$core$async39839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39841){
var self__ = this;
var _39841__$1 = this;
return self__.meta39840;
}));

(cljs.core.async.t_cljs$core$async39839.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async39839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39840","meta39840",-151137003,null)], null);
}));

(cljs.core.async.t_cljs$core$async39839.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39839");

(cljs.core.async.t_cljs$core$async39839.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async39839");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39839.
 */
cljs.core.async.__GT_t_cljs$core$async39839 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39839(flag__$1,meta39840){
return (new cljs.core.async.t_cljs$core$async39839(flag__$1,meta39840));
});

}

return (new cljs.core.async.t_cljs$core$async39839(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39870 = (function (flag,cb,meta39871){
this.flag = flag;
this.cb = cb;
this.meta39871 = meta39871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39872,meta39871__$1){
var self__ = this;
var _39872__$1 = this;
return (new cljs.core.async.t_cljs$core$async39870(self__.flag,self__.cb,meta39871__$1));
}));

(cljs.core.async.t_cljs$core$async39870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39872){
var self__ = this;
var _39872__$1 = this;
return self__.meta39871;
}));

(cljs.core.async.t_cljs$core$async39870.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39870.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39871","meta39871",230700828,null)], null);
}));

(cljs.core.async.t_cljs$core$async39870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39870");

(cljs.core.async.t_cljs$core$async39870.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async39870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39870.
 */
cljs.core.async.__GT_t_cljs$core$async39870 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39870(flag__$1,cb__$1,meta39871){
return (new cljs.core.async.t_cljs$core$async39870(flag__$1,cb__$1,meta39871));
});

}

return (new cljs.core.async.t_cljs$core$async39870(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39874_SHARP_){
var G__39880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39874_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39880) : fret.call(null,G__39880));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39875_SHARP_){
var G__39881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39875_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39881) : fret.call(null,G__39881));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42194 = (i + (1));
i = G__42194;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42196 = arguments.length;
var i__4819__auto___42197 = (0);
while(true){
if((i__4819__auto___42197 < len__4818__auto___42196)){
args__4824__auto__.push((arguments[i__4819__auto___42197]));

var G__42198 = (i__4819__auto___42197 + (1));
i__4819__auto___42197 = G__42198;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39896){
var map__39897 = p__39896;
var map__39897__$1 = cljs.core.__destructure_map(map__39897);
var opts = map__39897__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39888){
var G__39889 = cljs.core.first(seq39888);
var seq39888__$1 = cljs.core.next(seq39888);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39889,seq39888__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39899 = arguments.length;
switch (G__39899) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39709__auto___42203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_39928){
var state_val_39929 = (state_39928[(1)]);
if((state_val_39929 === (7))){
var inst_39924 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39932_42204 = state_39928__$1;
(statearr_39932_42204[(2)] = inst_39924);

(statearr_39932_42204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (1))){
var state_39928__$1 = state_39928;
var statearr_39933_42205 = state_39928__$1;
(statearr_39933_42205[(2)] = null);

(statearr_39933_42205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (4))){
var inst_39907 = (state_39928[(7)]);
var inst_39907__$1 = (state_39928[(2)]);
var inst_39908 = (inst_39907__$1 == null);
var state_39928__$1 = (function (){var statearr_39935 = state_39928;
(statearr_39935[(7)] = inst_39907__$1);

return statearr_39935;
})();
if(cljs.core.truth_(inst_39908)){
var statearr_39936_42206 = state_39928__$1;
(statearr_39936_42206[(1)] = (5));

} else {
var statearr_39937_42207 = state_39928__$1;
(statearr_39937_42207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (13))){
var state_39928__$1 = state_39928;
var statearr_39941_42208 = state_39928__$1;
(statearr_39941_42208[(2)] = null);

(statearr_39941_42208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (6))){
var inst_39907 = (state_39928[(7)]);
var state_39928__$1 = state_39928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39928__$1,(11),to,inst_39907);
} else {
if((state_val_39929 === (3))){
var inst_39926 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39928__$1,inst_39926);
} else {
if((state_val_39929 === (12))){
var state_39928__$1 = state_39928;
var statearr_39942_42211 = state_39928__$1;
(statearr_39942_42211[(2)] = null);

(statearr_39942_42211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (2))){
var state_39928__$1 = state_39928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39928__$1,(4),from);
} else {
if((state_val_39929 === (11))){
var inst_39917 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
if(cljs.core.truth_(inst_39917)){
var statearr_39944_42212 = state_39928__$1;
(statearr_39944_42212[(1)] = (12));

} else {
var statearr_39945_42213 = state_39928__$1;
(statearr_39945_42213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (9))){
var state_39928__$1 = state_39928;
var statearr_39948_42214 = state_39928__$1;
(statearr_39948_42214[(2)] = null);

(statearr_39948_42214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (5))){
var state_39928__$1 = state_39928;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39953_42215 = state_39928__$1;
(statearr_39953_42215[(1)] = (8));

} else {
var statearr_39954_42216 = state_39928__$1;
(statearr_39954_42216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (14))){
var inst_39922 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39958_42217 = state_39928__$1;
(statearr_39958_42217[(2)] = inst_39922);

(statearr_39958_42217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (10))){
var inst_39914 = (state_39928[(2)]);
var state_39928__$1 = state_39928;
var statearr_39959_42218 = state_39928__$1;
(statearr_39959_42218[(2)] = inst_39914);

(statearr_39959_42218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39929 === (8))){
var inst_39911 = cljs.core.async.close_BANG_(to);
var state_39928__$1 = state_39928;
var statearr_39963_42219 = state_39928__$1;
(statearr_39963_42219[(2)] = inst_39911);

(statearr_39963_42219[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_39964 = [null,null,null,null,null,null,null,null];
(statearr_39964[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_39964[(1)] = (1));

return statearr_39964;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_39928){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_39928);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e39968){var ex__39545__auto__ = e39968;
var statearr_39969_42220 = state_39928;
(statearr_39969_42220[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_39928[(4)]))){
var statearr_39970_42221 = state_39928;
(statearr_39970_42221[(1)] = cljs.core.first((state_39928[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42222 = state_39928;
state_39928 = G__42222;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_39928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_39928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_39974 = f__39710__auto__();
(statearr_39974[(6)] = c__39709__auto___42203);

return statearr_39974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__39977){
var vec__39978 = p__39977;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39978,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39978,(1),null);
var job = vec__39978;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__39709__auto___42223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_39989){
var state_val_39990 = (state_39989[(1)]);
if((state_val_39990 === (1))){
var state_39989__$1 = state_39989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39989__$1,(2),res,v);
} else {
if((state_val_39990 === (2))){
var inst_39985 = (state_39989[(2)]);
var inst_39987 = cljs.core.async.close_BANG_(res);
var state_39989__$1 = (function (){var statearr_40001 = state_39989;
(statearr_40001[(7)] = inst_39985);

return statearr_40001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39989__$1,inst_39987);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0 = (function (){
var statearr_40002 = [null,null,null,null,null,null,null,null];
(statearr_40002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__);

(statearr_40002[(1)] = (1));

return statearr_40002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1 = (function (state_39989){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_39989);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e40003){var ex__39545__auto__ = e40003;
var statearr_40004_42225 = state_39989;
(statearr_40004_42225[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_39989[(4)]))){
var statearr_40005_42226 = state_39989;
(statearr_40005_42226[(1)] = cljs.core.first((state_39989[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42227 = state_39989;
state_39989 = G__42227;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = function(state_39989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1.call(this,state_39989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_40006 = f__39710__auto__();
(statearr_40006[(6)] = c__39709__auto___42223);

return statearr_40006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__40007){
var vec__40008 = p__40007;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40008,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40008,(1),null);
var job = vec__40008;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___42230 = n;
var __42231 = (0);
while(true){
if((__42231 < n__4695__auto___42230)){
var G__40011_42232 = type;
var G__40011_42233__$1 = (((G__40011_42232 instanceof cljs.core.Keyword))?G__40011_42232.fqn:null);
switch (G__40011_42233__$1) {
case "compute":
var c__39709__auto___42235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42231,c__39709__auto___42235,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async){
return (function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = ((function (__42231,c__39709__auto___42235,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async){
return (function (state_40025){
var state_val_40026 = (state_40025[(1)]);
if((state_val_40026 === (1))){
var state_40025__$1 = state_40025;
var statearr_40028_42236 = state_40025__$1;
(statearr_40028_42236[(2)] = null);

(statearr_40028_42236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40026 === (2))){
var state_40025__$1 = state_40025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40025__$1,(4),jobs);
} else {
if((state_val_40026 === (3))){
var inst_40023 = (state_40025[(2)]);
var state_40025__$1 = state_40025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40025__$1,inst_40023);
} else {
if((state_val_40026 === (4))){
var inst_40015 = (state_40025[(2)]);
var inst_40016 = process(inst_40015);
var state_40025__$1 = state_40025;
if(cljs.core.truth_(inst_40016)){
var statearr_40029_42237 = state_40025__$1;
(statearr_40029_42237[(1)] = (5));

} else {
var statearr_40030_42238 = state_40025__$1;
(statearr_40030_42238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40026 === (5))){
var state_40025__$1 = state_40025;
var statearr_40031_42239 = state_40025__$1;
(statearr_40031_42239[(2)] = null);

(statearr_40031_42239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40026 === (6))){
var state_40025__$1 = state_40025;
var statearr_40033_42240 = state_40025__$1;
(statearr_40033_42240[(2)] = null);

(statearr_40033_42240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40026 === (7))){
var inst_40021 = (state_40025[(2)]);
var state_40025__$1 = state_40025;
var statearr_40036_42242 = state_40025__$1;
(statearr_40036_42242[(2)] = inst_40021);

(statearr_40036_42242[(1)] = (3));


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
});})(__42231,c__39709__auto___42235,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async))
;
return ((function (__42231,switch__39541__auto__,c__39709__auto___42235,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0 = (function (){
var statearr_40037 = [null,null,null,null,null,null,null];
(statearr_40037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__);

(statearr_40037[(1)] = (1));

return statearr_40037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1 = (function (state_40025){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_40025);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e40038){var ex__39545__auto__ = e40038;
var statearr_40039_42252 = state_40025;
(statearr_40039_42252[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_40025[(4)]))){
var statearr_40040_42253 = state_40025;
(statearr_40040_42253[(1)] = cljs.core.first((state_40025[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42254 = state_40025;
state_40025 = G__42254;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = function(state_40025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1.call(this,state_40025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__;
})()
;})(__42231,switch__39541__auto__,c__39709__auto___42235,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async))
})();
var state__39711__auto__ = (function (){var statearr_40041 = f__39710__auto__();
(statearr_40041[(6)] = c__39709__auto___42235);

return statearr_40041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
});})(__42231,c__39709__auto___42235,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async))
);


break;
case "async":
var c__39709__auto___42258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42231,c__39709__auto___42258,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async){
return (function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = ((function (__42231,c__39709__auto___42258,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async){
return (function (state_40054){
var state_val_40055 = (state_40054[(1)]);
if((state_val_40055 === (1))){
var state_40054__$1 = state_40054;
var statearr_40056_42259 = state_40054__$1;
(statearr_40056_42259[(2)] = null);

(statearr_40056_42259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (2))){
var state_40054__$1 = state_40054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40054__$1,(4),jobs);
} else {
if((state_val_40055 === (3))){
var inst_40052 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40054__$1,inst_40052);
} else {
if((state_val_40055 === (4))){
var inst_40044 = (state_40054[(2)]);
var inst_40045 = async(inst_40044);
var state_40054__$1 = state_40054;
if(cljs.core.truth_(inst_40045)){
var statearr_40057_42262 = state_40054__$1;
(statearr_40057_42262[(1)] = (5));

} else {
var statearr_40058_42263 = state_40054__$1;
(statearr_40058_42263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (5))){
var state_40054__$1 = state_40054;
var statearr_40061_42264 = state_40054__$1;
(statearr_40061_42264[(2)] = null);

(statearr_40061_42264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (6))){
var state_40054__$1 = state_40054;
var statearr_40062_42265 = state_40054__$1;
(statearr_40062_42265[(2)] = null);

(statearr_40062_42265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (7))){
var inst_40050 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
var statearr_40063_42266 = state_40054__$1;
(statearr_40063_42266[(2)] = inst_40050);

(statearr_40063_42266[(1)] = (3));


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
});})(__42231,c__39709__auto___42258,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async))
;
return ((function (__42231,switch__39541__auto__,c__39709__auto___42258,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0 = (function (){
var statearr_40064 = [null,null,null,null,null,null,null];
(statearr_40064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__);

(statearr_40064[(1)] = (1));

return statearr_40064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1 = (function (state_40054){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_40054);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e40066){var ex__39545__auto__ = e40066;
var statearr_40067_42267 = state_40054;
(statearr_40067_42267[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_40054[(4)]))){
var statearr_40068_42268 = state_40054;
(statearr_40068_42268[(1)] = cljs.core.first((state_40054[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42269 = state_40054;
state_40054 = G__42269;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = function(state_40054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1.call(this,state_40054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__;
})()
;})(__42231,switch__39541__auto__,c__39709__auto___42258,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async))
})();
var state__39711__auto__ = (function (){var statearr_40069 = f__39710__auto__();
(statearr_40069[(6)] = c__39709__auto___42258);

return statearr_40069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
});})(__42231,c__39709__auto___42258,G__40011_42232,G__40011_42233__$1,n__4695__auto___42230,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40011_42233__$1)].join('')));

}

var G__42270 = (__42231 + (1));
__42231 = G__42270;
continue;
} else {
}
break;
}

var c__39709__auto___42271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_40091){
var state_val_40092 = (state_40091[(1)]);
if((state_val_40092 === (7))){
var inst_40087 = (state_40091[(2)]);
var state_40091__$1 = state_40091;
var statearr_40097_42274 = state_40091__$1;
(statearr_40097_42274[(2)] = inst_40087);

(statearr_40097_42274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40092 === (1))){
var state_40091__$1 = state_40091;
var statearr_40110_42275 = state_40091__$1;
(statearr_40110_42275[(2)] = null);

(statearr_40110_42275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40092 === (4))){
var inst_40072 = (state_40091[(7)]);
var inst_40072__$1 = (state_40091[(2)]);
var inst_40073 = (inst_40072__$1 == null);
var state_40091__$1 = (function (){var statearr_40111 = state_40091;
(statearr_40111[(7)] = inst_40072__$1);

return statearr_40111;
})();
if(cljs.core.truth_(inst_40073)){
var statearr_40112_42276 = state_40091__$1;
(statearr_40112_42276[(1)] = (5));

} else {
var statearr_40113_42277 = state_40091__$1;
(statearr_40113_42277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40092 === (6))){
var inst_40072 = (state_40091[(7)]);
var inst_40077 = (state_40091[(8)]);
var inst_40077__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40079 = [inst_40072,inst_40077__$1];
var inst_40080 = (new cljs.core.PersistentVector(null,2,(5),inst_40078,inst_40079,null));
var state_40091__$1 = (function (){var statearr_40132 = state_40091;
(statearr_40132[(8)] = inst_40077__$1);

return statearr_40132;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40091__$1,(8),jobs,inst_40080);
} else {
if((state_val_40092 === (3))){
var inst_40089 = (state_40091[(2)]);
var state_40091__$1 = state_40091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40091__$1,inst_40089);
} else {
if((state_val_40092 === (2))){
var state_40091__$1 = state_40091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40091__$1,(4),from);
} else {
if((state_val_40092 === (9))){
var inst_40084 = (state_40091[(2)]);
var state_40091__$1 = (function (){var statearr_40135 = state_40091;
(statearr_40135[(9)] = inst_40084);

return statearr_40135;
})();
var statearr_40136_42278 = state_40091__$1;
(statearr_40136_42278[(2)] = null);

(statearr_40136_42278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40092 === (5))){
var inst_40075 = cljs.core.async.close_BANG_(jobs);
var state_40091__$1 = state_40091;
var statearr_40137_42279 = state_40091__$1;
(statearr_40137_42279[(2)] = inst_40075);

(statearr_40137_42279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40092 === (8))){
var inst_40077 = (state_40091[(8)]);
var inst_40082 = (state_40091[(2)]);
var state_40091__$1 = (function (){var statearr_40138 = state_40091;
(statearr_40138[(10)] = inst_40082);

return statearr_40138;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40091__$1,(9),results,inst_40077);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0 = (function (){
var statearr_40139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__);

(statearr_40139[(1)] = (1));

return statearr_40139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1 = (function (state_40091){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_40091);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e40140){var ex__39545__auto__ = e40140;
var statearr_40141_42282 = state_40091;
(statearr_40141_42282[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_40091[(4)]))){
var statearr_40142_42283 = state_40091;
(statearr_40142_42283[(1)] = cljs.core.first((state_40091[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42284 = state_40091;
state_40091 = G__42284;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = function(state_40091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1.call(this,state_40091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_40147 = f__39710__auto__();
(statearr_40147[(6)] = c__39709__auto___42271);

return statearr_40147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


var c__39709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_40232){
var state_val_40233 = (state_40232[(1)]);
if((state_val_40233 === (7))){
var inst_40228 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40255_42287 = state_40232__$1;
(statearr_40255_42287[(2)] = inst_40228);

(statearr_40255_42287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (20))){
var state_40232__$1 = state_40232;
var statearr_40256_42288 = state_40232__$1;
(statearr_40256_42288[(2)] = null);

(statearr_40256_42288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (1))){
var state_40232__$1 = state_40232;
var statearr_40257_42291 = state_40232__$1;
(statearr_40257_42291[(2)] = null);

(statearr_40257_42291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (4))){
var inst_40155 = (state_40232[(7)]);
var inst_40155__$1 = (state_40232[(2)]);
var inst_40156 = (inst_40155__$1 == null);
var state_40232__$1 = (function (){var statearr_40258 = state_40232;
(statearr_40258[(7)] = inst_40155__$1);

return statearr_40258;
})();
if(cljs.core.truth_(inst_40156)){
var statearr_40259_42292 = state_40232__$1;
(statearr_40259_42292[(1)] = (5));

} else {
var statearr_40260_42294 = state_40232__$1;
(statearr_40260_42294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (15))){
var inst_40168 = (state_40232[(8)]);
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40232__$1,(18),to,inst_40168);
} else {
if((state_val_40233 === (21))){
var inst_40223 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40261_42298 = state_40232__$1;
(statearr_40261_42298[(2)] = inst_40223);

(statearr_40261_42298[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (13))){
var inst_40225 = (state_40232[(2)]);
var state_40232__$1 = (function (){var statearr_40262 = state_40232;
(statearr_40262[(9)] = inst_40225);

return statearr_40262;
})();
var statearr_40264_42299 = state_40232__$1;
(statearr_40264_42299[(2)] = null);

(statearr_40264_42299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (6))){
var inst_40155 = (state_40232[(7)]);
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40232__$1,(11),inst_40155);
} else {
if((state_val_40233 === (17))){
var inst_40216 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
if(cljs.core.truth_(inst_40216)){
var statearr_40266_42300 = state_40232__$1;
(statearr_40266_42300[(1)] = (19));

} else {
var statearr_40267_42302 = state_40232__$1;
(statearr_40267_42302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (3))){
var inst_40230 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40232__$1,inst_40230);
} else {
if((state_val_40233 === (12))){
var inst_40165 = (state_40232[(10)]);
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40232__$1,(14),inst_40165);
} else {
if((state_val_40233 === (2))){
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40232__$1,(4),results);
} else {
if((state_val_40233 === (19))){
var state_40232__$1 = state_40232;
var statearr_40290_42304 = state_40232__$1;
(statearr_40290_42304[(2)] = null);

(statearr_40290_42304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (11))){
var inst_40165 = (state_40232[(2)]);
var state_40232__$1 = (function (){var statearr_40291 = state_40232;
(statearr_40291[(10)] = inst_40165);

return statearr_40291;
})();
var statearr_40292_42306 = state_40232__$1;
(statearr_40292_42306[(2)] = null);

(statearr_40292_42306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (9))){
var state_40232__$1 = state_40232;
var statearr_40295_42307 = state_40232__$1;
(statearr_40295_42307[(2)] = null);

(statearr_40295_42307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (5))){
var state_40232__$1 = state_40232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40297_42308 = state_40232__$1;
(statearr_40297_42308[(1)] = (8));

} else {
var statearr_40298_42309 = state_40232__$1;
(statearr_40298_42309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (14))){
var inst_40201 = (state_40232[(11)]);
var inst_40168 = (state_40232[(8)]);
var inst_40168__$1 = (state_40232[(2)]);
var inst_40199 = (inst_40168__$1 == null);
var inst_40201__$1 = cljs.core.not(inst_40199);
var state_40232__$1 = (function (){var statearr_40299 = state_40232;
(statearr_40299[(11)] = inst_40201__$1);

(statearr_40299[(8)] = inst_40168__$1);

return statearr_40299;
})();
if(inst_40201__$1){
var statearr_40300_42310 = state_40232__$1;
(statearr_40300_42310[(1)] = (15));

} else {
var statearr_40301_42311 = state_40232__$1;
(statearr_40301_42311[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (16))){
var inst_40201 = (state_40232[(11)]);
var state_40232__$1 = state_40232;
var statearr_40302_42312 = state_40232__$1;
(statearr_40302_42312[(2)] = inst_40201);

(statearr_40302_42312[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (10))){
var inst_40162 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40303_42313 = state_40232__$1;
(statearr_40303_42313[(2)] = inst_40162);

(statearr_40303_42313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (18))){
var inst_40209 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40304_42314 = state_40232__$1;
(statearr_40304_42314[(2)] = inst_40209);

(statearr_40304_42314[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (8))){
var inst_40159 = cljs.core.async.close_BANG_(to);
var state_40232__$1 = state_40232;
var statearr_40305_42319 = state_40232__$1;
(statearr_40305_42319[(2)] = inst_40159);

(statearr_40305_42319[(1)] = (10));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0 = (function (){
var statearr_40310 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__);

(statearr_40310[(1)] = (1));

return statearr_40310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1 = (function (state_40232){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_40232);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e40311){var ex__39545__auto__ = e40311;
var statearr_40312_42320 = state_40232;
(statearr_40312_42320[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_40232[(4)]))){
var statearr_40313_42321 = state_40232;
(statearr_40313_42321[(1)] = cljs.core.first((state_40232[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42325 = state_40232;
state_40232 = G__42325;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = function(state_40232){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1.call(this,state_40232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_40314 = f__39710__auto__();
(statearr_40314[(6)] = c__39709__auto__);

return statearr_40314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));

return c__39709__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40320 = arguments.length;
switch (G__40320) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40356 = arguments.length;
switch (G__40356) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40369 = arguments.length;
switch (G__40369) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__39709__auto___42344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_40412){
var state_val_40413 = (state_40412[(1)]);
if((state_val_40413 === (7))){
var inst_40403 = (state_40412[(2)]);
var state_40412__$1 = state_40412;
var statearr_40414_42349 = state_40412__$1;
(statearr_40414_42349[(2)] = inst_40403);

(statearr_40414_42349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40413 === (1))){
var state_40412__$1 = state_40412;
var statearr_40415_42353 = state_40412__$1;
(statearr_40415_42353[(2)] = null);

(statearr_40415_42353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40413 === (4))){
var inst_40374 = (state_40412[(7)]);
var inst_40374__$1 = (state_40412[(2)]);
var inst_40375 = (inst_40374__$1 == null);
var state_40412__$1 = (function (){var statearr_40416 = state_40412;
(statearr_40416[(7)] = inst_40374__$1);

return statearr_40416;
})();
if(cljs.core.truth_(inst_40375)){
var statearr_40417_42357 = state_40412__$1;
(statearr_40417_42357[(1)] = (5));

} else {
var statearr_40418_42358 = state_40412__$1;
(statearr_40418_42358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40413 === (13))){
var state_40412__$1 = state_40412;
var statearr_40419_42359 = state_40412__$1;
(statearr_40419_42359[(2)] = null);

(statearr_40419_42359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40413 === (6))){
var inst_40374 = (state_40412[(7)]);
var inst_40380 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40374) : p.call(null,inst_40374));
var state_40412__$1 = state_40412;
if(cljs.core.truth_(inst_40380)){
var statearr_40422_42363 = state_40412__$1;
(statearr_40422_42363[(1)] = (9));

} else {
var statearr_40423_42364 = state_40412__$1;
(statearr_40423_42364[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40413 === (3))){
var inst_40405 = (state_40412[(2)]);
var state_40412__$1 = state_40412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40412__$1,inst_40405);
} else {
if((state_val_40413 === (12))){
var state_40412__$1 = state_40412;
var statearr_40432_42379 = state_40412__$1;
(statearr_40432_42379[(2)] = null);

(statearr_40432_42379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40413 === (2))){
var state_40412__$1 = state_40412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40412__$1,(4),ch);
} else {
if((state_val_40413 === (11))){
var inst_40374 = (state_40412[(7)]);
var inst_40392 = (state_40412[(2)]);
var state_40412__$1 = state_40412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40412__$1,(8),inst_40392,inst_40374);
} else {
if((state_val_40413 === (9))){
var state_40412__$1 = state_40412;
var statearr_40448_42387 = state_40412__$1;
(statearr_40448_42387[(2)] = tc);

(statearr_40448_42387[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40413 === (5))){
var inst_40377 = cljs.core.async.close_BANG_(tc);
var inst_40378 = cljs.core.async.close_BANG_(fc);
var state_40412__$1 = (function (){var statearr_40450 = state_40412;
(statearr_40450[(8)] = inst_40377);

return statearr_40450;
})();
var statearr_40452_42391 = state_40412__$1;
(statearr_40452_42391[(2)] = inst_40378);

(statearr_40452_42391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40413 === (14))){
var inst_40401 = (state_40412[(2)]);
var state_40412__$1 = state_40412;
var statearr_40453_42395 = state_40412__$1;
(statearr_40453_42395[(2)] = inst_40401);

(statearr_40453_42395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40413 === (10))){
var state_40412__$1 = state_40412;
var statearr_40507_42398 = state_40412__$1;
(statearr_40507_42398[(2)] = fc);

(statearr_40507_42398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40413 === (8))){
var inst_40394 = (state_40412[(2)]);
var state_40412__$1 = state_40412;
if(cljs.core.truth_(inst_40394)){
var statearr_40508_42399 = state_40412__$1;
(statearr_40508_42399[(1)] = (12));

} else {
var statearr_40509_42400 = state_40412__$1;
(statearr_40509_42400[(1)] = (13));

}

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
});
return (function() {
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_40510 = [null,null,null,null,null,null,null,null,null];
(statearr_40510[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_40510[(1)] = (1));

return statearr_40510;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_40412){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_40412);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e40511){var ex__39545__auto__ = e40511;
var statearr_40512_42404 = state_40412;
(statearr_40512_42404[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_40412[(4)]))){
var statearr_40513_42405 = state_40412;
(statearr_40513_42405[(1)] = cljs.core.first((state_40412[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42410 = state_40412;
state_40412 = G__42410;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_40412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_40412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_40514 = f__39710__auto__();
(statearr_40514[(6)] = c__39709__auto___42344);

return statearr_40514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__39709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_40556){
var state_val_40557 = (state_40556[(1)]);
if((state_val_40557 === (7))){
var inst_40552 = (state_40556[(2)]);
var state_40556__$1 = state_40556;
var statearr_40558_42414 = state_40556__$1;
(statearr_40558_42414[(2)] = inst_40552);

(statearr_40558_42414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40557 === (1))){
var inst_40515 = init;
var inst_40528 = inst_40515;
var state_40556__$1 = (function (){var statearr_40559 = state_40556;
(statearr_40559[(7)] = inst_40528);

return statearr_40559;
})();
var statearr_40560_42418 = state_40556__$1;
(statearr_40560_42418[(2)] = null);

(statearr_40560_42418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40557 === (4))){
var inst_40539 = (state_40556[(8)]);
var inst_40539__$1 = (state_40556[(2)]);
var inst_40540 = (inst_40539__$1 == null);
var state_40556__$1 = (function (){var statearr_40561 = state_40556;
(statearr_40561[(8)] = inst_40539__$1);

return statearr_40561;
})();
if(cljs.core.truth_(inst_40540)){
var statearr_40562_42422 = state_40556__$1;
(statearr_40562_42422[(1)] = (5));

} else {
var statearr_40563_42423 = state_40556__$1;
(statearr_40563_42423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40557 === (6))){
var inst_40528 = (state_40556[(7)]);
var inst_40543 = (state_40556[(9)]);
var inst_40539 = (state_40556[(8)]);
var inst_40543__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40528,inst_40539) : f.call(null,inst_40528,inst_40539));
var inst_40544 = cljs.core.reduced_QMARK_(inst_40543__$1);
var state_40556__$1 = (function (){var statearr_40564 = state_40556;
(statearr_40564[(9)] = inst_40543__$1);

return statearr_40564;
})();
if(inst_40544){
var statearr_40565_42424 = state_40556__$1;
(statearr_40565_42424[(1)] = (8));

} else {
var statearr_40566_42425 = state_40556__$1;
(statearr_40566_42425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40557 === (3))){
var inst_40554 = (state_40556[(2)]);
var state_40556__$1 = state_40556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40556__$1,inst_40554);
} else {
if((state_val_40557 === (2))){
var state_40556__$1 = state_40556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40556__$1,(4),ch);
} else {
if((state_val_40557 === (9))){
var inst_40543 = (state_40556[(9)]);
var inst_40528 = inst_40543;
var state_40556__$1 = (function (){var statearr_40567 = state_40556;
(statearr_40567[(7)] = inst_40528);

return statearr_40567;
})();
var statearr_40568_42429 = state_40556__$1;
(statearr_40568_42429[(2)] = null);

(statearr_40568_42429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40557 === (5))){
var inst_40528 = (state_40556[(7)]);
var state_40556__$1 = state_40556;
var statearr_40569_42430 = state_40556__$1;
(statearr_40569_42430[(2)] = inst_40528);

(statearr_40569_42430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40557 === (10))){
var inst_40550 = (state_40556[(2)]);
var state_40556__$1 = state_40556;
var statearr_40570_42431 = state_40556__$1;
(statearr_40570_42431[(2)] = inst_40550);

(statearr_40570_42431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40557 === (8))){
var inst_40543 = (state_40556[(9)]);
var inst_40546 = cljs.core.deref(inst_40543);
var state_40556__$1 = state_40556;
var statearr_40572_42432 = state_40556__$1;
(statearr_40572_42432[(2)] = inst_40546);

(statearr_40572_42432[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__39542__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39542__auto____0 = (function (){
var statearr_40574 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40574[(0)] = cljs$core$async$reduce_$_state_machine__39542__auto__);

(statearr_40574[(1)] = (1));

return statearr_40574;
});
var cljs$core$async$reduce_$_state_machine__39542__auto____1 = (function (state_40556){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_40556);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e40576){var ex__39545__auto__ = e40576;
var statearr_40577_42433 = state_40556;
(statearr_40577_42433[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_40556[(4)]))){
var statearr_40579_42435 = state_40556;
(statearr_40579_42435[(1)] = cljs.core.first((state_40556[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42436 = state_40556;
state_40556 = G__42436;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39542__auto__ = function(state_40556){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39542__auto____1.call(this,state_40556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39542__auto____0;
cljs$core$async$reduce_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39542__auto____1;
return cljs$core$async$reduce_$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_40580 = f__39710__auto__();
(statearr_40580[(6)] = c__39709__auto__);

return statearr_40580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));

return c__39709__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__39709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_40586){
var state_val_40587 = (state_40586[(1)]);
if((state_val_40587 === (1))){
var inst_40581 = cljs.core.async.reduce(f__$1,init,ch);
var state_40586__$1 = state_40586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40586__$1,(2),inst_40581);
} else {
if((state_val_40587 === (2))){
var inst_40583 = (state_40586[(2)]);
var inst_40584 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_40583) : f__$1.call(null,inst_40583));
var state_40586__$1 = state_40586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40586__$1,inst_40584);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__39542__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39542__auto____0 = (function (){
var statearr_40588 = [null,null,null,null,null,null,null];
(statearr_40588[(0)] = cljs$core$async$transduce_$_state_machine__39542__auto__);

(statearr_40588[(1)] = (1));

return statearr_40588;
});
var cljs$core$async$transduce_$_state_machine__39542__auto____1 = (function (state_40586){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_40586);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e40589){var ex__39545__auto__ = e40589;
var statearr_40590_42439 = state_40586;
(statearr_40590_42439[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_40586[(4)]))){
var statearr_40591_42440 = state_40586;
(statearr_40591_42440[(1)] = cljs.core.first((state_40586[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42442 = state_40586;
state_40586 = G__42442;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39542__auto__ = function(state_40586){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39542__auto____1.call(this,state_40586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39542__auto____0;
cljs$core$async$transduce_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39542__auto____1;
return cljs$core$async$transduce_$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_40592 = f__39710__auto__();
(statearr_40592[(6)] = c__39709__auto__);

return statearr_40592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));

return c__39709__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__40594 = arguments.length;
switch (G__40594) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_40623){
var state_val_40624 = (state_40623[(1)]);
if((state_val_40624 === (7))){
var inst_40605 = (state_40623[(2)]);
var state_40623__$1 = state_40623;
var statearr_40626_42455 = state_40623__$1;
(statearr_40626_42455[(2)] = inst_40605);

(statearr_40626_42455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (1))){
var inst_40599 = cljs.core.seq(coll);
var inst_40600 = inst_40599;
var state_40623__$1 = (function (){var statearr_40627 = state_40623;
(statearr_40627[(7)] = inst_40600);

return statearr_40627;
})();
var statearr_40628_42456 = state_40623__$1;
(statearr_40628_42456[(2)] = null);

(statearr_40628_42456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (4))){
var inst_40600 = (state_40623[(7)]);
var inst_40603 = cljs.core.first(inst_40600);
var state_40623__$1 = state_40623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40623__$1,(7),ch,inst_40603);
} else {
if((state_val_40624 === (13))){
var inst_40617 = (state_40623[(2)]);
var state_40623__$1 = state_40623;
var statearr_40630_42458 = state_40623__$1;
(statearr_40630_42458[(2)] = inst_40617);

(statearr_40630_42458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (6))){
var inst_40608 = (state_40623[(2)]);
var state_40623__$1 = state_40623;
if(cljs.core.truth_(inst_40608)){
var statearr_40631_42459 = state_40623__$1;
(statearr_40631_42459[(1)] = (8));

} else {
var statearr_40632_42460 = state_40623__$1;
(statearr_40632_42460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (3))){
var inst_40621 = (state_40623[(2)]);
var state_40623__$1 = state_40623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40623__$1,inst_40621);
} else {
if((state_val_40624 === (12))){
var state_40623__$1 = state_40623;
var statearr_40641_42461 = state_40623__$1;
(statearr_40641_42461[(2)] = null);

(statearr_40641_42461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (2))){
var inst_40600 = (state_40623[(7)]);
var state_40623__$1 = state_40623;
if(cljs.core.truth_(inst_40600)){
var statearr_40647_42462 = state_40623__$1;
(statearr_40647_42462[(1)] = (4));

} else {
var statearr_40648_42463 = state_40623__$1;
(statearr_40648_42463[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (11))){
var inst_40614 = cljs.core.async.close_BANG_(ch);
var state_40623__$1 = state_40623;
var statearr_40649_42464 = state_40623__$1;
(statearr_40649_42464[(2)] = inst_40614);

(statearr_40649_42464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (9))){
var state_40623__$1 = state_40623;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40650_42465 = state_40623__$1;
(statearr_40650_42465[(1)] = (11));

} else {
var statearr_40652_42466 = state_40623__$1;
(statearr_40652_42466[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (5))){
var inst_40600 = (state_40623[(7)]);
var state_40623__$1 = state_40623;
var statearr_40653_42467 = state_40623__$1;
(statearr_40653_42467[(2)] = inst_40600);

(statearr_40653_42467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (10))){
var inst_40619 = (state_40623[(2)]);
var state_40623__$1 = state_40623;
var statearr_40654_42468 = state_40623__$1;
(statearr_40654_42468[(2)] = inst_40619);

(statearr_40654_42468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (8))){
var inst_40600 = (state_40623[(7)]);
var inst_40610 = cljs.core.next(inst_40600);
var inst_40600__$1 = inst_40610;
var state_40623__$1 = (function (){var statearr_40655 = state_40623;
(statearr_40655[(7)] = inst_40600__$1);

return statearr_40655;
})();
var statearr_40656_42469 = state_40623__$1;
(statearr_40656_42469[(2)] = null);

(statearr_40656_42469[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_40657 = [null,null,null,null,null,null,null,null];
(statearr_40657[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_40657[(1)] = (1));

return statearr_40657;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_40623){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_40623);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e40658){var ex__39545__auto__ = e40658;
var statearr_40659_42470 = state_40623;
(statearr_40659_42470[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_40623[(4)]))){
var statearr_40660_42471 = state_40623;
(statearr_40660_42471[(1)] = cljs.core.first((state_40623[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42474 = state_40623;
state_40623 = G__42474;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_40623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_40623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_40667 = f__39710__auto__();
(statearr_40667[(6)] = c__39709__auto__);

return statearr_40667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));

return c__39709__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40671 = arguments.length;
switch (G__40671) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_42484 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_42484(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_42486 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_42486(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_42488 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_42488(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_42505 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_42505(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40675 = (function (ch,cs,meta40676){
this.ch = ch;
this.cs = cs;
this.meta40676 = meta40676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40677,meta40676__$1){
var self__ = this;
var _40677__$1 = this;
return (new cljs.core.async.t_cljs$core$async40675(self__.ch,self__.cs,meta40676__$1));
}));

(cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40677){
var self__ = this;
var _40677__$1 = this;
return self__.meta40676;
}));

(cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async40675.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async40675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40676","meta40676",-403861139,null)], null);
}));

(cljs.core.async.t_cljs$core$async40675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40675");

(cljs.core.async.t_cljs$core$async40675.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async40675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40675.
 */
cljs.core.async.__GT_t_cljs$core$async40675 = (function cljs$core$async$mult_$___GT_t_cljs$core$async40675(ch__$1,cs__$1,meta40676){
return (new cljs.core.async.t_cljs$core$async40675(ch__$1,cs__$1,meta40676));
});

}

return (new cljs.core.async.t_cljs$core$async40675(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__39709__auto___42520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_40818){
var state_val_40819 = (state_40818[(1)]);
if((state_val_40819 === (7))){
var inst_40814 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40821_42521 = state_40818__$1;
(statearr_40821_42521[(2)] = inst_40814);

(statearr_40821_42521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (20))){
var inst_40717 = (state_40818[(7)]);
var inst_40729 = cljs.core.first(inst_40717);
var inst_40730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40729,(0),null);
var inst_40731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40729,(1),null);
var state_40818__$1 = (function (){var statearr_40822 = state_40818;
(statearr_40822[(8)] = inst_40730);

return statearr_40822;
})();
if(cljs.core.truth_(inst_40731)){
var statearr_40823_42522 = state_40818__$1;
(statearr_40823_42522[(1)] = (22));

} else {
var statearr_40824_42525 = state_40818__$1;
(statearr_40824_42525[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (27))){
var inst_40759 = (state_40818[(9)]);
var inst_40767 = (state_40818[(10)]);
var inst_40681 = (state_40818[(11)]);
var inst_40761 = (state_40818[(12)]);
var inst_40767__$1 = cljs.core._nth(inst_40759,inst_40761);
var inst_40768 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40767__$1,inst_40681,done);
var state_40818__$1 = (function (){var statearr_40825 = state_40818;
(statearr_40825[(10)] = inst_40767__$1);

return statearr_40825;
})();
if(cljs.core.truth_(inst_40768)){
var statearr_40826_42526 = state_40818__$1;
(statearr_40826_42526[(1)] = (30));

} else {
var statearr_40827_42527 = state_40818__$1;
(statearr_40827_42527[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (1))){
var state_40818__$1 = state_40818;
var statearr_40829_42531 = state_40818__$1;
(statearr_40829_42531[(2)] = null);

(statearr_40829_42531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (24))){
var inst_40717 = (state_40818[(7)]);
var inst_40736 = (state_40818[(2)]);
var inst_40737 = cljs.core.next(inst_40717);
var inst_40692 = inst_40737;
var inst_40693 = null;
var inst_40694 = (0);
var inst_40695 = (0);
var state_40818__$1 = (function (){var statearr_40830 = state_40818;
(statearr_40830[(13)] = inst_40693);

(statearr_40830[(14)] = inst_40692);

(statearr_40830[(15)] = inst_40695);

(statearr_40830[(16)] = inst_40736);

(statearr_40830[(17)] = inst_40694);

return statearr_40830;
})();
var statearr_40831_42537 = state_40818__$1;
(statearr_40831_42537[(2)] = null);

(statearr_40831_42537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (39))){
var state_40818__$1 = state_40818;
var statearr_40835_42538 = state_40818__$1;
(statearr_40835_42538[(2)] = null);

(statearr_40835_42538[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (4))){
var inst_40681 = (state_40818[(11)]);
var inst_40681__$1 = (state_40818[(2)]);
var inst_40682 = (inst_40681__$1 == null);
var state_40818__$1 = (function (){var statearr_40836 = state_40818;
(statearr_40836[(11)] = inst_40681__$1);

return statearr_40836;
})();
if(cljs.core.truth_(inst_40682)){
var statearr_40837_42539 = state_40818__$1;
(statearr_40837_42539[(1)] = (5));

} else {
var statearr_40838_42540 = state_40818__$1;
(statearr_40838_42540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (15))){
var inst_40693 = (state_40818[(13)]);
var inst_40692 = (state_40818[(14)]);
var inst_40695 = (state_40818[(15)]);
var inst_40694 = (state_40818[(17)]);
var inst_40712 = (state_40818[(2)]);
var inst_40713 = (inst_40695 + (1));
var tmp40832 = inst_40693;
var tmp40833 = inst_40692;
var tmp40834 = inst_40694;
var inst_40692__$1 = tmp40833;
var inst_40693__$1 = tmp40832;
var inst_40694__$1 = tmp40834;
var inst_40695__$1 = inst_40713;
var state_40818__$1 = (function (){var statearr_40840 = state_40818;
(statearr_40840[(13)] = inst_40693__$1);

(statearr_40840[(14)] = inst_40692__$1);

(statearr_40840[(15)] = inst_40695__$1);

(statearr_40840[(18)] = inst_40712);

(statearr_40840[(17)] = inst_40694__$1);

return statearr_40840;
})();
var statearr_40841_42541 = state_40818__$1;
(statearr_40841_42541[(2)] = null);

(statearr_40841_42541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (21))){
var inst_40740 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40845_42549 = state_40818__$1;
(statearr_40845_42549[(2)] = inst_40740);

(statearr_40845_42549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (31))){
var inst_40767 = (state_40818[(10)]);
var inst_40771 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40767);
var state_40818__$1 = state_40818;
var statearr_40846_42550 = state_40818__$1;
(statearr_40846_42550[(2)] = inst_40771);

(statearr_40846_42550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (32))){
var inst_40760 = (state_40818[(19)]);
var inst_40759 = (state_40818[(9)]);
var inst_40761 = (state_40818[(12)]);
var inst_40758 = (state_40818[(20)]);
var inst_40773 = (state_40818[(2)]);
var inst_40774 = (inst_40761 + (1));
var tmp40842 = inst_40760;
var tmp40843 = inst_40759;
var tmp40844 = inst_40758;
var inst_40758__$1 = tmp40844;
var inst_40759__$1 = tmp40843;
var inst_40760__$1 = tmp40842;
var inst_40761__$1 = inst_40774;
var state_40818__$1 = (function (){var statearr_40848 = state_40818;
(statearr_40848[(21)] = inst_40773);

(statearr_40848[(19)] = inst_40760__$1);

(statearr_40848[(9)] = inst_40759__$1);

(statearr_40848[(12)] = inst_40761__$1);

(statearr_40848[(20)] = inst_40758__$1);

return statearr_40848;
})();
var statearr_40849_42552 = state_40818__$1;
(statearr_40849_42552[(2)] = null);

(statearr_40849_42552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (40))){
var inst_40787 = (state_40818[(22)]);
var inst_40791 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40787);
var state_40818__$1 = state_40818;
var statearr_40850_42562 = state_40818__$1;
(statearr_40850_42562[(2)] = inst_40791);

(statearr_40850_42562[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (33))){
var inst_40778 = (state_40818[(23)]);
var inst_40780 = cljs.core.chunked_seq_QMARK_(inst_40778);
var state_40818__$1 = state_40818;
if(inst_40780){
var statearr_40852_42569 = state_40818__$1;
(statearr_40852_42569[(1)] = (36));

} else {
var statearr_40853_42570 = state_40818__$1;
(statearr_40853_42570[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (13))){
var inst_40706 = (state_40818[(24)]);
var inst_40709 = cljs.core.async.close_BANG_(inst_40706);
var state_40818__$1 = state_40818;
var statearr_40854_42571 = state_40818__$1;
(statearr_40854_42571[(2)] = inst_40709);

(statearr_40854_42571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (22))){
var inst_40730 = (state_40818[(8)]);
var inst_40733 = cljs.core.async.close_BANG_(inst_40730);
var state_40818__$1 = state_40818;
var statearr_40855_42576 = state_40818__$1;
(statearr_40855_42576[(2)] = inst_40733);

(statearr_40855_42576[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (36))){
var inst_40778 = (state_40818[(23)]);
var inst_40782 = cljs.core.chunk_first(inst_40778);
var inst_40783 = cljs.core.chunk_rest(inst_40778);
var inst_40784 = cljs.core.count(inst_40782);
var inst_40758 = inst_40783;
var inst_40759 = inst_40782;
var inst_40760 = inst_40784;
var inst_40761 = (0);
var state_40818__$1 = (function (){var statearr_40856 = state_40818;
(statearr_40856[(19)] = inst_40760);

(statearr_40856[(9)] = inst_40759);

(statearr_40856[(12)] = inst_40761);

(statearr_40856[(20)] = inst_40758);

return statearr_40856;
})();
var statearr_40857_42584 = state_40818__$1;
(statearr_40857_42584[(2)] = null);

(statearr_40857_42584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (41))){
var inst_40778 = (state_40818[(23)]);
var inst_40793 = (state_40818[(2)]);
var inst_40794 = cljs.core.next(inst_40778);
var inst_40758 = inst_40794;
var inst_40759 = null;
var inst_40760 = (0);
var inst_40761 = (0);
var state_40818__$1 = (function (){var statearr_40859 = state_40818;
(statearr_40859[(19)] = inst_40760);

(statearr_40859[(9)] = inst_40759);

(statearr_40859[(25)] = inst_40793);

(statearr_40859[(12)] = inst_40761);

(statearr_40859[(20)] = inst_40758);

return statearr_40859;
})();
var statearr_40860_42586 = state_40818__$1;
(statearr_40860_42586[(2)] = null);

(statearr_40860_42586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (43))){
var state_40818__$1 = state_40818;
var statearr_40861_42587 = state_40818__$1;
(statearr_40861_42587[(2)] = null);

(statearr_40861_42587[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (29))){
var inst_40802 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40862_42588 = state_40818__$1;
(statearr_40862_42588[(2)] = inst_40802);

(statearr_40862_42588[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (44))){
var inst_40811 = (state_40818[(2)]);
var state_40818__$1 = (function (){var statearr_40863 = state_40818;
(statearr_40863[(26)] = inst_40811);

return statearr_40863;
})();
var statearr_40864_42591 = state_40818__$1;
(statearr_40864_42591[(2)] = null);

(statearr_40864_42591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (6))){
var inst_40750 = (state_40818[(27)]);
var inst_40749 = cljs.core.deref(cs);
var inst_40750__$1 = cljs.core.keys(inst_40749);
var inst_40751 = cljs.core.count(inst_40750__$1);
var inst_40752 = cljs.core.reset_BANG_(dctr,inst_40751);
var inst_40757 = cljs.core.seq(inst_40750__$1);
var inst_40758 = inst_40757;
var inst_40759 = null;
var inst_40760 = (0);
var inst_40761 = (0);
var state_40818__$1 = (function (){var statearr_40866 = state_40818;
(statearr_40866[(28)] = inst_40752);

(statearr_40866[(19)] = inst_40760);

(statearr_40866[(9)] = inst_40759);

(statearr_40866[(27)] = inst_40750__$1);

(statearr_40866[(12)] = inst_40761);

(statearr_40866[(20)] = inst_40758);

return statearr_40866;
})();
var statearr_40867_42603 = state_40818__$1;
(statearr_40867_42603[(2)] = null);

(statearr_40867_42603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (28))){
var inst_40778 = (state_40818[(23)]);
var inst_40758 = (state_40818[(20)]);
var inst_40778__$1 = cljs.core.seq(inst_40758);
var state_40818__$1 = (function (){var statearr_40868 = state_40818;
(statearr_40868[(23)] = inst_40778__$1);

return statearr_40868;
})();
if(inst_40778__$1){
var statearr_40869_42604 = state_40818__$1;
(statearr_40869_42604[(1)] = (33));

} else {
var statearr_40870_42605 = state_40818__$1;
(statearr_40870_42605[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (25))){
var inst_40760 = (state_40818[(19)]);
var inst_40761 = (state_40818[(12)]);
var inst_40763 = (inst_40761 < inst_40760);
var inst_40764 = inst_40763;
var state_40818__$1 = state_40818;
if(cljs.core.truth_(inst_40764)){
var statearr_40871_42607 = state_40818__$1;
(statearr_40871_42607[(1)] = (27));

} else {
var statearr_40872_42608 = state_40818__$1;
(statearr_40872_42608[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (34))){
var state_40818__$1 = state_40818;
var statearr_40873_42609 = state_40818__$1;
(statearr_40873_42609[(2)] = null);

(statearr_40873_42609[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (17))){
var state_40818__$1 = state_40818;
var statearr_40874_42613 = state_40818__$1;
(statearr_40874_42613[(2)] = null);

(statearr_40874_42613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (3))){
var inst_40816 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40818__$1,inst_40816);
} else {
if((state_val_40819 === (12))){
var inst_40745 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40876_42615 = state_40818__$1;
(statearr_40876_42615[(2)] = inst_40745);

(statearr_40876_42615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (2))){
var state_40818__$1 = state_40818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40818__$1,(4),ch);
} else {
if((state_val_40819 === (23))){
var state_40818__$1 = state_40818;
var statearr_40877_42616 = state_40818__$1;
(statearr_40877_42616[(2)] = null);

(statearr_40877_42616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (35))){
var inst_40800 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40878_42617 = state_40818__$1;
(statearr_40878_42617[(2)] = inst_40800);

(statearr_40878_42617[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (19))){
var inst_40717 = (state_40818[(7)]);
var inst_40721 = cljs.core.chunk_first(inst_40717);
var inst_40722 = cljs.core.chunk_rest(inst_40717);
var inst_40723 = cljs.core.count(inst_40721);
var inst_40692 = inst_40722;
var inst_40693 = inst_40721;
var inst_40694 = inst_40723;
var inst_40695 = (0);
var state_40818__$1 = (function (){var statearr_40879 = state_40818;
(statearr_40879[(13)] = inst_40693);

(statearr_40879[(14)] = inst_40692);

(statearr_40879[(15)] = inst_40695);

(statearr_40879[(17)] = inst_40694);

return statearr_40879;
})();
var statearr_40880_42619 = state_40818__$1;
(statearr_40880_42619[(2)] = null);

(statearr_40880_42619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (11))){
var inst_40692 = (state_40818[(14)]);
var inst_40717 = (state_40818[(7)]);
var inst_40717__$1 = cljs.core.seq(inst_40692);
var state_40818__$1 = (function (){var statearr_40882 = state_40818;
(statearr_40882[(7)] = inst_40717__$1);

return statearr_40882;
})();
if(inst_40717__$1){
var statearr_40883_42620 = state_40818__$1;
(statearr_40883_42620[(1)] = (16));

} else {
var statearr_40884_42621 = state_40818__$1;
(statearr_40884_42621[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (9))){
var inst_40747 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40885_42626 = state_40818__$1;
(statearr_40885_42626[(2)] = inst_40747);

(statearr_40885_42626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (5))){
var inst_40688 = cljs.core.deref(cs);
var inst_40689 = cljs.core.seq(inst_40688);
var inst_40692 = inst_40689;
var inst_40693 = null;
var inst_40694 = (0);
var inst_40695 = (0);
var state_40818__$1 = (function (){var statearr_40886 = state_40818;
(statearr_40886[(13)] = inst_40693);

(statearr_40886[(14)] = inst_40692);

(statearr_40886[(15)] = inst_40695);

(statearr_40886[(17)] = inst_40694);

return statearr_40886;
})();
var statearr_40887_42630 = state_40818__$1;
(statearr_40887_42630[(2)] = null);

(statearr_40887_42630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (14))){
var state_40818__$1 = state_40818;
var statearr_40888_42632 = state_40818__$1;
(statearr_40888_42632[(2)] = null);

(statearr_40888_42632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (45))){
var inst_40808 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40890_42633 = state_40818__$1;
(statearr_40890_42633[(2)] = inst_40808);

(statearr_40890_42633[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (26))){
var inst_40750 = (state_40818[(27)]);
var inst_40804 = (state_40818[(2)]);
var inst_40805 = cljs.core.seq(inst_40750);
var state_40818__$1 = (function (){var statearr_40891 = state_40818;
(statearr_40891[(29)] = inst_40804);

return statearr_40891;
})();
if(inst_40805){
var statearr_40892_42634 = state_40818__$1;
(statearr_40892_42634[(1)] = (42));

} else {
var statearr_40893_42635 = state_40818__$1;
(statearr_40893_42635[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (16))){
var inst_40717 = (state_40818[(7)]);
var inst_40719 = cljs.core.chunked_seq_QMARK_(inst_40717);
var state_40818__$1 = state_40818;
if(inst_40719){
var statearr_40894_42636 = state_40818__$1;
(statearr_40894_42636[(1)] = (19));

} else {
var statearr_40895_42637 = state_40818__$1;
(statearr_40895_42637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (38))){
var inst_40797 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40896_42640 = state_40818__$1;
(statearr_40896_42640[(2)] = inst_40797);

(statearr_40896_42640[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (30))){
var state_40818__$1 = state_40818;
var statearr_40897_42641 = state_40818__$1;
(statearr_40897_42641[(2)] = null);

(statearr_40897_42641[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (10))){
var inst_40693 = (state_40818[(13)]);
var inst_40695 = (state_40818[(15)]);
var inst_40705 = cljs.core._nth(inst_40693,inst_40695);
var inst_40706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40705,(0),null);
var inst_40707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40705,(1),null);
var state_40818__$1 = (function (){var statearr_40899 = state_40818;
(statearr_40899[(24)] = inst_40706);

return statearr_40899;
})();
if(cljs.core.truth_(inst_40707)){
var statearr_40900_42644 = state_40818__$1;
(statearr_40900_42644[(1)] = (13));

} else {
var statearr_40901_42645 = state_40818__$1;
(statearr_40901_42645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (18))){
var inst_40743 = (state_40818[(2)]);
var state_40818__$1 = state_40818;
var statearr_40902_42646 = state_40818__$1;
(statearr_40902_42646[(2)] = inst_40743);

(statearr_40902_42646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (42))){
var state_40818__$1 = state_40818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40818__$1,(45),dchan);
} else {
if((state_val_40819 === (37))){
var inst_40778 = (state_40818[(23)]);
var inst_40787 = (state_40818[(22)]);
var inst_40681 = (state_40818[(11)]);
var inst_40787__$1 = cljs.core.first(inst_40778);
var inst_40788 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40787__$1,inst_40681,done);
var state_40818__$1 = (function (){var statearr_40903 = state_40818;
(statearr_40903[(22)] = inst_40787__$1);

return statearr_40903;
})();
if(cljs.core.truth_(inst_40788)){
var statearr_40904_42648 = state_40818__$1;
(statearr_40904_42648[(1)] = (39));

} else {
var statearr_40905_42649 = state_40818__$1;
(statearr_40905_42649[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40819 === (8))){
var inst_40695 = (state_40818[(15)]);
var inst_40694 = (state_40818[(17)]);
var inst_40697 = (inst_40695 < inst_40694);
var inst_40698 = inst_40697;
var state_40818__$1 = state_40818;
if(cljs.core.truth_(inst_40698)){
var statearr_40906_42651 = state_40818__$1;
(statearr_40906_42651[(1)] = (10));

} else {
var statearr_40907_42652 = state_40818__$1;
(statearr_40907_42652[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__39542__auto__ = null;
var cljs$core$async$mult_$_state_machine__39542__auto____0 = (function (){
var statearr_40908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40908[(0)] = cljs$core$async$mult_$_state_machine__39542__auto__);

(statearr_40908[(1)] = (1));

return statearr_40908;
});
var cljs$core$async$mult_$_state_machine__39542__auto____1 = (function (state_40818){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_40818);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e40910){var ex__39545__auto__ = e40910;
var statearr_40911_42658 = state_40818;
(statearr_40911_42658[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_40818[(4)]))){
var statearr_40912_42659 = state_40818;
(statearr_40912_42659[(1)] = cljs.core.first((state_40818[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42660 = state_40818;
state_40818 = G__42660;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39542__auto__ = function(state_40818){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39542__auto____1.call(this,state_40818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39542__auto____0;
cljs$core$async$mult_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39542__auto____1;
return cljs$core$async$mult_$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_40913 = f__39710__auto__();
(statearr_40913[(6)] = c__39709__auto___42520);

return statearr_40913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40915 = arguments.length;
switch (G__40915) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_42662 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_42662(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_42667 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_42667(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_42669 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_42669(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_42672 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_42672(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_42682 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_42682(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42689 = arguments.length;
var i__4819__auto___42690 = (0);
while(true){
if((i__4819__auto___42690 < len__4818__auto___42689)){
args__4824__auto__.push((arguments[i__4819__auto___42690]));

var G__42691 = (i__4819__auto___42690 + (1));
i__4819__auto___42690 = G__42691;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40926){
var map__40927 = p__40926;
var map__40927__$1 = cljs.core.__destructure_map(map__40927);
var opts = map__40927__$1;
var statearr_40928_42692 = state;
(statearr_40928_42692[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_40929_42699 = state;
(statearr_40929_42699[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_40930_42700 = state;
(statearr_40930_42700[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40921){
var G__40922 = cljs.core.first(seq40921);
var seq40921__$1 = cljs.core.next(seq40921);
var G__40923 = cljs.core.first(seq40921__$1);
var seq40921__$2 = cljs.core.next(seq40921__$1);
var G__40924 = cljs.core.first(seq40921__$2);
var seq40921__$3 = cljs.core.next(seq40921__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40922,G__40923,G__40924,seq40921__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40932 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40933){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40933 = meta40933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40934,meta40933__$1){
var self__ = this;
var _40934__$1 = this;
return (new cljs.core.async.t_cljs$core$async40932(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40933__$1));
}));

(cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40934){
var self__ = this;
var _40934__$1 = this;
return self__.meta40933;
}));

(cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40932.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40933","meta40933",-487500444,null)], null);
}));

(cljs.core.async.t_cljs$core$async40932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40932");

(cljs.core.async.t_cljs$core$async40932.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async40932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40932.
 */
cljs.core.async.__GT_t_cljs$core$async40932 = (function cljs$core$async$mix_$___GT_t_cljs$core$async40932(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40933){
return (new cljs.core.async.t_cljs$core$async40932(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40933));
});

}

return (new cljs.core.async.t_cljs$core$async40932(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39709__auto___42722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_41006){
var state_val_41007 = (state_41006[(1)]);
if((state_val_41007 === (7))){
var inst_40965 = (state_41006[(2)]);
var state_41006__$1 = state_41006;
if(cljs.core.truth_(inst_40965)){
var statearr_41008_42723 = state_41006__$1;
(statearr_41008_42723[(1)] = (8));

} else {
var statearr_41009_42724 = state_41006__$1;
(statearr_41009_42724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (20))){
var inst_40958 = (state_41006[(7)]);
var state_41006__$1 = state_41006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41006__$1,(23),out,inst_40958);
} else {
if((state_val_41007 === (1))){
var inst_40941 = calc_state();
var inst_40942 = cljs.core.__destructure_map(inst_40941);
var inst_40943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40942,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40942,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40942,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40946 = inst_40941;
var state_41006__$1 = (function (){var statearr_41011 = state_41006;
(statearr_41011[(8)] = inst_40945);

(statearr_41011[(9)] = inst_40946);

(statearr_41011[(10)] = inst_40944);

(statearr_41011[(11)] = inst_40943);

return statearr_41011;
})();
var statearr_41012_42731 = state_41006__$1;
(statearr_41012_42731[(2)] = null);

(statearr_41012_42731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (24))){
var inst_40949 = (state_41006[(12)]);
var inst_40946 = inst_40949;
var state_41006__$1 = (function (){var statearr_41013 = state_41006;
(statearr_41013[(9)] = inst_40946);

return statearr_41013;
})();
var statearr_41014_42732 = state_41006__$1;
(statearr_41014_42732[(2)] = null);

(statearr_41014_42732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (4))){
var inst_40960 = (state_41006[(13)]);
var inst_40958 = (state_41006[(7)]);
var inst_40957 = (state_41006[(2)]);
var inst_40958__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40957,(0),null);
var inst_40959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40957,(1),null);
var inst_40960__$1 = (inst_40958__$1 == null);
var state_41006__$1 = (function (){var statearr_41015 = state_41006;
(statearr_41015[(13)] = inst_40960__$1);

(statearr_41015[(7)] = inst_40958__$1);

(statearr_41015[(14)] = inst_40959);

return statearr_41015;
})();
if(cljs.core.truth_(inst_40960__$1)){
var statearr_41017_42733 = state_41006__$1;
(statearr_41017_42733[(1)] = (5));

} else {
var statearr_41018_42734 = state_41006__$1;
(statearr_41018_42734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (15))){
var inst_40950 = (state_41006[(15)]);
var inst_40980 = (state_41006[(16)]);
var inst_40980__$1 = cljs.core.empty_QMARK_(inst_40950);
var state_41006__$1 = (function (){var statearr_41019 = state_41006;
(statearr_41019[(16)] = inst_40980__$1);

return statearr_41019;
})();
if(inst_40980__$1){
var statearr_41020_42735 = state_41006__$1;
(statearr_41020_42735[(1)] = (17));

} else {
var statearr_41021_42736 = state_41006__$1;
(statearr_41021_42736[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (21))){
var inst_40949 = (state_41006[(12)]);
var inst_40946 = inst_40949;
var state_41006__$1 = (function (){var statearr_41022 = state_41006;
(statearr_41022[(9)] = inst_40946);

return statearr_41022;
})();
var statearr_41023_42737 = state_41006__$1;
(statearr_41023_42737[(2)] = null);

(statearr_41023_42737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (13))){
var inst_40973 = (state_41006[(2)]);
var inst_40974 = calc_state();
var inst_40946 = inst_40974;
var state_41006__$1 = (function (){var statearr_41024 = state_41006;
(statearr_41024[(9)] = inst_40946);

(statearr_41024[(17)] = inst_40973);

return statearr_41024;
})();
var statearr_41025_42739 = state_41006__$1;
(statearr_41025_42739[(2)] = null);

(statearr_41025_42739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (22))){
var inst_41000 = (state_41006[(2)]);
var state_41006__$1 = state_41006;
var statearr_41026_42741 = state_41006__$1;
(statearr_41026_42741[(2)] = inst_41000);

(statearr_41026_42741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (6))){
var inst_40959 = (state_41006[(14)]);
var inst_40963 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40959,change);
var state_41006__$1 = state_41006;
var statearr_41028_42745 = state_41006__$1;
(statearr_41028_42745[(2)] = inst_40963);

(statearr_41028_42745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (25))){
var state_41006__$1 = state_41006;
var statearr_41029_42746 = state_41006__$1;
(statearr_41029_42746[(2)] = null);

(statearr_41029_42746[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (17))){
var inst_40951 = (state_41006[(18)]);
var inst_40959 = (state_41006[(14)]);
var inst_40982 = (inst_40951.cljs$core$IFn$_invoke$arity$1 ? inst_40951.cljs$core$IFn$_invoke$arity$1(inst_40959) : inst_40951.call(null,inst_40959));
var inst_40983 = cljs.core.not(inst_40982);
var state_41006__$1 = state_41006;
var statearr_41030_42747 = state_41006__$1;
(statearr_41030_42747[(2)] = inst_40983);

(statearr_41030_42747[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (3))){
var inst_41004 = (state_41006[(2)]);
var state_41006__$1 = state_41006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41006__$1,inst_41004);
} else {
if((state_val_41007 === (12))){
var state_41006__$1 = state_41006;
var statearr_41031_42752 = state_41006__$1;
(statearr_41031_42752[(2)] = null);

(statearr_41031_42752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (2))){
var inst_40946 = (state_41006[(9)]);
var inst_40949 = (state_41006[(12)]);
var inst_40949__$1 = cljs.core.__destructure_map(inst_40946);
var inst_40950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40949__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40949__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40949__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41006__$1 = (function (){var statearr_41032 = state_41006;
(statearr_41032[(15)] = inst_40950);

(statearr_41032[(12)] = inst_40949__$1);

(statearr_41032[(18)] = inst_40951);

return statearr_41032;
})();
return cljs.core.async.ioc_alts_BANG_(state_41006__$1,(4),inst_40952);
} else {
if((state_val_41007 === (23))){
var inst_40991 = (state_41006[(2)]);
var state_41006__$1 = state_41006;
if(cljs.core.truth_(inst_40991)){
var statearr_41034_42760 = state_41006__$1;
(statearr_41034_42760[(1)] = (24));

} else {
var statearr_41035_42764 = state_41006__$1;
(statearr_41035_42764[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (19))){
var inst_40986 = (state_41006[(2)]);
var state_41006__$1 = state_41006;
var statearr_41036_42765 = state_41006__$1;
(statearr_41036_42765[(2)] = inst_40986);

(statearr_41036_42765[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (11))){
var inst_40959 = (state_41006[(14)]);
var inst_40970 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40959);
var state_41006__$1 = state_41006;
var statearr_41037_42766 = state_41006__$1;
(statearr_41037_42766[(2)] = inst_40970);

(statearr_41037_42766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (9))){
var inst_40950 = (state_41006[(15)]);
var inst_40959 = (state_41006[(14)]);
var inst_40977 = (state_41006[(19)]);
var inst_40977__$1 = (inst_40950.cljs$core$IFn$_invoke$arity$1 ? inst_40950.cljs$core$IFn$_invoke$arity$1(inst_40959) : inst_40950.call(null,inst_40959));
var state_41006__$1 = (function (){var statearr_41038 = state_41006;
(statearr_41038[(19)] = inst_40977__$1);

return statearr_41038;
})();
if(cljs.core.truth_(inst_40977__$1)){
var statearr_41039_42767 = state_41006__$1;
(statearr_41039_42767[(1)] = (14));

} else {
var statearr_41040_42768 = state_41006__$1;
(statearr_41040_42768[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (5))){
var inst_40960 = (state_41006[(13)]);
var state_41006__$1 = state_41006;
var statearr_41041_42769 = state_41006__$1;
(statearr_41041_42769[(2)] = inst_40960);

(statearr_41041_42769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (14))){
var inst_40977 = (state_41006[(19)]);
var state_41006__$1 = state_41006;
var statearr_41043_42770 = state_41006__$1;
(statearr_41043_42770[(2)] = inst_40977);

(statearr_41043_42770[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (26))){
var inst_40996 = (state_41006[(2)]);
var state_41006__$1 = state_41006;
var statearr_41044_42771 = state_41006__$1;
(statearr_41044_42771[(2)] = inst_40996);

(statearr_41044_42771[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (16))){
var inst_40988 = (state_41006[(2)]);
var state_41006__$1 = state_41006;
if(cljs.core.truth_(inst_40988)){
var statearr_41045_42772 = state_41006__$1;
(statearr_41045_42772[(1)] = (20));

} else {
var statearr_41046_42773 = state_41006__$1;
(statearr_41046_42773[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (10))){
var inst_41002 = (state_41006[(2)]);
var state_41006__$1 = state_41006;
var statearr_41047_42777 = state_41006__$1;
(statearr_41047_42777[(2)] = inst_41002);

(statearr_41047_42777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (18))){
var inst_40980 = (state_41006[(16)]);
var state_41006__$1 = state_41006;
var statearr_41048_42778 = state_41006__$1;
(statearr_41048_42778[(2)] = inst_40980);

(statearr_41048_42778[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41007 === (8))){
var inst_40958 = (state_41006[(7)]);
var inst_40968 = (inst_40958 == null);
var state_41006__$1 = state_41006;
if(cljs.core.truth_(inst_40968)){
var statearr_41049_42779 = state_41006__$1;
(statearr_41049_42779[(1)] = (11));

} else {
var statearr_41050_42780 = state_41006__$1;
(statearr_41050_42780[(1)] = (12));

}

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
var cljs$core$async$mix_$_state_machine__39542__auto__ = null;
var cljs$core$async$mix_$_state_machine__39542__auto____0 = (function (){
var statearr_41052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41052[(0)] = cljs$core$async$mix_$_state_machine__39542__auto__);

(statearr_41052[(1)] = (1));

return statearr_41052;
});
var cljs$core$async$mix_$_state_machine__39542__auto____1 = (function (state_41006){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_41006);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e41053){var ex__39545__auto__ = e41053;
var statearr_41054_42788 = state_41006;
(statearr_41054_42788[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_41006[(4)]))){
var statearr_41055_42789 = state_41006;
(statearr_41055_42789[(1)] = cljs.core.first((state_41006[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42790 = state_41006;
state_41006 = G__42790;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39542__auto__ = function(state_41006){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39542__auto____1.call(this,state_41006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39542__auto____0;
cljs$core$async$mix_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39542__auto____1;
return cljs$core$async$mix_$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_41056 = f__39710__auto__();
(statearr_41056[(6)] = c__39709__auto___42722);

return statearr_41056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_42794 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_42794(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_42798 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_42798(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_42806 = (function() {
var G__42807 = null;
var G__42807__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__42807__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__42807 = function(p,v){
switch(arguments.length){
case 1:
return G__42807__1.call(this,p);
case 2:
return G__42807__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42807.cljs$core$IFn$_invoke$arity$1 = G__42807__1;
G__42807.cljs$core$IFn$_invoke$arity$2 = G__42807__2;
return G__42807;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41063 = arguments.length;
switch (G__41063) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42806(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42806(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41068 = arguments.length;
switch (G__41068) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__41064_SHARP_){
if(cljs.core.truth_((p1__41064_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41064_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41064_SHARP_.call(null,topic)))){
return p1__41064_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41064_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41069 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41070){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41070 = meta41070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41071,meta41070__$1){
var self__ = this;
var _41071__$1 = this;
return (new cljs.core.async.t_cljs$core$async41069(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41070__$1));
}));

(cljs.core.async.t_cljs$core$async41069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41071){
var self__ = this;
var _41071__$1 = this;
return self__.meta41070;
}));

(cljs.core.async.t_cljs$core$async41069.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41069.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41069.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41069.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async41069.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async41069.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async41069.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async41069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41070","meta41070",-951964762,null)], null);
}));

(cljs.core.async.t_cljs$core$async41069.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41069");

(cljs.core.async.t_cljs$core$async41069.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async41069");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41069.
 */
cljs.core.async.__GT_t_cljs$core$async41069 = (function cljs$core$async$__GT_t_cljs$core$async41069(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41070){
return (new cljs.core.async.t_cljs$core$async41069(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41070));
});

}

return (new cljs.core.async.t_cljs$core$async41069(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39709__auto___42816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_41154){
var state_val_41155 = (state_41154[(1)]);
if((state_val_41155 === (7))){
var inst_41150 = (state_41154[(2)]);
var state_41154__$1 = state_41154;
var statearr_41159_42817 = state_41154__$1;
(statearr_41159_42817[(2)] = inst_41150);

(statearr_41159_42817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (20))){
var state_41154__$1 = state_41154;
var statearr_41161_42821 = state_41154__$1;
(statearr_41161_42821[(2)] = null);

(statearr_41161_42821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (1))){
var state_41154__$1 = state_41154;
var statearr_41163_42822 = state_41154__$1;
(statearr_41163_42822[(2)] = null);

(statearr_41163_42822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (24))){
var inst_41133 = (state_41154[(7)]);
var inst_41142 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41133);
var state_41154__$1 = state_41154;
var statearr_41167_42823 = state_41154__$1;
(statearr_41167_42823[(2)] = inst_41142);

(statearr_41167_42823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (4))){
var inst_41076 = (state_41154[(8)]);
var inst_41076__$1 = (state_41154[(2)]);
var inst_41077 = (inst_41076__$1 == null);
var state_41154__$1 = (function (){var statearr_41169 = state_41154;
(statearr_41169[(8)] = inst_41076__$1);

return statearr_41169;
})();
if(cljs.core.truth_(inst_41077)){
var statearr_41170_42824 = state_41154__$1;
(statearr_41170_42824[(1)] = (5));

} else {
var statearr_41171_42825 = state_41154__$1;
(statearr_41171_42825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (15))){
var inst_41127 = (state_41154[(2)]);
var state_41154__$1 = state_41154;
var statearr_41175_42826 = state_41154__$1;
(statearr_41175_42826[(2)] = inst_41127);

(statearr_41175_42826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (21))){
var inst_41147 = (state_41154[(2)]);
var state_41154__$1 = (function (){var statearr_41176 = state_41154;
(statearr_41176[(9)] = inst_41147);

return statearr_41176;
})();
var statearr_41178_42827 = state_41154__$1;
(statearr_41178_42827[(2)] = null);

(statearr_41178_42827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (13))){
var inst_41103 = (state_41154[(10)]);
var inst_41107 = cljs.core.chunked_seq_QMARK_(inst_41103);
var state_41154__$1 = state_41154;
if(inst_41107){
var statearr_41182_42828 = state_41154__$1;
(statearr_41182_42828[(1)] = (16));

} else {
var statearr_41183_42829 = state_41154__$1;
(statearr_41183_42829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (22))){
var inst_41139 = (state_41154[(2)]);
var state_41154__$1 = state_41154;
if(cljs.core.truth_(inst_41139)){
var statearr_41185_42830 = state_41154__$1;
(statearr_41185_42830[(1)] = (23));

} else {
var statearr_41186_42831 = state_41154__$1;
(statearr_41186_42831[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (6))){
var inst_41076 = (state_41154[(8)]);
var inst_41133 = (state_41154[(7)]);
var inst_41135 = (state_41154[(11)]);
var inst_41133__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41076) : topic_fn.call(null,inst_41076));
var inst_41134 = cljs.core.deref(mults);
var inst_41135__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41134,inst_41133__$1);
var state_41154__$1 = (function (){var statearr_41190 = state_41154;
(statearr_41190[(7)] = inst_41133__$1);

(statearr_41190[(11)] = inst_41135__$1);

return statearr_41190;
})();
if(cljs.core.truth_(inst_41135__$1)){
var statearr_41191_42832 = state_41154__$1;
(statearr_41191_42832[(1)] = (19));

} else {
var statearr_41193_42833 = state_41154__$1;
(statearr_41193_42833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (25))){
var inst_41144 = (state_41154[(2)]);
var state_41154__$1 = state_41154;
var statearr_41194_42834 = state_41154__$1;
(statearr_41194_42834[(2)] = inst_41144);

(statearr_41194_42834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (17))){
var inst_41103 = (state_41154[(10)]);
var inst_41115 = cljs.core.first(inst_41103);
var inst_41119 = cljs.core.async.muxch_STAR_(inst_41115);
var inst_41120 = cljs.core.async.close_BANG_(inst_41119);
var inst_41121 = cljs.core.next(inst_41103);
var inst_41086 = inst_41121;
var inst_41087 = null;
var inst_41088 = (0);
var inst_41089 = (0);
var state_41154__$1 = (function (){var statearr_41198 = state_41154;
(statearr_41198[(12)] = inst_41120);

(statearr_41198[(13)] = inst_41088);

(statearr_41198[(14)] = inst_41087);

(statearr_41198[(15)] = inst_41086);

(statearr_41198[(16)] = inst_41089);

return statearr_41198;
})();
var statearr_41200_42839 = state_41154__$1;
(statearr_41200_42839[(2)] = null);

(statearr_41200_42839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (3))){
var inst_41152 = (state_41154[(2)]);
var state_41154__$1 = state_41154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41154__$1,inst_41152);
} else {
if((state_val_41155 === (12))){
var inst_41129 = (state_41154[(2)]);
var state_41154__$1 = state_41154;
var statearr_41204_42841 = state_41154__$1;
(statearr_41204_42841[(2)] = inst_41129);

(statearr_41204_42841[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (2))){
var state_41154__$1 = state_41154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41154__$1,(4),ch);
} else {
if((state_val_41155 === (23))){
var state_41154__$1 = state_41154;
var statearr_41206_42842 = state_41154__$1;
(statearr_41206_42842[(2)] = null);

(statearr_41206_42842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (19))){
var inst_41076 = (state_41154[(8)]);
var inst_41135 = (state_41154[(11)]);
var inst_41137 = cljs.core.async.muxch_STAR_(inst_41135);
var state_41154__$1 = state_41154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41154__$1,(22),inst_41137,inst_41076);
} else {
if((state_val_41155 === (11))){
var inst_41103 = (state_41154[(10)]);
var inst_41086 = (state_41154[(15)]);
var inst_41103__$1 = cljs.core.seq(inst_41086);
var state_41154__$1 = (function (){var statearr_41211 = state_41154;
(statearr_41211[(10)] = inst_41103__$1);

return statearr_41211;
})();
if(inst_41103__$1){
var statearr_41212_42843 = state_41154__$1;
(statearr_41212_42843[(1)] = (13));

} else {
var statearr_41213_42844 = state_41154__$1;
(statearr_41213_42844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (9))){
var inst_41131 = (state_41154[(2)]);
var state_41154__$1 = state_41154;
var statearr_41217_42845 = state_41154__$1;
(statearr_41217_42845[(2)] = inst_41131);

(statearr_41217_42845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (5))){
var inst_41083 = cljs.core.deref(mults);
var inst_41084 = cljs.core.vals(inst_41083);
var inst_41085 = cljs.core.seq(inst_41084);
var inst_41086 = inst_41085;
var inst_41087 = null;
var inst_41088 = (0);
var inst_41089 = (0);
var state_41154__$1 = (function (){var statearr_41219 = state_41154;
(statearr_41219[(13)] = inst_41088);

(statearr_41219[(14)] = inst_41087);

(statearr_41219[(15)] = inst_41086);

(statearr_41219[(16)] = inst_41089);

return statearr_41219;
})();
var statearr_41220_42850 = state_41154__$1;
(statearr_41220_42850[(2)] = null);

(statearr_41220_42850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (14))){
var state_41154__$1 = state_41154;
var statearr_41227_42851 = state_41154__$1;
(statearr_41227_42851[(2)] = null);

(statearr_41227_42851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (16))){
var inst_41103 = (state_41154[(10)]);
var inst_41110 = cljs.core.chunk_first(inst_41103);
var inst_41111 = cljs.core.chunk_rest(inst_41103);
var inst_41112 = cljs.core.count(inst_41110);
var inst_41086 = inst_41111;
var inst_41087 = inst_41110;
var inst_41088 = inst_41112;
var inst_41089 = (0);
var state_41154__$1 = (function (){var statearr_41230 = state_41154;
(statearr_41230[(13)] = inst_41088);

(statearr_41230[(14)] = inst_41087);

(statearr_41230[(15)] = inst_41086);

(statearr_41230[(16)] = inst_41089);

return statearr_41230;
})();
var statearr_41234_42860 = state_41154__$1;
(statearr_41234_42860[(2)] = null);

(statearr_41234_42860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (10))){
var inst_41088 = (state_41154[(13)]);
var inst_41087 = (state_41154[(14)]);
var inst_41086 = (state_41154[(15)]);
var inst_41089 = (state_41154[(16)]);
var inst_41097 = cljs.core._nth(inst_41087,inst_41089);
var inst_41098 = cljs.core.async.muxch_STAR_(inst_41097);
var inst_41099 = cljs.core.async.close_BANG_(inst_41098);
var inst_41100 = (inst_41089 + (1));
var tmp41224 = inst_41088;
var tmp41225 = inst_41087;
var tmp41226 = inst_41086;
var inst_41086__$1 = tmp41226;
var inst_41087__$1 = tmp41225;
var inst_41088__$1 = tmp41224;
var inst_41089__$1 = inst_41100;
var state_41154__$1 = (function (){var statearr_41236 = state_41154;
(statearr_41236[(13)] = inst_41088__$1);

(statearr_41236[(14)] = inst_41087__$1);

(statearr_41236[(17)] = inst_41099);

(statearr_41236[(15)] = inst_41086__$1);

(statearr_41236[(16)] = inst_41089__$1);

return statearr_41236;
})();
var statearr_41240_42862 = state_41154__$1;
(statearr_41240_42862[(2)] = null);

(statearr_41240_42862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (18))){
var inst_41124 = (state_41154[(2)]);
var state_41154__$1 = state_41154;
var statearr_41241_42863 = state_41154__$1;
(statearr_41241_42863[(2)] = inst_41124);

(statearr_41241_42863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41155 === (8))){
var inst_41088 = (state_41154[(13)]);
var inst_41089 = (state_41154[(16)]);
var inst_41094 = (inst_41089 < inst_41088);
var inst_41095 = inst_41094;
var state_41154__$1 = state_41154;
if(cljs.core.truth_(inst_41095)){
var statearr_41244_42864 = state_41154__$1;
(statearr_41244_42864[(1)] = (10));

} else {
var statearr_41245_42865 = state_41154__$1;
(statearr_41245_42865[(1)] = (11));

}

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
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_41250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41250[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_41250[(1)] = (1));

return statearr_41250;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_41154){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_41154);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e41251){var ex__39545__auto__ = e41251;
var statearr_41254_42867 = state_41154;
(statearr_41254_42867[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_41154[(4)]))){
var statearr_41256_42868 = state_41154;
(statearr_41256_42868[(1)] = cljs.core.first((state_41154[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42869 = state_41154;
state_41154 = G__42869;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_41154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_41154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_41259 = f__39710__auto__();
(statearr_41259[(6)] = c__39709__auto___42816);

return statearr_41259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41265 = arguments.length;
switch (G__41265) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41278 = arguments.length;
switch (G__41278) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41289 = arguments.length;
switch (G__41289) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__39709__auto___42879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_41354){
var state_val_41355 = (state_41354[(1)]);
if((state_val_41355 === (7))){
var state_41354__$1 = state_41354;
var statearr_41360_42880 = state_41354__$1;
(statearr_41360_42880[(2)] = null);

(statearr_41360_42880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (1))){
var state_41354__$1 = state_41354;
var statearr_41362_42881 = state_41354__$1;
(statearr_41362_42881[(2)] = null);

(statearr_41362_42881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (4))){
var inst_41305 = (state_41354[(7)]);
var inst_41306 = (state_41354[(8)]);
var inst_41308 = (inst_41306 < inst_41305);
var state_41354__$1 = state_41354;
if(cljs.core.truth_(inst_41308)){
var statearr_41365_42882 = state_41354__$1;
(statearr_41365_42882[(1)] = (6));

} else {
var statearr_41366_42883 = state_41354__$1;
(statearr_41366_42883[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (15))){
var inst_41339 = (state_41354[(9)]);
var inst_41344 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_41339);
var state_41354__$1 = state_41354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41354__$1,(17),out,inst_41344);
} else {
if((state_val_41355 === (13))){
var inst_41339 = (state_41354[(9)]);
var inst_41339__$1 = (state_41354[(2)]);
var inst_41340 = cljs.core.some(cljs.core.nil_QMARK_,inst_41339__$1);
var state_41354__$1 = (function (){var statearr_41373 = state_41354;
(statearr_41373[(9)] = inst_41339__$1);

return statearr_41373;
})();
if(cljs.core.truth_(inst_41340)){
var statearr_41374_42884 = state_41354__$1;
(statearr_41374_42884[(1)] = (14));

} else {
var statearr_41375_42885 = state_41354__$1;
(statearr_41375_42885[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (6))){
var state_41354__$1 = state_41354;
var statearr_41377_42886 = state_41354__$1;
(statearr_41377_42886[(2)] = null);

(statearr_41377_42886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (17))){
var inst_41346 = (state_41354[(2)]);
var state_41354__$1 = (function (){var statearr_41387 = state_41354;
(statearr_41387[(10)] = inst_41346);

return statearr_41387;
})();
var statearr_41390_42887 = state_41354__$1;
(statearr_41390_42887[(2)] = null);

(statearr_41390_42887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (3))){
var inst_41352 = (state_41354[(2)]);
var state_41354__$1 = state_41354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41354__$1,inst_41352);
} else {
if((state_val_41355 === (12))){
var _ = (function (){var statearr_41393 = state_41354;
(statearr_41393[(4)] = cljs.core.rest((state_41354[(4)])));

return statearr_41393;
})();
var state_41354__$1 = state_41354;
var ex41385 = (state_41354__$1[(2)]);
var statearr_41395_42888 = state_41354__$1;
(statearr_41395_42888[(5)] = ex41385);


if((ex41385 instanceof Object)){
var statearr_41398_42889 = state_41354__$1;
(statearr_41398_42889[(1)] = (11));

(statearr_41398_42889[(5)] = null);

} else {
throw ex41385;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (2))){
var inst_41304 = cljs.core.reset_BANG_(dctr,cnt);
var inst_41305 = cnt;
var inst_41306 = (0);
var state_41354__$1 = (function (){var statearr_41404 = state_41354;
(statearr_41404[(7)] = inst_41305);

(statearr_41404[(11)] = inst_41304);

(statearr_41404[(8)] = inst_41306);

return statearr_41404;
})();
var statearr_41408_42890 = state_41354__$1;
(statearr_41408_42890[(2)] = null);

(statearr_41408_42890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (11))){
var inst_41315 = (state_41354[(2)]);
var inst_41316 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_41354__$1 = (function (){var statearr_41410 = state_41354;
(statearr_41410[(12)] = inst_41315);

return statearr_41410;
})();
var statearr_41411_42891 = state_41354__$1;
(statearr_41411_42891[(2)] = inst_41316);

(statearr_41411_42891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (9))){
var inst_41306 = (state_41354[(8)]);
var _ = (function (){var statearr_41415 = state_41354;
(statearr_41415[(4)] = cljs.core.cons((12),(state_41354[(4)])));

return statearr_41415;
})();
var inst_41323 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41306) : chs__$1.call(null,inst_41306));
var inst_41325 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41306) : done.call(null,inst_41306));
var inst_41326 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41323,inst_41325);
var ___$1 = (function (){var statearr_41416 = state_41354;
(statearr_41416[(4)] = cljs.core.rest((state_41354[(4)])));

return statearr_41416;
})();
var state_41354__$1 = state_41354;
var statearr_41420_42892 = state_41354__$1;
(statearr_41420_42892[(2)] = inst_41326);

(statearr_41420_42892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (5))){
var inst_41337 = (state_41354[(2)]);
var state_41354__$1 = (function (){var statearr_41423 = state_41354;
(statearr_41423[(13)] = inst_41337);

return statearr_41423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41354__$1,(13),dchan);
} else {
if((state_val_41355 === (14))){
var inst_41342 = cljs.core.async.close_BANG_(out);
var state_41354__$1 = state_41354;
var statearr_41425_42893 = state_41354__$1;
(statearr_41425_42893[(2)] = inst_41342);

(statearr_41425_42893[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (16))){
var inst_41349 = (state_41354[(2)]);
var state_41354__$1 = state_41354;
var statearr_41431_42895 = state_41354__$1;
(statearr_41431_42895[(2)] = inst_41349);

(statearr_41431_42895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (10))){
var inst_41306 = (state_41354[(8)]);
var inst_41329 = (state_41354[(2)]);
var inst_41331 = (inst_41306 + (1));
var inst_41306__$1 = inst_41331;
var state_41354__$1 = (function (){var statearr_41439 = state_41354;
(statearr_41439[(8)] = inst_41306__$1);

(statearr_41439[(14)] = inst_41329);

return statearr_41439;
})();
var statearr_41441_42896 = state_41354__$1;
(statearr_41441_42896[(2)] = null);

(statearr_41441_42896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41355 === (8))){
var inst_41335 = (state_41354[(2)]);
var state_41354__$1 = state_41354;
var statearr_41443_42897 = state_41354__$1;
(statearr_41443_42897[(2)] = inst_41335);

(statearr_41443_42897[(1)] = (5));


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
}
});
return (function() {
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_41451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41451[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_41451[(1)] = (1));

return statearr_41451;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_41354){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_41354);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e41456){var ex__39545__auto__ = e41456;
var statearr_41458_42901 = state_41354;
(statearr_41458_42901[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_41354[(4)]))){
var statearr_41461_42903 = state_41354;
(statearr_41461_42903[(1)] = cljs.core.first((state_41354[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42907 = state_41354;
state_41354 = G__42907;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_41354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_41354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_41468 = f__39710__auto__();
(statearr_41468[(6)] = c__39709__auto___42879);

return statearr_41468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41479 = arguments.length;
switch (G__41479) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39709__auto___42909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_41534){
var state_val_41535 = (state_41534[(1)]);
if((state_val_41535 === (7))){
var inst_41502 = (state_41534[(7)]);
var inst_41503 = (state_41534[(8)]);
var inst_41502__$1 = (state_41534[(2)]);
var inst_41503__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41502__$1,(0),null);
var inst_41504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41502__$1,(1),null);
var inst_41507 = (inst_41503__$1 == null);
var state_41534__$1 = (function (){var statearr_41540 = state_41534;
(statearr_41540[(7)] = inst_41502__$1);

(statearr_41540[(8)] = inst_41503__$1);

(statearr_41540[(9)] = inst_41504);

return statearr_41540;
})();
if(cljs.core.truth_(inst_41507)){
var statearr_41541_42913 = state_41534__$1;
(statearr_41541_42913[(1)] = (8));

} else {
var statearr_41542_42914 = state_41534__$1;
(statearr_41542_42914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41535 === (1))){
var inst_41491 = cljs.core.vec(chs);
var inst_41493 = inst_41491;
var state_41534__$1 = (function (){var statearr_41546 = state_41534;
(statearr_41546[(10)] = inst_41493);

return statearr_41546;
})();
var statearr_41547_42915 = state_41534__$1;
(statearr_41547_42915[(2)] = null);

(statearr_41547_42915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41535 === (4))){
var inst_41493 = (state_41534[(10)]);
var state_41534__$1 = state_41534;
return cljs.core.async.ioc_alts_BANG_(state_41534__$1,(7),inst_41493);
} else {
if((state_val_41535 === (6))){
var inst_41526 = (state_41534[(2)]);
var state_41534__$1 = state_41534;
var statearr_41549_42916 = state_41534__$1;
(statearr_41549_42916[(2)] = inst_41526);

(statearr_41549_42916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41535 === (3))){
var inst_41528 = (state_41534[(2)]);
var state_41534__$1 = state_41534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41534__$1,inst_41528);
} else {
if((state_val_41535 === (2))){
var inst_41493 = (state_41534[(10)]);
var inst_41495 = cljs.core.count(inst_41493);
var inst_41496 = (inst_41495 > (0));
var state_41534__$1 = state_41534;
if(cljs.core.truth_(inst_41496)){
var statearr_41555_42917 = state_41534__$1;
(statearr_41555_42917[(1)] = (4));

} else {
var statearr_41556_42918 = state_41534__$1;
(statearr_41556_42918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41535 === (11))){
var inst_41493 = (state_41534[(10)]);
var inst_41519 = (state_41534[(2)]);
var tmp41550 = inst_41493;
var inst_41493__$1 = tmp41550;
var state_41534__$1 = (function (){var statearr_41557 = state_41534;
(statearr_41557[(10)] = inst_41493__$1);

(statearr_41557[(11)] = inst_41519);

return statearr_41557;
})();
var statearr_41559_42919 = state_41534__$1;
(statearr_41559_42919[(2)] = null);

(statearr_41559_42919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41535 === (9))){
var inst_41503 = (state_41534[(8)]);
var state_41534__$1 = state_41534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41534__$1,(11),out,inst_41503);
} else {
if((state_val_41535 === (5))){
var inst_41524 = cljs.core.async.close_BANG_(out);
var state_41534__$1 = state_41534;
var statearr_41564_42920 = state_41534__$1;
(statearr_41564_42920[(2)] = inst_41524);

(statearr_41564_42920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41535 === (10))){
var inst_41522 = (state_41534[(2)]);
var state_41534__$1 = state_41534;
var statearr_41569_42922 = state_41534__$1;
(statearr_41569_42922[(2)] = inst_41522);

(statearr_41569_42922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41535 === (8))){
var inst_41502 = (state_41534[(7)]);
var inst_41503 = (state_41534[(8)]);
var inst_41493 = (state_41534[(10)]);
var inst_41504 = (state_41534[(9)]);
var inst_41510 = (function (){var cs = inst_41493;
var vec__41498 = inst_41502;
var v = inst_41503;
var c = inst_41504;
return (function (p1__41475_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__41475_SHARP_);
});
})();
var inst_41511 = cljs.core.filterv(inst_41510,inst_41493);
var inst_41493__$1 = inst_41511;
var state_41534__$1 = (function (){var statearr_41570 = state_41534;
(statearr_41570[(10)] = inst_41493__$1);

return statearr_41570;
})();
var statearr_41571_42923 = state_41534__$1;
(statearr_41571_42923[(2)] = null);

(statearr_41571_42923[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_41576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41576[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_41576[(1)] = (1));

return statearr_41576;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_41534){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_41534);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e41577){var ex__39545__auto__ = e41577;
var statearr_41581_42924 = state_41534;
(statearr_41581_42924[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_41534[(4)]))){
var statearr_41582_42925 = state_41534;
(statearr_41582_42925[(1)] = cljs.core.first((state_41534[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42926 = state_41534;
state_41534 = G__42926;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_41534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_41534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_41584 = f__39710__auto__();
(statearr_41584[(6)] = c__39709__auto___42909);

return statearr_41584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__41591 = arguments.length;
switch (G__41591) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39709__auto___42928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_41623){
var state_val_41624 = (state_41623[(1)]);
if((state_val_41624 === (7))){
var inst_41604 = (state_41623[(7)]);
var inst_41604__$1 = (state_41623[(2)]);
var inst_41605 = (inst_41604__$1 == null);
var inst_41606 = cljs.core.not(inst_41605);
var state_41623__$1 = (function (){var statearr_41629 = state_41623;
(statearr_41629[(7)] = inst_41604__$1);

return statearr_41629;
})();
if(inst_41606){
var statearr_41630_42934 = state_41623__$1;
(statearr_41630_42934[(1)] = (8));

} else {
var statearr_41631_42935 = state_41623__$1;
(statearr_41631_42935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (1))){
var inst_41596 = (0);
var state_41623__$1 = (function (){var statearr_41635 = state_41623;
(statearr_41635[(8)] = inst_41596);

return statearr_41635;
})();
var statearr_41636_42936 = state_41623__$1;
(statearr_41636_42936[(2)] = null);

(statearr_41636_42936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (4))){
var state_41623__$1 = state_41623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41623__$1,(7),ch);
} else {
if((state_val_41624 === (6))){
var inst_41618 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41638_42938 = state_41623__$1;
(statearr_41638_42938[(2)] = inst_41618);

(statearr_41638_42938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (3))){
var inst_41620 = (state_41623[(2)]);
var inst_41621 = cljs.core.async.close_BANG_(out);
var state_41623__$1 = (function (){var statearr_41642 = state_41623;
(statearr_41642[(9)] = inst_41620);

return statearr_41642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41623__$1,inst_41621);
} else {
if((state_val_41624 === (2))){
var inst_41596 = (state_41623[(8)]);
var inst_41598 = (inst_41596 < n);
var state_41623__$1 = state_41623;
if(cljs.core.truth_(inst_41598)){
var statearr_41644_42939 = state_41623__$1;
(statearr_41644_42939[(1)] = (4));

} else {
var statearr_41645_42940 = state_41623__$1;
(statearr_41645_42940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (11))){
var inst_41596 = (state_41623[(8)]);
var inst_41610 = (state_41623[(2)]);
var inst_41611 = (inst_41596 + (1));
var inst_41596__$1 = inst_41611;
var state_41623__$1 = (function (){var statearr_41646 = state_41623;
(statearr_41646[(8)] = inst_41596__$1);

(statearr_41646[(10)] = inst_41610);

return statearr_41646;
})();
var statearr_41647_42941 = state_41623__$1;
(statearr_41647_42941[(2)] = null);

(statearr_41647_42941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (9))){
var state_41623__$1 = state_41623;
var statearr_41648_42942 = state_41623__$1;
(statearr_41648_42942[(2)] = null);

(statearr_41648_42942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (5))){
var state_41623__$1 = state_41623;
var statearr_41649_42943 = state_41623__$1;
(statearr_41649_42943[(2)] = null);

(statearr_41649_42943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (10))){
var inst_41615 = (state_41623[(2)]);
var state_41623__$1 = state_41623;
var statearr_41650_42944 = state_41623__$1;
(statearr_41650_42944[(2)] = inst_41615);

(statearr_41650_42944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41624 === (8))){
var inst_41604 = (state_41623[(7)]);
var state_41623__$1 = state_41623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41623__$1,(11),out,inst_41604);
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
});
return (function() {
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_41651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41651[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_41651[(1)] = (1));

return statearr_41651;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_41623){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_41623);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e41656){var ex__39545__auto__ = e41656;
var statearr_41657_42946 = state_41623;
(statearr_41657_42946[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_41623[(4)]))){
var statearr_41658_42947 = state_41623;
(statearr_41658_42947[(1)] = cljs.core.first((state_41623[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42948 = state_41623;
state_41623 = G__42948;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_41623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_41623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_41659 = f__39710__auto__();
(statearr_41659[(6)] = c__39709__auto___42928);

return statearr_41659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41662 = (function (f,ch,meta41663){
this.f = f;
this.ch = ch;
this.meta41663 = meta41663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41664,meta41663__$1){
var self__ = this;
var _41664__$1 = this;
return (new cljs.core.async.t_cljs$core$async41662(self__.f,self__.ch,meta41663__$1));
}));

(cljs.core.async.t_cljs$core$async41662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41664){
var self__ = this;
var _41664__$1 = this;
return self__.meta41663;
}));

(cljs.core.async.t_cljs$core$async41662.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41662.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41662.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41667 = (function (f,ch,meta41663,_,fn1,meta41668){
this.f = f;
this.ch = ch;
this.meta41663 = meta41663;
this._ = _;
this.fn1 = fn1;
this.meta41668 = meta41668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41669,meta41668__$1){
var self__ = this;
var _41669__$1 = this;
return (new cljs.core.async.t_cljs$core$async41667(self__.f,self__.ch,self__.meta41663,self__._,self__.fn1,meta41668__$1));
}));

(cljs.core.async.t_cljs$core$async41667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41669){
var self__ = this;
var _41669__$1 = this;
return self__.meta41668;
}));

(cljs.core.async.t_cljs$core$async41667.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async41667.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__41661_SHARP_){
var G__41670 = (((p1__41661_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__41661_SHARP_) : self__.f.call(null,p1__41661_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__41670) : f1.call(null,G__41670));
});
}));

(cljs.core.async.t_cljs$core$async41667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41663","meta41663",901966386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41662","cljs.core.async/t_cljs$core$async41662",-1507457036,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41668","meta41668",2136816723,null)], null);
}));

(cljs.core.async.t_cljs$core$async41667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41667");

(cljs.core.async.t_cljs$core$async41667.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async41667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41667.
 */
cljs.core.async.__GT_t_cljs$core$async41667 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41667(f__$1,ch__$1,meta41663__$1,___$2,fn1__$1,meta41668){
return (new cljs.core.async.t_cljs$core$async41667(f__$1,ch__$1,meta41663__$1,___$2,fn1__$1,meta41668));
});

}

return (new cljs.core.async.t_cljs$core$async41667(self__.f,self__.ch,self__.meta41663,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__41671 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__41671) : self__.f.call(null,G__41671));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async41662.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async41662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41663","meta41663",901966386,null)], null);
}));

(cljs.core.async.t_cljs$core$async41662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41662");

(cljs.core.async.t_cljs$core$async41662.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async41662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41662.
 */
cljs.core.async.__GT_t_cljs$core$async41662 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41662(f__$1,ch__$1,meta41663){
return (new cljs.core.async.t_cljs$core$async41662(f__$1,ch__$1,meta41663));
});

}

return (new cljs.core.async.t_cljs$core$async41662(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41672 = (function (f,ch,meta41673){
this.f = f;
this.ch = ch;
this.meta41673 = meta41673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41674,meta41673__$1){
var self__ = this;
var _41674__$1 = this;
return (new cljs.core.async.t_cljs$core$async41672(self__.f,self__.ch,meta41673__$1));
}));

(cljs.core.async.t_cljs$core$async41672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41674){
var self__ = this;
var _41674__$1 = this;
return self__.meta41673;
}));

(cljs.core.async.t_cljs$core$async41672.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41672.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41672.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async41672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41673","meta41673",1548605742,null)], null);
}));

(cljs.core.async.t_cljs$core$async41672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41672");

(cljs.core.async.t_cljs$core$async41672.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async41672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41672.
 */
cljs.core.async.__GT_t_cljs$core$async41672 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41672(f__$1,ch__$1,meta41673){
return (new cljs.core.async.t_cljs$core$async41672(f__$1,ch__$1,meta41673));
});

}

return (new cljs.core.async.t_cljs$core$async41672(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41677 = (function (p,ch,meta41678){
this.p = p;
this.ch = ch;
this.meta41678 = meta41678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41679,meta41678__$1){
var self__ = this;
var _41679__$1 = this;
return (new cljs.core.async.t_cljs$core$async41677(self__.p,self__.ch,meta41678__$1));
}));

(cljs.core.async.t_cljs$core$async41677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41679){
var self__ = this;
var _41679__$1 = this;
return self__.meta41678;
}));

(cljs.core.async.t_cljs$core$async41677.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41677.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41677.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41677.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async41677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41678","meta41678",393340456,null)], null);
}));

(cljs.core.async.t_cljs$core$async41677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41677");

(cljs.core.async.t_cljs$core$async41677.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async41677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41677.
 */
cljs.core.async.__GT_t_cljs$core$async41677 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41677(p__$1,ch__$1,meta41678){
return (new cljs.core.async.t_cljs$core$async41677(p__$1,ch__$1,meta41678));
});

}

return (new cljs.core.async.t_cljs$core$async41677(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41685 = arguments.length;
switch (G__41685) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39709__auto___42961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_41706){
var state_val_41707 = (state_41706[(1)]);
if((state_val_41707 === (7))){
var inst_41702 = (state_41706[(2)]);
var state_41706__$1 = state_41706;
var statearr_41709_42962 = state_41706__$1;
(statearr_41709_42962[(2)] = inst_41702);

(statearr_41709_42962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41707 === (1))){
var state_41706__$1 = state_41706;
var statearr_41711_42963 = state_41706__$1;
(statearr_41711_42963[(2)] = null);

(statearr_41711_42963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41707 === (4))){
var inst_41688 = (state_41706[(7)]);
var inst_41688__$1 = (state_41706[(2)]);
var inst_41689 = (inst_41688__$1 == null);
var state_41706__$1 = (function (){var statearr_41712 = state_41706;
(statearr_41712[(7)] = inst_41688__$1);

return statearr_41712;
})();
if(cljs.core.truth_(inst_41689)){
var statearr_41713_42964 = state_41706__$1;
(statearr_41713_42964[(1)] = (5));

} else {
var statearr_41714_42965 = state_41706__$1;
(statearr_41714_42965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41707 === (6))){
var inst_41688 = (state_41706[(7)]);
var inst_41693 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41688) : p.call(null,inst_41688));
var state_41706__$1 = state_41706;
if(cljs.core.truth_(inst_41693)){
var statearr_41715_42966 = state_41706__$1;
(statearr_41715_42966[(1)] = (8));

} else {
var statearr_41716_42967 = state_41706__$1;
(statearr_41716_42967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41707 === (3))){
var inst_41704 = (state_41706[(2)]);
var state_41706__$1 = state_41706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41706__$1,inst_41704);
} else {
if((state_val_41707 === (2))){
var state_41706__$1 = state_41706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41706__$1,(4),ch);
} else {
if((state_val_41707 === (11))){
var inst_41696 = (state_41706[(2)]);
var state_41706__$1 = state_41706;
var statearr_41721_42968 = state_41706__$1;
(statearr_41721_42968[(2)] = inst_41696);

(statearr_41721_42968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41707 === (9))){
var state_41706__$1 = state_41706;
var statearr_41722_42969 = state_41706__$1;
(statearr_41722_42969[(2)] = null);

(statearr_41722_42969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41707 === (5))){
var inst_41691 = cljs.core.async.close_BANG_(out);
var state_41706__$1 = state_41706;
var statearr_41723_42971 = state_41706__$1;
(statearr_41723_42971[(2)] = inst_41691);

(statearr_41723_42971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41707 === (10))){
var inst_41699 = (state_41706[(2)]);
var state_41706__$1 = (function (){var statearr_41725 = state_41706;
(statearr_41725[(8)] = inst_41699);

return statearr_41725;
})();
var statearr_41726_42972 = state_41706__$1;
(statearr_41726_42972[(2)] = null);

(statearr_41726_42972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41707 === (8))){
var inst_41688 = (state_41706[(7)]);
var state_41706__$1 = state_41706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41706__$1,(11),out,inst_41688);
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
});
return (function() {
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_41729 = [null,null,null,null,null,null,null,null,null];
(statearr_41729[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_41729[(1)] = (1));

return statearr_41729;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_41706){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_41706);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e41730){var ex__39545__auto__ = e41730;
var statearr_41731_42975 = state_41706;
(statearr_41731_42975[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_41706[(4)]))){
var statearr_41734_42976 = state_41706;
(statearr_41734_42976[(1)] = cljs.core.first((state_41706[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42977 = state_41706;
state_41706 = G__42977;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_41706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_41706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_41735 = f__39710__auto__();
(statearr_41735[(6)] = c__39709__auto___42961);

return statearr_41735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41740 = arguments.length;
switch (G__41740) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_41828){
var state_val_41829 = (state_41828[(1)]);
if((state_val_41829 === (7))){
var inst_41817 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
var statearr_41833_42980 = state_41828__$1;
(statearr_41833_42980[(2)] = inst_41817);

(statearr_41833_42980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (20))){
var inst_41787 = (state_41828[(7)]);
var inst_41798 = (state_41828[(2)]);
var inst_41799 = cljs.core.next(inst_41787);
var inst_41767 = inst_41799;
var inst_41768 = null;
var inst_41769 = (0);
var inst_41770 = (0);
var state_41828__$1 = (function (){var statearr_41837 = state_41828;
(statearr_41837[(8)] = inst_41767);

(statearr_41837[(9)] = inst_41768);

(statearr_41837[(10)] = inst_41769);

(statearr_41837[(11)] = inst_41770);

(statearr_41837[(12)] = inst_41798);

return statearr_41837;
})();
var statearr_41838_42981 = state_41828__$1;
(statearr_41838_42981[(2)] = null);

(statearr_41838_42981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (1))){
var state_41828__$1 = state_41828;
var statearr_41839_42982 = state_41828__$1;
(statearr_41839_42982[(2)] = null);

(statearr_41839_42982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (4))){
var inst_41743 = (state_41828[(13)]);
var inst_41743__$1 = (state_41828[(2)]);
var inst_41751 = (inst_41743__$1 == null);
var state_41828__$1 = (function (){var statearr_41840 = state_41828;
(statearr_41840[(13)] = inst_41743__$1);

return statearr_41840;
})();
if(cljs.core.truth_(inst_41751)){
var statearr_41841_42983 = state_41828__$1;
(statearr_41841_42983[(1)] = (5));

} else {
var statearr_41842_42984 = state_41828__$1;
(statearr_41842_42984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (15))){
var state_41828__$1 = state_41828;
var statearr_41846_42985 = state_41828__$1;
(statearr_41846_42985[(2)] = null);

(statearr_41846_42985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (21))){
var state_41828__$1 = state_41828;
var statearr_41847_42986 = state_41828__$1;
(statearr_41847_42986[(2)] = null);

(statearr_41847_42986[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (13))){
var inst_41767 = (state_41828[(8)]);
var inst_41768 = (state_41828[(9)]);
var inst_41769 = (state_41828[(10)]);
var inst_41770 = (state_41828[(11)]);
var inst_41780 = (state_41828[(2)]);
var inst_41784 = (inst_41770 + (1));
var tmp41843 = inst_41767;
var tmp41844 = inst_41768;
var tmp41845 = inst_41769;
var inst_41767__$1 = tmp41843;
var inst_41768__$1 = tmp41844;
var inst_41769__$1 = tmp41845;
var inst_41770__$1 = inst_41784;
var state_41828__$1 = (function (){var statearr_41848 = state_41828;
(statearr_41848[(8)] = inst_41767__$1);

(statearr_41848[(14)] = inst_41780);

(statearr_41848[(9)] = inst_41768__$1);

(statearr_41848[(10)] = inst_41769__$1);

(statearr_41848[(11)] = inst_41770__$1);

return statearr_41848;
})();
var statearr_41850_42987 = state_41828__$1;
(statearr_41850_42987[(2)] = null);

(statearr_41850_42987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (22))){
var state_41828__$1 = state_41828;
var statearr_41854_42988 = state_41828__$1;
(statearr_41854_42988[(2)] = null);

(statearr_41854_42988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (6))){
var inst_41743 = (state_41828[(13)]);
var inst_41765 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41743) : f.call(null,inst_41743));
var inst_41766 = cljs.core.seq(inst_41765);
var inst_41767 = inst_41766;
var inst_41768 = null;
var inst_41769 = (0);
var inst_41770 = (0);
var state_41828__$1 = (function (){var statearr_41855 = state_41828;
(statearr_41855[(8)] = inst_41767);

(statearr_41855[(9)] = inst_41768);

(statearr_41855[(10)] = inst_41769);

(statearr_41855[(11)] = inst_41770);

return statearr_41855;
})();
var statearr_41856_42989 = state_41828__$1;
(statearr_41856_42989[(2)] = null);

(statearr_41856_42989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (17))){
var inst_41787 = (state_41828[(7)]);
var inst_41791 = cljs.core.chunk_first(inst_41787);
var inst_41792 = cljs.core.chunk_rest(inst_41787);
var inst_41793 = cljs.core.count(inst_41791);
var inst_41767 = inst_41792;
var inst_41768 = inst_41791;
var inst_41769 = inst_41793;
var inst_41770 = (0);
var state_41828__$1 = (function (){var statearr_41857 = state_41828;
(statearr_41857[(8)] = inst_41767);

(statearr_41857[(9)] = inst_41768);

(statearr_41857[(10)] = inst_41769);

(statearr_41857[(11)] = inst_41770);

return statearr_41857;
})();
var statearr_41858_42990 = state_41828__$1;
(statearr_41858_42990[(2)] = null);

(statearr_41858_42990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (3))){
var inst_41819 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41828__$1,inst_41819);
} else {
if((state_val_41829 === (12))){
var inst_41807 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
var statearr_41859_42991 = state_41828__$1;
(statearr_41859_42991[(2)] = inst_41807);

(statearr_41859_42991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (2))){
var state_41828__$1 = state_41828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41828__$1,(4),in$);
} else {
if((state_val_41829 === (23))){
var inst_41815 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
var statearr_41860_42992 = state_41828__$1;
(statearr_41860_42992[(2)] = inst_41815);

(statearr_41860_42992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (19))){
var inst_41802 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
var statearr_41865_42993 = state_41828__$1;
(statearr_41865_42993[(2)] = inst_41802);

(statearr_41865_42993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (11))){
var inst_41767 = (state_41828[(8)]);
var inst_41787 = (state_41828[(7)]);
var inst_41787__$1 = cljs.core.seq(inst_41767);
var state_41828__$1 = (function (){var statearr_41866 = state_41828;
(statearr_41866[(7)] = inst_41787__$1);

return statearr_41866;
})();
if(inst_41787__$1){
var statearr_41867_42994 = state_41828__$1;
(statearr_41867_42994[(1)] = (14));

} else {
var statearr_41868_42995 = state_41828__$1;
(statearr_41868_42995[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (9))){
var inst_41809 = (state_41828[(2)]);
var inst_41810 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_41828__$1 = (function (){var statearr_41871 = state_41828;
(statearr_41871[(15)] = inst_41809);

return statearr_41871;
})();
if(cljs.core.truth_(inst_41810)){
var statearr_41872_42996 = state_41828__$1;
(statearr_41872_42996[(1)] = (21));

} else {
var statearr_41873_42997 = state_41828__$1;
(statearr_41873_42997[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (5))){
var inst_41753 = cljs.core.async.close_BANG_(out);
var state_41828__$1 = state_41828;
var statearr_41875_42999 = state_41828__$1;
(statearr_41875_42999[(2)] = inst_41753);

(statearr_41875_42999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (14))){
var inst_41787 = (state_41828[(7)]);
var inst_41789 = cljs.core.chunked_seq_QMARK_(inst_41787);
var state_41828__$1 = state_41828;
if(inst_41789){
var statearr_41877_43003 = state_41828__$1;
(statearr_41877_43003[(1)] = (17));

} else {
var statearr_41878_43004 = state_41828__$1;
(statearr_41878_43004[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (16))){
var inst_41805 = (state_41828[(2)]);
var state_41828__$1 = state_41828;
var statearr_41879_43005 = state_41828__$1;
(statearr_41879_43005[(2)] = inst_41805);

(statearr_41879_43005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41829 === (10))){
var inst_41768 = (state_41828[(9)]);
var inst_41770 = (state_41828[(11)]);
var inst_41775 = cljs.core._nth(inst_41768,inst_41770);
var state_41828__$1 = state_41828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41828__$1,(13),out,inst_41775);
} else {
if((state_val_41829 === (18))){
var inst_41787 = (state_41828[(7)]);
var inst_41796 = cljs.core.first(inst_41787);
var state_41828__$1 = state_41828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41828__$1,(20),out,inst_41796);
} else {
if((state_val_41829 === (8))){
var inst_41769 = (state_41828[(10)]);
var inst_41770 = (state_41828[(11)]);
var inst_41772 = (inst_41770 < inst_41769);
var inst_41773 = inst_41772;
var state_41828__$1 = state_41828;
if(cljs.core.truth_(inst_41773)){
var statearr_41880_43010 = state_41828__$1;
(statearr_41880_43010[(1)] = (10));

} else {
var statearr_41881_43011 = state_41828__$1;
(statearr_41881_43011[(1)] = (11));

}

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____0 = (function (){
var statearr_41882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41882[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__);

(statearr_41882[(1)] = (1));

return statearr_41882;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____1 = (function (state_41828){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_41828);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e41883){var ex__39545__auto__ = e41883;
var statearr_41884_43012 = state_41828;
(statearr_41884_43012[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_41828[(4)]))){
var statearr_41885_43013 = state_41828;
(statearr_41885_43013[(1)] = cljs.core.first((state_41828[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43015 = state_41828;
state_41828 = G__43015;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__ = function(state_41828){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____1.call(this,state_41828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_41887 = f__39710__auto__();
(statearr_41887[(6)] = c__39709__auto__);

return statearr_41887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));

return c__39709__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41890 = arguments.length;
switch (G__41890) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41897 = arguments.length;
switch (G__41897) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41899 = arguments.length;
switch (G__41899) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39709__auto___43024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_41923){
var state_val_41924 = (state_41923[(1)]);
if((state_val_41924 === (7))){
var inst_41918 = (state_41923[(2)]);
var state_41923__$1 = state_41923;
var statearr_41925_43025 = state_41923__$1;
(statearr_41925_43025[(2)] = inst_41918);

(statearr_41925_43025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (1))){
var inst_41900 = null;
var state_41923__$1 = (function (){var statearr_41926 = state_41923;
(statearr_41926[(7)] = inst_41900);

return statearr_41926;
})();
var statearr_41929_43030 = state_41923__$1;
(statearr_41929_43030[(2)] = null);

(statearr_41929_43030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (4))){
var inst_41903 = (state_41923[(8)]);
var inst_41903__$1 = (state_41923[(2)]);
var inst_41904 = (inst_41903__$1 == null);
var inst_41905 = cljs.core.not(inst_41904);
var state_41923__$1 = (function (){var statearr_41933 = state_41923;
(statearr_41933[(8)] = inst_41903__$1);

return statearr_41933;
})();
if(inst_41905){
var statearr_41934_43031 = state_41923__$1;
(statearr_41934_43031[(1)] = (5));

} else {
var statearr_41935_43032 = state_41923__$1;
(statearr_41935_43032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (6))){
var state_41923__$1 = state_41923;
var statearr_41937_43033 = state_41923__$1;
(statearr_41937_43033[(2)] = null);

(statearr_41937_43033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (3))){
var inst_41920 = (state_41923[(2)]);
var inst_41921 = cljs.core.async.close_BANG_(out);
var state_41923__$1 = (function (){var statearr_41939 = state_41923;
(statearr_41939[(9)] = inst_41920);

return statearr_41939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41923__$1,inst_41921);
} else {
if((state_val_41924 === (2))){
var state_41923__$1 = state_41923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41923__$1,(4),ch);
} else {
if((state_val_41924 === (11))){
var inst_41903 = (state_41923[(8)]);
var inst_41912 = (state_41923[(2)]);
var inst_41900 = inst_41903;
var state_41923__$1 = (function (){var statearr_41940 = state_41923;
(statearr_41940[(7)] = inst_41900);

(statearr_41940[(10)] = inst_41912);

return statearr_41940;
})();
var statearr_41941_43034 = state_41923__$1;
(statearr_41941_43034[(2)] = null);

(statearr_41941_43034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (9))){
var inst_41903 = (state_41923[(8)]);
var state_41923__$1 = state_41923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41923__$1,(11),out,inst_41903);
} else {
if((state_val_41924 === (5))){
var inst_41900 = (state_41923[(7)]);
var inst_41903 = (state_41923[(8)]);
var inst_41907 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41903,inst_41900);
var state_41923__$1 = state_41923;
if(inst_41907){
var statearr_41943_43035 = state_41923__$1;
(statearr_41943_43035[(1)] = (8));

} else {
var statearr_41944_43036 = state_41923__$1;
(statearr_41944_43036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (10))){
var inst_41915 = (state_41923[(2)]);
var state_41923__$1 = state_41923;
var statearr_41946_43037 = state_41923__$1;
(statearr_41946_43037[(2)] = inst_41915);

(statearr_41946_43037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41924 === (8))){
var inst_41900 = (state_41923[(7)]);
var tmp41942 = inst_41900;
var inst_41900__$1 = tmp41942;
var state_41923__$1 = (function (){var statearr_41948 = state_41923;
(statearr_41948[(7)] = inst_41900__$1);

return statearr_41948;
})();
var statearr_41949_43038 = state_41923__$1;
(statearr_41949_43038[(2)] = null);

(statearr_41949_43038[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_41953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41953[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_41953[(1)] = (1));

return statearr_41953;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_41923){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_41923);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e41954){var ex__39545__auto__ = e41954;
var statearr_41955_43039 = state_41923;
(statearr_41955_43039[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_41923[(4)]))){
var statearr_41956_43040 = state_41923;
(statearr_41956_43040[(1)] = cljs.core.first((state_41923[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43041 = state_41923;
state_41923 = G__43041;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_41923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_41923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_41957 = f__39710__auto__();
(statearr_41957[(6)] = c__39709__auto___43024);

return statearr_41957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41959 = arguments.length;
switch (G__41959) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39709__auto___43043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_41997){
var state_val_41998 = (state_41997[(1)]);
if((state_val_41998 === (7))){
var inst_41993 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42003_43044 = state_41997__$1;
(statearr_42003_43044[(2)] = inst_41993);

(statearr_42003_43044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (1))){
var inst_41960 = (new Array(n));
var inst_41961 = inst_41960;
var inst_41962 = (0);
var state_41997__$1 = (function (){var statearr_42004 = state_41997;
(statearr_42004[(7)] = inst_41962);

(statearr_42004[(8)] = inst_41961);

return statearr_42004;
})();
var statearr_42005_43045 = state_41997__$1;
(statearr_42005_43045[(2)] = null);

(statearr_42005_43045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (4))){
var inst_41965 = (state_41997[(9)]);
var inst_41965__$1 = (state_41997[(2)]);
var inst_41966 = (inst_41965__$1 == null);
var inst_41967 = cljs.core.not(inst_41966);
var state_41997__$1 = (function (){var statearr_42006 = state_41997;
(statearr_42006[(9)] = inst_41965__$1);

return statearr_42006;
})();
if(inst_41967){
var statearr_42007_43046 = state_41997__$1;
(statearr_42007_43046[(1)] = (5));

} else {
var statearr_42008_43047 = state_41997__$1;
(statearr_42008_43047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (15))){
var inst_41987 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42009_43048 = state_41997__$1;
(statearr_42009_43048[(2)] = inst_41987);

(statearr_42009_43048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (13))){
var state_41997__$1 = state_41997;
var statearr_42010_43049 = state_41997__$1;
(statearr_42010_43049[(2)] = null);

(statearr_42010_43049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (6))){
var inst_41962 = (state_41997[(7)]);
var inst_41983 = (inst_41962 > (0));
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41983)){
var statearr_42011_43050 = state_41997__$1;
(statearr_42011_43050[(1)] = (12));

} else {
var statearr_42012_43051 = state_41997__$1;
(statearr_42012_43051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (3))){
var inst_41995 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41997__$1,inst_41995);
} else {
if((state_val_41998 === (12))){
var inst_41961 = (state_41997[(8)]);
var inst_41985 = cljs.core.vec(inst_41961);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41997__$1,(15),out,inst_41985);
} else {
if((state_val_41998 === (2))){
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41997__$1,(4),ch);
} else {
if((state_val_41998 === (11))){
var inst_41977 = (state_41997[(2)]);
var inst_41978 = (new Array(n));
var inst_41961 = inst_41978;
var inst_41962 = (0);
var state_41997__$1 = (function (){var statearr_42017 = state_41997;
(statearr_42017[(7)] = inst_41962);

(statearr_42017[(10)] = inst_41977);

(statearr_42017[(8)] = inst_41961);

return statearr_42017;
})();
var statearr_42018_43053 = state_41997__$1;
(statearr_42018_43053[(2)] = null);

(statearr_42018_43053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (9))){
var inst_41961 = (state_41997[(8)]);
var inst_41975 = cljs.core.vec(inst_41961);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41997__$1,(11),out,inst_41975);
} else {
if((state_val_41998 === (5))){
var inst_41962 = (state_41997[(7)]);
var inst_41970 = (state_41997[(11)]);
var inst_41961 = (state_41997[(8)]);
var inst_41965 = (state_41997[(9)]);
var inst_41969 = (inst_41961[inst_41962] = inst_41965);
var inst_41970__$1 = (inst_41962 + (1));
var inst_41971 = (inst_41970__$1 < n);
var state_41997__$1 = (function (){var statearr_42019 = state_41997;
(statearr_42019[(12)] = inst_41969);

(statearr_42019[(11)] = inst_41970__$1);

return statearr_42019;
})();
if(cljs.core.truth_(inst_41971)){
var statearr_42020_43055 = state_41997__$1;
(statearr_42020_43055[(1)] = (8));

} else {
var statearr_42021_43056 = state_41997__$1;
(statearr_42021_43056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (14))){
var inst_41990 = (state_41997[(2)]);
var inst_41991 = cljs.core.async.close_BANG_(out);
var state_41997__$1 = (function (){var statearr_42023 = state_41997;
(statearr_42023[(13)] = inst_41990);

return statearr_42023;
})();
var statearr_42024_43057 = state_41997__$1;
(statearr_42024_43057[(2)] = inst_41991);

(statearr_42024_43057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (10))){
var inst_41981 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42025_43058 = state_41997__$1;
(statearr_42025_43058[(2)] = inst_41981);

(statearr_42025_43058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (8))){
var inst_41970 = (state_41997[(11)]);
var inst_41961 = (state_41997[(8)]);
var tmp42022 = inst_41961;
var inst_41961__$1 = tmp42022;
var inst_41962 = inst_41970;
var state_41997__$1 = (function (){var statearr_42026 = state_41997;
(statearr_42026[(7)] = inst_41962);

(statearr_42026[(8)] = inst_41961__$1);

return statearr_42026;
})();
var statearr_42027_43059 = state_41997__$1;
(statearr_42027_43059[(2)] = null);

(statearr_42027_43059[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_42028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42028[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_42028[(1)] = (1));

return statearr_42028;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_41997){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_41997);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e42029){var ex__39545__auto__ = e42029;
var statearr_42030_43060 = state_41997;
(statearr_42030_43060[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_41997[(4)]))){
var statearr_42031_43061 = state_41997;
(statearr_42031_43061[(1)] = cljs.core.first((state_41997[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43065 = state_41997;
state_41997 = G__43065;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_41997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_41997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_42032 = f__39710__auto__();
(statearr_42032[(6)] = c__39709__auto___43043);

return statearr_42032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42034 = arguments.length;
switch (G__42034) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39709__auto___43078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_42079){
var state_val_42080 = (state_42079[(1)]);
if((state_val_42080 === (7))){
var inst_42075 = (state_42079[(2)]);
var state_42079__$1 = state_42079;
var statearr_42081_43079 = state_42079__$1;
(statearr_42081_43079[(2)] = inst_42075);

(statearr_42081_43079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (1))){
var inst_42035 = [];
var inst_42036 = inst_42035;
var inst_42037 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42079__$1 = (function (){var statearr_42083 = state_42079;
(statearr_42083[(7)] = inst_42037);

(statearr_42083[(8)] = inst_42036);

return statearr_42083;
})();
var statearr_42084_43081 = state_42079__$1;
(statearr_42084_43081[(2)] = null);

(statearr_42084_43081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (4))){
var inst_42040 = (state_42079[(9)]);
var inst_42040__$1 = (state_42079[(2)]);
var inst_42041 = (inst_42040__$1 == null);
var inst_42042 = cljs.core.not(inst_42041);
var state_42079__$1 = (function (){var statearr_42086 = state_42079;
(statearr_42086[(9)] = inst_42040__$1);

return statearr_42086;
})();
if(inst_42042){
var statearr_42087_43082 = state_42079__$1;
(statearr_42087_43082[(1)] = (5));

} else {
var statearr_42088_43083 = state_42079__$1;
(statearr_42088_43083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (15))){
var inst_42036 = (state_42079[(8)]);
var inst_42067 = cljs.core.vec(inst_42036);
var state_42079__$1 = state_42079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42079__$1,(18),out,inst_42067);
} else {
if((state_val_42080 === (13))){
var inst_42062 = (state_42079[(2)]);
var state_42079__$1 = state_42079;
var statearr_42089_43087 = state_42079__$1;
(statearr_42089_43087[(2)] = inst_42062);

(statearr_42089_43087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (6))){
var inst_42036 = (state_42079[(8)]);
var inst_42064 = inst_42036.length;
var inst_42065 = (inst_42064 > (0));
var state_42079__$1 = state_42079;
if(cljs.core.truth_(inst_42065)){
var statearr_42090_43088 = state_42079__$1;
(statearr_42090_43088[(1)] = (15));

} else {
var statearr_42091_43090 = state_42079__$1;
(statearr_42091_43090[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (17))){
var inst_42072 = (state_42079[(2)]);
var inst_42073 = cljs.core.async.close_BANG_(out);
var state_42079__$1 = (function (){var statearr_42092 = state_42079;
(statearr_42092[(10)] = inst_42072);

return statearr_42092;
})();
var statearr_42093_43091 = state_42079__$1;
(statearr_42093_43091[(2)] = inst_42073);

(statearr_42093_43091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (3))){
var inst_42077 = (state_42079[(2)]);
var state_42079__$1 = state_42079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42079__$1,inst_42077);
} else {
if((state_val_42080 === (12))){
var inst_42036 = (state_42079[(8)]);
var inst_42055 = cljs.core.vec(inst_42036);
var state_42079__$1 = state_42079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42079__$1,(14),out,inst_42055);
} else {
if((state_val_42080 === (2))){
var state_42079__$1 = state_42079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42079__$1,(4),ch);
} else {
if((state_val_42080 === (11))){
var inst_42044 = (state_42079[(11)]);
var inst_42036 = (state_42079[(8)]);
var inst_42040 = (state_42079[(9)]);
var inst_42052 = inst_42036.push(inst_42040);
var tmp42094 = inst_42036;
var inst_42036__$1 = tmp42094;
var inst_42037 = inst_42044;
var state_42079__$1 = (function (){var statearr_42098 = state_42079;
(statearr_42098[(7)] = inst_42037);

(statearr_42098[(12)] = inst_42052);

(statearr_42098[(8)] = inst_42036__$1);

return statearr_42098;
})();
var statearr_42099_43096 = state_42079__$1;
(statearr_42099_43096[(2)] = null);

(statearr_42099_43096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (9))){
var inst_42037 = (state_42079[(7)]);
var inst_42048 = cljs.core.keyword_identical_QMARK_(inst_42037,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_42079__$1 = state_42079;
var statearr_42100_43097 = state_42079__$1;
(statearr_42100_43097[(2)] = inst_42048);

(statearr_42100_43097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (5))){
var inst_42045 = (state_42079[(13)]);
var inst_42044 = (state_42079[(11)]);
var inst_42037 = (state_42079[(7)]);
var inst_42040 = (state_42079[(9)]);
var inst_42044__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42040) : f.call(null,inst_42040));
var inst_42045__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42044__$1,inst_42037);
var state_42079__$1 = (function (){var statearr_42101 = state_42079;
(statearr_42101[(13)] = inst_42045__$1);

(statearr_42101[(11)] = inst_42044__$1);

return statearr_42101;
})();
if(inst_42045__$1){
var statearr_42102_43102 = state_42079__$1;
(statearr_42102_43102[(1)] = (8));

} else {
var statearr_42103_43103 = state_42079__$1;
(statearr_42103_43103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (14))){
var inst_42044 = (state_42079[(11)]);
var inst_42040 = (state_42079[(9)]);
var inst_42057 = (state_42079[(2)]);
var inst_42058 = [];
var inst_42059 = inst_42058.push(inst_42040);
var inst_42036 = inst_42058;
var inst_42037 = inst_42044;
var state_42079__$1 = (function (){var statearr_42104 = state_42079;
(statearr_42104[(7)] = inst_42037);

(statearr_42104[(14)] = inst_42057);

(statearr_42104[(8)] = inst_42036);

(statearr_42104[(15)] = inst_42059);

return statearr_42104;
})();
var statearr_42105_43104 = state_42079__$1;
(statearr_42105_43104[(2)] = null);

(statearr_42105_43104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (16))){
var state_42079__$1 = state_42079;
var statearr_42106_43105 = state_42079__$1;
(statearr_42106_43105[(2)] = null);

(statearr_42106_43105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (10))){
var inst_42050 = (state_42079[(2)]);
var state_42079__$1 = state_42079;
if(cljs.core.truth_(inst_42050)){
var statearr_42107_43107 = state_42079__$1;
(statearr_42107_43107[(1)] = (11));

} else {
var statearr_42108_43108 = state_42079__$1;
(statearr_42108_43108[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (18))){
var inst_42069 = (state_42079[(2)]);
var state_42079__$1 = state_42079;
var statearr_42109_43109 = state_42079__$1;
(statearr_42109_43109[(2)] = inst_42069);

(statearr_42109_43109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42080 === (8))){
var inst_42045 = (state_42079[(13)]);
var state_42079__$1 = state_42079;
var statearr_42110_43114 = state_42079__$1;
(statearr_42110_43114[(2)] = inst_42045);

(statearr_42110_43114[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__39542__auto__ = null;
var cljs$core$async$state_machine__39542__auto____0 = (function (){
var statearr_42111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42111[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_42111[(1)] = (1));

return statearr_42111;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_42079){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_42079);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e42112){var ex__39545__auto__ = e42112;
var statearr_42113_43116 = state_42079;
(statearr_42113_43116[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_42079[(4)]))){
var statearr_42114_43117 = state_42079;
(statearr_42114_43117[(1)] = cljs.core.first((state_42079[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43118 = state_42079;
state_42079 = G__43118;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_42079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_42079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_42115 = f__39710__auto__();
(statearr_42115[(6)] = c__39709__auto___43078);

return statearr_42115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
