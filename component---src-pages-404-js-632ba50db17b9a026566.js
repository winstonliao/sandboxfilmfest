(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(203),o=a(201);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},194:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(195),a(9).default.enqueue,r.a.createContext({})},195:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Sandbox Film Festival"}}}}},198:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(101);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},200:function(e,t,a){e.exports=a.p+"static/logo-cdbd89e35599ca2063ce56ab6f12fc76.png"},201:function(e,t,a){"use strict";var n=a(202),r=a(0),i=a.n(r),o=a(209),l=a.n(o);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,c=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Sandbox Film Festival",description:"Stanford University's 48-Hour Film Festival",author:"Winston Liao"}}}}},203:function(e,t,a){"use strict";var n=a(197),r=a(0),i=a.n(r),o=a(194),l=a(193),s=a(199),c=a.n(s),d=a(200),m=a.n(d);var p=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={showMobileNav:!1},t.hamburgerHandler=t.hamburgerHandler.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.hamburgerHandler=function(){var e=this;this.setState(function(e){return{showMobileNav:!e.showMobileNav}}),setTimeout(function(){document.body.style.overflowY=e.state.showMobileNav?"hidden":"scroll"},500)},r.render=function(){return i.a.createElement(u,null,i.a.createElement("div",{class:"left"},i.a.createElement(o.a,{to:"/#hero"},i.a.createElement("img",{src:m.a,alt:"logo",className:"logo"}),i.a.createElement("p",{className:"title"},this.props.siteTitle.toUpperCase()))),i.a.createElement("div",{class:"right"},i.a.createElement(c.a,{query:"(min-width: 1024.02px)"},i.a.createElement("nav",null,i.a.createElement(o.a,{to:"/#how_it_works"},"HOW IT WORKS"),i.a.createElement(o.a,{to:"/#watch"},"WATCH"),i.a.createElement(o.a,{to:"/#about"},"ABOUT"),i.a.createElement(o.a,{to:"/#sign_up"},"SIGN UP"),i.a.createElement(o.a,{to:"/#contact"},"CONTACT"))),i.a.createElement(c.a,{query:"(max-width: 1024px)"},i.a.createElement("div",{className:"mobile-nav"},i.a.createElement("div",{className:"nav-item dropdown"},i.a.createElement("p",{className:"nav-title hamburger",onClick:this.hamburgerHandler},this.state.showMobileNav?"✕":"☰"),i.a.createElement("nav",{onClick:this.hamburgerHandler,className:this.state.showMobileNav?"show":""},i.a.createElement(o.a,{to:"/#how_it_works"},"HOW IT WORKS"),i.a.createElement(o.a,{to:"/#watch"},"WATCH"),i.a.createElement(o.a,{to:"/#about"},"ABOUT"),i.a.createElement(o.a,{to:"/#sign_up"},"SIGN UP"),i.a.createElement(o.a,{to:"/#contact"},"CONTACT")),i.a.createElement("div",{className:"cover"}))))))},n}(r.Component),u=l.a.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-31ozxh-0"})(["z-index:10;height:4rem;width:100vw;position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:space-between;background-color:var(--black);color:var(--white);font-weight:var(--medium-weight);& div{padding:0 2rem;}& a{padding-right:3rem;display:inline-flex;align-items:center;cursor:pointer;color:var(--white);text-decoration:none;}& .logo{height:3vh;margin:0;padding-right:1.5rem;}& .left{padding-left:2rem;display:flex;align-items:center;& .title{display:inline;margin:0;font-size:var(--medium);}}& .right{font-size:var(--small);& nav{& a:last-child{padding:0;}}}& .mobile-nav{display:flex;text-align:left;font-size:var(--large);margin:0;padding:0;& .nav-item{padding:0;}& p{margin:0;}& nav{position:absolute;top:8vh;right:0;margin:0;height:100vh;transform:translateX(100%);background-color:var(--black);transition:transform 0.3s ease-in-out;& a{display:block;margin:1rem;width:auto;padding:2rem 4rem 2rem 2rem;cursor:pointer;font-size:1.5rem;&:last-child{padding:2rem 4rem 2rem 2rem;}}&.show{transform:translateX(0%);-webkit-box-shadow:0px 3px 8px 0px rgba(0,0,0,0.3);-moz-box-shadow:0px 3px 8px 0px rgba(0,0,0,0.3);box-shadow:0px 3px 8px 0px rgba(0,0,0,0.3);}}& .cover{position:absolute;right:0;width:100vw;}}@media (max-width:1024px){height:6rem;& a{padding:0;}}"]);p.defaultProps={siteTitle:""};var h=p,g=function(e){var t=e.siteTitle;return i.a.createElement(f,null,i.a.createElement("span",null,"© ",t.toUpperCase()," ",(new Date).getFullYear()))},f=l.a.footer.withConfig({displayName:"footer__StyledFooter",componentId:"r54yyk-0"})(["height:40vh;width:100vw;display:flex;align-items:center;justify-content:center;background-color:var(--black);color:var(--white);"]);g.defaultProps={siteTitle:""};var v=g;a(205),a(206);"undefined"!=typeof window&&a(207)('a[href*="#"]');t.a=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(v,{siteTitle:a.site.siteMetadata.title}))}}}]);
//# sourceMappingURL=component---src-pages-404-js-632ba50db17b9a026566.js.map