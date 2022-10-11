import{i as U,j as X,a8 as Y,r as s,D as Z,I as J,o as M,c as ee,w as te,p as o,t as a,J as l,u as N,m as I,s as R,e as c,b as k,v as h,K as E,q as F,aI as oe,G as x,L as ae,M as ne}from"./entry.28b22d70.js";import{u as se}from"./useArtwork.3bbd7f94.js";import{L as le}from"./Layout.1e15c5b7.js";import{W as ie,M as re}from"./ModalView.d519f654.js";import{_ as ue}from"./LoadingEmptyErrorMessage.ca2f30cc.js";import{T as de}from"./TagFilterSelection.8808f993.js";import{_ as pe}from"./_plugin-vue_export-helper.a1a6add7.js";import"./Spinner.cdc98a96.js";import"./user-counters-api.37d0a801.js";import"./useFeed.b515728f.js";const ve=g=>(ae("data-v-4119110d"),g=g(),ne(),g),ce={id:"lists"},me={class:"navigations"},fe={class:"title"},ge={class:"buttons"},we={class:"filter-buttons"},be={class:"filter-buttons"},ye={class:"filter-buttons"},ke={class:"inline-block w-full md:w-40 group"},he={class:"flex items-center py-2 px-3 w-full rounded-md outline-none md:w-40 theme-color hover:button focus:outline-none"},$e={class:"flex-1 pr-1"},_e=ve(()=>o("span",null,[o("svg",{class:"w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[o("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1)),Ce={class:"absolute z-10 mt-1 w-full text-center rounded-md transition duration-150 ease-in-out transform origin-top scale-0 md:w-40 theme-color group-hover:scale-100"},Me={key:0,class:"filter-buttons"},xe={class:"mt-4"},Se={key:0,class:"art-list-view-paging-control"},Pe={id:"popular-modal",class:"modal work-view"},Te={__name:"index",setup(g){const S=U(),{oApiConfiguration:z,fetchOptions:D}=X(),W=se(z,D());Y(()=>{i()});const m=s(void 0),$=async t=>{m.value=t,u.page=0,await i()},p=s("daily"),w=async t=>{p.value=t,u.page=0,await i()},P=s(null),j=()=>{P.value.init(oe(_.value)),x().openModal("tag-filter-selection-modal")},T=s(""),_=s(),C=s(0),q=async(t,e)=>{_.value=t,T.value=e,C.value=e!==""?e.split(",").length:0,u.page=0,x().closeModal("tag-filter-selection-modal"),await i()};Z(async()=>_.value,t=>{i()});const V=s([]),v=s({pagination:{enablePrev:!0,enableNext:!0}}),i=async()=>{const t=await G(),e=t.works,n=t.pagination;!e.length&&n.record_total===0?K():(V.value=e,n.next_previous.next_page===null?v.value.pagination.enableNext=!1:v.value.pagination.enableNext=!0,n.next_previous.prev_page===null?v.value.pagination.enablePrev=!1:v.value.pagination.enablePrev=!0)},r=s(!0),u=J({perPage:30,page:s(0)}),G=async()=>{u.page===0&&(r.value=!0);const[t,e]=await W.getMostPopular({pagination:{perPage:u.perPage,page:u.page},range:p.value,rangeMode:d.value,explicitMode:m.value,tags:T.value});if(e)O();else return H(),t},A=async t=>{t==="prev"?u.page-=1:u.page+=1,await i()},f=s(!1),K=()=>{f.value=!0},b=s(!1),O=()=>{r.value=!1,b.value=!0},H=()=>{r.value=!1,f.value=!1,b.value=!1},B=s(null),Q=(t,e=!1)=>{B.value.view(t,e),x().openModal("popular-modal")},d=s("none"),L=s(""),y=async(t,e)=>{d.value=t,L.value=e,await i()};return(t,e)=>(M(),ee(le,{"with-footer":!0,"hide-side":!0,"no-right-side":!0,fullscreen:!0},{default:te(()=>[o("div",ce,[o("div",me,[o("div",fe,a(t.$t("artworks.popularArtworks")),1),o("div",ge,[o("div",we,[o("button",{class:l(["px-3 rounded-md button-item",C.value?"button":"theme-color"]),onClick:j},a(C.value)+" "+a(t.$t("tagsApplied")),3)]),o("div",be,[o("p",{class:l(["rounded-l-md button-item",[p.value==="daily"?"button":"theme-color"]]),onClick:e[0]||(e[0]=n=>w("daily"))},a(t.$t("daily")),3),o("p",{class:l(["button-item",[p.value==="weekly"?"button":"theme-color"]]),onClick:e[1]||(e[1]=n=>w("weekly"))},a(t.$t("weekly")),3),o("p",{class:l(["button-item",[p.value==="monthly"?"button":"theme-color"]]),onClick:e[2]||(e[2]=n=>w("monthly"))},a(t.$t("monthly")),3),o("p",{class:l(["rounded-r-md button-item",[p.value==="all"?"button":"theme-color"]]),onClick:e[3]||(e[3]=n=>w("all"))},a(t.$t("allTime")),3)]),o("div",ye,[o("div",ke,[o("button",he,[o("span",$e,a(d.value==="none"?t.$t("default"):L.value),1),_e]),o("ul",Ce,[o("li",{class:l(["py-2 px-3 rounded-t-md cursor-pointer hover:button",{button:d.value==="none"}]),onClick:e[4]||(e[4]=n=>y("none",t.$t("default")))},a(t.$t("default")),3),o("li",{class:l(["py-2 px-3 cursor-pointer hover:button",{button:d.value==="views"}]),onClick:e[5]||(e[5]=n=>y("views",t.$t("mostViewed")))},a(t.$t("mostViewed")),3),o("li",{class:l(["py-2 px-3 cursor-pointer hover:button",{button:d.value==="likes"}]),onClick:e[6]||(e[6]=n=>y("likes",t.$t("mostLiked")))},a(t.$t("mostLiked")),3),o("li",{class:l(["py-2 px-3 rounded-b-md cursor-pointer hover:button",{button:d.value==="comments"}]),onClick:e[7]||(e[7]=n=>y("comments",t.$t("mostCommented")))},a(t.$t("mostCommented")),3)])])]),N(S).loggedIn&&N(S).user.user_settings.show_explicit?(M(),I("div",Me,[o("p",{class:l(["rounded-l-md button-item",[m.value===void 0?"button":"theme-color"]]),onClick:e[8]||(e[8]=n=>$(void 0))},a(t.$t("default")),3),o("p",{class:l(["button-item",[m.value==="safe"?"button":"theme-color"]]),onClick:e[9]||(e[9]=n=>$("safe"))},a(t.$t("safe")),3),o("p",{class:l(["rounded-r-md button-item",[m.value==="explicit"?"button":"theme-color"]]),onClick:e[10]||(e[10]=n=>$("explicit"))},a(t.$t("explicit")),3)])):R("",!0)])]),c(ue,{loading:r.value,empty:f.value,error:b.value,fetch:i},null,8,["loading","empty","error"]),k(o("div",xe,[k(c(ie,{"section-class":"work-grid",works:V.value,view:Q},null,8,["works"]),[[h,!f.value]])],512),[[h,!r.value]]),!r.value&&!f.value&&!b.value?(M(),I("div",Se,[o("button",{class:l([v.value.pagination.enablePrev?"primary-button":"disabled-button"]),onClick:e[11]||(e[11]=n=>A("prev"))},[c(E,{name:"i-ion-chevron-back-outline"}),F(" "+a(t.$t("pagination.previous")),1)],2),o("button",{class:l([v.value.pagination.enableNext?"primary-button":"disabled-button"]),onClick:e[12]||(e[12]=n=>A("next"))},[F(a(t.$t("pagination.next"))+" ",1),c(E,{name:"i-ion-chevron-forward-outline",class:"md:ml-2",style:{"margin-right":"0 !important"}})],2)])):R("",!0),o("div",Pe,[k(c(re,{ref_key:"popularModalViewRef",ref:B,section:"popular"},null,512),[[h,!r.value]])]),k(c(de,{id:"tag-filter-selection-modal",ref_key:"tagFilterSelectionModalRef",ref:P,class:"modal",onApply:q},null,512),[[h,!r.value]])])]),_:1}))}},De=pe(Te,[["__scopeId","data-v-4119110d"]]);export{De as default};
