(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},24:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),s=(a(22),a(10)),i=a(11),l=a(15),u=a(12),m=a(16),d=a(13),h=a.n(d),f=(a(24),a(14)),p=a.n(f);function g(e){var t=e.images,a=e.shuffle;return r.a.createElement("ul",{className:"ImagesList"},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("img",{src:e.thumb,alt:"alt text",onClick:a.bind(null,t)}))}))}var b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],score:0},a.getImages=function(){return p.a.get("https://api.unsplash.com/photos/random",{params:{count:10},headers:{Authorization:"Client-ID ".concat("5ca4cc46736d8daf4d46c8b4135d7bbab09ef7b026934d46a647e0d593eedab6")}})},a.shuffle=function(e){var t=a.state.images;!0===t[e].clicked?(alert("Already clicked! Your High Score is: "+a.state.score),a.setState({score:0})):(t[e].clicked=!0,a.setState({score:a.state.score+1}));for(var n,r,o=t.length;0!==o;)r=Math.floor(Math.random()*o),n=t[o-=1],t[o]=t[r],t[r]=n;a.setState({images:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getImages().then(function(t){for(var a=[],n=0;n<t.data.length;n++)a.push({thumb:t.data[n].urls.thumb,clicked:!1});return e.setState({images:a}),a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),r.a.createElement(g,{images:this.state.images,shuffle:this.shuffle})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.8ce61499.chunk.js.map