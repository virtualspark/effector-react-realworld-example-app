"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29],{6763:function(e,t,r){r.d(t,{qn:function(){return j},fR:function(){return x},o4:function(){return n}});var n={};r.r(n),r.d(n,{createFeed:function(){return l}});var c=r(1549),a=r(3719),i=r(6942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){var t=e.effect,r=(0,c.yM)(),n=r.filter({fn:function(e){return!0===e.favorited}}),o=r.filter({fn:function(e){return!1===e.favorited}}),u=(0,c.GW)((function(e){var t=e.slug;return i.v_("articles/".concat(t,"/favorite")).then((function(e){return e.data}))})),l=(0,c.GW)((function(e){var t=e.slug;return i.IV("articles/".concat(t,"/favorite")).then((function(e){return e.data}))})),f=(0,c.MT)({articlesCount:0,articles:[]}).on(t.doneData,(function(e,t){return t})).on(n,(function(e,t){return s(s({},e),{},{articles:e.articles.map((function(e){return e.slug!==t.slug?e:s(s({},e),{},{favorited:!e.favorited,favoritesCount:e.favoritesCount-1})}))})})).on(o,(function(e,t){return s(s({},e),{},{articles:e.articles.map((function(e){return e.slug!==t.slug?e:s(s({},e),{},{favorited:!e.favorited,favoritesCount:e.favoritesCount+1})}))})})).on([u.done,l.done],(function(e,t){var r=t.params,n=t.result;return s(s({},e),{},{articles:e.articles.map((function(e){return e.slug!==r.slug?e:s(s({},e),{},{favorited:n.article.favorited,favoritesCount:n.article.favoritesCount})}))})})).on([u.fail,l.fail],(function(e,t){var r=t.params;return s(s({},e),{},{articles:e.articles.map((function(e){return e.slug!==r.slug?e:s(s({},e),{},{favorited:r.favorited,favoritesCount:r.favoritesCount})}))})})),d=f.map((function(e){return e.articlesCount})),m=f.map((function(e){return e.articles})),j=(0,a.status)({effect:t}),h=(0,c.$e)(j,m,(function(e,t){return("done"===e||"fail"===e)&&0===t.length}));return(0,c.Vl)({source:r,match:{favorite:function(e){return!0===e.favorited},unfavorite:function(e){return!1===e.favorited}},cases:{favorite:l,unfavorite:u}}),{favoriteArticleToggled:r,setUnfavoriteArticleFx:l,$feed:f,$totalPages:d,$articles:m,$isEmptyFeed:h}}var f=r(4246),d=function(e){var t=e.children;return(0,f.jsx)("ul",{className:"articles-wrapper list-unstyled",children:t})},m=r(7459),j=function(e){var t=e.author,r=e.createdAt,n=e.children;return(0,f.jsxs)("div",{className:"article-meta",children:[(0,f.jsx)(m.rU,{to:"/@".concat(t.username),children:(0,f.jsx)("img",{alt:t.username,src:t.image})}),(0,f.jsxs)("div",{className:"info",children:[(0,f.jsx)(m.rU,{className:"author",to:"/@".concat(t.username),children:t.username}),(0,f.jsx)("span",{className:"date",children:new Date(r).toDateString()})]}),n]})},h=r(9701),p=function(e){var t=e.active,r=e.onClick,n=e.children;return(0,f.jsxs)(h.zx,{className:"button-favorite btn-outline-primary","data-active":t,size:"sm",onClick:r,children:[(0,f.jsx)("i",{className:"ion-heart"})," ",n]})},v=function(e){var t=e.data,r=t.author,n=t.createdAt,c=t.slug,a=t.title,i=t.description,o=t.tagList,s=t.favorited,u=t.favoritesCount,l=e.onClick;return(0,f.jsxs)("article",{className:"article-preview",children:[(0,f.jsx)(j,{author:r,createdAt:n,children:(0,f.jsx)("div",{className:"pull-xs-right",children:(0,f.jsx)(p,{active:s,onClick:l,children:u})})}),(0,f.jsxs)(m.rU,{className:"preview-link",to:"/article/".concat(c),children:[(0,f.jsx)("h1",{children:a}),(0,f.jsx)("p",{children:i}),(0,f.jsx)("span",{children:"Read more..."}),(0,f.jsx)(h.PS,{children:o.map((function(e){return(0,f.jsx)(h.Vp,{children:e.toLowerCase()},e)}))})]})]})},b=function(e){return e.show?(0,f.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null},g=r(9041),x=function(e){var t=e.loading,r=e.isEmpty,n=e.pageSize,c=e.pageNumber,a=e.totalPages,i=e.articles,o=e.onPageChange,s=e.onArticleClick;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b,{show:r}),(0,f.jsx)(d,{children:(0,g.sm)(i,{getKey:function(e){return e.slug},fn:function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(v,{data:e,onClick:function(){return s(e)}})})}})}),(0,f.jsx)(h.tl,{current:c,pageSize:n,total:a,onPageChange:o}),(0,f.jsx)(h.$j,{show:t})]})}},2029:function(e,t,r){r.r(t),r.d(t,{default:function(){return Y}});var n=r(7378),c=r(7459),a=r(9701),i=r(8947),o=r(3451),s=r(1549),u=r(9041),l=r(6942),f=(0,s.yM)(),d=(0,s.GW)((function(e){return l.U2("articles/".concat(e,"/comments")).then((function(e){return e.data.comments}))})),m=(0,s.GW)((function(e){var t=e.slug,r=e.body;return l.v_("articles/".concat(t,"/comments"),{comment:{body:r}}).then((function(e){return e.data.comment}))})),j=(0,s.GW)((function(e){var t=e.slug,r=e.id;return l.IV("articles/".concat(t,"/comments/").concat(r))}));(0,s.eH)({from:f,to:j});var h=(0,s.nu)(d.doneData,[]).on(m.doneData,(function(e,t){return[t].concat(e)})).on(j.done,(function(e,t){var r=t.params;return e.filter((function(e){return e.id!==r.id}))})),p=(0,u.Bq)(),v=(0,s.MT)({errors:{}}).on([m.failData,j.failData],(function(e,t){var r;return null===(r=t.response)||void 0===r?void 0:r.data})).reset(p.close),b=v.map((function(e){return Object.keys(Object(e)).length>0})),g=v.map((function(e){return Object.entries(Object(null==e?void 0:e.errors))})),x=r(4246),O=function(){var e=i.wl.useVisitor(),t=e.image,r=e.username;return(0,x.jsxs)("div",{className:"card-footer",children:[(0,x.jsx)("img",{alt:r,className:"comment-author-img",src:t}),(0,x.jsx)(a.zx,{className:"btn-primary",size:"sm",type:"submit",children:"Post Comment"})]})};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(){var e=function(){var e={body:""},t=(0,c.UO)().slug,r=(0,o.cI)({defaultValues:e}),a=r.handleSubmit,i=r.register,s=r.reset,u=function(e){var r=e.body;m({body:r,slug:t})};return(0,n.useEffect)((function(){var t=m.done.watch((function(){s(e)}));return function(){return t()}})),{register:i,handleSubmit:a(u)}}(),t=e.handleSubmit,r=e.register;return(0,x.jsxs)(a.l0,{className:"card comment-form",onSubmit:t,children:[(0,x.jsx)("div",{className:"card-block",children:(0,x.jsx)(a.l0.Control,w({as:"textarea",placeholder:"Write a comment...",rows:3},r("body")))}),(0,x.jsx)(O,{})]})}var D=function(e){var t=e.author,r=e.onClick,n=i.wl.useVisitor().username,c=i.wl.useIsAuth(),o=n===t.username;return c&&o?(0,x.jsx)(a.zx,{className:"mod-options btn-delete",onClick:r,children:(0,x.jsx)("i",{className:"ion-trash-a"})}):null};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e){var t=e.data;return(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-block",children:(0,x.jsx)("p",{className:"card-text",children:t.body})}),(0,x.jsx)(E,k({},t))]})}function E(e){var t=e.author,r=e.createdAt,n=e.id,a=(0,c.UO)().slug;return(0,x.jsxs)("div",{className:"card-footer",children:[(0,x.jsx)(c.rU,{className:"comment-author",to:"/@".concat(t.username),children:(0,x.jsx)("img",{alt:t.username,className:"comment-author-img",src:t.image})})," ",(0,x.jsx)(c.rU,{className:"comment-author",to:"/@".concat(t.username),children:t.username}),(0,x.jsx)("span",{className:"date-posted",children:new Date(r).toDateString()}),(0,x.jsx)(D,{author:t,onClick:function(){f({slug:a,id:n})}})]})}var U=function(){var e=(0,c.UO)().slug;return(0,n.useEffect)((function(){e&&d(e)}),[e]),(0,x.jsx)(a.aV,{children:(0,u.sm)(h,{getKey:function(e){return e.id},fn:function(e){return(0,x.jsx)(A,{data:e})}})})},z=function(){(0,u.DD)(p);var e=(0,u.oR)(b),t=(0,u.oR)(g);return e?(0,x.jsx)(a.KM,{errors:t}):null},V=function(){return i.wl.useIsAuth()?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(z,{}),(0,x.jsx)(N,{}),(0,x.jsx)(U,{})]}):null},W=["createdAt"];function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var L=(0,s.yM)(),M=(0,s.GW)((function(e){return l.U2("articles/".concat(e)).then((function(e){return e.data.article})).then((function(e){var t=e.createdAt;return G(G({},$(e,W)),{},{createdAt:new Date(t).toDateString()})}))})),F=(0,s.GW)((function(e){return l.IV("articles/".concat(e))})),T=(0,s.nu)(M.doneData,{title:"",slug:"",body:"",createdAt:"",updatedAt:"",tagList:[],description:"",author:{username:"",bio:"",image:"",following:!1},favorited:!1,favoritesCount:0}),q=(0,s.$e)(T,i.o4.Sj,(function(e,t){return e.author.username===t.username}));(0,s.eH)({from:L,to:F}),F.done.watch((function(){c.m8.push("/")}));var K=function(){return(0,u.oR)(T)},H=r(4080),X=function(){var e=K().tagList;return(0,x.jsx)(a.PS,{children:e.map((function(e){return(0,x.jsx)(a.Vp,{children:e.toLowerCase()},e)}))})},_=function(){var e=K().body;return(0,x.jsx)(a.X2,{className:"article-content",children:(0,x.jsxs)("div",{className:"col-xs-12",children:[(0,x.jsx)(H.Z,{children:e}),(0,x.jsx)(X,{})]})})},B=r(6763),Z=function(){var e=(0,u.oR)(q),t=K().slug;return e?(0,x.jsxs)("span",{children:[(0,x.jsx)(c.rU,{to:"/editor/".concat(t),children:(0,x.jsxs)(a.zx,{className:"btn-outline-secondary",size:"sm",children:[(0,x.jsx)("i",{className:"ion-edit"})," Edit Article"]})}),(0,x.jsxs)(a.zx,{className:"btn-sm btn-outline-danger",onClick:function(){L(t)},children:[(0,x.jsx)("i",{className:"ion-trash-a"})," Delete Article"]})]}):null},J=(0,n.memo)((function(){var e=K(),t=e.title,r=e.author,n=e.createdAt;return(0,x.jsx)(a.jL,{children:(0,x.jsxs)(a.W2,{children:[(0,x.jsx)("h1",{children:t}),(0,x.jsx)(B.qn,{author:r,createdAt:n,children:(0,x.jsx)(Z,{})})]})})})),Q=function(){return i.wl.useIsAuth()?null:(0,x.jsxs)("p",{children:[(0,x.jsx)(c.rU,{to:"/login",children:"Sign in"})," or ",(0,x.jsx)(c.rU,{to:"/register",children:"sign up"})," to add comments on this article."]})},Y=function(){var e=(0,c.UO)().slug,t=(0,u.oR)(M.pending);return(0,n.useEffect)((function(){e&&M(e)}),[e]),t?null:(0,x.jsxs)("div",{className:"article-page",children:[(0,x.jsx)(J,{}),(0,x.jsxs)(a.T3,{children:[(0,x.jsx)(_,{}),(0,x.jsx)("hr",{}),(0,x.jsx)("div",{className:"article-actions"}),(0,x.jsx)(a.X2,{children:(0,x.jsxs)("div",{className:"col-xs-12 col-md-8 offset-md-2",children:[(0,x.jsx)(V,{}),(0,x.jsx)(Q,{})]})})]})]})}}}]);