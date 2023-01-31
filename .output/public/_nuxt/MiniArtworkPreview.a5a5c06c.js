import{k as T,r as u,p as H,P as V,o as i,q as c,b as d,s as b,t as v,c as W,w as B,x as f,f as o,Q as y,u as a,e as D,v as N,I,y as O}from"./entry.ea93fdf2.js";import{u as j,d as z}from"./ProBadge.e3dc9c3a.js";import{W as F}from"./WorkList.4a26cf02.js";import{_ as U}from"./LoadingEmptyErrorMessage.118d4a88.js";import{_ as q}from"./_plugin-vue_export-helper.c27b6911.js";const Q={class:"artist-works"},Y={key:0,class:"heading"},G={class:"title"},J={key:1,class:"pagination-controller"},K={__name:"ArtistWorks",props:{withTitle:{type:Boolean,default:!0},isPickerMode:{type:Boolean,default:!1},artworkDetail:{type:Object,default(){return{}}},keepArtistPageNumber:{type:Boolean,default:!1},view:{type:Function,default:()=>({})},isHref:{type:Boolean,default:!1},paginationPerPage:{type:Number,default:4}},emits:["pickerModeChangeSelected"],setup(e,{emit:k}){const m=e,h=m.artworkDetail,{oApiConfiguration:$,fetchOptions:C}=T(),M=j($,C()),P=u(null);H(()=>{m.keepArtistPageNumber||(t.page=-1),x(h.users.id)});const n=u(!0),_=u([]),t=V({page:0,perPage:m.paginationPerPage,options:{nextPrevLoading:!1,disableArtistNextButton:!0,disableArtistPrevButton:!0}}),A=u(!0),x=async(r,l)=>{n.value=!0,t.options.nextPrevLoading=!0,r!==P.value&&(P.value=r,t.page=-1),l==="prev"?t.page-=1:t.page+=1;const[p,s,S]=await M.getUserArtworks({userId:r,pagination:{page:t.page,perPage:t.perPage}});S?(n.value=!1,L()):s.record_total===0?g.value=!0:(s.total_page===0&&(A.value=!1),s.next_previous.prev_page===null||s.next_previous.prev_page===void 0?t.options.disableArtistPrevButton=!0:t.options.disableArtistPrevButton=!1,s.next_previous.next_page===null||s.next_previous.next_page===void 0?t.options.disableArtistNextButton=!0:t.options.disableArtistNextButton=!1,_.value=p),t.options.nextPrevLoading=!1,n.value=!1},g=u(!1),w=u(!1),L=()=>{w.value=!0},E=r=>{k("pickerModeChangeSelected",r)};return(r,l)=>{const p=O;return i(),c("div",Q,[e.withTitle?(i(),c("div",Y,[d("span",G,[b(v(r.$t("artworks.moreArtworkBy"))+" ",1),e.artworkDetail.users?(i(),W(p,{key:0,to:"/u/"+e.artworkDetail.users.username,class:"text-color-bright"},{default:B(()=>[b(" @"+v(e.artworkDetail.users.username)+" <"+v(e.artworkDetail.users.name)+"> ",1)]),_:1},8,["to"])):f("",!0)]),o(p,{to:"/u/"+e.artworkDetail.users.username,target:"_blank",class:"flex flex-row cursor-pointer"},{default:B(()=>[o(y,{name:"i-ci-external-link"})]),_:1},8,["to"])])):f("",!0),o(U,{loading:a(n),error:a(w),empty:a(g),"empty-message":r.$t("artworks.youDontHaveArtworkYet"),class:"mt-2"},null,8,["loading","error","empty","empty-message"]),D(o(F,{class:I(["gap-2 mt-4 md:gap-4",[a(t).options.nextPrevLoading?"animate-pulse":"","grid-cols-"+e.paginationPerPage]]),"section-class":"works",works:a(_),view:e.view,"is-href":e.isHref,"is-mini-list":!0,"current-work-id":e.artworkDetail.id,"is-picker-mode":e.isPickerMode,onPickerModeChangeSelected:E},null,8,["class","works","view","is-href","current-work-id","is-picker-mode"]),[[N,!a(n)&&!a(g)&&!a(w)]]),e.artworkDetail.users&&a(A)&&!a(g)&&!a(w)?D((i(),c("div",J,[d("span",{onClick:l[0]||(l[0]=s=>a(t).options.disableArtistPrevButton?null:x(e.artworkDetail.users.id,"prev"))},[o(y,{name:"i-ion-chevron-back"})]),d("span",{onClick:l[1]||(l[1]=s=>a(t).options.disableArtistNextButton?null:x(e.artworkDetail.users.id,"next"))},[o(y,{name:"i-ion-chevron-forward"})])],512)),[[N,!a(n)]]):f("",!0)])}}},ne=q(K,[["__scopeId","data-v-2913f714"]]),R=["href"],X={key:0},Z={key:1,class:"w-full md:w-2/3"},ee={class:"title-tiny"},te=["innerHTML"],le={__name:"MiniArtworkPreview",props:{data:{type:Object,default:()=>{}},workId:{type:Number,default:0}},setup(e){return(k,m)=>{const h=z;return i(),c("a",{href:"/a/"+(e.workId??e.data.id),target:"_blank",class:"flex flex-col gap-2 w-full md:flex-row"},[e.data.artwork_assets?(i(),c("div",X,[o(h,{preload:"",loading:"lazy",class:"w-full rounded-md md:w-40",src:k.artworkThumb(e.data.artwork_assets[0].bucket,e.data.artwork_assets[0].filename,"thumbnail",!1),onError:k.imageLoadError},null,8,["src","onError"])])):f("",!0),e.data.title?(i(),c("div",Z,[d("h2",ee,v(e.data.title),1),d("p",{innerHTML:e.data.description.length>200?e.data.description.slice(0,200)+"..":e.data.description},null,8,te)])):f("",!0)],8,R)}}};export{ne as A,le as _};
