import{k as m,A as p,a as h,m as g,r as v,c as _,w as A,o as y,q as o,t as a,u as k,s as w}from"./entry.e86746f3.js";import{L as V}from"./Layout.04566d95.js";import"./nuxt-img.978eb1b8.js";import"./_plugin-vue_export-helper.a1a6add7.js";const x={class:"mx-auto text-center"},$={class:"mb-4"},B={class:"font-medium cursor-pointer link-color hover:underline"},C={href:"/"},S={__name:"AccountVerification",setup(N){const{oApiConfiguration:i,fetchOptions:c}=m(),u=p(i,c()),{$router:l}=h();g(()=>{d()});const s=v(""),d=async()=>{const{iv:e,content:r}=l.currentRoute.value.params,[f,n]=await u.verifyEmailAddress({iv:e,content:r});n?n.message==="Request failed with status code 409"?s.value=t("registration.form.registered.accountAlreadyVerified"):s.value=t("errors.somethingWentWrong"):s.value=t("registration.form.registered.accountSuccessfullyVerified")};return(e,r)=>(y(),_(V,{"with-footer":!1},{default:A(()=>[o("div",x,[o("div",$,a(k(s)),1),o("span",B,[o("a",C,a(e.$t("goToHome")),1)]),w(" or "),o("span",{class:"font-medium cursor-pointer link-color hover:underline",onClick:r[0]||(r[0]=f=>e.openModal("auth-modal"))},a(e.$t("logins.login")),1)])]),_:1}))}};export{S as default};
