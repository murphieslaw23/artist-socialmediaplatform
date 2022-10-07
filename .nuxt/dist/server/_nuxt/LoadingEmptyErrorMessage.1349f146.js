import{B as I,a as y,b as w,R as g}from"../server.mjs";import{withDirectives as V,openBlock as b,createElementBlock as A,normalizeClass as L,createElementVNode as R,createVNode as N,createTextVNode as x,toDisplayString as q,vShow as v}from"vue";import{S as T}from"./Spinner.5884352f.js";const f=function(c){return{createNewReport:async(e,t={})=>{const n="/reports",r=new URL(n,"https://example.com");let a;c&&(a=c.baseOptions);const l={method:"POST",...a,...t},s={},o={};s["Content-Type"]="application/json";const p=new URLSearchParams(r.search);for(const i in o)p.set(i,o[i]);for(const i in t.params)p.set(i,t.params[i]);r.search=new URLSearchParams(p).toString();let u=a&&a.headers?a.headers:{};l.headers={...s,...u,...t.headers};const h=typeof e!="string"||l.headers["Content-Type"]==="application/json";return l.data=h?JSON.stringify(e!==void 0?e:{}):e||"",{url:r.pathname+r.search+r.hash,options:l}},getReportById:async(e,t={})=>{if(e==null)throw new g("reportId","Required parameter reportId was null or undefined when calling getReportById.");const n="/reports/{reportId}".replace("{reportId}",encodeURIComponent(String(e))),r=new URL(n,"https://example.com");let a;c&&(a=c.baseOptions);const l={method:"GET",...a,...t},s={},o={},p=new URLSearchParams(r.search);for(const h in o)p.set(h,o[h]);for(const h in t.params)p.set(h,t.params[h]);r.search=new URLSearchParams(p).toString();let u=a&&a.headers?a.headers:{};return l.headers={...s,...u,...t.headers},{url:r.pathname+r.search+r.hash,options:l}},getReportStatus:async(e,t,n={})=>{if(e==null)throw new g("type","Required parameter type was null or undefined when calling getReportStatus.");if(t==null)throw new g("postId","Required parameter postId was null or undefined when calling getReportStatus.");const r="/reports/status/{type}/{postId}".replace("{type}",encodeURIComponent(String(e))).replace("{postId}",encodeURIComponent(String(t))),a=new URL(r,"https://example.com");let l;c&&(l=c.baseOptions);const s={method:"GET",...l,...n},o={},p={},u=new URLSearchParams(a.search);for(const i in p)u.set(i,p[i]);for(const i in n.params)u.set(i,n.params[i]);a.search=new URLSearchParams(u).toString();let h=l&&l.headers?l.headers:{};return s.headers={...o,...h,...n.headers},{url:a.pathname+a.search+a.hash,options:s}},getReports:async(e,t,n,r,a,l,s,o={})=>{if(e==null)throw new g("page","Required parameter page was null or undefined when calling getReports.");if(t==null)throw new g("perPage","Required parameter perPage was null or undefined when calling getReports.");const p="/reports",u=new URL(p,"https://example.com");let h;c&&(h=c.baseOptions);const i={method:"GET",...h,...o},U={},d={};n!==void 0&&(d.status=n),r!==void 0&&(d.created_at_from=r),a!==void 0&&(d.created_at_to=a),l!==void 0&&(d.user_id=l),s!==void 0&&(d.reasons=s),e!==void 0&&(d.page=e),t!==void 0&&(d.per_page=t);const O=new URLSearchParams(u.search);for(const m in d)O.set(m,d[m]);for(const m in o.params)O.set(m,o.params[m]);u.search=new URLSearchParams(O).toString();let B=h&&h.headers?h.headers:{};return i.headers={...U,...B,...o.headers},{url:u.pathname+u.search+u.hash,options:i}},reviewReport:async(e,t={})=>{const n="/reports/review",r=new URL(n,"https://example.com");let a;c&&(a=c.baseOptions);const l={method:"POST",...a,...t},s={},o={};s["Content-Type"]="application/json";const p=new URLSearchParams(r.search);for(const i in o)p.set(i,o[i]);for(const i in t.params)p.set(i,t.params[i]);r.search=new URLSearchParams(p).toString();let u=a&&a.headers?a.headers:{};l.headers={...s,...u,...t.headers};const h=typeof e!="string"||l.headers["Content-Type"]==="application/json";return l.data=h?JSON.stringify(e!==void 0?e:{}):e||"",{url:r.pathname+r.search+r.hash,options:l}}}},S=function(c){return{async createNewReport(e,t){const n=await f(c).createNewReport(e,t);return(r=y,a=w)=>{const l={...n.options,url:a+n.url};return r.request(l)}},async getReportById(e,t){const n=await f(c).getReportById(e,t);return(r=y,a=w)=>{const l={...n.options,url:a+n.url};return r.request(l)}},async getReportStatus(e,t,n){const r=await f(c).getReportStatus(e,t,n);return(a=y,l=w)=>{const s={...r.options,url:l+r.url};return a.request(s)}},async getReports(e,t,n,r,a,l,s,o){const p=await f(c).getReports(e,t,n,r,a,l,s,o);return(u=y,h=w)=>{const i={...p.options,url:h+p.url};return u.request(i)}},async reviewReport(e,t){const n=await f(c).reviewReport(e,t);return(r=y,a=w)=>{const l={...n.options,url:a+n.url};return r.request(l)}}}};class P extends I{async createNewReport(e,t){return S(this.configuration).createNewReport(e,t).then(n=>n(this.axios,this.basePath))}async getReportById(e,t){return S(this.configuration).getReportById(e,t).then(n=>n(this.axios,this.basePath))}async getReportStatus(e,t,n){return S(this.configuration).getReportStatus(e,t,n).then(r=>r(this.axios,this.basePath))}async getReports(e,t,n,r,a,l,s,o){return S(this.configuration).getReports(e,t,n,r,a,l,s,o).then(p=>p(this.axios,this.basePath))}async reviewReport(e,t){return S(this.configuration).reviewReport(e,t).then(n=>n(this.axios,this.basePath))}}function M(c,e){return{getReports:async s=>{try{const{data:o}=await new P(c).getReports(s.pagination.page,s.pagination.perPage,s.status,s.createdAtFrom,s.createdAtTo,s.userId,s.reasons,e);return[o.data.reports,o.data.pagination,null]}catch(o){return[null,null,o]}},getReportById:async s=>{try{const{data:o}=await new P(c).getReportById(s.reportId,e);return[o.data.report,null]}catch(o){return[null,o]}},createNewReport:async s=>{try{const{data:o}=await new P(c).createNewReport({type:s.type,post_id:s.postId,reasons:s.reasons,description:s.description},e);return[o.success,o.data.report,null]}catch(o){return[!1,null,o]}},reviewReport:async s=>{try{const{data:o}=await new P(c).reviewReport({report_id:s.reportId,response:s.response?1:0,response_description:s.responseDescription},e);return[o.success,null]}catch(o){return[!1,o]}},getReportStatus:async s=>{try{const{data:o}=await new P(c).getReportStatus(s.type,s.postId,e);return[o.data.report,null]}catch(o){return[null,o]}}}}const k={class:"flex flex-row justify-center"},j=R("b",{class:"mr-1"},"(\u2022\u25E1\u2022)",-1),E=R("b",null,"(\u3186_\u3186)",-1),F=R("b",null,"(T_T)",-1),Q={__name:"LoadingEmptyErrorMessage",props:{loading:{type:Boolean,default:!1},fetch:{type:Function,default:()=>{}},empty:{type:Boolean,default:!1},emptyMessage:{type:String,default:"Nothing to show"},error:{type:Boolean,default:!1},customEmptyMessage:{type:String,default:""}},setup(c){const e=c;return(t,n)=>{var r;return V((b(),A("div",{class:L(["p-4 text-center rounded-md message",t.isMobile()?"theme-color-secondary":"theme-color"])},[V(R("span",k,[N(T,{class:"mr-2"}),j,x(" "+q(t.$t("loadingPleaseWait")),1)],512),[[v,c.loading]]),V(R("span",null,[E,x(" "+q((r=e.emptyMessage)!=null?r:t.$t("nothingToShow")),1)],512),[[v,c.empty]]),V(R("span",null,[F,x(" "+q(t.$t("errors.somethingWentWrong"))+" ",1),R("b",{class:"cursor-pointer",onClick:n[0]||(n[0]=(...a)=>c.fetch&&c.fetch(...a))},q(t.$t("tryAgain")),1)],512),[[v,c.error&&!c.loading]])],2)),[[v,c.loading||c.empty||c.error]])}}};export{Q as _,M as u};
//# sourceMappingURL=LoadingEmptyErrorMessage.1349f146.js.map
