(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],v=0,p=[];v<s.length;v++)o=s[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0c94":function(e,t,n){},"11ea":function(e,t,n){"use strict";var a=n("bf9e"),r=n.n(a);r.a},"18f1":function(e,t,n){"use strict";var a=n("aed1"),r=n.n(a);r.a},"3c7f":function(e,t,n){"use strict";var a=n("0c94"),r=n.n(a);r.a},4650:function(e,t,n){"use strict";var a=n("b173"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav",attrs:{id:"nav"}},[n("router-link",{staticClass:"brand",attrs:{to:"/"}},[e._v("Real World Events")]),n("nav",[n("router-link",{attrs:{to:{name:"event-list"}}},[e._v("List")]),e._v(" | "),n("router-link",{attrs:{to:{name:"event-create"}}},[e._v("Create")])],1)],1)},s=[],c={},l=c,u=(n("d474"),n("2877")),v=Object(u["a"])(l,o,s,!1,null,"78455de7",null),p=v.exports,d={components:{NavBar:p}},f=d,h=(n("034f"),Object(u["a"])(f,r,i,!1,null,null,null)),m=h.exports,_=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Events Listing")]),e._l(e.events,(function(e){return n("EventCard",{key:e.id,attrs:{event:e}})}))],2)},b=[],y=n("a34a"),w=n.n(y),x=n("bc3a"),C=n.n(x),E=C.a.create({baseURL:"http://localhost:3000",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),O={getEvents:function(){return E.get("/events")},getEvent:function(e){return E.get("/events/".concat(e))},postEvent:function(e){return E.post("/events",e)}},j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"event-link",attrs:{to:{name:"event-show",params:{id:e.event.id}}}},[n("div",{staticClass:"event-card -shadow"},[n("span",{staticClass:"eyebrow"},[e._v("@"+e._s(e.event.time)+" on "+e._s(e.event.date))]),n("h4",{staticClass:"title"},[e._v(e._s(e.event.title))]),n("BaseIcon",{attrs:{name:"users"}},[e._v(e._s(e.event.attendees.length)+" attending")])],1)])},k=[],$={props:{event:Object}},P=$,S=(n("18f1"),Object(u["a"])(P,j,k,!1,null,"78620668",null)),N=S.exports;function A(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(a,r)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){A(i,a,r,o,s,"next",e)}function s(e){A(i,a,r,o,s,"throw",e)}o(void 0)}))}}var M={components:{EventCard:N},data:function(){return{events:[]}},created:function(){var e=T(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getEvents();case 3:t=e.sent,n=t.data,this.events=n,e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},B=M,L=Object(u["a"])(B,g,b,!1,null,null,null),z=L.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"event-header"},[n("span",{staticClass:"eyebrow"},[e._v("@"+e._s(e.event.time)+" on "+e._s(e.event.date))]),n("h1",{staticClass:"title"},[e._v(e._s(e.event.title))]),n("h5",[e._v("Organized by "+e._s(e.event.organizer?e.event.organizer.name:""))]),n("h5",[e._v("Category: "+e._s(e.event.category))])]),n("BaseIcon",{attrs:{name:"map"}},[n("h2",[e._v("Location")])]),n("address",[e._v(e._s(e.event.location))]),n("h2",[e._v("Event details")]),n("p",[e._v(e._s(e.event.description))]),n("h2",[e._v("Attendees "),n("span",{staticClass:"badge -fill-gradient"},[e._v(e._s(e.event.attendees?e.event.attendees.length:0))])]),n("ul",{staticClass:"list-group"},e._l(e.event.attendees,(function(t,a){return n("li",{key:a,staticClass:"list-item"},[n("b",[e._v(e._s(t.name))])])})),0)],1)},F=[];function I(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(a,r)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){I(i,a,r,o,s,"next",e)}function s(e){I(i,a,r,o,s,"throw",e)}o(void 0)}))}}var W={props:["id"],data:function(){return{event:{}}},created:function(){var e=J(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getEvent(this.id);case 3:t=e.sent,n=t.data,this.event=n,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("There was an error:",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},R=W,U=(n("11ea"),Object(u["a"])(R,D,F,!1,null,"51f94cf8",null)),q=U.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Create an event")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.createEvent(t)}}},[n("label",[e._v("Select a category")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.event.category,expression:"event.category"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.event,"category",t.target.multiple?n:n[0])}}},e._l(e.categories,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0),n("h3",[e._v("Name & describe your event")]),n("div",{staticClass:"field"},[n("label",[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.title,expression:"event.title"}],attrs:{type:"text",placeholder:"Add an event title"},domProps:{value:e.event.title},on:{input:function(t){t.target.composing||e.$set(e.event,"title",t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",[e._v("Description")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.description,expression:"event.description"}],attrs:{type:"text",placeholder:"Add a description"},domProps:{value:e.event.description},on:{input:function(t){t.target.composing||e.$set(e.event,"description",t.target.value)}}})]),n("h3",[e._v("Where is your event?")]),n("div",{staticClass:"field"},[n("label",[e._v("Location")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.location,expression:"event.location"}],attrs:{type:"text",placeholder:"Add a location"},domProps:{value:e.event.location},on:{input:function(t){t.target.composing||e.$set(e.event,"location",t.target.value)}}})]),n("h3",[e._v("When is your event?")]),n("div",{staticClass:"field"},[n("label",[e._v("Date")]),n("datepicker",{attrs:{placeholder:"Select a date"},model:{value:e.event.date,callback:function(t){e.$set(e.event,"date",t)},expression:"event.date"}})],1),n("div",{staticClass:"field"},[n("label",[e._v("Select a time")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.event.time,expression:"event.time"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.event,"time",t.target.multiple?n:n[0])}}},e._l(e.times,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0)]),n("input",{staticClass:"button -fill-gradient",attrs:{type:"submit",value:"Submit"}})])])},H=[],K=n("fa33"),Q={data:function(){for(var e=[],t=1;t<=24;t+=1)e.push("".concat(t,":00"));return{event:this.createFreshEventObject(),categories:this.$store.state.categories,times:e}},components:{Datepicker:K["a"]},methods:{createEvent:function(){var e=this;this.$store.dispatch("createEvent",this.event).then((function(){e.$router.push({name:"event-show",params:{id:e.event.id}}),e.event=e.createFreshEventObject()})).catch((function(){console.log("There was a problem creating your event.")}))},createFreshEventObject:function(){var e=this.$store.state.user,t=Math.floor(1e7*Math.random());return{id:t,category:"",organizer:e,title:"",description:"",location:"",date:"",time:"",attendees:[]}}}},V=Q,X=(n("4650"),Object(u["a"])(V,G,H,!1,null,"b7993644",null)),Y=X.exports;a["a"].use(_["a"]);var Z=new _["a"]({mode:"history",routes:[{path:"/",name:"event-list",component:z},{path:"/event/:id",name:"event-show",component:q,props:!0},{path:"/event/create",name:"event-create",component:Y}]}),ee=n("2f62");a["a"].use(ee["a"]);var te=new ee["a"].Store({state:{events:[],user:{id:"abc123",name:"Adam Jahr"},categories:["sustainability","nature","animal welfare","housing","education","food","community"]},mutations:{addEvent:function(e,t){e.events.push(t)}},actions:{createEvent:function(e,t){var n=e.commit;O.postEvent(t),n("addEvent",t)}},modules:{}}),ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon-wrapper"},[n("svg",{staticClass:"icon",attrs:{width:e.width,height:e.height}},[n("use",e._b({},"use",{"xlink:href":"/feather-sprite.svg#"+e.name},!1)),e._v(" // notice +name here ")]),e._t("default")],2)},ae=[],re={props:{name:String,width:{type:[Number,String],default:24},height:{type:[Number,String],default:24}}},ie=re,oe=(n("3c7f"),Object(u["a"])(ie,ne,ae,!1,null,"b5b9a6cc",null)),se=oe.exports;a["a"].component("BaseIcon",se),a["a"].config.productionTip=!1,new a["a"]({router:Z,store:te,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,n){},aed1:function(e,t,n){},b173:function(e,t,n){},bf9e:function(e,t,n){},d474:function(e,t,n){"use strict";var a=n("ebae"),r=n.n(a);r.a},ebae:function(e,t,n){}});
//# sourceMappingURL=app.5f14ab05.js.map