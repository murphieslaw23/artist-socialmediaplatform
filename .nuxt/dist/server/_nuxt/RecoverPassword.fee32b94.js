import{u as _,d as p,S as u}from"../server.mjs";import{onMounted as l,ref as e,openBlock as s,createBlock as m,withCtx as f,createElementVNode as a,createElementBlock as h,toDisplayString as v,createCommentVNode as w}from"vue";import"vue-router";import{L as y}from"./Layout.46c0288b.js";import{_ as k}from"./Icon.0b4f7d9a.js";import"#internal/nitro";const x={class:"w-1/3 mx-auto rounded p-2 pt-4"},P={class:""},R={key:0,class:"text-base mb-2"},g={__name:"RecoverPassword",setup(A){const{$router:o}=_(),{iv:r,content:c}=o.currentRoute.value.params.path,{oApiConfiguration:n}=p();l(()=>{i()});const i=async()=>{try{const{data:t}=await new u(n).checkResetPasswordTokenValidity(r,c);t.valid||o.push("/")}catch{o.push("/")}};e(""),e(""),e(!1),e("");const d=e(!1);return(t,V)=>(s(),m(y,{"with-footer":!1,"hide-side":!0},{default:f(()=>[a("div",x,[a("div",P,[d.value?w("",!0):(s(),h("div",R,v(t.$t("accountRecovery.resetPassword")),1))])])]),_:1}))}},F=k(g,[["__scopeId","data-v-f7a80008"]]);export{F as default};
//# sourceMappingURL=RecoverPassword.fee32b94.js.map
