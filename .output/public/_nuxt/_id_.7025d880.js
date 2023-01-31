import{l as H,a3 as Y,k as q,A as O,a as P,m as Q,p as G,r as h,c as x,w as f,o as l,b as e,f as n,u as t,q as _,Q as v,t as i,s as u,x as d,I as y,N as S,e as J,v as K,y as X,a2 as Z,S as tt,T as et}from"./entry.ea93fdf2.js";import{u as st,a as ot,b as at,c as rt,d as it}from"./ProBadge.e3dc9c3a.js";import{u as nt}from"./useArtTrade.b7b30853.js";import{L as lt}from"./Layout.7db09108.js";import{_ as ct}from"./LoadingEmptyErrorMessage.118d4a88.js";import{A as dt,_ as ut}from"./MiniArtworkPreview.a5a5c06c.js";import{A as mt}from"./ArtworkForm.30cc4475.js";import{_ as pt}from"./_plugin-vue_export-helper.c27b6911.js";import"./WorkList.4a26cf02.js";import"./useSetting.33e0bf81.js";import"./vue3-editor.common.8226de28.js";const D=b=>(tt("data-v-147cc18f"),b=b(),et(),b),ft={class:"flex flex-row justify-center px-2 mx-auto w-full"},_t={key:0,id:"trade-detail-section",class:"w-full"},ht={class:"flex flex-row justify-between mb-6 w-full"},wt=D(()=>e("div",null,null,-1)),vt={class:"flex flex-col gap-2 justify-between w-full md:flex-row"},bt={class:"w-auto text-center title md:text-left md:w-auto"},kt={class:"flex flex-col gap-2 w-full md:gap-6 md:flex-row h-fit"},gt={id:"host-submission",class:"w-full"},xt={class:"flex flex-col gap-2 p-4 my-2 rounded-md theme-color"},yt={class:"flex flex-row justify-between"},St={class:"flex flex-row gap-2"},At={class:"mini__artist !p-0"},Ct=["src"],$t={class:"flex flex-col mini__artist__name-username"},It={class:"badge text-xxs button-color h-fit hidden-md-flex"},Tt={class:"flex flex-col gap-1"},Et={class:"flex flex-row justify-end"},jt={class:"badge text-xxs button-color w-fit h-fit flex-md-hidden"},Ut={class:"italic"},Dt={class:"flex flex-col justify-center submission"},Lt={class:"flex flex-row justify-end"},Bt=["href"],Nt={key:0,id:"participant-submission",class:"w-full"},Wt={class:"flex flex-col gap-2 p-4 my-2 rounded-md theme-color"},Mt={class:"flex flex-row justify-between"},Rt={class:"mini__artist !p-0"},Vt=["src"],zt={class:"flex flex-col mini__artist__name-username"},Ft={class:"italic"},Ht={class:"flex flex-col justify-center submission"},Yt={class:"flex flex-row justify-end"},qt=["href"],Ot={key:1,id:"participant-submission-empty",class:"submission"},Pt={key:0,class:"p-4 my-2 text-center align-middle rounded-md theme-color"},Qt={class:"text-sm"},Gt={class:"mt-4"},Jt={class:"flex flex-row justify-between mt-2"},Kt=["value"],Xt=D(()=>e("p",{class:"mt-2 text-left"},[e("b",{class:"text-red-500"},"!"),u(" this is a public link, so make sure the participant of this trade submits their submission as soon as possible ")],-1)),Zt={key:2,id:"participate-section",class:"submission"},te={key:0,id:"participate-picker-section",class:"p-4 my-2 align-middle rounded-md theme-color"},ee={class:"title-tiny"},se={class:"flex flex-col p-4 rounded-md theme-color-secondary"},oe={class:"flex flex-row gap-2 justify-between mb-4 w-full"},ae={key:1,class:"p-4 my-2 rounded-md theme-color"},re={class:"mb-2 title"},ie={class:"form-buttons"},ne={class:"flex flex-row"},le={__name:"[id]",setup(b){const k=H(),{generateSemiCompressedArtworkUrl:A}=Y(),{oApiConfiguration:C,fetchOptions:$}=q(),L=st(C,$()),I=nt(C,$()),T=O(),B=P();Q();const{id:g}=B.params;G(()=>{N()});const r=h({isError:!1,isLoading:!0,currentActiveArtworkSelector:"new",submitting:!1}),o=h({}),N=async()=>{r.value.isLoading=!0,r.value.isError=!1;const[s,a,c]=await I.getTradeById(g);c?r.value.isError=!0:(o.value=a,a.host_submission&&(o.value.hostSubmissionSource=A(a.host_submission.artwork_assets[0].bucket,a.host_submission.artwork_assets[0].filename,!0)),a.participant_submission&&(o.value.participantSubmissionSource=A(a.participant_submission.artwork_assets[0].bucket,a.participant_submission.artwork_assets[0].filename,!0))),r.value.isLoading=!1},E=h(!1);let W;const M=s=>{const a=h(s),{copy:c}=at({source:a});c(),rt().splash(W,E,"copy-alert")},w=h(0),R=async s=>{w.value=s,await j()},m=h({show:!1,data:{},isError:!1}),j=async()=>{m.value.show=!1,m.value.isError=!1;const[s,a]=await L.getWorkById(w.value);m.value.show=!0,a?m.value.isError=!0:m.value.data=s},V=async s=>{w.value=s,await j()},z=async()=>{r.value.submitting=!0;const[s,a]=await I.participate({roomId:Number(g),workId:w.value});a||window.location.reload(!0),r.value.submitting=!1};return(s,a)=>{const c=X,U=it,F=Z("Spinner");return l(),x(lt,{"with-footer":!1,"hide-side":!0,"no-right-side":!0},{default:f(()=>[e("div",ft,[n(ct,{loading:t(r).isLoading,error:t(r).isError},null,8,["loading","error"]),!t(r).isError&&!t(r).isLoading?(l(),_("section",_t,[e("div",ht,[n(c,{to:"/art-trade",class:"light-bordered-button"},{default:f(()=>[n(v,{name:"i-typcn-arrow-back",class:"text-lg text-white hover:text-white"}),e("span",null,i(s.$t("back")),1)]),_:1}),wt]),e("div",vt,[e("h2",bt,i(t(o).title),1),t(k).user.id===t(o).host.id?(l(),_("button",{key:0,class:"danger-button",onClick:p=>null},[n(v,{name:"i-akar-icons-trash-bin"}),u(" Cancel Trade & Delete This Room ")])):d("",!0)]),e("div",kt,[e("section",gt,[e("div",xt,[e("div",yt,[e("div",St,[e("section",At,[n(c,{class:"mini__artist__avatar",to:"/u/"+t(o).host.username},{default:f(()=>[e("img",{src:s.avatarCoverUrl(t(o).host.avatar_bucket,t(o).host.avatar_filename),onError:a[0]||(a[0]=(...p)=>s.defaultCoverImage&&s.defaultCoverImage(...p))},null,40,Ct)]),_:1},8,["to"]),e("div",$t,[n(c,{to:"/u/"+t(o).host.username,class:"name"},{default:f(()=>[u(i(t(o).host.name),1)]),_:1},8,["to"]),n(c,{to:"/u/"+t(o).host.username,class:"font-normal username"},{default:f(()=>[u(" @"+i(t(o).host.username),1)]),_:1},8,["to"])])]),e("span",It,i(s.$t("artTrades.participantHost")),1)]),e("div",Tt,[e("div",Et,[e("span",jt,i(s.$t("artTrades.participantHost")),1)]),e("span",Ut,i(s.formatDate(t(o).created_at)),1)])]),e("div",Dt,[n(U,{preload:"",loading:"lazy",class:"w-full rounded-md",src:t(o).hostSubmissionSource,onError:s.imageLoadError},null,8,["src","onError"])]),e("div",Lt,[e("a",{href:"/a/"+t(o).host_submission.id,target:"_blank",class:"w-full text-right light-bordered-button md:w-fit"},[n(v,{name:"i-ci-external-link"}),u(" "+i(s.$t("artTrades.viewDetail")),1)],8,Bt)])])]),t(o).participant_submission?(l(),_("section",Nt,[e("div",Wt,[e("div",Mt,[e("section",Rt,[n(c,{class:"mini__artist__avatar",to:"/u/"+t(o).participant.username},{default:f(()=>[e("img",{src:s.avatarCoverUrl(t(o).participant.avatar_bucket,t(o).participant.avatar_filename),onError:a[1]||(a[1]=(...p)=>s.defaultCoverImage&&s.defaultCoverImage(...p))},null,40,Vt)]),_:1},8,["to"]),e("div",zt,[n(c,{to:"/u/"+t(o).participant.username,class:"name"},{default:f(()=>[u(i(t(o).participant.name),1)]),_:1},8,["to"]),n(c,{to:"/u/"+t(o).participant.username,class:"font-normal username"},{default:f(()=>[u(" @"+i(t(o).participant.username),1)]),_:1},8,["to"])])]),e("span",Ft,i(s.formatDate(t(o).updated_at)),1)]),e("div",Ht,[n(U,{preload:"",loading:"lazy",class:"w-full rounded-md",src:t(o).participantSubmissionSource,onError:s.imageLoadError},null,8,["src","onError"])]),e("div",Yt,[e("a",{href:"/a/"+t(o).participant_submission.id,target:"_blank",class:"w-full text-right light-bordered-button md:w-fit"},[n(v,{name:"i-ci-external-link"}),u(" "+i(s.$t("artTrades.viewDetail")),1)],8,qt)])])])):d("",!0),!t(o).participant&&t(k).user.id===t(o).host.id?(l(),_("section",Ot,[t(o).participant_id===null?(l(),_("div",Pt,[e("span",Qt,i(s.$t("artTrades.notSubmittedYet")),1),e("div",Gt,[e("span",null,i(s.$t("artTrades.notSubmittedDesc")),1),e("div",Jt,[e("input",{readonly:"",value:t(T).public.appUrl+"/art-trade/view/"+t(g),class:"p-3 w-full rounded-md theme-color-secondary"},null,8,Kt),e("button",{class:"icon-button",onClick:a[2]||(a[2]=p=>M(t(T).public.appUrl+"/art-trade/view/"+t(g)))},[n(v,{name:"i-icon-park-outline-copy"})])]),Xt])])):d("",!0)])):d("",!0),!t(o).participant&&t(k).user.id!==t(o).host.id?(l(),_("section",Zt,[t(m).show?d("",!0):(l(),_("section",te,[e("h2",ee,i(s.$t("artTrades.form.artwork.title")),1),e("div",se,[e("div",oe,[e("button",{class:y(["py-4 w-full rounded-md theme-color hover:theme-colored cursor-pointer text-center font-semibold text-xs",{"theme-colored":t(r).currentActiveArtworkSelector==="new"}]),onClick:a[3]||(a[3]=S(p=>t(r).currentActiveArtworkSelector="new",["prevent"]))},i(s.$t("artTrades.form.artwork.new")),3),e("button",{class:y(["py-4 w-full rounded-md theme-color hover:theme-colored cursor-pointer text-center font-semibold text-xs",{"theme-colored":t(r).currentActiveArtworkSelector==="existing"}]),onClick:a[4]||(a[4]=S(p=>t(r).currentActiveArtworkSelector="existing",["prevent"]))},i(s.$t("artTrades.form.artwork.existing")),3)]),e("section",null,[t(r).currentActiveArtworkSelector==="existing"?(l(),x(dt,{key:0,"with-title":!1,"artwork-detail":{users:{id:t(k).user.id}},"pagination-per-page":s.isMobile()?3:4,"is-picker-mode":!0,onPickerModeChangeSelected:V},null,8,["artwork-detail","pagination-per-page"])):d("",!0),t(r).currentActiveArtworkSelector==="new"&&!s.selectedArtwork?(l(),x(mt,{key:1,"is-art-trade":!0,onSendUploadedWorkId:R})):d("",!0)])])])),t(m).show?(l(),_("div",ae,[e("h2",re,i(s.$t("artTrades.form.selectedWork")),1),n(ut,{data:t(m).data},null,8,["data"])])):d("",!0),e("div",ie,[e("button",{class:y(["submit",{"pointer-events-none cursor-not-allowed":t(r).submitting},{"!disabled-button":!t(w)||t(r).submitting}]),onClick:a[5]||(a[5]=S(p=>z(),["prevent"]))},[e("div",ne,[t(r).submitting?(l(),x(F,{key:0,class:"mr-2"})):d("",!0),u(" "+i(t(r).submitting?s.$t("artTrades.form.submitting").toUpperCase():s.$t("artTrades.form.submitYourSubmission").toUpperCase()),1)])],2)])])):d("",!0)])])):d("",!0)]),J(n(ot,{id:"copy-alert",text:s.$t("linkCopied"),icon:"i-bi-check-all"},null,8,["text"]),[[K,t(E)]])]),_:1})}}},ke=pt(le,[["__scopeId","data-v-147cc18f"]]);export{ke as default};
