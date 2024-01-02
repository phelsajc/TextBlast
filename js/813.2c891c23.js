"use strict";(self["webpackChunkapp_boilerplate"]=self["webpackChunkapp_boilerplate"]||[]).push([[813],{7439:function(e,t,n){var r,o,a;n.d(t,{GW:function(){return o},dk:function(){return a},oK:function(){return r}}),function(e){e["Prompt"]="PROMPT",e["Camera"]="CAMERA",e["Photos"]="PHOTOS"}(r||(r={})),function(e){e["Rear"]="REAR",e["Front"]="FRONT"}(o||(o={})),function(e){e["Uri"]="uri",e["Base64"]="base64",e["DataUrl"]="dataUrl"}(a||(a={}))},6077:function(e,t,n){var r=n(614),o=String,a=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw new a("Can't set "+o(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new o("Incorrect invocation")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){var r,o,a,l=n(3013),i=n(9781),u=n(7854),c=n(614),s=n(111),p=n(2597),d=n(648),f=n(6330),m=n(8880),y=n(8052),v=n(7045),g=n(7976),_=n(9518),w=n(7674),E=n(5112),h=n(9711),S=n(9909),A=S.enforce,b=S.get,R=u.Int8Array,x=R&&R.prototype,T=u.Uint8ClampedArray,I=T&&T.prototype,O=R&&_(R),U=x&&_(x),C=Object.prototype,k=u.TypeError,D=E("toStringTag"),W=h("TYPED_ARRAY_TAG"),N="TypedArrayConstructor",M=l&&!!w&&"Opera"!==d(u.opera),Z=!1,B={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},L={BigInt64Array:8,BigUint64Array:8},P=function(e){if(!s(e))return!1;var t=d(e);return"DataView"===t||p(B,t)||p(L,t)},j=function(e){var t=_(e);if(s(t)){var n=b(t);return n&&p(n,N)?n[N]:j(t)}},z=function(e){if(!s(e))return!1;var t=d(e);return p(B,t)||p(L,t)},H=function(e){if(z(e))return e;throw new k("Target is not a typed array")},F=function(e){if(c(e)&&(!w||g(O,e)))return e;throw new k(f(e)+" is not a typed array constructor")},V=function(e,t,n,r){if(i){if(n)for(var o in B){var a=u[o];if(a&&p(a.prototype,e))try{delete a.prototype[e]}catch(l){try{a.prototype[e]=t}catch(c){}}}U[e]&&!n||y(U,e,n?t:M&&x[e]||t,r)}},Y=function(e,t,n){var r,o;if(i){if(w){if(n)for(r in B)if(o=u[r],o&&p(o,e))try{delete o[e]}catch(a){}if(O[e]&&!n)return;try{return y(O,e,n?t:M&&O[e]||t)}catch(a){}}for(r in B)o=u[r],!o||o[e]&&!n||y(o,e,t)}};for(r in B)o=u[r],a=o&&o.prototype,a?A(a)[N]=o:M=!1;for(r in L)o=u[r],a=o&&o.prototype,a&&(A(a)[N]=o);if((!M||!c(O)||O===Function.prototype)&&(O=function(){throw new k("Incorrect invocation")},M))for(r in B)u[r]&&w(u[r],O);if((!M||!U||U===C)&&(U=O.prototype,M))for(r in B)u[r]&&w(u[r].prototype,U);if(M&&_(I)!==U&&w(I,U),i&&!p(U,D))for(r in Z=!0,v(U,D,{configurable:!0,get:function(){return s(this)?this[W]:void 0}}),B)u[r]&&m(u[r],W,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:Z&&W,aTypedArray:H,aTypedArrayConstructor:F,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:Y,getTypedArrayConstructor:j,isView:P,isTypedArray:z,TypedArray:O,TypedArrayPrototype:U}},7745:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,o=r(t),a=new e(o);while(o>n)a[n]=t[n++];return a}},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),o=new t(n),a=0;a<n;a++)o[a]=e[n-a-1];return o}},1572:function(e,t,n){var r=n(6244),o=n(9303),a=RangeError;e.exports=function(e,t,n,l){var i=r(e),u=o(n),c=u<0?i+u:u;if(c>=i||c<0)throw new a("Incorrect index");for(var s=new t(i),p=0;p<i;p++)s[p]=p===c?l:e[p];return s}},648:function(e,t,n){var r=n(1694),o=n(614),a=n(4326),l=n(5112),i=l("toStringTag"),u=Object,c="Arguments"===a(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(n){}};e.exports=r?a:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=s(t=u(e),i))?n:c?a(t):"Object"===(r=a(t))&&o(t.callee)?"Arguments":r}},3918:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},7045:function(e,t,n){var r=n(6339),o=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(e,t,n){var r=n(1702),o=Error,a=r("".replace),l=function(e){return String(new o(e).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,u=i.test(l);e.exports=function(e,t){if(u&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=a(e,i,"");return e}},5668:function(e,t,n){var r=n(1702),o=n(9662);e.exports=function(e,t,n){try{return r(o(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(a){}}},9587:function(e,t,n){var r=n(614),o=n(111),a=n(7674);e.exports=function(e,t,n){var l,i;return a&&r(l=t.constructor)&&l!==n&&o(i=l.prototype)&&i!==n.prototype&&a(e,i),e}},4067:function(e,t,n){var r=n(648);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},9518:function(e,t,n){var r=n(2597),o=n(614),a=n(7908),l=n(6200),i=n(3918),u=l("IE_PROTO"),c=Object,s=c.prototype;e.exports=i?c.getPrototypeOf:function(e){var t=a(e);if(r(t,u))return t[u];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof c?s:null}},7674:function(e,t,n){var r=n(5668),o=n(9670),a=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(l){}return function(n,r){return o(n),a(r),t?e(n,r):n.__proto__=r,n}}():void 0)},4599:function(e,t,n){var r=n(7593),o=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new o("Can't convert number to bigint");return BigInt(t)}},1694:function(e,t,n){var r=n(5112),o=r("toStringTag"),a={};a[o]="z",e.exports="[object z]"===String(a)},1340:function(e,t,n){var r=n(648),o=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},1439:function(e,t,n){var r=n(1843),o=n(260),a=o.aTypedArray,l=o.exportTypedArrayMethod,i=o.getTypedArrayConstructor;l("toReversed",(function(){return r(a(this),i(this))}))},7585:function(e,t,n){var r=n(260),o=n(1702),a=n(9662),l=n(7745),i=r.aTypedArray,u=r.getTypedArrayConstructor,c=r.exportTypedArrayMethod,s=o(r.TypedArrayPrototype.sort);c("toSorted",(function(e){void 0!==e&&a(e);var t=i(this),n=l(u(t),t);return s(n,e)}))},5315:function(e,t,n){var r=n(1572),o=n(260),a=n(4067),l=n(9303),i=n(4599),u=o.aTypedArray,c=o.getTypedArrayConstructor,s=o.exportTypedArrayMethod,p=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();s("with",{with:function(e,t){var n=u(this),o=l(e),s=a(n)?i(t):+t;return r(n,c(n),o,s)}}["with"],!p)},2801:function(e,t,n){var r=n(2109),o=n(7854),a=n(5005),l=n(9114),i=n(3070).f,u=n(2597),c=n(5787),s=n(9587),p=n(6277),d=n(3678),f=n(1060),m=n(9781),y=n(1913),v="DOMException",g=a("Error"),_=a(v),w=function(){c(this,E);var e=arguments.length,t=p(e<1?void 0:arguments[0]),n=p(e<2?void 0:arguments[1],"Error"),r=new _(t,n),o=new g(t);return o.name=v,i(r,"stack",l(1,f(o.stack,1))),s(r,this,w),r},E=w.prototype=_.prototype,h="stack"in new g(v),S="stack"in new _(1,2),A=_&&m&&Object.getOwnPropertyDescriptor(o,v),b=!!A&&!(A.writable&&A.configurable),R=h&&!b&&!S;r({global:!0,constructor:!0,forced:y||R},{DOMException:R?w:_});var x=a(v),T=x.prototype;if(T.constructor!==x)for(var I in y||i(T,"constructor",l(1,x)),d)if(u(d,I)){var O=d[I],U=O.s;u(x,U)||i(x,U,l(6,O.c))}},3637:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5518);function o(){async function e(e,t,n="top",o=3e3){const a=await r.Mn.create({message:e,position:n,color:t,duration:o});return a.present()}return{openToast:e}}},4020:function(e,t,n){n.d(t,{Z:function(){return s}});n(7658);var r=n(6252),o=n(2262),a=n(3577),l=n(2201),i={__name:"Button",props:{color:{type:String,default:"primary"},text:{type:String,required:!1},expand:{type:String,default:"block"},size:{type:String,default:"medium"},icon:{default:null,required:!1},iosIcon:{default:null,required:!1},mdIcon:{default:null,required:!1},isLoading:{type:Boolean,default:!1},spinnerName:{type:String,default:"crescent"},iconOnly:{type:Boolean,default:!1},fill:{type:String,default:"solid"},to:{type:[String,Object],required:!1},download:{type:Boolean,default:!1},href:{type:String,required:!1}},setup(e){const t=e,{icon:n,iosIcon:i,mdIcon:u,to:c}=(0,o.BK)(t),s=(0,r.Fl)((()=>n.value||i.value||u.value)),p=(0,l.tv)();function d(){c.value&&p.push(c.value)}return(t,l)=>{const p=(0,r.up)("ion-label"),f=(0,r.up)("ion-icon"),m=(0,r.up)("ion-spinner"),y=(0,r.up)("ion-ripple-effect"),v=(0,r.up)("ion-button");return(0,r.wg)(),(0,r.j4)(v,{class:"btn ion-activatable ripple-parent",color:e.color,expand:e.expand,size:e.size,disabled:e.isLoading,fill:e.fill,download:e.download,href:e.href,onClick:l[0]||(l[0]=e=>!!(0,o.SU)(c)&&d())},{default:(0,r.w5)((()=>[e.text&&!e.iconOnly?((0,r.wg)(),(0,r.j4)(p,{key:0,class:(0,a.C_)([s.value?"ml-2":""])},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.text),1)])),_:1},8,["class"])):(0,r.kq)("",!0),s.value?((0,r.wg)(),(0,r.j4)(f,{key:1,slot:e.iconOnly?"icon-only":"start",ios:(0,o.SU)(i)||(0,o.SU)(n),md:(0,o.SU)(u)||(0,o.SU)(n)},null,8,["slot","ios","md"])):(0,r.kq)("",!0),e.isLoading?((0,r.wg)(),(0,r.j4)(m,{key:2,slot:"end",class:(0,a.C_)(e.iconOnly?"":"ion-margin-start"),name:e.spinnerName},null,8,["class","name"])):(0,r.kq)("",!0),(0,r.Wm)(y,{type:"unbounded"})])),_:1},8,["color","expand","size","disabled","fill","download","href"])}}},u=n(3744);const c=(0,u.Z)(i,[["__scopeId","data-v-750e27b2"]]);var s=c},4411:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(6252);const o={class:"d-flex flex-column"};var a={__name:"NoContent",props:{text:{type:String,default:"Not found &#x1F622"},image:{type:String,default:"assets/vectors/join.svg"}},setup(e){return(t,n)=>{const a=(0,r.up)("ion-img"),l=(0,r.up)("ion-text");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(a,{src:e.image},null,8,["src"]),(0,r.Wm)(l,{class:"ion-text-center mt-4",innerHTML:e.text},null,8,["innerHTML"])])}}};const l=a;var i=l},7188:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(6252),o=n(8903),a=n(2262),l=n(4020),i=n(34),u={__name:"SendMessage",props:{message:{type:String,required:!0},iconOnly:{type:Boolean,default:!1},buttonText:{type:String,default:"Send message"},size:{type:String,default:"medium"}},setup(e){const t=(0,i.F)(),n=(0,r.Fl)((()=>t.getWhatsappTelephone)),u=(0,a.iH)({logoWhatsapp:o.tl2});return(t,o)=>((0,r.wg)(),(0,r.j4)(l.Z,{color:"success",text:e.buttonText,href:`https://wa.me/${n.value}?text=${e.message}`,size:e.size,icon:u.value.logoWhatsapp,"icon-only":e.iconOnly},null,8,["text","href","size","icon","icon-only"]))}},c=n(3744);const s=(0,c.Z)(u,[["__scopeId","data-v-9836ebf0"]]);var p=s},3813:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(6252),o=n(2262),a=n(3577),l=n(5518),i=n(8903),u=n(4020);const c=(0,r._)("hr",null,null,-1),s=(0,r._)("hr",null,null,-1),p=(0,r._)("hr",null,null,-1);var d={__name:"Buttons",setup(e){const t=(0,o.iH)({save:i.a1L,arrowRedo:i.Iou,cloudDownload:i.uQl});return(e,n)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u.Z,{text:"Simple button"}),(0,r.Wm)(u.Z,{text:"With icon",icon:t.value.save,color:"danger"},null,8,["icon"]),c,(0,r.Wm)(u.Z,{"is-loading":"",text:"Loading",icon:t.value.save,color:"success"},null,8,["icon"]),(0,r.Wm)(u.Z,{"is-loading":"",text:"Loading",icon:t.value.save,"spinner-name":"dots",color:"success"},null,8,["icon"]),s,(0,r.Wm)(u.Z,{text:"Router redirect",icon:t.value.arrowRedo,color:"medium",to:{name:"contact"}},null,8,["icon"]),(0,r.Wm)(u.Z,{"icon-only":"",icon:t.value.save,color:"secondary"},null,8,["icon"]),p,(0,r.Wm)(u.Z,{text:"Small",icon:t.value.save,color:"dark",size:"small"},null,8,["icon"]),(0,r.Wm)(u.Z,{text:"Large",icon:t.value.save,color:"warning",size:"large"},null,8,["icon"])],64))}};const f=d;var m=f;const y=["href"],v={class:"ion-ion-color-dark"};var g={__name:"NumberWithLink",props:{telephone:{type:String,required:!0},message:{type:String,default:""}},setup(e){return(t,n)=>((0,r.wg)(),(0,r.iD)("a",{href:`https://wa.me/${e.telephone}?text=${e.message}`},[(0,r._)("span",v,(0,a.zw)(e.telephone),1),(0,r.Wm)((0,o.SU)(l.gu),{icon:(0,o.SU)(i.gmo),class:"ml-1"},null,8,["icon"])],8,y))}},_=n(3744);const w=(0,_.Z)(g,[["__scopeId","data-v-1aaf2f64"]]);var E=w,h=n(7188),S=n(34),A={__name:"Whatsapp",setup(e){const t=(0,S.F)(),n=(0,r.Fl)((()=>t.getWhatsappTelephone));return(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(h.Z,{class:"mb-2",message:"Hi"}),(0,r.Wm)(E,{message:"Hi",telephone:n.value},null,8,["telephone"])],64))}};const b=A;var R=b;function x(e,t){const n=(0,r.up)("ion-col"),o=(0,r.up)("ion-row");return(0,r.wg)(),(0,r.j4)(o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,{class:"separator"},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3})}const T={},I=(0,_.Z)(T,[["render",x],["__scopeId","data-v-472066bf"]]);var O=I,U=n(2278),C=n(6110),k=n(8122),D=n(4411),W=(n(2801),n(1439),n(7585),n(5315),n(9895)),N=n(7439);const M=(0,W.fo)("Camera",{web:()=>n.e(806).then(n.bind(n,6806)).then((e=>new e.CameraWeb))});function Z(){async function e(e=N.dk.DataUrl,t=N.oK.Prompt,n=90,r=!0){const o=await M.getPhoto({resultType:e,source:t,quality:n,allowEditing:r});return e===N.dk.DataUrl?o.dataUrl:e===N.dk.Base64?o.base64String:o}return{takePhoto:e}}var B={__name:"File",props:{openCamera:{type:Boolean,default:!1},label:{type:String,default:"Select files"},accept:{type:String,default:"image/*"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{default:i.tjo},iconOnly:{type:Boolean,default:!1},size:{type:String,default:"medium"}},emits:["files"],setup(e,{emit:t}){const{takePhoto:n}=Z(),a=(0,o.iH)(null);function l(){const e=a.value.$el.getElementsByTagName("input")[0];e.click()}async function i(){const e=await n(),r=s(e);t("files",[r]||0)}function c(e){t("files",e.target.files||[])}function s(e){const t=e.split(","),n=t[0].indexOf("base64")>=0?atob(t[1]):decodeURI(t[1]),r=t[0].split(":")[1].split(";")[0],o=new Uint8Array(n.length);for(let a=0;a<n.length;a++)o[a]=n.charCodeAt(a);return new Blob([o],{type:r})}return(t,n)=>{const o=(0,r.up)("ion-input");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u.Z,{size:e.size,text:e.iconOnly?"":e.label,icon:e.icon,"icon-only":e.iconOnly,"is-loading":e.loading,onClick:n[0]||(n[0]=t=>e.openCamera?i():l())},null,8,["size","text","icon","icon-only","is-loading"]),(0,r.Wm)(o,{ref_key:"fileInput",ref:a,hidden:"",style:{display:"none"},type:"file",multiple:e.multiple,accept:`${e.accept};capture=camera`,onChange:c},null,8,["multiple","accept"])])}}};const L=B;var P=L,j={__name:"SelectExample",props:{okText:{type:String,default:"Select"},cancelText:{type:String,default:"Cancel"},modelValue:{required:!0},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},label:{type:String,default:"Select example"},placeholder:{type:String,default:"Select an item"},errorMessage:{type:String,default:"Select a value"}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,c=(0,o.iH)([{code:1,name:"Item A"},{code:2,name:"Item B"}]),s=(0,o.iH)({value:{}}),p=(0,o.iH)({value:null}),{modelValue:d}=(0,o.BK)(n);function f(){s.value.value=null,t("update:modelValue",s.value),p.value.value=null}return(0,r.YP)(d,(e=>{s.value=e||{}})),(0,r.bv)((()=>{s.value=d.value||{}})),(n,d)=>{const m=(0,r.up)("error-message");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)((0,o.SU)(l.Ie),{class:"container"},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(l.t9),{modelValue:s.value.value,"onUpdate:modelValue":d[0]||(d[0]=e=>s.value.value=e),label:e.label,"ok-text":e.okText,"cancel-text":e.cancelText,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,onIonChange:d[1]||(d[1]=()=>{t("update:modelValue",s.value.value),p.value.value=null})},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.value,((e,t)=>((0,r.wg)(),(0,r.j4)((0,o.SU)(l.n0),{key:t,value:e.code},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","label","ok-text","cancel-text","placeholder","multiple","disabled"]),(0,r.Wm)(u.Z,{class:"p-0 m-0",color:"dark",size:"small",fill:"clear",icon:(0,o.SU)(i.xvD),"icon-only":!0,onClick:d[2]||(d[2]=e=>f())},null,8,["icon"])])),_:1}),(0,r.Wm)(m,{class:"mt-1",text:p.value.value},null,8,["text"])],64)}}};const z=(0,_.Z)(j,[["__scopeId","data-v-b74be732"]]);var H=z,F=n(3637);const V=e=>((0,r.dD)("data-v-7c76f82c"),e=e(),(0,r.Cn)(),e),Y=V((()=>(0,r._)("h2",null,"Home1 1",-1))),q={slot:"content",class:"ion-padding"},$=V((()=>(0,r._)("kbd",null,"ion-img",-1)));var K={__name:"Index",setup(e){const{openToast:t}=(0,F.Z)(),n=[{value:"buttons",label:"Buttons",component:m},{value:"whatsapp",label:"Whatsapp",component:R},{value:"divider",label:"Divider",component:O},{value:"errorMessage",label:"Error message",component:U.Z},{value:"image",label:"Image",component:C.Z},{value:"loading",label:"Loading",component:k.Z,props:{loading:!0}},{value:"noContent",label:"No content",component:D.Z},{value:"file",label:"File",component:P},{value:"fileOpenCamera",label:"File open camera",component:P,props:{openCamera:!0,label:"Open camera and gallery"}},{value:"selectExample",label:"Select example",component:H},{value:"composables",label:"Composables",component:u.Z,props:{text:"Open toast",color:"tertiary"},events:{click:()=>{t("Toast with composition API","tertiary")}}}];return(e,t)=>{const i=(0,r.up)("base-layout");return(0,r.wg)(),(0,r.j4)(i,{"show-menu-button":!0,"show-tool-bar-menu":!0},{default:(0,r.w5)((()=>[Y,(0,r.Wm)((0,o.SU)(l.jY),null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(l.Nd),null,{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(l.wI),{size:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(l.eh),{multiple:""},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(n,(e=>(0,r.Wm)((0,o.SU)(l.We),{key:e.value,value:e.value},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(l.Ie),{slot:"header",color:"light"},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(l.Q$),{style:{margin:"10px"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.label),1)])),_:2},1024)])),_:2},1024),(0,r._)("div",q,[((0,r.wg)(),(0,r.j4)((0,r.LL)(e.component),(0,r.dG)(e.props||{},(0,r.mx)(e.events||{})),{default:(0,r.w5)((()=>[(0,r.Uk)(" x ")])),_:2},1040)),"image"===e.value?((0,r.wg)(),(0,r.j4)((0,o.SU)(l.yW),{key:0,class:"fs-14 text-center",color:"medium"},{default:(0,r.w5)((()=>[$,(0,r.Uk)(" component with default image in case of errors on loading ")])),_:1})):(0,r.kq)("",!0)])])),_:2},1032,["value"]))),64))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}};const G=(0,_.Z)(K,[["__scopeId","data-v-7c76f82c"]]);var Q=G}}]);
//# sourceMappingURL=813.2c891c23.js.map