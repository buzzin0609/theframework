(this.webpackJsonpdocs=this.webpackJsonpdocs||[]).push([[0],{63:function(e,t,r){"use strict";(function(e){var n=r(1),a=r.n(n),o=r(12),i="";e&&Object({NODE_ENV:"production",PUBLIC_URL:"/docs",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}),t.a={token:null,getBaseUrl:function(){return i},getToken:function(){var e=this;return Object(o.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.token){t.next=2;break}return t.abrupt("return",e.token);case 2:return t.prev=2,r=localStorage.token,e.token=r,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(2),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})))()},setToken:function(e){this.token=e,localStorage.token=e},createHeaders:function(){var e=this;return Object(o.a)(a.a.mark((function t(){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={"Content-Type":"application/json"},t.next=3,e.getToken();case 3:return(n=t.sent)&&(r["x-user-token"]=n),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))()},loadFileFromUrl:function(e){return Object(o.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:"GET"});case 2:return r=t.sent,t.next=5,r.blob();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},uploadFile:function(e,t,r,n){var i=this;return Object(o.a)(a.a.mark((function o(){var c,s;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.loadFileFromUrl(r);case 2:return c=a.sent,a.prev=3,a.next=6,fetch(e,{method:t,body:c,headers:{"content-type":n||"image/png"}});case 6:if((s=a.sent)&&s.status&&200===s.status){a.next=10;break}throw console.log(s),Error("Could not upload");case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(3),i.handleUnexpectedError(a.t0);case 15:case"end":return a.stop()}}),o,null,[[3,12]])})))()},get:function(e){var t=this;return Object(o.a)(a.a.mark((function r(){var n,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.t0=fetch,r.t1=i+e,r.next=5,t.createHeaders();case 5:return r.t2=r.sent,r.t3={method:"GET",headers:r.t2},r.next=9,(0,r.t0)(r.t1,r.t3);case 9:return n=r.sent,r.next=12,n.json();case 12:if(!(o=r.sent).error){r.next=15;break}throw o.error;case 15:if(200===n.status){r.next=20;break}if(!Array.isArray(o)){r.next=19;break}if(!(o.length>0&&o[0].error)){r.next=19;break}throw Error(o[0].error);case 19:throw Error("Unexpected Error");case 20:return r.abrupt("return",o);case 23:r.prev=23,r.t4=r.catch(0),t.handleUnexpectedError(r.t4,n);case 26:case"end":return r.stop()}}),r,null,[[0,23]])})))()},delete:function(e,t){var r=this;return Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.run(e,t,"DELETE");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},post:function(e,t){var r=this;return Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.run(e,t,"POST");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},run:function(e,t,r){var n=this;return Object(o.a)(a.a.mark((function o(){var c,s;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.t0=fetch,a.t1=i+e,a.t2=r,a.next=6,n.createHeaders();case 6:return a.t3=a.sent,a.t4=JSON.stringify(t),a.t5={method:a.t2,headers:a.t3,body:a.t4},a.next=11,(0,a.t0)(a.t1,a.t5);case 11:return c=a.sent,a.next=14,c.json();case 14:if(!(s=a.sent).error){a.next=17;break}throw s.error;case 17:if(200===c.status){a.next=22;break}if(!Array.isArray(s)){a.next=21;break}if(!(s.length>0&&s[0].error)){a.next=21;break}throw Error(s[0].error);case 21:throw Error("Unexpected Error");case 22:return a.abrupt("return",s);case 25:a.prev=25,a.t6=a.catch(0),n.handleUnexpectedError(a.t6,c);case 28:case"end":return a.stop()}}),o,null,[[0,25]])})))()},stringifyNoQuotes:function(e){return JSON.stringify(e).replace(/\"([^(\")"]+)\":/g,"$1:")},stringifyAndEscape:function(e){var t=JSON.stringify(e);return JSON.stringify(t)},handleUnexpectedError:function(e,t){if(!t||401!==t.status)throw console.log(e),e.toString();this.onLoggedOutHandler&&this.onLoggedOutHandler()}}}).call(this,r(82))},65:function(e,t,r){e.exports=r(83)},70:function(e,t,r){},83:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(33),i=r.n(o),c=(r(70),r(1)),s=r.n(c),u=r(12),l=r(3),d=r(4),p=r(6),h=r(7),m=r(5),f=r(21),b="rgba(255, 118, 110, 1.00)",g="#ffffff",v={global:{methodIndicator:{paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,fontSize:15,fontWeight:"900",marginRight:10,borderRadius:4},typeIndicator:{paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,fontSize:13,fontWeight:"900",marginRight:10,borderRadius:4,backgroundColor:"rgba(242, 242, 247, 1.00)"},requiredIndicator:{color:g,paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,fontSize:13,fontWeight:"900",marginRight:10,borderRadius:4,backgroundColor:b},methodIndicatorMethods:{GET:{backgroundColor:"rgba(176, 245, 102, 1.00)"},POST:{backgroundColor:"rgba(92, 201, 245, 1.00)"},DELETE:{backgroundColor:b,color:g}},modalOverlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.1)",alignItems:"center",justifyContent:"center",display:"flex"},modal:{position:"absolute",top:"10%",left:"10%",right:"10%",bottom:0,backgroundColor:g,borderTopLeftRadius:10,borderTopRightRadius:10,padding:50},mainContainer:{display:"flex",justifyContent:"center",width:"100%"},mainInnerContainer:{paddingTop:50,width:"90%",maxWidth:1e3,minWidth:300}}},E=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{style:O.methodRow},a.a.createElement("div",{style:[v.global.methodIndicator,v.global.methodIndicatorMethods[this.props.method.method]]},this.props.method.method),a.a.createElement("h2",null,this.props.method.url))}}]),r}(n.Component),O={methodRow:{display:"flex",alignItems:"center",flexDirection:"row"}},y=Object(m.a)(E),j=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e="";return this.props.method.authRequired&&(e="\ud83d\udd11 "),a.a.createElement(f.b,{to:"/docs/methods?method=".concat(this.props.method.method,"&url=").concat(this.props.method.url)},a.a.createElement("div",{style:k.container},a.a.createElement(y,{method:this.props.method}),a.a.createElement("div",null,e,this.props.method.description)))}}]),r}(n.Component),k={container:{marginBottom:30,cursor:"pointer"}},x=Object(m.a)(j),w=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=this;return this.props.methods?a.a.createElement("div",null,this.props.methods.map((function(t){return a.a.createElement(x,{key:"".concat(t.method).concat(t.url),method:t,onClick:function(){return e.props.onShowMethod(t)}})}))):null}}]),r}(n.Component),C=Object(m.a)(w),S=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{style:v.global.mainContainer},a.a.createElement("div",{style:v.global.mainInnerContainer},a.a.createElement("h1",null,"API Docs"),a.a.createElement(C,{methods:this.props.methods})))}}]),r}(n.Component),T=Object(m.a)(S),R=r(14),I=r(63),L=r(64),U=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"renderRequired",value:function(){return this.props.parameter.required?a.a.createElement("div",{style:v.global.requiredIndicator},"*"):a.a.createElement("div",null)}},{key:"render",value:function(){return a.a.createElement("tr",{style:W.titleRow},a.a.createElement("td",null,a.a.createElement("div",{style:v.global.typeIndicator},"String")),a.a.createElement("td",null,this.renderRequired()),a.a.createElement("td",null,a.a.createElement("div",{style:W.id},this.props.parameter.id)),a.a.createElement("td",{style:W.descriptionCell},a.a.createElement("div",{style:W.description},this.props.parameter.description)))}}]),r}(n.Component),W={titleRow:{paddingBottom:10},id:{fontWeight:"700",fontSize:15},description:{fontSize:15,opacity:.5},descriptionCell:{paddingLeft:20}},B=Object(m.a)(U),D=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return this.props.parameters?a.a.createElement("table",{style:P.table},a.a.createElement("tbody",null,this.props.parameters.map((function(e){return a.a.createElement(B,{key:e.id,parameter:e})})))):null}}]),r}(n.Component),P={table:{borderSpacing:"0px 15px"}},_=Object(m.a)(D),A=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var n;Object(l.a)(this,r),n=t.call(this,e);var a=new URL(document.location).searchParams,o=a.get("method"),i=a.get("url");return n.state={url:{method:o,url:i}},n}return Object(d.a)(r,[{key:"getMethod",value:function(){var e,t=Object(L.a)(this.props.methods);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(r.method===this.state.url.method&&r.url===this.state.url.url)return r}}catch(n){t.e(n)}finally{t.f()}return null}},{key:"render",value:function(){if(this.props.loading)return null;var e=this.getMethod();return a.a.createElement("div",{style:v.global.mainContainer},a.a.createElement("div",{style:v.global.mainInnerContainer},a.a.createElement(y,{method:e}),a.a.createElement("div",null,e.description),a.a.createElement("div",{style:H.parameters},a.a.createElement("h3",null,"Parameters"),a.a.createElement(_,{parameters:e.parameters}))))}}]),r}(n.Component),H={parameters:{marginTop:30}},J=Object(m.a)(A),N=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).state={loading:!0,methods:null},n}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.reload()}},{key:"reload",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/docs.json");case 2:t=e.sent,this.setState({loading:!1,docsJson:t,methods:t.method});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement(f.a,null,a.a.createElement("div",null,a.a.createElement(R.c,null,a.a.createElement(R.a,{path:"/docs/methods"},a.a.createElement(J,{loading:this.state.loading,methods:this.state.methods})),a.a.createElement(R.a,{path:"/"},a.a.createElement(T,{methods:this.state.methods})))))}}]),r}(n.Component),q=Object(m.a)(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.c6469e08.chunk.js.map