(window.webpackJsonp=window.webpackJsonp||[]).push([["07d6"],{"+QYX":function(t,e,n){n("1lGj"),t.exports=n("TaGV").Array.isArray},"+eav":function(t,e,n){var r=n("zWQs"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},"/1nD":function(t,e,n){var r=n("g2rQ"),o=n("0Sp3")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},"/6KZ":function(t,e,n){var r=n("41F1"),o=n("TaGV"),i=n("8Xl/"),a=n("PPkd"),c=n("qA3Z"),u=function(t,e,n){var s,l,f,p=t&u.F,v=t&u.G,d=t&u.S,m=t&u.P,y=t&u.B,h=t&u.W,g=v?o:o[e]||(o[e]={}),b=g.prototype,w=v?r:d?r[e]:(r[e]||{}).prototype;for(s in v&&(n=e),n)(l=!p&&w&&void 0!==w[s])&&c(g,s)||(f=l?w[s]:n[s],g[s]=v&&"function"!=typeof w[s]?n[s]:y&&l?i(f,r):h&&w[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):m&&"function"==typeof f?i(Function.call,f):f,m&&((g.virtual||(g.virtual={}))[s]=f,t&u.R&&b&&!b[s]&&a(b,s,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"/Lgp":function(t,e,n){var r=n("Qqke"),o=n("miGZ");t.exports=Object.keys||function(t){return r(t,o)}},"/Rdg":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/staff/components/Jobs",function(){var t=n("HQSV");return{page:t.default||t}}])},"/Vl9":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"0Sp3":function(t,e,n){var r=n("67sl")("wks"),o=n("ct/D"),i=n("41F1").Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},"1lGj":function(t,e,n){var r=n("/6KZ");r(r.S,"Array",{isArray:n("Jh4J")})},"41F1":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5BpW":function(t,e,n){t.exports=n("PPkd")},"5PfI":function(t,e){t.exports="/_next/static/images/about/ia_4600000003_abd9333.jpg"},"5gKE":function(t,e,n){var r=n("41F1").document;t.exports=r&&r.documentElement},"67sl":function(t,e,n){var r=n("TaGV"),o=n("41F1"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("gtwY")?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"6wgB":function(t,e,n){var r=n("g2rQ");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"8Xl/":function(t,e,n){var r=n("HD3J");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"ADe/":function(t,e,n){var r=n("fGh/");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},Cs9m:function(t,e,n){"use strict";var r=n("o3C2"),o=n("TTxG"),i=n("N9zW"),a=n("T/1i");t.exports=n("gMWQ")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},"G+Zn":function(t,e,n){var r=n("ADe/"),o=n("n6P+"),i=n("miGZ"),a=n("Q5TA")("IE_PROTO"),c=function(){},u=function(){var t,e=n("m/Uw")("iframe"),r=i.length;for(e.style.display="none",n("5gKE").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[a]=t):n=u(),void 0===e?n:o(n,e)}},GCLZ:function(t,e,n){var r=n("qA3Z"),o=n("dCrc"),i=n("Q5TA")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},HD3J:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},HQSV:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return p});var r=n("hDBU"),o=n("mXGw"),i=n.n(o),a=n("VKwQ"),c=n("wWwG"),u=n("/Gnr"),s=n.n(u);function l(t){var e=t.label,n=t.list;return i.a.createElement("div",{className:s.a.section},i.a.createElement("div",{className:s.a.label},e),i.a.createElement("ul",null,n.map(function(t,e){return i.a.createElement("li",{key:e},t)})))}function f(t){var e=t.title,n=t.count,a=t.city,c=t.descList,u=t.requireList,f=Object(o.useState)(!1),p=Object(r.default)(f,2),v=p[0],d=p[1];return i.a.createElement("div",{className:"".concat(s.a.recruit," ").concat(v?s.a.collapsed:"")},i.a.createElement("a",{className:s.a.collapseBtn,onClick:function(){d(!v)}},i.a.createElement("i",{className:"iconfont iconarrow-collapse"})),i.a.createElement("h3",{className:s.a.title},e),i.a.createElement("div",{className:s.a.info},i.a.createElement("div",{className:s.a.count},"人数：",n),i.a.createElement("div",{className:s.a.city},"城市：",a)),i.a.createElement("div",{className:s.a.details},i.a.createElement(l,{label:"职位描述：",list:c}),i.a.createElement(l,{label:"岗位要求：",list:u})))}function p(){return i.a.createElement("div",{className:s.a.jobs,id:"jobs"},i.a.createElement("div",{className:"center-block"},i.a.createElement("div",{className:"block-left"},i.a.createElement(a.a,{title:c.c.title,des:c.c.desc,en:i.a.createElement("span",null,"Join us"),splitClassName:s.a.summarySplit})),i.a.createElement("div",{className:"block-right"},i.a.createElement("div",{className:s.a.top},i.a.createElement("img",{src:n("5PfI"),width:300,height:200,alt:"加入我们",className:s.a.matchImg}),c.c.introduce.map(function(t){return i.a.createElement(i.a.Fragment,null,t,i.a.createElement("br",null))})),i.a.createElement("div",{className:s.a.recruitList},c.c.jobs.map(function(t,e){return i.a.createElement("div",{key:e,className:s.a.recruitItem},i.a.createElement(f,t))})))))}},HbTz:function(t,e,n){var r=n("fGh/");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},IL7q:function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(t,e){for(var n,a,c=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(c[s]=n[s]);if(r){a=r(n);for(var l=0;l<a.length;l++)i.call(n,a[l])&&(c[a[l]]=n[a[l]])}}return c}},Jh4J:function(t,e,n){var r=n("g2rQ");t.exports=Array.isArray||function(t){return"Array"==r(t)}},Kdq7:function(t,e,n){var r=n("zWQs"),o=n("Xj5l");t.exports=function(t){return function(e,n){var i,a,c=String(o(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}}},N9zW:function(t,e){t.exports={}},PPkd:function(t,e,n){var r=n("eOWL"),o=n("zJT+");t.exports=n("lBnu")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},Q5TA:function(t,e,n){var r=n("67sl")("keys"),o=n("ct/D");t.exports=function(t){return r[t]||(r[t]=o(t))}},Qqke:function(t,e,n){var r=n("qA3Z"),o=n("T/1i"),i=n("zeFm")(!1),a=n("Q5TA")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)n!=a&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},SY1S:function(t,e,n){t.exports=n("UR6/")},"T/1i":function(t,e,n){var r=n("6wgB"),o=n("Xj5l");t.exports=function(t){return r(o(t))}},TTxG:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},TaGV:function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},"UR6/":function(t,e,n){n("k/kI"),n("WwSA"),t.exports=n("uMC/")},UTwT:function(t,e,n){t.exports=!n("lBnu")&&!n("/Vl9")(function(){return 7!=Object.defineProperty(n("m/Uw")("div"),"a",{get:function(){return 7}}).a})},VJcA:function(t,e,n){var r=n("/1nD"),o=n("0Sp3")("iterator"),i=n("N9zW");t.exports=n("TaGV").getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},VKwQ:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("mXGw"),o=n.n(r),i=n("RVXK"),a=n.n(i);function c(t){var e=t.title,n=t.des,r=t.en,i=t.useWhite,c=void 0!==i&&i,u=t.splitClassName,s=void 0===u?"":u;return o.a.createElement("div",{className:"".concat(a.a.heading," ").concat(c?a.a.white:"")},o.a.createElement("div",{className:a.a.title},e),!!n&&o.a.createElement("div",{className:a.a.des},n),o.a.createElement("div",{className:"".concat(a.a.split," ").concat(s)}),o.a.createElement("div",{className:a.a.en},r))}},WwSA:function(t,e,n){"use strict";var r=n("Kdq7")(!0);n("gMWQ")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},Xj5l:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},"ct/D":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},dCrc:function(t,e,n){var r=n("Xj5l");t.exports=function(t){return Object(r(t))}},dR8c:function(t,e,n){"use strict";var r=n("G+Zn"),o=n("zJT+"),i=n("sWB5"),a={};n("PPkd")(a,n("0Sp3")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},eOWL:function(t,e,n){var r=n("ADe/"),o=n("UTwT"),i=n("HbTz"),a=Object.defineProperty;e.f=n("lBnu")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"fGh/":function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},g2rQ:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},gMWQ:function(t,e,n){"use strict";var r=n("gtwY"),o=n("/6KZ"),i=n("5BpW"),a=n("PPkd"),c=n("N9zW"),u=n("dR8c"),s=n("sWB5"),l=n("GCLZ"),f=n("0Sp3")("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,m,y,h){u(n,e,d);var g,b,w,x=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",E="values"==m,T=!1,j=t.prototype,O=j[f]||j["@@iterator"]||m&&j[m],_=O||x(m),P=m?E?x("entries"):_:void 0,k="Array"==e&&j.entries||O;if(k&&(w=l(k.call(new t)))!==Object.prototype&&w.next&&(s(w,S,!0),r||"function"==typeof w[f]||a(w,f,v)),E&&O&&"values"!==O.name&&(T=!0,_=function(){return O.call(this)}),r&&!h||!p&&!T&&j[f]||a(j,f,_),c[e]=_,c[S]=v,m)if(g={values:E?_:x("values"),keys:y?_:x("keys"),entries:P},h)for(b in g)b in j||i(j,b,g[b]);else o(o.P+o.F*(p||T),e,g);return g}},gou2:function(t,e,n){var r=n("zWQs"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},gtwY:function(t,e){t.exports=!0},hDBU:function(t,e,n){"use strict";n.r(e);var r=n("s20r"),o=n.n(r);var i=n("SY1S"),a=n.n(i);function c(t,e){return function(t){if(o()(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=a()(t);!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"default",function(){return c})},"k/kI":function(t,e,n){n("Cs9m");for(var r=n("41F1"),o=n("PPkd"),i=n("N9zW"),a=n("0Sp3")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<c.length;u++){var s=c[u],l=r[s],f=l&&l.prototype;f&&!f[a]&&o(f,a,s),i[s]=i.Array}},lBnu:function(t,e,n){t.exports=!n("/Vl9")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"m/Uw":function(t,e,n){var r=n("fGh/"),o=n("41F1").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},miGZ:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"n6P+":function(t,e,n){var r=n("eOWL"),o=n("ADe/"),i=n("/Lgp");t.exports=n("lBnu")?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),c=a.length,u=0;c>u;)r.f(t,n=a[u++],e[n]);return t}},o3C2:function(t,e){t.exports=function(){}},qA3Z:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},s20r:function(t,e,n){t.exports=n("+QYX")},sWB5:function(t,e,n){var r=n("eOWL").f,o=n("qA3Z"),i=n("0Sp3")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"uMC/":function(t,e,n){var r=n("ADe/"),o=n("VJcA");t.exports=n("TaGV").getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},wWwG:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return o});const r={title:"公司是我们共同生活的平台，是我们成长成熟的修炼场。",desc:"优莱克的使命，即培养全员以经营者的态度，不亚于任何人的努力，缔造我们所能想象到的幸福企业。时刻忠于自己的内心。为员工客户社会谋福，输送带感情有温度的产品和服务。"},o={title:"加入我们",desc:"等你来，一起创造更多可能",introduce:["在优莱克，只有专心做事的工作氛围，没有复杂的人际关系，你可以尽情发挥丰富的想象力和卓越的创造力你可以与领域的优秀人才一起共事，全方位快速提升个人能力，让自己变得更优秀。我们期待能与像你一样，有激情、有理想、有创新、有能力的小伙伴并肩同行，朝着让用户高效沟通的目标努力拼搏。","我们正在招聘以下职位，如若有意请将简历以附件形式发送至HR邮箱：ulike@ljkal.com，发送邮件主题格式：职位（工作地点），比如商务工程师（深圳市）。 "],jobs:[{title:"商务工程师",count:"若干",city:"深圳市",descList:["负责顾客来访的组织和接待；","负责顾客商务协议处理；","完成上级交办的其他工作。"],requireList:["全日制普高学历，英语通过CET-4；","具有较强的服务意识、应变能力及沟通协调能力，工作积极、主动；","有2年以上业务经验,有良好的语言表达能力，熟悉办公软件","思维清晰，沟通表达能力佳；工作积极主动，领悟能力强","有驾驶证者优先考虑。"]}]};e.b={title:"人力资源",banner:r,job:o}},"zJT+":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},zWQs:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},zeFm:function(t,e,n){var r=n("T/1i"),o=n("gou2"),i=n("+eav");t.exports=function(t){return function(e,n,a){var c,u=r(e),s=o(u.length),l=i(a,s);if(t&&n!=n){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}}},[["/Rdg","5d41","9da1","ad9d"]]]);