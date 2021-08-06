goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__58504){
var vec__58505 = p__58504;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58505,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58505,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__58509 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__58509__$1 = (((G__58509 instanceof cljs.core.Keyword))?G__58509.fqn:null);
switch (G__58509__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__58515 = (function (){
var seq__58516 = cljs.core.seq(vars__$1);
var chunk__58517 = null;
var count__58518 = (0);
var i__58519 = (0);
while(true){
if((i__58519 < count__58518)){
var v = chunk__58517.cljs$core$IIndexed$_nth$arity$2(null,i__58519);
var temp__5753__auto___58591 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5753__auto___58591)){
var t_58592 = temp__5753__auto___58591;
var G__58523_58593 = ((function (seq__58516,chunk__58517,count__58518,i__58519,t_58592,temp__5753__auto___58591,v,each_fixture_fn,G__58509,G__58509__$1,env,once_fixtures,each_fixtures,vec__58505,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_58592)));
});})(seq__58516,chunk__58517,count__58518,i__58519,t_58592,temp__5753__auto___58591,v,each_fixture_fn,G__58509,G__58509__$1,env,once_fixtures,each_fixtures,vec__58505,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__58523_58593) : each_fixture_fn.call(null,G__58523_58593));
} else {
}


var G__58595 = seq__58516;
var G__58596 = chunk__58517;
var G__58597 = count__58518;
var G__58598 = (i__58519 + (1));
seq__58516 = G__58595;
chunk__58517 = G__58596;
count__58518 = G__58597;
i__58519 = G__58598;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58516);
if(temp__5753__auto__){
var seq__58516__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58516__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58516__$1);
var G__58599 = cljs.core.chunk_rest(seq__58516__$1);
var G__58600 = c__4638__auto__;
var G__58601 = cljs.core.count(c__4638__auto__);
var G__58602 = (0);
seq__58516 = G__58599;
chunk__58517 = G__58600;
count__58518 = G__58601;
i__58519 = G__58602;
continue;
} else {
var v = cljs.core.first(seq__58516__$1);
var temp__5753__auto___58604__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5753__auto___58604__$1)){
var t_58605 = temp__5753__auto___58604__$1;
var G__58525_58606 = ((function (seq__58516,chunk__58517,count__58518,i__58519,t_58605,temp__5753__auto___58604__$1,v,seq__58516__$1,temp__5753__auto__,each_fixture_fn,G__58509,G__58509__$1,env,once_fixtures,each_fixtures,vec__58505,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_58605)));
});})(seq__58516,chunk__58517,count__58518,i__58519,t_58605,temp__5753__auto___58604__$1,v,seq__58516__$1,temp__5753__auto__,each_fixture_fn,G__58509,G__58509__$1,env,once_fixtures,each_fixtures,vec__58505,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__58525_58606) : each_fixture_fn.call(null,G__58525_58606));
} else {
}


var G__58609 = cljs.core.next(seq__58516__$1);
var G__58610 = null;
var G__58611 = (0);
var G__58612 = (0);
seq__58516 = G__58609;
chunk__58517 = G__58610;
count__58518 = G__58611;
i__58519 = G__58612;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__58514 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__58514.cljs$core$IFn$_invoke$arity$1 ? fexpr__58514.cljs$core$IFn$_invoke$arity$1(G__58515) : fexpr__58514.call(null,G__58515));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58509__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__58498_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__58498_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__58530 = shadow.test.env.get_test_ns_info(ns);
var map__58530__$1 = cljs.core.__destructure_map(map__58530);
var test_ns = map__58530__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58530__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__58532,vars){
var map__58533 = p__58532;
var map__58533__$1 = cljs.core.__destructure_map(map__58533);
var env = map__58533__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58533__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__58534_58615 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__58536_58616 = null;
var count__58537_58617 = (0);
var i__58538_58618 = (0);
while(true){
if((i__58538_58618 < count__58537_58617)){
var vec__58557_58620 = chunk__58536_58616.cljs$core$IIndexed$_nth$arity$2(null,i__58538_58618);
var test_ns_58621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557_58620,(0),null);
var ns_info_58622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557_58620,(1),null);
var map__58561_58623 = ns_info_58622;
var map__58561_58624__$1 = cljs.core.__destructure_map(map__58561_58623);
var fixtures_58625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58561_58624__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5753__auto___58626 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_58625);
if(cljs.core.truth_(temp__5753__auto___58626)){
var fix_58627 = temp__5753__auto___58626;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_58621,fix_58627], 0));
} else {
}

var temp__5753__auto___58628 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_58625);
if(cljs.core.truth_(temp__5753__auto___58628)){
var fix_58629 = temp__5753__auto___58628;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_58621,fix_58629], 0));
} else {
}


var G__58630 = seq__58534_58615;
var G__58631 = chunk__58536_58616;
var G__58632 = count__58537_58617;
var G__58633 = (i__58538_58618 + (1));
seq__58534_58615 = G__58630;
chunk__58536_58616 = G__58631;
count__58537_58617 = G__58632;
i__58538_58618 = G__58633;
continue;
} else {
var temp__5753__auto___58634 = cljs.core.seq(seq__58534_58615);
if(temp__5753__auto___58634){
var seq__58534_58635__$1 = temp__5753__auto___58634;
if(cljs.core.chunked_seq_QMARK_(seq__58534_58635__$1)){
var c__4638__auto___58636 = cljs.core.chunk_first(seq__58534_58635__$1);
var G__58637 = cljs.core.chunk_rest(seq__58534_58635__$1);
var G__58638 = c__4638__auto___58636;
var G__58639 = cljs.core.count(c__4638__auto___58636);
var G__58640 = (0);
seq__58534_58615 = G__58637;
chunk__58536_58616 = G__58638;
count__58537_58617 = G__58639;
i__58538_58618 = G__58640;
continue;
} else {
var vec__58566_58641 = cljs.core.first(seq__58534_58635__$1);
var test_ns_58642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58566_58641,(0),null);
var ns_info_58643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58566_58641,(1),null);
var map__58569_58644 = ns_info_58643;
var map__58569_58645__$1 = cljs.core.__destructure_map(map__58569_58644);
var fixtures_58646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58569_58645__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5753__auto___58647__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_58646);
if(cljs.core.truth_(temp__5753__auto___58647__$1)){
var fix_58648 = temp__5753__auto___58647__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_58642,fix_58648], 0));
} else {
}

var temp__5753__auto___58649__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_58646);
if(cljs.core.truth_(temp__5753__auto___58649__$1)){
var fix_58650 = temp__5753__auto___58649__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_58642,fix_58650], 0));
} else {
}


var G__58651 = cljs.core.next(seq__58534_58635__$1);
var G__58652 = null;
var G__58653 = (0);
var G__58654 = (0);
seq__58534_58615 = G__58651;
chunk__58536_58616 = G__58652;
count__58537_58617 = G__58653;
i__58538_58618 = G__58654;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58531_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__58531_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__58570 = cljs.test.get_current_env();
var map__58570__$1 = cljs.core.__destructure_map(map__58570);
var env = map__58570__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__58572 = arguments.length;
switch (G__58572) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__58578 = arguments.length;
switch (G__58578) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__58579 = shadow.test.env.get_test_ns_info(ns);
var map__58579__$1 = cljs.core.__destructure_map(map__58579);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58579__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__58583 = arguments.length;
switch (G__58583) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58580_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__58580_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__58588 = arguments.length;
switch (G__58588) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58584_SHARP_){
var or__4212__auto__ = (re == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58584_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
