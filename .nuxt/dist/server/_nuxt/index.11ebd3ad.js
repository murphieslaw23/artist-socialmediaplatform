import{d as j,c as q,i as h}from"../server.mjs";import{_ as G,u as H,a as A}from"./Icon.0c5cbad6.js";import{onBeforeMount as K,ref as o,watch as Q,reactive as U,openBlock as k,createBlock as X,withCtx as Y,createElementVNode as a,toDisplayString as i,normalizeClass as d,unref as N,createElementBlock as S,createCommentVNode as E,createVNode as p,withDirectives as m,vShow as g,createTextVNode as T,toRaw as Z}from"vue";import{L as J}from"./Layout.ebf172ee.js";import{W as ee,M as te}from"./ModalView.fcf62ecd.js";import{_ as ae}from"./LoadingEmptyErrorMessage.3cde1887.js";import{T as oe}from"./TagFilterSelection.eec86a4e.js";import"#internal/nitro";import"vue-router";import"./Spinner.8a696002.js";import"./user-counters-api.6cf9eaa2.js";import"./useFeed.c700948e.js";const ne={id:"lists"},le={class:"navigations"},ie={class:"title"},se={class:"buttons"},re={class:"filter-buttons"},ue={key:0,class:"filter-buttons"},ce={class:"mt-4"},de={key:0,class:"art-list-view-paging-control"},pe={id:"recent-modal",class:"modal work-view"},ve={__name:"index",props:{browseMode:{type:Boolean,default:!1}},setup(fe){const{oApiConfiguration:V,fetchOptions:B}=j(),F=H(V,B()),y=q();K(()=>{r()});const v=o(void 0),_=async e=>{v.value=e,u.page=0,await r()},x=o(null),R=()=>{x.value.init(Z(w.value)),h().openModal("tag-filter-selection-modal")},M=o(""),w=o(),b=o(0),L=async(e,t)=>{w.value=e,M.value=t,b.value=t!==""?t.split(",").length:0,u.page=0,h().closeModal("tag-filter-selection-modal"),await r()};Q(async()=>w.value,e=>{r()});const $=o([]),s=o({pagination:{enablePrev:!0,enableNext:!0}}),r=async()=>{const e=await W(),t=e.works,l=e.pagination;!t.length&&l.record_total===0?D():($.value=t,l.next_previous.next_page===null?s.value.pagination.enableNext=!1:s.value.pagination.enableNext=!0,l.next_previous.prev_page===null?s.value.pagination.enablePrev=!1:s.value.pagination.enablePrev=!0)},n=o(!0),u=U({perPage:30,page:o(0)}),W=async()=>{n.value=!0,c.value=!1;const[e,t]=await F.getLatest({pagination:{perPage:u.perPage,page:u.page},explicitMode:v.value,tags:M.value});if(t)I();else return z(),e;n.value=!1},C=async e=>{e==="prev"?u.page-=1:u.page+=1,await r()},c=o(!1),D=()=>{c.value=!0},f=o(!1),I=()=>{n.value=!1,f.value=!0,hideButton()},z=()=>{n.value=!1,c.value=!1,f.value=!1},P=o(null),O=(e,t=!1)=>{P.value.view(e,t),h().openModal("recent-modal")};return(e,t)=>(k(),X(J,{"with-footer":!0,"hide-side":!0,"no-right-side":!0,fullscreen:!0},{default:Y(()=>[a("div",ne,[a("div",le,[a("div",ie,i(e.$t("artworks.recentArtworks")),1),a("div",se,[a("div",re,[a("button",{class:d(["px-3 rounded-md button-item",b.value?"button":"theme-color"]),onClick:R},i(b.value)+" "+i(e.$t("tagsApplied")),3)]),N(y).loggedIn&&N(y).user.user_settings.show_explicit?(k(),S("div",ue,[a("p",{class:d(["rounded-l-md button-item",[v.value===void 0?"button":"theme-color"]]),onClick:t[0]||(t[0]=l=>_(void 0))},i(e.$t("default")),3),a("p",{class:d(["button-item",[v.value==="safe"?"button":"theme-color"]]),onClick:t[1]||(t[1]=l=>_("safe"))},i(e.$t("safe")),3),a("p",{class:d(["rounded-r-md button-item",[v.value==="explicit"?"button":"theme-color"]]),onClick:t[2]||(t[2]=l=>_("explicit"))},i(e.$t("explicit")),3)])):E("",!0)])]),p(ae,{loading:n.value,empty:c.value,error:f.value,fetch:r},null,8,["loading","empty","error"]),m(a("div",ce,[m(p(ee,{"section-class":"work-grid",works:$.value,view:O},null,8,["works"]),[[g,!c.value]])],512),[[g,!n.value]]),!n.value&&!c.value&&!f.value?(k(),S("div",de,[a("button",{class:d([s.value.pagination.enablePrev?"primary-button":"disabled-button"]),onClick:t[3]||(t[3]=l=>C("prev"))},[p(A,{name:"i-ion-chevron-back-outline"}),T(" "+i(e.$t("pagination.previous")),1)],2),a("button",{class:d([s.value.pagination.enableNext?"primary-button":"disabled-button"]),onClick:t[4]||(t[4]=l=>C("next"))},[T(i(e.$t("pagination.next"))+" ",1),p(A,{name:"i-ion-chevron-forward-outline",class:"md:ml-2",style:{"margin-right":"0 !important"}})],2)])):E("",!0),a("div",pe,[m(p(te,{ref_key:"recentModalViewRef",ref:P,section:"recent"},null,512),[[g,!n.value]])]),m(p(oe,{id:"tag-filter-selection-modal",ref_key:"tagFilterSelectionModalRef",ref:x,class:"modal",onApply:L},null,512),[[g,!n.value]])])]),_:1}))}},Pe=G(ve,[["__scopeId","data-v-fce753aa"]]);export{Pe as default};
//# sourceMappingURL=index.11ebd3ad.js.map
