(function(){var e={6352:function(e,n,t){var o={"./":[9274,7,274],"./index":[9274,7,274],"./index-1c5c47b4":[9644,9],"./index-1c5c47b4.js":[9644,9],"./index.js":[9274,7,274],"./ionicpwaelements":[8910,9,910],"./ionicpwaelements.js":[8910,9,910],"./loader":[8317,9],"./loader.js":[8317,9],"./pwa-action-sheet.entry":[3807,9,807],"./pwa-action-sheet.entry.js":[3807,9,807],"./pwa-camera-modal-instance.entry":[7890,9,890],"./pwa-camera-modal-instance.entry.js":[7890,9,890],"./pwa-camera-modal.entry":[9238,9,238],"./pwa-camera-modal.entry.js":[9238,9,238],"./pwa-camera.entry":[3099,9,99],"./pwa-camera.entry.js":[3099,9,99],"./pwa-toast.entry":[5816,9,816],"./pwa-toast.entry.js":[5816,9,816]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(2).map(t.e)).then((function(){return t.t(r,16|n[1])}))}r.keys=function(){return Object.keys(o)},r.id=6352,e.exports=r},1105:function(e){function n(e){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}))}n.keys=function(){return[]},n.resolve=n,n.id=1105,e.exports=n},1993:function(e){function n(e){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}))}n.keys=function(){return[]},n.resolve=n,n.id=1993,e.exports=n},7877:function(e,n,t){"use strict";var o=t(6154),r=t(4571);const i="https://station_census.rivermedcenter.net/api/",a=o.Z.create({baseURL:i,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.getItem("token")?"Bearer "+localStorage.getItem("token"):""}});a.interceptors.request.use((async e=>{const n=await r.u.get({key:"token"});return e.headers.Authorization=`Bearer ${n.value||null}`,e})),a.interceptors.response.use((e=>e),(e=>(console.log(e),401===e.response.status&&console.log("Error1"),Promise.reject(e)))),n.Z=a},4136:function(e,n,t){"use strict";var o=t(9985);n.Z={[o.Z.CLIENT]:"client-home",[o.Z.ADMINISTRATOR]:"admin-dashboard"}},9985:function(e,n){"use strict";n.Z={CLIENT:1,ADMINISTRATOR:2}},3284:function(e,n,t){"use strict";var o=t(9963),r=t(9876),i=t(4571),a=t(5523),u=t(5518),c=t(6252),l=(t(7658),t(3577)),s=t(8903),p=t(2262),d=t(2201),m=t(9985),f=t(4136);const g=(0,r.Q_)("menu",{state:()=>({publicItems:[],withoutAuth:[{title:"Division",type:2},{title:"Login",url:"/login",icon:s.IOP},{title:"Register",url:"/register",icon:s.vi8},{title:"Division",type:2}],needAuth:[{title:"Dashboard",url:"admin/dashboard",icon:s.LEH},{title:"Division",type:2},{title:"Logout 1",url:"/logout",icon:s.qux}],[m.Z.CLIENT]:[{title:"Home",url:"/client/home",icon:s.LEH},{title:"Division",type:2}],[m.Z.ADMINISTRATOR]:[{title:"Dashboard 2",url:"/admin/dashboard",icon:s.LEH},{title:"Division",type:2}]}),getters:{getPublic(e){return e.publicItems},getWithoutAuth(e){return e.withoutAuth},getNeedAuth(e){return e.needAuth},getMenuByUserType:e=>n=>e[n]||[]}});var h=t(2094),v=t(2744),y=(t(6110),t(2454));const b=e=>((0,c.dD)("data-v-d30da55e"),e=e(),(0,c.Cn)(),e),w={key:1},k=b((()=>(0,c._)("hr",null,null,-1))),_=[k],S={key:2},T={class:""};var I={__name:"Menu",setup(e){const n=(0,y.r)(),{user:t}=(0,r.Jk)(n),o=g(),a=(0,h.L)(),u=(0,c.Fl)((()=>o.getPublic)),m=(0,c.Fl)((()=>o.getWithoutAuth)),f=(0,c.Fl)((()=>o.getNeedAuth)),b=(0,c.Fl)((()=>o.getMenuByUserType)),k=(0,c.Fl)((()=>a.getUserType)),I=(0,c.Fl)((()=>a.getUserName)),O=(0,p.iH)(0),j=(0,p.iH)(!1),N=(0,d.tv)(),U=(0,p.iH)(t.value.data.name),A=(0,p.iH)({build:s.J_Q,paperPlane:s.IAR,wallet:s.gUi,megaphone:s.m5g,book:s.s9D,personAdd:s.vi8,power:s.qux,enter:s.IOP,openOutline:s.gmo}),D=(0,p.iH)([]);async function E(){await W(),await C()}async function x(){const e=await i.u.get({key:"token"});console.log("token"),console.log(e),j.value=!!e.value,console.log("toekn status",j.value)}async function W(){await x();let e=await k.value;e=await k.value;const n=b.value(e.value);D.value=[...j.value&&n?n:[],...j.value?f.value:m.value,...u.value]}function Z(e,n){O.value=e,n.link?window.open(n.link,"_blank"):N.push(n.url)}async function C(){const e=await I.value;console.log(e.content)}return(0,c.bv)((async()=>{v.Z.on("logged",E),console.log("is logged: ",j.value),await W(),await C()})),(0,c.Jd)((async()=>{await W(),await C(),v.Z.off("logged",E)})),(e,n)=>{const t=(0,c.up)("ion-toolbar"),o=(0,c.up)("ion-header"),r=(0,c.up)("ion-icon"),i=(0,c.up)("ion-label"),a=(0,c.up)("ion-item"),u=(0,c.up)("ion-menu-toggle"),s=(0,c.up)("ion-list"),p=(0,c.up)("ion-content"),d=(0,c.up)("ion-menu");return(0,c.wg)(),(0,c.j4)(d,{"content-id":"main-content",type:"overlay"},{default:(0,c.w5)((()=>[(0,c.Wm)(o,null,{default:(0,c.w5)((()=>[(0,c.Wm)(t,{class:"welcome-container",color:"primary"},{default:(0,c.w5)((()=>[(0,c._)("span",null,"Welcome "+(0,l.zw)(U.value),1)])),_:1})])),_:1}),(0,c.Wm)(p,null,{default:(0,c.w5)((()=>[(0,c.Wm)(s,{id:"inbox-list"},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(D.value,((e,n)=>((0,c.wg)(),(0,c.j4)(u,{key:`${e.title}${n}`,"auto-hide":!1},{default:(0,c.w5)((()=>[2!==e.type&&"category"!==e.type?((0,c.wg)(),(0,c.j4)(a,{key:0,lines:"none",detail:"false",class:(0,l.C_)(["hydrated",{selected:O.value===n}]),"router-direction":"root",onClick:t=>Z(n,e)},{default:(0,c.w5)((()=>[(0,c.Wm)(r,{slot:"start",icon:e.icon},null,8,["icon"]),(0,c.Wm)(i,null,{default:(0,c.w5)((()=>[(0,c.Uk)((0,l.zw)(e.title),1)])),_:2},1024),e.link?((0,c.wg)(),(0,c.j4)(r,{key:0,icon:A.value.openOutline,class:"fs-16"},null,8,["icon"])):(0,c.kq)("",!0)])),_:2},1032,["class","onClick"])):2===e.type&&n!==D.value.length-1?((0,c.wg)(),(0,c.iD)("span",w,_)):"category"===e.type&&n!==D.value.length-1?((0,c.wg)(),(0,c.iD)("span",S,[(0,c.Wm)(a,null,{default:(0,c.w5)((()=>[(0,c._)("h1",T,[(0,c._)("b",null,(0,l.zw)(e.title),1)])])),_:2},1024)])):(0,c.kq)("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}}},O=t(3744);const j=(0,O.Z)(I,[["__scopeId","data-v-d30da55e"]]);var N=j,U=t(8138),A={__name:"App",setup(e){(0,U.a)({"pulse-outline":s.rpH,"radio-outline":s.z9J,"contract-outline":s.PJG,"flame-outline":s.sz4,"person-circle-outline":s.XMB,"lock-closed-outline":s.hkI,"logo-github":s.oE5,"logo-google":s.Y_g,"logo-facebook":s.u_j,"logo-linkedin":s.Jkl,"mail-outline":s.xOl,"arrow-back":s.XRs,"home-outline":s.TSh,"cart-outline":s.idt,"newspaper-outline":s.U7$,"ellipsis-vertical-circle-outline":s.Od$,"megaphone-outline":s.ln3,"notifications-outline":s.iZ5,"create-outline":s.mjL,"document-lock-outline":s.Srn,"people-outline":s.JZY,"pricetags-outline":s.Gtv,"grid-outline":s.d8i,"camera-outline":s.kuq,"documents-outline":s.CiY,"chatbubbles-outline":s.z6l,"calculator-outline":s.ABu,"build-outline":s.DVN,"checkmark-circle-outline":s.Nwd,"book-outline":s.W3$,"calendar-outline":s.rom,"scan-circle-outline":s.qL,"filter-circle-outline":s.cUk,"add-circle-outline":s.hd1,"business-outline":s.c1X,"globe-outline":s.jgG,"time-outline":s.bdY,"hourglass-outline":s.Go2,"eye-outline":s.hII,"eye-off-outline":s.qRO,"radio-button-on-outline":s.kh0,"close-circle-outline":s.UMR,"chatbubble-ellipses-outline":s.JCQ,"send-outline":s.SIs,"document-text-outline":s.L82,"notifications-circle-outline":s.TGt,"alert-outline":s.SaV,"checkmark-outline":s.TjA,"checkbox-outline":s.A7i,"close-outline":s.fID,"airplane-outline":s.TTc,"refresh-outline":s.D3P,"pause-outline":s.Q48,"play-outline":s.AO3,"checkmark-done-outline":s.f4Q,"return-down-back-outline":s.r52,"arrow-down-outline":s.o9Y,"search-circle-outline":s.HSM,"scan-outline":s.YG6,"search-outline":s.W6I,"people-circle-outline":s.h1g,"phone-portrait-outline":s.lyk,"add-outline":s.s6O,"image-outline":s.Eu9,"ellipsis-horizontal":s.gwR,"add-circle":s.ZWo,search:s.yC4,"shield-checkmark-outline":s.nve,images:s.WcA,"chevron-forward":s.XXs,"arrow-forward-circle":s.WFC,"arrow-forward":s.kVA,"menu-outline":s.GIQ,"remove-outline":s.Z4Y,download:s.LRf,"log-out-outline":s.euS});const n=(0,p.iH)(!1);async function t(){const e=await i.u.get({key:"token"});n.value=!!e.value}return(0,c.bv)((async()=>{await t(),console.log("isLoggedIn.value: ",n.value)})),(e,n)=>{const t=(0,c.up)("ion-router-outlet"),o=(0,c.up)("IonSplitPane"),r=(0,c.up)("IonApp");return(0,c.wg)(),(0,c.j4)(r,null,{default:(0,c.w5)((()=>[(0,c.Wm)(o,{"content-id":"main-content"},{default:(0,c.w5)((()=>[(0,c.Wm)(N),((0,c.wg)(),(0,c.j4)(t,{id:"main-content",key:e.$route.fullPath}))])),_:1})])),_:1})}}};const D=A;var E=D,x=t(4297),W=[{path:"/client/home",name:"client-home",component:()=>t.e(843).then(t.bind(t,4843)),meta:{userType:m.Z.CLIENT}}],Z=[{path:"/admin/dashboard",name:"admin-dashboard",component:()=>t.e(92).then(t.bind(t,7092)),meta:{userType:m.Z.ADMINISTRATOR}}];const C=[{path:"/",redirect:"/login"},{path:"/home",name:"home",component:()=>t.e(813).then(t.bind(t,3813))},...W,...Z,{path:"/login",name:"login",component:()=>t.e(361).then(t.bind(t,7361))},{path:"/recovery-password",name:"recovery-password",component:()=>t.e(110).then(t.bind(t,9110))},{path:"/register",name:"register",component:()=>t.e(803).then(t.bind(t,9803))},{path:"/contact",name:"contact",component:()=>t.e(906).then(t.bind(t,3906))},{path:"/logout",name:"logout",component:()=>t.e(320).then(t.bind(t,6320))},{path:"/not-authorized",name:"not-authorized",component:()=>t.e(513).then(t.bind(t,6513))},{path:"/:catchAll(.*)",name:"not-found",component:()=>t.e(803).then(t.bind(t,9803))},{path:"/stations:propKey*",name:"stations",component:()=>t.e(280).then(t.bind(t,1280))}],B=(0,x.p7)({history:(0,x.PO)("/ionic-vue-boilerplate/"),routes:C});var L=B,P=t(2724),M=t(2278),q=t(8122),R=(t(8851),t(1292),t(1633),t(1045),t(6187),t(2299),t(3423),t(4687),t(9147),t(6250),t(9582)),z=t(5137);L.beforeEach((async(e,n,t)=>{z.g.addListener("backButton",(({canGoBack:e})=>{e?window.history.back():z.g.exitApp()}));const o=await i.u.get({key:"user"});let r=0,a=0;if(o.value){const{userId:e,userType:n}=JSON.parse(o.value);r=e,a=n}["login","register"].includes(e.name)&&o.value?t({name:f.Z[a]}):e.meta.userType?o.value&&r&&a?e.matched.forEach((e=>{("object"!==typeof e.meta.userType||e.meta.userType.some((e=>e===a)))&&!e.meta.userType!==a?t():t({name:"not-authorized"})})):t({name:"logout"}):t()}));const H=(0,r.WB)(),F=(0,o.ri)(E).use(u.oX).use(L).use(H);F.component("BaseLayout",P.Z),F.component("ErrorMessage",M.Z),F.component("Loading",q.Z),F.component("VueDatePicker",R.Z),F.component("ion-badge",u.yp),F.component("ion-button",u.YG),F.component("ion-buttons",u.Sm),F.component("ion-card",u.PM),F.component("ion-card-content",u.FN),F.component("ion-card-header",u.Zi),F.component("ion-card-subtitle",u.tO),F.component("ion-card-title",u.Dq),F.component("ion-checkbox",u.nz),F.component("ion-chip",u.hM),F.component("ion-app",u.dr),F.component("ion-page",u._i),F.component("ion-content",u.W2),F.component("ion-datetime",u.x4),F.component("ion-picker",u.cb),F.component("ion-fab",u.IJ),F.component("ion-fab-button",u.W4),F.component("ion-fab-list",u.zq),F.component("ion-grid",u.jY),F.component("ion-row",u.Nd),F.component("ion-col",u.wI),F.component("ion-infinite-scroll",u.ju),F.component("ion-infinite-scroll-content",u.MB),F.component("ion-icon",u.gu),F.component("ion-item",u.Ie),F.component("ion-item-divider",u.rH),F.component("ion-item-group",u.Ub),F.component("ion-item-sliding",u.td),F.component("ion-item-options",u.IK),F.component("ion-item-option",u.u8),F.component("ion-label",u.Q$),F.component("ion-note",u.uN),F.component("ion-list",u.q_),F.component("ion-list-header",u.yh),F.component("ion-virtual-scroll",u.IonVirtualScroll),F.component("ion-menu",u.z0),F.component("ion-menu-button",u.fG),F.component("ion-menu-toggle",u.zc),F.component("ion-split-pane",u.jI),F.component("ion-backdrop",u.ql),F.component("ion-nav",u.O1),F.component("ion-nav-link",u.Qx),F.component("ion-loading",u.wh),F.component("ion-progress-bar",u.X7),F.component("ion-skeleton-text",u.CK),F.component("ion-spinner",u.PQ),F.component("ion-radio",u.B7),F.component("ion-radio-group",u.se),F.component("ion-range",u.I_),F.component("ion-refresher",u.nJ),F.component("ion-refresher-content",u.Wo),F.component("ion-reorder",u.Nh),F.component("ion-reorder-group",u.oz),F.component("ion-searchbar",u.VI),F.component("ion-segment",u.cJ),F.component("ion-segment-button",u.GO),F.component("ion-select",u.t9),F.component("ion-select-option",u.n0),F.component("ion-slides",u.IonSlides),F.component("ion-slide",u.IonSlide),F.component("ion-tabs",u.UN),F.component("ion-ripple-effect",u.H$),F.component("ion-tab-bar",u.yq),F.component("ion-tab-button",u.ZU),F.component("ion-toogle",u.ho),F.component("ion-toolbar",u.sr),F.component("ion-header",u.Gu),F.component("ion-footer",u.fr),F.component("ion-title",u.wd),F.component("ion-back-button",u.oU),F.component("ion-text",u.yW),F.component("ion-input",u.pK),F.component("ion-img",u.Xz),F.component("ion-avatar",u.BJ),F.component("ion-router-outlet",u.jP),F.component("ion-textarea",u.g2),F.component("ion-thumbnail",u.Bs),F.component("ion-item-divider",u.rH),F.component("ion-toggle",u.ho),L.isReady().then((()=>{F.mount("#app")})).then((()=>(0,a.q4)(window)))},2744:function(e,n,t){"use strict";var o=t(9652);const r=(0,o.Z)();n.Z=r},34:function(e,n,t){"use strict";t.d(n,{F:function(){return r}});var o=t(9876);const r=(0,o.Q_)("general",{getters:{getImagesAddress(){return"https://pferreirafabricio.github.io/ionic-vue-boilerplate"},getApiUrl(){return"https://pferreirafabricio.github.io/ionic-vue-boilerplate"},getWhatsappTelephone(){return"+559999999999"},getContactEmail(){return"pferreirafabricio@gmail.com"}}})},2454:function(e,n,t){"use strict";t.d(n,{r:function(){return u}});var o=t(7877),r=t(4571),i=t(9876),a=t(9985);const u=(0,i.Q_)("login",{id:"auth",state:()=>({user:JSON.parse(localStorage.getItem("user")),returnUrl:null}),actions:{async setToken(e){await r.u.set({key:"token",value:e})},async setUserData(e){await r.u.set({key:"user",value:JSON.stringify({userId:e.id,userType:e.typeUser,userName:e.userName})})},async login(e){return console.log("234 response"),o.Z.post("auth/login",e).then((async e=>(console.log("response"),console.log(e.data.access_token),await this.setToken(e.data.access_token),await this.setUserData({id:1,typeUser:a.Z.ADMINISTRATOR,userName:"Admin"}),this.user=e,localStorage.setItem("user",JSON.stringify(e)),{data:{userType:a.Z.ADMINISTRATOR}}))).catch((e=>(console.log("err response"),Promise.reject(e))))}}})},2094:function(e,n,t){"use strict";t.d(n,{L:function(){return a}});var o=t(9876),r=t(4571),i=t(7877);const a=(0,o.Q_)("user",{state:()=>({userId:0,userType:0}),getters:{async getUserId(){const e=await r.u.get({key:"user"});if(!e.value)return 0;const{userId:n}=JSON.parse(e.value);return n||0},async getUserType(){const e=await r.u.get({key:"user"});if(!e.value)return 0;const{userType:n}=JSON.parse(e.value);return n||0},async getUserName(){const e=await r.u.get({key:"user"});if(!e.value)return"";const{userName:n}=JSON.parse(e.value);return n||""}},actions:{cleanUserData(){this.setUserId=0,this.setUserType=0},sendRecoveryPasswordEmail(e){return i.Z.post("/recover-password",{email:e})}}})},2278:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(6252),r=t(3577);const i={class:"mt-1"};var a={__name:"ErrorMessage",props:{text:{type:String,default:"Something went wrong"}},setup(e){return(n,t)=>{const a=(0,o.up)("ion-text");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(a,{color:"danger",class:"fs-14"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.text),1)])),_:1})])}}};const u=a;var c=u},6110:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var o=t(6252),r=t(2262),i=t(34);const a="assets/vectors/blank.svg";var u={__name:"Image",props:{src:{type:String,required:!1}},setup(e){const n=(0,i.F)(),t=(0,o.Fl)((()=>n.getImagesAddress)),u=(0,r.iH)(!1);return(n,r)=>{const i=(0,o.up)("ion-img");return(0,o.wg)(),(0,o.j4)(i,(0,o.dG)((0,o.l1)(),{src:!u.value&&e.src?`${t.value}/${e.src}`:a,onIonError:r[0]||(r[0]=e=>u.value=!0)}),null,16,["src"])}}};const c=u;var l=c},8122:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var o=t(6252),r={__name:"Loading",props:{loading:{type:Boolean,default:!1},name:{type:String,default:"crescent"}},setup(e){return(n,t)=>{const r=(0,o.up)("ion-spinner");return(0,o.wg)(),(0,o.iD)("div",null,[e.loading?((0,o.wg)(),(0,o.j4)(r,{key:0,class:"d-block mx-auto",name:e.name,color:"primary"},null,8,["name"])):(0,o.kq)("",!0)])}}};const i=r;var a=i},2724:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});t(7658);var o=t(6252),r=t(2262),i=t(9963),a=t(3577),u=t(5518),c=t(2201);const l={key:0};var s={__name:"BaseLayout",props:{pageTitle:{type:String,required:!1},pageDefaultBackLink:{type:String,required:!1},colorType:{type:String,required:!1},colorToolbar:{type:String,default:"light",required:!1},showMenuButton:{type:Boolean,default:!0},ignoreHistory:{type:Boolean,default:!1},className:{type:String,required:!1},showToolBarMenu:{type:Boolean,required:!1}},setup(e){const n=e,{pageDefaultBackLink:t}=(0,r.BK)(n),s=(0,c.tv)();function p(){s.push(t)}return(n,c)=>((0,o.wg)(),(0,o.j4)((0,r.SU)(u._i),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,r.SU)(u.Gu),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,r.SU)(u.sr),{color:e.colorToolbar},{default:(0,o.w5)((()=>[e.showToolBarMenu?((0,o.wg)(),(0,o.j4)((0,r.SU)(u.Sm),{key:0,slot:"start"},{default:(0,o.w5)((()=>[(0,r.SU)(t)?((0,o.wg)(),(0,o.iD)("div",l,[e.ignoreHistory?((0,o.wg)(),(0,o.j4)((0,r.SU)(u.oU),{key:1,text:"Back","default-href":"",onClick:c[0]||(c[0]=(0,i.iM)((e=>p()),["prevent"]))})):((0,o.wg)(),(0,o.j4)((0,r.SU)(u.oU),{key:0,text:"Back","default-href":(0,r.SU)(t)},null,8,["default-href"]))])):(0,o.kq)("",!0),(0,o.wy)((0,o.Wm)((0,r.SU)(u.fG),{color:"primary"},null,512),[[i.F8,e.showMenuButton]]),(0,o.Wm)((0,r.SU)(u.yW),{class:"ml-4 font-weight-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.pageTitle),1)])),_:1})])),_:1})):(0,o.kq)("",!0),(0,o.Wm)((0,r.SU)(u.Sm),{slot:"end",class:"ml-auto"},{default:(0,o.w5)((()=>[(0,o.WI)(n.$slots,"actions-end")])),_:3})])),_:3},8,["color"])])),_:3}),(0,o.Wm)((0,r.SU)(u.W2),{class:(0,a.C_)(`ion-padding ${e.className}`),"scroll-events":!0,color:e.colorType},{default:(0,o.w5)((()=>[(0,o.WI)(n.$slots,"default")])),_:3},8,["class","color"])])),_:3}))}};const p=s;var d=p}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);t.r(i);var a={};e=e||[null,n({}),n([]),n(n)];for(var u=2&r&&o;"object"==typeof u&&!~e.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},t.d(i,a),i}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{74:"7722104b",78:"2fefe5a2",92:"40f8a259",99:"5c006cf4",110:"4504931d",158:"febe1868",238:"ba25feab",274:"32665fc7",280:"6c61b170",320:"d0aa6321",338:"63a2f6a2",361:"654ba0bf",486:"76e6ba8c",513:"811b4a51",541:"6c423a8b",576:"bac46fc5",753:"5ff84184",775:"8a91905c",800:"0119d62c",803:"e88d1cee",806:"bb1b97a7",807:"c16268af",813:"26d6ac03",816:"fcc74a3b",843:"8431bf8b",890:"8876e187",906:"23999f53",910:"741e328d",990:"71973664"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{92:"78f52e83",110:"2513bd6c",320:"6ce1c313",361:"0a191c89",513:"3633f625",803:"7f08ed2e",813:"b05e49c1",906:"fd589951"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="app-boilerplate:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var p=l[s];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==n+i){u=p;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/ionic-vue-boilerplate/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),u=t.p+a;if(n(a,u))return r();e(o,u,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={92:1,110:1,320:1,361:1,513:1,803:1,813:1,906:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var s=c(t)}for(n&&n(o);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},o=self["webpackChunkapp_boilerplate"]=self["webpackChunkapp_boilerplate"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3284)}));o=t.O(o)})();
//# sourceMappingURL=app.73633abb.js.map