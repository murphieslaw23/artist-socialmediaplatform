import{B as x,i as w,j as m,R as y,k as g}from"./entry.e59d1677.js";const S=function(l){return{createNewReport:async(e,r={})=>{const n="/reports",o=new URL(n,"https://example.com");let s;l&&(s=l.baseOptions);const c={method:"POST",...s,...r},t={},a={};t["Content-Type"]="application/json";const p=new URLSearchParams(o.search);for(const i in a)p.set(i,a[i]);for(const i in r.params)p.set(i,r.params[i]);o.search=new URLSearchParams(p).toString();let u=s&&s.headers?s.headers:{};c.headers={...t,...u,...r.headers};const h=typeof e!="string"||c.headers["Content-Type"]==="application/json";return c.data=h?JSON.stringify(e!==void 0?e:{}):e||"",{url:o.pathname+o.search+o.hash,options:c}},getReportById:async(e,r={})=>{if(e==null)throw new y("reportId","Required parameter reportId was null or undefined when calling getReportById.");const n="/reports/{reportId}".replace("{reportId}",encodeURIComponent(String(e))),o=new URL(n,"https://example.com");let s;l&&(s=l.baseOptions);const c={method:"GET",...s,...r},t={},a={},p=new URLSearchParams(o.search);for(const h in a)p.set(h,a[h]);for(const h in r.params)p.set(h,r.params[h]);o.search=new URLSearchParams(p).toString();let u=s&&s.headers?s.headers:{};return c.headers={...t,...u,...r.headers},{url:o.pathname+o.search+o.hash,options:c}},getReportStatus:async(e,r,n={})=>{if(e==null)throw new y("type","Required parameter type was null or undefined when calling getReportStatus.");if(r==null)throw new y("postId","Required parameter postId was null or undefined when calling getReportStatus.");const o="/reports/status/{type}/{postId}".replace("{type}",encodeURIComponent(String(e))).replace("{postId}",encodeURIComponent(String(r))),s=new URL(o,"https://example.com");let c;l&&(c=l.baseOptions);const t={method:"GET",...c,...n},a={},p={},u=new URLSearchParams(s.search);for(const i in p)u.set(i,p[i]);for(const i in n.params)u.set(i,n.params[i]);s.search=new URLSearchParams(u).toString();let h=c&&c.headers?c.headers:{};return t.headers={...a,...h,...n.headers},{url:s.pathname+s.search+s.hash,options:t}},getReports:async(e,r,n,o,s,c,t,a={})=>{if(e==null)throw new y("page","Required parameter page was null or undefined when calling getReports.");if(r==null)throw new y("perPage","Required parameter perPage was null or undefined when calling getReports.");const p="/reports",u=new URL(p,"https://example.com");let h;l&&(h=l.baseOptions);const i={method:"GET",...h,...a},q={},d={};n!==void 0&&(d.status=n),o!==void 0&&(d.created_at_from=o),s!==void 0&&(d.created_at_to=s),c!==void 0&&(d.user_id=c),t!==void 0&&(d.reasons=t),e!==void 0&&(d.page=e),r!==void 0&&(d.per_page=r);const f=new URLSearchParams(u.search);for(const R in d)f.set(R,d[R]);for(const R in a.params)f.set(R,a.params[R]);u.search=new URLSearchParams(f).toString();let O=h&&h.headers?h.headers:{};return i.headers={...q,...O,...a.headers},{url:u.pathname+u.search+u.hash,options:i}},reviewReport:async(e,r={})=>{const n="/reports/review",o=new URL(n,"https://example.com");let s;l&&(s=l.baseOptions);const c={method:"POST",...s,...r},t={},a={};t["Content-Type"]="application/json";const p=new URLSearchParams(o.search);for(const i in a)p.set(i,a[i]);for(const i in r.params)p.set(i,r.params[i]);o.search=new URLSearchParams(p).toString();let u=s&&s.headers?s.headers:{};c.headers={...t,...u,...r.headers};const h=typeof e!="string"||c.headers["Content-Type"]==="application/json";return c.data=h?JSON.stringify(e!==void 0?e:{}):e||"",{url:o.pathname+o.search+o.hash,options:c}}}},P=function(l){return{async createNewReport(e,r){const n=await S(l).createNewReport(e,r);return(o=w,s=m)=>{const c={...n.options,url:s+n.url};return o.request(c)}},async getReportById(e,r){const n=await S(l).getReportById(e,r);return(o=w,s=m)=>{const c={...n.options,url:s+n.url};return o.request(c)}},async getReportStatus(e,r,n){const o=await S(l).getReportStatus(e,r,n);return(s=w,c=m)=>{const t={...o.options,url:c+o.url};return s.request(t)}},async getReports(e,r,n,o,s,c,t,a){const p=await S(l).getReports(e,r,n,o,s,c,t,a);return(u=w,h=m)=>{const i={...p.options,url:h+p.url};return u.request(i)}},async reviewReport(e,r){const n=await S(l).reviewReport(e,r);return(o=w,s=m)=>{const c={...n.options,url:s+n.url};return o.request(c)}}}};class V extends x{async createNewReport(e,r){return P(this.configuration).createNewReport(e,r).then(n=>n(this.axios,this.basePath))}async getReportById(e,r){return P(this.configuration).getReportById(e,r).then(n=>n(this.axios,this.basePath))}async getReportStatus(e,r,n){return P(this.configuration).getReportStatus(e,r,n).then(o=>o(this.axios,this.basePath))}async getReports(e,r,n,o,s,c,t,a){return P(this.configuration).getReports(e,r,n,o,s,c,t,a).then(p=>p(this.axios,this.basePath))}async reviewReport(e,r){return P(this.configuration).reviewReport(e,r).then(n=>n(this.axios,this.basePath))}}function U(l,e){return{getReports:async t=>{try{const{data:a}=await new V(l).getReports(t.pagination.page,t.pagination.perPage,t.status,t.createdAtFrom,t.createdAtTo,t.userId,t.reasons,e);return[a.data.reports,a.data.pagination,null]}catch(a){return[null,null,g().consumeReadableStreamError(a)]}},getReportById:async t=>{try{const{data:a}=await new V(l).getReportById(t.reportId,e);return[a.data.report,null]}catch(a){return[null,g().consumeReadableStreamError(a)]}},createNewReport:async t=>{try{const{data:a}=await new V(l).createNewReport({type:t.type,post_id:t.postId,reasons:t.reasons,description:t.description},e);return[a.success,a.data.report,null]}catch(a){return[!1,null,g().consumeReadableStreamError(a)]}},reviewReport:async t=>{try{const{data:a}=await new V(l).reviewReport({report_id:t.reportId,response:t.response?1:0,response_description:t.responseDescription},e);return[a.success,null]}catch(a){return[!1,g().consumeReadableStreamError(a)]}},getReportStatus:async t=>{try{const{data:a}=await new V(l).getReportStatus(t.type,t.postId,e);return[a.data.report,null]}catch(a){return[null,g().consumeReadableStreamError(a)]}}}}export{U as u};
