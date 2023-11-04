"use strict";(self.webpackChunkyoutube_clone=self.webpackChunkyoutube_clone||[]).push([[152],{5152:function(e,s,t){t.r(s),t.d(s,{default:function(){return D}});var l=t(9439),n=t(2791),a=t(9434),r=t(8499),i=t(1087),c=t(7692),d=t(184),u=function(e){var s=e.name,t=e.text;return(0,d.jsxs)("div",{className:"p-2 flex items-center bg-gray-50 mb-2 dark:bg-slate-800 dark:text-white",children:[(0,d.jsx)(c.ePx,{className:" dark:bg-slate-800 text-2xl",alt:"user-Icon"}),(0,d.jsx)("p",{className:"font-bold px-2",children:s}),(0,d.jsx)("p",{children:t})]})},o=t(5100),x=t(3585),m=function(){var e=(0,a.I0)(),s=(0,n.useState)(""),t=(0,l.Z)(s,2),r=t[0],i=t[1],c=(0,a.v9)((function(e){return e.chat.chatList}));return console.log(c),(0,n.useEffect)((function(){var s=setInterval((function(){e((0,o.Z)({name:(0,x.Dj)(),text:(0,x.Jf)(10)}))}),2e3);return function(){clearInterval(s)}}),[]),(0,d.jsxs)("div",{className:"border border-black w-full  p-2 mb-1 rounded-lg shadow-lg dark:border-white",children:[(0,d.jsx)("div",{className:"flex flex-col-reverse overflow-y-scroll h-[380px]",children:c.map((function(e,s){return(0,d.jsx)(u,{name:e.name,text:e.text},e.name+s)}))}),(0,d.jsxs)("form",{className:"items-center my-2",onSubmit:function(e){e.preventDefault()},children:[(0,d.jsx)("input",{className:"border border-black rounded-sm shadow-lg ml-4 px-2 dark:border-white dark:bg-slate-700",value:r,type:"text",onChange:function(e){i(e.target.value)}}),(0,d.jsx)("button",{className:"font-bold px-2 py-1 mx-2 bg-green-100 dark:bg-slate-500",onClick:function(){e((0,o.Z)({name:"BabuRao",text:r})),i("")},children:"Submit"})]})]})},h=t(4165),v=t(5861),f=t(3185),p=function(e){var s,t,a,r,i,c=e.channelId,u=e.channelTitle,o=(0,n.useState)(null),m=(0,l.Z)(o,2),p=m[0],j=m[1];(0,n.useEffect)((function(){b()}),[]);var b=function(){var e=(0,v.Z)((0,h.Z)().mark((function e(){var s,t;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x.Gc+"&id="+c);case 2:return s=e.sent,e.next=5,s.json();case 5:t=e.sent,j(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(null==p)return(0,d.jsx)(d.Fragment,{});var g=(null===p||void 0===p||null===(s=p.items[0].snippet)||void 0===s||null===(t=s.thumbnails)||void 0===t||null===(a=t.high)||void 0===a?void 0:a.url)||{},N=null===p||void 0===p||null===(r=p.items[0])||void 0===r||null===(i=r.statistics)||void 0===i?void 0:i.subscriberCount;return(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("img",{className:"w-14 h-14 mr-1 rounded-full",alt:"channelImage",src:g}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"font-semibold text-lg",children:u}),(0,d.jsxs)("p",{className:"text-xs",children:[(0,f.abbreviateNumber)(N)," subscribers"]})]})]})},j=t(3524),b=t(3853),g=t(8820),N=function(e){var s,t,l,n=e.data,a=n=null===(s=n)||void 0===s||null===(t=s.snippet)||void 0===t||null===(l=t.topLevelComment)||void 0===l?void 0:l.snippet,r=a.authorDisplayName,i=a.authorProfileImageUrl,c=a.likeCount,u=a.publishedAt,o=a.textDisplay;return(0,d.jsxs)("div",{className:"flex mb-2",children:[(0,d.jsx)("img",{className:"w-10 h-12 mr-4 py-1 rounded-full",alt:"user",src:i}),(0,d.jsxs)("div",{className:" w-full",children:[(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("p",{className:"mr-2 text-base font-semibold",children:["@",r.split(" ").join("")]}),(0,d.jsx)("p",{className:"",children:u.split("T")[0]})]}),(0,d.jsx)("p",{className:"",children:o}),(0,d.jsxs)("div",{className:"flex my-1 items-center",children:[(0,d.jsx)(g.DZs,{className:"text-xl"}),(0,d.jsx)("p",{className:"text-center mx-2",children:(0,f.abbreviateNumber)(c)}),(0,d.jsx)(g.qBr,{className:"text-xl"})]})]}),(0,d.jsx)("div",{className:"mr-3 mt-3 text-xl flex justify-end w-full",children:(0,d.jsx)(b.$Pu,{})})]})},w=function(e){var s=e.videoId,t=e.commentCount,a=(0,n.useState)(null),r=(0,l.Z)(a,2),i=r[0],c=r[1];(0,n.useEffect)((function(){u()}),[s]);var u=function(){var e=(0,v.Z)((0,h.Z)().mark((function e(){var t,l;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x._8+s);case 2:return t=e.sent,e.next=5,t.json();case 5:l=e.sent,c(l.items);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null==i?(0,d.jsx)("div",{children:"Loading"}):(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{className:"my-2",children:[t," Comments"]}),i.map((function(e,s){return(0,d.jsx)(N,{data:e},s)}))]})},y=t(5118),k=function(e){var s=e.videoId,t=(0,n.useState)(null),a=(0,l.Z)(t,2),r=a[0],i=a[1];(0,n.useEffect)((function(){T()}),[s]);var u=(null===r||void 0===r?void 0:r.snippet)||{},o=u.channelId,m=u.channelTitle,g=u.description,N=u.tags,k=u.title,Z=u.publishedAt,I=(null===r||void 0===r?void 0:r.statistics)||{},C=I.commentCount,D=I.likeCount,S=I.viewCount,T=function(){var e=(0,v.Z)((0,h.Z)().mark((function e(){var t,l;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x.cB+"&id="+s);case 2:return t=e.sent,e.next=5,t.json();case 5:l=e.sent,i(null===l||void 0===l?void 0:l.items[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(null!=N)var E=N.slice(0,5);return null==r?(0,d.jsx)("div",{}):(0,d.jsxs)("div",{className:"flex flex-col w-full",children:[(0,d.jsx)("div",{className:"my-2 font-semibold text-lg",children:k}),(0,d.jsxs)("div",{className:"flex items-center my-2 justify-between",children:[(0,d.jsxs)("div",{className:"flex items-center ",children:[(0,d.jsx)(p,{channelId:o,channelTitle:m}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{className:"mx-4 p-2 px-4 bg-black text-white dark:bg-white dark:text-black rounded-full",children:"Subscribe"})})]}),(0,d.jsxs)("div",{className:"flex items-center max-sm:hidden",children:[(0,d.jsxs)("div",{className:"m-2  flex items-center bg-gray-100 dark:bg-slate-800 p-2 px-6 rounded-full dark:border border-white",children:[(0,d.jsx)(c.UZT,{className:"text-xl mr-1"}),(0,d.jsx)("p",{className:"mx-1 text-sm",children:(0,f.abbreviateNumber)(D)}),(0,d.jsx)("p",{className:"mx-1",children:"|"}),(0,d.jsx)(c.MZj,{className:"text-xl ml-1"})]}),(0,d.jsxs)("div",{className:"m-2 flex items-center text-center bg-gray-100 p-2 px-6 rounded-full justify-between  dark:bg-slate-800 dark:border border-white ",children:[(0,d.jsx)(j.m$7,{className:"text-xl mr-1"}),(0,d.jsx)("p",{className:"font-medium ml-1",children:"Share"})]}),(0,d.jsx)("div",{className:"bg-gray-100 p-2 rounded-full ml-2 dark:bg-slate-800 dark:border border-white hidden md:block ",children:(0,d.jsx)(b.K9M,{})})]})]}),(0,d.jsxs)("div",{className:"bg-gray-100 p-2 rounded-xl px-4 dark:bg-slate-600 ",children:[(0,d.jsxs)("div",{className:"lg:flex",children:[(0,d.jsxs)("p",{className:"flex",children:[(0,d.jsx)("span",{className:"font-semibold mr-2",children:(0,f.abbreviateNumber)(S)})," views"]}),(0,d.jsx)("p",{className:"lg:ml-2 font-medium",children:(0,y.k)(Z)}),null!=N&&N.length>0," && ",(0,d.jsxs)("p",{className:"text-blue-800 dark:text-blue-500",children:["#",N[0]]}),null!=N&&N.length>1," && ",(0,d.jsxs)("p",{className:"text-blue-800 dark:text-blue-500",children:["#",N[1]]}),null!=N&&N.length>2," && ",(0,d.jsxs)("p",{className:"text-blue-800 dark:text-blue-500",children:["#",N[2]]})]}),(0,d.jsx)("p",{className:"text-clip",children:g.split("\n")[0]}),(0,d.jsx)("div",{className:"lg:flex",children:E.map((function(e,s){return(0,d.jsxs)("p",{children:["#",e]},s)}))})]}),(0,d.jsx)("div",{className:"p-2",children:(0,d.jsx)(w,{videoId:s,commentCount:C})})]})},Z=function(e){var s,t,a,r,i=e.data,c=null===i||void 0===i||null===(s=i.contentDetails)||void 0===s||null===(t=s.upload)||void 0===t?void 0:t.videoId,u=(0,n.useState)(null),o=(0,l.Z)(u,2),m=o[0],p=o[1];(0,n.useEffect)((function(){j()}),[]);var j=function(){var e=(0,v.Z)((0,h.Z)().mark((function e(){var s,t;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x.cB+"&id="+c);case 2:return s=e.sent,e.next=5,s.json();case 5:t=e.sent,p(null===t||void 0===t?void 0:t.items[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(null==m)return(0,d.jsx)("div",{});var b=null===m||void 0===m?void 0:m.snippet,g=(b.channelId,b.channelTitle),N=b.publishedAt,w=b.title,k=(null===m||void 0===m||null===(a=m.snippet)||void 0===a||null===(r=a.thumbnails)||void 0===r?void 0:r.high).url,Z=(null===m||void 0===m?void 0:m.statistics).viewCount;return(0,d.jsxs)("div",{className:"grid grid-cols-12 flex mb-3 ml-1",children:[(0,d.jsx)("div",{className:"mr-2 col-span-5",children:(0,d.jsx)("img",{className:"h-24 w-80 rounded-lg ",alt:"thumbnail",src:k})}),(0,d.jsxs)("div",{className:"col-span-7",children:[(0,d.jsx)("p",{className:"line-clamp-2 mt-1 font-semibold text-sm",children:w}),(0,d.jsx)("p",{className:"line-clamp-1 text-sm text-gray-700 dark:text-slate-300",children:g}),(0,d.jsxs)("div",{className:"flex line-clamp-1 text-sm text-gray-500 items-center",children:[(0,d.jsxs)("p",{className:"mr-1 dark:text-slate-200 ",children:[(0,f.abbreviateNumber)(Z)," views"]}),(0,d.jsx)("span",{className:"mx-1 dark:text-slate-200 ",children:"."}),(0,d.jsx)("p",{className:"dark:text-slate-200 ",children:(0,y.k)(N)})]})]})]})},I=function(){return(0,d.jsxs)("div",{className:"h-24 grid grid-cols-12 bg-gray-50 mb-2 dark:bg-slate-800",children:[(0,d.jsx)("div",{className:"col-span-5 bg-gray-300 mr-2 rounded-lg dark:bg-slate-600"}),(0,d.jsxs)("div",{className:"col-span-7 bg-gray-100 grid grid-rows-4 py-1 dark:bg-slate-800",children:[(0,d.jsxs)("div",{className:"row-span-1  py-2 w-11/12",children:[(0,d.jsx)("p",{className:"bg-gray-300 h-1/2 rounded-lg "})," "]}),(0,d.jsxs)("div",{className:"row-span-1  py-2 w-11/12",children:[(0,d.jsx)("p",{className:"bg-gray-300 h-1/2 rounded-lg "})," "]}),(0,d.jsxs)("div",{className:"row-span-1  py-2 w-3/4",children:[(0,d.jsx)("p",{className:"bg-gray-300 h-1/2 rounded-lg"})," "]}),(0,d.jsxs)("div",{className:"row-span-1  py-2 w-1/2",children:[(0,d.jsx)("p",{className:"bg-gray-300 h-1/2 rounded-lg"})," "]})]})]})},C=function(){var e=(0,a.v9)((function(e){return e.channelId.channelId})),s=(0,n.useState)(null),t=(0,l.Z)(s,2),r=t[0],c=t[1];(0,n.useEffect)((function(){u()}),[]);var u=function(){var s=(0,v.Z)((0,h.Z)().mark((function s(){var t,l;return(0,h.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch(x.zv+e);case 2:return t=s.sent,s.next=5,t.json();case 5:l=s.sent,c(null===l||void 0===l?void 0:l.items);case 7:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return null==r?(0,d.jsxs)("div",{children:[(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{}),(0,d.jsx)(I,{})]}):(0,d.jsx)("div",{children:r.map((function(e,s){var t,l;return(0,d.jsx)(i.rU,{to:"/watch?v="+(null===e||void 0===e||null===(t=e.contentDetails)||void 0===t||null===(l=t.upload)||void 0===l?void 0:l.videoId),children:(0,d.jsx)(Z,{data:e})},s)}))})},D=function(){var e=(0,a.I0)(),s=(0,n.useState)(!1),t=(0,l.Z)(s,2),c=t[0],u=t[1],o=(0,i.lr)(),x=(0,l.Z)(o,1)[0].get("v");return(0,n.useEffect)((function(){e((0,r.Wj)())}),[]),(0,d.jsxs)("div",{className:"p-2 w-full pl-10 grid grid-cols-12  dark:bg-slate-800 dark:text-white",children:[(0,d.jsxs)("div",{className:"flex flex-col col-span-12 md:col-span-8 overflow-x-hidden mr-2",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsx)("iframe",{"data-testid":"iframe",width:"100%",height:"450",src:"https://www.youtube.com/embed/"+x+"?autoplay=1&mute=0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,className:"rounded-xl dark:bg-white"})}),(0,d.jsx)(k,{videoId:x})]}),(0,d.jsxs)("div",{className:"col-span-4 p-1 hidden md:block",children:[(0,d.jsxs)("div",{className:"w-full",children:[c&&(0,d.jsx)(m,{}),(0,d.jsx)("div",{className:"w-full flex justify-center rounded-3xl ",children:(0,d.jsx)("button",{"data-testid":"show-chat",onClick:function(){return u(!c)},className:"w-full py-2 border rounded-3xl my-2 hover:bg-gray-200 dark:hover:bg-slate-600",children:c?"Hide chat":"Show chat"})})]}),(0,d.jsx)(C,{})]})]})}},5118:function(e,s,t){t.d(s,{k:function(){return l}});var l=function(e){var s=new Date(e),t=new Date;return t.getFullYear()-s.getFullYear()?t.getFullYear()-s.getFullYear()+" years ago":t.getMonth()-s.getMonth()?t.getMonth()-s.getMonth()+" months ago":t.getDate()-s.getDate()==0?"Today":t.getDate()-s.getDate()==1?"1 day ago":t.getDate()-s.getDate()+" days ago"}}}]);
//# sourceMappingURL=152.810f1a0d.chunk.js.map