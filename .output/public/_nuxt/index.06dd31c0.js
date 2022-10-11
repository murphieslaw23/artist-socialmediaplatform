import{i as D,j as F,a as R,a8 as T,r as n,I as j,o as _,c as q,w as z,p as a,t as r,u as y,m as $,J as d,s as M,e as p,b as w,v as b,K as C,q as N,G}from"./entry.28b22d70.js";import{u as J}from"./useArtwork.3bbd7f94.js";import{L as K}from"./Layout.1e15c5b7.js";import{W as O,M as H}from"./ModalView.d519f654.js";import{_ as Q}from"./LoadingEmptyErrorMessage.ca2f30cc.js";import{_ as U}from"./_plugin-vue_export-helper.a1a6add7.js";import"./Spinner.cdc98a96.js";import"./user-counters-api.37d0a801.js";import"./useFeed.b515728f.js";const X={id:"lists"},Y={class:"navigations"},Z={class:"title"},ee={class:"buttons"},te={key:0,class:"filter-buttons"},ae={class:"mt-4"},oe={key:0,class:"art-list-view-paging-control"},ne={id:"recent-modal",class:"modal work-view"},se={__name:"index",setup(ie){const g=D(),{oApiConfiguration:P,fetchOptions:V}=F(),A=J(P,V()),{$router:B}=R();T(()=>{g.loggedIn||B.push("/"),v()});const u=n(void 0),m=async e=>{u.value=e,l.page=0,await v()},h=n([]),i=n({pagination:{enablePrev:!0,enableNext:!0}}),v=async()=>{const e=await E(),t=e.works,o=e.pagination;!t.length&&o.record_total===0?I():(h.value=t,o.next_previous.next_page===null?i.value.pagination.enableNext=!1:i.value.pagination.enableNext=!0,o.next_previous.prev_page===null?i.value.pagination.enablePrev=!1:i.value.pagination.enablePrev=!0)},s=n(!0),l=j({perPage:30,page:n(0)}),E=async()=>{l.page===0&&(s.value=!0);const[e,t]=await A.getFollowing({pagination:{perPage:l.perPage,page:l.page},explicitMode:u.value});if(t)L();else return S(),e},k=async e=>{e==="prev"?l.page-=1:l.page+=1,await v()},c=n(!1),I=()=>{c.value=!0},f=n(!1),L=()=>{s.value=!1,f.value=!0,hideButton()},S=()=>{s.value=!1,c.value=!1,f.value=!1},x=n(null),W=(e,t=!1)=>{x.value.view(e,t),G().openModal("recent-modal")};return(e,t)=>(_(),q(K,{"with-footer":!0,"hide-side":!0,"no-right-side":!0,fullscreen:!0},{default:z(()=>[a("div",X,[a("div",Y,[a("div",Z,r(e.$t("following")),1),a("div",ee,[y(g).loggedIn&&y(g).user.user_settings.show_explicit?(_(),$("div",te,[a("p",{class:d(["rounded-l-md button-item",[u.value===void 0?"button":"theme-color"]]),onClick:t[0]||(t[0]=o=>m(void 0))},r(e.$t("default")),3),a("p",{class:d(["button-item",[u.value==="safe"?"button":"theme-color"]]),onClick:t[1]||(t[1]=o=>m("safe"))},r(e.$t("safe")),3),a("p",{class:d(["rounded-r-md button-item",[u.value==="explicit"?"button":"theme-color"]]),onClick:t[2]||(t[2]=o=>m("explicit"))},r(e.$t("explicit")),3)])):M("",!0)])]),p(Q,{loading:s.value,empty:c.value,error:f.value,fetch:v},null,8,["loading","empty","error"]),w(a("div",ae,[w(p(O,{"section-class":"work-grid",works:h.value,view:W},null,8,["works"]),[[b,!c.value]])],512),[[b,!s.value]]),!s.value&&!c.value&&!f.value?(_(),$("div",oe,[a("button",{class:d([i.value.pagination.enablePrev?"primary-button":"disabled-button"]),onClick:t[3]||(t[3]=o=>k("prev"))},[p(C,{name:"i-ion-chevron-back-outline"}),N(" "+r(e.$t("pagination.previous")),1)],2),a("button",{class:d([i.value.pagination.enableNext?"primary-button":"disabled-button"]),onClick:t[4]||(t[4]=o=>k("next"))},[N(r(e.$t("pagination.next"))+" ",1),p(C,{name:"i-ion-chevron-forward-outline",class:"md:ml-2",style:{"margin-right":"0 !important"}})],2)])):M("",!0),a("div",ne,[w(p(H,{ref_key:"recentModalViewRef",ref:x,section:"recent"},null,512),[[b,!s.value]])])])]),_:1}))}},me=U(se,[["__scopeId","data-v-46c6078d"]]);export{me as default};
