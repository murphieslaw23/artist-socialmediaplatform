import{e as M,d as T}from"./ProBadge.e613df9a.js";import{l as B,k as F,H as S,C as V,r as D,o as a,q as n,U,V as C,f as i,w as $,b as l,I as r,t as h,u as t,e as p,N as E,Q as w,v as g,x as v,c as q,aC as H,bU as O,y as Q}from"./entry.e59d1677.js";import{u as W}from"./useUser.6aeea3ba.js";import{_ as G}from"./_plugin-vue_export-helper.a1a6add7.js";const J={class:r(["flex flex-row w-full"])},K={class:"flex flex-col justify-between p-3 w-full text-white"},P={class:"flex flex-col gap-1"},R={class:"font-bold"},X={class:"text-xxs"},Y={class:"flex flex-row justify-between"},Z={class:"flex flex-row w-full"},A={key:0,class:"flex flex-row"},ee=["onClick"],oe=["onMouseover","onClick"],se={key:0,class:"user-latest-artworks"},le={key:0,class:"absolute top-1/2 left-1/2 z-10 text-sm font-semibold text-white transform -translate-x-1/2 -translate-y-1/2"},ae=["href"],te={__name:"UserList",props:{users:{type:Array,default:()=>{}},columnType:{type:Number,default:4}},setup(f){const j=f,_=B(),{oApiConfiguration:z,fetchOptions:N}=F(),x=W(z,N()),b=S(()=>j.users);V();const u=D(0),I=async(o,c)=>{const[m,d]=await x.follow(c);d||(b.value[o].is_following=!0)},L=async(o,c)=>{const[m,d]=await x.unfollow(c);d||(b.value[o].is_following=!1)};return(o,c)=>{const m=T,d=Q;return a(),n("div",{class:r(["grid grid-cols-1 gap-4 mb-4 w-full sm:grid-cols-2",f.columnType==3?"lg:grid-cols-3":"lg:grid-cols-4",{"lg:grid-cols-2":f.columnType==2},{"lg:grid-cols-1":f.columnType==1}])},[(a(!0),n(U,null,C(t(b),(e,y)=>(a(),n("div",{key:e.id,class:"flex flex-col w-full"},[i(d,{to:"/u/"+e.username,class:r(["",["flex object-cover flex-row rounded-md shadow-lg cursor-pointer theme-color-secondary hover:shadow-xl",{"rounded-br-none":e.artworks.length}]]),style:H(e.cover_bucket&&e.cover_filename?"background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+o.avatarCoverUrl(e.cover_bucket,e.cover_filename)+");background-size:cover;":"background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+t(O)+");background-size:cover;")},{default:$(()=>[l("div",J,[i(m,{preload:"",loading:"lazy",class:r(["avatar",e.artworks.length?"rounded-bl-none":"rounded-bl-md"]),src:o.avatarCoverUrl(e.avatar_bucket,e.avatar_filename),onError:o.defaultCoverImage},null,8,["class","src","onError"]),l("div",K,[l("div",P,[l("span",R,h(e.name.length>20?`${e.name.slice(0,20)}..`:e.name),1),l("span",X,"@"+h(e.username),1)]),l("div",Y,[l("div",Z,[t(_).loggedIn&&e.id!==t(_).user.id?(a(),n("div",A,[p(l("div",{class:"flex flex-row",onClick:E(s=>I(y,e.id),["prevent"])},[i(w,{name:"i-ri-user-add-fill",class:"text-gray-300 hover:text-white"})],8,ee),[[g,!e.is_following]]),p(l("div",{class:"flex flex-row",onMouseover:s=>u.value=e.id,onMouseout:c[0]||(c[0]=s=>u.value=0),onClick:E(s=>L(y,e.id),["prevent"])},[p(i(w,{name:"i-ri-user-follow-fill",class:"text-green-400"},null,512),[[g,t(u)!==e.id]]),p(i(w,{name:"i-ri-user-unfollow-fill",class:"text-red-400 hover:text-red-400"},null,512),[[g,t(u)&&t(u)===e.id]])],40,oe),[[g,e.is_following]])])):v("",!0)]),e.is_pro?(a(),q(M,{key:0})):v("",!0)])])])]),_:2},1032,["to","class","style"]),e.artworks?(a(),n("div",se,[(a(!0),n(U,null,C(e.artworks,(s,k)=>(a(),n("div",{key:s.id,class:r(["work-thumbnail-user-list bg-transparent rounded-md",s._count.artwork_assets>1&&o.currentWorkId!=s.id?"work-multiple":""])},[i(d,{to:"/a/"+s.id,target:"_blank",class:"w-full h-full theme-color-bg"},{default:$(()=>[l("div",{class:r(["overflow-hidden relative text-center",{"rounded-bl-md":k==0},{"rounded-br-md":k==2}])},[o.applyExplicitFilter(t(_),s.is_explicit,s.is_gore)?(a(),n("span",le,h(o.$t("explicitContent")),1)):v("",!0),l("a",{href:"/a/"+s.id,class:r([{"animate-wigglefast":o.manageMode}])},[i(m,{preload:"",loading:"lazy",class:r(["w-full h-full unselectable",{"object-cover":!o.isUncropped},o.isUncropped?"object-contain object-center h-44":"object-cover",{"blur-3xl brightness-50 unclickable":o.applyExplicitFilter(t(_),s.is_explicit,s.is_gore)}]),src:o.artworkThumb(s.artwork_assets[0].bucket,s.artwork_assets[0].filename,"thumbnail",!1),onError:o.imageLoadError},null,8,["class","src","onError"])],10,ae)],2)]),_:2},1032,["to"])],2))),128))])):v("",!0)]))),128))],2)}}},de=G(te,[["__scopeId","data-v-04da1deb"]]);export{de as U};
