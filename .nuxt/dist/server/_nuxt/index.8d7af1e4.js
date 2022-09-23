import{q as Q,c as X,o as Y,d as Z,j as oo,u as eo,i as f,_ as to,l as so}from"../server.mjs";import{u as io}from"./useI18n.38e780c5.js";import{_ as z,u as ro,a as k}from"./Icon.95c42902.js";import{u as ao}from"./useFeed.4aa7e5ab.js";import{openBlock as n,createElementBlock as d,onMounted as no,watch as lo,ref as m,createBlock as S,KeepAlive as co,createVNode as s,withCtx as c,withDirectives as v,vShow as w,createElementVNode as t,Fragment as uo,renderList as po,createTextVNode as _,toDisplayString as r,createCommentVNode as u,withModifiers as b,normalizeClass as _o,unref as mo,pushScopeId as ho,popScopeId as ko}from"vue";import"vue-router";import{S as vo,M as wo,a as fo,u as yo,b as xo,c as go,d as bo}from"./ModalView.f4748faa.js";import{L as Mo}from"./Layout.db0af32a.js";import{I as C,F as Co}from"./FeedModalView.3539cd14.js";import"#internal/nitro";import"./ErrorMessages.9629f58c.js";import"./Spinner.490fe47a.js";import"./user-counters-api.3bbd41d0.js";const Io={};function So(y,$){return n(),d("div")}const $o=z(Io,[["render",So]]);const M=y=>(ho("data-v-d51bcb62"),y=y(),ko(),y),Fo={class:"mx-auto w-full"},Lo={class:"grid grid-cols-1 gap-1 mx-auto md:gap-2 xl:w-11/12"},Ao={class:"flex flex-row rounded-md theme-color"},Ro={class:"w-full"},Vo={key:0,class:"p-2 md:p-4 user-info"},Eo=["src"],Bo={class:"name"},No=M(()=>t("br",null,null,-1)),Oo=M(()=>t("span",{class:"mx-1"},"\xB7",-1)),Do={key:1,class:"px-2 mt-2 md:px-4"},To={class:"text-xs font-semibold"},zo=["id"],Uo=["id","onClick"],jo=["onClick"],qo={key:4,class:"px-2 md:px-4"},Ho={key:0,class:"my-2 w-full rounded-md theme-color-secondary"},Ko={key:0,class:"p-2 md:p-4 user-info"},Po=["src"],Wo={class:"name"},Go=M(()=>t("br",null,null,-1)),Jo=M(()=>t("span",{class:"mx-1"},"\xB7",-1)),Qo={class:"px-2 mt-2 md:px-4"},Xo={class:"text-xs font-semibold"},Yo=["id"],Zo=["id","onClick"],oe=["onClick"],ee={class:"float-right mx-4 mt-2 interactions"},te={key:0,class:"reactions"},se=["onClick"],ie=["onClick"],re=["onClick"],ae={class:"option dropdown"},ne={type:"button","aria-haspopup":"true","aria-expanded":"true","aria-controls":"option-dropdown-items"},le={class:"option-dropdown dropdown-menu"},ce={id:"option-dropdown-items",class:"w-52 toggler","aria-labelledby":"option-dropdown-buttons",role:"menu"},de={class:"menu-wrapper"},ue=M(()=>t("div",{class:"custom-divider"},null,-1)),pe=["onClick"],_e={id:"chronological-modal",class:"modal work-view"},me={id:"chronological-feed-modal",class:"modal work-view z-30"},he={__name:"index",props:{changeMode:{type:Function,default:()=>{}}},setup(y){Q({title:io().tl("meta.title.feed")});const $=X();Y();const{oApiConfiguration:F,fetchOptions:L}=Z(),A=ro(F,L()),R=ao(F,L()),U=oo(),{$router:j}=eo();no(()=>{}),lo(()=>j.currentRoute.value.params.path,()=>{W(),f().closeModal("feed-collection-selection-modal")}),m({explicitMode:void 0,pagination:{page:0,perPage:10}});const q=m([]),V=m(null),I=e=>{V.value.view(e),f().openModal("chronological-modal")},E=m(null),H=e=>{E.value.view(e),f().openModal("chronological-feed-modal")},B=(e,a,i,p)=>{yo().readMore(e,a,i,p)},N=m(!1);let K;const P=e=>{const a=m(U.public.appUrl+e),{copy:i}=xo({source:a});i(),go().splash(K,N,"copy-alert")},x=m([]),h=m([]),O=async(e,a)=>{const i=parseInt(e.split("-")[1]);let p=!1;if(a==="artworks"){const[o,l]=await A.like({workId:i});p=o}else if(a==="feeds"){const[o,l]=await R.like({feedId:i});p=o}if(p){h.value.push(e);const o=document.getElementById(`feed-like-button-${a}-${i}`);o.classList.add("animate-bounce"),setInterval(()=>{o.classList.remove("animate-bounce")},2500)}},D=async(e,a)=>{const i=parseInt(e.split("-")[1]);let p=!1;if(a==="artworks"){const[o,l]=await A.unlike({workId:i});p=o}else if(a==="feeds"){const[o,l]=await R.unlike({feedId:i});p=o}if(p){const o=h.value.indexOf(e);h.value.splice(o,1)}},W=()=>{f().closeModal("chronological-modal"),f().closeModal("chronological-feed-modal")},T=m(null),g=m(0),G=e=>{g.value=e,f().openModal("feed-collection-selection-modal"),T.value.fetchCurrentSaved()},J=e=>{if(e){const a=x.value.indexOf(g.value);x.value.splice(a,1)}else x.value.push(g.value);bo().animate("save-to-collection-button-"+g.value)};return(e,a)=>{const i=to,p=so;return n(),S(co,null,[s(Mo,{"with-footer":!0,"hide-side":e.isMobile()},{"right-side":c(()=>[s($o)]),default:c(()=>[v(s(vo,{id:"copy-alert",text:e.$t("linkCopied"),icon:"i-bi-check-all"},null,8,["text"]),[[w,N.value]]),t("div",Fo,[t("div",Lo,[(n(!0),d(uo,null,po(q.value,o=>(n(),d("div",{key:o.id+o.type,class:"rounded-md lg:mx-6"},[t("div",Ao,[t("div",Ro,[o.users?(n(),d("div",Vo,[s(i,{to:"/profile/"+o.users.username},{default:c(()=>[t("img",{class:"avatar",src:e.avatarCoverUrl(o.users.avatar_bucket,o.users.avatar_filename),onError:a[0]||(a[0]=(...l)=>e.imageLoadError&&e.imageLoadError(...l))},null,40,Eo)]),_:2},1032,["to"]),t("div",Bo,[s(i,{to:"/profile/"+o.users.username,class:"fullname hover:href"},{default:c(()=>[_(r(o.users.name),1)]),_:2},1032,["to"]),No,s(i,{to:"/profile/"+o.users.username,class:"hover:underline text-xxs"},{default:c(()=>[_(" @"+r(o.users.username),1)]),_:2},1032,["to"]),Oo,s(i,{to:(o.type==="artwork"?"/a/":"/feed/")+o.id,class:"hover:underline text-xxs"},{default:c(()=>[_(r(e.formatDate(o.scheduled_post?o.scheduled_post:o.created_at,!0)),1)]),_:2},1032,["to"])])])):u("",!0),o.type==="artwork"?(n(),d("div",Do,[t("span",To,r(o.title),1),v(t("p",null,[t("span",{id:"feed-description-"+o.id},r(o.description.length>300?`${o.description.slice(0,300)}...`:o.description),9,zo),o.description.length>300?(n(),d("a",{key:0,id:"feed-read-more-"+o.id,class:"href",onClick:b(l=>B(o.description,o.id,"feed-read-more-","feed-description-"),["prevent"])},r(e.$t("readMore")),9,Uo)):u("",!0)],512),[[w,o.description]])])):u("",!0),o.type==="artwork"&&!e.isMobile()?(n(),d("div",{key:2,class:"cursor-pointer",onClick:b(l=>I(o.id),["prevent"])},[s(C,{class:"p-2 md:p-4",work:o},null,8,["work"])],8,jo)):u("",!0),o.type==="artwork"&&e.isMobile()?(n(),S(i,{key:3,to:"/a/"+o.id,class:"cursor-pointer"},{default:c(()=>[s(C,{class:"p-2",work:o},null,8,["work"])]),_:2},1032,["to"])):u("",!0),o.type==="feed"?(n(),d("div",qo,[v(t("p",{class:_o(["mt-2",{"mb-2":!o.artwork_share_info}])},r(o.text),3),[[w,o.text]]),o.artwork_share_info?(n(),d("div",Ho,[o.artwork_share_info.user?(n(),d("div",Ko,[s(i,{to:"/profile/"+o.artwork_share_info.user.username},{default:c(()=>[t("img",{class:"avatar",src:e.avatarCoverUrl(o.artwork_share_info.user.avatar_bucket,o.artwork_share_info.user.avatar_filename),onError:a[1]||(a[1]=(...l)=>e.imageLoadError&&e.imageLoadError(...l))},null,40,Po)]),_:2},1032,["to"]),t("div",Wo,[s(i,{to:"/profile/"+o.artwork_share_info.user.username,class:"fullname hover:href"},{default:c(()=>[_(r(o.artwork_share_info.user.name),1)]),_:2},1032,["to"]),Go,s(i,{to:"/profile/"+o.artwork_share_info.user.username,class:"hover:underline text-xxs"},{default:c(()=>[_(" @"+r(o.artwork_share_info.user.username),1)]),_:2},1032,["to"]),Jo,s(i,{to:"/a/"+o.artwork_share_info.id,class:"hover:underline text-xxs"},{default:c(()=>[_(r(e.formatDate(o.artwork_share_info.scheduled_post?o.artwork_share_info.scheduled_post:o.artwork_share_info.created_at,!0)),1)]),_:2},1032,["to"])])])):u("",!0),t("div",Qo,[t("span",Xo,r(o.artwork_share_info.title),1),v(t("p",null,[t("span",{id:"feed-description-"+o.artwork_share_info.id},r(o.artwork_share_info.description.length>300?`${o.artwork_share_info.description.slice(0,300)}...`:o.artwork_share_info.description),9,Yo),o.artwork_share_info.description.length>300?(n(),d("a",{key:0,id:"feed-read-more-"+o.artwork_share_info.id,class:"href",onClick:b(l=>B(o.artwork_share_info.description,o.artwork_share_info.id,"feed-read-more-","feed-description-"),["prevent"])},r(e.$t("readMore")),9,Zo)):u("",!0)],512),[[w,o.artwork_share_info.description]])]),t("div",null,[e.isMobile()?(n(),S(i,{key:0,to:"/a/"+o.artwork_share_info.id,class:"cursor-pointer"},{default:c(()=>[s(C,{class:"p-2",work:o},null,8,["work"])]),_:2},1032,["to"])):u("",!0),e.isMobile()?u("",!0):(n(),d("div",{key:1,class:"cursor-pointer",onClick:b(l=>I(o.artwork_share_info.id),["prevent"])},[s(C,{class:"p-2 md:p-4",work:o},null,8,["work"])],8,oe))])])):u("",!0)])):u("",!0),t("div",ee,[mo($).loggedIn?(n(),d("div",te,[t("span",{onClick:l=>o.type==="artwork"?h.value.includes("a-"+o.id)?D("a-"+o.id,o.type):O("a-"+o.id,o.type):h.value.includes("f-"+o.id)?D("f-"+o.id,o.type):O("f-"+o.id,o.type)},[v(s(k,{id:"feed-like-button-"+o.type+"-"+o.id,name:"i-ion-heart",class:"mr-1 text-red-500 hover:text-red-500"},null,8,["id"]),[[w,o.type==="artwork"?h.value.includes("a-"+o.id):h.value.includes("f-"+o.id)]]),v(s(k,{name:"i-ion-heart-outline",class:"mr-1 icon-color hover:text-red-500"},null,512),[[w,o.type==="artwork"?!h.value.includes("a-"+o.id):!h.value.includes("f-"+o.id)]]),_(" "+r(e.thousand(o._count.likes)),1)],8,se),t("span",{onClick:b(l=>o.type==="artwork"?I(o.id):H(o.id),["prevent"])},[s(k,{name:"i-mdi-comment-multiple-outline",class:"mr-1 icon-color hover:text-blue-500"}),_(" "+r(e.thousand(o._count.comments)),1)],8,ie),o.type==="artwork"?(n(),d("span",{key:0,onClick:l=>G(o.id)},[v(s(k,{id:"save-to-collection-button-"+o.id,name:"i-ion-bookmark",class:"text-blue-500 hover:text-blue-500"},null,8,["id"]),[[w,x.value.includes(o.id)]]),v(s(k,{name:"i-majesticons-bookmark-line",class:"icon-color hover:text-blue-500"},null,512),[[w,!x.value.includes(o.id)]])],8,re)):u("",!0),t("div",ae,[t("button",ne,[t("span",null,[s(k,{name:"i-uit-ellipsis-v",class:"align-middle icon icon-color"})])]),t("div",le,[t("div",ce,[t("div",de,[s(i,{to:o.type==="artwork"?"/a/"+o.id:"/feed/"+o.id,class:"flex py-2 px-3 w-full rounded-md transition-all duration-150 hover:button-color parent-icon hover:text-white"},{default:c(()=>[s(k,{name:"i-fluent-arrow-enter-20-filled",class:"mr-2 text-base"}),_(" "+r(e.$t("open")),1)]),_:2},1032,["to"]),s(i,{to:o.type==="artwork"?"/a/"+o.id:"/feed/"+o.id,target:"_blank",class:"flex z-20 py-2 px-3 w-full rounded-md transition-all duration-150 hover:button-color parent-icon hover:text-white"},{default:c(()=>[s(k,{name:"i-ci-external-link",class:"mr-2 text-base"}),_(" "+r(e.$t("openInNewTab")),1)]),_:2},1032,["to"]),ue,t("a",{class:"flex py-2 px-3 w-full leading-4 rounded-md transition-all duration-150 cursor-pointer hover:button-color parent-icon hover:text-white",onClick:l=>P(o.type==="artwork"?"/a/"+o.id:"/feed/"+o.id)},[s(k,{name:"i-icon-park-outline-copy",class:"mr-2 text-base"}),_(" "+r(e.$t("copySharableLink")),1)],8,pe)])])])])])):u("",!0)])])])]))),128)),s(p),t("div",_e,[s(wo,{ref_key:"chronologicalModalViewRef",ref:V,section:"chronological"},null,512)]),t("div",me,[s(Co,{ref_key:"chronologicalFeedModalViewRef",ref:E,section:"chronological-feed"},null,512)]),s(fo,{id:"feed-collection-selection-modal","modal-id":"feed-collection-selection-modal",ref_key:"collectionSelectionModalRef",ref:T,"work-id":g.value,class:"modal",onSave:J},null,8,["work-id"])])])]),_:1},8,["hide-side"])],1024)}}},Fe=z(he,[["__scopeId","data-v-d51bcb62"]]);export{Fe as default};
//# sourceMappingURL=index.8d7af1e4.js.map
