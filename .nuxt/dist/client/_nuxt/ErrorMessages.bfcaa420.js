import{B as I,e as m,f as w,R as g,s as V,v,o as b,l as A,m as R,b as L,p as O,t as q}from"./entry.6223ed1a.js";import{S as T}from"./Spinner.970c3495.js";const f=function(l){return{createNewReport:async(e,t={})=>{const s="/reports",n=new URL(s,"https://example.com");let o;l&&(o=l.baseOptions);const c={method:"POST",...o,...t},r={},a={};r["Content-Type"]="application/json";const p=new URLSearchParams(n.search);for(const i in a)p.set(i,a[i]);for(const i in t.params)p.set(i,t.params[i]);n.search=new URLSearchParams(p).toString();let u=o&&o.headers?o.headers:{};c.headers={...r,...u,...t.headers};const h=typeof e!="string"||c.headers["Content-Type"]==="application/json";return c.data=h?JSON.stringify(e!==void 0?e:{}):e||"",{url:n.pathname+n.search+n.hash,options:c}},getReportById:async(e,t={})=>{if(e==null)throw new g("reportId","Required parameter reportId was null or undefined when calling getReportById.");const s="/reports/{reportId}".replace("{reportId}",encodeURIComponent(String(e))),n=new URL(s,"https://example.com");let o;l&&(o=l.baseOptions);const c={method:"GET",...o,...t},r={},a={},p=new URLSearchParams(n.search);for(const h in a)p.set(h,a[h]);for(const h in t.params)p.set(h,t.params[h]);n.search=new URLSearchParams(p).toString();let u=o&&o.headers?o.headers:{};return c.headers={...r,...u,...t.headers},{url:n.pathname+n.search+n.hash,options:c}},getReportStatus:async(e,t,s={})=>{if(e==null)throw new g("type","Required parameter type was null or undefined when calling getReportStatus.");if(t==null)throw new g("postId","Required parameter postId was null or undefined when calling getReportStatus.");const n="/reports/status/{type}/{postId}".replace("{type}",encodeURIComponent(String(e))).replace("{postId}",encodeURIComponent(String(t))),o=new URL(n,"https://example.com");let c;l&&(c=l.baseOptions);const r={method:"GET",...c,...s},a={},p={},u=new URLSearchParams(o.search);for(const i in p)u.set(i,p[i]);for(const i in s.params)u.set(i,s.params[i]);o.search=new URLSearchParams(u).toString();let h=c&&c.headers?c.headers:{};return r.headers={...a,...h,...s.headers},{url:o.pathname+o.search+o.hash,options:r}},getReports:async(e,t,s,n,o,c,r,a={})=>{if(e==null)throw new g("page","Required parameter page was null or undefined when calling getReports.");if(t==null)throw new g("perPage","Required parameter perPage was null or undefined when calling getReports.");const p="/reports",u=new URL(p,"https://example.com");let h;l&&(h=l.baseOptions);const i={method:"GET",...h,...a},B={},d={};s!==void 0&&(d.status=s),n!==void 0&&(d.created_at_from=n),o!==void 0&&(d.created_at_to=o),c!==void 0&&(d.user_id=c),r!==void 0&&(d.reasons=r),e!==void 0&&(d.page=e),t!==void 0&&(d.per_page=t);const x=new URLSearchParams(u.search);for(const y in d)x.set(y,d[y]);for(const y in a.params)x.set(y,a.params[y]);u.search=new URLSearchParams(x).toString();let U=h&&h.headers?h.headers:{};return i.headers={...B,...U,...a.headers},{url:u.pathname+u.search+u.hash,options:i}},reviewReport:async(e,t={})=>{const s="/reports/review",n=new URL(s,"https://example.com");let o;l&&(o=l.baseOptions);const c={method:"POST",...o,...t},r={},a={};r["Content-Type"]="application/json";const p=new URLSearchParams(n.search);for(const i in a)p.set(i,a[i]);for(const i in t.params)p.set(i,t.params[i]);n.search=new URLSearchParams(p).toString();let u=o&&o.headers?o.headers:{};c.headers={...r,...u,...t.headers};const h=typeof e!="string"||c.headers["Content-Type"]==="application/json";return c.data=h?JSON.stringify(e!==void 0?e:{}):e||"",{url:n.pathname+n.search+n.hash,options:c}}}},S=function(l){return{async createNewReport(e,t){const s=await f(l).createNewReport(e,t);return(n=m,o=w)=>{const c={...s.options,url:o+s.url};return n.request(c)}},async getReportById(e,t){const s=await f(l).getReportById(e,t);return(n=m,o=w)=>{const c={...s.options,url:o+s.url};return n.request(c)}},async getReportStatus(e,t,s){const n=await f(l).getReportStatus(e,t,s);return(o=m,c=w)=>{const r={...n.options,url:c+n.url};return o.request(r)}},async getReports(e,t,s,n,o,c,r,a){const p=await f(l).getReports(e,t,s,n,o,c,r,a);return(u=m,h=w)=>{const i={...p.options,url:h+p.url};return u.request(i)}},async reviewReport(e,t){const s=await f(l).reviewReport(e,t);return(n=m,o=w)=>{const c={...s.options,url:o+s.url};return n.request(c)}}}};class P extends I{async createNewReport(e,t){return S(this.configuration).createNewReport(e,t).then(s=>s(this.axios,this.basePath))}async getReportById(e,t){return S(this.configuration).getReportById(e,t).then(s=>s(this.axios,this.basePath))}async getReportStatus(e,t,s){return S(this.configuration).getReportStatus(e,t,s).then(n=>n(this.axios,this.basePath))}async getReports(e,t,s,n,o,c,r,a){return S(this.configuration).getReports(e,t,s,n,o,c,r,a).then(p=>p(this.axios,this.basePath))}async reviewReport(e,t){return S(this.configuration).reviewReport(e,t).then(s=>s(this.axios,this.basePath))}}function H(l,e){return{getReports:async r=>{try{const{data:a}=await new P(l).getReports(r.pagination.page,r.pagination.perPage,r.status,r.createdAtFrom,r.createdAtTo,r.userId,r.reasons,e);return[a.data.reports,a.data.pagination,null]}catch(a){return[null,null,a]}},getReportById:async r=>{try{const{data:a}=await new P(l).getReportById(r.reportId,e);return[a.data.report,null]}catch(a){return[null,a]}},createNewReport:async r=>{try{const{data:a}=await new P(l).createNewReport({type:r.type,post_id:r.postId,reasons:r.reasons,description:r.description},e);return[a.success,a.data.report,null]}catch(a){return[!1,null,a]}},reviewReport:async r=>{try{const{data:a}=await new P(l).reviewReport({report_id:r.reportId,response:r.response?1:0,response_description:r.responseDescription},e);return[a.success,null]}catch(a){return[!1,a]}},getReportStatus:async r=>{try{const{data:a}=await new P(l).getReportStatus(r.type,r.postId,e);return[a.data.report,null]}catch(a){return[null,a]}}}}const k={class:"p-4 text-center rounded-md message theme-color-secondary"},N={class:"flex flex-row justify-center"},j=R("b",{class:"mr-1"},"(\u2022\u25E1\u2022)",-1),E=R("b",null,"(\u3186_\u3186)",-1),F=R("b",null,"(T_T)",-1),C={__name:"ErrorMessages",props:{loading:{type:Boolean,default:!1},fetch:{type:Function,default:()=>{}},empty:{type:Boolean,default:!1},error:{type:Boolean,default:!1},customEmptyMessage:{type:String,default:""}},setup(l){return(e,t)=>V((b(),A("div",k,[V(R("span",N,[L(T,{class:"mr-2"}),j,O(" "+q(e.$t("loadingPleaseWait")),1)],512),[[v,l.loading]]),V(R("span",null,[E,O(" "+q(e.$t("nothingToShow")),1)],512),[[v,l.empty]]),V(R("span",null,[F,O(" "+q(e.$t("errors.somethingWentWrong"))+" ",1),R("b",{class:"cursor-pointer",onClick:t[0]||(t[0]=(...s)=>l.fetch&&l.fetch(...s))},q(e.$t("tryAgain")),1)],512),[[v,l.error&&!l.loading]])],512)),[[v,l.loading||l.empty||l.error]])}};export{C as _,H as u};
