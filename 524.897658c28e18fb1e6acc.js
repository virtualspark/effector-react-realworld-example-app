"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[524],{3524:function(n,e,t){t.r(e),t.d(e,{HomePage:function(){return _},default:function(){return F}});var c=t(7378),r=t(7459),a=t(9701),s=t(8947),o=t(4246),u=(0,c.lazy)((function(){return Promise.all([t.e(216),t.e(916)]).then(t.bind(t,8916))})),l=(0,c.lazy)((function(){return Promise.all([t.e(216),t.e(759)]).then(t.bind(t,5759))})),i=(0,c.lazy)((function(){return Promise.all([t.e(216),t.e(593)]).then(t.bind(t,3593))})),d=(0,c.lazy)((function(){return t.e(74).then(t.bind(t,2074))})),h=function(){var n=(0,r.$B)().path,e=s.wl.useIsAuth();return(0,o.jsxs)(r.rs,{children:[(0,o.jsx)(r.AW,{exact:!0,path:"/home",children:e?(0,o.jsx)(r.l_,{to:"".concat(n).concat(r.ns.YOUR_FEED)}):(0,o.jsx)(r.l_,{to:"".concat(n).concat(r.ns.GLOBAL_FEED)})}),(0,o.jsx)(r.AW,{component:l,path:"".concat(n).concat(r.ns.GLOBAL_FEED)}),(0,o.jsx)(r.M8,{component:u,path:"".concat(n).concat(r.ns.YOUR_FEED)}),(0,o.jsx)(r.AW,{component:i,path:"".concat(n).concat(r.ns.FEED_BY_TAG)}),(0,o.jsx)(r.AW,{component:d,path:"*"})]})},x=t(9008),f=function(){return s.wl.useIsAuth()?null:(0,o.jsx)(a.jL,{children:(0,o.jsxs)(a.W2,{children:[(0,o.jsx)("h1",{className:"logo-font",children:x.i.toLowerCase()}),(0,o.jsx)("p",{children:"A place to share your Effector knowledge."})]})})},j=t(9041),m=t(98),g=function(n){var e=n.children;return(0,j.DD)(m.o.Gate),(0,o.jsxs)("aside",{className:"sidebar",children:[(0,o.jsx)("p",{children:"Popular Tags"}),e]})},p=function(n){var e=n.url;return s.wl.useIsAuth()?(0,o.jsx)(a.LY,{children:(0,o.jsx)(r.OL,{exact:!0,className:"nav-link",to:"".concat(e).concat(r.ns.YOUR_FEED),children:"Your Feed"})}):null},E=function(){var n=m.w.useCurrentTag(),e=(0,r.$B)().url;return(0,o.jsxs)("ul",{className:"feed-toggle nav nav-pills outline-active",children:[(0,o.jsx)(p,{url:e}),(0,o.jsx)(a.LY,{children:(0,o.jsx)(r.OL,{exact:!0,className:"nav-link",to:"".concat(e).concat(r.ns.GLOBAL_FEED),children:"Global Feed"})}),n&&(0,o.jsx)(a.LY,{children:(0,o.jsxs)(r.OL,{exact:!0,className:"nav-link",to:"".concat(e).concat(r.ns.FEED_BY_TAG,"?tag=").concat(n),children:[(0,o.jsx)("i",{className:"ion-pound"}),n]})})]})},v=(0,c.memo)((function(){var n=(0,r.$B)().url,e=m.w.useLoadTags();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.PS,{children:(0,j.sm)(m.o.$tags,{getKey:function(n){return n},fn:function(e){return(0,o.jsx)(r.rU,{className:"tag-default tag-pill",to:"".concat(n).concat(r.ns.FEED_BY_TAG,"?tag=").concat(e),type:"button",onClick:function(){return m.o.tagSelected(e)},children:e.toLowerCase()})}})}),(0,o.jsx)(a.$j,{show:e})]})})),L=(0,c.memo)((function(){return(0,o.jsxs)("main",{className:"col-md-9",children:[(0,o.jsx)(E,{}),(0,o.jsx)(r.eC,{children:(0,o.jsx)(h,{})})]})})),A=(0,c.memo)((function(){return(0,o.jsx)("div",{className:"col-md-3",children:(0,o.jsx)(g,{children:(0,o.jsx)(v,{})})})})),_=function(){return(0,o.jsxs)("div",{className:"home-page",children:[(0,o.jsx)(f,{}),(0,o.jsx)(a.T3,{children:(0,o.jsxs)(a.X2,{children:[(0,o.jsx)(L,{}),(0,o.jsx)(A,{})]})})]})},F=_},98:function(n,e,t){t.d(e,{o:function(){return c},w:function(){return r}});var c={};t.r(c),t.d(c,{$currentTag:function(){return x},$tags:function(){return h},Gate:function(){return d},getTagsFx:function(){return i},tagSelected:function(){return l}});var r={};t.r(r),t.d(r,{useCurrentTag:function(){return j},useLoadTags:function(){return f}});var a=t(1549),s=t(9041),o=t(8737),u=t(6942),l=(0,a.yM)(),i=(0,a.GW)((function(){return u.U2("tags").then((function(n){return n.data.tags}))})),d=(0,s.Bq)(),h=(0,a.nu)(i.doneData,[]),x=(0,a.nu)(l,"");(0,o.tJ)({store:x,key:"tag"}),(0,a.eH)({from:d.open,to:i});var f=function(){return(0,s.oR)(i.pending)},j=function(){return(0,s.oR)(x)}}}]);