!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){const e=document.getElementById("main");e.innerHTML="";const t=document.createElement("figure");t.classList.add("col");const n=document.createElement("img");n.setAttribute("src","images/mitifotos.jpg"),t.appendChild(n);const o=document.createElement("article");o.classList.add("col");const a=document.createElement("h1");a.textContent="Loaf Oaf";const c=document.createElement("div");c.setAttribute("id","desc");const d=document.createElement("p");d.textContent="Jujubes macaroon wafer cookie jelly bear claw. Caramels carrot cake dessert. Muffin candy brownie oat cake topping gummi bears fruitcake cake.";const r=document.createElement("p");r.textContent="Bonbon jujubes icing pie. Apple pie sugar plum chocolate chupa chups fruitcake brownie. Cotton candy gingerbread macaroon sweet roll danish. Dessert tart jelly beans chocolate bar jelly.",o.appendChild(a),c.appendChild(d),c.appendChild(r),o.appendChild(c),e.appendChild(t),e.appendChild(o),console.log("Loaded Home")}function a(){const e=document.getElementById("content"),t=document.createElement("nav");t.setAttribute("id","navbar");const n=document.createElement("div");n.setAttribute("id","left");const a=document.createElement("div");a.classList.add("nav-item"),a.addEventListener("click",()=>o()),a.textContent="home";const c=document.createElement("div");c.classList.add("nav-item"),c.addEventListener("click",()=>function(){const e=document.getElementById("main");e.innerHTML="";const t=document.createElement("article");t.classList.add("col");const n=document.createElement("div");n.setAttribute("id","desc");const o=document.createElement("h1");o.textContent="Loaf Oaf";const a=document.createElement("p");a.textContent="Jujubes macaroon wafer cookie jelly bear claw. Caramels carrot cake dessert. Muffin candy brownie oat cake topping gummi bears fruitcake cake.";const c=document.createElement("p");c.textContent="Bonbon jujubes icing pie. Apple pie sugar plum chocolate chupa chups fruitcake brownie. Cotton candy gingerbread macaroon sweet roll danish. Dessert tart jelly beans chocolate bar jelly.",n.appendChild(o),n.appendChild(a),n.appendChild(c),t.appendChild(n),e.appendChild(t),console.log("Loaded About")}()),c.textContent="about",n.appendChild(a),n.appendChild(c);const d=document.createElement("div");d.setAttribute("id","right");const r=document.createElement("div");r.classList.add("nav-item"),r.addEventListener("click",()=>function(){const e=document.getElementById("main");e.innerHTML="";const t=document.createElement("article");t.classList.add("col");const n=document.createElement("div");n.setAttribute("id","desc");const o=document.createElement("h1");o.textContent="Menu";const a=document.createElement("p");let c=document.createElement("em");c.textContent="Menu Item #1",a.appendChild(c);let d=document.createTextNode("Jujubes macaroon wafer cookie jelly bear claw. Caramels carrot cake dessert. Muffin candy brownie oat cake topping gummi bears fruitcake cake.");a.appendChild(d);const r=document.createElement("p");c=document.createElement("em"),c.textContent="Menu Item #2",r.appendChild(c),d=document.createTextNode("Bonbon jujubes icing pie. Apple pie sugar plum chocolate chupa chups fruitcake brownie. Cotton candy gingerbread macaroon sweet roll danish. Dessert tart jelly beans chocolate bar jelly."),r.appendChild(d);const i=document.createElement("p");c=document.createElement("em"),c.textContent="Menu Item #3",i.appendChild(c),d=document.createTextNode("Jujubes macaroon wafer cookie jelly bear claw. Caramels carrot cake dessert. Muffin candy brownie oat cake topping gummi bears fruitcake cake."),i.appendChild(d);const l=document.createElement("p");c=document.createElement("em"),c.textContent="Menu Item #4",l.appendChild(c),d=document.createTextNode("Bonbon jujubes icing pie. Apple pie sugar plum chocolate chupa chups fruitcake brownie. Cotton candy gingerbread macaroon sweet roll danish. Dessert tart jelly beans chocolate bar jelly."),l.appendChild(d);const u=document.createElement("p");c=document.createElement("em"),c.textContent="Menu Item #5",u.appendChild(c),d=document.createTextNode("Jujubes macaroon wafer cookie jelly bear claw. Caramels carrot cake dessert. Muffin candy brownie oat cake topping gummi bears fruitcake cake."),u.appendChild(d),n.appendChild(o),n.appendChild(a),n.appendChild(r),n.appendChild(i),n.appendChild(l),n.appendChild(u),t.appendChild(n),e.appendChild(t),console.log("Loaded Menu")}()),r.textContent="menu";const i=document.createElement("div");i.classList.add("nav-item"),i.addEventListener("click",()=>{console.log("Loaded Contact")}),i.textContent="contact",d.appendChild(r),d.appendChild(i);const l=document.createElement("figure");l.setAttribute("id","logo"),t.appendChild(n),t.appendChild(d),t.appendChild(l);const u=document.createElement("section");u.setAttribute("id","main"),e.appendChild(t),e.appendChild(u)}n.r(t),a(),o(),function(){const e=document.getElementById("content"),t=document.createElement("footer");t.setAttribute("id","footer");const n=document.createElement("div");n.textContent="Pictures courtesy of @mitifotos and @moniqa from Unsplash.",t.appendChild(n),e.appendChild(t)}()}]);