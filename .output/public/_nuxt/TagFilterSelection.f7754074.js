import{H as v,r,a5 as h,o as f,l as y,m as a,t as n,b as _,u as b,aF as d}from"./entry.7318f8db.js";import{_ as k}from"./_plugin-vue_export-helper.a1a6add7.js";const w={class:"w-full modal-layer xl:w-3/12 lg:w-2/5"},C={class:"mb-2 text-sm"},$={class:"input-block"},T={class:"flex float-right flex-row gap-2 mt-4"},V={__name:"TagFilterSelection",emits:["apply"],setup(U,{expose:p,emit:u}){const c=v().public.apiUrl,o=r([]),i=e=>{console.log(e),o.value=e},s=r([]),m=()=>{s.value=o.value,o.value=[];const e=[];d(s.value).forEach(t=>{e.push(t.value)}),u("apply",d(s.value),e.join(","))};return p({init:i}),(e,t)=>{const g=h("tags-input");return f(),y("div",null,[a("div",{class:"hidden",onClick:t[0]||(t[0]=l=>i())}),a("div",w,[a("div",null,[a("h1",C,n(e.$t("pickUpToTags")),1),a("div",$,[_(g,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value=l),placeholder:e.$t("tags"),typeahead:!0,limit:10,"hide-input-on-limit":!0,"typeahead-style":"dropdown","typeahead-activation-threshold":3,"typeahead-show-on-focus":!0,"typeahead-hide-discard":!0,"typeahead-url":b(c)+"/artworks/tags/search?keyword=:search","add-tags-on-comma":!0},null,8,["modelValue","placeholder","typeahead-url"])]),a("div",T,[a("button",{class:"cancel-button",onClick:t[2]||(t[2]=l=>e.closeModal("tag-filter-selection-modal"))},n(e.$t("cancel")),1),a("button",{class:"primary-button",onClick:t[3]||(t[3]=l=>m())},n(e.$t("apply")),1)])])])])}}},x=k(V,[["__scopeId","data-v-abed03d6"]]);export{x as T};
