(this["webpackJsonpmemory-state"]=this["webpackJsonpmemory-state"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"image":"https://blognumbers.files.wordpress.com/2010/09/1.jpg?w=231&h=300"},{"image":"https://blognumbers.files.wordpress.com/2010/09/2.jpg?w=231&h=300"},{"image":"https://blognumbers.files.wordpress.com/2010/09/3.jpg?w=231&h=300"},{"image":"/images/4.jpg"},{"image":"/images/5.jpg"},{"image":"/images/6.jpg"},{"image":"/images/7.jpg"},{"image":"/images/81.jpg"},{"image":"/images/9.jpg"}]')},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),c=a.n(r),i=(a(14),a(3)),l=a(4),s=a(7),m=a(5),g=a(8);a(15),a(16),a(18);var d=function(e){return o.a.createElement("div",{onClick:function(){return e.handler(e.image)}},o.a.createElement("img",{className:"pic",src:"/memory-card-game"+e.image,alt:e.image}))},u=a(6),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={clicked:[],carddata:u},a.getRandomInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},a.shuffle=function(e){console.log(e.length);for(var t=e.length,n=0;n<t;n++){var o=a.getRandomInt(0,t),r=e[n];e[n]=e[o],e[o]=r}return e},a.handleClick=function(e){console.log(e);var t=a.state.clicked;t.includes(e)?(console.log("------all ready been clicked-----"),alert("That has already been selected! GAME OVER!!!"),document.location.reload()):8===a.state.clicked.length&&(alert("YOU WON!! You must know how to count!"),document.location.reload()),t.push(e),a.setState({clicked:t},(function(){return console.log(a.state)}));var n=a.shuffle(a.state.carddata);console.log(a.state.carddata),console.log(n),a.setState({carddata:n})},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"red",style:{display:"flex"}},o.a.createElement("p",null,"#",this.state.clicked.length),this.state.carddata.map((function(t,a){return o.a.createElement(d,{image:t.image,key:a,handler:e.handleClick})})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.963acaf9.chunk.js.map