goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51974 = arguments.length;
switch (G__51974) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51988 = (function (f,blockable,meta51989){
this.f = f;
this.blockable = blockable;
this.meta51989 = meta51989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51990,meta51989__$1){
var self__ = this;
var _51990__$1 = this;
return (new cljs.core.async.t_cljs$core$async51988(self__.f,self__.blockable,meta51989__$1));
}));

(cljs.core.async.t_cljs$core$async51988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51990){
var self__ = this;
var _51990__$1 = this;
return self__.meta51989;
}));

(cljs.core.async.t_cljs$core$async51988.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51988.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async51988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async51988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51989","meta51989",-768573325,null)], null);
}));

(cljs.core.async.t_cljs$core$async51988.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51988");

(cljs.core.async.t_cljs$core$async51988.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51988");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51988.
 */
cljs.core.async.__GT_t_cljs$core$async51988 = (function cljs$core$async$__GT_t_cljs$core$async51988(f__$1,blockable__$1,meta51989){
return (new cljs.core.async.t_cljs$core$async51988(f__$1,blockable__$1,meta51989));
});

}

return (new cljs.core.async.t_cljs$core$async51988(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51998 = arguments.length;
switch (G__51998) {
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
var G__52008 = arguments.length;
switch (G__52008) {
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
var G__52010 = arguments.length;
switch (G__52010) {
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
var val_54260 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54260) : fn1.call(null,val_54260));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54260) : fn1.call(null,val_54260));
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
var G__52013 = arguments.length;
switch (G__52013) {
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
var n__4695__auto___54266 = n;
var x_54267 = (0);
while(true){
if((x_54267 < n__4695__auto___54266)){
(a[x_54267] = x_54267);

var G__54268 = (x_54267 + (1));
x_54267 = G__54268;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52020 = (function (flag,meta52021){
this.flag = flag;
this.meta52021 = meta52021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52022,meta52021__$1){
var self__ = this;
var _52022__$1 = this;
return (new cljs.core.async.t_cljs$core$async52020(self__.flag,meta52021__$1));
}));

(cljs.core.async.t_cljs$core$async52020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52022){
var self__ = this;
var _52022__$1 = this;
return self__.meta52021;
}));

(cljs.core.async.t_cljs$core$async52020.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async52020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async52020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52021","meta52021",-1955009208,null)], null);
}));

(cljs.core.async.t_cljs$core$async52020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52020");

(cljs.core.async.t_cljs$core$async52020.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async52020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52020.
 */
cljs.core.async.__GT_t_cljs$core$async52020 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52020(flag__$1,meta52021){
return (new cljs.core.async.t_cljs$core$async52020(flag__$1,meta52021));
});

}

return (new cljs.core.async.t_cljs$core$async52020(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52024 = (function (flag,cb,meta52025){
this.flag = flag;
this.cb = cb;
this.meta52025 = meta52025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52026,meta52025__$1){
var self__ = this;
var _52026__$1 = this;
return (new cljs.core.async.t_cljs$core$async52024(self__.flag,self__.cb,meta52025__$1));
}));

(cljs.core.async.t_cljs$core$async52024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52026){
var self__ = this;
var _52026__$1 = this;
return self__.meta52025;
}));

(cljs.core.async.t_cljs$core$async52024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async52024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async52024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52025","meta52025",-1206095153,null)], null);
}));

(cljs.core.async.t_cljs$core$async52024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52024");

(cljs.core.async.t_cljs$core$async52024.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async52024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52024.
 */
cljs.core.async.__GT_t_cljs$core$async52024 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52024(flag__$1,cb__$1,meta52025){
return (new cljs.core.async.t_cljs$core$async52024(flag__$1,cb__$1,meta52025));
});

}

