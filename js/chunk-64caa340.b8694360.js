(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64caa340"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(r(t))}},"0779":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",{staticClass:"fill-height pt-0",attrs:{fluid:""}},[n("div",[n("nav",[n("v-breadcrumbs",{staticClass:"pt-0 pl-0",attrs:{items:t.items}})],1),n("h2",{domProps:{textContent:t._s(t.cliente.name)}}),n("h4",{domProps:{textContent:t._s(t.cliente.description)}})]),n("EditarCliente",{attrs:{data:t.cliente},model:{value:t.showEditarCliente,callback:function(e){t.showEditarCliente=e},expression:"showEditarCliente"}}),n("SimpleAlert",{attrs:{message:t.dialog.message,title:t.dialog.title,ok:t.dialog.ok,yes:t.dialog.yes,no:t.dialog.no,cancel:t.dialog.cancel},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}})],1)},i=[];n("4de4"),n("7db0"),n("b0c0"),n("a9e3"),n("a4d3"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=n("eb4d"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.cliente?n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.cliente.name))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Nome",placeholder:"Jhon Doe",autofocus:"",required:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.salvarCliente(e)}},model:{value:t.cliente.name,callback:function(e){t.$set(t.cliente,"name",e)},expression:"cliente.name"}})],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Descrição",placeholder:"Lorem ipsum dolor sit amet",required:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.salvarCliente(e)}},model:{value:t.cliente.description,callback:function(e){t.$set(t.cliente,"description",e)},expression:"cliente.description"}})],1)],1)],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.show=!t.show}}},[t._v("Cancelar")]),n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.salvarCliente}},[t._v("Salvar")])],1)],1):t._e(),n("SimpleAlert",{attrs:{message:t.dialog.message,title:t.dialog.title,ok:t.dialog.ok,yes:t.dialog.yes,no:t.dialog.no,cancel:t.dialog.cancel},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}})],1)},u=[],f=(n("c740"),{components:{SimpleAlert:s["a"]},props:{value:Boolean,data:Object},computed:{cliente:{get:function(){return this.data},set:function(t){this.$emit("input",t)}},show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},clientes:function(){return this.$store.state.clientes}},data:function(){return{dialog:{show:!1,title:null,message:null,ok:null,yes:null,no:null,cancel:null}}},methods:{showOnEmpty:function(){var t=this;this.dialog.title="Ops!",this.dialog.message="Preencha o campo nome!",this.dialog.ok=function(){t.dialog.show=!1},this.dialog.show=!0},salvarCliente:function(){var t=this,e=this.clientes.findIndex((function(e){return e.id===t.cliente.id}));this.clientes[e]=this.cliente,this.$store.commit("setClientes",this.clientes),this.show=!this.show}}}),d=f,h=n("2877"),p=Object(h["a"])(d,l,u,!1,null,null,null),v=p.exports,b={components:{SimpleAlert:s["a"],EditarCliente:v},computed:{clientes:function(){return this.$store.state.clientes},cliente:function(){var t=this;return this.$store.state.clientes.find((function(e){return e.id===Number(t.$route.params.id)}))}},data:function(){return{showEditarCliente:!1,items:[{text:"Home",to:"/"},{text:"Cliente",disabled:!0}],cliente_edit:null,dialog:{show:!1,title:null,message:null,ok:null,yes:null,no:null,cancel:null}}},mounted:function(){this.items[1].text=this.cliente.name,console.log(this.cliente)},methods:{editarCliente:function(t){this.cliente_edit=c({},t),this.showEditarCliente=!0},removerCliente:function(t){var e=this;this.dialog.title="Excluir cliente",this.dialog.message="Tem certeza que deseja excluir?",this.dialog.no=function(){e.dialog.show=!1},this.dialog.yes=function(){e.dialog.show=!1;var n=e.clientes.filter((function(e){return e.id!==t.id}));e.$store.commit("setClientes",n)},this.dialog.show=!0}}},g=b,m=Object(h["a"])(g,r,i,!1,null,null,null);e["default"]=m.exports},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),a=n("9112");for(var c in i){var s=r[c],l=s&&s.prototype;if(l&&l.forEach!==o)try{a(l,"forEach",o)}catch(u){l.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=n("ae40"),a=i("forEach"),c=o("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),a=n("ae40"),c=o("filter"),s=a("filter");r({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,o=n("44d2"),a=n("ae40"),c="find",s=!0,l=a(c);c in[]&&Array(1)[c]((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),a=n("c430"),c=n("83ab"),s=n("4930"),l=n("fdbf"),u=n("d039"),f=n("5135"),d=n("e8b5"),h=n("861d"),p=n("825a"),v=n("7b0b"),b=n("fc6a"),g=n("c04e"),m=n("5c6c"),y=n("7c73"),w=n("df75"),O=n("241c"),S=n("057f"),x=n("7418"),k=n("06cf"),E=n("9bf2"),C=n("d1e7"),_=n("9112"),N=n("6eeb"),j=n("5692"),P=n("f772"),A=n("d012"),L=n("90e3"),I=n("b622"),T=n("e538"),$=n("746f"),D=n("d44e"),M=n("69f3"),V=n("b727").forEach,F=P("hidden"),R="Symbol",G="prototype",H=I("toPrimitive"),J=M.set,q=M.getterFor(R),B=Object[G],Y=i.Symbol,U=o("JSON","stringify"),X=k.f,z=E.f,Q=S.f,W=C.f,K=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),nt=j("wks"),rt=i.QObject,it=!rt||!rt[G]||!rt[G].findChild,ot=c&&u((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=X(B,e);r&&delete B[e],z(t,e,n),r&&t!==B&&z(B,e,r)}:z,at=function(t,e){var n=K[t]=y(Y[G]);return J(n,{type:R,tag:t,description:e}),c||(n.description=e),n},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},st=function(t,e,n){t===B&&st(Z,e,n),p(t);var r=g(e,!0);return p(n),f(K,r)?(n.enumerable?(f(t,F)&&t[F][r]&&(t[F][r]=!1),n=y(n,{enumerable:m(0,!1)})):(f(t,F)||z(t,F,m(1,{})),t[F][r]=!0),ot(t,r,n)):z(t,r,n)},lt=function(t,e){p(t);var n=b(e),r=w(n).concat(pt(n));return V(r,(function(e){c&&!ft.call(n,e)||st(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=g(t,!0),n=W.call(this,e);return!(this===B&&f(K,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(K,e)||f(this,F)&&this[F][e])||n)},dt=function(t,e){var n=b(t),r=g(e,!0);if(n!==B||!f(K,r)||f(Z,r)){var i=X(n,r);return!i||!f(K,r)||f(n,F)&&n[F][r]||(i.enumerable=!0),i}},ht=function(t){var e=Q(b(t)),n=[];return V(e,(function(t){f(K,t)||f(A,t)||n.push(t)})),n},pt=function(t){var e=t===B,n=Q(e?Z:b(t)),r=[];return V(n,(function(t){!f(K,t)||e&&!f(B,t)||r.push(K[t])})),r};if(s||(Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),n=function(t){this===B&&n.call(Z,t),f(this,F)&&f(this[F],e)&&(this[F][e]=!1),ot(this,e,m(1,t))};return c&&it&&ot(B,e,{configurable:!0,set:n}),at(e,t)},N(Y[G],"toString",(function(){return q(this).tag})),N(Y,"withoutSetter",(function(t){return at(L(t),t)})),C.f=ft,E.f=st,k.f=dt,O.f=S.f=ht,x.f=pt,T.f=function(t){return at(I(t),t)},c&&(z(Y[G],"description",{configurable:!0,get:function(){return q(this).description}}),a||N(B,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Y}),V(w(nt),(function(t){$(t)})),r({target:R,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=Y(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:ut,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(v(t))}}),U){var vt=!s||u((function(){var t=Y();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(h(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),i[1]=e,U.apply(null,i)}})}Y[G][H]||_(Y[G],H,Y[G].valueOf),D(Y,R),A[F]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("94ca"),a=n("6eeb"),c=n("5135"),s=n("c6b6"),l=n("7156"),u=n("c04e"),f=n("d039"),d=n("7c73"),h=n("241c").f,p=n("06cf").f,v=n("9bf2").f,b=n("58a8").trim,g="Number",m=i[g],y=m.prototype,w=s(d(y))==g,O=function(t){var e,n,r,i,o,a,c,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=b(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(o=l.slice(2),a=o.length,c=0;c<a;c++)if(s=o.charCodeAt(c),s<48||s>i)return NaN;return parseInt(o,r)}return+l};if(o(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var S,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(w?f((function(){y.valueOf.call(n)})):s(n)!=g)?l(new m(O(e)),n,x):O(e)},k=r?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;k.length>E;E++)c(m,S=k[E])&&!c(x,S)&&v(x,S,p(m,S));x.prototype=y,y.constructor=x,a(i,g,x)}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("5135"),a=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(o(c,t))return c[t];e||(e={});var n=[][t],l=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:s,f=o(e,1)?e[1]:void 0;return c[t]=!!n&&!i((function(){if(l&&!r)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,u,f)}))}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),a=n("d039"),c=a((function(){o(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return o(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(h,p,v,b){for(var g,m,y=o(h),w=i(y),O=r(p,v,3),S=a(w.length),x=0,k=b||c,E=e?k(h,S):n?k(h,0):void 0;S>x;x++)if((d||x in w)&&(g=w[x],m=O(g,x,y),t))if(e)E[x]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:s.call(E,g)}else if(u)return!1;return f?-1:l||u?u:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c740:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,o=n("44d2"),a=n("ae40"),c="findIndex",s=!0,l=a(c);c in[]&&Array(1)[c]((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!l},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),a=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),i=c.f,l=o(r),u={},f=0;while(l.length>f)n=i(r,e=l[f++]),void 0!==n&&s(u,e,n);return u}})},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),a=n("06cf").f,c=n("83ab"),s=i((function(){a(1)})),l=!c||s;r({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},eb4d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-card-title",[t.title?n("span",{staticClass:"headline",domProps:{textContent:t._s(t.title)}}):t._e()]),n("v-card-text",[t._v(" "+t._s(t.message)+" ")]),n("v-card-actions",[t.no?n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.handleNo}},[t._v("Não")]):t._e(),t.cancel?n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.handleCancel}},[t._v("Cancelar")]):t._e(),n("v-spacer"),t.yes?n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.handleYes}},[t._v("Sim")]):t._e(),t.ok?n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.handleOk}},[t._v("Ok")]):t._e()],1)],1)],1)},i=[],o={props:{value:Boolean,title:String,message:String,ok:null,yes:null,no:null,cancel:null},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{handleOk:function(){this.ok&&this.ok()},handleYes:function(){this.yes&&this.yes()},handleNo:function(){this.no&&this.no()},handleCancel:function(){this.cancel&&this.cancel()}}},a=o,c=n("2877"),s=Object(c["a"])(a,r,i,!1,null,null,null);e["a"]=s.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-64caa340.b8694360.js.map