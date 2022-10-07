import{c as re,u as le,d as ne,n as ie,i as H,_ as ue}from"../server.mjs";import{resolveDirective as Y,openBlock as a,createElementBlock as r,withDirectives as w,createElementVNode as o,createCommentVNode as i,Fragment as T,renderList as V,normalizeClass as $,toDisplayString as u,onMounted as de,ref as g,computed as ce,createVNode as f,withCtx as p,createTextVNode as C,withModifiers as A,vShow as L,createBlock as me,unref as z,vModelText as ve,pushScopeId as fe,popScopeId as we}from"vue";import"vue-router";import{u as ke}from"./useFeed.e6438cd7.js";import{_ as q,a as F}from"./Icon.859b6451.js";import{S as ge}from"./Spinner.5884352f.js";import{M as he}from"./ModalView.5edb3d86.js";const pe=["images"],_e=["src"],ye=["images"],be=["src"],xe=["images"],Ee=["src"],Le=["images"],$e=["src"],Ce={key:4,class:"imgrid"},Me=["src"],Ie={key:1,class:"relative text-center"},ze={class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-3xl font-semibold text-white"},Se=["src"],Te={__name:"ImageList",props:{work:{type:Object,default:()=>{}}},setup(l){const D={1:"col-start-1 row-start-1 col-span-4 row-span-4",2:["col-start-1 row-start-1 col-span-1 row-span-2","col-start-2 row-start-1 col-span-1 row-span-2"],3:["col-start-1 row-start-1 col-span-1 row-span-4","col-start-2 row-start-1 col-span-1 row-span-2","col-start-2 row-start-3 col-span-1 row-span-2"]};return(d,v)=>{const b=Y("lazy");return a(),r("div",null,[l.work.artwork_assets.length===1?(a(),r("div",{key:0,images:[d.artworkThumb(l.work.artwork_assets[0].bucket,l.work.artwork_assets[0].filename,"feed")]},[w(o("img",{src:d.artworkThumb(l.work.artwork_assets[0].bucket,l.work.artwork_assets[0].filename,"feed"),class:"object-contain w-full rounded",style:{"max-height":"1000px"},loading:"lazy",onError:v[0]||(v[0]=(...c)=>d.imageLoadError&&d.imageLoadError(...c))},null,40,_e),[[b,d.artworkThumb(l.work.artwork_assets[0].bucket,l.work.artwork_assets[0].filename,"feed")]])],8,pe)):i("",!0),l.work.artwork_assets.length===2?(a(),r("div",{key:1,images:l.work.images,class:"imgrid"},[(a(!0),r(T,null,V(l.work.images,(c,k)=>w((a(),r("img",{key:c,class:$(D[2][k]),src:c,loading:"lazy",onError:v[1]||(v[1]=(..._)=>d.imageLoadError&&d.imageLoadError(..._))},null,42,be)),[[b,c]])),128))],8,ye)):i("",!0),l.work.artwork_assets.length===3?(a(),r("div",{key:2,images:l.work.images,class:"imgrid"},[(a(!0),r(T,null,V(l.work.images,(c,k)=>w((a(),r("img",{key:c,class:$(D[3][k]),src:c,loading:"lazy",onError:v[2]||(v[2]=(..._)=>d.imageLoadError&&d.imageLoadError(..._))},null,42,Ee)),[[b,c]])),128))],8,xe)):i("",!0),l.work.artwork_assets.length===4?(a(),r("div",{key:3,images:l.work.images,class:"imgrid"},[(a(!0),r(T,null,V(l.work.images,c=>w((a(),r("img",{key:c,src:c,loading:"lazy",onError:v[3]||(v[3]=(...k)=>d.imageLoadError&&d.imageLoadError(...k))},null,40,$e)),[[b,c]])),128))],8,Le)):i("",!0),l.work.artwork_assets.length>4?(a(),r("div",Ce,[(a(!0),r(T,null,V(l.work.images,(c,k)=>(a(),r("div",{key:k},[k<3?w((a(),r("img",{key:0,src:c,loading:"lazy",onError:v[4]||(v[4]=(..._)=>d.imageLoadError&&d.imageLoadError(..._))},null,40,Me)),[[b,c]]):(a(),r("div",Ie,[o("span",ze,"+"+u(l.work.artwork_assets.length-4),1),w(o("img",{src:c,class:"z-0 brightness-50",loading:"lazy",onError:v[5]||(v[5]=(..._)=>d.imageLoadError&&d.imageLoadError(..._))},null,40,Se),[[b,c]])]))]))),128))])):i("",!0)])}}},G=q(Te,[["__scopeId","data-v-433644ba"]]),B=l=>(fe("data-v-2a34bd09"),l=l(),we(),l),Ve={class:"flex flex-row justify-between mb-2 w-full"},Be={key:0,class:"user-info"},De=["src"],je={class:"name"},Ae=B(()=>o("br",null,null,-1)),Fe=B(()=>o("span",{class:"mx-1"},"\xB7",-1)),Pe={class:"text-xxs"},Ne={key:1,class:"flex float-right flex-row gap-2 mb-4 cursor-pointer"},Oe=["innerHTML"],Ue={key:0,class:"p-2 md:p-4 user-info"},Re=["src"],We={class:"name"},He=B(()=>o("br",null,null,-1)),Ge=B(()=>o("span",{class:"mx-1"},"\xB7",-1)),Ye={class:"px-2 mt-2 md:px-4"},qe={class:"text-xs font-semibold"},Je=["id"],Ke=["id"],Qe={key:2,class:"flex flex-row justify-between"},Xe={key:0},Ze={key:1},et={key:2},tt={class:"mt-6 mb-2"},st={key:0,class:"comment-box"},ot={class:"flex flex-col"},at={class:"flex relative flex-col"},rt=["readonly","rows","placeholder"],lt={key:1,class:"p-4 mb-4 text-center rounded-md theme-color-secondary"},nt=["src"],it={class:"w-full"},ut={class:"flex justify-between"},dt={class:"comment-time"},ct={key:0,class:"hidden reactions"},mt=B(()=>o("div",{class:"flex flex-row"},null,-1)),vt=[mt],ft={key:1,class:"mt-4 w-full text-xs italic text-center"},wt={id:"chronological-modal",class:"modal work-view"},kt={__name:"FeedModalView",props:{id:{type:String,default:""},section:{type:String,default:""}},setup(l,{expose:D}){const d=l,v=re();le();const{oApiConfiguration:b,fetchOptions:c}=ne(),k=ke(b,c()),{generateArtworkThumb:_}=ie();de(()=>{d.id!==""&&U(d.id),window.addEventListener("keydown",s=>{const t=document.getElementById("chronological-modal");s.key==="Escape"&&(!t||t.style.display!="flex")&&H().closeModal(`${d.section}-modal`)})});const x=d.id==="",O=g(!0),e=g({}),M=g(!1),U=async s=>{O.value=!0,E.value=[],S.value.page=0;try{const[t,m]=await k.feedDetail({id:s});if(t.feed.artworks){t.feed.artworks.images=[];for(let y=0;y<t.feed.artworks.artwork_assets.length;y++)if(y<=3){const n=await _(t.feed.artworks.artwork_assets[y].bucket,t.feed.artworks.artwork_assets[y].filename,"feed");t.feed.artworks.images.push(n)}}e.value=t.feed,M.value=t.feed.liked,await X(s)}catch{oe()}O.value=!1},R=g(null),J=async s=>{R.value.view(s),H().openModal("chronological-modal")},K=async()=>{const[s,t]=await k.like({feedId:e.value.id});if(s){M.value=!0,e.value._count.feed_likes++;const m=document.getElementById("feedLikeButton"+e.value.id);m.classList.add("animate-bounce"),setInterval(()=>{m.classList.remove("animate-bounce")},2500)}},Q=async()=>{const[s,t]=await k.unlike({feedId:e.value.id});s&&(M.value=!1,e.value._count.feed_likes--)},E=g([]),S=g({perPage:5,page:0}),P=g([]),W=async s=>{try{const[t,m]=await k.fetchComments({feedId:s,pagination:{page:S.value.page,perPage:S.value.perPage}});return t.pagination.current_page===t.pagination.first_last.last_page?j.value=!1:j.value=!0,t.comments.forEach(y=>{P.value.push(y.id)}),t.comments}catch{}},X=async s=>{try{(await W(s)).forEach(m=>E.value.push(m))}catch{}},j=g(!1),Z=async s=>{try{S.value.page+=1,(await W(s)).forEach(m=>E.value.push(m))}catch{}},h=g(),N=200,ee=ce(()=>h.value!=null&&h.value!==""?N-h.value.length:N),I=g(!1),te=async()=>{I.value=!0;try{const[s,t,m]=await k.comment({feedId:e.value.id,comment:h.value});s&&(h.value="",E.value.splice(0,0,t),E.value.join(),P.value.splice(0,0,t.id),P.value.join())}catch{}I.value=!1};g([]);const se=g(!1),oe=()=>{se.value=!0};return g(!1),g(!1),D({view:U}),(s,t)=>{const m=ue,y=Y("auto-animate");return a(),r("div",{class:$(["z-40 work-container work-view",x?"w-full md:w-9/12 lg:w-2/5 mx-auto md:p-6 p-4 theme-color":"w-full"])},[o("div",{class:$(["w-full",{"overflow-y-scroll pr-4":x}])},[o("div",Ve,[e.value.users?(a(),r("div",Be,[f(m,{to:"/profile/"+e.value.users.username},{default:p(()=>[o("img",{class:"avatar",src:s.avatarCoverUrl(e.value.users.avatar_bucket,e.value.users.avatar_filename),onError:t[0]||(t[0]=(...n)=>s.imageLoadError&&s.imageLoadError(...n))},null,40,De)]),_:1},8,["to"]),o("div",je,[f(m,{to:"/profile/"+e.value.users.username,class:"fullname"},{default:p(()=>[C(u(e.value.users.name),1)]),_:1},8,["to"]),Ae,f(m,{to:"/profile/"+e.value.users.username,class:"username"},{default:p(()=>[C(" @"+u(e.value.users.username),1)]),_:1},8,["to"]),Fe,o("span",Pe,u(s.formatDate(e.value.created_at,!0)),1)])])):i("",!0),x?(a(),r("div",Ne,[o("div",{class:"modal-close",onClick:t[1]||(t[1]=n=>s.closeModal(l.section+"-modal"))},[f(F,{name:"i-ion-close",class:"text-2xl"})])])):i("",!0)]),e.value.text?(a(),r("div",{key:0,innerHTML:e.value.text,class:"p-4 mb-4 rounded-md theme-color"},null,8,Oe)):i("",!0),e.value.artworks?(a(),r("div",{key:1,class:$(["mb-4 w-full rounded-md",x?"theme-color-secondary":"theme-color"])},[e.value.artworks.users?(a(),r("div",Ue,[f(m,{to:"/profile/"+e.value.artworks.users.username},{default:p(()=>[o("img",{class:"avatar",src:s.avatarCoverUrl(e.value.artworks.users.avatar_bucket,e.value.artworks.users.avatar_filename),onError:t[2]||(t[2]=(...n)=>s.imageLoadError&&s.imageLoadError(...n))},null,40,Re)]),_:1},8,["to"]),o("div",We,[f(m,{to:"/profile/"+e.value.artworks.users.username,class:"fullname hover:href"},{default:p(()=>[C(u(e.value.artworks.users.name),1)]),_:1},8,["to"]),He,f(m,{to:"/profile/"+e.value.artworks.users.username,class:"hover:underline text-xxs"},{default:p(()=>[C(" @"+u(e.value.artworks.users.username),1)]),_:1},8,["to"]),Ge,f(m,{to:"/a/"+e.value.artworks.id,class:"hover:underline text-xxs"},{default:p(()=>[C(u(s.formatDate(e.value.artworks.scheduled_post?e.value.artworks.scheduled_post:e.value.artworks.created_at,!0)),1)]),_:1},8,["to"])])])):i("",!0),o("div",Ye,[o("span",qe,u(e.value.artworks.title),1),w(o("p",null,[o("span",{id:"feed-description-"+e.value.artworks.id},u(e.value.artworks.description.length>300?`${e.value.artworks.description.slice(0,300)}...`:e.value.artworks.description),9,Je),e.value.artworks.description.length>300?(a(),r("a",{key:0,id:"feed-read-more-"+e.value.artworks.id,class:"href",onClick:t[3]||(t[3]=A(n=>s.readMore(e.value.artworks.description,e.value.artworks.id,"feed-read-more-","feed-description-"),["prevent"]))},u(s.$t("readMore")),9,Ke)):i("",!0)],512),[[L,e.value.artworks.description]])]),o("div",null,[e.value.artworks&&s.isMobile()?(a(),me(m,{key:0,to:"/a/"+e.value.id,class:"cursor-pointer"},{default:p(()=>[f(G,{class:"p-2",work:e.value.artworks},null,8,["work"])]),_:1},8,["to"])):i("",!0),e.value.artworks&&!s.isMobile()?(a(),r("div",{key:1,class:"cursor-pointer",onClick:t[4]||(t[4]=A(n=>J(e.value.artworks.id),["prevent"]))},[f(G,{class:"p-2 md:p-4",work:e.value.artworks},null,8,["work"])])):i("",!0)])],2)):i("",!0),e.value._count?(a(),r("div",Qe,[e.value._count.feed_comments?(a(),r("div",Xe,[o("b",null,u(s.thousand(e.value._count.feed_comments)),1),C(" "+u(e.value._count.feed_comments>1?s.$t("count.comments"):s.$t("count.comment")),1)])):i("",!0),e.value._count.feed_comments?i("",!0):(a(),r("div",Ze)),z(v).loggedIn?(a(),r("div",et,[o("div",{class:"flex flex-row",onClick:t[5]||(t[5]=n=>M.value?Q():K())},[w(f(F,{id:"feedLikeButton"+e.value.id,name:"i-ion-heart",class:"mr-2 text-xl text-red-500 cursor-pointer hover:text-red-500"},null,8,["id"]),[[L,M.value]]),w(f(F,{name:"i-ion-heart-outline",class:"mr-2 text-xl cursor-pointer hover:text-red-500"},null,512),[[L,!M.value]]),o("span",null,u(s.thousand(e.value._count.feed_likes)),1)])])):i("",!0)])):i("",!0),o("div",tt,[z(v).loggedIn?(a(),r("div",st,[o("div",ot,[o("div",at,[w(o("textarea",{"onUpdate:modelValue":t[6]||(t[6]=n=>h.value=n),class:$(["input form-input",[{"cursor-not-allowed":I.value},{"theme-color-secondary textarea":x}]]),readonly:I.value,cols:"20",rows:h.value!=null&&h.value!=""?"6":"0",placeholder:s.$t("comments.inputPlaceholder"),maxlength:N,"data-gramm":"false"},null,10,rt),[[ve,h.value]]),w(o("span",{class:"absolute left-4 bottom-6 py-1 px-2 text-white rounded-md button-color"},u(z(ee)),513),[[L,h.value!=null&&h.value!=""]]),o("span",{class:"absolute right-2 bottom-5 py-1 px-2",onClick:t[7]||(t[7]=A(n=>te(),["prevent"]))},[w(f(F,{name:"i-ion-prism",class:"text-xl transition-all duration-100 rotate-90 cursor-pointer text-colored"},null,512),[[L,h.value!=null&&h.value!=""&&!I.value]]),w(f(ge,null,null,512),[[L,I.value]])])])])])):i("",!0),z(v).loggedIn?i("",!0):(a(),r("div",lt,u(s.$t("comments.loginOrRegisterToLeaveComment")),1))]),o("div",{class:$(["comment-content",[{"pr-3 overflow-x-hidden":x},{"mb-20":!x}]])},[(a(!0),r(T,null,V(E.value,n=>w((a(),r("div",{key:n.id,class:"flex flex-row w-full comment-item"},[f(m,{class:"mr-2",to:"/profile/"+n.users.username},{default:p(()=>[o("img",{class:"w-10 h-10 avatar",src:s.avatarCoverUrl(n.users.avatar_bucket,n.users.avatar_filename),onError:t[8]||(t[8]=(...ae)=>s.imageLoadError&&s.imageLoadError(...ae))},null,40,nt)]),_:2},1032,["to"]),o("div",it,[o("div",{class:$(["p-4 w-full rounded-md",x?"theme-color-secondary":"theme-color"])},[o("div",ut,[f(m,{to:"/profile/"+n.users.username,class:"mb-2 text-xs font-medium transition-all duration-150 cursor-pointer hover:font-bold"},{default:p(()=>[C(u(n.users.name),1)]),_:2},1032,["to"]),o("div",dt,u(s.formatDate(n.created_at,!0)),1)]),o("div",null,u(n.comment),1),z(v).loggedIn?(a(),r("div",ct,vt)):i("",!0)],2)])])),[[y]])),128)),e.value._count?w((a(),r("div",{key:0,class:"text-center capitalize href",onClick:t[9]||(t[9]=A(n=>Z(e.value.id),["prevent"]))},u(s.$t("comments.loadOlder")),513)),[[L,e.value._count.feed_comments>S.value.perPage&&j.value]]):i("",!0),w(o("div",{class:"w-full text-xs italic text-center"},u(s.$t("comments.reachedTheEnd")),513),[[L,E.value.length&&!j.value]]),z(v).loggedIn&&!E.value.length?(a(),r("div",ft,u(s.$t("comments.noCommentYet")),1)):i("",!0)],2)],2),o("div",wt,[f(he,{ref_key:"sharedWorkModalViewRef",ref:R,section:"chronological"},null,512)])],2)}}},Et=q(kt,[["__scopeId","data-v-2a34bd09"]]);export{Et as F,G as I};
//# sourceMappingURL=FeedModalView.a4d61a4b.js.map
