import{i as p,P as u,X as c,r as f,o as l,c as d,q as _}from"./entry.64996531.js";import{P as B}from"./Profile.fa0cbbff.js";import{u as g}from"./useUser.422cee4f.js";import"./ModalView.4aa8a482.js";import"./Icon.1a411f0f.js";import"./ErrorMessages.9a8b0e4d.js";import"./Spinner.13f27c72.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./user-counters-api.38d2e3f3.js";import"./useFeed.be617097.js";import"./Layout.7fc1f157.js";import"./FeedModalView.8df860aa.js";const M={__name:"[username]",setup(h){const{oApiConfiguration:t,fetchOptions:s}=p(),a=g(t,s()),i=u();c(()=>{m()});const{username:n}=i.params,e=f(0),m=async()=>{const[o,r]=await a.getInfoByUsername(n);r||(e.value=o.id)};return(o,r)=>e.value?(l(),d(B,{key:0,id:e.value},null,8,["id"])):_("",!0)}};export{M as default};
