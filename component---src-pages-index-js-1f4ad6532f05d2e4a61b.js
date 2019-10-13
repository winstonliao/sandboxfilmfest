(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(194),o=a(203),l=a(201),s=a(193),c=a(199),m=a.n(c);var d=function(e){var t,a;function r(){var t;return(t=e.call(this)||this).state={actions:["WRITE","SHOOT","DIRECT","EDIT"],action:"WRITE"},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.componentDidMount=function(){this.changeAction(0)},n.changeAction=function(e){var t=this;setTimeout(function(){t.setState(function(t){return{action:t.actions[e%4]}}),t.changeAction(e+1)},1500)},n.render=function(){return i.a.createElement(p,{id:this.props.id},i.a.createElement("div",{className:"text"},i.a.createElement("p",{className:"subtitle"},"STANFORD UNIVERSITY'S"),i.a.createElement("p",{className:"title"},"SANDBOX ",i.a.createElement(m.a,{query:"(max-width: 1023.98px)"},i.a.createElement("br",null)),"FILM FEST"),i.a.createElement("div",{className:"action"},i.a.createElement("div",{className:"actionOuter"},i.a.createElement("span",{className:"actionInner"},this.state.action)),i.a.createElement("span",{className:"actionAfter"}," A MOVIE ",i.a.createElement(m.a,{query:"(max-width: 767.98px)"},i.a.createElement("br",null))," IN 48 HOURS"))),i.a.createElement("div",{className:"opacity"}))},r}(r.Component),p=s.a.div.withConfig({displayName:"heroSection__StyledHero",componentId:"sc-1x79e4r-0"})(["height:100vh;width:100vw;margin:0;padding-top:50vh;padding-left:15vw;background-image:url('../images/film.jpg');background-size:cover;background-position:center;background-repeat:none;& .opacity{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background-color:white;opacity:0.85;}& .text{position:absolute;z-index:2;display:inline;& span{font-size:var(--larger);font-weight:var(--heavy-weight);}& .subtitle{margin-bottom:0;padding-left:0.25rem;font-size:var(--medium);font-weight:var(--medium-weight);}& .title{margin-bottom:3rem;line-height:5rem;font-family:var(--display-font);font-weight:var(--display-weight);font-size:var(--display);}& .actionOuter{display:inline-block;height:1.75rem;}& .actionInner{border-bottom:solid 4px var(--yellow);}& .actionAfter{line-height:3.5rem;}}@media (max-width:767.98px){& .text{& .title{font-size:4rem;line-height:4rem;}& .action{font-size:0.75rem;& .actionAfter{line-height:2.5rem;}}}}@media (max-width:413.98px){padding-left:3rem;& .text{& .title{margin-bottom:1.5rem;line-height:4rem;}& > div{font-size:var(--small);}& .actionAfter{line-height:2.75rem;}}}"]),h=d,u=(a(23),function(e){var t=e.left,a=e.right;return i.a.createElement(g,null,i.a.createElement("div",{class:"left"},t),i.a.createElement("div",{class:"right"},a))}),g=s.a.div.withConfig({displayName:"splitLayout__StyledSplitLayout",componentId:"sc-130sdmv-0"})(["display:grid;grid-template-rows:100%;grid-template-columns:50% 50%;height:100vh;width:100vw;& > div > div{height:100%;padding-left:10rem;padding-right:10rem;}@media (max-width:1137px){& > div > div{padding-left:8rem;padding-right:8rem;}}@media (max-width:1024px){display:block;height:auto;& > div:first-child > div{padding-bottom:0;}& > div > div{height:auto;padding:10rem 16rem;}}@media (max-width:936.98px){& > div > div{padding:10rem 15rem;}}@media (max-width:767.98px){& > div > div{padding:10rem 10rem;}}@media (max-width:575.98px){& > div > div{padding:10rem 5rem;}}@media (max-width:413.98px){& > div > div{padding:10rem 3rem;}}"]);u.defaultProps={};var f=u,v=function(e){var t=e.title,a=e.text;return i.a.createElement(w,null,i.a.createElement("p",{className:"title"},t.toUpperCase()),i.a.createElement("p",{className:"text"},a))},w=s.a.div.withConfig({displayName:"paragraph__StyledParagraph",componentId:"sc-187ef18-0"})(["margin-bottom:5rem;& .title{font-size:var(--medium);font-weight:var(--heavy-weight);}& .text{font-size:var(--small);font-weight:var(--medium-weight);line-height:1rem;}@media (max-width:767.98px){& .title{font-size:1.5rem;}& .text{font-size:1.25rem;line-height:1.75rem;}}"]);v.defaultProps={title:"",text:""};var b=v,y=function(e){var t=e.children;return i.a.createElement(x,null,t)},x=s.a.div.withConfig({displayName:"paragraphContainer__StyledParagraphContainer",componentId:"x87ddk-0"})(["display:flex;flex-direction:column;justify-content:center;height:100%;width:100%;padding:10rem;background-color:var(--black);color:var(--white);& div:last-child{margin-bottom:0;}"]);y.defaultProps={};var E=y,k=function(e){var t=e.id;return i.a.createElement(S,{id:t},i.a.createElement(f,{left:i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("p",{className:"title"},"HOW",i.a.createElement("br",null),"IT",i.a.createElement("br",null),"WORKS")),right:i.a.createElement(E,null,N.map(function(e,t){return i.a.createElement(b,Object.assign({key:t},e))}))}))},N=[{title:"Preparation & Kickoff",text:"Before the film fest, you can form your team of four or sign up to be matched with others. At the kickoff, your team will randomly pick prompts from a set of three categories. You have to use at least two of them in your film."},{title:"Writing, Shooting, & Editing",text:"After kickoff, you have 48 hours to write, shoot, and edit your film. Your team members must be the main contributors to the creation of the film, though you may recruit actors and other crew members to help out!"}],S=s.a.div.withConfig({displayName:"howItWorksSection__StyledHowItWorksSection",componentId:"sc-1jt65zg-0"})(["& .title-wrapper{display:flex;align-items:center;height:100%;& .title{line-height:6rem;color:var(--black);font-family:var(--display-font);font-weight:var(--display-weight);font-size:var(--display);}}@media (max-width:1024px){& .title-wrapper{background-color:var(--black);border:none;& .title{color:var(--white);}}}@media (max-width:768px){& .title-wrapper .title{font-size:4rem;line-height:5rem;}}"]);k.defaultProps={};var C=k,H=(a(204),a(13),a(97),a(137),a(231),a(85)),_=a.n(H);var I=function(e){var t,a;function r(t){return e.call(this,t)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement(M,{isLight:this.props.isLight,onScroll:this.props.scrollHandler},this.props.children)},r}(r.Component),M=s.a.div.withConfig({displayName:"carousel__StyledCarousel",componentId:"sc-1vx44jg-0"})(["height:100%;overflow-y:scroll;& > div{margin:0 2.5rem 2.5rem 0;&:last-child{margin-bottom:0;}}&::-webkit-scrollbar{background-color:",";}&::-webkit-scrollbar-thumb{background-color:",";}@media (max-width:1024px){display:flex;flex-direction:row;overflow-x:scroll;overflow-y:hidden;white-space:nowrap;& div{display:inline-block;}& > div{&:last-child{margin-right:0;}}}"],function(e){return e.isLight?"var(--light-grey)":"var(--dark-grey)"},function(e){return e.isLight?"var(--black)":"var(--white)"});I.defaultProps={isLight:!0};var A=I;var z=function(e){var t,a;function r(t){return e.call(this,t)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement(T,{image:this.props.image,id:this.props.year,year:this.props.year,onClick:this.props.onClick},i.a.createElement("div",{class:"wrapper"},i.a.createElement("span",null,this.props.title.toUpperCase())))},r}(r.Component),T=s.a.div.withConfig({displayName:"filmItem__StyledFilmItem",componentId:"sc-1ourxt6-0"})(["cursor:pointer;& .wrapper{display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;height:0;padding-top:56.25%;background-image:url('","');background-size:cover;background-repeat:none;background-color:var(--black);text-shadow:0 0 5px var(--black);& span{display:inline-block;margin:3rem;line-height:2.25rem;font-family:var(--display-font);font-weight:var(--display-weight);font-size:var(--larger);color:var(--white);}}@media (max-width:1024px){& .wrapper{width:40rem;}& span{white-space:normal;}}@media (max-width:767.98px){& .wrapper{width:30rem;}}@media (max-width:413.98px){& .wrapper{width:20rem;& span{margin:1.5rem 2rem;line-height:1.5rem;font-size:var(--medium);}}}"],function(e){return e.image});z.defaultProps={title:"",image:"",year:0};var O=z;var P=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).clickHandler=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},a.clickHandler=a.clickHandler.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement(j,null,i.a.createElement("div",{className:this.props.showModal?"overlay active":"overlay",onClick:this.props.clickHandler},i.a.createElement("div",{className:"modal",onClick:this.clickHandler},i.a.createElement("a",{id:"x",onClick:this.props.clickHandler},"×"),this.props.children)))},r}(r.Component),j=s.a.div.withConfig({displayName:"modal__StyledModal",componentId:"jnfyg0-0"})(["z-index:100;position:fixed;& .overlay{height:0;padding:0;margin:0;visibility:visible;transition:visibility ease-in-out 0.3s;& *{visibility:hidden;}&.active{display:flex;align-items:center;justify-content:center;z-index:100;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.25);visibility:visible;& *{visibility:visible;}& .modal{background-color:var(--white);color:var(--black);position:absolute;-webkit-box-shadow:0px 3px 8px 0px rgba(0,0,0,0.3);-moz-box-shadow:0px 3px 8px 0px rgba(0,0,0,0.3);box-shadow:0px 3px 8px 0px rgba(0,0,0,0.3);& #x{position:absolute;top:1rem;right:1rem;line-height:var(--small);cursor:pointer;}}}}"]);P.defaultProps={showModal:!1};var R=P,L=(a(29),a(30),a(50),function(e){var t=e.title,a=e.year,r=e.logline,n=e.video,o=e.creators,l=e.actors,s=e.awards,c=e.prompts;return i.a.createElement(U,null,i.a.createElement("div",{className:"lightbox"},i.a.createElement("div",{className:"video"},i.a.createElement("div",{class:"embed-container"},i.a.createElement("iframe",{src:n,frameborder:"0",allowfullscreen:!0}))),i.a.createElement("div",{className:"main-info"},i.a.createElement("p",{className:"title"},t.toUpperCase()," ",i.a.createElement("span",null,a)),i.a.createElement("p",{className:"logline"},r)),i.a.createElement("div",{className:"desc"},i.a.createElement("div",{className:"category",id:"creators"},i.a.createElement("p",null,"CREATED BY"),Array.from(o).map(function(e,t){return i.a.createElement("p",{key:t},e)})),i.a.createElement("div",{className:"category",id:"actors"},i.a.createElement("p",null,"STARRING"),Array.from(l).map(function(e,t){return i.a.createElement("p",{key:t},e)})),s.length>0&&i.a.createElement("div",{className:"category",id:"awards"},i.a.createElement("p",null,"AWARDS 🏆"),Array.from(s).map(function(e,t){return i.a.createElement("p",{key:t},e)})),i.a.createElement("div",{className:"category",id:"prompts"},i.a.createElement("p",null,"PROMPTS"),Object.keys(c).map(function(e,t){return i.a.createElement("p",{className:"prompt"},i.a.createElement("span",null,e.charAt(0).toUpperCase()+e.slice(1),": "),i.a.createElement("span",null,c[e].charAt(0).toUpperCase()+c[e].slice(1)))})))))}),U=s.a.div.withConfig({displayName:"lightBox__StyledLightBox",componentId:"sc-18nxn1k-0"})(["& .lightbox{height:30rem;width:60rem;display:grid;grid-template-rows:3fr 1fr;grid-template-columns:3fr 1fr;grid-template-areas:'video desc' 'main-info desc'}& .embed-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;}& .embed-container iframe,.embed-container object,.embed-container embed{position:absolute;top:0;left:0;width:100%;height:100%;}& .video{grid-area:video;background-color:var(--black);}& .main-info{grid-area:main-info;padding:2rem;color:var(--white);background-color:var(--black);& .title{font-family:var(--display-font);font-weight:var(--display-weight);font-size:var(--larger);& > span{font-style:italic;font-weight:var(--light-weight);}}& .logline{margin-bottom:0;line-height:1rem;font-family:var(--main-font);font-size:var(--small);}}& .desc{padding:2rem;grid-area:desc;background-color:var(--white);& .category{margin-bottom:1.5rem;& p{margin-bottom:0;font-size:var(--small);line-height:1rem;}& p:first-child{font-size:var(--medium);font-weight:var(--heavy-weight);margin-bottom:0.5rem;}& .prompt{margin-bottom:0.5rem;& > span:first-child{font-weight:var(--heavy-weight);}}}}@media (max-width:1024px){& .lightbox{height:auto;width:75vw;display:flex;grid-template-rows:auto;flex-direction:column;}& .main-info{color:var(--black);background-color:var(--white);padding-bottom:0;& .title{line-height:2.5rem;}}& .desc{display:grid;grid-template-rows:auto auto;grid-template-columns:1fr 1fr;grid-template-areas:'creators actors' 'prompts awards'}& #creators{grid-area:'creators';}& #actors{grid-area:'actors';}& #prompts{grid-area:'prompts';margin-bottom:0;}& #awards{grid-area:'awards';margin-bottom:0;}}@media (max-width:413px){& .lightbox{max-height:75vh;}& .main-info{padding:2rem;}& .desc{display:flex;flex-direction:column;overflow-y:scroll;padding:0;margin:2rem;margin-top:0;}& #awards{margin-bottom:1.5rem;}}"]);L.defaultProps={title:"",logline:"",video:"",creators:[],actors:[],awards:[],prompts:{}};var W=L;function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F=function(e){var t,a;function r(){var t;return(t=e.call(this)||this).state={year:2019,film:J[0],showModal:!1},t.modalHandler=t.modalHandler.bind(B(t)),t.clickHandler=t.clickHandler.bind(B(t)),t.yearHandler=t.yearHandler.bind(B(t)),t.scrollHandler=t.scrollHandler.bind(B(t)),t.year2019=i.a.createRef(),t.year2018=i.a.createRef(),t.carousel=i.a.createRef(),t.filmRefs=J.reduce(function(e,t,a){return e[a]=i.a.createRef(),e},{}),t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.modalHandler=function(e){this.setState(function(t){return{showModal:!t.showModal,film:e}}),this.toggleScroll()},n.clickHandler=function(){this.setState(function(e){return{showModal:!e.showModal}}),this.toggleScroll()},n.yearHandler=function(e){var t=Array.from(this.carousel.current.props.children).findIndex(function(t){return t.props.year===e});this.setState(function(t){return{year:e}}),_.a.findDOMNode(this.filmRefs[t].current).scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},n.scrollHandler=function(){var e=this;console.log("scroll");var t={};Array.from(this.carousel.current.props.children).reverse().map(function(a,r){t[a.year]=_.a.findDOMNode(e.filmRefs[r].current).offsetTop}),console.log(this.carousel.offsetTop),console.log(t),t.keys().map(Number).forEach(function(a){e.carousel.scrollTop>=t[a]&&e.setState(function(e){return{year:a}})})},n.toggleScroll=function(){var e=this;setTimeout(function(){document.body.style.overflowY=e.state.showModal?"hidden":"scroll"},500)},n.render=function(){var e=this;return i.a.createElement(D,{id:this.props.id},i.a.createElement(f,{left:i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("span",null,"WATCH"),i.a.createElement("span",{className:2019===this.state.year?"underline":"",ref:this.year2019,onClick:function(){return e.yearHandler(2019)}},"2019"),i.a.createElement("span",{className:2018===this.state.year?"underline":"",ref:this.year2018,onClick:function(){return e.yearHandler(2018)}},"2018")),right:i.a.createElement("div",{className:"carousel-wrapper"},i.a.createElement(A,{ref:this.carousel,isLight:!0,onScroll:this.scrollHandler},J.map(function(t,a){return i.a.createElement(O,Object.assign({key:a,ref:e.filmRefs[a]},t,{onClick:function(){return e.modalHandler(t)}}))})))}),i.a.createElement(R,{showModal:this.state.showModal,clickHandler:this.clickHandler},i.a.createElement(W,this.state.film)))},r}(r.Component),D=s.a.div.withConfig({displayName:"watchSection__StyledWatchSection",componentId:"e9z6od-0"})(["& .title-wrapper{display:flex;flex-direction:column;justify-content:center;height:100%;& > span{position:relative;margin-right:auto;line-height:6rem;text-decoration:none;color:var(--black);font-family:var(--display-font);font-weight:var(--display-weight);font-size:var(--display);cursor:pointer;&:before{content:'';position:absolute;height:0;left:0;bottom:-8px;width:0;border-bottom:solid 8px var(--yellow);transition:width ease-in-out 0.2s;}&.underline:before{width:100%;}}}& .carousel-wrapper{padding:10rem 5rem 10rem 0;}@media (max-width:1024px){& .title-wrapper{background-color:var(--white);& .title,.desc{color:var(--black);}}& .carousel-wrapper{padding:10rem;height:auto;}}@media (max-width:767.98px){& .carousel-wrapper{padding:10rem 5rem;}& .title-wrapper span{font-size:4rem;line-height:5rem;}}@media (max-width:412.98px){& .carousel-wrapper{padding:10rem 3rem;}}"]),J=[{title:"Circulation",image:"../images/circulation.png",year:2019,video:"https://www.youtube.com/embed/aMn2dewvVwc",logline:"A little anger is good for the heart",awards:["Audience Choice","Best Actor","Best Editing"],creators:["Jason McRuer","Deedee Anderson","Jack Seibert"],actors:["Victor Ragsdale"],prompts:{image:"A boy staring at a lit candle",quote:"A little anger is good for the heart...the circulation, the skin"}},{title:"Interference Patterns",image:"../images/interference_patterns.png",year:2019,video:"https://www.youtube.com/embed/mSl6xigRc1g",logline:"Two friends with dysfunctional communication adventure for a day in a strange, post-apocalyptic world",awards:["Best Actress","Best Use of Prompts"],creators:["Jack Virnich","Alli Armstrong","Nina Zubrilina","Carmelle Millar"],actors:["Justine Kaneda","Alli Armstrong"],prompts:{image:"A person's reflection in a toaster",quote:"If you're going through hell, keep going",autocomplete:"Hey you can do that it sounds good but I think you can get a lot more fun at this point and I am sure it will if she is the only person I know about it yet lol"}},{title:"Firestruck",image:"../images/firestruck.png",year:2018,video:"https://www.youtube.com/embed/YlBkoGocaQo",logline:"A pyromaniac falls in a love with a firefighter",awards:["Best Screenplay"],creators:["Winston Liao","Robert Muni","Kati Uyemura","Erika DePalatis"],actors:["Kiko Ilagan","Katiana Uyemura"],prompts:{image:"Lady Gaga at with a long, white flowing gown",quote:"Love is friendship set on fire."}},{title:"Geo",image:"../images/geo.png",year:2018,video:"https://www.youtube.com/embed/bIcKHbf4LHM",logline:"Two finalists face off in the ultimate geocaching competition",awards:["Audience Choice","Best Actor","Best Screenplay"],creators:["Jack Virnich","Jason McRuer","Winston Liao"],actors:["Victor Ragsdale","Justine Kaneda","Kiko Ilagan"],prompts:{image:"Dishsoap poured onto a waffle",quote:"If you love a flower, you don't pick it"}},{title:"My Man",image:"../images/my_man.png",year:2018,video:"https://drive.google.com/file/d/1kSgCHSsbFF76yzZxZh89ZN4A4WrI9lO6/preview",logline:"You don't have to be admitted to come to Stanford",creators:["Alexander Kucy","Chelsea Sidrane","Max Drach","Harry Schwartz","Arnold Wu"],actors:["Max Drach","Robert Ehteshamzadeh"],prompts:{image:"Beer and cheese on a picnic table by the sea",autocomplete:"Ok, Yes, No"}},{title:"Stanford 48 Hour Film",image:"../images/48_hour.png",year:2018,video:"https://www.youtube.com/embed/ooc4x151Wr8",logline:"Film student makes 48 Hour film for Stanford festival",creators:["Maxwell Menzies"],actors:["Maxwell Menzies"],awards:["Most Likely to Inspire a Cult Film","Best Use of Prompts"],prompts:{image:"Dancers crouched in a line across a stage",autocomplete:"I will be there in the morning to see if you want to come by and see you soon to catch up on the phone with my mom and sister are you free to talk today or tomorrow to get the kids"}}],Y=F,K=(a(211),a(38),function(e){var t=e.image,a=e.name,r=e.bio,n=e.linkName,o=e.link;return i.a.createElement(q,{image:t},i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"image-wrapper"},i.a.createElement("div",{className:"image"})),i.a.createElement("div",{class:"text"},i.a.createElement("p",{className:"name"},a),i.a.createElement("p",{className:"bio"},r),i.a.createElement("a",{href:o,target:"_blank"},n," 🡕"))))}),q=s.a.div.withConfig({displayName:"profileItem__StyledProfileItem",componentId:"sc-67c7pd-0"})(["& .wrapper{position:relative;height:auto;color:var(--white);& .image-wrapper{position:absolute;right:0;width:15rem;& .image{overflow:hidden;width:100%;height:0;padding-top:100%;background-color:var(--dark-grey);background-image:url('","');background-size:cover;}}& .text{position:relative;padding-top:10rem;left:0;text-shadow:0 0 3px var(--black);& .name{top:20rem;margin-bottom:0.5rem;font-size:var(--medium);font-weight:var(--heavy-weight);}& .bio{top:30rem;margin-right:5rem;font-size:var(--small);font-weight:var(--medium-weight);line-height:1rem;}& a{font-weight:var(--heavy-weight);color:var(--white);text-decoration:none;}}}@media (max-width:1024px){& .wrapper{width:25rem;& .text{white-space:normal;& .name{font-size:1.75rem;line-height:2rem;}& .bio{font-size:1rem;line-height:1.5rem;}}& .image{display:block;}}}@media (max-width:768px){& .wrapper{width:22rem;}}"],function(e){return e.image});K.defaultProps={image:"",name:"",bio:"",linkName:"",link:""};var G=K,V=function(e){var t=e.id;return i.a.createElement(Q,{id:t},i.a.createElement(f,{left:i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("p",{className:"title"},"ABOUT"),i.a.createElement("p",{className:"desc"},X)),right:i.a.createElement("div",{className:"carousel-wrapper"},i.a.createElement(A,{isLight:!1},Z.map(function(e,t){return i.a.createElement(G,Object.assign({key:t},e))})))}))},X="The Sandbox Film Fest was started in 2018 with the goal of empowering people to engage in collaborative creativity. With participation from over 30 students, both new and experienced, the festival has produced six short films over two events.",Z=[{name:"Winston Liao",bio:"Winston is a designer, engineer, and filmmaker based in the San Francisco Bay Area. He is currently studying mechatronics at Stanford University with the goal of developing technologies that facilitate joyful interaction and meaningful connections.",link:"http://winstonliao.com",linkName:"Portfolio",image:"../images/winston.jpg"},{name:"Jack Virnich",bio:"Jack is an experimental filmmaker from Denver, Colorado and a graduate of the Film & Media studies department at Stanford. Jack loves horror movies and the Japanese new wave. His favorite movie is Under the Skin.",link:"https://www.youtube.com/channel/UC7zIOtDEG2bHlPPH1qHIrzg",linkName:"YouTube",image:"../images/jack.jpg"},{name:"Jason McRuer",bio:"Jason has been writing, directing, shooting, and editing short films since 2012. Having learned most of his skills by messing around on projects, he has loved the rapid growth that has come from these intense, adrenaline-packed weekends of filmmaking.",link:"https://www.jasonmcruer.com",linkName:"Portfolio",image:"../images/jason.jpg"}],Q=s.a.div.withConfig({displayName:"aboutSection__StyledAboutSection",componentId:"sc-2id320-0"})(["& .title-wrapper{display:flex;flex-direction:column;justify-content:center;height:100%;& .title{line-height:6rem;color:var(--black);font-family:var(--display-font);font-weight:var(--display-weight);font-size:var(--display);}}& .carousel-wrapper{height:100vh;padding:10rem 5rem 10rem 10rem;background-color:var(--black);}@media (max-width:1024px){& .title-wrapper{background-color:var(--black);& .title,.desc{color:var(--white);}}& .carousel-wrapper{padding:10rem;height:auto;}}@media (max-width:768px){& .carousel-wrapper{padding:10rem 5rem;}& .title-wrapper .title{font-size:4rem;line-height:5rem;}& .desc{font-size:1.25rem;line-height:1.75rem;}}@media (max-width:413px){& .carousel-wrapper{padding:10rem 3rem;}}"]);V.defaultProps={};var $=V,ee=a(232),te=a.n(ee),ae=(a(212),a(42),a(233)),re=a.n(ae);function ie(e,t,a,r,i,n,o){try{var l=e[n](o),s=l.value}catch(c){return void a(c)}l.done?t(s):Promise.resolve(s).then(r,i)}function ne(e,t){return oe.apply(this,arguments)}function oe(){var e;return e=te.a.mark(function e(t,a){var r;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach(function(e){if(""===t[e]){alert("Please fill in your "+e);var a=e.charAt(0).toUpperCase()+e.slice(1);throw new Error(a+" field is blank.")}}),r="https://script.google.com/macros/s/"+a+"/exec",console.log(r),e.next=5,re.a.ajax(r,{type:"GET",data:t,headers:{"Content-Type":"text/plain;charset=utf-8"}});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}),(oe=function(){var t=this,a=arguments;return new Promise(function(r,i){var n=e.apply(t,a);function o(e){ie(n,r,i,o,l,"next",e)}function l(e){ie(n,r,i,o,l,"throw",e)}o(void 0)})}).apply(this,arguments)}var le=function(e){var t=e.children;return i.a.createElement(se,null,t)},se=s.a.div.withConfig({displayName:"singleLayout__StyledSingleLayout",componentId:"sc-1mxwkom-0"})(["width:100vw;display:flex;flex-direction:column;justify-content:center;padding:10rem 25rem;@media (max-width:1399.98px){}@media (max-width:1024px){padding:10rem 15rem;height:auto;}@media (max-width:907.98px){}@media (max-width:767.98px){padding:10rem 10rem;}@media (max-width:575.98px){padding:10rem 5rem;}@media (max-width:413.98px){padding:10rem 3rem;}"]);le.defaultProps={};var ce=le,me=function(e){var t=e.name,a=e.label,r=e.placeholder,n=e.value,o=e.isLong,l=e.color,s=e.onChange;return i.a.createElement(de,{color:l},i.a.createElement("label",null,a),o?i.a.createElement("textarea",{type:"text",onChange:s,name:t,placeholder:r,value:n}):i.a.createElement("input",{type:"text",onChange:s,name:t,placeholder:r,value:n}))},de=s.a.div.withConfig({displayName:"input__StyledInput",componentId:"i5u41l-0"})(["color:",";& label{display:block;font-size:var(--medium);font-weight:var(--medium-weight);margin-bottom:1rem;}& >:nth-child(2){display:inline-block;height:auto;width:100%;padding:1rem;text-align:left;margin-bottom:1rem;line-height:1.5rem;font-weight:var(--light-weight);border:solid 2px ",";color:",";background-color:transparent;-webkit-box-shadow:0px 0px 0px 0px rgba(255,255,255,0);-moz-box-shadow:0px 0px 0px 0px rgba(255,255,255,0);box-shadow:0px 0px 0px 0px rgba(255,255,255,0);transition:ease-in-out 0.3s;&:focus{outline:none;-webkit-box-shadow:0px 0px 3px 0px ",";-moz-box-shadow:0px 0px 3px 0px ",";box-shadow:0px 0px 3px 0px ",";}}& input.transition{opacity:0;}& textarea{height:10rem !important;}"],function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color});me.defaultProps={name:"",label:"",placeholder:"",isLong:!1};var pe=me,he=function(e){var t=e.link,a=e.name,r=e.color,n=e.bgColor,o=e.onClick;return i.a.createElement(ue,{as:!t&&"a",to:t,color:r,bgColor:n,onClick:o},a)},ue=Object(s.a)(n.a).withConfig({displayName:"button__StyledButton",componentId:"r1rucv-0"})(["display:inline-block;width:100%;border:none;padding:1rem;text-align:center;cursor:pointer;color:",";background-color:",";font-size:var(--medium);font-weight:var(--medium-weight);-webkit-box-shadow:0px 0px 0px 0px rgba(255,255,255,0);-moz-box-shadow:0px 0px 0px 0px rgba(255,255,255,0);box-shadow:0px 0px 0px 0px rgba(255,255,255,0);transition:ease-in-out 0.3s;&:hover{outline:none;-webkit-box-shadow:0px 0px 3px 0px ",";-moz-box-shadow:0px 0px 3px 0px ",";box-shadow:0px 0px 3px 0px ",";}"],function(e){return e.bgColor},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color});he.defaultProps={link:"",name:""};var ge=he,fe=function(e){var t=e.headline,a=e.message;return i.a.createElement(ve,null,i.a.createElement("div",{className:"messageBox"},i.a.createElement("p",{className:"headline"},t),i.a.createElement("p",{className:"message"},a)))},ve=s.a.div.withConfig({displayName:"messageBox__StyledMessageBox",componentId:"a2paju-0"})(["display:flex;flex-direction:column;justify-content:center;padding:2rem;color:var(--black);font-family:var(--main-font);& .messageBox{width:20rem;}& .headline{text-align:center;font-size:var(--large);font-weight:var(--heavy-weight);}& .message{margin-bottom:0;font-weight:var(--medium-weight);}"]);fe.defaultProps={title:"",message:""};var we=fe;function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ye=function(e){var t,a;function r(){var t;return(t=e.call(this)||this).state={email:"",showModal:!1},t.submitHandler=t.submitHandler.bind(be(t)),t.changeHandler=t.changeHandler.bind(be(t)),t.modalHandler=t.modalHandler.bind(be(t)),t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.changeHandler=function(e){var t,a=e.target.name;this.setState(((t={})[a]=e.target.value,t))},n.submitHandler=function(){var e=this;ne({email:this.state.email},"AKfycbxrxqY2lHV3Tvg-XBtuIv1SqlNVF3U9yDt9tLdt5Cs3zsEHedY").then(function(){e.setState({email:""}),e.modalHandler()}).catch(function(e){console.log(e),e.responseJSON&&e.responseJSON.errors&&alert("An error has occurred with submitting your email. Please try again.")})},n.modalHandler=function(){var e=this;this.setState(function(e){return{showModal:!e.showModal}}),setTimeout(function(){document.body.style.overflowY=e.state.showModal?"hidden":"scroll"},500)},n.render=function(){return i.a.createElement(xe,{id:this.props.id},i.a.createElement(ce,null,i.a.createElement("p",{className:"title"},"SIGN UP"),i.a.createElement("p",{className:"desc"},"We are planning more events in the future, most likely in early 2020. Please sign up below to be added to our mailing list so you can get announcements sent directly to your inbox!"),i.a.createElement(pe,{onChange:this.changeHandler,name:"email",label:"EMAIL",placeholder:"Email Address",color:"var(--white)",isLong:!1,value:this.state.email}),i.a.createElement(ge,{name:"SUBMIT",color:"var(--white)",bgColor:"var(--yellow)",onClick:this.submitHandler})),i.a.createElement(R,{showModal:this.state.showModal,clickHandler:this.modalHandler},i.a.createElement(we,{headline:"Thanks!",message:"You have been added to our mailing list."})))},r}(r.Component),xe=s.a.div.withConfig({displayName:"signUpSection__StyledSignUpSection",componentId:"sc-1ge08x-0"})(["color:var(--white);background-color:var(--yellow);& > div{height:100vh;}& .title{text-align:center;font-family:var(--display-font);font-weight:var(--display-weight);font-size:var(--display);margin-bottom:4rem;}@media (max-width:1023.98px){& > div{height:auto;}}@media (max-width:767.98px){& .title{font-size:4rem;line-height:1rem;}& .desc{font-size:1.25rem;line-height:1.75rem;}}"]),Ee=ye;function ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ne=function(e){var t,a;function r(){var t;return(t=e.call(this)||this).state={name:"",email:"",message:"",showModal:!1},t.submitHandler=t.submitHandler.bind(ke(t)),t.changeHandler=t.changeHandler.bind(ke(t)),t.modalHandler=t.modalHandler.bind(ke(t)),t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.changeHandler=function(e){var t,a=e.target.name;this.setState(((t={})[a]=e.target.value,t))},n.submitHandler=function(){var e=this;ne({name:this.state.name,email:this.state.email,message:this.state.message},"AKfycbwFPuP10IEAXi8ANDLKU9ubpho8GqyGNMidXhb82Uz8OH3a49Q").then(function(){e.setState({name:"",email:"",message:""}),e.modalHandler()}).catch(function(e){console.log(e),e.responseJSON&&e.responseJSON.errors&&alert("An error has occurred with submitting your message. Please try again.")})},n.modalHandler=function(){var e=this;this.setState(function(e){return{showModal:!e.showModal}}),setTimeout(function(){document.body.style.overflowY=e.state.showModal?"hidden":"scroll"},500)},n.render=function(){return i.a.createElement(Se,{id:this.props.id},i.a.createElement(ce,null,i.a.createElement("p",{className:"title"},"CONTACT"),i.a.createElement(pe,{onChange:this.changeHandler,name:"name",label:"NAME",placeholder:"Name",color:"var(--black)",isLong:!1,value:this.state.name}),i.a.createElement(pe,{onChange:this.changeHandler,name:"email",label:"EMAIL",placeholder:"Email Address",color:"var(--black)",isLong:!1,value:this.state.email}),i.a.createElement(pe,{onChange:this.changeHandler,name:"message",label:"MESSAGE",placeholder:"Message",color:"var(--black)",isLong:!0,value:this.state.message}),i.a.createElement(ge,{name:"SUBMIT",color:"var(--black)",bgColor:"var(--white)",onClick:this.submitHandler})),i.a.createElement(R,{showModal:this.state.showModal,clickHandler:this.modalHandler},i.a.createElement(we,{headline:"Thanks!",message:"We've received your message. We'll get back to you as soon as we can."})))},r}(r.Component),Se=s.a.div.withConfig({displayName:"contactSection__StyledContactSection",componentId:"sc-1ryr4md-0"})(["color:var(--black);background-color:var(--white);& > div{padding-top:10rem;padding-bottom:10rem;}& .title{text-align:center;font-family:var(--display-font);font-weight:var(--display-weight);font-size:var(--display);margin-bottom:4rem;}@media (max-width:767.98px){& .title{font-size:4rem;line-height:1rem;}}"]),Ce=Ne;t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Home"}),i.a.createElement(h,{id:"hero"}),i.a.createElement(C,{id:"how_it_works"}),i.a.createElement(Y,{id:"watch"}),i.a.createElement($,{id:"about"}),i.a.createElement(Ee,{id:"sign_up"}),i.a.createElement(Ce,{id:"contact"}))}},194:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(66),o=a.n(n);a.d(t,"a",function(){return o.a});a(195),a(9).default.enqueue,i.a.createContext({})},195:function(e,t,a){var r;e.exports=(r=a(198))&&r.default||r},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Sandbox Film Festival"}}}}},198:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),i=a.n(r),n=a(101);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},200:function(e,t,a){e.exports=a.p+"static/logo-cdbd89e35599ca2063ce56ab6f12fc76.png"},201:function(e,t,a){"use strict";var r=a(202),i=a(0),n=a.n(i),o=a(209),l=a.n(o);function s(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,s=r.data.site,c=t||s.siteMetadata.description;return n.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Sandbox Film Festival",description:"Stanford University's 48-Hour Film Festival",author:"Winston Liao"}}}}},203:function(e,t,a){"use strict";var r=a(197),i=a(0),n=a.n(i),o=a(194),l=a(193),s=a(199),c=a.n(s),m=a(200),d=a.n(m);var p=function(e){var t,a;function r(){var t;return(t=e.call(this)||this).state={showMobileNav:!1},t.hamburgerHandler=t.hamburgerHandler.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.hamburgerHandler=function(){var e=this;this.setState(function(e){return{showMobileNav:!e.showMobileNav}}),setTimeout(function(){document.body.style.overflowY=e.state.showMobileNav?"hidden":"scroll"},500)},i.render=function(){return n.a.createElement(h,null,n.a.createElement("div",{class:"left"},n.a.createElement(o.a,{to:"/#hero"},n.a.createElement("img",{src:d.a,alt:"logo",className:"logo"}),n.a.createElement("p",{className:"title"},this.props.siteTitle.toUpperCase()))),n.a.createElement("div",{class:"right"},n.a.createElement(c.a,{query:"(min-width: 1024.02px)"},n.a.createElement("nav",null,n.a.createElement(o.a,{to:"/#how_it_works"},"HOW IT WORKS"),n.a.createElement(o.a,{to:"/#watch"},"WATCH"),n.a.createElement(o.a,{to:"/#about"},"ABOUT"),n.a.createElement(o.a,{to:"/#sign_up"},"SIGN UP"),n.a.createElement(o.a,{to:"/#contact"},"CONTACT"))),n.a.createElement(c.a,{query:"(max-width: 1024px)"},n.a.createElement("div",{className:"mobile-nav"},n.a.createElement("div",{className:"nav-item dropdown"},n.a.createElement("p",{className:"nav-title hamburger",onClick:this.hamburgerHandler},this.state.showMobileNav?"✕":"☰"),n.a.createElement("nav",{onClick:this.hamburgerHandler,className:this.state.showMobileNav?"show":""},n.a.createElement(o.a,{to:"/#how_it_works"},"HOW IT WORKS"),n.a.createElement(o.a,{to:"/#watch"},"WATCH"),n.a.createElement(o.a,{to:"/#about"},"ABOUT"),n.a.createElement(o.a,{to:"/#sign_up"},"SIGN UP"),n.a.createElement(o.a,{to:"/#contact"},"CONTACT")),n.a.createElement("div",{className:"cover"}))))))},r}(i.Component),h=l.a.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-31ozxh-0"})(["z-index:10;height:4rem;width:100vw;position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:space-between;background-color:var(--black);color:var(--white);font-weight:var(--medium-weight);& div{padding:0 2rem;}& a{padding-right:3rem;display:inline-flex;align-items:center;cursor:pointer;color:var(--white);text-decoration:none;}& .logo{height:3vh;margin:0;padding-right:1.5rem;}& .left{padding-left:2rem;display:flex;align-items:center;& .title{display:inline;margin:0;font-size:var(--medium);}}& .right{font-size:var(--small);& nav{& a:last-child{padding:0;}}}& .mobile-nav{display:flex;text-align:left;font-size:var(--large);margin:0;padding:0;& .nav-item{padding:0;}& p{margin:0;}& nav{position:absolute;top:8vh;right:0;margin:0;height:100vh;transform:translateX(100%);background-color:var(--black);transition:transform 0.3s ease-in-out;& a{display:block;margin:1rem;width:auto;padding:2rem 4rem 2rem 2rem;cursor:pointer;font-size:1.5rem;&:last-child{padding:2rem 4rem 2rem 2rem;}}&.show{transform:translateX(0%);-webkit-box-shadow:0px 3px 8px 0px rgba(0,0,0,0.3);-moz-box-shadow:0px 3px 8px 0px rgba(0,0,0,0.3);box-shadow:0px 3px 8px 0px rgba(0,0,0,0.3);}}& .cover{position:absolute;right:0;width:100vw;}}@media (max-width:1024px){height:6rem;& a{padding:0;}}"]);p.defaultProps={siteTitle:""};var u=p,g=function(e){var t=e.siteTitle;return n.a.createElement(f,null,n.a.createElement("span",null,"© ",t.toUpperCase()," ",(new Date).getFullYear()))},f=l.a.footer.withConfig({displayName:"footer__StyledFooter",componentId:"r54yyk-0"})(["height:40vh;width:100vw;display:flex;align-items:center;justify-content:center;background-color:var(--black);color:var(--white);"]);g.defaultProps={siteTitle:""};var v=g;a(205),a(206);"undefined"!=typeof window&&a(207)('a[href*="#"]');t.a=function(e){var t=e.children,a=r.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,{siteTitle:a.site.siteMetadata.title}),n.a.createElement("main",null,t),n.a.createElement(v,{siteTitle:a.site.siteMetadata.title}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1f4ad6532f05d2e4a61b.js.map