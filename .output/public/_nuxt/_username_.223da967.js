import{j as c,O as f,Y as l,r as d,f as _,p as B,u as r,c as k,x as g,o as s}from"./entry.15cb71bb.js";import{P as h}from"./Profile.5f89ba94.js";import{u as x}from"./useUser.a738e6b7.js";import"./client-only.407c3fea.js";import"./ModalView.8a38a44a.js";import"./useReport.6a600d64.js";import"./WorkList.d666493b.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./LoadingEmptyErrorMessage.31b597d2.js";import"./Spinner.cb390d69.js";import"./user-counters-api.e38b184e.js";import"./useSetting.56adc0e9.js";import"./useFeed.a800ee91.js";import"./Layout.69b2e7d1.js";import"./FeedModalView.b0e0320b.js";import"./useI18n.93778397.js";import"./UserList.ab91f14f.js";const Y={__name:"[username]",setup(y){const{oApiConfiguration:a,fetchOptions:i}=c(),m=x(a,i()),n=f();l(()=>{u()});const{username:p}=n.params,t=d(0),u=async()=>{const[e,o]=await m.getInfoByUsername(p);o||(_({title:`(${e.username}) ${e.name}`}),t.value=e.id)};return(e,o)=>(s(),B("div",null,[r(t)?(s(),k(h,{key:0,id:r(t)},null,8,["id"])):g("",!0)]))}};export{Y as default};
