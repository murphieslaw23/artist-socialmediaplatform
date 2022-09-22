import{d as j,c as q,i as b}from"../server.mjs";import{_ as G,u as H,a as P}from"./Icon.4480cdda.js";import{onBeforeMount as K,ref as o,watch as Q,reactive as U,openBlock as k,createBlock as X,withCtx as Y,createElementVNode as a,toDisplayString as i,normalizeClass as m,unref as A,createElementBlock as S,createCommentVNode as E,createVNode as p,withDirectives as d,vShow as v,createTextVNode as T,toRaw as Z}from"vue";import{L as J}from"./Layout.82674cce.js";import{W as ee,M as te}from"./ModalView.b218d979.js";import{_ as ae}from"./ErrorMessages.9543f57f.js";import{T as oe}from"./TagFilterSelection.7879bba0.js";import"#internal/nitro";import"vue-router";import"./Spinner.2a5d5b7b.js";import"./user-counters-api.d7c5fc90.js";import"./useFeed.1b0a564c.js";const ne={id:"lists"},le={class:"navigations"},ie={class:"title"},se={class:"buttons"},re={class:"filter-buttons"},ue={key:0,class:"filter-buttons"},ce={class:"mt-4"},pe={key:0,class:"art-list-view-paging-control"},de={id:"recent-modal",class:"modal work-view"},ve={__name:"index",props:{browseMode:{type:Boolean,default:!1}},setup(fe){const{oApiConfiguration:V,fetchOptions:B}=j(),F=H(V,B()),y=q();K(()=>{r()});const f=o(void 0),_=async e=>{f.value=e,u.page=0,await r()},x=o(null),R=()=>{x.value.init(Z(w.value)),b().openModal("tag-filter-selection-modal")},M=o(""),w=o(),h=o(0),L=async(e,t)=>{w.value=e,M.value=t,h.value=t!==""?t.split(",").length:0,u.page=0,b().closeModal("tag-filter-selection-modal"),await r()};Q(async()=>w.value,e=>{r()});const $=o([]),s=o({pagination:{enablePrev:!0,enableNext:!0}}),r=async()=>{const e=await W(),t=e.works,l=e.pagination;!t.length&&l.record_total===0?D():($.value=t,l.next_previous.next_page===null?s.value.pagination.enableNext=!1:s.value.pagination.enableNext=!0,l.next_previous.prev_page===null?s.value.pagination.enablePrev=!1:s.value.pagination.enablePrev=!0)},n=o(!0),u=U({perPage:36,page:o(0)}),W=async()=>{n.value=!0,c.value=!1;const[e,t]=await F.getLatest({pagination:{perPage:u.perPage,page:u.page},explicitMode:f.value,tags:M.value});if(t)I();else return z(),e;n.value=!1},C=async e=>{e==="prev"?u.page-=1:u.page+=1,await r()},c=o(!1),D=()=>{c.value=!0},g=o(!1),I=()=>{n.value=!1,g.value=!0,hideButton()},z=()=>{n.value=!1,c.value=!1,g.value=!1},N=o(null),O=(e,t=!1)=>{N.value.view(e,t),b().openModal("recent-modal")};return(e,t)=>(k(),X(J,{"with-footer":!0,"hide-side":!0,"no-right-side":!0},{default:Y(()=>[a("div",ne,[a("div",le,[a("div",ie,i(e.$t("artworks.recentArtworks")),1),a("div",se,[a("div",re,[a("button",{class:m(["px-3 rounded-md button-item",h.value?"button":"theme-color"]),onClick:R},i(h.value)+" "+i(e.$t("tagsApplied")),3)]),A(y).loggedIn&&A(y).user.user_settings.show_explicit?(k(),S("div",ue,[a("p",{class:m(["rounded-l-md button-item",[f.value===void 0?"button":"theme-color"]]),onClick:t[0]||(t[0]=l=>_(void 0))},i(e.$t("default")),3),a("p",{class:m(["button-item",[f.value==="safe"?"button":"theme-color"]]),onClick:t[1]||(t[1]=l=>_("safe"))},i(e.$t("safe")),3),a("p",{class:m(["rounded-r-md button-item",[f.value==="explicit"?"button":"theme-color"]]),onClick:t[2]||(t[2]=l=>_("explicit"))},i(e.$t("explicit")),3)])):E("",!0)])]),p(ae,{loading:n.value,empty:c.value,error:g.value,fetch:r},null,8,["loading","empty","error"]),d(a("div",ce,[d(p(ee,{"section-class":"work-grid",works:$.value,view:O},null,8,["works"]),[[v,!c.value]])],512),[[v,!n.value]]),!n.value&&!c.value&&!g.value?(k(),S("div",pe,[d(a("button",{class:m(["primary-button",{"mr-2":s.value.pagination.enableNext}]),onClick:t[3]||(t[3]=l=>C("prev"))},[p(P,{name:"i-ion-chevron-back-outline"}),T(" "+i(e.$t("pagination.previous")),1)],2),[[v,s.value.pagination.enablePrev]]),d(a("button",{class:"primary-button",onClick:t[4]||(t[4]=l=>C("next"))},[T(i(e.$t("pagination.next"))+" ",1),p(P,{name:"i-ion-chevron-forward-outline",class:"ml-2",style:{"margin-right":"0 !important"}})],512),[[v,s.value.pagination.enableNext]])])):E("",!0),a("div",de,[d(p(te,{ref_key:"recentModalViewRef",ref:N,section:"recent"},null,512),[[v,!n.value]])]),d(p(oe,{id:"tag-filter-selection-modal",ref_key:"tagFilterSelectionModalRef",ref:x,class:"modal",onApply:L},null,512),[[v,!n.value]])])]),_:1}))}},Ne=G(ve,[["__scopeId","data-v-cae1332e"]]);export{Ne as default};
//# sourceMappingURL=index.861e0b50.js.map
