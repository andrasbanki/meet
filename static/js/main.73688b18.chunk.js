(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{187:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},343:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(82),o=n.n(r),s=(n(187),n(25)),i=n.n(s),c=n(48),u=n(22),l=n(28),h=n(23),d=n(24),f=(n(189),n(190),n(6)),p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showHideDetails:!1},e.handleButton=function(){e.setState((function(e){return{showHideDetails:!e.showHideDetails}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h1",{className:"eventName",children:t.summary}),Object(f.jsx)("p",{className:"eventDate",children:t.start.dateTime}),Object(f.jsx)("p",{children:t.start.timeZone}),Object(f.jsx)("p",{className:"eventLocation",children:t.location}),!0===this.state.showHideDetails&&Object(f.jsx)("p",{className:"eventDetails",children:t.description}),!1===this.state.showHideDetails&&Object(f.jsx)("button",{className:"showDetailsButton",onClick:function(){return e.handleButton()},children:"show details"}),!0===this.state.showHideDetails&&Object(f.jsx)("button",{className:"hideDetailsButton",onClick:function(){return e.handleButton()},children:"hide details"})]})}}]),n}(a.Component),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),m=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),b=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(m),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(m),g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(m),w=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t,e.props.eventToShow)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)(b,{text:this.state.infoText}),Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventToShow:"32",errorText:""},e.handleInputChanged=function(t){var n=t.target.value;return n<1?e.setState({eventToShow:n,errorText:"Please choose a number between 1 and 32!"}):n>32?e.setState({errorText:"Please choose a number between 1 and 32!",eventToShow:n}):(e.setState({eventToShow:n,errorText:""}),void e.props.updateNumberOfEvents(t.target.value))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.eventToShow;return Object(f.jsxs)("div",{className:"numberOfEvents",children:[Object(f.jsx)("p",{children:"Number of Events:"}),Object(f.jsx)("input",{type:"text",className:"eventsNumber",value:t,onChange:function(t){return e.handleInputChanged(t)}}),Object(f.jsx)(j,{text:this.state.errorText})]})}}]),n}(a.Component),O=n(177),x=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],k=n(111),S=n.n(k),T=n(70),C=n.n(T),N=function(e){var t=e.map((function(e){return e.location}));return Object(O.a)(new Set(t))},E=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Z=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",x);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),C.a.done(),console.log(t),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,D();case 11:if(!(n=e.sent)){e.next=21;break}return E(),a="https://7l0kebp6oh.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,S.a.get(a);case 17:return(r=e.sent).data&&(o=N(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),C.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,S.a.get("https://7l0kebp6oh.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&W(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://7l0kebp6oh.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=n(345),B=n(349),q=n(173),L=n(174),M=n(73),J=n(178),U=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],eventToShow:"32",currentCity:"all",warningText:""},e.updateEvents=function(t,n){Z().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),currentCity:t})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t,n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.eventToShow,this.mounted=!0,Z().then((function(e){n.mounted&&n.setState({events:e.slice(0,t),locations:N(e)})})),navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"It looks like you are offline. Don't worry, you can still see your events."});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateNumberOfEvents",value:function(e){this.setState({numberOfEvents:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Meet App"}),Object(f.jsx)("h4",{children:"Choose your nearest city"}),Object(f.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(f.jsx)(y,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}}),Object(f.jsx)(g,{text:this.state.warningText}),Object(f.jsx)("h4",{children:"Events in each city"}),Object(f.jsxs)(A.a,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},children:[Object(f.jsx)(B.a,{}),Object(f.jsx)(q.a,{type:"category",dataKey:"city",name:"city"}),Object(f.jsx)(L.a,{type:"number",dataKey:"number",name:"number of events"}),Object(f.jsx)(M.a,{cursor:{strokeDasharray:"3 3"}}),Object(f.jsx)(J.a,{data:this.getData(),fill:"#8884d8"})]}),Object(f.jsx)(v,{events:this.state.events})]})}}]),n}(a.Component),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,351)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(175).config("5a66c690c1f149d3959e40169e24e4da").install(),o.a.render(Object(f.jsx)(U,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(t,e)}))}}(),F()}},[[343,1,2]]]);
//# sourceMappingURL=main.73688b18.chunk.js.map