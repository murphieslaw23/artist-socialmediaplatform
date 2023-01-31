import{l as ve,k as fe,h as ge,a as we,L as N,p as ye,r as n,O as P,H as be,c as te,w as he,o as $,b as s,t as a,I as l,u as o,e as p,v as m,f as d,Q as b,s as x,q,x as S,aw as ke,S as $e,T as xe}from"./entry.e59d1677.js";import{u as _e}from"./ProBadge.e613df9a.js";import{u as Me}from"./useI18n.afc07abc.js";import{L as Ce}from"./Layout.38bbd337.js";import{W as Oe}from"./WorkList.15e244e9.js";import{M as Se}from"./ModalView.7f38a5de.js";import{_ as Le}from"./LoadingEmptyErrorMessage.81ae6689.js";import{_ as Ie}from"./TagFilterSelection.821ba21f.js";import{_ as Be}from"./_plugin-vue_export-helper.a1a6add7.js";import"./useReport.1b995e30.js";import"./index.6cdba04a.js";import"./MiniArtworkPreview.23fe0d3b.js";import"./user-counters-api.efc5c534.js";import"./useSetting.3e22411d.js";import"./useFeed.6f185801.js";const oe=L=>($e("data-v-8dde9041"),L=L(),xe(),L),Ee={id:"lists",class:"px-2"},Pe={id:"options",class:"md:z-10 md:sticky md:top-0"},qe={class:"navigations"},Re={class:"title"},Ve={class:"buttons"},Fe={class:"filter-buttons"},Ae={class:"filter-buttons"},We={class:"filter-buttons"},ze={key:0,class:"filter-buttons"},Ne=oe(()=>s("div",{class:"hidden md:flex"},null,-1)),Te={class:"buttons"},je={class:"filter-buttons"},De={class:"filter-buttons"},Ke={class:"inline-block w-full group md:w-52"},He={class:"flex-1 pr-1"},Qe=oe(()=>s("span",null,[s("svg",{class:"w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[s("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1)),Ge={id:"popular-order-options",class:"absolute z-10 mt-1 w-full text-center rounded-md transition duration-150 ease-in-out transform origin-top scale-0 md:w-52 theme-color group-hover:scale-100"},Ue={id:"browse-modal",class:"modal work-view"},Xe={__name:"index",setup(L){const v=ve(),{oApiConfiguration:se,fetchOptions:le}=fe(),R=_e(se,le());ge({title:Me().tl("meta.title.browse")});const _=we(),{tags:T}=_.query;N(()=>_.query,()=>{ae()}),N(()=>_.query.tags,e=>{e&&(M.value=e,H(e)),e&&e!==""&&r()}),ye(()=>{T&&H(),r(),ne()});const ne=()=>{const e=document.createElement("div");e.classList.add("myObserver");const t=document.querySelector("#options");i(e,t);function i(g,O){O.parentNode.insertBefore(g,O)}new IntersectionObserver(function(g){g[0].intersectionRatio===0?document.querySelector("#options").classList.add("md:pt-4","md:pb-1","md:theme-color-secondary","md:rounded-b-md","md:px-6","md:mt-2","md:border-color-button-color","md:border-2","md:border-t-0"):g[0].intersectionRatio===1&&document.querySelector("#options").classList.remove("md:pt-4","md:pb-1","md:theme-color-secondary","md:rounded-b-md","md:px-6","md:mt-2","md:border-color-button-color","md:border-2","md:border-t-0")},{threshold:[0,1]}).observe(document.querySelector(".myObserver"))},ae=()=>{P().closeModal("browse-modal")},j=n(!1),ie=()=>{j.value=!j.value},re=()=>{document.getElementById("popular-order-options").classList.add("scale-0")},f=n("recent"),D=async e=>{f.value=e,await r()},w=n(void 0),V=async e=>{w.value=e,u.value.page=0,await r()},h=n("daily"),I=async e=>{h.value=e,u.value.page=0,await r()},y=n(!1),ue=async()=>{y.value=!y.value,u.value.page=0,await r()},K=n(!1),H=async e=>{K.value=!0;const t=e!=null?e:T,[i,ee]=await R.getTagKeys(t);if(!ee){const g=[];i.tags.forEach(O=>{g.push({key:O.id,value:O.tag})}),B.value=g,await U(g,t)}K.value=!1},Q=n(null),de=()=>{Q.value.init(ke(B.value)),P().openModal("tag-filter-selection-modal")},M=n(""),G=n(""),B=n(),F=n(0),U=async(e,t)=>{B.value=e,M.value=t,G.value=t,F.value=t!==""?t.split(",").length:0,u.value.page=0,P().closeModal("tag-filter-selection-modal"),await r()};N(async()=>B.value,e=>{r()});const C=n([]),r=async()=>{pe();const{works:e,pagination:t}=await Y();e.length&&t.record_total&&(C.value=e)},k=n(!0),E=n(!1),X=be(()=>!E.value&&!C.value.length),A=n(!0),u=n({perPage:40,page:0}),Y=async()=>{_.query.tags&&!G.value&&(M.value=_.query.tags);let[e,t]=[];if(f.value==="recent"?[e,t]=await R.getLatest({pagination:{perPage:u.value.perPage,page:u.value.page},explicitMode:w.value,tags:M.value,followingOnly:y.value}):[e,t]=await R.getMostPopular({pagination:{perPage:u.value.perPage,page:u.value.page},range:h.value,rangeMode:c.value,explicitMode:w.value,tags:M.value,followingOnly:y.value}),k.value=!1,e.pagination.next_previous.next_page||(A.value=!1),t)E.value=!0;else return u.value.page+=1,e},W=n({delay:!1}),ce=async()=>{W.value.delay=!0;const{works:e}=await Y();e.forEach(t=>{C.value.push(t)}),W.value.delay=!1},pe=()=>{C.value=[],A.value=!0,u.value.page=0,k.value=!0,E.value=!1},Z=n(null),me=(e,t=!1)=>{Z.value.view(e,t),P().openModal("browse-modal")},c=n("views"),J=n(""),z=async(e,t)=>{c.value=e,J.value=t,re(),await r()};return(e,t)=>($(),te(Ce,{"with-footer":!0,"hide-side":!0,"no-right-side":!0,fullscreen:!0},{default:he(()=>[s("div",Ee,[s("div",Pe,[s("div",qe,[s("div",Re,a(e.$t("browse")),1),s("div",Ve,[s("div",Fe,[s("button",{class:l(["px-3 rounded-md button-item",o(F)?"button":"theme-color"]),onClick:de},a(o(F))+" "+a(e.$t("tagsApplied")),3)]),p(s("div",Ae,[s("button",{class:l(["px-3 rounded-md button-item",o(y)?"button":"theme-color"]),onClick:t[0]||(t[0]=i=>ue())},[p(d(b,{name:"i-fluent-people-checkmark-24-regular",class:"text-white"},null,512),[[m,o(y)]]),p(d(b,{name:"i-fluent-people-checkmark-24-regular"},null,512),[[m,!o(y)]]),x(" "+a(e.$t("followingOnly")),1)],2)],512),[[m,o(v).loggedIn]]),s("div",We,[s("p",{class:l(["rounded-l-md button-item",[o(f)==="recent"?"button":"theme-color"]]),onClick:t[1]||(t[1]=i=>D("recent"))},a(e.$t("artworks.newest")),3),s("p",{class:l(["rounded-r-md button-item",[o(f)==="popularity"?"button":"theme-color"]]),onClick:t[2]||(t[2]=i=>D("popularity"))},[d(b,{name:"i-icon-park-outline-oval-love-two",class:l([{"text-white":o(f)==="popularity"}])},null,8,["class"]),x(" "+a(e.$t("artworks.mostPopular")),1)],2)]),o(v).loggedIn&&o(v).user.user_settings.show_explicit?($(),q("div",ze,[s("p",{class:l(["rounded-l-md button-item",[o(w)===void 0?"button":"theme-color"]]),onClick:t[3]||(t[3]=i=>V(void 0))},a(e.$t("default")),3),s("p",{class:l(["button-item",[o(w)==="safe"?"button":"theme-color"]]),onClick:t[4]||(t[4]=i=>V("safe"))},a(e.$t("safe")),3),s("p",{class:l(["rounded-r-md button-item",[o(w)==="explicit"?"button":"theme-color"]]),onClick:t[5]||(t[5]=i=>V("explicit"))},[d(b,{name:"i-material-symbols-explicit-outline",class:l({"text-white":o(w)==="explicit"})},null,8,["class"]),x(" "+a(e.$t("explicit")),1)],2)])):S("",!0)])]),s("div",{class:l(["navigations",o(f)==="popularity"?"-mt-2":"-mt-4"])},[Ne,s("div",Te,[p(s("div",je,[s("p",{class:l(["rounded-l-md button-item",[o(h)==="daily"?"button":"theme-color"]]),onClick:t[6]||(t[6]=i=>I("daily"))},a(e.$t("daily")),3),s("p",{class:l(["button-item",[o(h)==="weekly"?"button":"theme-color"]]),onClick:t[7]||(t[7]=i=>I("weekly"))},a(e.$t("weekly")),3),s("p",{class:l(["button-item",o(h)==="monthly"?"button":"theme-color",{"rounded-r-md":!o(v).loggedIn}]),onClick:t[8]||(t[8]=i=>I("monthly"))},a(e.$t("monthly")),3),o(v).loggedIn?($(),q("p",{key:0,class:l(["rounded-r-md button-item",o(h)==="all"?"button":"theme-color"]),onClick:t[9]||(t[9]=i=>I("all"))},a(e.$t("allTime")),3)):S("",!0)],512),[[m,o(f)==="popularity"]]),p(s("div",De,[s("div",Ke,[s("button",{class:"flex items-center py-2 w-full rounded-md border-2 border-transparent outline-none md:w-52 theme-color hover:button",onClick:t[10]||(t[10]=i=>ie())},[s("span",He,a(o(c)==="views"?e.$t("mostViewed"):o(J)),1),Qe]),s("ul",Ge,[s("li",{class:l(["flex flex-row justify-between py-2 px-3 cursor-pointer hover:button icon-hover-parent",{button:o(c)==="views"},{"rounded-b-md":!o(v).loggedIn}]),onClick:t[11]||(t[11]=i=>z("views",e.$t("mostViewed")))},[d(b,{name:"i-mi-eye",class:l({"text-white":o(c)==="views"})},null,8,["class"]),x(" "+a(e.$t("mostViewed")),1)],2),o(v).loggedIn?($(),q("li",{key:0,class:l(["flex flex-row justify-between py-2 px-3 cursor-pointer hover:button icon-hover-parent",{button:o(c)==="likes"}]),onClick:t[12]||(t[12]=i=>z("likes",e.$t("mostLiked")))},[d(b,{name:"i-ri-heart-3-line",class:l({"text-white":o(c)==="likes"})},null,8,["class"]),x(" "+a(e.$t("mostLiked")),1)],2)):S("",!0),o(v).loggedIn?($(),q("li",{key:1,class:l(["flex flex-row justify-between py-2 px-3 rounded-b-md cursor-pointer hover:button icon-hover-parent",{button:o(c)==="comments"}]),onClick:t[13]||(t[13]=i=>z("comments",e.$t("mostCommented")))},[d(b,{name:"i-mdi-comment-multiple-outline",class:l({"text-white":o(c)==="comments"})},null,8,["class"]),x(" "+a(e.$t("mostCommented")),1)],2)):S("",!0)])])],512),[[m,o(f)==="popularity"]])])],2)]),d(Le,{loading:o(k),empty:o(X),error:o(E),fetch:r},null,8,["loading","empty","error"]),p(s("div",null,[p(d(Oe,{"section-class":"work-grid-10",works:o(C),view:me},null,8,["works"]),[[m,!o(X)]]),p(s("div",{class:l(["w-full primary-button",o(W).delay?"animate-pulse":""]),onClick:ce},a(e.$t("loadMore")),3),[[m,o(A)]])],512),[[m,!o(k)]]),s("div",Ue,[p(d(Se,{ref_key:"popularModalViewRef",ref:Z,section:"browse"},null,512),[[m,!o(k)]])]),o(k)?S("",!0):($(),te(Ie,{key:0,id:"tag-filter-selection-modal",ref_key:"tagFilterSelectionModalRef",ref:Q,class:"modal",onApply:U},null,512))])]),_:1}))}},pt=Be(Xe,[["__scopeId","data-v-8dde9041"]]);export{pt as default};
