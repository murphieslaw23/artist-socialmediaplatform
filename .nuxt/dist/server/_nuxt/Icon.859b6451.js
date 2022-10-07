import{B as q,a as g,b as R,R as y,d as N}from"../server.mjs";import{openBlock as J,createElementBlock as X,normalizeClass as Y}from"vue";const b=function(o){return{deleteWork:async(e,r={})=>{const s="/artworks",a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"DELETE",...t,...r},h={},c={};h["Content-Type"]="application/json";const i=new URLSearchParams(a.search);for(const w in c)i.set(w,c[w]);for(const w in r.params)i.set(w,r.params[w]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};n.headers={...h,...u,...r.headers};const l=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=l?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}},postForm:async(e,r,s,a,t,n,h,c={})=>{const i="/artworks/post",u=new URL(i,"https://example.com");let l;o&&(l=o.baseOptions);const w={method:"POST",...l,...c},p={},P={},k=new FormData;e!==void 0&&k.append("title",e),r!==void 0&&k.append("description",r),s!==void 0&&k.append("tags",s),a!==void 0&&k.append("is_explicit",a),t!==void 0&&k.append("scheduled_post",t),n&&n.forEach(A=>{k.append("files[]",A)}),h&&h.forEach(A=>{k.append("file_order[]",A)}),p["Content-Type"]="multipart/form-data";const V=new URLSearchParams(u.search);for(const A in P)V.set(A,P[A]);for(const A in c.params)V.set(A,c.params[A]);u.search=new URLSearchParams(V).toString();let f=l&&l.headers?l.headers:{};return w.headers={...p,...f,...c.headers},w.data=k,{url:u.pathname+u.search+u.hash,options:w}},updateWork:async(e,r={})=>{const s="/artworks",a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"PATCH",...t,...r},h={},c={};h["Content-Type"]="application/json";const i=new URLSearchParams(a.search);for(const w in c)i.set(w,c[w]);for(const w in r.params)i.set(w,r.params[w]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};n.headers={...h,...u,...r.headers};const l=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=l?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}},view:async(e,r={})=>{if(e==null)throw new y("id","Required parameter id was null or undefined when calling view.");const s="/artworks/view/{id}".replace("{id}",encodeURIComponent(String(e))),a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"GET",...t,...r},h={},c={},i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}}}},C=function(o){return{async deleteWork(e,r){const s=await b(o).deleteWork(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async postForm(e,r,s,a,t,n,h,c){const i=await b(o).postForm(e,r,s,a,t,n,h,c);return(u=g,l=R)=>{const w={...i.options,url:l+i.url};return u.request(w)}},async updateWork(e,r){const s=await b(o).updateWork(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async view(e,r){const s=await b(o).view(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}}}};class T extends q{async deleteWork(e,r){return C(this.configuration).deleteWork(e,r).then(s=>s(this.axios,this.basePath))}async postForm(e,r,s,a,t,n,h,c){return C(this.configuration).postForm(e,r,s,a,t,n,h,c).then(i=>i(this.axios,this.basePath))}async updateWork(e,r){return C(this.configuration).updateWork(e,r).then(s=>s(this.axios,this.basePath))}async view(e,r){return C(this.configuration).view(e,r).then(s=>s(this.axios,this.basePath))}}const F=function(o){return{addComment:async(e,r={})=>{const s="/artworks/comments",a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"POST",...t,...r},h={},c={};h["Content-Type"]="application/json";const i=new URLSearchParams(a.search);for(const w in c)i.set(w,c[w]);for(const w in r.params)i.set(w,r.params[w]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};n.headers={...h,...u,...r.headers};const l=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=l?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}},getComments:async(e,r,s,a={})=>{if(e==null)throw new y("id","Required parameter id was null or undefined when calling getComments.");if(r==null)throw new y("perPage","Required parameter perPage was null or undefined when calling getComments.");if(s==null)throw new y("page","Required parameter page was null or undefined when calling getComments.");const t="/artworks/comments/{id}".replace("{id}",encodeURIComponent(String(e))),n=new URL(t,"https://example.com");let h;o&&(h=o.baseOptions);const c={method:"GET",...h,...a},i={},u={};r!==void 0&&(u.per_page=r),s!==void 0&&(u.page=s);const l=new URLSearchParams(n.search);for(const p in u)l.set(p,u[p]);for(const p in a.params)l.set(p,a.params[p]);n.search=new URLSearchParams(l).toString();let w=h&&h.headers?h.headers:{};return c.headers={...i,...w,...a.headers},{url:n.pathname+n.search+n.hash,options:c}},removeComment:async(e,r={})=>{if(e==null)throw new y("id","Required parameter id was null or undefined when calling removeComment.");const s="/artworks/comments/{id}".replace("{id}",encodeURIComponent(String(e))),a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"DELETE",...t,...r},h={},c={},i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}}}},I=function(o){return{async addComment(e,r){const s=await F(o).addComment(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async getComments(e,r,s,a){const t=await F(o).getComments(e,r,s,a);return(n=g,h=R)=>{const c={...t.options,url:h+t.url};return n.request(c)}},async removeComment(e,r){const s=await F(o).removeComment(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}}}};class B extends q{async addComment(e,r){return I(this.configuration).addComment(e,r).then(s=>s(this.axios,this.basePath))}async getComments(e,r,s,a){return I(this.configuration).getComments(e,r,s,a).then(t=>t(this.axios,this.basePath))}async removeComment(e,r){return I(this.configuration).removeComment(e,r).then(s=>s(this.axios,this.basePath))}}const H=function(o){return{likeAComment:async(e,r={})=>{if(e==null)throw new y("id","Required parameter id was null or undefined when calling likeAComment.");const s="/artworks/comments/like/{id}".replace("{id}",encodeURIComponent(String(e))),a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"POST",...t,...r},h={},c={},i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},unlikeAComment:async(e,r={})=>{if(e==null)throw new y("id","Required parameter id was null or undefined when calling unlikeAComment.");const s="/artworks/comments/unlike/{id}".replace("{id}",encodeURIComponent(String(e))),a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"DELETE",...t,...r},h={},c={},i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}}}},Q=function(o){return{async likeAComment(e,r){const s=await H(o).likeAComment(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async unlikeAComment(e,r){const s=await H(o).unlikeAComment(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}}}};class W extends q{async likeAComment(e,r){return Q(this.configuration).likeAComment(e,r).then(s=>s(this.axios,this.basePath))}async unlikeAComment(e,r){return Q(this.configuration).unlikeAComment(e,r).then(s=>s(this.axios,this.basePath))}}const U=function(o){return{getReplies:async(e,r,s,a={})=>{if(e==null)throw new y("commentId","Required parameter commentId was null or undefined when calling getReplies.");if(r==null)throw new y("perPage","Required parameter perPage was null or undefined when calling getReplies.");if(s==null)throw new y("page","Required parameter page was null or undefined when calling getReplies.");const t="/artworks/comments/replies/{commentId}".replace("{commentId}",encodeURIComponent(String(e))),n=new URL(t,"https://example.com");let h;o&&(h=o.baseOptions);const c={method:"GET",...h,...a},i={},u={};r!==void 0&&(u.per_page=r),s!==void 0&&(u.page=s);const l=new URLSearchParams(n.search);for(const p in u)l.set(p,u[p]);for(const p in a.params)l.set(p,a.params[p]);n.search=new URLSearchParams(l).toString();let w=h&&h.headers?h.headers:{};return c.headers={...i,...w,...a.headers},{url:n.pathname+n.search+n.hash,options:c}},likeReply:async(e,r={})=>{if(e==null)throw new y("replyId","Required parameter replyId was null or undefined when calling likeReply.");const s="/artworks/comments/reply/like/{replyId}".replace("{replyId}",encodeURIComponent(String(e))),a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"POST",...t,...r},h={},c={},i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},removeReply:async(e,r={})=>{if(e==null)throw new y("replyId","Required parameter replyId was null or undefined when calling removeReply.");const s="/artworks/comments/reply/{replyId}".replace("{replyId}",encodeURIComponent(String(e))),a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"DELETE",...t,...r},h={},c={},i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},reply:async(e,r={})=>{const s="/artworks/comments/reply",a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"POST",...t,...r},h={},c={};h["Content-Type"]="application/json";const i=new URLSearchParams(a.search);for(const w in c)i.set(w,c[w]);for(const w in r.params)i.set(w,r.params[w]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};n.headers={...h,...u,...r.headers};const l=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=l?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}},unlikeReply:async(e,r={})=>{if(e==null)throw new y("replyId","Required parameter replyId was null or undefined when calling unlikeReply.");const s="/artworks/comments/reply/unlike/{replyId}".replace("{replyId}",encodeURIComponent(String(e))),a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"DELETE",...t,...r},h={},c={},i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}}}},x=function(o){return{async getReplies(e,r,s,a){const t=await U(o).getReplies(e,r,s,a);return(n=g,h=R)=>{const c={...t.options,url:h+t.url};return n.request(c)}},async likeReply(e,r){const s=await U(o).likeReply(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async removeReply(e,r){const s=await U(o).removeReply(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async reply(e,r){const s=await U(o).reply(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async unlikeReply(e,r){const s=await U(o).unlikeReply(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}}}};class O extends q{async getReplies(e,r,s,a){return x(this.configuration).getReplies(e,r,s,a).then(t=>t(this.axios,this.basePath))}async likeReply(e,r){return x(this.configuration).likeReply(e,r).then(s=>s(this.axios,this.basePath))}async removeReply(e,r){return x(this.configuration).removeReply(e,r).then(s=>s(this.axios,this.basePath))}async reply(e,r){return x(this.configuration).reply(e,r).then(s=>s(this.axios,this.basePath))}async unlikeReply(e,r){return x(this.configuration).unlikeReply(e,r).then(s=>s(this.axios,this.basePath))}}const j=function(o){return{countLikes:async(e,r={})=>{if(e==null)throw new y("id","Required parameter id was null or undefined when calling countLikes.");const s="/artworks/count-likes/{id}".replace("{id}",encodeURIComponent(String(e))),a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"GET",...t,...r},h={},c={},i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},like:async(e,r={})=>{const s="/artworks/like",a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"POST",...t,...r},h={},c={};h["Content-Type"]="application/json";const i=new URLSearchParams(a.search);for(const w in c)i.set(w,c[w]);for(const w in r.params)i.set(w,r.params[w]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};n.headers={...h,...u,...r.headers};const l=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=l?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}},unlike:async(e,r={})=>{const s="/artworks/unlike",a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"POST",...t,...r},h={},c={};h["Content-Type"]="application/json";const i=new URLSearchParams(a.search);for(const w in c)i.set(w,c[w]);for(const w in r.params)i.set(w,r.params[w]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};n.headers={...h,...u,...r.headers};const l=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=l?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}}}},E=function(o){return{async countLikes(e,r){const s=await j(o).countLikes(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async like(e,r){const s=await j(o).like(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async unlike(e,r){const s=await j(o).unlike(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}}}};class M extends q{async countLikes(e,r){return E(this.configuration).countLikes(e,r).then(s=>s(this.axios,this.basePath))}async like(e,r){return E(this.configuration).like(e,r).then(s=>s(this.axios,this.basePath))}async unlike(e,r){return E(this.configuration).unlike(e,r).then(s=>s(this.axios,this.basePath))}}const S=function(o){return{getFollowingArtworks:async(e,r,s,a={})=>{if(e==null)throw new y("perPage","Required parameter perPage was null or undefined when calling getFollowingArtworks.");if(r==null)throw new y("page","Required parameter page was null or undefined when calling getFollowingArtworks.");const t="/artworks/following",n=new URL(t,"https://example.com");let h;o&&(h=o.baseOptions);const c={method:"GET",...h,...a},i={},u={};e!==void 0&&(u.per_page=e),r!==void 0&&(u.page=r),s!==void 0&&(u.mode=s);const l=new URLSearchParams(n.search);for(const p in u)l.set(p,u[p]);for(const p in a.params)l.set(p,a.params[p]);n.search=new URLSearchParams(l).toString();let w=h&&h.headers?h.headers:{};return c.headers={...i,...w,...a.headers},{url:n.pathname+n.search+n.hash,options:c}},getLatestWorks:async(e,r,s,a,t,n={})=>{if(e==null)throw new y("perPage","Required parameter perPage was null or undefined when calling getLatestWorks.");if(r==null)throw new y("page","Required parameter page was null or undefined when calling getLatestWorks.");const h="/artworks/latest",c=new URL(h,"https://example.com");let i;o&&(i=o.baseOptions);const u={method:"GET",...i,...n},l={},w={};e!==void 0&&(w.per_page=e),r!==void 0&&(w.page=r),s!==void 0&&(w.mode=s),a!==void 0&&(w.tags=a),t!==void 0&&(w.following=t);const p=new URLSearchParams(c.search);for(const k in w)p.set(k,w[k]);for(const k in n.params)p.set(k,n.params[k]);c.search=new URLSearchParams(p).toString();let P=i&&i.headers?i.headers:{};return u.headers={...l,...P,...n.headers},{url:c.pathname+c.search+c.hash,options:u}},getMostPopular:async(e,r,s,a,t,n,h,c={})=>{if(e==null)throw new y("perPage","Required parameter perPage was null or undefined when calling getMostPopular.");if(r==null)throw new y("page","Required parameter page was null or undefined when calling getMostPopular.");if(s==null)throw new y("range","Required parameter range was null or undefined when calling getMostPopular.");if(a==null)throw new y("by","Required parameter by was null or undefined when calling getMostPopular.");const i="/artworks/most",u=new URL(i,"https://example.com");let l;o&&(l=o.baseOptions);const w={method:"GET",...l,...c},p={},P={};e!==void 0&&(P.per_page=e),r!==void 0&&(P.page=r),s!==void 0&&(P.range=s),a!==void 0&&(P.by=a),t!==void 0&&(P.mode=t),n!==void 0&&(P.tags=n),h!==void 0&&(P.following=h);const k=new URLSearchParams(u.search);for(const f in P)k.set(f,P[f]);for(const f in c.params)k.set(f,c.params[f]);u.search=new URLSearchParams(k).toString();let V=l&&l.headers?l.headers:{};return w.headers={...p,...V,...c.headers},{url:u.pathname+u.search+u.hash,options:w}},getRelatedArtworks:async(e,r={})=>{if(e==null)throw new y("workId","Required parameter workId was null or undefined when calling getRelatedArtworks.");const s="/artworks/related/{workId}".replace("{workId}",encodeURIComponent(String(e))),a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"GET",...t,...r},h={},c={},i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},getUserArtworks:async(e,r,s,a={})=>{if(e==null)throw new y("userId","Required parameter userId was null or undefined when calling getUserArtworks.");if(r==null)throw new y("perPage","Required parameter perPage was null or undefined when calling getUserArtworks.");if(s==null)throw new y("page","Required parameter page was null or undefined when calling getUserArtworks.");const t="/artworks/user/{userId}".replace("{userId}",encodeURIComponent(String(e))),n=new URL(t,"https://example.com");let h;o&&(h=o.baseOptions);const c={method:"GET",...h,...a},i={},u={};r!==void 0&&(u.per_page=r),s!==void 0&&(u.page=s);const l=new URLSearchParams(n.search);for(const p in u)l.set(p,u[p]);for(const p in a.params)l.set(p,a.params[p]);n.search=new URLSearchParams(l).toString();let w=h&&h.headers?h.headers:{};return c.headers={...i,...w,...a.headers},{url:n.pathname+n.search+n.hash,options:c}}}},v=function(o){return{async getFollowingArtworks(e,r,s,a){const t=await S(o).getFollowingArtworks(e,r,s,a);return(n=g,h=R)=>{const c={...t.options,url:h+t.url};return n.request(c)}},async getLatestWorks(e,r,s,a,t,n){const h=await S(o).getLatestWorks(e,r,s,a,t,n);return(c=g,i=R)=>{const u={...h.options,url:i+h.url};return c.request(u)}},async getMostPopular(e,r,s,a,t,n,h,c){const i=await S(o).getMostPopular(e,r,s,a,t,n,h,c);return(u=g,l=R)=>{const w={...i.options,url:l+i.url};return u.request(w)}},async getRelatedArtworks(e,r){const s=await S(o).getRelatedArtworks(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async getUserArtworks(e,r,s,a){const t=await S(o).getUserArtworks(e,r,s,a);return(n=g,h=R)=>{const c={...t.options,url:h+t.url};return n.request(c)}}}};class L extends q{async getFollowingArtworks(e,r,s,a){return v(this.configuration).getFollowingArtworks(e,r,s,a).then(t=>t(this.axios,this.basePath))}async getLatestWorks(e,r,s,a,t,n){return v(this.configuration).getLatestWorks(e,r,s,a,t,n).then(h=>h(this.axios,this.basePath))}async getMostPopular(e,r,s,a,t,n,h,c){return v(this.configuration).getMostPopular(e,r,s,a,t,n,h,c).then(i=>i(this.axios,this.basePath))}async getRelatedArtworks(e,r){return v(this.configuration).getRelatedArtworks(e,r).then(s=>s(this.axios,this.basePath))}async getUserArtworks(e,r,s,a){return v(this.configuration).getUserArtworks(e,r,s,a).then(t=>t(this.axios,this.basePath))}}const _=function(o){return{getKeysByTags:async(e,r={})=>{if(e==null)throw new y("tags","Required parameter tags was null or undefined when calling getKeysByTags.");const s="/artworks/tags/get-keys-by-tags",a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"GET",...t,...r},h={},c={};e!==void 0&&(c.tags=e);const i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},searchTags:async(e,r={})=>{if(e==null)throw new y("keyword","Required parameter keyword was null or undefined when calling searchTags.");const s="/artworks/tags",a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"GET",...t,...r},h={},c={};e!==void 0&&(c.keyword=e);const i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}}}},G=function(o){return{async getKeysByTags(e,r){const s=await _(o).getKeysByTags(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async searchTags(e,r){const s=await _(o).searchTags(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}}}};class Z extends q{async getKeysByTags(e,r){return G(this.configuration).getKeysByTags(e,r).then(s=>s(this.axios,this.basePath))}async searchTags(e,r){return G(this.configuration).searchTags(e,r).then(s=>s(this.axios,this.basePath))}}const $=function(o){return{addViewCount:async(e,r={})=>{if(e==null)throw new y("id","Required parameter id was null or undefined when calling addViewCount.");const s="/artworks/add-view/{id}".replace("{id}",encodeURIComponent(String(e))),a=new URL(s,"https://example.com");let t;o&&(t=o.baseOptions);const n={method:"POST",...t,...r},h={},c={},i=new URLSearchParams(a.search);for(const l in c)i.set(l,c[l]);for(const l in r.params)i.set(l,r.params[l]);a.search=new URLSearchParams(i).toString();let u=t&&t.headers?t.headers:{};return n.headers={...h,...u,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},countViews:async(e,r,s={})=>{if(e==null)throw new y("id","Required parameter id was null or undefined when calling countViews.");if(r==null)throw new y("mode","Required parameter mode was null or undefined when calling countViews.");const a="/artworks/count-views/{id}".replace("{id}",encodeURIComponent(String(e))),t=new URL(a,"https://example.com");let n;o&&(n=o.baseOptions);const h={method:"GET",...n,...s},c={},i={};r!==void 0&&(i.mode=r);const u=new URLSearchParams(t.search);for(const w in i)u.set(w,i[w]);for(const w in s.params)u.set(w,s.params[w]);t.search=new URLSearchParams(u).toString();let l=n&&n.headers?n.headers:{};return h.headers={...c,...l,...s.headers},{url:t.pathname+t.search+t.hash,options:h}}}},z=function(o){return{async addViewCount(e,r){const s=await $(o).addViewCount(e,r);return(a=g,t=R)=>{const n={...s.options,url:t+s.url};return a.request(n)}},async countViews(e,r,s){const a=await $(o).countViews(e,r,s);return(t=g,n=R)=>{const h={...a.options,url:n+a.url};return t.request(h)}}}};class ee extends q{async addViewCount(e,r){return z(this.configuration).addViewCount(e,r).then(s=>s(this.axios,this.basePath))}async countViews(e,r,s){return z(this.configuration).countViews(e,r,s).then(a=>a(this.axios,this.basePath))}}const re=function(o){return{checkArtworkAvailability:async(e={})=>{const r="/artworks/check-availability",s=new URL(r,"https://example.com");let a;o&&(a=o.baseOptions);const t={method:"GET",...a,...e},n={},h={},c=new URLSearchParams(s.search);for(const u in h)c.set(u,h[u]);for(const u in e.params)c.set(u,e.params[u]);s.search=new URLSearchParams(c).toString();let i=a&&a.headers?a.headers:{};return t.headers={...n,...i,...e.headers},{url:s.pathname+s.search+s.hash,options:t}}}},ae=function(o){return{async checkArtworkAvailability(e){const r=await re(o).checkArtworkAvailability(e);return(s=g,a=R)=>{const t={...r.options,url:a+r.url};return s.request(t)}}}};class te extends q{async checkArtworkAvailability(e){return ae(this.configuration).checkArtworkAvailability(e).then(r=>r(this.axios,this.basePath))}}const D=function(o){return{searchArtworks:async(e,r,s,a,t,n,h,c,i={})=>{if(e==null)throw new y("keyword","Required parameter keyword was null or undefined when calling searchArtworks.");if(r==null)throw new y("range","Required parameter range was null or undefined when calling searchArtworks.");if(s==null)throw new y("by","Required parameter by was null or undefined when calling searchArtworks.");if(a==null)throw new y("page","Required parameter page was null or undefined when calling searchArtworks.");if(t==null)throw new y("perPage","Required parameter perPage was null or undefined when calling searchArtworks.");const u="/search/artworks",l=new URL(u,"https://example.com");let w;o&&(w=o.baseOptions);const p={method:"GET",...w,...i},P={},k={};e!==void 0&&(k.keyword=e),r!==void 0&&(k.range=r),s!==void 0&&(k.by=s),n!==void 0&&(k.mode=n),h!==void 0&&(k.following=h),c!==void 0&&(k.recent=c),a!==void 0&&(k.page=a),t!==void 0&&(k.per_page=t);const V=new URLSearchParams(l.search);for(const A in k)V.set(A,k[A]);for(const A in i.params)V.set(A,i.params[A]);l.search=new URLSearchParams(V).toString();let f=w&&w.headers?w.headers:{};return p.headers={...P,...f,...i.headers},{url:l.pathname+l.search+l.hash,options:p}},searchUsers:async(e,r,s,a={})=>{if(e==null)throw new y("keyword","Required parameter keyword was null or undefined when calling searchUsers.");if(r==null)throw new y("page","Required parameter page was null or undefined when calling searchUsers.");if(s==null)throw new y("perPage","Required parameter perPage was null or undefined when calling searchUsers.");const t="/search/user",n=new URL(t,"https://example.com");let h;o&&(h=o.baseOptions);const c={method:"GET",...h,...a},i={},u={};e!==void 0&&(u.keyword=e),r!==void 0&&(u.page=r),s!==void 0&&(u.per_page=s);const l=new URLSearchParams(n.search);for(const p in u)l.set(p,u[p]);for(const p in a.params)l.set(p,a.params[p]);n.search=new URLSearchParams(l).toString();let w=h&&h.headers?h.headers:{};return c.headers={...i,...w,...a.headers},{url:n.pathname+n.search+n.hash,options:c}}}},K=function(o){return{async searchArtworks(e,r,s,a,t,n,h,c,i){const u=await D(o).searchArtworks(e,r,s,a,t,n,h,c,i);return(l=g,w=R)=>{const p={...u.options,url:w+u.url};return l.request(p)}},async searchUsers(e,r,s,a){const t=await D(o).searchUsers(e,r,s,a);return(n=g,h=R)=>{const c={...t.options,url:h+t.url};return n.request(c)}}}};class se extends q{async searchArtworks(e,r,s,a,t,n,h,c,i){return K(this.configuration).searchArtworks(e,r,s,a,t,n,h,c,i).then(u=>u(this.axios,this.basePath))}async searchUsers(e,r,s,a){return K(this.configuration).searchUsers(e,r,s,a).then(t=>t(this.axios,this.basePath))}}function we(o,e){return{getMostPopular:async m=>{try{const{data:d}=await new L(o,e).getMostPopular(m.pagination.perPage,m.pagination.page,m.range,m.rangeMode,m.explicitMode,m.tags,m.followingOnly,e);return[d.data,null]}catch(d){return[null,d]}},getLatest:async m=>{try{const{data:d}=await new L(o,e).getLatestWorks(m.pagination.perPage,m.pagination.page,m.explicitMode,m.tags,m.followingOnly,e);return[d.data,null]}catch(d){return[null,d]}},getFollowing:async m=>{try{const{data:d}=await new L(o,e).getFollowingArtworks(m.pagination.perPage,m.pagination.page,m.explicitMode,e);return[d.data,null]}catch(d){return[null,d]}},getSearch:async m=>{try{const{data:d}=await new se(o).searchArtworks(m.keyword,m.range,m.rangeMode,m.pagination.page,m.pagination.perPage,m.explicitMode,m.followingOnly,m.recentMode,e);return[d.data,null]}catch(d){return[null,d]}},getUserArtworks:async m=>{try{const{data:d}=await new L(o,e).getUserArtworks(m.userId,m.pagination.perPage,m.pagination.page,e);return[d.data.works,d.data.pagination,null]}catch(d){return[null,null,d]}},getChronologicalFeeds:async m=>{try{const{data:d}=await new L(o).getFollowingArtworks(m.pagination.perPage,m.pagination.page,m.explicitMode,e);return[d.data,null]}catch(d){return[null,d]}},getWorkById:async m=>{try{const{data:d}=await new T(o).view(m,e);return[d.data,null]}catch(d){return[null,N().consumeReadableStreamError(d)]}},incraseViewCount:async m=>{await new ee(o).addViewCount(m)},updateInfo:async m=>{try{const{data:d}=await new T(o).updateWork({id:Number(m.id),title:m.title,description:m.description,is_explicit:m.isExplicit?1:0,tags:m.tags},e);return[d.success,null]}catch(d){return[null,d]}},deleteWork:async m=>{try{const{data:d}=await new T(o).deleteWork(m.workId,e);return[d.success,null]}catch(d){return[null,d]}},like:async m=>{try{const{data:d}=await new M(o).like({id:m.workId},e);return[d.success,null]}catch(d){return[null,d]}},unlike:async m=>{try{const{data:d}=await new M(o).unlike({id:m.workId},e);return[d.success,null]}catch(d){return[null,d]}},getTagKeys:async m=>{try{const{data:d}=await new Z(o).getKeysByTags(m,e);return[d.data,null]}catch(d){return[null,d]}},checkArtworkAvailability:async()=>{try{const{data:m}=await new te(o).checkArtworkAvailability(e);return[m.data.count&&typeof m.data.count<"u"?m.data.count:0,null]}catch(m){return[null,m]}},getComments:async m=>{try{const{data:d}=await new B(o).getComments(m.workId,m.pagination.perPage,m.pagination.page,e);return[d.data,null]}catch(d){return[null,d]}},addComment:async m=>{try{const{data:d}=await new B(o).addComment({work_id:m.workId,comment:m.comment},e);return[d.success,d.data,null]}catch(d){return[null,null,d]}},deleteComment:async m=>{try{const{data:d}=await new B(o).removeComment(m.commentId,e);return[d.success,null]}catch(d){return[null,d]}},likeComment:async m=>{try{const{data:d}=await new W(o).likeAComment(m.commentId,e);return[d.success,null]}catch(d){return[null,d]}},unlikeComment:async m=>{try{const{data:d}=await new W(o).unlikeAComment(m.commentId,e);return[d.success,null]}catch(d){return[null,d]}},getCommentReplies:async m=>{try{const{data:d}=await new O(o).getReplies(m.commentId,m.pagination.perPage,m.pagination.page,e);return[d.data.replies,d.data.pagination,null]}catch(d){return[null,null,d]}},addReply:async m=>{try{const{data:d}=await new O(o).reply({comment_id:m.commentId,reply:m.reply},e);return[d.success,d.data,null]}catch(d){return[null,null,d]}},deleteReply:async m=>{try{const{data:d}=await new O(o).removeReply(m.replyId,e);return[d.success,null]}catch(d){return[null,d]}},likeReply:async m=>{try{const{data:d}=await new O(o).likeReply(m.replyId,e);return[d.success,null]}catch(d){return[null,d]}},unlikeReply:async m=>{try{const{data:d}=await new O(o).unlikeReply(m.replyId,e);return[d.success,null]}catch(d){return[null,d]}}}}const pe=(o,e)=>{const r=o.__vccOpts||o;for(const[s,a]of e)r[s]=a;return r},ye={__name:"Icon",props:{name:{type:String,default:""},iconColor:{type:String,default:"icon-color"},withPadding:{type:Boolean,default:!1},textSize:{type:String,default:"text-lg"}},setup(o){return(e,r)=>(J(),X("div",{class:Y([o.name,"transition-all focus:outline-none icon",o.iconColor,{"mr-2":o.withPadding},o.textSize]),"aria-hidden":"true",title:""},null,2))}};export{se as S,pe as _,ye as a,we as u};
//# sourceMappingURL=Icon.859b6451.js.map
