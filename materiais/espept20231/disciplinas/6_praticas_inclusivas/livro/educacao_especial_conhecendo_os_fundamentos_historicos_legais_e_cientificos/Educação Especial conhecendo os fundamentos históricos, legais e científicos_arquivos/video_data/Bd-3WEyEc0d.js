;/*FB_PKG_DELIM*/

__d("TransportSelectingClientSingletonConditional",["cr:5800"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:5800")}),98);
__d("DGWRequestStreamDeferredClient",["Promise","nullthrows","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(){this.$1=null}var d=a.prototype;d.createStream=function(a,b,d,e,f){this.$2();return c("nullthrows")(this.$1).then(function(c){return c.createStream(a,b,d,e,f)})};d.$2=function(){this.$1==null&&(this.$1=new(b("Promise"))(function(a){c("requireDeferred")("DGWRequestStreamClient").__setRef("DGWRequestStreamDeferredClient").onReady(function(b){a(new b())})}))};return a}();d=new a();g["default"]=d}),98);
__d("getJSEnumSafe",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(b==null)return null;if(!Object.prototype.hasOwnProperty.call(a,b))return null;b=b;return a[b]}f["default"]=a}),66);
__d("useBoolean",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useState;function a(a){a=i(a);var b=a[0],c=a[1];return{value:b,set:c,toggle:h(function(){return c(function(a){return!a})},[]),setTrue:h(function(){return c(!0)},[]),setFalse:h(function(){return c(!1)},[])}}g["default"]=a}),98);
__d("requireDeferredForDisplay",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("requireDeferred").call(null,a)}g["default"]=a}),98);