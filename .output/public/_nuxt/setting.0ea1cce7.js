import{bP as ke,o as h,q as P,b as s,f as y,Q as D,s as W,t as u,O as G,l as H,A as ye,r as w,u as e,x as S,I as $,N as V,c as O,i as $e,k as le,m as xe,K as se,a1 as ne,p as fe,e as N,M as F,Y as j,S as me,T as ve,C as ge,U as Se,W as he,h as Ce,H as Ae,L as Ie,w as we,v as R,y as Pe}from"./entry.ea93fdf2.js";import{u as ee,a as Ue,L as Ne}from"./Layout.7db09108.js";import{q as Ve,v as Ee}from"./vue3-editor.common.8226de28.js";import{u as re}from"./useUser.bb4e922e.js";import{S as ae}from"./ProBadge.e3dc9c3a.js";import{_ as oe}from"./_plugin-vue_export-helper.c27b6911.js";import"./user-counters-api.8980a299.js";var te={},De={get exports(){return te},set exports(U){te=U}};(function(U,f){(function(C,m){m(f)})(ke,function(C){function m(t,a){return function(l){if(Array.isArray(l))return l}(t)||function(l,v){var k=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(k!=null){var M,d,i=[],p=!0,E=!1;try{for(k=k.call(l);!(p=(M=k.next()).done)&&(i.push(M.value),!v||i.length!==v);p=!0);}catch(K){E=!0,d=K}finally{try{p||k.return==null||k.return()}finally{if(E)throw d}}return i}}(t,a)||function(l,v){if(l){if(typeof l=="string")return g(l,v);var k=Object.prototype.toString.call(l).slice(8,-1);if(k==="Object"&&l.constructor&&(k=l.constructor.name),k==="Map"||k==="Set")return Array.from(l);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return g(l,v)}}(t,a)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function g(t,a){(a==null||a>t.length)&&(a=t.length);for(var l=0,v=new Array(a);l<a;l++)v[l]=t[l];return v}function b(t,a){var l,v,k,M,d=null,i=typeof a=="number"?a:(l=m(String(a).split(/(ms|s)/i),2),v=l[0],k=l[1],M=k===void 0?"ms":k,Number(v)*{ms:1,s:1e3}[M]),p=function(){for(var E=this,K=arguments.length,T=new Array(K),B=0;B<K;B++)T[B]=arguments[B];var Q=function(){d=null,t.apply(E,T)};clearTimeout(d),(d=setTimeout(Q,i))||t.apply(this,T)};return p.cancel=function(){clearTimeout(d),d=null},p}function A(t){return t.map(function(a){return a.toLowerCase()})}function n(t,a){var l,v=t?t["debounce-events"]:[];return v&&v.length>0?Array.isArray(v)?A(v):A(v.split(",")):A((l=a,Array.isArray(l)?l:l==null?[]:[l]))}function c(t){return t===""}function _(t,a){return t==="Enter"&&(!a.lock||a.unlock)}function o(t,a,l){return c(t)&&l.fireonempty&&(a==="Enter"||a===" ")}function x(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.lock,l=a!==void 0&&a,v=t.listenTo,k=v===void 0?"keyup":v,M=t.defaultTime,d=M===void 0?"300ms":M,i=t.fireOnEmpty,p=i!==void 0&&i,E=t.cancelOnEmpty,K=E!==void 0&&E,T=t.trim,B=T!==void 0&&T;return{bind:function(Q,q,ie){var J=q.value,X=q.arg,ue=X===void 0?d:X,de=q.modifiers,L=Object.assign({lock:l,trim:B,fireonempty:p,cancelonempty:K},de),ce=n(ie.data.attrs,k),z=b(function(I){J(I.target.value,I)},ue);function pe(I){var Z=L.trim?I.target.value.trim():I.target.value;c(Z)&&L.cancelonempty?z.cancel():_(I.key,L)||o(Z,I.key,L)?(z.cancel(),J(I.target.value,I)):z(I)}ce.forEach(function(I){Q.addEventListener(I,pe)})}}}var r={install:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t.directive("debounce",x(a))}};C.debounce=b,C.default=r,C.vue3Debounce=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.lock,l=a!==void 0&&a,v=t.listenTo,k=v===void 0?"keyup":v,M=t.defaultTime,d=M===void 0?"300ms":M,i=t.fireOnEmpty,p=i!==void 0&&i,E=t.cancelOnEmpty,K=E!==void 0&&E,T=t.trim,B=T!==void 0&&T;return{created:function(Q,q,ie){var J=q.value,X=q.arg,ue=X===void 0?d:X,de=q.modifiers,L=Object.assign({lock:l,trim:B,fireonempty:p,cancelonempty:K},de),ce=n(ie.props,k),z=b(function(I){J(I.target.value,I)},ue);function pe(I){var Z=L.trim?I.target.value.trim():I.target.value;c(Z)&&L.cancelonempty?z.cancel():_(I.key,L)||o(Z,I.key,L)?(z.cancel(),J(I.target.value,I)):z(I)}ce.forEach(function(I){Q.addEventListener(I,pe)})}}},Object.defineProperty(C,"__esModule",{value:!0})})})(De,te);const Fe={class:"w-full modal-layer xl:w-3/12 lg:w-2/5"},Me={class:"flex flex-col justify-center w-full text-center"},je={class:"mb-6"},Te={class:"flex flex-row justify-center mb-4 w-full text-base font-bold text-green-600"},Le={__name:"SuccessMessageModal",props:{modalId:{type:String,default:"success-modal"},message:{type:String,default:"Success"}},setup(U){const f=U,C=()=>{G().closeModal(f.modalId)};return(m,g)=>(h(),P("div",null,[s("div",Fe,[s("div",Me,[s("div",je,[s("div",Te,[y(D,{class:"mr-2 font-bold text-green-600",name:"i-mdi-check-all","text-size":"text-xl"}),W(" "+u(m.$t("success")),1)]),s("p",null,u(U.message),1)]),s("button",{class:"success-button-close",onClick:g[0]||(g[0]=b=>C())},u(m.$t("close").toUpperCase()),1)])])]))}},Y=oe(Le,[["__scopeId","data-v-33207dc8"]]),Oe={id:"avatar",class:"mb-4 w-full md:w-44"},Ke={class:"title-tiny"},Be=["src"],Re=["src"],Ge={class:"!flex-col buttons"},qe={class:"w-full"},ze=s("div",{class:"w-full"}," .jpg/.jpeg ",-1),We={key:2,class:"mt-2 w-full text-center text-failure"},Ye=s("br",null,null,-1),He={key:3,class:"mt-2 w-full text-center text-failure"},Qe={__name:"ChangeAvatarForm",setup(U){const f=H(),{apiUrl:C}=ye(),m=()=>{document.getElementById("inputAvatarFile").click()},g=w(""),b=w(""),A=t=>{const a=t.target.files[0];b.value=URL.createObjectURL(a),g.value=a},n=w(!1),c=w(!1),_=w(!1),o=w(null),x=w(""),r=async()=>{if(g.value){c.value=!1,n.value=!0,_.value=!1,x.value="";const t=g.value,a=new FormData;a.append("avatar",t);try{const l=await $e.post(C+"/user/update/avatar",a,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${f.a4ht0jen}`}});c.value=!0,G().openModal("change-avatar-success-modal")}catch(l){const v=l.response;v.data.error==="File too large"?_.value=!0:x.value=v.data.message}n.value=!1}};return(t,a)=>(h(),P("section",Oe,[s("label",Ke,u(t.$t("profile.forms.update.avatar")),1),s("form",null,[e(b)?S("",!0):(h(),P("img",{key:0,src:t.avatarCoverUrl(e(f).user.avatar_bucket,e(f).user.avatar_filename),class:"avatar",onError:a[0]||(a[0]=(...l)=>t.defaultCoverImage&&t.defaultCoverImage(...l))},null,40,Be)),e(b)?(h(),P("img",{key:1,src:e(b),class:$(["avatar",e(_)||e(x)?"border-2 border-red-400":"border-none"])},null,10,Re)):S("",!0),s("input",{id:"inputAvatarFile",ref_key:"selectedNewAvatarRef",ref:o,type:"file",accept:"image/jpeg",class:"hidden",onChange:A},null,544),s("div",Ge,[s("button",{id:"selectNewAvatarButton",class:"flex flex-col w-full text-center light-bordered-button",onClick:a[1]||(a[1]=V(l=>m(),["prevent"]))},[s("div",qe,u(t.$t("profile.forms.update.chooseNewAvatar")),1),ze]),s("button",{class:$(["submit",[{"!disabled-button !cursor-not-allowed":!e(g)},{"!disabled-button !cursor-not-allowed":e(n)}]]),onClick:a[2]||(a[2]=V(l=>m&&!e(n)?r():null,["prevent"]))},[e(n)?(h(),O(ae,{key:0})):S("",!0),W(" "+u(e(n)?t.$t("updating"):t.$t("update")),1)],2)]),e(_)?(h(),P("div",We,[W(u(t.$t("profile.forms.update.fileTooLarge"))+" ",1),Ye,W(" "+u(t.$t("profile.forms.update.avatarMaxAllowedFileSize")),1)])):S("",!0),e(x)!=""?(h(),P("div",He,u(e(x)),1)):S("",!0)]),y(Y,{id:"change-avatar-success-modal","modal-id":"change-avatar-success-modal",class:"modal",message:t.$t("profile.forms.update.avatarChanged")},null,8,["message"])]))}},Je={id:"cover",class:"mb-4"},Xe={class:"title-tiny"},Ze=["src"],et=["src"],tt={class:"!flex-col buttons"},st={key:2,class:"mt-2 w-full text-center text-failure"},ot=s("br",null,null,-1),at={key:3,class:"mt-2 w-full text-center text-failure"},lt={__name:"ChangeCoverForm",setup(U){const f=H(),{apiUrl:C}=ye(),m=()=>{document.getElementById("inputCoverFile").click()},g=w(""),b=w(""),A=t=>{const a=t.target.files[0];b.value=URL.createObjectURL(a),g.value=a},n=w(!1),c=w(!1),_=w(!1),o=w(null),x=w(""),r=async()=>{if(g.value){c.value=!1,n.value=!0,_.value=!1,x.value="";const t=g.value,a=new FormData;a.append("cover",t);try{const l=await $e.post(C+"/user/update/cover",a,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${f.a4ht0jen}`}});c.value=!0,G().openModal("change-cover-success-modal")}catch(l){const v=l.response;v.data.error==="File too large"?_.value=!0:x.value=v.data.message}n.value=!1}};return(t,a)=>(h(),P("section",Je,[s("label",Xe,u(t.$t("profile.forms.update.cover")),1),s("form",null,[e(b)?S("",!0):(h(),P("img",{key:0,src:t.avatarCoverUrl(e(f).user.cover_bucket,e(f).user.cover_filename),class:"object-cover object-top w-full h-28 rounded-md md:h-48 lg:h-64 xl:h-72 unselectable",onError:a[0]||(a[0]=(...l)=>t.defaultCoverImage&&t.defaultCoverImage(...l))},null,40,Ze)),e(b)?(h(),P("img",{key:1,src:e(b),class:$(["object-cover object-top w-full h-28 rounded-md md:h-48 lg:h-64 xl:h-72 unselectable",e(_)||e(x)?"border-2 border-red-400":"border-none"])},null,10,et)):S("",!0),s("input",{id:"inputCoverFile",ref_key:"selectedNewCoverRef",ref:o,type:"file",accept:"image/png, image/gif, image/jpeg",class:"hidden",onChange:A},null,544),s("div",tt,[s("button",{id:"selectNewCoverButton",class:"w-full light-bordered-button",onClick:a[1]||(a[1]=V(l=>m(),["prevent"]))},u(t.$t("profile.forms.update.chooseNewCover")),1),s("button",{class:$(["submit",[{"!disabled-button !cursor-not-allowed":!e(g)},{"!disabled-button !cursor-not-allowed":e(n)}]]),onClick:a[2]||(a[2]=V(l=>m&&!e(n)?r():null,["prevent"]))},[e(n)?(h(),O(ae,{key:0})):S("",!0),W(" "+u(e(n)?t.$t("updating"):t.$t("update")),1)],2)]),e(_)?(h(),P("div",st,[W(u(t.$t("profile.forms.update.fileTooLarge"))+" ",1),ot,W(" "+u(t.$t("profile.forms.update.coverMaxAllowedFileSize")),1)])):S("",!0),e(x)!=""?(h(),P("div",at,u(e(x)),1)):S("",!0)]),y(Y,{id:"change-cover-success-modal","modal-id":"change-cover-success-modal",class:"modal",message:t.$t("profile.forms.update.coverChanged")},null,8,["message"])]))}};const be=U=>(me("data-v-755d7749"),U=U(),ve(),U),nt={class:"flex flex-col w-full"},rt=be(()=>s("div",{class:"mb-4 custom-divider"},null,-1)),it=be(()=>s("div",{class:"mb-4 custom-divider"},null,-1)),ut={id:"basic-information"},dt=["id"],ct=["name"],pt={key:0,class:"input-error"},ft={class:"buttons"},mt={key:1},vt=be(()=>s("div",{class:"mb-4 custom-divider"},null,-1)),gt={id:"profile-username"},bt=["name"],ht=["placeholder"],wt={key:0,class:"input-error"},yt={key:1},$t={__name:"ProfileInformationSetting",setup(U){const f=H(),{oApiConfiguration:C,fetchOptions:m}=le(),g=re(C,m()),b=xe(),{t:A}=se();ne(()=>{f.loggedIn||b.push("/")}),fe(()=>{_()});const n=w({name:"",username:"",penName:"",bio:"",location:""}),c=w({username:"",penName:""}),_=async()=>{if(f.loggedIn){const[d,i]=await g.getInfo(f.user.id);i||(n.value.name=d.name,n.value.username=d.username,c.value.username=d.username,n.value.penName=d.pen_name,c.value.penName=d.pen_name,n.value.bio=d.bio,n.value.location=d.location)}},o=w({basic:{loading:!1,success:!1,buttonDisabled:!1,checkingValidity:!1},username:{loading:!1,success:!1,buttonDisabled:!0,checkingValidity:!1}}),x=w(!1),r=async()=>{n.value.penName===""&&(x.value=!1,o.value.basic.checkingValidity=!1,o.value.basic.buttonDisabled=!1);const d=n.value.penName.length>=4&&n.value.penName.length<=12;d?(o.value.basic.checkingValidity=!0,o.value.basic.buttonDisabled=!0,await te.debounce(async i=>{if(n.value.penName===c.value.penName&&(x.value=!1,o.value.basic.checkingValidity=!1),d){const[p,E]=await g.checkPenNameAvailability(n.value.penName);!p&&E&&f.user.pen_name!==n.value.penName?(x.value=!0,o.value.basic.checkingValidity=!1,o.value.basic.buttonDisabled=!0):(x.value=!1,o.value.basic.checkingValidity=!1,o.value.basic.buttonDisabled=!1)}},700)()):x.value=!1},t=w("basic-information-form"),a=async d=>{if(ee().validate(d,A),!x.value){o.value.basic.loading=!0;const[i,p]=await g.updateInfo({userId:f.user.id,name:n.value.name,bio:n.value.bio,location:n.value.location,penName:n.value.penName});!i&&p?o.value.basic.loading=!1:(o.value.basic.success=!0,G().openModal("update-user-info-success-modal")),o.value.basic.loading=!1}},l=w(!1),v=async()=>{n.value.username===""&&(l.value=!1,o.value.username.buttonDisabled=!0,o.value.username.checkingValidity=!1);const d=n.value.username.length>=4&&n.value.username.length<=12;d?(o.value.username.buttonDisabled=!0,o.value.username.checkingValidity=!0,await te.debounce(async i=>{if(n.value.username==c.value.username)l.value=!1,o.value.username.buttonDisabled=!0,o.value.username.checkingValidity=!1;else if(d){const[p,E]=await g.checkUsernameAvailability(n.value.username);!p&&E?(l.value=!0,o.value.username.buttonDisabled=!0,o.value.username.checkingValidity=!1):(l.value=!1,o.value.username.buttonDisabled=!1,o.value.username.checkingValidity=!1)}},700)()):l.value=!1},k="change-username-form",M=async()=>{if(ee().validate(k,A),!l.value){o.value.username.loading=!0;const[d,i]=await g.changeUsername(n.value.username);!d&&i?o.value.username.loading=!1:(o.value.username.success=!0,G().openModal("update-username-success-modal")),o.value.username.loading=!1}};return(d,i)=>(h(),P("div",nt,[y(Qe),rt,y(lt),it,s("section",ut,[s("form",{id:e(t),class:"mb-4",onSubmit:i[6]||(i[6]=V(p=>a(e(t)),["prevent"]))},[s("n-validate",{for:"name",name:d.$t("profile.forms.update.name")},[s("label",null,u(d.$t("profile.forms.update.name")),1),N(s("input",{"onUpdate:modelValue":i[0]||(i[0]=p=>e(n).name=p),type:"text",rules:"required|min:2",class:$(["form-input input",{"pointer-events-none cursor-not-allowed":e(o).basic.loading}])},null,2),[[F,e(n).name]])],8,ct),s("n-validate",null,[s("label",null,u(d.$t("profile.forms.update.penName")),1),N(s("input",{"onUpdate:modelValue":i[1]||(i[1]=p=>e(n).penName=p),type:"text",maxlength:"12",class:$(["form-input input",{"pointer-events-none cursor-not-allowed":e(o).username.loading}]),onInput:i[2]||(i[2]=p=>r()),onKeydown:i[3]||(i[3]=j(V(()=>{},["prevent"]),["space"]))},null,34),[[F,e(n).penName]]),e(x)?(h(),P("div",pt,u(d.$t("profile.forms.update.penNameTaken")),1)):S("",!0)]),s("n-validate",null,[s("label",null,u(d.$t("profile.forms.update.bio")),1),y(e(Ee.VueEditor),{modelValue:e(n).bio,"onUpdate:modelValue":i[4]||(i[4]=p=>e(n).bio=p),"editor-toolbar":e(Ve)},null,8,["modelValue","editor-toolbar"])]),s("n-validate",null,[s("label",null,u(d.$t("profile.forms.update.location")),1),N(s("input",{"onUpdate:modelValue":i[5]||(i[5]=p=>e(n).location=p),type:"text",class:$(["form-input input",{"pointer-events-none cursor-not-allowed":e(o).basic.loading}])},null,2),[[F,e(n).location]])]),s("div",ft,[s("button",{type:"submit",class:$(["submit",{"!disabled-button":e(o).basic.buttonDisabled}])},[e(o).basic.loading||e(o).basic.checkingValidity?(h(),O(ae,{key:0})):S("",!0),e(o).basic.checkingValidity?S("",!0):(h(),P("span",mt,u(e(o).basic.loading?d.$t("updating"):d.$t("update")),1))],2)])],40,dt),y(Y,{id:"update-user-info-success-modal","modal-id":"update-user-info-success-modal",class:"modal",message:d.$t("profile.forms.update.profileUpdated")},null,8,["message"])]),vt,s("section",gt,[s("form",{id:k,onSubmit:i[10]||(i[10]=V(p=>M(),["prevent"]))},[s("n-validate",{for:"=username",name:d.$t("profile.forms.update.username")},[s("label",null,u(d.$t("profile.forms.update.username")),1),N(s("input",{"onUpdate:modelValue":i[7]||(i[7]=p=>e(n).username=p),type:"text",maxlength:"12",class:$([{"!pointer-events-none !cursor-not-allowed":e(o).username.loading}]),rules:"required|min:3|max:12",placeholder:d.$t("profile.forms.update.username"),onInput:i[8]||(i[8]=p=>v()),onKeydown:i[9]||(i[9]=j(V(()=>{},["prevent"]),["space"]))},null,42,ht),[[F,e(n).username]]),e(l)?(h(),P("div",wt,u(d.$t("profile.forms.update.usernameTaken")),1)):S("",!0)],8,bt),s("div",{class:$(["buttons",{"cursor-not-allowed":e(l)}])},[s("button",{type:"submit",class:$(["submit",{"!disabled-button":e(o).username.buttonDisabled}])},[e(o).username.loading||e(o).username.checkingValidity?(h(),O(ae,{key:0})):S("",!0),e(o).username.checkingValidity?S("",!0):(h(),P("span",yt,u(e(o).username.loading?d.$t("profile.forms.update.changingYourUsername"):d.$t("profile.forms.update.changeUsername")),1))],2)],2)],32),y(Y,{id:"update-username-success-modal","modal-id":"update-username-success-modal",class:"modal",message:d.$t("profile.forms.update.usernameChanged")},null,8,["message"])])]))}},_t=oe($t,[["__scopeId","data-v-755d7749"]]);const kt={class:"social-input"},xt=["placeholder"],St={class:"social-input"},Ct=["placeholder"],At={class:"social-input"},It=["placeholder"],Pt={class:"social-input"},Ut=["placeholder"],Nt={class:"social-input"},Vt=["placeholder"],Et={class:"social-input"},Dt=["placeholder"],Ft={class:"social-input"},Mt=["placeholder"],jt={class:"social-input"},Tt=["placeholder"],Lt={class:"social-input"},Ot=["placeholder"],Kt={class:"social-input"},Bt=["placeholder"],Rt={class:"buttons"},Gt={__name:"ProfileSocialSetting",setup(U){const f=H(),{oApiConfiguration:C,fetchOptions:m}=le(),g=re(C,m()),{t:b}=se(),{$router:A}=ge();ne(()=>{f.loggedIn||A.push("/")}),fe(()=>{n()});const n=async()=>{if(f.loggedIn){const[r,t]=await g.getInfo(f.user.id);t||(o.value={facebook:r.user_socials.facebook,twitter:r.user_socials.twitter,instagram:r.user_socials.instagram,patreon:r.user_socials.patreon,youtube:r.user_socials.youtube,twitch:r.user_socials.twitch,discord:r.user_socials.discord,picarto:r.user_socials.picarto,gumroad:r.user_socials.gumroad,site:r.user_socials.personal_website})}},c=w({socials:{loading:!1,success:!1,buttonDisabled:!1}}),_="update-social-form",o=w({facebook:"",twitter:"",instagram:"",patreon:"",youtube:"",twitch:"",discrod:"",picarto:"",gumroad:"",site:""}),x=async()=>{ee().validate(_,b),c.value.socials.loading=!0;const[r,t]=await g.updateSocials({userId:f.user.id,facebook:o.value.facebook,twitter:o.value.twitter,instagram:o.value.instagram,patreon:o.value.patreon,youtube:o.value.youtube,twitch:o.value.twitch,discord:o.value.discord,picarto:o.value.picarto,gumroad:o.value.gumroad,site:o.value.site});!r&&t?c.value.socials.success=!1:(c.value.socials.success=!0,G().openModal("update-user-socials-success-modal")),c.value.socials.loading=!1};return(r,t)=>(h(),P(Se,null,[s("form",{id:_,onSubmit:t[20]||(t[20]=V(a=>x(),["prevent"]))},[s("n-validate",null,[s("label",null,u(r.$t("profile.forms.update.socials.facebook")),1),s("div",kt,[y(D,{name:"i-logos-facebook"}),N(s("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e(o).facebook=a),type:"text",class:$([{"pointer-events-none cursor-not-allowed":e(c).socials.loading}]),placeholder:r.$t("profile.forms.update.socials.facebookPlaceholder"),onKeydown:t[1]||(t[1]=j(V(()=>{},["prevent"]),["space"]))},null,42,xt),[[F,e(o).facebook]])])]),s("n-validate",null,[s("label",null,u(r.$t("profile.forms.update.socials.twitter")),1),s("div",St,[y(D,{name:"i-logos-twitter"}),N(s("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>e(o).twitter=a),type:"text",class:$([{"pointer-events-none cursor-not-allowed":e(c).socials.loading}]),placeholder:r.$t("profile.forms.update.socials.twitterPlaceholder"),onKeydown:t[3]||(t[3]=j(V(()=>{},["prevent"]),["space"]))},null,42,Ct),[[F,e(o).twitter]])])]),s("n-validate",null,[s("label",null,u(r.$t("profile.forms.update.socials.instagram")),1),s("div",At,[y(D,{name:"i-ion-logo-instagram"}),N(s("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>e(o).instagram=a),type:"text",class:$([{"pointer-events-none cursor-not-allowed":e(c).socials.loading}]),placeholder:r.$t("profile.forms.update.socials.instagramPlaceholder"),onKeydown:t[5]||(t[5]=j(V(()=>{},["prevent"]),["space"]))},null,42,It),[[F,e(o).instagram]])])]),s("n-validate",null,[s("label",null,u(r.$t("profile.forms.update.socials.patreon")),1),s("div",Pt,[y(D,{name:"i-logos-patreon"}),N(s("input",{"onUpdate:modelValue":t[6]||(t[6]=a=>e(o).patreon=a),type:"text",class:$([{"pointer-events-none cursor-not-allowed":e(c).socials.loading}]),placeholder:r.$t("profile.forms.update.socials.patreonPlaceholder"),onKeydown:t[7]||(t[7]=j(V(()=>{},["prevent"]),["space"]))},null,42,Ut),[[F,e(o).patreon]])])]),s("n-validate",null,[s("label",null,u(r.$t("profile.forms.update.socials.youtube")),1),s("div",Nt,[y(D,{name:"i-logos-youtube-icon"}),N(s("input",{"onUpdate:modelValue":t[8]||(t[8]=a=>e(o).youtube=a),type:"text",class:$([{"pointer-events-none cursor-not-allowed":e(c).socials.loading}]),placeholder:r.$t("profile.forms.update.socials.youtubePlaceholder"),onKeydown:t[9]||(t[9]=j(V(()=>{},["prevent"]),["space"]))},null,42,Vt),[[F,e(o).youtube]])])]),s("n-validate",null,[s("label",null,u(r.$t("profile.forms.update.socials.twitch")),1),s("div",Et,[y(D,{name:"i-logos-twitch"}),N(s("input",{"onUpdate:modelValue":t[10]||(t[10]=a=>e(o).twitch=a),type:"text",class:$([{"pointer-events-none cursor-not-allowed":e(c).socials.loading}]),placeholder:r.$t("profile.forms.update.socials.twitchPlaceholder"),onKeydown:t[11]||(t[11]=j(V(()=>{},["prevent"]),["space"]))},null,42,Dt),[[F,e(o).twitch]])])]),s("n-validate",null,[s("label",null,u(r.$t("profile.forms.update.socials.discord")),1),s("div",Ft,[y(D,{name:"i-logos-discord-icon"}),N(s("input",{"onUpdate:modelValue":t[12]||(t[12]=a=>e(o).discord=a),type:"text",class:$([{"pointer-events-none cursor-not-allowed":e(c).socials.loading}]),placeholder:r.$t("profile.forms.update.socials.discordPlaceholder"),onKeydown:t[13]||(t[13]=j(V(()=>{},["prevent"]),["space"]))},null,42,Mt),[[F,e(o).discord]])])]),s("n-validate",null,[s("label",null,u(r.$t("profile.forms.update.socials.picarto")),1),s("div",jt,[y(D,{name:"i-cib-picarto-tv","icon-color":"bg-green-600"}),N(s("input",{"onUpdate:modelValue":t[14]||(t[14]=a=>e(o).picarto=a),type:"text",class:$([{"pointer-events-none cursor-not-allowed":e(c).socials.loading}]),placeholder:r.$t("profile.forms.update.socials.picartoPlaceholder"),onKeydown:t[15]||(t[15]=j(V(()=>{},["prevent"]),["space"]))},null,42,Tt),[[F,e(o).picarto]])])]),s("n-validate",null,[s("label",null,u(r.$t("profile.forms.update.socials.gumroad")),1),s("div",Lt,[y(D,{name:"i-cib-gumroad"}),N(s("input",{"onUpdate:modelValue":t[16]||(t[16]=a=>e(o).gumroad=a),type:"text",class:$([{"pointer-events-none cursor-not-allowed":e(c).socials.loading}]),placeholder:r.$t("profile.forms.update.socials.gumroadPlaceholder"),onKeydown:t[17]||(t[17]=j(V(()=>{},["prevent"]),["space"]))},null,42,Ot),[[F,e(o).gumroad]])])]),s("n-validate",null,[s("label",null,u(r.$t("profile.forms.update.socials.personalWebsite")),1),s("div",Kt,[y(D,{name:"i-ph-link-simple-break-bold"}),N(s("input",{"onUpdate:modelValue":t[18]||(t[18]=a=>e(o).site=a),type:"text",class:$([{"pointer-events-none cursor-not-allowed":e(c).socials.loading}]),placeholder:r.$t("profile.forms.update.socials.personalWebsitePlaceholder"),onKeydown:t[19]||(t[19]=j(V(()=>{},["prevent"]),["space"]))},null,42,Bt),[[F,e(o).site]])])]),s("div",Rt,[s("button",{type:"submit",class:$(["submit",{"!secondary-button !pointer-events-none !cursor-not-allowed":e(c).socials.buttonDisabled}])},u(e(c).socials.loading?r.$t("updating"):r.$t("update")),3)])],32),y(Y,{id:"update-user-socials-success-modal","modal-id":"update-user-socials-success-modal",class:"modal",message:r.$t("profile.forms.update.profileUpdated")},null,8,["message"])],64))}},qt=oe(Gt,[["__scopeId","data-v-b2bf1e39"]]);const _e=U=>(me("data-v-8c7885a5"),U=U(),ve(),U),zt={class:"opt"},Wt={class:"title-tiny"},Yt={for:"explicit-toggle",class:"inline-flex relative items-center mb-5 cursor-pointer"},Ht=["checked"],Qt=_e(()=>s("div",{class:"w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1)),Jt={class:"ml-2"},Xt={key:0,class:"opt"},Zt={class:"title-tiny"},es={for:"gore-toggle",class:"inline-flex relative items-center mb-5 cursor-pointer"},ts=["checked"],ss=_e(()=>s("div",{class:"w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1)),os={class:"ml-2"},as={class:"buttons"},ls={__name:"ProfileSettings",setup(U){const f=H(),{oApiConfiguration:C,fetchOptions:m}=le(),g=re(C,m()),{t:b}=se(),{$router:A}=ge();ne(()=>{f.loggedIn||A.push("/")}),fe(()=>{n()});const n=async()=>{if(f.loggedIn){const[r,t]=await g.getInfo(f.user.id);t||(o.value.showExplicit=!!r.user_settings.show_explicit,o.value.showGore=!!r.user_settings.show_gore)}},c=w({settings:{loading:!1,success:!1,buttonDisabled:!1}}),_="update-setting-form",o=w({showExplicit:!1,showGore:!1}),x=async()=>{ee().validate(_,b),c.value.settings.loading=!0;const[r,t]=await g.updateSettings({userId:f.user.id,showExplicit:o.value.showExplicit,showGore:o.value.showGore});!r&&t?c.value.settings.success=!1:(c.value.settings.success=!0,G().openModal("update-profile-settings-success-modal"),f.user.user_settings.show_explicit=o.value.showExplicit?1:0,f.user.user_settings.show_gore=o.value.showGore?1:0),c.value.settings.loading=!1};return(r,t)=>(h(),P("div",null,[s("form",{id:_,onSubmit:t[2]||(t[2]=V(a=>x(),["prevent"]))},[s("div",zt,[s("label",Wt,u(r.$t("explicitContent")),1),s("label",Yt,[s("input",{id:"explicit-toggle",type:"checkbox",class:"sr-only peer",checked:e(o).showExplicit,onClick:t[0]||(t[0]=a=>e(o).showExplicit=!e(o).showExplicit)},null,8,Ht),Qt,s("span",Jt,u(r.$t("profile.forms.update.showExplicitContent")),1)])]),e(o).showExplicit?(h(),P("div",Xt,[s("label",Zt,u(r.$t("goreContent")),1),s("label",es,[s("input",{id:"gore-toggle",type:"checkbox",class:"sr-only peer",checked:e(o).showGore,onClick:t[1]||(t[1]=a=>e(o).showGore=!e(o).showGore)},null,8,ts),ss,s("span",os,u(r.$t("profile.forms.update.showGoreContent")),1)])])):S("",!0),s("div",as,[s("button",{type:"submit",class:$(["submit",{"!secondary-button pointer-events-none cursor-not-allowed":e(c).settings.buttonDisabled}])},u(e(c).settings.loading?r.$t("updating"):r.$t("update")),3)])],32),y(Y,{id:"update-profile-settings-success-modal","modal-id":"update-profile-settings-success-modal",class:"modal",message:r.$t("profile.forms.update.profileUpdated")},null,8,["message"])]))}},ns=oe(ls,[["__scopeId","data-v-8c7885a5"]]);const rs=U=>(me("data-v-1bf18a19"),U=U(),ve(),U),is=["readonly","placeholder"],us={key:0,class:"input-error"},ds={key:0,class:"buttons"},cs=["readonly","placeholder"],ps={class:"buttons"},fs={key:1,class:"custom-divider"},ms={key:2,id:"passphrase",class:"mt-4"},vs=rs(()=>s("label",{class:"title-tiny"},"Your Passphrase",-1)),gs={class:"p-4 text-base tracking-widest rounded-md theme-color w-fit"},bs={__name:"ProfileSecuritySetting",setup(U){const f=H(),{oApiConfiguration:C,fetchOptions:m}=le(),g=re(C,m()),{t:b}=se(),{$router:A}=ge();ne(()=>{f.loggedIn||A.push("/")});const n=w(""),c=w(""),_=w(!1),o=()=>{n.value="",c.value="",_.value=!1},x=async()=>{_.value=!1,c.value="",v.value="";const[i,p]=await g.checkCurrentPassword({userId:f.user.id,currentPassword:n.value});p?c.value=p:(_.value=!0,await t())},r=w(""),t=async()=>{const[i,p]=await g.getUserPassphrase();p||(r.value=i)},a=w({settings:{loading:!1,success:!1,buttonDisabled:!1}}),l="update-setting-form",v=w(""),k=w(""),M=()=>{v.value="",k.value=""},d=async()=>{a.value.settings.loading=!0,ee().validate(l,b);const[i,p]=await g.updateCurrentPassword({userId:f.user.id,currentPassword:n.value,newPassword:v.value});p?(a.value.settings.success=!1,k.value=p):(a.value.settings.success=!0,M(),o(),G().openModal("password-change-success-modal")),a.value.settings.loading=!1};return(i,p)=>(h(),P("div",null,[s("form",{onSubmit:p[1]||(p[1]=V(E=>x(),["prevent"]))},[s("n-validate",null,[s("label",null,u(i.$t("profile.forms.update.password.currentPasswordLabel")),1),N(s("input",{"onUpdate:modelValue":p[0]||(p[0]=E=>he(n)?n.value=E:null),type:"password",rules:"required|min:6|containNumber|containSymbol",class:$([{"cursor-not-allowed pointer-events-none":e(_)}]),readonly:e(_),placeholder:i.$t("profile.forms.update.password.currentPassword")},null,10,is),[[F,e(n)]]),e(c)?(h(),P("div",us,u(e(c)),1)):S("",!0)]),e(_)?S("",!0):(h(),P("div",ds,[s("button",{type:"submit",class:$(["submit",{"!disabled-button pointer-events-none cursor-not-allowed":e(n)===""}])},u(i.$t("next")),3)]))],32),e(_)?(h(),P("form",{key:0,id:l,class:"mt-2",onSubmit:p[3]||(p[3]=V(E=>d(),["prevent"]))},[y(Ue,{"is-error":e(k)!=="","error-message":e(k)},null,8,["is-error","error-message"]),s("n-validate",null,[s("label",null,u(i.$t("profile.forms.update.password.newPassword")),1),N(s("input",{"onUpdate:modelValue":p[2]||(p[2]=E=>he(v)?v.value=E:null),type:"password",rules:"required|min:6|containNumber|containSymbol",class:$([{"cursor-not-allowed pointer-events-none":e(a).settings.loading}]),readonly:e(a).settings.loading,placeholder:i.$t("profile.forms.update.password.newPassword")},null,10,cs),[[F,e(v)]])]),s("div",ps,[s("button",{type:"submit",class:$(["submit",{"!secondary-button !pointer-events-none !cursor-not-allowed":e(a).settings.buttonDisabled}])},u(e(a).settings.loading?i.$t("updating"):i.$t("update")),3)])],32)):S("",!0),e(_)?(h(),P("div",fs)):S("",!0),e(_)?(h(),P("section",ms,[vs,s("div",gs,u(e(r)),1)])):S("",!0),y(Y,{id:"password-change-success-modal","modal-id":"password-change-success-modal",class:"modal",message:i.$t("profile.forms.update.password.success")},null,8,["message"])]))}},hs=oe(bs,[["__scopeId","data-v-1bf18a19"]]),ws={class:"flex flex-row gap-2 w-full md:gap-6"},ys={class:"lg:w-1/5"},$s={class:"hidden-lg-flex"},_s={class:"hidden-lg-flex"},ks={class:"hidden-lg-flex"},xs={class:"hidden-lg-flex"},Ss={class:"hidden-lg-flex"},Cs={id:"setting-content",class:"w-full"},Ds={__name:"setting",setup(U){const{t:f}=se(),C=w(f("meta.title.profile.profile"));Ce({title:Ae(()=>C.value)});const m=w({currentState:"profile"});Ie(()=>m.value.currentState,b=>{b==="profile"?C.value=f("meta.title.profile.profile"):b==="social"?C.value=f("meta.title.profile.social"):b==="password"?C.value=f("meta.title.profile.password"):C.value=f("meta.title.profile.settings")});const g=b=>{m.value.currentState=b};return(b,A)=>{const n=Pe;return h(),O(Ne,{"hide-side":!0,"with-footer":!0,"no-right-side":!0},{default:we(()=>[s("div",ws,[s("div",ys,[y(n,{to:"/profile",class:"mb-6 w-full light-bordered-button"},{default:we(()=>[y(D,{name:"i-typcn-arrow-back",class:"text-lg text-white lg:mr-2 hover:text-white"}),s("span",$s,u(b.$t("settings.backToProfile")),1)]),_:1}),s("div",{class:$(["flex flex-row py-3 px-4 mb-2 font-medium leading-5 rounded ring-offset-2 transition-all duration-200 cursor-pointer left-menu-link parent-icon theme-color hover:button hover:text-white",{"button-color text-white":e(m).currentState==="profile"}]),onClick:A[0]||(A[0]=c=>g("profile"))},[N(y(D,{name:"i-fluent-person-32-regular",class:"text-lg text-white lg:mr-2 hover:text-white"},null,512),[[R,e(m).currentState==="profile"]]),N(y(D,{name:"i-fluent-person-32-regular",class:"text-lg lg:mr-2 hover:text-white"},null,512),[[R,e(m).currentState!=="profile"]]),s("span",_s,u(b.$t("settings.profile")),1)],2),s("div",{class:$(["flex flex-row py-3 px-4 mb-2 font-medium leading-5 rounded ring-offset-2 transition-all duration-200 cursor-pointer left-menu-link parent-icon theme-color hover:button hover:text-white",{"button-color text-white":e(m).currentState==="social"}]),onClick:A[1]||(A[1]=c=>g("social"))},[N(y(D,{name:"i-ion-share-social-outline",class:"text-lg text-white lg:mr-2 hover:text-white"},null,512),[[R,e(m).currentState==="social"]]),N(y(D,{name:"i-ion-share-social-outline",class:"text-lg lg:mr-2 hover:text-white"},null,512),[[R,e(m).currentState!=="social"]]),s("span",ks,u(b.$t("settings.social")),1)],2),s("div",{class:$(["flex flex-row py-3 px-4 mb-2 font-medium leading-5 rounded ring-offset-2 transition-all duration-200 cursor-pointer left-menu-link parent-icon theme-color hover:button hover:text-white",{"button-color text-white":e(m).currentState==="password"}]),onClick:A[2]||(A[2]=c=>g("password"))},[N(y(D,{name:"i-material-symbols-key-outline-rounded",class:"text-lg text-white lg:mr-2 hover:text-white"},null,512),[[R,e(m).currentState==="password"]]),N(y(D,{name:"i-material-symbols-key-outline-rounded",class:"text-lg lg:mr-2 hover:text-white"},null,512),[[R,e(m).currentState!=="password"]]),s("span",xs,u(b.$t("settings.security")),1)],2),s("div",{class:$(["flex flex-row py-3 px-4 mb-2 font-medium leading-5 rounded ring-offset-2 transition-all duration-200 cursor-pointer left-menu-link parent-icon theme-color hover:button hover:text-white",{"button-color text-white":e(m).currentState==="settings"}]),onClick:A[3]||(A[3]=c=>g("settings"))},[N(y(D,{name:"i-ph-gear-six",class:"text-lg text-white lg:mr-2 hover:text-white"},null,512),[[R,e(m).currentState==="settings"]]),N(y(D,{name:"i-ph-gear-six",class:"text-lg lg:mr-2 hover:text-white"},null,512),[[R,e(m).currentState!=="settings"]]),s("span",Ss,u(b.$t("settings.preference")),1)],2)]),s("section",Cs,[e(m).currentState==="profile"?(h(),O(_t,{key:0})):S("",!0),e(m).currentState==="social"?(h(),O(qt,{key:1})):S("",!0),e(m).currentState==="settings"?(h(),O(ns,{key:2})):S("",!0),e(m).currentState==="password"?(h(),O(hs,{key:3})):S("",!0)])])]),_:1})}}};export{Ds as default};
