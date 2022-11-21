import{j as ce,k as me,f as ve,O as fe,E as F,m as ge,r as a,H as S,J as we,c as ye,w as be,o as I,q as s,t as i,K as l,u as o,b as c,v as m,e as r,L as v,s as w,p as X,x as Y,aw as he,M as ke,N as $e}from"./entry.e86746f3.js";import{u as xe}from"./nuxt-img.978eb1b8.js";import{u as _e}from"./useI18n.e4d2cde3.js";import{L as Ce}from"./Layout.04566d95.js";import{W as Me}from"./WorkList.0bfb6f77.js";import{M as Oe}from"./ModalView.e487b658.js";import{_ as Pe}from"./LoadingEmptyErrorMessage.30f12734.js";import{_ as Se}from"./TagFilterSelection.b11c8c5f.js";import{_ as Le}from"./_plugin-vue_export-helper.a1a6add7.js";import"./useReport.24d86f53.js";import"./Spinner.cfab8439.js";import"./user-counters-api.1e743ca3.js";import"./useFeed.1ec68f4a.js";const Z=C=>(ke("data-v-e34f1817"),C=C(),$e(),C),Ve={id:"lists"},Ee={class:"navigations"},Ne={class:"title"},Ae={class:"buttons"},Be={class:"filter-buttons"},Fe={class:"filter-buttons"},Ie={class:"filter-buttons"},Re={key:0,class:"filter-buttons"},qe=Z(()=>s("div",{class:"hidden md:flex"},null,-1)),je={class:"buttons"},Ke={class:"filter-buttons"},We={class:"filter-buttons"},ze={class:"inline-block w-full group md:w-52"},De={class:"flex-1 pr-1"},Te=Z(()=>s("span",null,[s("svg",{class:"w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[s("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1)),He={id:"popular-order-options",class:"absolute z-10 mt-1 w-full text-center rounded-md transition duration-150 ease-in-out transform origin-top scale-0 md:w-52 theme-color group-hover:scale-100"},Ge={key:0,class:"art-list-view-paging-control"},Qe={id:"browse-modal",class:"modal work-view"},Ue={__name:"index",setup(C){const L=ce(),{oApiConfiguration:J,fetchOptions:ee}=me(),V=xe(J,ee());ve({title:_e().tl("meta.title.browse")});const x=fe(),{tags:R}=x.query;F(()=>x.query,()=>{te()}),F(()=>x.query.tags,e=>{e&&(_.value=e,K(e)),u()}),ge(()=>{R&&K(),u()});const te=()=>{S().closeModal("browse-modal")},q=a(!1),oe=()=>{q.value=!q.value},se=()=>{document.getElementById("popular-order-options").classList.add("scale-0")},f=a("recent"),j=async e=>{f.value=e,await u()},y=a(void 0),E=async e=>{y.value=e,p.page=0,await u()},h=a("daily"),M=async e=>{h.value=e,p.page=0,await u()},b=a(!1),le=async()=>{b.value=!b.value,p.page=0,await u()},K=async e=>{const t=e!=null?e:R,[n,de]=await V.getTagKeys(t);if(!de){const B=[];n.tags.forEach(U=>{B.push({key:U.id,value:U.tag})}),O.value=B,await D(B,t)}},W=a(null),ne=()=>{W.value.init(he(O.value)),S().openModal("tag-filter-selection-modal")},_=a(""),z=a(""),O=a(),N=a(0),D=async(e,t)=>{O.value=e,_.value=t,z.value=t,N.value=t!==""?t.split(",").length:0,p.page=0,S().closeModal("tag-filter-selection-modal"),await u()};F(async()=>O.value,e=>{u()});const T=a([]),k=a({pagination:{enablePrev:!0,enableNext:!0}}),u=async()=>{const e=await ae(),t=e.works,n=e.pagination;!t.length&&n.record_total===0?ie():(T.value=t,n.next_previous.next_page===null?k.value.pagination.enableNext=!1:k.value.pagination.enableNext=!0,n.next_previous.prev_page===null?k.value.pagination.enablePrev=!1:k.value.pagination.enablePrev=!0)},g=a(!0),p=we({perPage:30,page:a(0)}),ae=async()=>{x.query.tags&&!z.value&&(_.value=x.query.tags),p.page===0&&(g.value=!0,$.value=!1);let[e,t]=[];if(f.value==="recent"?[e,t]=await V.getLatest({pagination:{perPage:p.perPage,page:p.page},explicitMode:y.value,tags:_.value,followingOnly:b.value}):[e,t]=await V.getMostPopular({pagination:{perPage:p.perPage,page:p.page},range:h.value,rangeMode:d.value,explicitMode:y.value,tags:_.value,followingOnly:b.value}),t)re();else return ue(),e},H=async e=>{e==="prev"?p.page-=1:p.page+=1,await u()},$=a(!1),ie=()=>{$.value=!0},P=a(!1),re=()=>{g.value=!1,P.value=!0},ue=()=>{g.value=!1,$.value=!1,P.value=!1},G=a(null),pe=(e,t=!1)=>{G.value.view(e,t),S().openModal("browse-modal")},d=a("views"),Q=a(""),A=async(e,t)=>{d.value=e,Q.value=t,se(),await u()};return(e,t)=>(I(),ye(Ce,{"with-footer":!0,"hide-side":!0,"no-right-side":!0,fullscreen:!0},{default:be(()=>[s("div",Ve,[s("div",Ee,[s("div",Ne,i(e.$t("browse")),1),s("div",Ae,[s("div",Be,[s("button",{class:l(["px-3 rounded-md button-item",o(N)?"button":"theme-color"]),onClick:ne},i(o(N))+" "+i(e.$t("tagsApplied")),3)]),c(s("div",Fe,[s("button",{class:l(["px-3 rounded-md button-item",o(b)?"button":"theme-color"]),onClick:t[0]||(t[0]=n=>le())},[c(r(v,{name:"i-fluent-people-checkmark-24-regular",class:"text-white"},null,512),[[m,o(b)]]),c(r(v,{name:"i-fluent-people-checkmark-24-regular"},null,512),[[m,!o(b)]]),w(" "+i(e.$t("followingOnly")),1)],2)],512),[[m,o(L).loggedIn]]),s("div",Ie,[s("p",{class:l(["rounded-l-md button-item",[o(f)==="recent"?"button":"theme-color"]]),onClick:t[1]||(t[1]=n=>j("recent"))},i(e.$t("artworks.newest")),3),s("p",{class:l(["rounded-r-md button-item",[o(f)==="popularity"?"button":"theme-color"]]),onClick:t[2]||(t[2]=n=>j("popularity"))},[r(v,{name:"i-icon-park-outline-oval-love-two",class:l([{"text-white":o(f)==="popularity"}])},null,8,["class"]),w(" "+i(e.$t("artworks.mostPopular")),1)],2)]),o(L).loggedIn&&o(L).user.user_settings.show_explicit?(I(),X("div",Re,[s("p",{class:l(["rounded-l-md button-item",[o(y)===void 0?"button":"theme-color"]]),onClick:t[3]||(t[3]=n=>E(void 0))},i(e.$t("default")),3),s("p",{class:l(["button-item",[o(y)==="safe"?"button":"theme-color"]]),onClick:t[4]||(t[4]=n=>E("safe"))},i(e.$t("safe")),3),s("p",{class:l(["rounded-r-md button-item",[o(y)==="explicit"?"button":"theme-color"]]),onClick:t[5]||(t[5]=n=>E("explicit"))},[r(v,{name:"i-material-symbols-explicit-outline",class:l({"text-white":o(y)==="explicit"})},null,8,["class"]),w(" "+i(e.$t("explicit")),1)],2)])):Y("",!0)])]),s("div",{class:l(["navigations",o(f)==="popularity"?"-mt-2":"-mt-4"])},[qe,s("div",je,[c(s("div",Ke,[s("p",{class:l(["rounded-l-md button-item",[o(h)==="daily"?"button":"theme-color"]]),onClick:t[6]||(t[6]=n=>M("daily"))},i(e.$t("daily")),3),s("p",{class:l(["button-item",[o(h)==="weekly"?"button":"theme-color"]]),onClick:t[7]||(t[7]=n=>M("weekly"))},i(e.$t("weekly")),3),s("p",{class:l(["button-item",[o(h)==="monthly"?"button":"theme-color"]]),onClick:t[8]||(t[8]=n=>M("monthly"))},i(e.$t("monthly")),3),s("p",{class:l(["rounded-r-md button-item",[o(h)==="all"?"button":"theme-color"]]),onClick:t[9]||(t[9]=n=>M("all"))},i(e.$t("allTime")),3)],512),[[m,o(f)==="popularity"]]),c(s("div",We,[s("div",ze,[s("button",{class:"flex items-center py-2 w-full rounded-md outline-none md:w-52 theme-color hover:button",onClick:t[10]||(t[10]=n=>oe())},[s("span",De,i(o(d)==="views"?e.$t("mostViewed"):o(Q)),1),Te]),s("ul",He,[s("li",{class:l(["flex flex-row justify-between py-2 px-3 cursor-pointer hover:button icon-hover-parent",{button:o(d)==="views"}]),onClick:t[11]||(t[11]=n=>A("views",e.$t("mostViewed")))},[r(v,{name:"i-mi-eye",class:l({"text-white":o(d)==="views"})},null,8,["class"]),w(" "+i(e.$t("mostViewed")),1)],2),s("li",{class:l(["flex flex-row justify-between py-2 px-3 cursor-pointer hover:button icon-hover-parent",{button:o(d)==="likes"}]),onClick:t[12]||(t[12]=n=>A("likes",e.$t("mostLiked")))},[r(v,{name:"i-ri-heart-3-line",class:l({"text-white":o(d)==="likes"})},null,8,["class"]),w(" "+i(e.$t("mostLiked")),1)],2),s("li",{class:l(["flex flex-row justify-between py-2 px-3 rounded-b-md cursor-pointer hover:button icon-hover-parent",{button:o(d)==="comments"}]),onClick:t[13]||(t[13]=n=>A("comments",e.$t("mostCommented")))},[r(v,{name:"i-mdi-comment-multiple-outline",class:l({"text-white":o(d)==="comments"})},null,8,["class"]),w(" "+i(e.$t("mostCommented")),1)],2)])])],512),[[m,o(f)==="popularity"]])])],2),r(Pe,{loading:o(g),empty:o($),error:o(P),fetch:u},null,8,["loading","empty","error"]),c(s("div",null,[c(r(Me,{"section-class":"work-grid",works:o(T),view:pe},null,8,["works"]),[[m,!o($)]])],512),[[m,!o(g)]]),!o(g)&&!o($)&&!o(P)?(I(),X("div",Ge,[s("button",{class:l([o(k).pagination.enablePrev?"primary-button":"disabled-button"]),onClick:t[14]||(t[14]=n=>H("prev"))},[r(v,{name:"i-ion-chevron-back-outline"}),w(" "+i(e.$t("pagination.previous")),1)],2),s("button",{class:l([o(k).pagination.enableNext?"primary-button":"disabled-button"]),onClick:t[15]||(t[15]=n=>H("next"))},[w(i(e.$t("pagination.next"))+" ",1),r(v,{name:"i-ion-chevron-forward-outline",class:"md:ml-2",style:{"margin-right":"0 !important"}})],2)])):Y("",!0),s("div",Qe,[c(r(Oe,{ref_key:"popularModalViewRef",ref:G,section:"browse"},null,512),[[m,!o(g)]])]),c(r(Se,{id:"tag-filter-selection-modal",ref_key:"tagFilterSelectionModalRef",ref:W,class:"modal",onApply:D},null,512),[[m,!o(g)]])])]),_:1}))}},ut=Le(Ue,[["__scopeId","data-v-e34f1817"]]);export{ut as default};
