import{B as x,i as y,j as g,R as P,bR as j,k as p,bS as b,bT as L}from"./entry.e59d1677.js";import{g as B}from"./ProBadge.e613df9a.js";import{U as A}from"./user-counters-api.efc5c534.js";const k=function(l){return{changePassword:async(e,r={})=>{const t="/user/password/renew",a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"POST",...s,...r},h={},i={};h["Content-Type"]="application/json";const u=new URLSearchParams(a.search);for(const d in i)u.set(d,i[d]);for(const d in r.params)u.set(d,r.params[d]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};n.headers={...h,...w,...r.headers};const m=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=m?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}},checkCurrentPassword:async(e,r={})=>{const t="/user/password/current/check",a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"POST",...s,...r},h={},i={};h["Content-Type"]="application/json";const u=new URLSearchParams(a.search);for(const d in i)u.set(d,i[d]);for(const d in r.params)u.set(d,r.params[d]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};n.headers={...h,...w,...r.headers};const m=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=m?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}}}},v=function(l){return{async changePassword(e,r){const t=await k(l).changePassword(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}},async checkCurrentPassword(e,r){const t=await k(l).checkCurrentPassword(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}}}};class I extends x{async changePassword(e,r){return v(this.configuration).changePassword(e,r).then(t=>t(this.axios,this.basePath))}async checkCurrentPassword(e,r){return v(this.configuration).checkCurrentPassword(e,r).then(t=>t(this.axios,this.basePath))}}const T=function(l){return{updateAvatarForm:async(e,r={})=>{const t="/user/update/avatar",a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"POST",...s,...r},h={},i={},u=new FormData;e!==void 0&&u.append("avatar",e),h["Content-Type"]="multipart/form-data";const w=new URLSearchParams(a.search);for(const d in i)w.set(d,i[d]);for(const d in r.params)w.set(d,r.params[d]);a.search=new URLSearchParams(w).toString();let m=s&&s.headers?s.headers:{};return n.headers={...h,...m,...r.headers},n.data=u,{url:a.pathname+a.search+a.hash,options:n}},updateCoverForm:async(e,r={})=>{const t="/user/update/cover",a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"POST",...s,...r},h={},i={},u=new FormData;e!==void 0&&u.append("cover",e),h["Content-Type"]="multipart/form-data";const w=new URLSearchParams(a.search);for(const d in i)w.set(d,i[d]);for(const d in r.params)w.set(d,r.params[d]);a.search=new URLSearchParams(w).toString();let m=s&&s.headers?s.headers:{};return n.headers={...h,...m,...r.headers},n.data=u,{url:a.pathname+a.search+a.hash,options:n}}}},E=function(l){return{async updateAvatarForm(e,r){const t=await T(l).updateAvatarForm(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}},async updateCoverForm(e,r){const t=await T(l).updateCoverForm(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}}}};class C extends x{async updateAvatarForm(e,r){return E(this.configuration).updateAvatarForm(e,r).then(t=>t(this.axios,this.basePath))}async updateCoverForm(e,r){return E(this.configuration).updateCoverForm(e,r).then(t=>t(this.axios,this.basePath))}}const U=function(l){return{countFollowers:async(e,r={})=>{if(e==null)throw new P("userId","Required parameter userId was null or undefined when calling countFollowers.");const t="/user/{user_id}/count/followers".replace("{user_id}",encodeURIComponent(String(e))),a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"GET",...s,...r},h={},i={},u=new URLSearchParams(a.search);for(const m in i)u.set(m,i[m]);for(const m in r.params)u.set(m,r.params[m]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};return n.headers={...h,...w,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},countFollowings:async(e,r={})=>{if(e==null)throw new P("userId","Required parameter userId was null or undefined when calling countFollowings.");const t="/user/{user_id}/count/followings".replace("{user_id}",encodeURIComponent(String(e))),a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"GET",...s,...r},h={},i={},u=new URLSearchParams(a.search);for(const m in i)u.set(m,i[m]);for(const m in r.params)u.set(m,r.params[m]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};return n.headers={...h,...w,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},followUser:async(e,r={})=>{if(e==null)throw new P("userId","Required parameter userId was null or undefined when calling followUser.");const t="/user/follows/follow/{userId}".replace("{userId}",encodeURIComponent(String(e))),a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"POST",...s,...r},h={},i={},u=new URLSearchParams(a.search);for(const m in i)u.set(m,i[m]);for(const m in r.params)u.set(m,r.params[m]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};return n.headers={...h,...w,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},followUserPrivately:async(e,r,t={})=>{if(e==null)throw new P("userId","Required parameter userId was null or undefined when calling followUserPrivately.");if(r==null)throw new P("isPrivate","Required parameter isPrivate was null or undefined when calling followUserPrivately.");const a="/user/follows/follow/{userId}/{isPrivate}".replace("{userId}",encodeURIComponent(String(e))).replace("{isPrivate}",encodeURIComponent(String(r))),s=new URL(a,"https://example.com");let n;l&&(n=l.baseOptions);const h={method:"POST",...n,...t},i={},u={},w=new URLSearchParams(s.search);for(const d in u)w.set(d,u[d]);for(const d in t.params)w.set(d,t.params[d]);s.search=new URLSearchParams(w).toString();let m=n&&n.headers?n.headers:{};return h.headers={...i,...m,...t.headers},{url:s.pathname+s.search+s.hash,options:h}},followersList:async(e,r,t,a={})=>{if(e==null)throw new P("userId","Required parameter userId was null or undefined when calling followersList.");if(r==null)throw new P("page","Required parameter page was null or undefined when calling followersList.");if(t==null)throw new P("perPage","Required parameter perPage was null or undefined when calling followersList.");const s="/user/follows/followers/{userId}".replace("{userId}",encodeURIComponent(String(e))),n=new URL(s,"https://example.com");let h;l&&(h=l.baseOptions);const i={method:"GET",...h,...a},u={},w={};r!==void 0&&(w.page=r),t!==void 0&&(w.per_page=t);const m=new URLSearchParams(n.search);for(const f in w)m.set(f,w[f]);for(const f in a.params)m.set(f,a.params[f]);n.search=new URLSearchParams(m).toString();let d=h&&h.headers?h.headers:{};return i.headers={...u,...d,...a.headers},{url:n.pathname+n.search+n.hash,options:i}},followingList:async(e,r,t,a,s={})=>{if(e==null)throw new P("userId","Required parameter userId was null or undefined when calling followingList.");if(r==null)throw new P("privateOnly","Required parameter privateOnly was null or undefined when calling followingList.");if(t==null)throw new P("page","Required parameter page was null or undefined when calling followingList.");if(a==null)throw new P("perPage","Required parameter perPage was null or undefined when calling followingList.");const n="/user/follows/followings/{userId}".replace("{userId}",encodeURIComponent(String(e))),h=new URL(n,"https://example.com");let i;l&&(i=l.baseOptions);const u={method:"GET",...i,...s},w={},m={};r!==void 0&&(m.private_only=r),t!==void 0&&(m.page=t),a!==void 0&&(m.per_page=a);const d=new URLSearchParams(h.search);for(const V in m)d.set(V,m[V]);for(const V in s.params)d.set(V,s.params[V]);h.search=new URLSearchParams(d).toString();let f=i&&i.headers?i.headers:{};return u.headers={...w,...f,...s.headers},{url:h.pathname+h.search+h.hash,options:u}},getFollowSuggestions:async(e={})=>{const r="/user/follows/suggestions",t=new URL(r,"https://example.com");let a;l&&(a=l.baseOptions);const s={method:"GET",...a,...e},n={},h={},i=new URLSearchParams(t.search);for(const w in h)i.set(w,h[w]);for(const w in e.params)i.set(w,e.params[w]);t.search=new URLSearchParams(i).toString();let u=a&&a.headers?a.headers:{};return s.headers={...n,...u,...e.headers},{url:t.pathname+t.search+t.hash,options:s}},isFollowing:async(e,r={})=>{if(e==null)throw new P("userIdToCheck","Required parameter userIdToCheck was null or undefined when calling isFollowing.");const t="/user/follows/is-following/{userIdToCheck}".replace("{userIdToCheck}",encodeURIComponent(String(e))),a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"GET",...s,...r},h={},i={},u=new URLSearchParams(a.search);for(const m in i)u.set(m,i[m]);for(const m in r.params)u.set(m,r.params[m]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};return n.headers={...h,...w,...r.headers},{url:a.pathname+a.search+a.hash,options:n}},toggleFollowersVisibility:async(e={})=>{const r="/user/follows/followers/toggle-visibility",t=new URL(r,"https://example.com");let a;l&&(a=l.baseOptions);const s={method:"POST",...a,...e},n={},h={},i=new URLSearchParams(t.search);for(const w in h)i.set(w,h[w]);for(const w in e.params)i.set(w,e.params[w]);t.search=new URLSearchParams(i).toString();let u=a&&a.headers?a.headers:{};return s.headers={...n,...u,...e.headers},{url:t.pathname+t.search+t.hash,options:s}},toggleFollowingsVisibility:async(e={})=>{const r="/user/follows/followings/toggle-visibility",t=new URL(r,"https://example.com");let a;l&&(a=l.baseOptions);const s={method:"POST",...a,...e},n={},h={},i=new URLSearchParams(t.search);for(const w in h)i.set(w,h[w]);for(const w in e.params)i.set(w,e.params[w]);t.search=new URLSearchParams(i).toString();let u=a&&a.headers?a.headers:{};return s.headers={...n,...u,...e.headers},{url:t.pathname+t.search+t.hash,options:s}},unfollowUser:async(e,r={})=>{if(e==null)throw new P("userIdToUnfollow","Required parameter userIdToUnfollow was null or undefined when calling unfollowUser.");const t="/user/follows/unfollow/{userIdToUnfollow}".replace("{userIdToUnfollow}",encodeURIComponent(String(e))),a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"POST",...s,...r},h={},i={},u=new URLSearchParams(a.search);for(const m in i)u.set(m,i[m]);for(const m in r.params)u.set(m,r.params[m]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};return n.headers={...h,...w,...r.headers},{url:a.pathname+a.search+a.hash,options:n}}}},R=function(l){return{async countFollowers(e,r){const t=await U(l).countFollowers(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}},async countFollowings(e,r){const t=await U(l).countFollowings(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}},async followUser(e,r){const t=await U(l).followUser(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}},async followUserPrivately(e,r,t){const a=await U(l).followUserPrivately(e,r,t);return(s=y,n=g)=>{const h={...a.options,url:n+a.url};return s.request(h)}},async followersList(e,r,t,a){const s=await U(l).followersList(e,r,t,a);return(n=y,h=g)=>{const i={...s.options,url:h+s.url};return n.request(i)}},async followingList(e,r,t,a,s){const n=await U(l).followingList(e,r,t,a,s);return(h=y,i=g)=>{const u={...n.options,url:i+n.url};return h.request(u)}},async getFollowSuggestions(e){const r=await U(l).getFollowSuggestions(e);return(t=y,a=g)=>{const s={...r.options,url:a+r.url};return t.request(s)}},async isFollowing(e,r){const t=await U(l).isFollowing(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}},async toggleFollowersVisibility(e){const r=await U(l).toggleFollowersVisibility(e);return(t=y,a=g)=>{const s={...r.options,url:a+r.url};return t.request(s)}},async toggleFollowingsVisibility(e){const r=await U(l).toggleFollowingsVisibility(e);return(t=y,a=g)=>{const s={...r.options,url:a+r.url};return t.request(s)}},async unfollowUser(e,r){const t=await U(l).unfollowUser(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}}}};class S extends x{async countFollowers(e,r){return R(this.configuration).countFollowers(e,r).then(t=>t(this.axios,this.basePath))}async countFollowings(e,r){return R(this.configuration).countFollowings(e,r).then(t=>t(this.axios,this.basePath))}async followUser(e,r){return R(this.configuration).followUser(e,r).then(t=>t(this.axios,this.basePath))}async followUserPrivately(e,r,t){return R(this.configuration).followUserPrivately(e,r,t).then(a=>a(this.axios,this.basePath))}async followersList(e,r,t,a){return R(this.configuration).followersList(e,r,t,a).then(s=>s(this.axios,this.basePath))}async followingList(e,r,t,a,s){return R(this.configuration).followingList(e,r,t,a,s).then(n=>n(this.axios,this.basePath))}async getFollowSuggestions(e){return R(this.configuration).getFollowSuggestions(e).then(r=>r(this.axios,this.basePath))}async isFollowing(e,r){return R(this.configuration).isFollowing(e,r).then(t=>t(this.axios,this.basePath))}async toggleFollowersVisibility(e){return R(this.configuration).toggleFollowersVisibility(e).then(r=>r(this.axios,this.basePath))}async toggleFollowingsVisibility(e){return R(this.configuration).toggleFollowingsVisibility(e).then(r=>r(this.axios,this.basePath))}async unfollowUser(e,r){return R(this.configuration).unfollowUser(e,r).then(t=>t(this.axios,this.basePath))}}const F=function(l){return{changeUsername:async(e,r={})=>{const t="/user/update/username",a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"POST",...s,...r},h={},i={};h["Content-Type"]="application/json";const u=new URLSearchParams(a.search);for(const d in i)u.set(d,i[d]);for(const d in r.params)u.set(d,r.params[d]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};n.headers={...h,...w,...r.headers};const m=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=m?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}},updateUserInfo:async(e,r={})=>{const t="/user/update/info",a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"POST",...s,...r},h={},i={};h["Content-Type"]="application/json";const u=new URLSearchParams(a.search);for(const d in i)u.set(d,i[d]);for(const d in r.params)u.set(d,r.params[d]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};n.headers={...h,...w,...r.headers};const m=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=m?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}},updateUserPreference:async(e,r={})=>{const t="/user/update/preference",a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"POST",...s,...r},h={},i={};h["Content-Type"]="application/json";const u=new URLSearchParams(a.search);for(const d in i)u.set(d,i[d]);for(const d in r.params)u.set(d,r.params[d]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};n.headers={...h,...w,...r.headers};const m=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=m?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}},updateUserSocial:async(e,r={})=>{const t="/user/update/social",a=new URL(t,"https://example.com");let s;l&&(s=l.baseOptions);const n={method:"POST",...s,...r},h={},i={};h["Content-Type"]="application/json";const u=new URLSearchParams(a.search);for(const d in i)u.set(d,i[d]);for(const d in r.params)u.set(d,r.params[d]);a.search=new URLSearchParams(u).toString();let w=s&&s.headers?s.headers:{};n.headers={...h,...w,...r.headers};const m=typeof e!="string"||n.headers["Content-Type"]==="application/json";return n.data=m?JSON.stringify(e!==void 0?e:{}):e||"",{url:a.pathname+a.search+a.hash,options:n}}}},O=function(l){return{async changeUsername(e,r){const t=await F(l).changeUsername(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}},async updateUserInfo(e,r){const t=await F(l).updateUserInfo(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}},async updateUserPreference(e,r){const t=await F(l).updateUserPreference(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}},async updateUserSocial(e,r){const t=await F(l).updateUserSocial(e,r);return(a=y,s=g)=>{const n={...t.options,url:s+t.url};return a.request(n)}}}};class q extends x{async changeUsername(e,r){return O(this.configuration).changeUsername(e,r).then(t=>t(this.axios,this.basePath))}async updateUserInfo(e,r){return O(this.configuration).updateUserInfo(e,r).then(t=>t(this.axios,this.basePath))}async updateUserPreference(e,r){return O(this.configuration).updateUserPreference(e,r).then(t=>t(this.axios,this.basePath))}async updateUserSocial(e,r){return O(this.configuration).updateUserSocial(e,r).then(t=>t(this.axios,this.basePath))}}function se(l,e){return{checkUsernameAvailability:async c=>{try{const{data:o}=await new j(l).checkUsername({username:c});return o.success?[o.success,null]:[null,"Username is already taken"]}catch(o){return[null,p().consumeReadableStreamError(o)]}},checkPenNameAvailability:async c=>{try{const{data:o}=await new b(l).penNameCheck(c,e);return o.success?[o.success,null]:[null,"Pen name is already taken"]}catch(o){return[null,p().consumeReadableStreamError(o)]}},getInfo:async c=>{try{const{data:o}=await new b(l).getUserInfoById(c.toString(),e);return[o.data,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},getInfoByUsername:async c=>{try{const{data:o}=await new b(l).getUserInfoByUsername(c,e);return[o.data,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},searchUsers:async c=>{try{const{data:o}=await new B(l).searchUsers(c.keyword,c.pagination.page,c.pagination.perPage,e);return[o.data,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},updateInfo:async c=>{try{const{data:o}=await new q(l).updateUserInfo({id:c.userId,name:c.name,bio:c.bio,location:c.location,pen_name:c.penName},e);return[o.success,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},updateSocials:async c=>{try{const{data:o}=await new q(l).updateUserSocial({id:c.userId,facebook:c.facebook,twitter:c.twitter,instagram:c.instagram,patreon:c.patreon,youtube:c.youtube,twitch:c.twitch,discord:c.discord,picarto:c.picarto,gumroad:c.gumroad,personal_website:c.site},e);return[o.success,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},updateSettings:async c=>{try{const{data:o}=await new q(l).updateUserPreference({id:c.userId,show_explicit:c.showExplicit?1:0,show_gore:c.showGore?1:0},e);return[o.success,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},changeUsername:async c=>{try{const{data:o}=await new q(l).changeUsername({new_username:c},e);return[o.success,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},updateAvatar:async c=>{try{const{data:o}=await new C(l).updateAvatarForm(c,e);return[o.success,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},countFeeds:async c=>{try{const{data:o}=await new A(l).countUserFeeds(c,e);return[o.data.total,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},countArtworks:async c=>{try{const{data:o}=await new A(l).countUserArtworks(c,e);return[o.data.total,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},countFollowers:async c=>{try{const{data:o}=await new S(l).countFollowers(c);return[o.data.total,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},countFollowings:async c=>{try{const{data:o}=await new S(l).countFollowings(c);return[o.data.total,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},isFollowing:async c=>{try{const{data:o}=await new S(l).isFollowing(c,e);return[o.data,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},follow:async c=>{try{const{data:o}=await new S(l).followUser(c,e);return[o.success,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},followPrivately:async c=>{try{const{data:o}=await new S(l).followUserPrivately(c,!0,e);return[o.success,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},unfollow:async c=>{try{const{data:o}=await new S(l).unfollowUser(c,e);return[o.success,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},getFollowerList:async c=>{try{const{data:o}=await new S(l).followersList(c.userId,c.pagination.page,c.pagination.perPage,e);return[o.data,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},getFollowingList:async c=>{try{const{data:o}=await new S(l).followingList(c.userId,c.isPrivateOnly,c.pagination.page,c.pagination.perPage,e);return[o.data,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},toggleFollowerPrivacy:async()=>{try{const{data:c}=await new S(l).toggleFollowersVisibility(e);return[c.success,null]}catch(c){return[null,p().consumeReadableStreamError(c)]}},toggleFollowingPrivacy:async()=>{try{const{data:c}=await new S(l).toggleFollowingsVisibility(e);return[c.success,null]}catch(c){return[null,p().consumeReadableStreamError(c)]}},getSuggestedUsersToFollow:async()=>{var c;try{const{data:o}=await new S(l).getFollowSuggestions(e);return[(c=o.data)==null?void 0:c.suggestions,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},checkCurrentPassword:async c=>{try{const{data:o}=await new I(l).checkCurrentPassword({user_id:c.userId,current_password:c.currentPassword},e);return[o,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},updateCurrentPassword:async c=>{try{const{data:o}=await new I(l).changePassword({user_id:c.userId,current_password:c.currentPassword,new_password:c.newPassword},e);return[o,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},checkResetPasswordTokenValidity:async c=>{try{const{data:o}=await new L(l).checkResetPasswordTokenValidity(c.iv,c.content);return[o.data,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},resetPassword:async c=>{try{const{data:o}=await new L(l).recoverChangePassword({iv:c.iv,content:c.content,new_password:c.newPassword});return[o,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}},getUserPassphrase:async()=>{var c;try{const{data:o}=await new b(l).getAccountPassphrase(e);return[(c=o.data)==null?void 0:c.passphrase,null]}catch(o){return[null,p().consumeReadableStreamError(o)]}}}}export{se as u};