return (new cljs.core.async.t_cljs$core$async52024(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__52035_SHARP_){
var G__52041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52035_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52041) : fret.call(null,G__52041));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52036_SHARP_){
var G__52042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52036_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52042) : fret.call(null,G__52042));
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
var G__54276 = (i + (1));
i = G__54276;
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
var len__4818__auto___54277 = arguments.length;
var i__4819__auto___54278 = (0);
while(true){
if((i__4819__auto___54278 < len__4818__auto___54277)){
args__4824__auto__.push((arguments[i__4819__auto___54278]));

var G__54279 = (i__4819__auto___54278 + (1));
i__4819__auto___54278 = G__54279;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52048){
var map__52049 = p__52048;
var map__52049__$1 = cljs.core.__destructure_map(map__52049);
var opts = map__52049__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52045){
var G__52046 = cljs.core.first(seq52045);
var seq52045__$1 = cljs.core.next(seq52045);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52046,seq52045__$1);
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
var G__52057 = arguments.length;
switch (G__52057) {
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
var c__39709__auto___54283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_52081){
var state_val_52082 = (state_52081[(1)]);
if((state_val_52082 === (7))){
var inst_52077 = (state_52081[(2)]);
var state_52081__$1 = state_52081;
var statearr_52088_54285 = state_52081__$1;
(statearr_52088_54285[(2)] = inst_52077);

(statearr_52088_54285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (1))){
var state_52081__$1 = state_52081;
var statearr_52090_54287 = state_52081__$1;
(statearr_52090_54287[(2)] = null);

(statearr_52090_54287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (4))){
var inst_52060 = (state_52081[(7)]);
var inst_52060__$1 = (state_52081[(2)]);
var inst_52061 = (inst_52060__$1 == null);
var state_52081__$1 = (function (){var statearr_52091 = state_52081;
(statearr_52091[(7)] = inst_52060__$1);

return statearr_52091;
})();
if(cljs.core.truth_(inst_52061)){
var statearr_52092_54288 = state_52081__$1;
(statearr_52092_54288[(1)] = (5));

} else {
var statearr_52093_54289 = state_52081__$1;
(statearr_52093_54289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (13))){
var state_52081__$1 = state_52081;
var statearr_52094_54290 = state_52081__$1;
(statearr_52094_54290[(2)] = null);

(statearr_52094_54290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (6))){
var inst_52060 = (state_52081[(7)]);
var state_52081__$1 = state_52081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52081__$1,(11),to,inst_52060);
} else {
if((state_val_52082 === (3))){
var inst_52079 = (state_52081[(2)]);
var state_52081__$1 = state_52081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52081__$1,inst_52079);
} else {
if((state_val_52082 === (12))){
var state_52081__$1 = state_52081;
var statearr_52096_54293 = state_52081__$1;
(statearr_52096_54293[(2)] = null);

(statearr_52096_54293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (2))){
var state_52081__$1 = state_52081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52081__$1,(4),from);
} else {
if((state_val_52082 === (11))){
var inst_52070 = (state_52081[(2)]);
var state_52081__$1 = state_52081;
if(cljs.core.truth_(inst_52070)){
var statearr_52097_54294 = state_52081__$1;
(statearr_52097_54294[(1)] = (12));

} else {
var statearr_52098_54295 = state_52081__$1;
(statearr_52098_54295[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (9))){
var state_52081__$1 = state_52081;
var statearr_52099_54296 = state_52081__$1;
(statearr_52099_54296[(2)] = null);

(statearr_52099_54296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (5))){
var state_52081__$1 = state_52081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52100_54300 = state_52081__$1;
(statearr_52100_54300[(1)] = (8));

} else {
var statearr_52105_54301 = state_52081__$1;
(statearr_52105_54301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (14))){
var inst_52075 = (state_52081[(2)]);
var state_52081__$1 = state_52081;
var statearr_52106_54302 = state_52081__$1;
(statearr_52106_54302[(2)] = inst_52075);

(statearr_52106_54302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (10))){
var inst_52067 = (state_52081[(2)]);
var state_52081__$1 = state_52081;
var statearr_52109_54303 = state_52081__$1;
(statearr_52109_54303[(2)] = inst_52067);

(statearr_52109_54303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (8))){
var inst_52064 = cljs.core.async.close_BANG_(to);
var state_52081__$1 = state_52081;
var statearr_52110_54304 = state_52081__$1;
(statearr_52110_54304[(2)] = inst_52064);

(statearr_52110_54304[(1)] = (10));


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
var statearr_52111 = [null,null,null,null,null,null,null,null];
(statearr_52111[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_52111[(1)] = (1));

return statearr_52111;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_52081){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52081);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52113){var ex__39545__auto__ = e52113;
var statearr_52115_54306 = state_52081;
(statearr_52115_54306[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52081[(4)]))){
var statearr_52116_54308 = state_52081;
(statearr_52116_54308[(1)] = cljs.core.first((state_52081[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54309 = state_52081;
state_52081 = G__54309;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_52081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_52081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_52117 = f__39710__auto__();
(statearr_52117[(6)] = c__39709__auto___54283);

return statearr_52117;
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
var process = (function (p__52120){
var vec__52121 = p__52120;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52121,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52121,(1),null);
var job = vec__52121;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__39709__auto___54310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_52129){
var state_val_52130 = (state_52129[(1)]);
if((state_val_52130 === (1))){
var state_52129__$1 = state_52129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52129__$1,(2),res,v);
} else {
if((state_val_52130 === (2))){
var inst_52126 = (state_52129[(2)]);
var inst_52127 = cljs.core.async.close_BANG_(res);
var state_52129__$1 = (function (){var statearr_52132 = state_52129;
(statearr_52132[(7)] = inst_52126);

return statearr_52132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52129__$1,inst_52127);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0 = (function (){
var statearr_52133 = [null,null,null,null,null,null,null,null];
(statearr_52133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__);

(statearr_52133[(1)] = (1));

return statearr_52133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1 = (function (state_52129){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52129);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52134){var ex__39545__auto__ = e52134;
var statearr_52135_54311 = state_52129;
(statearr_52135_54311[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52129[(4)]))){
var statearr_52137_54312 = state_52129;
(statearr_52137_54312[(1)] = cljs.core.first((state_52129[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54314 = state_52129;
state_52129 = G__54314;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = function(state_52129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1.call(this,state_52129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_52139 = f__39710__auto__();
(statearr_52139[(6)] = c__39709__auto___54310);

return statearr_52139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__52140){
var vec__52141 = p__52140;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52141,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52141,(1),null);
var job = vec__52141;
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
var n__4695__auto___54316 = n;
var __54317 = (0);
while(true){
if((__54317 < n__4695__auto___54316)){
var G__52144_54318 = type;
var G__52144_54319__$1 = (((G__52144_54318 instanceof cljs.core.Keyword))?G__52144_54318.fqn:null);
switch (G__52144_54319__$1) {
case "compute":
var c__39709__auto___54321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54317,c__39709__auto___54321,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async){
return (function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = ((function (__54317,c__39709__auto___54321,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async){
return (function (state_52163){
var state_val_52164 = (state_52163[(1)]);
if((state_val_52164 === (1))){
var state_52163__$1 = state_52163;
var statearr_52168_54322 = state_52163__$1;
(statearr_52168_54322[(2)] = null);

(statearr_52168_54322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52164 === (2))){
var state_52163__$1 = state_52163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52163__$1,(4),jobs);
} else {
if((state_val_52164 === (3))){
var inst_52161 = (state_52163[(2)]);
var state_52163__$1 = state_52163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52163__$1,inst_52161);
} else {
if((state_val_52164 === (4))){
var inst_52149 = (state_52163[(2)]);
var inst_52150 = process(inst_52149);
var state_52163__$1 = state_52163;
if(cljs.core.truth_(inst_52150)){
var statearr_52175_54323 = state_52163__$1;
(statearr_52175_54323[(1)] = (5));

} else {
var statearr_52177_54324 = state_52163__$1;
(statearr_52177_54324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52164 === (5))){
var state_52163__$1 = state_52163;
var statearr_52178_54325 = state_52163__$1;
(statearr_52178_54325[(2)] = null);

(statearr_52178_54325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52164 === (6))){
var state_52163__$1 = state_52163;
var statearr_52180_54326 = state_52163__$1;
(statearr_52180_54326[(2)] = null);

(statearr_52180_54326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52164 === (7))){
var inst_52155 = (state_52163[(2)]);
var state_52163__$1 = state_52163;
var statearr_52184_54327 = state_52163__$1;
(statearr_52184_54327[(2)] = inst_52155);

(statearr_52184_54327[(1)] = (3));


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
});})(__54317,c__39709__auto___54321,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async))
;
return ((function (__54317,switch__39541__auto__,c__39709__auto___54321,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0 = (function (){
var statearr_52186 = [null,null,null,null,null,null,null];
(statearr_52186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__);

(statearr_52186[(1)] = (1));

return statearr_52186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1 = (function (state_52163){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52163);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52189){var ex__39545__auto__ = e52189;
var statearr_52190_54329 = state_52163;
(statearr_52190_54329[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52163[(4)]))){
var statearr_52191_54331 = state_52163;
(statearr_52191_54331[(1)] = cljs.core.first((state_52163[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54332 = state_52163;
state_52163 = G__54332;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = function(state_52163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1.call(this,state_52163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__;
})()
;})(__54317,switch__39541__auto__,c__39709__auto___54321,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async))
})();
var state__39711__auto__ = (function (){var statearr_52194 = f__39710__auto__();
(statearr_52194[(6)] = c__39709__auto___54321);

return statearr_52194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
});})(__54317,c__39709__auto___54321,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async))
);


break;
case "async":
var c__39709__auto___54333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54317,c__39709__auto___54333,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async){
return (function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = ((function (__54317,c__39709__auto___54333,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async){
return (function (state_52210){
var state_val_52211 = (state_52210[(1)]);
if((state_val_52211 === (1))){
var state_52210__$1 = state_52210;
var statearr_52213_54334 = state_52210__$1;
(statearr_52213_54334[(2)] = null);

(statearr_52213_54334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52211 === (2))){
var state_52210__$1 = state_52210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52210__$1,(4),jobs);
} else {
if((state_val_52211 === (3))){
var inst_52208 = (state_52210[(2)]);
var state_52210__$1 = state_52210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52210__$1,inst_52208);
} else {
if((state_val_52211 === (4))){
var inst_52199 = (state_52210[(2)]);
var inst_52200 = async(inst_52199);
var state_52210__$1 = state_52210;
if(cljs.core.truth_(inst_52200)){
var statearr_52217_54335 = state_52210__$1;
(statearr_52217_54335[(1)] = (5));

} else {
var statearr_52218_54336 = state_52210__$1;
(statearr_52218_54336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52211 === (5))){
var state_52210__$1 = state_52210;
var statearr_52220_54337 = state_52210__$1;
(statearr_52220_54337[(2)] = null);

(statearr_52220_54337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52211 === (6))){
var state_52210__$1 = state_52210;
var statearr_52221_54338 = state_52210__$1;
(statearr_52221_54338[(2)] = null);

(statearr_52221_54338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52211 === (7))){
var inst_52206 = (state_52210[(2)]);
var state_52210__$1 = state_52210;
var statearr_52222_54339 = state_52210__$1;
(statearr_52222_54339[(2)] = inst_52206);

(statearr_52222_54339[(1)] = (3));


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
});})(__54317,c__39709__auto___54333,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async))
;
return ((function (__54317,switch__39541__auto__,c__39709__auto___54333,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0 = (function (){
var statearr_52223 = [null,null,null,null,null,null,null];
(statearr_52223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__);

(statearr_52223[(1)] = (1));

return statearr_52223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1 = (function (state_52210){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52210);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52224){var ex__39545__auto__ = e52224;
var statearr_52225_54341 = state_52210;
(statearr_52225_54341[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52210[(4)]))){
var statearr_52226_54342 = state_52210;
(statearr_52226_54342[(1)] = cljs.core.first((state_52210[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54343 = state_52210;
state_52210 = G__54343;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = function(state_52210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1.call(this,state_52210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__;
})()
;})(__54317,switch__39541__auto__,c__39709__auto___54333,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async))
})();
var state__39711__auto__ = (function (){var statearr_52227 = f__39710__auto__();
(statearr_52227[(6)] = c__39709__auto___54333);

return statearr_52227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
});})(__54317,c__39709__auto___54333,G__52144_54318,G__52144_54319__$1,n__4695__auto___54316,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52144_54319__$1)].join('')));

}

var G__54344 = (__54317 + (1));
__54317 = G__54344;
continue;
} else {
}
break;
}

var c__39709__auto___54345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_52252){
var state_val_52253 = (state_52252[(1)]);
if((state_val_52253 === (7))){
var inst_52247 = (state_52252[(2)]);
var state_52252__$1 = state_52252;
var statearr_52259_54346 = state_52252__$1;
(statearr_52259_54346[(2)] = inst_52247);

(statearr_52259_54346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52253 === (1))){
var state_52252__$1 = state_52252;
var statearr_52260_54347 = state_52252__$1;
(statearr_52260_54347[(2)] = null);

(statearr_52260_54347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52253 === (4))){
var inst_52230 = (state_52252[(7)]);
var inst_52230__$1 = (state_52252[(2)]);
var inst_52231 = (inst_52230__$1 == null);
var state_52252__$1 = (function (){var statearr_52261 = state_52252;
(statearr_52261[(7)] = inst_52230__$1);

return statearr_52261;
})();
if(cljs.core.truth_(inst_52231)){
var statearr_52263_54348 = state_52252__$1;
(statearr_52263_54348[(1)] = (5));

} else {
var statearr_52264_54349 = state_52252__$1;
(statearr_52264_54349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52253 === (6))){
var inst_52230 = (state_52252[(7)]);
var inst_52235 = (state_52252[(8)]);
var inst_52235__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52237 = [inst_52230,inst_52235__$1];
var inst_52238 = (new cljs.core.PersistentVector(null,2,(5),inst_52236,inst_52237,null));
var state_52252__$1 = (function (){var statearr_52265 = state_52252;
(statearr_52265[(8)] = inst_52235__$1);

return statearr_52265;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52252__$1,(8),jobs,inst_52238);
} else {
if((state_val_52253 === (3))){
var inst_52249 = (state_52252[(2)]);
var state_52252__$1 = state_52252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52252__$1,inst_52249);
} else {
if((state_val_52253 === (2))){
var state_52252__$1 = state_52252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52252__$1,(4),from);
} else {
if((state_val_52253 === (9))){
var inst_52244 = (state_52252[(2)]);
var state_52252__$1 = (function (){var statearr_52268 = state_52252;
(statearr_52268[(9)] = inst_52244);

return statearr_52268;
})();
var statearr_52269_54354 = state_52252__$1;
(statearr_52269_54354[(2)] = null);

(statearr_52269_54354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52253 === (5))){
var inst_52233 = cljs.core.async.close_BANG_(jobs);
var state_52252__$1 = state_52252;
var statearr_52276_54355 = state_52252__$1;
(statearr_52276_54355[(2)] = inst_52233);

(statearr_52276_54355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52253 === (8))){
var inst_52235 = (state_52252[(8)]);
var inst_52240 = (state_52252[(2)]);
var state_52252__$1 = (function (){var statearr_52277 = state_52252;
(statearr_52277[(10)] = inst_52240);

return statearr_52277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52252__$1,(9),results,inst_52235);
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
var statearr_52279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__);

(statearr_52279[(1)] = (1));

return statearr_52279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1 = (function (state_52252){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52252);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52280){var ex__39545__auto__ = e52280;
var statearr_52281_54357 = state_52252;
(statearr_52281_54357[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52252[(4)]))){
var statearr_52282_54358 = state_52252;
(statearr_52282_54358[(1)] = cljs.core.first((state_52252[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54359 = state_52252;
state_52252 = G__54359;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = function(state_52252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1.call(this,state_52252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_52283 = f__39710__auto__();
(statearr_52283[(6)] = c__39709__auto___54345);

return statearr_52283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


var c__39709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_52321){
var state_val_52322 = (state_52321[(1)]);
if((state_val_52322 === (7))){
var inst_52317 = (state_52321[(2)]);
var state_52321__$1 = state_52321;
var statearr_52325_54360 = state_52321__$1;
(statearr_52325_54360[(2)] = inst_52317);

(statearr_52325_54360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (20))){
var state_52321__$1 = state_52321;
var statearr_52326_54361 = state_52321__$1;
(statearr_52326_54361[(2)] = null);

(statearr_52326_54361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (1))){
var state_52321__$1 = state_52321;
var statearr_52330_54362 = state_52321__$1;
(statearr_52330_54362[(2)] = null);

(statearr_52330_54362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (4))){
var inst_52286 = (state_52321[(7)]);
var inst_52286__$1 = (state_52321[(2)]);
var inst_52287 = (inst_52286__$1 == null);
var state_52321__$1 = (function (){var statearr_52332 = state_52321;
(statearr_52332[(7)] = inst_52286__$1);

return statearr_52332;
})();
if(cljs.core.truth_(inst_52287)){
var statearr_52333_54363 = state_52321__$1;
(statearr_52333_54363[(1)] = (5));

} else {
var statearr_52334_54364 = state_52321__$1;
(statearr_52334_54364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (15))){
var inst_52299 = (state_52321[(8)]);
var state_52321__$1 = state_52321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52321__$1,(18),to,inst_52299);
} else {
if((state_val_52322 === (21))){
var inst_52312 = (state_52321[(2)]);
var state_52321__$1 = state_52321;
var statearr_52340_54365 = state_52321__$1;
(statearr_52340_54365[(2)] = inst_52312);

(statearr_52340_54365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (13))){
var inst_52314 = (state_52321[(2)]);
var state_52321__$1 = (function (){var statearr_52341 = state_52321;
(statearr_52341[(9)] = inst_52314);

return statearr_52341;
})();
var statearr_52342_54366 = state_52321__$1;
(statearr_52342_54366[(2)] = null);

(statearr_52342_54366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (6))){
var inst_52286 = (state_52321[(7)]);
var state_52321__$1 = state_52321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52321__$1,(11),inst_52286);
} else {
if((state_val_52322 === (17))){
var inst_52307 = (state_52321[(2)]);
var state_52321__$1 = state_52321;
if(cljs.core.truth_(inst_52307)){
var statearr_52343_54370 = state_52321__$1;
(statearr_52343_54370[(1)] = (19));

} else {
var statearr_52345_54371 = state_52321__$1;
(statearr_52345_54371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (3))){
var inst_52319 = (state_52321[(2)]);
var state_52321__$1 = state_52321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52321__$1,inst_52319);
} else {
if((state_val_52322 === (12))){
var inst_52296 = (state_52321[(10)]);
var state_52321__$1 = state_52321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52321__$1,(14),inst_52296);
} else {
if((state_val_52322 === (2))){
var state_52321__$1 = state_52321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52321__$1,(4),results);
} else {
if((state_val_52322 === (19))){
var state_52321__$1 = state_52321;
var statearr_52351_54374 = state_52321__$1;
(statearr_52351_54374[(2)] = null);

(statearr_52351_54374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (11))){
var inst_52296 = (state_52321[(2)]);
var state_52321__$1 = (function (){var statearr_52354 = state_52321;
(statearr_52354[(10)] = inst_52296);

return statearr_52354;
})();
var statearr_52357_54375 = state_52321__$1;
(statearr_52357_54375[(2)] = null);

(statearr_52357_54375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (9))){
var state_52321__$1 = state_52321;
var statearr_52362_54376 = state_52321__$1;
(statearr_52362_54376[(2)] = null);

(statearr_52362_54376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (5))){
var state_52321__$1 = state_52321;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52372_54377 = state_52321__$1;
(statearr_52372_54377[(1)] = (8));

} else {
var statearr_52375_54378 = state_52321__$1;
(statearr_52375_54378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (14))){
var inst_52301 = (state_52321[(11)]);
var inst_52299 = (state_52321[(8)]);
var inst_52299__$1 = (state_52321[(2)]);
var inst_52300 = (inst_52299__$1 == null);
var inst_52301__$1 = cljs.core.not(inst_52300);
var state_52321__$1 = (function (){var statearr_52386 = state_52321;
(statearr_52386[(11)] = inst_52301__$1);

(statearr_52386[(8)] = inst_52299__$1);

return statearr_52386;
})();
if(inst_52301__$1){
var statearr_52387_54379 = state_52321__$1;
(statearr_52387_54379[(1)] = (15));

} else {
var statearr_52388_54380 = state_52321__$1;
(statearr_52388_54380[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (16))){
var inst_52301 = (state_52321[(11)]);
var state_52321__$1 = state_52321;
var statearr_52389_54381 = state_52321__$1;
(statearr_52389_54381[(2)] = inst_52301);

(statearr_52389_54381[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (10))){
var inst_52293 = (state_52321[(2)]);
var state_52321__$1 = state_52321;
var statearr_52390_54382 = state_52321__$1;
(statearr_52390_54382[(2)] = inst_52293);

(statearr_52390_54382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (18))){
var inst_52304 = (state_52321[(2)]);
var state_52321__$1 = state_52321;
var statearr_52391_54383 = state_52321__$1;
(statearr_52391_54383[(2)] = inst_52304);

(statearr_52391_54383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52322 === (8))){
var inst_52290 = cljs.core.async.close_BANG_(to);
var state_52321__$1 = state_52321;
var statearr_52398_54384 = state_52321__$1;
(statearr_52398_54384[(2)] = inst_52290);

(statearr_52398_54384[(1)] = (10));


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
var statearr_52400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52400[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__);

(statearr_52400[(1)] = (1));

return statearr_52400;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1 = (function (state_52321){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52321);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52401){var ex__39545__auto__ = e52401;
var statearr_52404_54389 = state_52321;
(statearr_52404_54389[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52321[(4)]))){
var statearr_52405_54390 = state_52321;
(statearr_52405_54390[(1)] = cljs.core.first((state_52321[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54395 = state_52321;
state_52321 = G__54395;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__ = function(state_52321){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1.call(this,state_52321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_52407 = f__39710__auto__();
(statearr_52407[(6)] = c__39709__auto__);

return statearr_52407;
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
var G__52414 = arguments.length;
switch (G__52414) {
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
var G__52437 = arguments.length;
switch (G__52437) {
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
var G__52489 = arguments.length;
switch (G__52489) {
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
var c__39709__auto___54411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_52520){
var state_val_52521 = (state_52520[(1)]);
if((state_val_52521 === (7))){
var inst_52515 = (state_52520[(2)]);
var state_52520__$1 = state_52520;
var statearr_52523_54412 = state_52520__$1;
(statearr_52523_54412[(2)] = inst_52515);

(statearr_52523_54412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52521 === (1))){
var state_52520__$1 = state_52520;
var statearr_52524_54413 = state_52520__$1;
(statearr_52524_54413[(2)] = null);

(statearr_52524_54413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52521 === (4))){
var inst_52495 = (state_52520[(7)]);
var inst_52495__$1 = (state_52520[(2)]);
var inst_52497 = (inst_52495__$1 == null);
var state_52520__$1 = (function (){var statearr_52527 = state_52520;
(statearr_52527[(7)] = inst_52495__$1);

return statearr_52527;
})();
if(cljs.core.truth_(inst_52497)){
var statearr_52532_54418 = state_52520__$1;
(statearr_52532_54418[(1)] = (5));

} else {
var statearr_52536_54422 = state_52520__$1;
(statearr_52536_54422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52521 === (13))){
var state_52520__$1 = state_52520;
var statearr_52537_54423 = state_52520__$1;
(statearr_52537_54423[(2)] = null);

(statearr_52537_54423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52521 === (6))){
var inst_52495 = (state_52520[(7)]);
var inst_52502 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52495) : p.call(null,inst_52495));
var state_52520__$1 = state_52520;
if(cljs.core.truth_(inst_52502)){
var statearr_52549_54424 = state_52520__$1;
(statearr_52549_54424[(1)] = (9));

} else {
var statearr_52552_54425 = state_52520__$1;
(statearr_52552_54425[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52521 === (3))){
var inst_52517 = (state_52520[(2)]);
var state_52520__$1 = state_52520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52520__$1,inst_52517);
} else {
if((state_val_52521 === (12))){
var state_52520__$1 = state_52520;
var statearr_52557_54426 = state_52520__$1;
(statearr_52557_54426[(2)] = null);

(statearr_52557_54426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52521 === (2))){
var state_52520__$1 = state_52520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52520__$1,(4),ch);
} else {
if((state_val_52521 === (11))){
var inst_52495 = (state_52520[(7)]);
var inst_52506 = (state_52520[(2)]);
var state_52520__$1 = state_52520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52520__$1,(8),inst_52506,inst_52495);
} else {
if((state_val_52521 === (9))){
var state_52520__$1 = state_52520;
var statearr_52560_54430 = state_52520__$1;
(statearr_52560_54430[(2)] = tc);

(statearr_52560_54430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52521 === (5))){
var inst_52499 = cljs.core.async.close_BANG_(tc);
var inst_52500 = cljs.core.async.close_BANG_(fc);
var state_52520__$1 = (function (){var statearr_52565 = state_52520;
(statearr_52565[(8)] = inst_52499);

return statearr_52565;
})();
var statearr_52566_54439 = state_52520__$1;
(statearr_52566_54439[(2)] = inst_52500);

(statearr_52566_54439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52521 === (14))){
var inst_52513 = (state_52520[(2)]);
var state_52520__$1 = state_52520;
var statearr_52568_54449 = state_52520__$1;
(statearr_52568_54449[(2)] = inst_52513);

(statearr_52568_54449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52521 === (10))){
var state_52520__$1 = state_52520;
var statearr_52569_54450 = state_52520__$1;
(statearr_52569_54450[(2)] = fc);

(statearr_52569_54450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52521 === (8))){
var inst_52508 = (state_52520[(2)]);
var state_52520__$1 = state_52520;
if(cljs.core.truth_(inst_52508)){
var statearr_52570_54451 = state_52520__$1;
(statearr_52570_54451[(1)] = (12));

} else {
var statearr_52571_54452 = state_52520__$1;
(statearr_52571_54452[(1)] = (13));

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
var statearr_52572 = [null,null,null,null,null,null,null,null,null];
(statearr_52572[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_52572[(1)] = (1));

return statearr_52572;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_52520){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52520);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52573){var ex__39545__auto__ = e52573;
var statearr_52574_54459 = state_52520;
(statearr_52574_54459[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52520[(4)]))){
var statearr_52575_54463 = state_52520;
(statearr_52575_54463[(1)] = cljs.core.first((state_52520[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54464 = state_52520;
state_52520 = G__54464;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_52520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_52520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_52576 = f__39710__auto__();
(statearr_52576[(6)] = c__39709__auto___54411);

return statearr_52576;
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
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_52598){
var state_val_52599 = (state_52598[(1)]);
if((state_val_52599 === (7))){
var inst_52594 = (state_52598[(2)]);
var state_52598__$1 = state_52598;
var statearr_52600_54465 = state_52598__$1;
(statearr_52600_54465[(2)] = inst_52594);

(statearr_52600_54465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (1))){
var inst_52577 = init;
var inst_52578 = inst_52577;
var state_52598__$1 = (function (){var statearr_52601 = state_52598;
(statearr_52601[(7)] = inst_52578);

return statearr_52601;
})();
var statearr_52602_54481 = state_52598__$1;
(statearr_52602_54481[(2)] = null);

(statearr_52602_54481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (4))){
var inst_52581 = (state_52598[(8)]);
var inst_52581__$1 = (state_52598[(2)]);
var inst_52582 = (inst_52581__$1 == null);
var state_52598__$1 = (function (){var statearr_52603 = state_52598;
(statearr_52603[(8)] = inst_52581__$1);

return statearr_52603;
})();
if(cljs.core.truth_(inst_52582)){
var statearr_52604_54488 = state_52598__$1;
(statearr_52604_54488[(1)] = (5));

} else {
var statearr_52605_54489 = state_52598__$1;
(statearr_52605_54489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (6))){
var inst_52581 = (state_52598[(8)]);
var inst_52585 = (state_52598[(9)]);
var inst_52578 = (state_52598[(7)]);
var inst_52585__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52578,inst_52581) : f.call(null,inst_52578,inst_52581));
var inst_52586 = cljs.core.reduced_QMARK_(inst_52585__$1);
var state_52598__$1 = (function (){var statearr_52606 = state_52598;
(statearr_52606[(9)] = inst_52585__$1);

return statearr_52606;
})();
if(inst_52586){
var statearr_52607_54490 = state_52598__$1;
(statearr_52607_54490[(1)] = (8));

} else {
var statearr_52608_54491 = state_52598__$1;
(statearr_52608_54491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (3))){
var inst_52596 = (state_52598[(2)]);
var state_52598__$1 = state_52598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52598__$1,inst_52596);
} else {
if((state_val_52599 === (2))){
var state_52598__$1 = state_52598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52598__$1,(4),ch);
} else {
if((state_val_52599 === (9))){
var inst_52585 = (state_52598[(9)]);
var inst_52578 = inst_52585;
var state_52598__$1 = (function (){var statearr_52609 = state_52598;
(statearr_52609[(7)] = inst_52578);

return statearr_52609;
})();
var statearr_52610_54494 = state_52598__$1;
(statearr_52610_54494[(2)] = null);

(statearr_52610_54494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (5))){
var inst_52578 = (state_52598[(7)]);
var state_52598__$1 = state_52598;
var statearr_52611_54495 = state_52598__$1;
(statearr_52611_54495[(2)] = inst_52578);

(statearr_52611_54495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (10))){
var inst_52592 = (state_52598[(2)]);
var state_52598__$1 = state_52598;
var statearr_52612_54497 = state_52598__$1;
(statearr_52612_54497[(2)] = inst_52592);

(statearr_52612_54497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (8))){
var inst_52585 = (state_52598[(9)]);
var inst_52588 = cljs.core.deref(inst_52585);
var state_52598__$1 = state_52598;
var statearr_52614_54498 = state_52598__$1;
(statearr_52614_54498[(2)] = inst_52588);

(statearr_52614_54498[(1)] = (10));


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
var statearr_52617 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52617[(0)] = cljs$core$async$reduce_$_state_machine__39542__auto__);

(statearr_52617[(1)] = (1));

return statearr_52617;
});
var cljs$core$async$reduce_$_state_machine__39542__auto____1 = (function (state_52598){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52598);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52618){var ex__39545__auto__ = e52618;
var statearr_52619_54499 = state_52598;
(statearr_52619_54499[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52598[(4)]))){
var statearr_52620_54500 = state_52598;
(statearr_52620_54500[(1)] = cljs.core.first((state_52598[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54504 = state_52598;
state_52598 = G__54504;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39542__auto__ = function(state_52598){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39542__auto____1.call(this,state_52598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39542__auto____0;
cljs$core$async$reduce_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39542__auto____1;
return cljs$core$async$reduce_$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_52621 = f__39710__auto__();
(statearr_52621[(6)] = c__39709__auto__);

return statearr_52621;
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
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_52627){
var state_val_52628 = (state_52627[(1)]);
if((state_val_52628 === (1))){
var inst_52622 = cljs.core.async.reduce(f__$1,init,ch);
var state_52627__$1 = state_52627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52627__$1,(2),inst_52622);
} else {
if((state_val_52628 === (2))){
var inst_52624 = (state_52627[(2)]);
var inst_52625 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52624) : f__$1.call(null,inst_52624));
var state_52627__$1 = state_52627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52627__$1,inst_52625);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__39542__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39542__auto____0 = (function (){
var statearr_52630 = [null,null,null,null,null,null,null];
(statearr_52630[(0)] = cljs$core$async$transduce_$_state_machine__39542__auto__);

(statearr_52630[(1)] = (1));

return statearr_52630;
});
var cljs$core$async$transduce_$_state_machine__39542__auto____1 = (function (state_52627){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52627);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52631){var ex__39545__auto__ = e52631;
var statearr_52632_54510 = state_52627;
(statearr_52632_54510[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52627[(4)]))){
var statearr_52633_54511 = state_52627;
(statearr_52633_54511[(1)] = cljs.core.first((state_52627[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54513 = state_52627;
state_52627 = G__54513;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39542__auto__ = function(state_52627){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39542__auto____1.call(this,state_52627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39542__auto____0;
cljs$core$async$transduce_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39542__auto____1;
return cljs$core$async$transduce_$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_52642 = f__39710__auto__();
(statearr_52642[(6)] = c__39709__auto__);

return statearr_52642;
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
var G__52648 = arguments.length;
switch (G__52648) {
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
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_52673){
var state_val_52674 = (state_52673[(1)]);
if((state_val_52674 === (7))){
var inst_52655 = (state_52673[(2)]);
var state_52673__$1 = state_52673;
var statearr_52681_54517 = state_52673__$1;
(statearr_52681_54517[(2)] = inst_52655);

(statearr_52681_54517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (1))){
var inst_52649 = cljs.core.seq(coll);
var inst_52650 = inst_52649;
var state_52673__$1 = (function (){var statearr_52682 = state_52673;
(statearr_52682[(7)] = inst_52650);

return statearr_52682;
})();
var statearr_52683_54518 = state_52673__$1;
(statearr_52683_54518[(2)] = null);

(statearr_52683_54518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (4))){
var inst_52650 = (state_52673[(7)]);
var inst_52653 = cljs.core.first(inst_52650);
var state_52673__$1 = state_52673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52673__$1,(7),ch,inst_52653);
} else {
if((state_val_52674 === (13))){
var inst_52667 = (state_52673[(2)]);
var state_52673__$1 = state_52673;
var statearr_52684_54519 = state_52673__$1;
(statearr_52684_54519[(2)] = inst_52667);

(statearr_52684_54519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (6))){
var inst_52658 = (state_52673[(2)]);
var state_52673__$1 = state_52673;
if(cljs.core.truth_(inst_52658)){
var statearr_52685_54520 = state_52673__$1;
(statearr_52685_54520[(1)] = (8));

} else {
var statearr_52686_54521 = state_52673__$1;
(statearr_52686_54521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (3))){
var inst_52671 = (state_52673[(2)]);
var state_52673__$1 = state_52673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52673__$1,inst_52671);
} else {
if((state_val_52674 === (12))){
var state_52673__$1 = state_52673;
var statearr_52687_54522 = state_52673__$1;
(statearr_52687_54522[(2)] = null);

(statearr_52687_54522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (2))){
var inst_52650 = (state_52673[(7)]);
var state_52673__$1 = state_52673;
if(cljs.core.truth_(inst_52650)){
var statearr_52688_54523 = state_52673__$1;
(statearr_52688_54523[(1)] = (4));

} else {
var statearr_52689_54524 = state_52673__$1;
(statearr_52689_54524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (11))){
var inst_52664 = cljs.core.async.close_BANG_(ch);
var state_52673__$1 = state_52673;
var statearr_52690_54525 = state_52673__$1;
(statearr_52690_54525[(2)] = inst_52664);

(statearr_52690_54525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (9))){
var state_52673__$1 = state_52673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52691_54526 = state_52673__$1;
(statearr_52691_54526[(1)] = (11));

} else {
var statearr_52692_54527 = state_52673__$1;
(statearr_52692_54527[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (5))){
var inst_52650 = (state_52673[(7)]);
var state_52673__$1 = state_52673;
var statearr_52693_54528 = state_52673__$1;
(statearr_52693_54528[(2)] = inst_52650);

(statearr_52693_54528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (10))){
var inst_52669 = (state_52673[(2)]);
var state_52673__$1 = state_52673;
var statearr_52694_54529 = state_52673__$1;
(statearr_52694_54529[(2)] = inst_52669);

(statearr_52694_54529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (8))){
var inst_52650 = (state_52673[(7)]);
var inst_52660 = cljs.core.next(inst_52650);
var inst_52650__$1 = inst_52660;
var state_52673__$1 = (function (){var statearr_52695 = state_52673;
(statearr_52695[(7)] = inst_52650__$1);

return statearr_52695;
})();
var statearr_52696_54530 = state_52673__$1;
(statearr_52696_54530[(2)] = null);

(statearr_52696_54530[(1)] = (2));


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
var statearr_52697 = [null,null,null,null,null,null,null,null];
(statearr_52697[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_52697[(1)] = (1));

return statearr_52697;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_52673){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52673);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52698){var ex__39545__auto__ = e52698;
var statearr_52699_54531 = state_52673;
(statearr_52699_54531[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52673[(4)]))){
var statearr_52700_54533 = state_52673;
(statearr_52700_54533[(1)] = cljs.core.first((state_52673[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54534 = state_52673;
state_52673 = G__54534;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_52673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_52673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_52701 = f__39710__auto__();
(statearr_52701[(6)] = c__39709__auto__);

return statearr_52701;
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
var G__52703 = arguments.length;
switch (G__52703) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_54541 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_54541(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_54544 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_54544(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_54545 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_54545(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_54553 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_54553(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52704 = (function (ch,cs,meta52705){
this.ch = ch;
this.cs = cs;
this.meta52705 = meta52705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52706,meta52705__$1){
var self__ = this;
var _52706__$1 = this;
return (new cljs.core.async.t_cljs$core$async52704(self__.ch,self__.cs,meta52705__$1));
}));

(cljs.core.async.t_cljs$core$async52704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52706){
var self__ = this;
var _52706__$1 = this;
return self__.meta52705;
}));

(cljs.core.async.t_cljs$core$async52704.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52704.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52704.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async52704.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async52704.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async52704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52705","meta52705",785738742,null)], null);
}));

(cljs.core.async.t_cljs$core$async52704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52704");

(cljs.core.async.t_cljs$core$async52704.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async52704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52704.
 */
cljs.core.async.__GT_t_cljs$core$async52704 = (function cljs$core$async$mult_$___GT_t_cljs$core$async52704(ch__$1,cs__$1,meta52705){
return (new cljs.core.async.t_cljs$core$async52704(ch__$1,cs__$1,meta52705));
});

}

return (new cljs.core.async.t_cljs$core$async52704(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__39709__auto___54560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_52847){
var state_val_52848 = (state_52847[(1)]);
if((state_val_52848 === (7))){
var inst_52842 = (state_52847[(2)]);
var state_52847__$1 = state_52847;
var statearr_52850_54561 = state_52847__$1;
(statearr_52850_54561[(2)] = inst_52842);

(statearr_52850_54561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (20))){
var inst_52740 = (state_52847[(7)]);
var inst_52754 = cljs.core.first(inst_52740);
var inst_52755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52754,(0),null);
var inst_52756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52754,(1),null);
var state_52847__$1 = (function (){var statearr_52853 = state_52847;
(statearr_52853[(8)] = inst_52755);

return statearr_52853;
})();
if(cljs.core.truth_(inst_52756)){
var statearr_52854_54562 = state_52847__$1;
(statearr_52854_54562[(1)] = (22));

} else {
var statearr_52855_54563 = state_52847__$1;
(statearr_52855_54563[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (27))){
var inst_52786 = (state_52847[(9)]);
var inst_52709 = (state_52847[(10)]);
var inst_52784 = (state_52847[(11)]);
var inst_52792 = (state_52847[(12)]);
var inst_52792__$1 = cljs.core._nth(inst_52784,inst_52786);
var inst_52793 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52792__$1,inst_52709,done);
var state_52847__$1 = (function (){var statearr_52856 = state_52847;
(statearr_52856[(12)] = inst_52792__$1);

return statearr_52856;
})();
if(cljs.core.truth_(inst_52793)){
var statearr_52857_54564 = state_52847__$1;
(statearr_52857_54564[(1)] = (30));

} else {
var statearr_52858_54567 = state_52847__$1;
(statearr_52858_54567[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (1))){
var state_52847__$1 = state_52847;
var statearr_52859_54569 = state_52847__$1;
(statearr_52859_54569[(2)] = null);

(statearr_52859_54569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (24))){
var inst_52740 = (state_52847[(7)]);
var inst_52761 = (state_52847[(2)]);
var inst_52762 = cljs.core.next(inst_52740);
var inst_52718 = inst_52762;
var inst_52719 = null;
var inst_52720 = (0);
var inst_52721 = (0);
var state_52847__$1 = (function (){var statearr_52860 = state_52847;
(statearr_52860[(13)] = inst_52761);

(statearr_52860[(14)] = inst_52718);

(statearr_52860[(15)] = inst_52721);

(statearr_52860[(16)] = inst_52719);

(statearr_52860[(17)] = inst_52720);

return statearr_52860;
})();
var statearr_52861_54575 = state_52847__$1;
(statearr_52861_54575[(2)] = null);

(statearr_52861_54575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (39))){
var state_52847__$1 = state_52847;
var statearr_52865_54576 = state_52847__$1;
(statearr_52865_54576[(2)] = null);

(statearr_52865_54576[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (4))){
var inst_52709 = (state_52847[(10)]);
var inst_52709__$1 = (state_52847[(2)]);
var inst_52710 = (inst_52709__$1 == null);
var state_52847__$1 = (function (){var statearr_52866 = state_52847;
(statearr_52866[(10)] = inst_52709__$1);

return statearr_52866;
})();
if(cljs.core.truth_(inst_52710)){
var statearr_52867_54577 = state_52847__$1;
(statearr_52867_54577[(1)] = (5));

} else {
var statearr_52868_54578 = state_52847__$1;
(statearr_52868_54578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (15))){
var inst_52718 = (state_52847[(14)]);
var inst_52721 = (state_52847[(15)]);
var inst_52719 = (state_52847[(16)]);
var inst_52720 = (state_52847[(17)]);
var inst_52736 = (state_52847[(2)]);
var inst_52737 = (inst_52721 + (1));
var tmp52862 = inst_52718;
var tmp52863 = inst_52719;
var tmp52864 = inst_52720;
var inst_52718__$1 = tmp52862;
var inst_52719__$1 = tmp52863;
var inst_52720__$1 = tmp52864;
var inst_52721__$1 = inst_52737;
var state_52847__$1 = (function (){var statearr_52869 = state_52847;
(statearr_52869[(14)] = inst_52718__$1);

(statearr_52869[(15)] = inst_52721__$1);

(statearr_52869[(16)] = inst_52719__$1);

(statearr_52869[(18)] = inst_52736);

(statearr_52869[(17)] = inst_52720__$1);

return statearr_52869;
})();
var statearr_52870_54588 = state_52847__$1;
(statearr_52870_54588[(2)] = null);

(statearr_52870_54588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (21))){
var inst_52765 = (state_52847[(2)]);
var state_52847__$1 = state_52847;
var statearr_52874_54589 = state_52847__$1;
(statearr_52874_54589[(2)] = inst_52765);

(statearr_52874_54589[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (31))){
var inst_52792 = (state_52847[(12)]);
var inst_52796 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52792);
var state_52847__$1 = state_52847;
var statearr_52875_54590 = state_52847__$1;
(statearr_52875_54590[(2)] = inst_52796);

(statearr_52875_54590[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (32))){
var inst_52786 = (state_52847[(9)]);
var inst_52783 = (state_52847[(19)]);
var inst_52784 = (state_52847[(11)]);
var inst_52785 = (state_52847[(20)]);
var inst_52798 = (state_52847[(2)]);
var inst_52799 = (inst_52786 + (1));
var tmp52871 = inst_52783;
var tmp52872 = inst_52784;
var tmp52873 = inst_52785;
var inst_52783__$1 = tmp52871;
var inst_52784__$1 = tmp52872;
var inst_52785__$1 = tmp52873;
var inst_52786__$1 = inst_52799;
var state_52847__$1 = (function (){var statearr_52876 = state_52847;
(statearr_52876[(21)] = inst_52798);

(statearr_52876[(9)] = inst_52786__$1);

(statearr_52876[(19)] = inst_52783__$1);

(statearr_52876[(11)] = inst_52784__$1);

(statearr_52876[(20)] = inst_52785__$1);

return statearr_52876;
})();
var statearr_52877_54591 = state_52847__$1;
(statearr_52877_54591[(2)] = null);

(statearr_52877_54591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (40))){
var inst_52814 = (state_52847[(22)]);
var inst_52818 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52814);
var state_52847__$1 = state_52847;
var statearr_52878_54592 = state_52847__$1;
(statearr_52878_54592[(2)] = inst_52818);

(statearr_52878_54592[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (33))){
var inst_52803 = (state_52847[(23)]);
var inst_52805 = cljs.core.chunked_seq_QMARK_(inst_52803);
var state_52847__$1 = state_52847;
if(inst_52805){
var statearr_52879_54593 = state_52847__$1;
(statearr_52879_54593[(1)] = (36));

} else {
var statearr_52880_54594 = state_52847__$1;
(statearr_52880_54594[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (13))){
var inst_52730 = (state_52847[(24)]);
var inst_52733 = cljs.core.async.close_BANG_(inst_52730);
var state_52847__$1 = state_52847;
var statearr_52881_54595 = state_52847__$1;
(statearr_52881_54595[(2)] = inst_52733);

(statearr_52881_54595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (22))){
var inst_52755 = (state_52847[(8)]);
var inst_52758 = cljs.core.async.close_BANG_(inst_52755);
var state_52847__$1 = state_52847;
var statearr_52883_54596 = state_52847__$1;
(statearr_52883_54596[(2)] = inst_52758);

(statearr_52883_54596[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (36))){
var inst_52803 = (state_52847[(23)]);
var inst_52808 = cljs.core.chunk_first(inst_52803);
var inst_52810 = cljs.core.chunk_rest(inst_52803);
var inst_52811 = cljs.core.count(inst_52808);
var inst_52783 = inst_52810;
var inst_52784 = inst_52808;
var inst_52785 = inst_52811;
var inst_52786 = (0);
var state_52847__$1 = (function (){var statearr_52884 = state_52847;
(statearr_52884[(9)] = inst_52786);

(statearr_52884[(19)] = inst_52783);

(statearr_52884[(11)] = inst_52784);

(statearr_52884[(20)] = inst_52785);

return statearr_52884;
})();
var statearr_52885_54597 = state_52847__$1;
(statearr_52885_54597[(2)] = null);

(statearr_52885_54597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (41))){
var inst_52803 = (state_52847[(23)]);
var inst_52821 = (state_52847[(2)]);
var inst_52822 = cljs.core.next(inst_52803);
var inst_52783 = inst_52822;
var inst_52784 = null;
var inst_52785 = (0);
var inst_52786 = (0);
var state_52847__$1 = (function (){var statearr_52886 = state_52847;
(statearr_52886[(25)] = inst_52821);

(statearr_52886[(9)] = inst_52786);

(statearr_52886[(19)] = inst_52783);

(statearr_52886[(11)] = inst_52784);

(statearr_52886[(20)] = inst_52785);

return statearr_52886;
})();
var statearr_52887_54598 = state_52847__$1;
(statearr_52887_54598[(2)] = null);

(statearr_52887_54598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (43))){
var state_52847__$1 = state_52847;
var statearr_52888_54599 = state_52847__$1;
(statearr_52888_54599[(2)] = null);

(statearr_52888_54599[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (29))){
var inst_52830 = (state_52847[(2)]);
var state_52847__$1 = state_52847;
var statearr_52889_54600 = state_52847__$1;
(statearr_52889_54600[(2)] = inst_52830);

(statearr_52889_54600[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (44))){
var inst_52839 = (state_52847[(2)]);
var state_52847__$1 = (function (){var statearr_52890 = state_52847;
(statearr_52890[(26)] = inst_52839);

return statearr_52890;
})();
var statearr_52891_54601 = state_52847__$1;
(statearr_52891_54601[(2)] = null);

(statearr_52891_54601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (6))){
var inst_52775 = (state_52847[(27)]);
var inst_52774 = cljs.core.deref(cs);
var inst_52775__$1 = cljs.core.keys(inst_52774);
var inst_52776 = cljs.core.count(inst_52775__$1);
var inst_52777 = cljs.core.reset_BANG_(dctr,inst_52776);
var inst_52782 = cljs.core.seq(inst_52775__$1);
var inst_52783 = inst_52782;
var inst_52784 = null;
var inst_52785 = (0);
var inst_52786 = (0);
var state_52847__$1 = (function (){var statearr_52892 = state_52847;
(statearr_52892[(28)] = inst_52777);

(statearr_52892[(27)] = inst_52775__$1);

(statearr_52892[(9)] = inst_52786);

(statearr_52892[(19)] = inst_52783);

(statearr_52892[(11)] = inst_52784);

(statearr_52892[(20)] = inst_52785);

return statearr_52892;
})();
var statearr_52893_54608 = state_52847__$1;
(statearr_52893_54608[(2)] = null);

(statearr_52893_54608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (28))){
var inst_52783 = (state_52847[(19)]);
var inst_52803 = (state_52847[(23)]);
var inst_52803__$1 = cljs.core.seq(inst_52783);
var state_52847__$1 = (function (){var statearr_52894 = state_52847;
(statearr_52894[(23)] = inst_52803__$1);

return statearr_52894;
})();
if(inst_52803__$1){
var statearr_52895_54609 = state_52847__$1;
(statearr_52895_54609[(1)] = (33));

} else {
var statearr_52896_54610 = state_52847__$1;
(statearr_52896_54610[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (25))){
var inst_52786 = (state_52847[(9)]);
var inst_52785 = (state_52847[(20)]);
var inst_52788 = (inst_52786 < inst_52785);
var inst_52789 = inst_52788;
var state_52847__$1 = state_52847;
if(cljs.core.truth_(inst_52789)){
var statearr_52897_54611 = state_52847__$1;
(statearr_52897_54611[(1)] = (27));

} else {
var statearr_52898_54612 = state_52847__$1;
(statearr_52898_54612[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (34))){
var state_52847__$1 = state_52847;
var statearr_52899_54613 = state_52847__$1;
(statearr_52899_54613[(2)] = null);

(statearr_52899_54613[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (17))){
var state_52847__$1 = state_52847;
var statearr_52900_54614 = state_52847__$1;
(statearr_52900_54614[(2)] = null);

(statearr_52900_54614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (3))){
var inst_52844 = (state_52847[(2)]);
var state_52847__$1 = state_52847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52847__$1,inst_52844);
} else {
if((state_val_52848 === (12))){
var inst_52770 = (state_52847[(2)]);
var state_52847__$1 = state_52847;
var statearr_52901_54615 = state_52847__$1;
(statearr_52901_54615[(2)] = inst_52770);

(statearr_52901_54615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (2))){
var state_52847__$1 = state_52847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52847__$1,(4),ch);
} else {
if((state_val_52848 === (23))){
var state_52847__$1 = state_52847;
var statearr_52902_54616 = state_52847__$1;
(statearr_52902_54616[(2)] = null);

(statearr_52902_54616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (35))){
var inst_52828 = (state_52847[(2)]);
var state_52847__$1 = state_52847;
var statearr_52903_54617 = state_52847__$1;
(statearr_52903_54617[(2)] = inst_52828);

(statearr_52903_54617[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (19))){
var inst_52740 = (state_52847[(7)]);
var inst_52744 = cljs.core.chunk_first(inst_52740);
var inst_52745 = cljs.core.chunk_rest(inst_52740);
var inst_52746 = cljs.core.count(inst_52744);
var inst_52718 = inst_52745;
var inst_52719 = inst_52744;
var inst_52720 = inst_52746;
var inst_52721 = (0);
var state_52847__$1 = (function (){var statearr_52904 = state_52847;
(statearr_52904[(14)] = inst_52718);

(statearr_52904[(15)] = inst_52721);

(statearr_52904[(16)] = inst_52719);

(statearr_52904[(17)] = inst_52720);

return statearr_52904;
})();
var statearr_52905_54618 = state_52847__$1;
(statearr_52905_54618[(2)] = null);

(statearr_52905_54618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (11))){
var inst_52718 = (state_52847[(14)]);
var inst_52740 = (state_52847[(7)]);
var inst_52740__$1 = cljs.core.seq(inst_52718);
var state_52847__$1 = (function (){var statearr_52906 = state_52847;
(statearr_52906[(7)] = inst_52740__$1);

return statearr_52906;
})();
if(inst_52740__$1){
var statearr_52907_54619 = state_52847__$1;
(statearr_52907_54619[(1)] = (16));

} else {
var statearr_52908_54620 = state_52847__$1;
(statearr_52908_54620[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (9))){
var inst_52772 = (state_52847[(2)]);
var state_52847__$1 = state_52847;
var statearr_52909_54621 = state_52847__$1;
(statearr_52909_54621[(2)] = inst_52772);

(statearr_52909_54621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (5))){
var inst_52716 = cljs.core.deref(cs);
var inst_52717 = cljs.core.seq(inst_52716);
var inst_52718 = inst_52717;
var inst_52719 = null;
var inst_52720 = (0);
var inst_52721 = (0);
var state_52847__$1 = (function (){var statearr_52910 = state_52847;
(statearr_52910[(14)] = inst_52718);

(statearr_52910[(15)] = inst_52721);

(statearr_52910[(16)] = inst_52719);

(statearr_52910[(17)] = inst_52720);

return statearr_52910;
})();
var statearr_52911_54622 = state_52847__$1;
(statearr_52911_54622[(2)] = null);

(statearr_52911_54622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (14))){
var state_52847__$1 = state_52847;
var statearr_52913_54623 = state_52847__$1;
(statearr_52913_54623[(2)] = null);

(statearr_52913_54623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (45))){
var inst_52836 = (state_52847[(2)]);
var state_52847__$1 = state_52847;
var statearr_52916_54624 = state_52847__$1;
(statearr_52916_54624[(2)] = inst_52836);

(statearr_52916_54624[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (26))){
var inst_52775 = (state_52847[(27)]);
var inst_52832 = (state_52847[(2)]);
var inst_52833 = cljs.core.seq(inst_52775);
var state_52847__$1 = (function (){var statearr_52917 = state_52847;
(statearr_52917[(29)] = inst_52832);

return statearr_52917;
})();
if(inst_52833){
var statearr_52918_54625 = state_52847__$1;
(statearr_52918_54625[(1)] = (42));

} else {
var statearr_52919_54632 = state_52847__$1;
(statearr_52919_54632[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (16))){
var inst_52740 = (state_52847[(7)]);
var inst_52742 = cljs.core.chunked_seq_QMARK_(inst_52740);
var state_52847__$1 = state_52847;
if(inst_52742){
var statearr_52922_54633 = state_52847__$1;
(statearr_52922_54633[(1)] = (19));

} else {
var statearr_52924_54634 = state_52847__$1;
(statearr_52924_54634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (38))){
var inst_52825 = (state_52847[(2)]);
var state_52847__$1 = state_52847;
var statearr_52925_54635 = state_52847__$1;
(statearr_52925_54635[(2)] = inst_52825);

(statearr_52925_54635[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (30))){
var state_52847__$1 = state_52847;
var statearr_52926_54637 = state_52847__$1;
(statearr_52926_54637[(2)] = null);

(statearr_52926_54637[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (10))){
var inst_52721 = (state_52847[(15)]);
var inst_52719 = (state_52847[(16)]);
var inst_52729 = cljs.core._nth(inst_52719,inst_52721);
var inst_52730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52729,(0),null);
var inst_52731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52729,(1),null);
var state_52847__$1 = (function (){var statearr_52930 = state_52847;
(statearr_52930[(24)] = inst_52730);

return statearr_52930;
})();
if(cljs.core.truth_(inst_52731)){
var statearr_52931_54639 = state_52847__$1;
(statearr_52931_54639[(1)] = (13));

} else {
var statearr_52932_54640 = state_52847__$1;
(statearr_52932_54640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (18))){
var inst_52768 = (state_52847[(2)]);
var state_52847__$1 = state_52847;
var statearr_52933_54641 = state_52847__$1;
(statearr_52933_54641[(2)] = inst_52768);

(statearr_52933_54641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (42))){
var state_52847__$1 = state_52847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52847__$1,(45),dchan);
} else {
if((state_val_52848 === (37))){
var inst_52709 = (state_52847[(10)]);
var inst_52803 = (state_52847[(23)]);
var inst_52814 = (state_52847[(22)]);
var inst_52814__$1 = cljs.core.first(inst_52803);
var inst_52815 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52814__$1,inst_52709,done);
var state_52847__$1 = (function (){var statearr_52937 = state_52847;
(statearr_52937[(22)] = inst_52814__$1);

return statearr_52937;
})();
if(cljs.core.truth_(inst_52815)){
var statearr_52938_54642 = state_52847__$1;
(statearr_52938_54642[(1)] = (39));

} else {
var statearr_52939_54643 = state_52847__$1;
(statearr_52939_54643[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52848 === (8))){
var inst_52721 = (state_52847[(15)]);
var inst_52720 = (state_52847[(17)]);
var inst_52723 = (inst_52721 < inst_52720);
var inst_52724 = inst_52723;
var state_52847__$1 = state_52847;
if(cljs.core.truth_(inst_52724)){
var statearr_52940_54646 = state_52847__$1;
(statearr_52940_54646[(1)] = (10));

} else {
var statearr_52941_54647 = state_52847__$1;
(statearr_52941_54647[(1)] = (11));

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
var statearr_52945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52945[(0)] = cljs$core$async$mult_$_state_machine__39542__auto__);

(statearr_52945[(1)] = (1));

return statearr_52945;
});
var cljs$core$async$mult_$_state_machine__39542__auto____1 = (function (state_52847){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_52847);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e52954){var ex__39545__auto__ = e52954;
var statearr_52955_54649 = state_52847;
(statearr_52955_54649[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_52847[(4)]))){
var statearr_52956_54650 = state_52847;
(statearr_52956_54650[(1)] = cljs.core.first((state_52847[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54651 = state_52847;
state_52847 = G__54651;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39542__auto__ = function(state_52847){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39542__auto____1.call(this,state_52847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39542__auto____0;
cljs$core$async$mult_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39542__auto____1;
return cljs$core$async$mult_$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_52957 = f__39710__auto__();
(statearr_52957[(6)] = c__39709__auto___54560);

return statearr_52957;
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
var G__52959 = arguments.length;
switch (G__52959) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_54654 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_54654(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_54657 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_54657(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_54658 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_54658(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_54659 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_54659(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_54660 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_54660(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___54661 = arguments.length;
var i__4819__auto___54662 = (0);
while(true){
if((i__4819__auto___54662 < len__4818__auto___54661)){
args__4824__auto__.push((arguments[i__4819__auto___54662]));

var G__54663 = (i__4819__auto___54662 + (1));
i__4819__auto___54662 = G__54663;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52997){
var map__52998 = p__52997;
var map__52998__$1 = cljs.core.__destructure_map(map__52998);
var opts = map__52998__$1;
var statearr_52999_54664 = state;
(statearr_52999_54664[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_53001_54666 = state;
(statearr_53001_54666[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_53002_54667 = state;
(statearr_53002_54667[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52991){
var G__52992 = cljs.core.first(seq52991);
var seq52991__$1 = cljs.core.next(seq52991);
var G__52993 = cljs.core.first(seq52991__$1);
var seq52991__$2 = cljs.core.next(seq52991__$1);
var G__52994 = cljs.core.first(seq52991__$2);
var seq52991__$3 = cljs.core.next(seq52991__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52992,G__52993,G__52994,seq52991__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53019 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53020){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta53020 = meta53020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53021,meta53020__$1){
var self__ = this;
var _53021__$1 = this;
return (new cljs.core.async.t_cljs$core$async53019(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53020__$1));
}));

(cljs.core.async.t_cljs$core$async53019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53021){
var self__ = this;
var _53021__$1 = this;
return self__.meta53020;
}));

(cljs.core.async.t_cljs$core$async53019.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53019.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async53019.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53019.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53019.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53019.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53019.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53019.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53020","meta53020",827066762,null)], null);
}));

(cljs.core.async.t_cljs$core$async53019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53019");

(cljs.core.async.t_cljs$core$async53019.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async53019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53019.
 */
cljs.core.async.__GT_t_cljs$core$async53019 = (function cljs$core$async$mix_$___GT_t_cljs$core$async53019(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53020){
return (new cljs.core.async.t_cljs$core$async53019(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53020));
});

}

return (new cljs.core.async.t_cljs$core$async53019(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39709__auto___54677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_53117){
var state_val_53118 = (state_53117[(1)]);
if((state_val_53118 === (7))){
var inst_53076 = (state_53117[(2)]);
var state_53117__$1 = state_53117;
if(cljs.core.truth_(inst_53076)){
var statearr_53127_54678 = state_53117__$1;
(statearr_53127_54678[(1)] = (8));

} else {
var statearr_53133_54679 = state_53117__$1;
(statearr_53133_54679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (20))){
var inst_53069 = (state_53117[(7)]);
var state_53117__$1 = state_53117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53117__$1,(23),out,inst_53069);
} else {
if((state_val_53118 === (1))){
var inst_53052 = calc_state();
var inst_53053 = cljs.core.__destructure_map(inst_53052);
var inst_53054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53053,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53053,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53053,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53057 = inst_53052;
var state_53117__$1 = (function (){var statearr_53142 = state_53117;
(statearr_53142[(8)] = inst_53057);

(statearr_53142[(9)] = inst_53054);

(statearr_53142[(10)] = inst_53055);

(statearr_53142[(11)] = inst_53056);

return statearr_53142;
})();
var statearr_53143_54680 = state_53117__$1;
(statearr_53143_54680[(2)] = null);

(statearr_53143_54680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (24))){
var inst_53060 = (state_53117[(12)]);
var inst_53057 = inst_53060;
var state_53117__$1 = (function (){var statearr_53144 = state_53117;
(statearr_53144[(8)] = inst_53057);

return statearr_53144;
})();
var statearr_53145_54681 = state_53117__$1;
(statearr_53145_54681[(2)] = null);

(statearr_53145_54681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (4))){
var inst_53071 = (state_53117[(13)]);
var inst_53069 = (state_53117[(7)]);
var inst_53068 = (state_53117[(2)]);
var inst_53069__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53068,(0),null);
var inst_53070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53068,(1),null);
var inst_53071__$1 = (inst_53069__$1 == null);
var state_53117__$1 = (function (){var statearr_53147 = state_53117;
(statearr_53147[(13)] = inst_53071__$1);

(statearr_53147[(7)] = inst_53069__$1);

(statearr_53147[(14)] = inst_53070);

return statearr_53147;
})();
if(cljs.core.truth_(inst_53071__$1)){
var statearr_53148_54683 = state_53117__$1;
(statearr_53148_54683[(1)] = (5));

} else {
var statearr_53149_54685 = state_53117__$1;
(statearr_53149_54685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (15))){
var inst_53061 = (state_53117[(15)]);
var inst_53091 = (state_53117[(16)]);
var inst_53091__$1 = cljs.core.empty_QMARK_(inst_53061);
var state_53117__$1 = (function (){var statearr_53150 = state_53117;
(statearr_53150[(16)] = inst_53091__$1);

return statearr_53150;
})();
if(inst_53091__$1){
var statearr_53151_54693 = state_53117__$1;
(statearr_53151_54693[(1)] = (17));

} else {
var statearr_53152_54694 = state_53117__$1;
(statearr_53152_54694[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (21))){
var inst_53060 = (state_53117[(12)]);
var inst_53057 = inst_53060;
var state_53117__$1 = (function (){var statearr_53154 = state_53117;
(statearr_53154[(8)] = inst_53057);

return statearr_53154;
})();
var statearr_53155_54698 = state_53117__$1;
(statearr_53155_54698[(2)] = null);

(statearr_53155_54698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (13))){
var inst_53083 = (state_53117[(2)]);
var inst_53084 = calc_state();
var inst_53057 = inst_53084;
var state_53117__$1 = (function (){var statearr_53156 = state_53117;
(statearr_53156[(8)] = inst_53057);

(statearr_53156[(17)] = inst_53083);

return statearr_53156;
})();
var statearr_53157_54699 = state_53117__$1;
(statearr_53157_54699[(2)] = null);

(statearr_53157_54699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (22))){
var inst_53111 = (state_53117[(2)]);
var state_53117__$1 = state_53117;
var statearr_53158_54703 = state_53117__$1;
(statearr_53158_54703[(2)] = inst_53111);

(statearr_53158_54703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (6))){
var inst_53070 = (state_53117[(14)]);
var inst_53074 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53070,change);
var state_53117__$1 = state_53117;
var statearr_53159_54704 = state_53117__$1;
(statearr_53159_54704[(2)] = inst_53074);

(statearr_53159_54704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (25))){
var state_53117__$1 = state_53117;
var statearr_53160_54705 = state_53117__$1;
(statearr_53160_54705[(2)] = null);

(statearr_53160_54705[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (17))){
var inst_53062 = (state_53117[(18)]);
var inst_53070 = (state_53117[(14)]);
var inst_53093 = (inst_53062.cljs$core$IFn$_invoke$arity$1 ? inst_53062.cljs$core$IFn$_invoke$arity$1(inst_53070) : inst_53062.call(null,inst_53070));
var inst_53094 = cljs.core.not(inst_53093);
var state_53117__$1 = state_53117;
var statearr_53162_54706 = state_53117__$1;
(statearr_53162_54706[(2)] = inst_53094);

(statearr_53162_54706[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (3))){
var inst_53115 = (state_53117[(2)]);
var state_53117__$1 = state_53117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53117__$1,inst_53115);
} else {
if((state_val_53118 === (12))){
var state_53117__$1 = state_53117;
var statearr_53163_54707 = state_53117__$1;
(statearr_53163_54707[(2)] = null);

(statearr_53163_54707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (2))){
var inst_53057 = (state_53117[(8)]);
var inst_53060 = (state_53117[(12)]);
var inst_53060__$1 = cljs.core.__destructure_map(inst_53057);
var inst_53061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53060__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53060__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53060__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53117__$1 = (function (){var statearr_53164 = state_53117;
(statearr_53164[(15)] = inst_53061);

(statearr_53164[(18)] = inst_53062);

(statearr_53164[(12)] = inst_53060__$1);

return statearr_53164;
})();
return cljs.core.async.ioc_alts_BANG_(state_53117__$1,(4),inst_53063);
} else {
if((state_val_53118 === (23))){
var inst_53102 = (state_53117[(2)]);
var state_53117__$1 = state_53117;
if(cljs.core.truth_(inst_53102)){
var statearr_53165_54712 = state_53117__$1;
(statearr_53165_54712[(1)] = (24));

} else {
var statearr_53167_54713 = state_53117__$1;
(statearr_53167_54713[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (19))){
var inst_53097 = (state_53117[(2)]);
var state_53117__$1 = state_53117;
var statearr_53168_54717 = state_53117__$1;
(statearr_53168_54717[(2)] = inst_53097);

(statearr_53168_54717[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (11))){
var inst_53070 = (state_53117[(14)]);
var inst_53080 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_53070);
var state_53117__$1 = state_53117;
var statearr_53169_54718 = state_53117__$1;
(statearr_53169_54718[(2)] = inst_53080);

(statearr_53169_54718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (9))){
var inst_53061 = (state_53117[(15)]);
var inst_53088 = (state_53117[(19)]);
var inst_53070 = (state_53117[(14)]);
var inst_53088__$1 = (inst_53061.cljs$core$IFn$_invoke$arity$1 ? inst_53061.cljs$core$IFn$_invoke$arity$1(inst_53070) : inst_53061.call(null,inst_53070));
var state_53117__$1 = (function (){var statearr_53170 = state_53117;
(statearr_53170[(19)] = inst_53088__$1);

return statearr_53170;
})();
if(cljs.core.truth_(inst_53088__$1)){
var statearr_53171_54722 = state_53117__$1;
(statearr_53171_54722[(1)] = (14));

} else {
var statearr_53172_54723 = state_53117__$1;
(statearr_53172_54723[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (5))){
var inst_53071 = (state_53117[(13)]);
var state_53117__$1 = state_53117;
var statearr_53174_54724 = state_53117__$1;
(statearr_53174_54724[(2)] = inst_53071);

(statearr_53174_54724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (14))){
var inst_53088 = (state_53117[(19)]);
var state_53117__$1 = state_53117;
var statearr_53175_54725 = state_53117__$1;
(statearr_53175_54725[(2)] = inst_53088);

(statearr_53175_54725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (26))){
var inst_53107 = (state_53117[(2)]);
var state_53117__$1 = state_53117;
var statearr_53176_54727 = state_53117__$1;
(statearr_53176_54727[(2)] = inst_53107);

(statearr_53176_54727[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (16))){
var inst_53099 = (state_53117[(2)]);
var state_53117__$1 = state_53117;
if(cljs.core.truth_(inst_53099)){
var statearr_53177_54728 = state_53117__$1;
(statearr_53177_54728[(1)] = (20));

} else {
var statearr_53178_54730 = state_53117__$1;
(statearr_53178_54730[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (10))){
var inst_53113 = (state_53117[(2)]);
var state_53117__$1 = state_53117;
var statearr_53179_54731 = state_53117__$1;
(statearr_53179_54731[(2)] = inst_53113);

(statearr_53179_54731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (18))){
var inst_53091 = (state_53117[(16)]);
var state_53117__$1 = state_53117;
var statearr_53180_54732 = state_53117__$1;
(statearr_53180_54732[(2)] = inst_53091);

(statearr_53180_54732[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53118 === (8))){
var inst_53069 = (state_53117[(7)]);
var inst_53078 = (inst_53069 == null);
var state_53117__$1 = state_53117;
if(cljs.core.truth_(inst_53078)){
var statearr_53182_54736 = state_53117__$1;
(statearr_53182_54736[(1)] = (11));

} else {
var statearr_53183_54737 = state_53117__$1;
(statearr_53183_54737[(1)] = (12));

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
var statearr_53184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53184[(0)] = cljs$core$async$mix_$_state_machine__39542__auto__);

(statearr_53184[(1)] = (1));

return statearr_53184;
});
var cljs$core$async$mix_$_state_machine__39542__auto____1 = (function (state_53117){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_53117);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e53185){var ex__39545__auto__ = e53185;
var statearr_53186_54745 = state_53117;
(statearr_53186_54745[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_53117[(4)]))){
var statearr_53187_54746 = state_53117;
(statearr_53187_54746[(1)] = cljs.core.first((state_53117[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54747 = state_53117;
state_53117 = G__54747;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39542__auto__ = function(state_53117){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39542__auto____1.call(this,state_53117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39542__auto____0;
cljs$core$async$mix_$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39542__auto____1;
return cljs$core$async$mix_$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_53189 = f__39710__auto__();
(statearr_53189[(6)] = c__39709__auto___54677);

return statearr_53189;
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

var cljs$core$async$Pub$sub_STAR_$dyn_54751 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_54751(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_54756 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_54756(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_54757 = (function() {
var G__54758 = null;
var G__54758__1 = (function (p){
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
var G__54758__2 = (function (p,v){
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
G__54758 = function(p,v){
switch(arguments.length){
case 1:
return G__54758__1.call(this,p);
case 2:
return G__54758__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54758.cljs$core$IFn$_invoke$arity$1 = G__54758__1;
G__54758.cljs$core$IFn$_invoke$arity$2 = G__54758__2;
return G__54758;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__53195 = arguments.length;
switch (G__53195) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54757(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54757(p,v);
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
var G__53200 = arguments.length;
switch (G__53200) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__53197_SHARP_){
if(cljs.core.truth_((p1__53197_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53197_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__53197_SHARP_.call(null,topic)))){
return p1__53197_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53197_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53202 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53203){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53203 = meta53203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53204,meta53203__$1){
var self__ = this;
var _53204__$1 = this;
return (new cljs.core.async.t_cljs$core$async53202(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53203__$1));
}));

(cljs.core.async.t_cljs$core$async53202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53204){
var self__ = this;
var _53204__$1 = this;
return self__.meta53203;
}));

(cljs.core.async.t_cljs$core$async53202.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async53202.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53202.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async53202.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async53202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async53202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async53202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53203","meta53203",-477629683,null)], null);
}));

(cljs.core.async.t_cljs$core$async53202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53202");

(cljs.core.async.t_cljs$core$async53202.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async53202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53202.
 */
cljs.core.async.__GT_t_cljs$core$async53202 = (function cljs$core$async$__GT_t_cljs$core$async53202(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53203){
return (new cljs.core.async.t_cljs$core$async53202(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53203));
});

}

return (new cljs.core.async.t_cljs$core$async53202(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39709__auto___54772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_53280){
var state_val_53281 = (state_53280[(1)]);
if((state_val_53281 === (7))){
var inst_53276 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53283_54776 = state_53280__$1;
(statearr_53283_54776[(2)] = inst_53276);

(statearr_53283_54776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (20))){
var state_53280__$1 = state_53280;
var statearr_53284_54777 = state_53280__$1;
(statearr_53284_54777[(2)] = null);

(statearr_53284_54777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (1))){
var state_53280__$1 = state_53280;
var statearr_53285_54778 = state_53280__$1;
(statearr_53285_54778[(2)] = null);

(statearr_53285_54778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (24))){
var inst_53259 = (state_53280[(7)]);
var inst_53268 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53259);
var state_53280__$1 = state_53280;
var statearr_53287_54779 = state_53280__$1;
(statearr_53287_54779[(2)] = inst_53268);

(statearr_53287_54779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (4))){
var inst_53210 = (state_53280[(8)]);
var inst_53210__$1 = (state_53280[(2)]);
var inst_53211 = (inst_53210__$1 == null);
var state_53280__$1 = (function (){var statearr_53288 = state_53280;
(statearr_53288[(8)] = inst_53210__$1);

return statearr_53288;
})();
if(cljs.core.truth_(inst_53211)){
var statearr_53289_54783 = state_53280__$1;
(statearr_53289_54783[(1)] = (5));

} else {
var statearr_53290_54784 = state_53280__$1;
(statearr_53290_54784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (15))){
var inst_53253 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53291_54785 = state_53280__$1;
(statearr_53291_54785[(2)] = inst_53253);

(statearr_53291_54785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (21))){
var inst_53273 = (state_53280[(2)]);
var state_53280__$1 = (function (){var statearr_53292 = state_53280;
(statearr_53292[(9)] = inst_53273);

return statearr_53292;
})();
var statearr_53293_54789 = state_53280__$1;
(statearr_53293_54789[(2)] = null);

(statearr_53293_54789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (13))){
var inst_53235 = (state_53280[(10)]);
var inst_53237 = cljs.core.chunked_seq_QMARK_(inst_53235);
var state_53280__$1 = state_53280;
if(inst_53237){
var statearr_53295_54790 = state_53280__$1;
(statearr_53295_54790[(1)] = (16));

} else {
var statearr_53296_54791 = state_53280__$1;
(statearr_53296_54791[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (22))){
var inst_53265 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
if(cljs.core.truth_(inst_53265)){
var statearr_53297_54792 = state_53280__$1;
(statearr_53297_54792[(1)] = (23));

} else {
var statearr_53298_54793 = state_53280__$1;
(statearr_53298_54793[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (6))){
var inst_53259 = (state_53280[(7)]);
var inst_53210 = (state_53280[(8)]);
var inst_53261 = (state_53280[(11)]);
var inst_53259__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53210) : topic_fn.call(null,inst_53210));
var inst_53260 = cljs.core.deref(mults);
var inst_53261__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53260,inst_53259__$1);
var state_53280__$1 = (function (){var statearr_53300 = state_53280;
(statearr_53300[(7)] = inst_53259__$1);

(statearr_53300[(11)] = inst_53261__$1);

return statearr_53300;
})();
if(cljs.core.truth_(inst_53261__$1)){
var statearr_53301_54797 = state_53280__$1;
(statearr_53301_54797[(1)] = (19));

} else {
var statearr_53302_54798 = state_53280__$1;
(statearr_53302_54798[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (25))){
var inst_53270 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53304_54799 = state_53280__$1;
(statearr_53304_54799[(2)] = inst_53270);

(statearr_53304_54799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (17))){
var inst_53235 = (state_53280[(10)]);
var inst_53244 = cljs.core.first(inst_53235);
var inst_53245 = cljs.core.async.muxch_STAR_(inst_53244);
var inst_53246 = cljs.core.async.close_BANG_(inst_53245);
var inst_53247 = cljs.core.next(inst_53235);
var inst_53220 = inst_53247;
var inst_53221 = null;
var inst_53222 = (0);
var inst_53223 = (0);
var state_53280__$1 = (function (){var statearr_53305 = state_53280;
(statearr_53305[(12)] = inst_53222);

(statearr_53305[(13)] = inst_53246);

(statearr_53305[(14)] = inst_53223);

(statearr_53305[(15)] = inst_53221);

(statearr_53305[(16)] = inst_53220);

return statearr_53305;
})();
var statearr_53306_54804 = state_53280__$1;
(statearr_53306_54804[(2)] = null);

(statearr_53306_54804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (3))){
var inst_53278 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53280__$1,inst_53278);
} else {
if((state_val_53281 === (12))){
var inst_53255 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53308_54805 = state_53280__$1;
(statearr_53308_54805[(2)] = inst_53255);

(statearr_53308_54805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (2))){
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53280__$1,(4),ch);
} else {
if((state_val_53281 === (23))){
var state_53280__$1 = state_53280;
var statearr_53309_54806 = state_53280__$1;
(statearr_53309_54806[(2)] = null);

(statearr_53309_54806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (19))){
var inst_53210 = (state_53280[(8)]);
var inst_53261 = (state_53280[(11)]);
var inst_53263 = cljs.core.async.muxch_STAR_(inst_53261);
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53280__$1,(22),inst_53263,inst_53210);
} else {
if((state_val_53281 === (11))){
var inst_53235 = (state_53280[(10)]);
var inst_53220 = (state_53280[(16)]);
var inst_53235__$1 = cljs.core.seq(inst_53220);
var state_53280__$1 = (function (){var statearr_53310 = state_53280;
(statearr_53310[(10)] = inst_53235__$1);

return statearr_53310;
})();
if(inst_53235__$1){
var statearr_53312_54807 = state_53280__$1;
(statearr_53312_54807[(1)] = (13));

} else {
var statearr_53313_54808 = state_53280__$1;
(statearr_53313_54808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (9))){
var inst_53257 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53314_54809 = state_53280__$1;
(statearr_53314_54809[(2)] = inst_53257);

(statearr_53314_54809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (5))){
var inst_53217 = cljs.core.deref(mults);
var inst_53218 = cljs.core.vals(inst_53217);
var inst_53219 = cljs.core.seq(inst_53218);
var inst_53220 = inst_53219;
var inst_53221 = null;
var inst_53222 = (0);
var inst_53223 = (0);
var state_53280__$1 = (function (){var statearr_53315 = state_53280;
(statearr_53315[(12)] = inst_53222);

(statearr_53315[(14)] = inst_53223);

(statearr_53315[(15)] = inst_53221);

(statearr_53315[(16)] = inst_53220);

return statearr_53315;
})();
var statearr_53316_54811 = state_53280__$1;
(statearr_53316_54811[(2)] = null);

(statearr_53316_54811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (14))){
var state_53280__$1 = state_53280;
var statearr_53321_54812 = state_53280__$1;
(statearr_53321_54812[(2)] = null);

(statearr_53321_54812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (16))){
var inst_53235 = (state_53280[(10)]);
var inst_53239 = cljs.core.chunk_first(inst_53235);
var inst_53240 = cljs.core.chunk_rest(inst_53235);
var inst_53241 = cljs.core.count(inst_53239);
var inst_53220 = inst_53240;
var inst_53221 = inst_53239;
var inst_53222 = inst_53241;
var inst_53223 = (0);
var state_53280__$1 = (function (){var statearr_53322 = state_53280;
(statearr_53322[(12)] = inst_53222);

(statearr_53322[(14)] = inst_53223);

(statearr_53322[(15)] = inst_53221);

(statearr_53322[(16)] = inst_53220);

return statearr_53322;
})();
var statearr_53323_54814 = state_53280__$1;
(statearr_53323_54814[(2)] = null);

(statearr_53323_54814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (10))){
var inst_53222 = (state_53280[(12)]);
var inst_53223 = (state_53280[(14)]);
var inst_53221 = (state_53280[(15)]);
var inst_53220 = (state_53280[(16)]);
var inst_53229 = cljs.core._nth(inst_53221,inst_53223);
var inst_53230 = cljs.core.async.muxch_STAR_(inst_53229);
var inst_53231 = cljs.core.async.close_BANG_(inst_53230);
var inst_53232 = (inst_53223 + (1));
var tmp53318 = inst_53222;
var tmp53319 = inst_53221;
var tmp53320 = inst_53220;
var inst_53220__$1 = tmp53320;
var inst_53221__$1 = tmp53319;
var inst_53222__$1 = tmp53318;
var inst_53223__$1 = inst_53232;
var state_53280__$1 = (function (){var statearr_53325 = state_53280;
(statearr_53325[(12)] = inst_53222__$1);

(statearr_53325[(14)] = inst_53223__$1);

(statearr_53325[(15)] = inst_53221__$1);

(statearr_53325[(16)] = inst_53220__$1);

(statearr_53325[(17)] = inst_53231);

return statearr_53325;
})();
var statearr_53326_54815 = state_53280__$1;
(statearr_53326_54815[(2)] = null);

(statearr_53326_54815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (18))){
var inst_53250 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53327_54816 = state_53280__$1;
(statearr_53327_54816[(2)] = inst_53250);

(statearr_53327_54816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (8))){
var inst_53222 = (state_53280[(12)]);
var inst_53223 = (state_53280[(14)]);
var inst_53225 = (inst_53223 < inst_53222);
var inst_53226 = inst_53225;
var state_53280__$1 = state_53280;
if(cljs.core.truth_(inst_53226)){
var statearr_53328_54817 = state_53280__$1;
(statearr_53328_54817[(1)] = (10));

} else {
var statearr_53329_54818 = state_53280__$1;
(statearr_53329_54818[(1)] = (11));

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
var statearr_53330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53330[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_53330[(1)] = (1));

return statearr_53330;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_53280){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_53280);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e53331){var ex__39545__auto__ = e53331;
var statearr_53332_54820 = state_53280;
(statearr_53332_54820[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_53280[(4)]))){
var statearr_53333_54822 = state_53280;
(statearr_53333_54822[(1)] = cljs.core.first((state_53280[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54823 = state_53280;
state_53280 = G__54823;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_53280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_53280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_53335 = f__39710__auto__();
(statearr_53335[(6)] = c__39709__auto___54772);

return statearr_53335;
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
var G__53337 = arguments.length;
switch (G__53337) {
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
var G__53341 = arguments.length;
switch (G__53341) {
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
var G__53345 = arguments.length;
switch (G__53345) {
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
var c__39709__auto___54842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_53390){
var state_val_53391 = (state_53390[(1)]);
if((state_val_53391 === (7))){
var state_53390__$1 = state_53390;
var statearr_53392_54844 = state_53390__$1;
(statearr_53392_54844[(2)] = null);

(statearr_53392_54844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (1))){
var state_53390__$1 = state_53390;
var statearr_53393_54845 = state_53390__$1;
(statearr_53393_54845[(2)] = null);

(statearr_53393_54845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (4))){
var inst_53349 = (state_53390[(7)]);
var inst_53348 = (state_53390[(8)]);
var inst_53351 = (inst_53349 < inst_53348);
var state_53390__$1 = state_53390;
if(cljs.core.truth_(inst_53351)){
var statearr_53394_54846 = state_53390__$1;
(statearr_53394_54846[(1)] = (6));

} else {
var statearr_53395_54847 = state_53390__$1;
(statearr_53395_54847[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (15))){
var inst_53375 = (state_53390[(9)]);
var inst_53380 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_53375);
var state_53390__$1 = state_53390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53390__$1,(17),out,inst_53380);
} else {
if((state_val_53391 === (13))){
var inst_53375 = (state_53390[(9)]);
var inst_53375__$1 = (state_53390[(2)]);
var inst_53376 = cljs.core.some(cljs.core.nil_QMARK_,inst_53375__$1);
var state_53390__$1 = (function (){var statearr_53396 = state_53390;
(statearr_53396[(9)] = inst_53375__$1);

return statearr_53396;
})();
if(cljs.core.truth_(inst_53376)){
var statearr_53397_54848 = state_53390__$1;
(statearr_53397_54848[(1)] = (14));

} else {
var statearr_53398_54849 = state_53390__$1;
(statearr_53398_54849[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (6))){
var state_53390__$1 = state_53390;
var statearr_53399_54851 = state_53390__$1;
(statearr_53399_54851[(2)] = null);

(statearr_53399_54851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (17))){
var inst_53382 = (state_53390[(2)]);
var state_53390__$1 = (function (){var statearr_53401 = state_53390;
(statearr_53401[(10)] = inst_53382);

return statearr_53401;
})();
var statearr_53402_54852 = state_53390__$1;
(statearr_53402_54852[(2)] = null);

(statearr_53402_54852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (3))){
var inst_53388 = (state_53390[(2)]);
var state_53390__$1 = state_53390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53390__$1,inst_53388);
} else {
if((state_val_53391 === (12))){
var _ = (function (){var statearr_53403 = state_53390;
(statearr_53403[(4)] = cljs.core.rest((state_53390[(4)])));

return statearr_53403;
})();
var state_53390__$1 = state_53390;
var ex53400 = (state_53390__$1[(2)]);
var statearr_53404_54857 = state_53390__$1;
(statearr_53404_54857[(5)] = ex53400);


if((ex53400 instanceof Object)){
var statearr_53405_54858 = state_53390__$1;
(statearr_53405_54858[(1)] = (11));

(statearr_53405_54858[(5)] = null);

} else {
throw ex53400;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (2))){
var inst_53347 = cljs.core.reset_BANG_(dctr,cnt);
var inst_53348 = cnt;
var inst_53349 = (0);
var state_53390__$1 = (function (){var statearr_53409 = state_53390;
(statearr_53409[(7)] = inst_53349);

(statearr_53409[(11)] = inst_53347);

(statearr_53409[(8)] = inst_53348);

return statearr_53409;
})();
var statearr_53410_54860 = state_53390__$1;
(statearr_53410_54860[(2)] = null);

(statearr_53410_54860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (11))){
var inst_53353 = (state_53390[(2)]);
var inst_53354 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_53390__$1 = (function (){var statearr_53411 = state_53390;
(statearr_53411[(12)] = inst_53353);

return statearr_53411;
})();
var statearr_53414_54861 = state_53390__$1;
(statearr_53414_54861[(2)] = inst_53354);

(statearr_53414_54861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (9))){
var inst_53349 = (state_53390[(7)]);
var _ = (function (){var statearr_53416 = state_53390;
(statearr_53416[(4)] = cljs.core.cons((12),(state_53390[(4)])));

return statearr_53416;
})();
var inst_53360 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_53349) : chs__$1.call(null,inst_53349));
var inst_53361 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_53349) : done.call(null,inst_53349));
var inst_53362 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_53360,inst_53361);
var ___$1 = (function (){var statearr_53420 = state_53390;
(statearr_53420[(4)] = cljs.core.rest((state_53390[(4)])));

return statearr_53420;
})();
var state_53390__$1 = state_53390;
var statearr_53421_54862 = state_53390__$1;
(statearr_53421_54862[(2)] = inst_53362);

(statearr_53421_54862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (5))){
var inst_53372 = (state_53390[(2)]);
var state_53390__$1 = (function (){var statearr_53422 = state_53390;
(statearr_53422[(13)] = inst_53372);

return statearr_53422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53390__$1,(13),dchan);
} else {
if((state_val_53391 === (14))){
var inst_53378 = cljs.core.async.close_BANG_(out);
var state_53390__$1 = state_53390;
var statearr_53423_54863 = state_53390__$1;
(statearr_53423_54863[(2)] = inst_53378);

(statearr_53423_54863[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (16))){
var inst_53385 = (state_53390[(2)]);
var state_53390__$1 = state_53390;
var statearr_53424_54865 = state_53390__$1;
(statearr_53424_54865[(2)] = inst_53385);

(statearr_53424_54865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (10))){
var inst_53349 = (state_53390[(7)]);
var inst_53365 = (state_53390[(2)]);
var inst_53366 = (inst_53349 + (1));
var inst_53349__$1 = inst_53366;
var state_53390__$1 = (function (){var statearr_53426 = state_53390;
(statearr_53426[(7)] = inst_53349__$1);

(statearr_53426[(14)] = inst_53365);

return statearr_53426;
})();
var statearr_53429_54866 = state_53390__$1;
(statearr_53429_54866[(2)] = null);

(statearr_53429_54866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53391 === (8))){
var inst_53370 = (state_53390[(2)]);
var state_53390__$1 = state_53390;
var statearr_53431_54867 = state_53390__$1;
(statearr_53431_54867[(2)] = inst_53370);

(statearr_53431_54867[(1)] = (5));


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
var statearr_53433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53433[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_53433[(1)] = (1));

return statearr_53433;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_53390){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_53390);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e53436){var ex__39545__auto__ = e53436;
var statearr_53437_54872 = state_53390;
(statearr_53437_54872[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_53390[(4)]))){
var statearr_53439_54873 = state_53390;
(statearr_53439_54873[(1)] = cljs.core.first((state_53390[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54874 = state_53390;
state_53390 = G__54874;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_53390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_53390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_53441 = f__39710__auto__();
(statearr_53441[(6)] = c__39709__auto___54842);

return statearr_53441;
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
var G__53448 = arguments.length;
switch (G__53448) {
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
var c__39709__auto___54876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_53491){
var state_val_53492 = (state_53491[(1)]);
if((state_val_53492 === (7))){
var inst_53468 = (state_53491[(7)]);
var inst_53466 = (state_53491[(8)]);
var inst_53466__$1 = (state_53491[(2)]);
var inst_53468__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53466__$1,(0),null);
var inst_53469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53466__$1,(1),null);
var inst_53470 = (inst_53468__$1 == null);
var state_53491__$1 = (function (){var statearr_53496 = state_53491;
(statearr_53496[(7)] = inst_53468__$1);

(statearr_53496[(9)] = inst_53469);

(statearr_53496[(8)] = inst_53466__$1);

return statearr_53496;
})();
if(cljs.core.truth_(inst_53470)){
var statearr_53498_54877 = state_53491__$1;
(statearr_53498_54877[(1)] = (8));

} else {
var statearr_53499_54878 = state_53491__$1;
(statearr_53499_54878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53492 === (1))){
var inst_53455 = cljs.core.vec(chs);
var inst_53457 = inst_53455;
var state_53491__$1 = (function (){var statearr_53500 = state_53491;
(statearr_53500[(10)] = inst_53457);

return statearr_53500;
})();
var statearr_53502_54879 = state_53491__$1;
(statearr_53502_54879[(2)] = null);

(statearr_53502_54879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53492 === (4))){
var inst_53457 = (state_53491[(10)]);
var state_53491__$1 = state_53491;
return cljs.core.async.ioc_alts_BANG_(state_53491__$1,(7),inst_53457);
} else {
if((state_val_53492 === (6))){
var inst_53484 = (state_53491[(2)]);
var state_53491__$1 = state_53491;
var statearr_53505_54880 = state_53491__$1;
(statearr_53505_54880[(2)] = inst_53484);

(statearr_53505_54880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53492 === (3))){
var inst_53486 = (state_53491[(2)]);
var state_53491__$1 = state_53491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53491__$1,inst_53486);
} else {
if((state_val_53492 === (2))){
var inst_53457 = (state_53491[(10)]);
var inst_53459 = cljs.core.count(inst_53457);
var inst_53460 = (inst_53459 > (0));
var state_53491__$1 = state_53491;
if(cljs.core.truth_(inst_53460)){
var statearr_53509_54881 = state_53491__$1;
(statearr_53509_54881[(1)] = (4));

} else {
var statearr_53511_54882 = state_53491__$1;
(statearr_53511_54882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53492 === (11))){
var inst_53457 = (state_53491[(10)]);
var inst_53477 = (state_53491[(2)]);
var tmp53507 = inst_53457;
var inst_53457__$1 = tmp53507;
var state_53491__$1 = (function (){var statearr_53514 = state_53491;
(statearr_53514[(10)] = inst_53457__$1);

(statearr_53514[(11)] = inst_53477);

return statearr_53514;
})();
var statearr_53515_54885 = state_53491__$1;
(statearr_53515_54885[(2)] = null);

(statearr_53515_54885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53492 === (9))){
var inst_53468 = (state_53491[(7)]);
var state_53491__$1 = state_53491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53491__$1,(11),out,inst_53468);
} else {
if((state_val_53492 === (5))){
var inst_53482 = cljs.core.async.close_BANG_(out);
var state_53491__$1 = state_53491;
var statearr_53520_54886 = state_53491__$1;
(statearr_53520_54886[(2)] = inst_53482);

(statearr_53520_54886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53492 === (10))){
var inst_53480 = (state_53491[(2)]);
var state_53491__$1 = state_53491;
var statearr_53521_54887 = state_53491__$1;
(statearr_53521_54887[(2)] = inst_53480);

(statearr_53521_54887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53492 === (8))){
var inst_53468 = (state_53491[(7)]);
var inst_53457 = (state_53491[(10)]);
var inst_53469 = (state_53491[(9)]);
var inst_53466 = (state_53491[(8)]);
var inst_53472 = (function (){var cs = inst_53457;
var vec__53462 = inst_53466;
var v = inst_53468;
var c = inst_53469;
return (function (p1__53445_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53445_SHARP_);
});
})();
var inst_53473 = cljs.core.filterv(inst_53472,inst_53457);
var inst_53457__$1 = inst_53473;
var state_53491__$1 = (function (){var statearr_53526 = state_53491;
(statearr_53526[(10)] = inst_53457__$1);

return statearr_53526;
})();
var statearr_53527_54889 = state_53491__$1;
(statearr_53527_54889[(2)] = null);

(statearr_53527_54889[(1)] = (2));


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
var statearr_53529 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53529[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_53529[(1)] = (1));

return statearr_53529;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_53491){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_53491);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e53533){var ex__39545__auto__ = e53533;
var statearr_53534_54890 = state_53491;
(statearr_53534_54890[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_53491[(4)]))){
var statearr_53536_54891 = state_53491;
(statearr_53536_54891[(1)] = cljs.core.first((state_53491[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54892 = state_53491;
state_53491 = G__54892;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_53491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_53491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_53540 = f__39710__auto__();
(statearr_53540[(6)] = c__39709__auto___54876);

return statearr_53540;
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
var G__53547 = arguments.length;
switch (G__53547) {
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
var c__39709__auto___54907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_53583){
var state_val_53585 = (state_53583[(1)]);
if((state_val_53585 === (7))){
var inst_53562 = (state_53583[(7)]);
var inst_53562__$1 = (state_53583[(2)]);
var inst_53563 = (inst_53562__$1 == null);
var inst_53564 = cljs.core.not(inst_53563);
var state_53583__$1 = (function (){var statearr_53590 = state_53583;
(statearr_53590[(7)] = inst_53562__$1);

return statearr_53590;
})();
if(inst_53564){
var statearr_53591_54908 = state_53583__$1;
(statearr_53591_54908[(1)] = (8));

} else {
var statearr_53592_54909 = state_53583__$1;
(statearr_53592_54909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (1))){
var inst_53556 = (0);
var state_53583__$1 = (function (){var statearr_53595 = state_53583;
(statearr_53595[(8)] = inst_53556);

return statearr_53595;
})();
var statearr_53596_54910 = state_53583__$1;
(statearr_53596_54910[(2)] = null);

(statearr_53596_54910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (4))){
var state_53583__$1 = state_53583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53583__$1,(7),ch);
} else {
if((state_val_53585 === (6))){
var inst_53575 = (state_53583[(2)]);
var state_53583__$1 = state_53583;
var statearr_53600_54911 = state_53583__$1;
(statearr_53600_54911[(2)] = inst_53575);

(statearr_53600_54911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (3))){
var inst_53577 = (state_53583[(2)]);
var inst_53578 = cljs.core.async.close_BANG_(out);
var state_53583__$1 = (function (){var statearr_53602 = state_53583;
(statearr_53602[(9)] = inst_53577);

return statearr_53602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53583__$1,inst_53578);
} else {
if((state_val_53585 === (2))){
var inst_53556 = (state_53583[(8)]);
var inst_53558 = (inst_53556 < n);
var state_53583__$1 = state_53583;
if(cljs.core.truth_(inst_53558)){
var statearr_53606_54913 = state_53583__$1;
(statearr_53606_54913[(1)] = (4));

} else {
var statearr_53607_54914 = state_53583__$1;
(statearr_53607_54914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (11))){
var inst_53556 = (state_53583[(8)]);
var inst_53567 = (state_53583[(2)]);
var inst_53568 = (inst_53556 + (1));
var inst_53556__$1 = inst_53568;
var state_53583__$1 = (function (){var statearr_53609 = state_53583;
(statearr_53609[(8)] = inst_53556__$1);

(statearr_53609[(10)] = inst_53567);

return statearr_53609;
})();
var statearr_53610_54915 = state_53583__$1;
(statearr_53610_54915[(2)] = null);

(statearr_53610_54915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (9))){
var state_53583__$1 = state_53583;
var statearr_53613_54916 = state_53583__$1;
(statearr_53613_54916[(2)] = null);

(statearr_53613_54916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (5))){
var state_53583__$1 = state_53583;
var statearr_53615_54917 = state_53583__$1;
(statearr_53615_54917[(2)] = null);

(statearr_53615_54917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (10))){
var inst_53572 = (state_53583[(2)]);
var state_53583__$1 = state_53583;
var statearr_53617_54918 = state_53583__$1;
(statearr_53617_54918[(2)] = inst_53572);

(statearr_53617_54918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (8))){
var inst_53562 = (state_53583[(7)]);
var state_53583__$1 = state_53583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53583__$1,(11),out,inst_53562);
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
var statearr_53622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53622[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_53622[(1)] = (1));

return statearr_53622;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_53583){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_53583);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e53624){var ex__39545__auto__ = e53624;
var statearr_53625_54919 = state_53583;
(statearr_53625_54919[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_53583[(4)]))){
var statearr_53628_54920 = state_53583;
(statearr_53628_54920[(1)] = cljs.core.first((state_53583[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54921 = state_53583;
state_53583 = G__54921;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_53583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_53583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_53634 = f__39710__auto__();
(statearr_53634[(6)] = c__39709__auto___54907);

return statearr_53634;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53640 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53640 = (function (f,ch,meta53641){
this.f = f;
this.ch = ch;
this.meta53641 = meta53641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53642,meta53641__$1){
var self__ = this;
var _53642__$1 = this;
return (new cljs.core.async.t_cljs$core$async53640(self__.f,self__.ch,meta53641__$1));
}));

(cljs.core.async.t_cljs$core$async53640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53642){
var self__ = this;
var _53642__$1 = this;
return self__.meta53641;
}));

(cljs.core.async.t_cljs$core$async53640.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53640.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53640.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53640.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53640.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53656 = (function (f,ch,meta53641,_,fn1,meta53657){
this.f = f;
this.ch = ch;
this.meta53641 = meta53641;
this._ = _;
this.fn1 = fn1;
this.meta53657 = meta53657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53658,meta53657__$1){
var self__ = this;
var _53658__$1 = this;
return (new cljs.core.async.t_cljs$core$async53656(self__.f,self__.ch,self__.meta53641,self__._,self__.fn1,meta53657__$1));
}));

(cljs.core.async.t_cljs$core$async53656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53658){
var self__ = this;
var _53658__$1 = this;
return self__.meta53657;
}));

(cljs.core.async.t_cljs$core$async53656.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async53656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__53638_SHARP_){
var G__53667 = (((p1__53638_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53638_SHARP_) : self__.f.call(null,p1__53638_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53667) : f1.call(null,G__53667));
});
}));

(cljs.core.async.t_cljs$core$async53656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53641","meta53641",-1727595032,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53640","cljs.core.async/t_cljs$core$async53640",-1373047985,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53657","meta53657",-626987005,null)], null);
}));

(cljs.core.async.t_cljs$core$async53656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53656");

(cljs.core.async.t_cljs$core$async53656.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async53656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53656.
 */
cljs.core.async.__GT_t_cljs$core$async53656 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53656(f__$1,ch__$1,meta53641__$1,___$2,fn1__$1,meta53657){
return (new cljs.core.async.t_cljs$core$async53656(f__$1,ch__$1,meta53641__$1,___$2,fn1__$1,meta53657));
});

}

return (new cljs.core.async.t_cljs$core$async53656(self__.f,self__.ch,self__.meta53641,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53677 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53677) : self__.f.call(null,G__53677));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async53640.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53640.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async53640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53641","meta53641",-1727595032,null)], null);
}));

(cljs.core.async.t_cljs$core$async53640.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53640");

(cljs.core.async.t_cljs$core$async53640.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async53640");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53640.
 */
cljs.core.async.__GT_t_cljs$core$async53640 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53640(f__$1,ch__$1,meta53641){
return (new cljs.core.async.t_cljs$core$async53640(f__$1,ch__$1,meta53641));
});

}

return (new cljs.core.async.t_cljs$core$async53640(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53692 = (function (f,ch,meta53693){
this.f = f;
this.ch = ch;
this.meta53693 = meta53693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53694,meta53693__$1){
var self__ = this;
var _53694__$1 = this;
return (new cljs.core.async.t_cljs$core$async53692(self__.f,self__.ch,meta53693__$1));
}));

(cljs.core.async.t_cljs$core$async53692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53694){
var self__ = this;
var _53694__$1 = this;
return self__.meta53693;
}));

(cljs.core.async.t_cljs$core$async53692.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53692.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53692.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async53692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53693","meta53693",-619360645,null)], null);
}));

(cljs.core.async.t_cljs$core$async53692.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53692");

(cljs.core.async.t_cljs$core$async53692.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async53692");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53692.
 */
cljs.core.async.__GT_t_cljs$core$async53692 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53692(f__$1,ch__$1,meta53693){
return (new cljs.core.async.t_cljs$core$async53692(f__$1,ch__$1,meta53693));
});

}

return (new cljs.core.async.t_cljs$core$async53692(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53711 = (function (p,ch,meta53712){
this.p = p;
this.ch = ch;
this.meta53712 = meta53712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53713,meta53712__$1){
var self__ = this;
var _53713__$1 = this;
return (new cljs.core.async.t_cljs$core$async53711(self__.p,self__.ch,meta53712__$1));
}));

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53713){
var self__ = this;
var _53713__$1 = this;
return self__.meta53712;
}));

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async53711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53712","meta53712",2043479313,null)], null);
}));

(cljs.core.async.t_cljs$core$async53711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53711");

(cljs.core.async.t_cljs$core$async53711.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async53711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53711.
 */
cljs.core.async.__GT_t_cljs$core$async53711 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53711(p__$1,ch__$1,meta53712){
return (new cljs.core.async.t_cljs$core$async53711(p__$1,ch__$1,meta53712));
});

}

return (new cljs.core.async.t_cljs$core$async53711(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__53735 = arguments.length;
switch (G__53735) {
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
var c__39709__auto___54941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_53761){
var state_val_53762 = (state_53761[(1)]);
if((state_val_53762 === (7))){
var inst_53757 = (state_53761[(2)]);
var state_53761__$1 = state_53761;
var statearr_53771_54942 = state_53761__$1;
(statearr_53771_54942[(2)] = inst_53757);

(statearr_53771_54942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53762 === (1))){
var state_53761__$1 = state_53761;
var statearr_53772_54944 = state_53761__$1;
(statearr_53772_54944[(2)] = null);

(statearr_53772_54944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53762 === (4))){
var inst_53743 = (state_53761[(7)]);
var inst_53743__$1 = (state_53761[(2)]);
var inst_53744 = (inst_53743__$1 == null);
var state_53761__$1 = (function (){var statearr_53773 = state_53761;
(statearr_53773[(7)] = inst_53743__$1);

return statearr_53773;
})();
if(cljs.core.truth_(inst_53744)){
var statearr_53777_54954 = state_53761__$1;
(statearr_53777_54954[(1)] = (5));

} else {
var statearr_53778_54955 = state_53761__$1;
(statearr_53778_54955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53762 === (6))){
var inst_53743 = (state_53761[(7)]);
var inst_53748 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53743) : p.call(null,inst_53743));
var state_53761__$1 = state_53761;
if(cljs.core.truth_(inst_53748)){
var statearr_53780_54956 = state_53761__$1;
(statearr_53780_54956[(1)] = (8));

} else {
var statearr_53781_54957 = state_53761__$1;
(statearr_53781_54957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53762 === (3))){
var inst_53759 = (state_53761[(2)]);
var state_53761__$1 = state_53761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53761__$1,inst_53759);
} else {
if((state_val_53762 === (2))){
var state_53761__$1 = state_53761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53761__$1,(4),ch);
} else {
if((state_val_53762 === (11))){
var inst_53751 = (state_53761[(2)]);
var state_53761__$1 = state_53761;
var statearr_53786_54958 = state_53761__$1;
(statearr_53786_54958[(2)] = inst_53751);

(statearr_53786_54958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53762 === (9))){
var state_53761__$1 = state_53761;
var statearr_53787_54962 = state_53761__$1;
(statearr_53787_54962[(2)] = null);

(statearr_53787_54962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53762 === (5))){
var inst_53746 = cljs.core.async.close_BANG_(out);
var state_53761__$1 = state_53761;
var statearr_53788_54968 = state_53761__$1;
(statearr_53788_54968[(2)] = inst_53746);

(statearr_53788_54968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53762 === (10))){
var inst_53754 = (state_53761[(2)]);
var state_53761__$1 = (function (){var statearr_53793 = state_53761;
(statearr_53793[(8)] = inst_53754);

return statearr_53793;
})();
var statearr_53794_54969 = state_53761__$1;
(statearr_53794_54969[(2)] = null);

(statearr_53794_54969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53762 === (8))){
var inst_53743 = (state_53761[(7)]);
var state_53761__$1 = state_53761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53761__$1,(11),out,inst_53743);
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
var statearr_53796 = [null,null,null,null,null,null,null,null,null];
(statearr_53796[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_53796[(1)] = (1));

return statearr_53796;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_53761){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_53761);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e53797){var ex__39545__auto__ = e53797;
var statearr_53798_54977 = state_53761;
(statearr_53798_54977[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_53761[(4)]))){
var statearr_53799_54978 = state_53761;
(statearr_53799_54978[(1)] = cljs.core.first((state_53761[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54979 = state_53761;
state_53761 = G__54979;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_53761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_53761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_53800 = f__39710__auto__();
(statearr_53800[(6)] = c__39709__auto___54941);

return statearr_53800;
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
var G__53810 = arguments.length;
switch (G__53810) {
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
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_53885){
var state_val_53886 = (state_53885[(1)]);
if((state_val_53886 === (7))){
var inst_53881 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
var statearr_53895_54982 = state_53885__$1;
(statearr_53895_54982[(2)] = inst_53881);

(statearr_53895_54982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (20))){
var inst_53850 = (state_53885[(7)]);
var inst_53862 = (state_53885[(2)]);
var inst_53863 = cljs.core.next(inst_53850);
var inst_53835 = inst_53863;
var inst_53836 = null;
var inst_53837 = (0);
var inst_53838 = (0);
var state_53885__$1 = (function (){var statearr_53896 = state_53885;
(statearr_53896[(8)] = inst_53862);

(statearr_53896[(9)] = inst_53837);

(statearr_53896[(10)] = inst_53838);

(statearr_53896[(11)] = inst_53836);

(statearr_53896[(12)] = inst_53835);

return statearr_53896;
})();
var statearr_53897_54985 = state_53885__$1;
(statearr_53897_54985[(2)] = null);

(statearr_53897_54985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (1))){
var state_53885__$1 = state_53885;
var statearr_53902_54986 = state_53885__$1;
(statearr_53902_54986[(2)] = null);

(statearr_53902_54986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (4))){
var inst_53821 = (state_53885[(13)]);
var inst_53821__$1 = (state_53885[(2)]);
var inst_53822 = (inst_53821__$1 == null);
var state_53885__$1 = (function (){var statearr_53903 = state_53885;
(statearr_53903[(13)] = inst_53821__$1);

return statearr_53903;
})();
if(cljs.core.truth_(inst_53822)){
var statearr_53904_54992 = state_53885__$1;
(statearr_53904_54992[(1)] = (5));

} else {
var statearr_53905_54993 = state_53885__$1;
(statearr_53905_54993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (15))){
var state_53885__$1 = state_53885;
var statearr_53913_54994 = state_53885__$1;
(statearr_53913_54994[(2)] = null);

(statearr_53913_54994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (21))){
var state_53885__$1 = state_53885;
var statearr_53914_54995 = state_53885__$1;
(statearr_53914_54995[(2)] = null);

(statearr_53914_54995[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (13))){
var inst_53837 = (state_53885[(9)]);
var inst_53838 = (state_53885[(10)]);
var inst_53836 = (state_53885[(11)]);
var inst_53835 = (state_53885[(12)]);
var inst_53846 = (state_53885[(2)]);
var inst_53847 = (inst_53838 + (1));
var tmp53909 = inst_53837;
var tmp53910 = inst_53836;
var tmp53911 = inst_53835;
var inst_53835__$1 = tmp53911;
var inst_53836__$1 = tmp53910;
var inst_53837__$1 = tmp53909;
var inst_53838__$1 = inst_53847;
var state_53885__$1 = (function (){var statearr_53918 = state_53885;
(statearr_53918[(9)] = inst_53837__$1);

(statearr_53918[(10)] = inst_53838__$1);

(statearr_53918[(11)] = inst_53836__$1);

(statearr_53918[(12)] = inst_53835__$1);

(statearr_53918[(14)] = inst_53846);

return statearr_53918;
})();
var statearr_53920_54996 = state_53885__$1;
(statearr_53920_54996[(2)] = null);

(statearr_53920_54996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (22))){
var state_53885__$1 = state_53885;
var statearr_53921_54997 = state_53885__$1;
(statearr_53921_54997[(2)] = null);

(statearr_53921_54997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (6))){
var inst_53821 = (state_53885[(13)]);
var inst_53833 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53821) : f.call(null,inst_53821));
var inst_53834 = cljs.core.seq(inst_53833);
var inst_53835 = inst_53834;
var inst_53836 = null;
var inst_53837 = (0);
var inst_53838 = (0);
var state_53885__$1 = (function (){var statearr_53923 = state_53885;
(statearr_53923[(9)] = inst_53837);

(statearr_53923[(10)] = inst_53838);

(statearr_53923[(11)] = inst_53836);

(statearr_53923[(12)] = inst_53835);

return statearr_53923;
})();
var statearr_53924_54999 = state_53885__$1;
(statearr_53924_54999[(2)] = null);

(statearr_53924_54999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (17))){
var inst_53850 = (state_53885[(7)]);
var inst_53855 = cljs.core.chunk_first(inst_53850);
var inst_53856 = cljs.core.chunk_rest(inst_53850);
var inst_53857 = cljs.core.count(inst_53855);
var inst_53835 = inst_53856;
var inst_53836 = inst_53855;
var inst_53837 = inst_53857;
var inst_53838 = (0);
var state_53885__$1 = (function (){var statearr_53925 = state_53885;
(statearr_53925[(9)] = inst_53837);

(statearr_53925[(10)] = inst_53838);

(statearr_53925[(11)] = inst_53836);

(statearr_53925[(12)] = inst_53835);

return statearr_53925;
})();
var statearr_53930_55004 = state_53885__$1;
(statearr_53930_55004[(2)] = null);

(statearr_53930_55004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (3))){
var inst_53883 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53885__$1,inst_53883);
} else {
if((state_val_53886 === (12))){
var inst_53871 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
var statearr_53935_55005 = state_53885__$1;
(statearr_53935_55005[(2)] = inst_53871);

(statearr_53935_55005[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (2))){
var state_53885__$1 = state_53885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53885__$1,(4),in$);
} else {
if((state_val_53886 === (23))){
var inst_53879 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
var statearr_53936_55006 = state_53885__$1;
(statearr_53936_55006[(2)] = inst_53879);

(statearr_53936_55006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (19))){
var inst_53866 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
var statearr_53940_55007 = state_53885__$1;
(statearr_53940_55007[(2)] = inst_53866);

(statearr_53940_55007[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (11))){
var inst_53850 = (state_53885[(7)]);
var inst_53835 = (state_53885[(12)]);
var inst_53850__$1 = cljs.core.seq(inst_53835);
var state_53885__$1 = (function (){var statearr_53942 = state_53885;
(statearr_53942[(7)] = inst_53850__$1);

return statearr_53942;
})();
if(inst_53850__$1){
var statearr_53943_55008 = state_53885__$1;
(statearr_53943_55008[(1)] = (14));

} else {
var statearr_53944_55009 = state_53885__$1;
(statearr_53944_55009[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (9))){
var inst_53873 = (state_53885[(2)]);
var inst_53874 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53885__$1 = (function (){var statearr_53948 = state_53885;
(statearr_53948[(15)] = inst_53873);

return statearr_53948;
})();
if(cljs.core.truth_(inst_53874)){
var statearr_53950_55010 = state_53885__$1;
(statearr_53950_55010[(1)] = (21));

} else {
var statearr_53951_55011 = state_53885__$1;
(statearr_53951_55011[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (5))){
var inst_53824 = cljs.core.async.close_BANG_(out);
var state_53885__$1 = state_53885;
var statearr_53952_55013 = state_53885__$1;
(statearr_53952_55013[(2)] = inst_53824);

(statearr_53952_55013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (14))){
var inst_53850 = (state_53885[(7)]);
var inst_53852 = cljs.core.chunked_seq_QMARK_(inst_53850);
var state_53885__$1 = state_53885;
if(inst_53852){
var statearr_53956_55014 = state_53885__$1;
(statearr_53956_55014[(1)] = (17));

} else {
var statearr_53957_55015 = state_53885__$1;
(statearr_53957_55015[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (16))){
var inst_53869 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
var statearr_53959_55016 = state_53885__$1;
(statearr_53959_55016[(2)] = inst_53869);

(statearr_53959_55016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (10))){
var inst_53838 = (state_53885[(10)]);
var inst_53836 = (state_53885[(11)]);
var inst_53844 = cljs.core._nth(inst_53836,inst_53838);
var state_53885__$1 = state_53885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53885__$1,(13),out,inst_53844);
} else {
if((state_val_53886 === (18))){
var inst_53850 = (state_53885[(7)]);
var inst_53860 = cljs.core.first(inst_53850);
var state_53885__$1 = state_53885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53885__$1,(20),out,inst_53860);
} else {
if((state_val_53886 === (8))){
var inst_53837 = (state_53885[(9)]);
var inst_53838 = (state_53885[(10)]);
var inst_53841 = (inst_53838 < inst_53837);
var inst_53842 = inst_53841;
var state_53885__$1 = state_53885;
if(cljs.core.truth_(inst_53842)){
var statearr_53960_55024 = state_53885__$1;
(statearr_53960_55024[(1)] = (10));

} else {
var statearr_53961_55026 = state_53885__$1;
(statearr_53961_55026[(1)] = (11));

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
var statearr_53962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53962[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__);

(statearr_53962[(1)] = (1));

return statearr_53962;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____1 = (function (state_53885){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_53885);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e53963){var ex__39545__auto__ = e53963;
var statearr_53964_55028 = state_53885;
(statearr_53964_55028[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_53885[(4)]))){
var statearr_53969_55029 = state_53885;
(statearr_53969_55029[(1)] = cljs.core.first((state_53885[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55030 = state_53885;
state_53885 = G__55030;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__ = function(state_53885){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____1.call(this,state_53885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39542__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_53970 = f__39710__auto__();
(statearr_53970[(6)] = c__39709__auto__);

return statearr_53970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));

return c__39709__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53973 = arguments.length;
switch (G__53973) {
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
var G__53977 = arguments.length;
switch (G__53977) {
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
var G__53979 = arguments.length;
switch (G__53979) {
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
var c__39709__auto___55041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_54003){
var state_val_54004 = (state_54003[(1)]);
if((state_val_54004 === (7))){
var inst_53998 = (state_54003[(2)]);
var state_54003__$1 = state_54003;
var statearr_54005_55042 = state_54003__$1;
(statearr_54005_55042[(2)] = inst_53998);

(statearr_54005_55042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (1))){
var inst_53980 = null;
var state_54003__$1 = (function (){var statearr_54006 = state_54003;
(statearr_54006[(7)] = inst_53980);

return statearr_54006;
})();
var statearr_54007_55043 = state_54003__$1;
(statearr_54007_55043[(2)] = null);

(statearr_54007_55043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (4))){
var inst_53983 = (state_54003[(8)]);
var inst_53983__$1 = (state_54003[(2)]);
var inst_53984 = (inst_53983__$1 == null);
var inst_53985 = cljs.core.not(inst_53984);
var state_54003__$1 = (function (){var statearr_54008 = state_54003;
(statearr_54008[(8)] = inst_53983__$1);

return statearr_54008;
})();
if(inst_53985){
var statearr_54009_55044 = state_54003__$1;
(statearr_54009_55044[(1)] = (5));

} else {
var statearr_54010_55045 = state_54003__$1;
(statearr_54010_55045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (6))){
var state_54003__$1 = state_54003;
var statearr_54011_55047 = state_54003__$1;
(statearr_54011_55047[(2)] = null);

(statearr_54011_55047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (3))){
var inst_54000 = (state_54003[(2)]);
var inst_54001 = cljs.core.async.close_BANG_(out);
var state_54003__$1 = (function (){var statearr_54012 = state_54003;
(statearr_54012[(9)] = inst_54000);

return statearr_54012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54003__$1,inst_54001);
} else {
if((state_val_54004 === (2))){
var state_54003__$1 = state_54003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54003__$1,(4),ch);
} else {
if((state_val_54004 === (11))){
var inst_53983 = (state_54003[(8)]);
var inst_53992 = (state_54003[(2)]);
var inst_53980 = inst_53983;
var state_54003__$1 = (function (){var statearr_54013 = state_54003;
(statearr_54013[(7)] = inst_53980);

(statearr_54013[(10)] = inst_53992);

return statearr_54013;
})();
var statearr_54014_55049 = state_54003__$1;
(statearr_54014_55049[(2)] = null);

(statearr_54014_55049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (9))){
var inst_53983 = (state_54003[(8)]);
var state_54003__$1 = state_54003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54003__$1,(11),out,inst_53983);
} else {
if((state_val_54004 === (5))){
var inst_53980 = (state_54003[(7)]);
var inst_53983 = (state_54003[(8)]);
var inst_53987 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53983,inst_53980);
var state_54003__$1 = state_54003;
if(inst_53987){
var statearr_54016_55050 = state_54003__$1;
(statearr_54016_55050[(1)] = (8));

} else {
var statearr_54017_55051 = state_54003__$1;
(statearr_54017_55051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (10))){
var inst_53995 = (state_54003[(2)]);
var state_54003__$1 = state_54003;
var statearr_54019_55052 = state_54003__$1;
(statearr_54019_55052[(2)] = inst_53995);

(statearr_54019_55052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54004 === (8))){
var inst_53980 = (state_54003[(7)]);
var tmp54015 = inst_53980;
var inst_53980__$1 = tmp54015;
var state_54003__$1 = (function (){var statearr_54021 = state_54003;
(statearr_54021[(7)] = inst_53980__$1);

return statearr_54021;
})();
var statearr_54022_55053 = state_54003__$1;
(statearr_54022_55053[(2)] = null);

(statearr_54022_55053[(1)] = (2));


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
var statearr_54023 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54023[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_54023[(1)] = (1));

return statearr_54023;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_54003){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_54003);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e54024){var ex__39545__auto__ = e54024;
var statearr_54025_55055 = state_54003;
(statearr_54025_55055[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_54003[(4)]))){
var statearr_54026_55056 = state_54003;
(statearr_54026_55056[(1)] = cljs.core.first((state_54003[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55057 = state_54003;
state_54003 = G__55057;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_54003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_54003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_54027 = f__39710__auto__();
(statearr_54027[(6)] = c__39709__auto___55041);

return statearr_54027;
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
var G__54031 = arguments.length;
switch (G__54031) {
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
var c__39709__auto___55059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_54071){
var state_val_54072 = (state_54071[(1)]);
if((state_val_54072 === (7))){
var inst_54067 = (state_54071[(2)]);
var state_54071__$1 = state_54071;
var statearr_54073_55064 = state_54071__$1;
(statearr_54073_55064[(2)] = inst_54067);

(statearr_54073_55064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54072 === (1))){
var inst_54032 = (new Array(n));
var inst_54033 = inst_54032;
var inst_54034 = (0);
var state_54071__$1 = (function (){var statearr_54074 = state_54071;
(statearr_54074[(7)] = inst_54033);

(statearr_54074[(8)] = inst_54034);

return statearr_54074;
})();
var statearr_54075_55065 = state_54071__$1;
(statearr_54075_55065[(2)] = null);

(statearr_54075_55065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54072 === (4))){
var inst_54037 = (state_54071[(9)]);
var inst_54037__$1 = (state_54071[(2)]);
var inst_54038 = (inst_54037__$1 == null);
var inst_54039 = cljs.core.not(inst_54038);
var state_54071__$1 = (function (){var statearr_54076 = state_54071;
(statearr_54076[(9)] = inst_54037__$1);

return statearr_54076;
})();
if(inst_54039){
var statearr_54077_55066 = state_54071__$1;
(statearr_54077_55066[(1)] = (5));

} else {
var statearr_54078_55067 = state_54071__$1;
(statearr_54078_55067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54072 === (15))){
var inst_54061 = (state_54071[(2)]);
var state_54071__$1 = state_54071;
var statearr_54079_55068 = state_54071__$1;
(statearr_54079_55068[(2)] = inst_54061);

(statearr_54079_55068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54072 === (13))){
var state_54071__$1 = state_54071;
var statearr_54080_55070 = state_54071__$1;
(statearr_54080_55070[(2)] = null);

(statearr_54080_55070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54072 === (6))){
var inst_54034 = (state_54071[(8)]);
var inst_54056 = (inst_54034 > (0));
var state_54071__$1 = state_54071;
if(cljs.core.truth_(inst_54056)){
var statearr_54082_55071 = state_54071__$1;
(statearr_54082_55071[(1)] = (12));

} else {
var statearr_54083_55072 = state_54071__$1;
(statearr_54083_55072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54072 === (3))){
var inst_54069 = (state_54071[(2)]);
var state_54071__$1 = state_54071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54071__$1,inst_54069);
} else {
if((state_val_54072 === (12))){
var inst_54033 = (state_54071[(7)]);
var inst_54059 = cljs.core.vec(inst_54033);
var state_54071__$1 = state_54071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54071__$1,(15),out,inst_54059);
} else {
if((state_val_54072 === (2))){
var state_54071__$1 = state_54071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54071__$1,(4),ch);
} else {
if((state_val_54072 === (11))){
var inst_54050 = (state_54071[(2)]);
var inst_54051 = (new Array(n));
var inst_54033 = inst_54051;
var inst_54034 = (0);
var state_54071__$1 = (function (){var statearr_54086 = state_54071;
(statearr_54086[(7)] = inst_54033);

(statearr_54086[(10)] = inst_54050);

(statearr_54086[(8)] = inst_54034);

return statearr_54086;
})();
var statearr_54090_55079 = state_54071__$1;
(statearr_54090_55079[(2)] = null);

(statearr_54090_55079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54072 === (9))){
var inst_54033 = (state_54071[(7)]);
var inst_54048 = cljs.core.vec(inst_54033);
var state_54071__$1 = state_54071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54071__$1,(11),out,inst_54048);
} else {
if((state_val_54072 === (5))){
var inst_54033 = (state_54071[(7)]);
var inst_54037 = (state_54071[(9)]);
var inst_54042 = (state_54071[(11)]);
var inst_54034 = (state_54071[(8)]);
var inst_54041 = (inst_54033[inst_54034] = inst_54037);
var inst_54042__$1 = (inst_54034 + (1));
var inst_54043 = (inst_54042__$1 < n);
var state_54071__$1 = (function (){var statearr_54092 = state_54071;
(statearr_54092[(12)] = inst_54041);

(statearr_54092[(11)] = inst_54042__$1);

return statearr_54092;
})();
if(cljs.core.truth_(inst_54043)){
var statearr_54093_55083 = state_54071__$1;
(statearr_54093_55083[(1)] = (8));

} else {
var statearr_54094_55084 = state_54071__$1;
(statearr_54094_55084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54072 === (14))){
var inst_54064 = (state_54071[(2)]);
var inst_54065 = cljs.core.async.close_BANG_(out);
var state_54071__$1 = (function (){var statearr_54098 = state_54071;
(statearr_54098[(13)] = inst_54064);

return statearr_54098;
})();
var statearr_54099_55085 = state_54071__$1;
(statearr_54099_55085[(2)] = inst_54065);

(statearr_54099_55085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54072 === (10))){
var inst_54054 = (state_54071[(2)]);
var state_54071__$1 = state_54071;
var statearr_54101_55086 = state_54071__$1;
(statearr_54101_55086[(2)] = inst_54054);

(statearr_54101_55086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54072 === (8))){
var inst_54033 = (state_54071[(7)]);
var inst_54042 = (state_54071[(11)]);
var tmp54096 = inst_54033;
var inst_54033__$1 = tmp54096;
var inst_54034 = inst_54042;
var state_54071__$1 = (function (){var statearr_54103 = state_54071;
(statearr_54103[(7)] = inst_54033__$1);

(statearr_54103[(8)] = inst_54034);

return statearr_54103;
})();
var statearr_54104_55091 = state_54071__$1;
(statearr_54104_55091[(2)] = null);

(statearr_54104_55091[(1)] = (2));


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
var statearr_54108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54108[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_54108[(1)] = (1));

return statearr_54108;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_54071){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_54071);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e54109){var ex__39545__auto__ = e54109;
var statearr_54110_55092 = state_54071;
(statearr_54110_55092[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_54071[(4)]))){
var statearr_54111_55093 = state_54071;
(statearr_54111_55093[(1)] = cljs.core.first((state_54071[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55094 = state_54071;
state_54071 = G__55094;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_54071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_54071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_54112 = f__39710__auto__();
(statearr_54112[(6)] = c__39709__auto___55059);

return statearr_54112;
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
var G__54133 = arguments.length;
switch (G__54133) {
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
var c__39709__auto___55102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39710__auto__ = (function (){var switch__39541__auto__ = (function (state_54191){
var state_val_54192 = (state_54191[(1)]);
if((state_val_54192 === (7))){
var inst_54187 = (state_54191[(2)]);
var state_54191__$1 = state_54191;
var statearr_54193_55103 = state_54191__$1;
(statearr_54193_55103[(2)] = inst_54187);

(statearr_54193_55103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (1))){
var inst_54144 = [];
var inst_54145 = inst_54144;
var inst_54146 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54191__$1 = (function (){var statearr_54198 = state_54191;
(statearr_54198[(7)] = inst_54145);

(statearr_54198[(8)] = inst_54146);

return statearr_54198;
})();
var statearr_54199_55114 = state_54191__$1;
(statearr_54199_55114[(2)] = null);

(statearr_54199_55114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (4))){
var inst_54149 = (state_54191[(9)]);
var inst_54149__$1 = (state_54191[(2)]);
var inst_54153 = (inst_54149__$1 == null);
var inst_54154 = cljs.core.not(inst_54153);
var state_54191__$1 = (function (){var statearr_54200 = state_54191;
(statearr_54200[(9)] = inst_54149__$1);

return statearr_54200;
})();
if(inst_54154){
var statearr_54201_55115 = state_54191__$1;
(statearr_54201_55115[(1)] = (5));

} else {
var statearr_54202_55116 = state_54191__$1;
(statearr_54202_55116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (15))){
var inst_54145 = (state_54191[(7)]);
var inst_54179 = cljs.core.vec(inst_54145);
var state_54191__$1 = state_54191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54191__$1,(18),out,inst_54179);
} else {
if((state_val_54192 === (13))){
var inst_54174 = (state_54191[(2)]);
var state_54191__$1 = state_54191;
var statearr_54203_55117 = state_54191__$1;
(statearr_54203_55117[(2)] = inst_54174);

(statearr_54203_55117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (6))){
var inst_54145 = (state_54191[(7)]);
var inst_54176 = inst_54145.length;
var inst_54177 = (inst_54176 > (0));
var state_54191__$1 = state_54191;
if(cljs.core.truth_(inst_54177)){
var statearr_54204_55119 = state_54191__$1;
(statearr_54204_55119[(1)] = (15));

} else {
var statearr_54205_55121 = state_54191__$1;
(statearr_54205_55121[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (17))){
var inst_54184 = (state_54191[(2)]);
var inst_54185 = cljs.core.async.close_BANG_(out);
var state_54191__$1 = (function (){var statearr_54206 = state_54191;
(statearr_54206[(10)] = inst_54184);

return statearr_54206;
})();
var statearr_54207_55125 = state_54191__$1;
(statearr_54207_55125[(2)] = inst_54185);

(statearr_54207_55125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (3))){
var inst_54189 = (state_54191[(2)]);
var state_54191__$1 = state_54191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54191__$1,inst_54189);
} else {
if((state_val_54192 === (12))){
var inst_54145 = (state_54191[(7)]);
var inst_54167 = cljs.core.vec(inst_54145);
var state_54191__$1 = state_54191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54191__$1,(14),out,inst_54167);
} else {
if((state_val_54192 === (2))){
var state_54191__$1 = state_54191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54191__$1,(4),ch);
} else {
if((state_val_54192 === (11))){
var inst_54149 = (state_54191[(9)]);
var inst_54145 = (state_54191[(7)]);
var inst_54156 = (state_54191[(11)]);
var inst_54164 = inst_54145.push(inst_54149);
var tmp54209 = inst_54145;
var inst_54145__$1 = tmp54209;
var inst_54146 = inst_54156;
var state_54191__$1 = (function (){var statearr_54213 = state_54191;
(statearr_54213[(12)] = inst_54164);

(statearr_54213[(7)] = inst_54145__$1);

(statearr_54213[(8)] = inst_54146);

return statearr_54213;
})();
var statearr_54216_55127 = state_54191__$1;
(statearr_54216_55127[(2)] = null);

(statearr_54216_55127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (9))){
var inst_54146 = (state_54191[(8)]);
var inst_54160 = cljs.core.keyword_identical_QMARK_(inst_54146,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_54191__$1 = state_54191;
var statearr_54217_55129 = state_54191__$1;
(statearr_54217_55129[(2)] = inst_54160);

(statearr_54217_55129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (5))){
var inst_54149 = (state_54191[(9)]);
var inst_54157 = (state_54191[(13)]);
var inst_54156 = (state_54191[(11)]);
var inst_54146 = (state_54191[(8)]);
var inst_54156__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54149) : f.call(null,inst_54149));
var inst_54157__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54156__$1,inst_54146);
var state_54191__$1 = (function (){var statearr_54219 = state_54191;
(statearr_54219[(13)] = inst_54157__$1);

(statearr_54219[(11)] = inst_54156__$1);

return statearr_54219;
})();
if(inst_54157__$1){
var statearr_54221_55131 = state_54191__$1;
(statearr_54221_55131[(1)] = (8));

} else {
var statearr_54222_55132 = state_54191__$1;
(statearr_54222_55132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (14))){
var inst_54149 = (state_54191[(9)]);
var inst_54156 = (state_54191[(11)]);
var inst_54169 = (state_54191[(2)]);
var inst_54170 = [];
var inst_54171 = inst_54170.push(inst_54149);
var inst_54145 = inst_54170;
var inst_54146 = inst_54156;
var state_54191__$1 = (function (){var statearr_54223 = state_54191;
(statearr_54223[(14)] = inst_54169);

(statearr_54223[(15)] = inst_54171);

(statearr_54223[(7)] = inst_54145);

(statearr_54223[(8)] = inst_54146);

return statearr_54223;
})();
var statearr_54224_55134 = state_54191__$1;
(statearr_54224_55134[(2)] = null);

(statearr_54224_55134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (16))){
var state_54191__$1 = state_54191;
var statearr_54225_55139 = state_54191__$1;
(statearr_54225_55139[(2)] = null);

(statearr_54225_55139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (10))){
var inst_54162 = (state_54191[(2)]);
var state_54191__$1 = state_54191;
if(cljs.core.truth_(inst_54162)){
var statearr_54226_55140 = state_54191__$1;
(statearr_54226_55140[(1)] = (11));

} else {
var statearr_54227_55141 = state_54191__$1;
(statearr_54227_55141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (18))){
var inst_54181 = (state_54191[(2)]);
var state_54191__$1 = state_54191;
var statearr_54228_55147 = state_54191__$1;
(statearr_54228_55147[(2)] = inst_54181);

(statearr_54228_55147[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (8))){
var inst_54157 = (state_54191[(13)]);
var state_54191__$1 = state_54191;
var statearr_54229_55148 = state_54191__$1;
(statearr_54229_55148[(2)] = inst_54157);

(statearr_54229_55148[(1)] = (10));


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
var statearr_54230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54230[(0)] = cljs$core$async$state_machine__39542__auto__);

(statearr_54230[(1)] = (1));

return statearr_54230;
});
var cljs$core$async$state_machine__39542__auto____1 = (function (state_54191){
while(true){
var ret_value__39543__auto__ = (function (){try{while(true){
var result__39544__auto__ = switch__39541__auto__(state_54191);
if(cljs.core.keyword_identical_QMARK_(result__39544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39544__auto__;
}
break;
}
}catch (e54231){var ex__39545__auto__ = e54231;
var statearr_54232_55149 = state_54191;
(statearr_54232_55149[(2)] = ex__39545__auto__);


if(cljs.core.seq((state_54191[(4)]))){
var statearr_54233_55150 = state_54191;
(statearr_54233_55150[(1)] = cljs.core.first((state_54191[(4)])));

} else {
throw ex__39545__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55151 = state_54191;
state_54191 = G__55151;
continue;
} else {
return ret_value__39543__auto__;
}
break;
}
});
cljs$core$async$state_machine__39542__auto__ = function(state_54191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39542__auto____1.call(this,state_54191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39542__auto____0;
cljs$core$async$state_machine__39542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39542__auto____1;
return cljs$core$async$state_machine__39542__auto__;
})()
})();
var state__39711__auto__ = (function (){var statearr_54236 = f__39710__auto__();
(statearr_54236[(6)] = c__39709__auto___55102);

return statearr_54236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39711__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
