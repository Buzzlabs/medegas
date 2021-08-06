
shadow.cljs.devtools.client.env.module_loaded('app');

try { botijao.core.init(); } catch (e) { console.error("An error occurred when calling (botijao.core/init)"); throw(e); }