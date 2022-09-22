import{watch as j,ref as s,onBeforeMount as X,openBlock as U,createElementBlock as L,createElementVNode as e,toDisplayString as a,withDirectives as f,normalizeClass as u,createVNode as g,vShow as b,createTextVNode as B,unref as V,createCommentVNode as R,pushScopeId as Y,popScopeId as Z,computed as ce,Fragment as de,renderList as ve,createBlock as ee,normalizeStyle as pe,withCtx as te,withModifiers as J,onMounted as me,withKeys as fe,vModelText as ge}from"vue";import{d as D,c as oe,l as K,i as we,u as be,Q as he,_ as ke,e as ye}from"../server.mjs";import"vue-router";import{L as _e}from"./Layout.82674cce.js";import{_ as T,u as $e,a as A}from"./Icon.4480cdda.js";import{W as xe,M as Ce}from"./ModalView.b218d979.js";import{_ as ne}from"./ErrorMessages.9543f57f.js";import{u as le}from"./useUser.415c12c8.js";import"#internal/nitro";import"./Spinner.2a5d5b7b.js";import"./user-counters-api.d7c5fc90.js";import"./useFeed.1b0a564c.js";const se=k=>(Y("data-v-e6a76ae8"),k=k(),Z(),k),Pe={class:"navigations"},Me={class:"title"},Ue={class:"buttons"},Ae={class:"filter-buttons"},Ne={class:"filter-buttons"},Ee={key:0,class:"filter-buttons"},qe={class:"navigations"},Le=se(()=>e("div",null,null,-1)),Ie={class:"buttons"},Se={class:"filter-buttons"},Ve={class:"filter-buttons"},Be={class:"inline-block w-full md:w-40 group"},ze={class:"flex items-center py-2 px-3 w-full rounded-md outline-none md:w-40 theme-color hover:button focus:outline-none"},Fe={class:"flex-1 pr-1"},Oe=se(()=>e("span",null,[e("svg",{class:"w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1)),Re={class:"absolute z-10 mt-1 w-full text-center rounded-md transition duration-150 ease-in-out transform origin-top scale-0 md:w-40 theme-color group-hover:scale-100"},Te={class:"mt-4"},We={key:0,class:"art-list-view-paging-control"},je={id:"popular-modal",class:"modal work-view"},De={__name:"Artworks",emits:["countArtworks"],setup(k,{emit:w}){const{oApiConfiguration:N,fetchOptions:E}=D(),q=$e(N,E()),_=oe(),$=K(),{q:y}=$.query;j(()=>$.query.q,(o,t)=>{o!==t&&(h.value=o,x())});const h=s(y);X(()=>{x()});const d=s("recent"),r=async o=>{d.value=o,await x()},n=s(void 0),p=async o=>{n.value=o,v.value.page=0,await x()},l=s("daily"),P=async o=>{l.value=o,v.value.page=0,await x()},m=s(!1),W=async()=>{m.value=!m.value,v.value.page=0,await x()},I=s([]),M=s({pagination:{enablePrev:!0,enableNext:!0}}),x=async()=>{const o=await C(),t=o.works,i=o.pagination;!t.length&&i.record_total===0?ae():(I.value=t,i.next_previous.next_page===null?M.value.pagination.enableNext=!1:M.value.pagination.enableNext=!0,i.next_previous.prev_page===null?M.value.pagination.enablePrev=!1:M.value.pagination.enablePrev=!0,w("countArtworks",i.record_total))},c=s(!0),v=s({perPage:18,page:s(0)}),C=async()=>{var i;v.value.page===0&&(c.value=!0,z.value=!1);const[o,t]=await q.getSearch({recentMode:d.value==="recent",range:l.value,rangeMode:S.value,explicitMode:n.value,keyword:(i=h.value)!=null?i:"",followingOnly:m.value,pagination:{perPage:v.value.perPage,page:v.value.page}});if(t)re();else return ie(),o},Q=async o=>{o==="prev"?v.value.page-=1:v.value.page+=1,await x()},z=s(!1),ae=()=>{z.value=!0,w("countArtworks",0)},F=s(!1),re=()=>{c.value=!1,F.value=!0},ie=()=>{c.value=!1,z.value=!1,F.value=!1},G=s(null),ue=(o,t=!1)=>{G.value.view(o,t),we().openModal("popular-modal")},S=s("none"),H=s(""),O=async(o,t)=>{S.value=o,H.value=t,await x()};return(o,t)=>(U(),L("div",null,[e("div",Pe,[e("div",Me,a(o.$t("artworks.artworks")),1),e("div",Ue,[f(e("div",Ae,[e("button",{class:u(["px-3 rounded-md button-item",m.value?"button":"theme-color"]),onClick:t[0]||(t[0]=i=>W())},[f(g(A,{name:"i-fluent-people-checkmark-24-regular",class:"text-white"},null,512),[[b,m.value]]),f(g(A,{name:"i-fluent-people-checkmark-24-regular"},null,512),[[b,!m.value]]),B(" "+a(o.$t("following")),1)],2)],512),[[b,V(_).loggedIn]]),e("div",Ne,[e("p",{class:u(["rounded-l-md button-item",[d.value==="recent"?"button":"theme-color"]]),onClick:t[1]||(t[1]=i=>r("recent"))},a(o.$t("artworks.recent")),3),e("p",{class:u(["rounded-r-md button-item",[d.value==="popularity"?"button":"theme-color"]]),onClick:t[2]||(t[2]=i=>r("popularity"))},a(o.$t("artworks.mostPopular")),3)]),V(_).loggedIn&&V(_).user.user_settings.show_explicit?(U(),L("div",Ee,[e("p",{class:u(["rounded-l-md button-item",[n.value===void 0?"button":"theme-color"]]),onClick:t[3]||(t[3]=i=>p(void 0))},a(o.$t("default")),3),e("p",{class:u(["button-item",[n.value==="safe"?"button":"theme-color"]]),onClick:t[4]||(t[4]=i=>p("safe"))},a(o.$t("safe")),3),e("p",{class:u(["rounded-r-md button-item",[n.value==="explicit"?"button":"theme-color"]]),onClick:t[5]||(t[5]=i=>p("explicit"))},a(o.$t("explicit")),3)])):R("",!0)])]),e("div",qe,[Le,e("div",Ie,[f(e("div",Se,[e("p",{class:u(["rounded-l-md button-item",[l.value==="daily"?"button":"theme-color"]]),onClick:t[6]||(t[6]=i=>P("daily"))},a(o.$t("daily")),3),e("p",{class:u(["button-item",[l.value==="weekly"?"button":"theme-color"]]),onClick:t[7]||(t[7]=i=>P("weekly"))},a(o.$t("weekly")),3),e("p",{class:u(["button-item",[l.value==="monthly"?"button":"theme-color"]]),onClick:t[8]||(t[8]=i=>P("monthly"))},a(o.$t("monthly")),3),e("p",{class:u(["rounded-r-md button-item",[l.value==="all"?"button":"theme-color"]]),onClick:t[9]||(t[9]=i=>P("all"))},a(o.$t("allTime")),3)],512),[[b,d.value==="popularity"]]),f(e("div",Ve,[e("div",Be,[e("button",ze,[e("span",Fe,a(S.value==="none"?o.$t("default"):H.value),1),Oe]),e("ul",Re,[e("li",{class:u(["py-2 px-3 rounded-t-md cursor-pointer hover:button",{button:S.value==="none"}]),onClick:t[10]||(t[10]=i=>O("none",o.$t("default")))},a(o.$t("default")),3),e("li",{class:u(["py-2 px-3 cursor-pointer hover:button",{button:S.value==="views"}]),onClick:t[11]||(t[11]=i=>O("views",o.$t("mostViewed")))},a(o.$t("mostViewed")),3),e("li",{class:u(["py-2 px-3 cursor-pointer hover:button",{button:S.value==="likes"}]),onClick:t[12]||(t[12]=i=>O("likes",o.$t("mostLiked")))},a(o.$t("mostLiked")),3),e("li",{class:u(["py-2 px-3 rounded-b-md cursor-pointer hover:button",{button:S.value==="comments"}]),onClick:t[13]||(t[13]=i=>O("comments",o.$t("mostCommented")))},a(o.$t("mostCommented")),3)])])],512),[[b,d.value==="popularity"]])])]),g(ne,{loading:c.value,empty:z.value,error:F.value,fetch:x},null,8,["loading","empty","error"]),f(e("div",Te,[f(g(xe,{"section-class":"work-grid",works:I.value,view:ue},null,8,["works"]),[[b,!z.value]])],512),[[b,!c.value]]),!c.value&&!z.value&&!F.value?(U(),L("div",We,[e("button",{class:u(["w-full md:w-auto",[M.value.pagination.enablePrev?"primary-button":"disabled-button"]]),onClick:t[14]||(t[14]=i=>M.value.pagination.enablePrev?Q("prev"):null)},[g(A,{name:"i-ion-chevron-back-outline"}),B(" "+a(o.$t("pagination.previous")),1)],2),e("button",{class:u(["w-full md:w-auto",M.value.pagination.enableNext?"primary-button":"disabled-button"]),onClick:t[15]||(t[15]=i=>M.value.pagination.enableNext?Q("next"):null)},[B(a(o.$t("pagination.next"))+" ",1),g(A,{name:"i-ion-chevron-forward-outline",class:"ml-2",style:{"margin-right":"0 !important"}})],2)])):R("",!0),e("div",je,[f(g(Ce,{ref_key:"popularModalViewRef",ref:G,section:"popular"},null,512),[[b,!c.value]])])]))}},Ke=T(De,[["__scopeId","data-v-e6a76ae8"]]),Qe={class:"grid grid-cols-1 gap-4 mb-4 w-full md:grid-cols-2 lg:grid-cols-4"},Ge={class:"flex flex-row w-full"},He=["src"],Je={class:"flex flex-col justify-between p-3 w-full text-white"},Xe={class:"flex flex-col"},Ye={class:"font-bold"},Ze={class:"text-xxs"},et={class:"flex flex-row w-full"},tt={key:0,class:"flex flex-row"},ot=["onClick"],nt=["onMouseover","onClick"],lt={__name:"UserList",props:{users:{type:Array,default:()=>{}}},setup(k){const w=k,N=oe(),{oApiConfiguration:E,fetchOptions:q}=D(),_=le(E,q()),$=ce(()=>w.users);be();const y=s(0),h=async(r,n)=>{const[p,l]=await _.follow(n);l||($.value[r].is_following=!0)},d=async(r,n)=>{const[p,l]=await _.unfollow(n);l||($.value[r].is_following=!1)};return(r,n)=>{const p=ke;return U(),L("div",Qe,[(U(!0),L(de,null,ve(V($),(l,P)=>(U(),ee(p,{key:l.id,to:"/profile/"+l.username,class:"flex object-cover flex-row rounded-md shadow-lg cursor-pointer theme-color-secondary hover:shadow-xl",style:pe(l.cover_bucket&&l.cover_filename?"background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+r.avatarCoverUrl(l.cover_bucket,l.cover_filename)+");background-size:cover;":"background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+V(he)+");background-size:cover;")},{default:te(()=>[e("div",Ge,[e("img",{src:r.avatarCoverUrl(l.avatar_bucket,l.avatar_filename),class:"avatar",onError:n[0]||(n[0]=(...m)=>r.imageLoadError&&r.imageLoadError(...m))},null,40,He),e("div",Je,[e("div",Xe,[e("span",Ye,a(l.name),1),e("span",Ze,a(l.pen_name),1)]),e("div",et,[V(N).loggedIn&&l.id!==V(N).user.id?(U(),L("div",tt,[f(e("div",{class:"flex flex-row",onClick:J(m=>h(P,l.id),["prevent"])},[g(A,{name:"i-ri-user-add-fill",class:"text-gray-300 hover:text-white"})],8,ot),[[b,!l.is_following]]),f(e("div",{class:"flex flex-row",onMouseover:m=>y.value=l.id,onMouseout:n[1]||(n[1]=m=>y.value=0),onClick:J(m=>d(P,l.id),["prevent"])},[f(g(A,{name:"i-ri-user-follow-fill",class:"text-green-400"},null,512),[[b,y.value!==l.id]]),f(g(A,{name:"i-ri-user-unfollow-fill",class:"text-red-400 hover:text-red-400"},null,512),[[b,y.value&&y.value===l.id]])],40,nt),[[b,l.is_following]])])):R("",!0)])])])]),_:2},1032,["to","style"]))),128))])}}},st=T(lt,[["__scopeId","data-v-b389f793"]]),at=k=>(Y("data-v-c8c74954"),k=k(),Z(),k),rt={class:"navigations"},it={class:"title"},ut=at(()=>e("div",{class:"buttons"},null,-1)),ct={key:0,class:"art-list-view-paging-control"},dt={__name:"Users",emits:["countUsers"],setup(k,{emit:w}){const{oApiConfiguration:N,fetchOptions:E}=D(),q=le(N,E()),_=K(),{q:$}=_.query;j(()=>_.query.q,(c,v)=>{c!==v&&(y.value=c,r())});const y=s($);X(()=>{r()});const h=s([]),d=s({pagination:{enablePrev:!0,enableNext:!0}}),r=async()=>{const c=await l(),v=c.users,C=c.pagination;!v.length&&C.record_total===0?W():(h.value=v,C.next_previous.next_page===null?d.value.pagination.enableNext=!1:d.value.pagination.enableNext=!0,C.next_previous.prev_page===null?d.value.pagination.enablePrev=!1:d.value.pagination.enablePrev=!0,w("countUsers",C.record_total))},n=s(!0),p=s({perPage:5,page:s(0)}),l=async()=>{var C;p.value.page===0&&(n.value=!0,m.value=!1);const[c,v]=await q.searchUsers({keyword:(C=y.value)!=null?C:"",pagination:{page:p.value.page,perPage:p.value.perPage}});if(v)M();else return x(),c},P=async c=>{c==="prev"?p.value.page-=1:p.value.page+=1,await r()},m=s(!1),W=()=>{m.value=!0,w("countUsers",0)},I=s(!1),M=()=>{n.value=!1,I.value=!0},x=()=>{n.value=!1,m.value=!1,I.value=!1};return(c,v)=>(U(),L("div",null,[e("div",rt,[e("div",it,a(c.$t("users.users")),1),ut]),g(ne,{loading:n.value,empty:m.value,error:I.value,fetch:r},null,8,["loading","empty","error"]),f(e("div",null,[f(g(st,{users:h.value},null,8,["users"]),[[b,!m.value]])],512),[[b,!n.value]]),!n.value&&!m.value&&!I.value?(U(),L("div",ct,[e("button",{class:u(["w-full md:w-auto",[d.value.pagination.enablePrev?"primary-button":"disabled-button"]]),onClick:v[0]||(v[0]=C=>d.value.pagination.enablePrev?P("prev"):null)},[g(A,{name:"i-ion-chevron-back-outline"}),B(" "+a(c.$t("pagination.previous")),1)],2),e("button",{class:u(["w-full md:w-auto",d.value.pagination.enableNext?"primary-button":"disabled-button"]),onClick:v[1]||(v[1]=C=>d.value.pagination.enableNext?P("next"):null)},[B(a(c.$t("pagination.next"))+" ",1),g(A,{name:"i-ion-chevron-forward-outline",class:"ml-2",style:{"margin-right":"0 !important"}})],2)])):R("",!0)]))}},vt=T(dt,[["__scopeId","data-v-c8c74954"]]);const pt={id:"lists"},mt={class:"search"},ft=["placeholder"],gt={class:"flex flex-row mb-6 w-full"},wt={__name:"index",setup(k){const w=s("artworks"),N=ye(),E=K();me(()=>{h.value=E.query.q});const q=s(0),_=r=>{q.value=r},$=s(0),y=r=>{$.value=r},h=s("");j(()=>E.query,({q:r})=>{h.value=r});const d=()=>{N.push({path:"/search",query:{q:h.value},replace:!0,force:!0})};return(r,n)=>(U(),ee(_e,{"with-footer":!0,"hide-side":!0,"no-right-side":!0},{default:te(()=>[e("div",pt,[e("span",mt,[f(e("input",{"onUpdate:modelValue":n[0]||(n[0]=p=>h.value=p),type:"text",name:"search",placeholder:r.$t("search"),onKeyup:n[1]||(n[1]=fe(p=>d(),["enter"]))},null,40,ft),[[ge,h.value]]),e("span",{class:"search-button",onClick:n[2]||(n[2]=p=>d())},[g(A,{name:"i-ion-search"})])]),e("div",gt,[e("div",{class:u(["rounded-lg profile-category-button left-menu-link theme-color-secondary",{"button-color text-white":w.value==="artworks"}]),onClick:n[3]||(n[3]=p=>w.value="artworks")},[B(a(r.$t("artworks.artworks"))+" ",1),e("span",{class:u(["px-1 ml-2 rounded",w.value==="artworks"?"theme-color":"bg-gray-600 text-white"])},a(q.value),3)],2),e("div",{class:u(["rounded-lg profile-category-button left-menu-link theme-color-secondary",{"button-color text-white":w.value==="users"}]),onClick:n[4]||(n[4]=p=>w.value="users")},[B(a(r.$t("users.users"))+" ",1),e("span",{class:u(["px-1 ml-2 rounded",w.value==="users"?"theme-color":"bg-gray-600 text-white"])},a($.value),3)],2)]),f(e("div",null,[g(Ke,{onCountArtworks:_})],512),[[b,w.value==="artworks"]]),f(e("div",null,[g(vt,{onCountUsers:y})],512),[[b,w.value==="users"]])])]),_:1}))}},Nt=T(wt,[["__scopeId","data-v-60d77560"]]);export{Nt as default};
//# sourceMappingURL=index.1c048a5e.js.map
