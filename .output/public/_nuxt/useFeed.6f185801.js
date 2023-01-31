import{B as q,i as y,j as F,R as w,k as P}from"./entry.e59d1677.js";const R=function(c){return{commentFeed:async(e,a={})=>{const s="/feeds/comment",r=new URL(s,"https://example.com");let t;c&&(t=c.baseOptions);const n={method:"POST",...t,...a},d={},i={};d["Content-Type"]="application/json";const o=new URLSearchParams(r.search);for(const p in i)o.set(p,i[p]);for(const p in a.params)o.set(p,a.params[p]);r.search=new URLSearchParams(o).toString();let m=t&&t.headers?t.headers:{};n.headers={...d,...m,...a.headers};const l=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=l?JSON.stringify(e!==void 0?e:{}):e||"",{url:r.pathname+r.search+r.hash,options:n}},createFeed:async(e,a={})=>{const s="/feeds/create",r=new URL(s,"https://example.com");let t;c&&(t=c.baseOptions);const n={method:"POST",...t,...a},d={},i={};d["Content-Type"]="application/json";const o=new URLSearchParams(r.search);for(const p in i)o.set(p,i[p]);for(const p in a.params)o.set(p,a.params[p]);r.search=new URLSearchParams(o).toString();let m=t&&t.headers?t.headers:{};n.headers={...d,...m,...a.headers};const l=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=l?JSON.stringify(e!==void 0?e:{}):e||"",{url:r.pathname+r.search+r.hash,options:n}},deleteFeed:async(e,a={})=>{if(e==null)throw new w("feedId","Required parameter feedId was null or undefined when calling deleteFeed.");const s="/feeds/{feedId}".replace("{feedId}",encodeURIComponent(String(e))),r=new URL(s,"https://example.com");let t;c&&(t=c.baseOptions);const n={method:"DELETE",...t,...a},d={},i={},o=new URLSearchParams(r.search);for(const l in i)o.set(l,i[l]);for(const l in a.params)o.set(l,a.params[l]);r.search=new URLSearchParams(o).toString();let m=t&&t.headers?t.headers:{};return n.headers={...d,...m,...a.headers},{url:r.pathname+r.search+r.hash,options:n}},getFeedById:async(e,a={})=>{if(e==null)throw new w("feedId","Required parameter feedId was null or undefined when calling getFeedById.");const s="/feeds/{feedId}".replace("{feedId}",encodeURIComponent(String(e))),r=new URL(s,"https://example.com");let t;c&&(t=c.baseOptions);const n={method:"GET",...t,...a},d={},i={},o=new URLSearchParams(r.search);for(const l in i)o.set(l,i[l]);for(const l in a.params)o.set(l,a.params[l]);r.search=new URLSearchParams(o).toString();let m=t&&t.headers?t.headers:{};return n.headers={...d,...m,...a.headers},{url:r.pathname+r.search+r.hash,options:n}},getFeedComments:async(e,a,s,r={})=>{if(e==null)throw new w("feedId","Required parameter feedId was null or undefined when calling getFeedComments.");if(a==null)throw new w("page","Required parameter page was null or undefined when calling getFeedComments.");if(s==null)throw new w("perPage","Required parameter perPage was null or undefined when calling getFeedComments.");const t="/feeds/{feedId}/comments".replace("{feedId}",encodeURIComponent(String(e))),n=new URL(t,"https://example.com");let d;c&&(d=c.baseOptions);const i={method:"GET",...d,...r},o={},m={};a!==void 0&&(m.page=a),s!==void 0&&(m.per_page=s);const l=new URLSearchParams(n.search);for(const h in m)l.set(h,m[h]);for(const h in r.params)l.set(h,r.params[h]);n.search=new URLSearchParams(l).toString();let p=d&&d.headers?d.headers:{};return i.headers={...o,...p,...r.headers},{url:n.pathname+n.search+n.hash,options:i}},getFeeds:async(e,a,s,r,t,n={})=>{if(e==null)throw new w("perPage","Required parameter perPage was null or undefined when calling getFeeds.");if(a==null)throw new w("page","Required parameter page was null or undefined when calling getFeeds.");if(s==null)throw new w("fetchMode","Required parameter fetchMode was null or undefined when calling getFeeds.");const d="/feeds",i=new URL(d,"https://example.com");let o;c&&(o=c.baseOptions);const m={method:"GET",...o,...n},l={},p={};e!==void 0&&(p.per_page=e),a!==void 0&&(p.page=a),r!==void 0&&(p.mode=r),s!==void 0&&(p.fetch_mode=s),t!==void 0&&(p.show_all_text_post=t);const h=new URLSearchParams(i.search);for(const V in p)h.set(V,p[V]);for(const V in n.params)h.set(V,n.params[V]);i.search=new URLSearchParams(h).toString();let u=o&&o.headers?o.headers:{};return m.headers={...l,...u,...n.headers},{url:i.pathname+i.search+i.hash,options:m}},getFeedsByUserId:async(e,a,s,r={})=>{if(e==null)throw new w("userId","Required parameter userId was null or undefined when calling getFeedsByUserId.");if(a==null)throw new w("page","Required parameter page was null or undefined when calling getFeedsByUserId.");if(s==null)throw new w("perPage","Required parameter perPage was null or undefined when calling getFeedsByUserId.");const t="/feeds/user/{userId}".replace("{userId}",encodeURIComponent(String(e))),n=new URL(t,"https://example.com");let d;c&&(d=c.baseOptions);const i={method:"GET",...d,...r},o={},m={};a!==void 0&&(m.page=a),s!==void 0&&(m.per_page=s);const l=new URLSearchParams(n.search);for(const h in m)l.set(h,m[h]);for(const h in r.params)l.set(h,r.params[h]);n.search=new URLSearchParams(l).toString();let p=d&&d.headers?d.headers:{};return i.headers={...o,...p,...r.headers},{url:n.pathname+n.search+n.hash,options:i}},getFollowingFeed:async(e,a,s={})=>{if(e==null)throw new w("page","Required parameter page was null or undefined when calling getFollowingFeed.");if(a==null)throw new w("perPage","Required parameter perPage was null or undefined when calling getFollowingFeed.");const r="/feeds/following",t=new URL(r,"https://example.com");let n;c&&(n=c.baseOptions);const d={method:"GET",...n,...s},i={},o={};e!==void 0&&(o.page=e),a!==void 0&&(o.per_page=a);const m=new URLSearchParams(t.search);for(const p in o)m.set(p,o[p]);for(const p in s.params)m.set(p,s.params[p]);t.search=new URLSearchParams(m).toString();let l=n&&n.headers?n.headers:{};return d.headers={...i,...l,...s.headers},{url:t.pathname+t.search+t.hash,options:d}},getLatestFeeds:async(e,a,s={})=>{if(e==null)throw new w("page","Required parameter page was null or undefined when calling getLatestFeeds.");if(a==null)throw new w("perPage","Required parameter perPage was null or undefined when calling getLatestFeeds.");const r="/feeds/latest",t=new URL(r,"https://example.com");let n;c&&(n=c.baseOptions);const d={method:"GET",...n,...s},i={},o={};e!==void 0&&(o.page=e),a!==void 0&&(o.per_page=a);const m=new URLSearchParams(t.search);for(const p in o)m.set(p,o[p]);for(const p in s.params)m.set(p,s.params[p]);t.search=new URLSearchParams(m).toString();let l=n&&n.headers?n.headers:{};return d.headers={...i,...l,...s.headers},{url:t.pathname+t.search+t.hash,options:d}},likeFeed:async(e,a={})=>{if(e==null)throw new w("feedId","Required parameter feedId was null or undefined when calling likeFeed.");const s="/feeds/like/{feedId}".replace("{feedId}",encodeURIComponent(String(e))),r=new URL(s,"https://example.com");let t;c&&(t=c.baseOptions);const n={method:"POST",...t,...a},d={},i={},o=new URLSearchParams(r.search);for(const l in i)o.set(l,i[l]);for(const l in a.params)o.set(l,a.params[l]);r.search=new URLSearchParams(o).toString();let m=t&&t.headers?t.headers:{};return n.headers={...d,...m,...a.headers},{url:r.pathname+r.search+r.hash,options:n}},likeFeedComment:async(e,a={})=>{if(e==null)throw new w("commentId","Required parameter commentId was null or undefined when calling likeFeedComment.");const s="/feeds/{commentId}/like".replace("{commentId}",encodeURIComponent(String(e))),r=new URL(s,"https://example.com");let t;c&&(t=c.baseOptions);const n={method:"POST",...t,...a},d={},i={},o=new URLSearchParams(r.search);for(const l in i)o.set(l,i[l]);for(const l in a.params)o.set(l,a.params[l]);r.search=new URLSearchParams(o).toString();let m=t&&t.headers?t.headers:{};return n.headers={...d,...m,...a.headers},{url:r.pathname+r.search+r.hash,options:n}},removeFeedComment:async(e,a={})=>{if(e==null)throw new w("commentId","Required parameter commentId was null or undefined when calling removeFeedComment.");const s="/feeds/comment/{commentId}".replace("{commentId}",encodeURIComponent(String(e))),r=new URL(s,"https://example.com");let t;c&&(t=c.baseOptions);const n={method:"DELETE",...t,...a},d={},i={},o=new URLSearchParams(r.search);for(const l in i)o.set(l,i[l]);for(const l in a.params)o.set(l,a.params[l]);r.search=new URLSearchParams(o).toString();let m=t&&t.headers?t.headers:{};return n.headers={...d,...m,...a.headers},{url:r.pathname+r.search+r.hash,options:n}},unlikeFeed:async(e,a={})=>{if(e==null)throw new w("feedId","Required parameter feedId was null or undefined when calling unlikeFeed.");const s="/feeds/unlike/{feedId}".replace("{feedId}",encodeURIComponent(String(e))),r=new URL(s,"https://example.com");let t;c&&(t=c.baseOptions);const n={method:"POST",...t,...a},d={},i={},o=new URLSearchParams(r.search);for(const l in i)o.set(l,i[l]);for(const l in a.params)o.set(l,a.params[l]);r.search=new URLSearchParams(o).toString();let m=t&&t.headers?t.headers:{};return n.headers={...d,...m,...a.headers},{url:r.pathname+r.search+r.hash,options:n}},unlikeFeedComment:async(e,a={})=>{if(e==null)throw new w("commentId","Required parameter commentId was null or undefined when calling unlikeFeedComment.");const s="/feeds/{commentId}/unlike".replace("{commentId}",encodeURIComponent(String(e))),r=new URL(s,"https://example.com");let t;c&&(t=c.baseOptions);const n={method:"POST",...t,...a},d={},i={},o=new URLSearchParams(r.search);for(const l in i)o.set(l,i[l]);for(const l in a.params)o.set(l,a.params[l]);r.search=new URLSearchParams(o).toString();let m=t&&t.headers?t.headers:{};return n.headers={...d,...m,...a.headers},{url:r.pathname+r.search+r.hash,options:n}},updateFeedPost:async(e,a={})=>{const s="/feeds/update",r=new URL(s,"https://example.com");let t;c&&(t=c.baseOptions);const n={method:"POST",...t,...a},d={},i={};d["Content-Type"]="application/json";const o=new URLSearchParams(r.search);for(const p in i)o.set(p,i[p]);for(const p in a.params)o.set(p,a.params[p]);r.search=new URLSearchParams(o).toString();let m=t&&t.headers?t.headers:{};n.headers={...d,...m,...a.headers};const l=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=l?JSON.stringify(e!==void 0?e:{}):e||"",{url:r.pathname+r.search+r.hash,options:n}}}},g=function(c){return{async commentFeed(e,a){const s=await R(c).commentFeed(e,a);return(r=y,t=F)=>{const n={...s.options,url:t+s.url};return r.request(n)}},async createFeed(e,a){const s=await R(c).createFeed(e,a);return(r=y,t=F)=>{const n={...s.options,url:t+s.url};return r.request(n)}},async deleteFeed(e,a){const s=await R(c).deleteFeed(e,a);return(r=y,t=F)=>{const n={...s.options,url:t+s.url};return r.request(n)}},async getFeedById(e,a){const s=await R(c).getFeedById(e,a);return(r=y,t=F)=>{const n={...s.options,url:t+s.url};return r.request(n)}},async getFeedComments(e,a,s,r){const t=await R(c).getFeedComments(e,a,s,r);return(n=y,d=F)=>{const i={...t.options,url:d+t.url};return n.request(i)}},async getFeeds(e,a,s,r,t,n){const d=await R(c).getFeeds(e,a,s,r,t,n);return(i=y,o=F)=>{const m={...d.options,url:o+d.url};return i.request(m)}},async getFeedsByUserId(e,a,s,r){const t=await R(c).getFeedsByUserId(e,a,s,r);return(n=y,d=F)=>{const i={...t.options,url:d+t.url};return n.request(i)}},async getFollowingFeed(e,a,s){const r=await R(c).getFollowingFeed(e,a,s);return(t=y,n=F)=>{const d={...r.options,url:n+r.url};return t.request(d)}},async getLatestFeeds(e,a,s){const r=await R(c).getLatestFeeds(e,a,s);return(t=y,n=F)=>{const d={...r.options,url:n+r.url};return t.request(d)}},async likeFeed(e,a){const s=await R(c).likeFeed(e,a);return(r=y,t=F)=>{const n={...s.options,url:t+s.url};return r.request(n)}},async likeFeedComment(e,a){const s=await R(c).likeFeedComment(e,a);return(r=y,t=F)=>{const n={...s.options,url:t+s.url};return r.request(n)}},async removeFeedComment(e,a){const s=await R(c).removeFeedComment(e,a);return(r=y,t=F)=>{const n={...s.options,url:t+s.url};return r.request(n)}},async unlikeFeed(e,a){const s=await R(c).unlikeFeed(e,a);return(r=y,t=F)=>{const n={...s.options,url:t+s.url};return r.request(n)}},async unlikeFeedComment(e,a){const s=await R(c).unlikeFeedComment(e,a);return(r=y,t=F)=>{const n={...s.options,url:t+s.url};return r.request(n)}},async updateFeedPost(e,a){const s=await R(c).updateFeedPost(e,a);return(r=y,t=F)=>{const n={...s.options,url:t+s.url};return r.request(n)}}}};class f extends q{async commentFeed(e,a){return g(this.configuration).commentFeed(e,a).then(s=>s(this.axios,this.basePath))}async createFeed(e,a){return g(this.configuration).createFeed(e,a).then(s=>s(this.axios,this.basePath))}async deleteFeed(e,a){return g(this.configuration).deleteFeed(e,a).then(s=>s(this.axios,this.basePath))}async getFeedById(e,a){return g(this.configuration).getFeedById(e,a).then(s=>s(this.axios,this.basePath))}async getFeedComments(e,a,s,r){return g(this.configuration).getFeedComments(e,a,s,r).then(t=>t(this.axios,this.basePath))}async getFeeds(e,a,s,r,t,n){return g(this.configuration).getFeeds(e,a,s,r,t,n).then(d=>d(this.axios,this.basePath))}async getFeedsByUserId(e,a,s,r){return g(this.configuration).getFeedsByUserId(e,a,s,r).then(t=>t(this.axios,this.basePath))}async getFollowingFeed(e,a,s){return g(this.configuration).getFollowingFeed(e,a,s).then(r=>r(this.axios,this.basePath))}async getLatestFeeds(e,a,s){return g(this.configuration).getLatestFeeds(e,a,s).then(r=>r(this.axios,this.basePath))}async likeFeed(e,a){return g(this.configuration).likeFeed(e,a).then(s=>s(this.axios,this.basePath))}async likeFeedComment(e,a){return g(this.configuration).likeFeedComment(e,a).then(s=>s(this.axios,this.basePath))}async removeFeedComment(e,a){return g(this.configuration).removeFeedComment(e,a).then(s=>s(this.axios,this.basePath))}async unlikeFeed(e,a){return g(this.configuration).unlikeFeed(e,a).then(s=>s(this.axios,this.basePath))}async unlikeFeedComment(e,a){return g(this.configuration).unlikeFeedComment(e,a).then(s=>s(this.axios,this.basePath))}async updateFeedPost(e,a){return g(this.configuration).updateFeedPost(e,a).then(s=>s(this.axios,this.basePath))}}function S(c,e){return{postFeed:async h=>{try{const{data:u}=await new f(c).createFeed({text:h.text,visibility:h.visibility,who_can_reply:h.whoCanReply},e);return[u.success,u.data,null]}catch(u){return[null,null,P().consumeReadableStreamError(u)]}},shareArtworkToFeed:async h=>{try{const{data:u}=await new f(c).createFeed({text:h.text,visibility:h.visibility,who_can_reply:h.whoCanReply,work_id:h.workId},e);return[u.success,u.data,null]}catch(u){return[null,null,P().consumeReadableStreamError(u)]}},feedDetail:async h=>{try{const{data:u}=await new f(c).getFeedById(h.id,e);return[u.data,null]}catch(u){return[null,P().consumeReadableStreamError(u)]}},getChronologicalFeeds:async h=>{try{const{data:u}=await new f(c).getFeeds(h.pagination.perPage,h.pagination.page,h.fetchMode,h.explicitMode,h.showAllTextPost,e);return[u.data,null]}catch(u){return[null,P().consumeReadableStreamError(u)]}},getFeedByUserId:async h=>{try{const{data:u}=await new f(c).getFeedsByUserId(h.userId,h.pagination.page,h.pagination.perPage,e);return[u.data,null]}catch(u){return[null,P().consumeReadableStreamError(u)]}},like:async h=>{try{const{data:u}=await new f(c).likeFeed(h.feedId,e);return[u.success,null]}catch(u){return[null,P().consumeReadableStreamError(u)]}},unlike:async h=>{try{const{data:u}=await new f(c).unlikeFeed(h.feedId,e);return[u.success,null]}catch(u){return[null,P().consumeReadableStreamError(u)]}},fetchComments:async h=>{try{const{data:u}=await new f(c).getFeedComments(h.feedId,h.pagination.page,h.pagination.perPage,e);return[u.data,null]}catch(u){return[null,P().consumeReadableStreamError(u)]}},comment:async h=>{try{const{data:u}=await new f(c).commentFeed({feed_id:h.feedId,comment:h.comment},e);return[u.success,u.data,null]}catch(u){return[null,null,P().consumeReadableStreamError(u)]}},removeComment:async h=>{try{const{data:u}=await new f(c).removeFeedComment(h,e);return[u.success,null]}catch(u){return[null,P().consumeReadableStreamError(u)]}},remove:async h=>{try{const{data:u}=await new f(c).deleteFeed(h,e);return[u.success,null]}catch(u){return[!1,P().consumeReadableStreamError(u)]}}}}export{S as u};
