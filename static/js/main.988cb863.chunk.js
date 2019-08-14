(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{239:function(e,t,n){e.exports=n(507)},244:function(e,t,n){},279:function(e,t,n){},309:function(e,t){},311:function(e,t){},343:function(e,t){},344:function(e,t){},409:function(e,t){},507:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(48),c=n.n(o),r=(n(244),n(80)),s=n(36),l=n(84),m=n(81),p=n(83),g=n(64),h=n.n(g),d=n(234),u=n.n(d),b=n(89);h.a.registerTheme({color:{primary:"#f46a54",secondary:"#f6e9de",black:"#444",white:"#ffffff"}}),h.a.registerInterface(u.a);var f=[{name:"About",link:"#about"},{name:"Tech",link:"#tech"},{name:"Stocks",link:"#stocks"},{name:"Contact",link:"#contact"}],x=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.styles;return i.a.createElement("nav",Object(b.css)(e.container),i.a.createElement("img",Object.assign({},Object(b.css)(e.terminal),{src:"/images/terminal.svg",alt:"Terminal"})),i.a.createElement("div",Object(b.css)(e.menu_items),f.map(function(t){return i.a.createElement("a",Object.assign({key:t.name,href:t.link},Object(b.css)(e.menu_item)),t.name)})))}}]),t}(i.a.Component),y=Object(b.withStyles)(function(e){e.color;return{container:{padding:"10px 20px 20px"},terminal:{display:"inline-block",float:"left",height:"50px"},social:{display:"inline-block",marginTop:"13px",float:"right"},menu_items:{display:"flex",float:"right",marginTop:"20px"},menu_item:{padding:"0 15px",textDecoration:"none",textAlign:"left",color:"white",fontWeight:"600",opacity:"0.6",":hover":{opacity:"1"}}}})(x),v=n(525),k=[{name:"linkedin",href:"https://www.linkedin.com/in/stephen-dorn-149055a3/"},{name:"github",href:"https://github.com/svdorn"},{name:"instagram",href:"https://www.instagram.com/stephen.dorn/"},{name:"facebook",href:"https://www.facebook.com/stephen.dorn.1"},{name:"twitter",href:"https://twitter.com/StephenDorn7"},{name:"email",href:"mailto:steve@moonshotinsights.com"}];var j=Object(b.withStyles)(function(){return{container:{display:"inline-block"},image_clickable:{margin:"0 5px",opacity:"0.4",":hover":{opacity:"0.6"}},image:{height:"34px"}}})(function(e){var t=e.styles;return i.a.createElement("div",Object(b.css)(t.container),k.map(function(e){return i.a.createElement("a",Object.assign({key:e.name,href:e.href,target:"_blank",rel:"noopener noreferrer"},Object(b.css)(t.image_clickable)),i.a.createElement("img",Object.assign({src:"/images/social/".concat(e.name,".svg"),alt:e.name},Object(b.css)(t.image))))}))});var O=Object(b.withStyles)(function(e){return{container:{height:"100px",backgroundColor:e.color.primary,textAlign:"center"},social:{padding:"20px 0 10px"},by_stephen:{color:"white"},icon:{verticalAlign:"middle"}}})(function(e){var t=e.styles;return i.a.createElement("div",Object(b.css)(t.container),i.a.createElement("div",Object(b.css)(t.social),i.a.createElement(j,null)),i.a.createElement("div",Object(b.css)(t.by_stephen),i.a.createElement(v.a,Object(b.css)(t.icon),"code")," with"," ",i.a.createElement(v.a,Object(b.css)(t.icon),"favorite")," by Stephen Dorn"))}),w=n(235),E=n.n(w),_=n(526);var S=Object(b.withStyles)(function(e){return{container:{color:e.color.primary,backgroundColor:"white",borderRadius:3,border:0,height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(0, 0, 0, 0.18)",textTransform:"none"}}})(function(e){var t=e.text,n=e.onClick,a=e.styles,o=e.type;return i.a.createElement(_.a,Object.assign({},Object(b.css)(a.container),{onClick:n,type:o||null}),t)}),C=n(527),I=(n(279),{left:["L-top","L-left","L-right","L-bottom"],right:["R-top","R-right","R-left","R-bottom"],center:["C-top","C-left","C-right","C-bottom-left","C-bottom-right"]});var T=function(e){var t=e.className,n=e.children,a=e.placement,o=e.color;return i.a.createElement("div",{className:"box-container "+t||!1},i.a.createElement("div",{className:"borders"},I[a].map(function(e){return i.a.createElement("div",{className:e,key:e,style:{background:o}})})),n)};var W=Object(b.withStyles)(function(){return{container:{margin:"20px",textDecoration:"none"},box_container:{display:"flex",verticalAlign:"top",width:"250px",backgroundColor:"white",cursor:"pointer"},box:{padding:"30px 20px 30px 20px",textAlign:"left"},title:{color:"black",margin:"0 auto 20px auto"},price:{fontSize:"18px"},volume:{fontSize:"12px",marginTop:"10px",color:"black"}}})(function(e){var t=e.stock,n=e.styles;return i.a.createElement("a",Object.assign({href:"https://finance.yahoo.com/quote/".concat(t.ticker),target:"_blank",rel:"noopener noreferrer"},Object(b.css)(n.container)),i.a.createElement(T,Object.assign({placement:t.placement,color:t.color},Object(b.css)(n.box_container)),i.a.createElement("div",Object(b.css)(n.box),i.a.createElement("h3",Object(b.css)(n.title),t.name),i.a.createElement("div",{style:{color:t.color}},t.ticker,i.a.createElement("br",null),i.a.createElement("b",Object(b.css)(n.price),t.price?i.a.createElement("span",null,t.price):"$$$...")),i.a.createElement("div",Object(b.css)(n.volume),"Volume:"," ",i.a.createElement("span",{style:{color:t.color}},t.volume?i.a.createElement("span",null,t.volume):"Loading...")))))});var R=[{color:"#f46a54",placement:"left",name:"Amazon",ticker:"AMZN"},{color:"#f46a54",placement:"center",name:"Slack",ticker:"WORK"},{color:"#f46a54",placement:"right",name:"Box",ticker:"BOX"}];var A=Object(b.withStyles)(function(){return{container:{display:"inline-flex",justifyContent:"space-evenly",flexWrap:"wrap"}}})(function(e){for(var t=e.stocks,n=e.styles,a=function(e){var n=t[e],a=R.find(function(e){return e.ticker.toString()===n["1. symbol"].toString()});a&&(a.price="$"+parseFloat(n["2. price"]).toFixed(2),a.volume=n["3. volume"].toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))},o=0;o<t.length;o++)a(o);return i.a.createElement("div",null,i.a.createElement("div",Object(b.css)(n.container),R.map(function(e){return i.a.createElement(W,{key:e.ticker,stock:e})})))}),M=n(138),L=n.n(M),D=n(236),B=n(281)({key:"weJqvzzJetukXnG6VJYj"});function P(){return(P=Object(D.a)(L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.data.batch(["AMZN","WORK","BOX"]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var z=[{name:"einstein",description:"View my scientific use of computers.",button:"View Projects",link:"https://github.com/svdorn"},{name:"jobs",description:"Examine my entrepreneurial passion.",button:"View Entrepreneurship",link:"#about"},{name:"jfk",description:"See how I operate in the free market.",button:"View Stocks",link:"#stocks"}],N=[{name:"React",img:"/images/tech/react.svg"},{name:"Node",img:"/images/tech/javascript.png"},{name:"Python",img:"/images/tech/python.svg"},{name:"MongoDB",img:"/images/tech/mongo.svg"},{name:"AWS",img:"/images/tech/aws.svg"},{name:"GitHub",img:"/images/tech/github.svg"},{name:"HTML",img:"/images/tech/html.svg"},{name:"Docker",img:"/images/tech/docker.svg"}],H=["React","Node","Express.js","MongoDB","AWS","HTML","CSS"],J=["React","AWS","JavaScript","HTML","CSS"],V=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).typedRef=function(e){return n.typedSpan=e},n.state={stocks:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={strings:["Hello, World!","my name is <b>Stephen Dorn</b>","i am a computer scientist","stock market enthusiast","and entrepreneur"],typeSpeed:40,backSpeed:25,loop:!0,loopCount:1/0,backDelay:1e3};this.setState({typed:new E.a(this.typedSpan,t)},function(){(function(){return P.apply(this,arguments)})().then(function(t){e.setState({stocks:t["Stock Quotes"]})}).catch(function(e){return console.log("Error getting stock data: ",e)})})}},{key:"render",value:function(){var e=this.props.styles,t=this.state.stocks;return i.a.createElement("div",Object(b.css)(e.container),i.a.createElement("section",Object.assign({id:"intro"},Object(b.css)(e.intro)),i.a.createElement("div",Object(b.css)(e.typed_container),i.a.createElement("img",Object.assign({src:"/images/terminal.svg",alt:"Terminal"},Object(b.css)(e.terminal))),i.a.createElement("span",Object.assign({ref:this.typedRef},Object(b.css)(e.typed)))),i.a.createElement("div",Object(b.css)(e.icons),z.map(function(t){return i.a.createElement("div",Object.assign({key:t.name},Object(b.css)(e.icon)),i.a.createElement("div",Object(b.css)(e.description),t.description),i.a.createElement("img",Object.assign({src:"/images/people/".concat(t.name,".png"),alt:t.name},Object(b.css)(e.icon_img))),i.a.createElement("br",null),i.a.createElement("div",Object(b.css)(e.button),i.a.createElement("a",Object.assign({href:t.link,target:"_blank",rel:"noopener noreferrer"},Object(b.css)(e.button_link)),i.a.createElement(S,{text:t.button}))))})),i.a.createElement("div",Object(b.css)(e.social),i.a.createElement(j,null))),i.a.createElement("section",Object.assign({id:"about"},Object(b.css)(e.entrepreneur)),i.a.createElement("div",Object(b.css)(e.entrepreneur_moonshot),i.a.createElement("div",Object(b.css)(e.company_logo_container),i.a.createElement("img",Object.assign({src:"/images/companies/moonshot-insights.png",alt:"Moonshot Logo"},Object(b.css)(e.company_logo)))),i.a.createElement("div",Object(b.css)(e.moonshot_description),i.a.createElement("h1",null,"Moonshot Insights"),i.a.createElement("h3",Object(b.css)(e.company_title),"Co-founder & CTO"),i.a.createElement("p",null,"I am the Co-founder and CTO at Moonshot Insights where we help companies build their company cultures through hiring."),i.a.createElement("div",null,H.map(function(t){return i.a.createElement(C.a,Object.assign({key:"moonshotChip".concat(t),label:t},Object(b.css)(e.chip)))})),i.a.createElement("div",null,i.a.createElement("a",Object.assign({href:"https://moonshotinsights.io",target:"_blank",rel:"noopener noreferrer"},Object(b.css)(e.company_icon_clickable)),i.a.createElement("img",Object.assign({src:"/images/link.svg",alt:"Moonshot Insights"},Object(b.css)(e.company_icon)))),i.a.createElement("a",Object.assign({href:"https://www.linkedin.com/company/18233111/",target:"_blank",rel:"noopener noreferrer"},Object(b.css)(e.company_icon_clickable)),i.a.createElement("img",Object.assign({src:"/images/social/linkedin.svg",alt:"Moonshot Insights LinkedIn"},Object(b.css)(e.company_icon))))))),i.a.createElement("div",Object(b.css)(e.entrepreneur_paws),i.a.createElement("div",Object(b.css)(e.paws_description),i.a.createElement("h1",null,"Senior Paws Sanctuary"),i.a.createElement("h3",Object(b.css)(e.company_title),"Co-founder & Website Developer"),i.a.createElement("p",null,"I am the Co-founder and web developer at Senior Paws Sanctuary which is a non-profit senior dog rescue located in Madison, WI."),i.a.createElement("div",null,J.map(function(t){return i.a.createElement(C.a,Object.assign({key:"seniorPawsChip".concat(t),label:t},Object(b.css)(e.chip)))})),i.a.createElement("div",null,i.a.createElement("a",Object.assign({href:"http://seniorpawssanctuarywi.com/",target:"_blank",rel:"noopener noreferrer"},Object(b.css)(e.company_icon_clickable)),i.a.createElement("img",Object.assign({src:"/images/link.svg",alt:"Senior Paws Sanctuary"},Object(b.css)(e.company_icon)))),i.a.createElement("a",Object.assign({href:"https://www.facebook.com/seniorpawssanctuarywi/",target:"_blank",rel:"noopener noreferrer"},Object(b.css)(e.company_icon_clickable)),i.a.createElement("img",Object.assign({src:"/images/social/facebook.svg",alt:"Senior Paws Sanctuary Facebook"},Object(b.css)(e.company_icon)))))),i.a.createElement("div",Object(b.css)(e.company_logo_container),i.a.createElement("img",Object.assign({src:"/images/companies/pawprint.png",alt:"Senior Paws Sanctuary Logo"},Object(b.css)(e.company_logo)))))),i.a.createElement("section",Object.assign({id:"tech"},Object(b.css)(e.tech)),i.a.createElement("h1",null,"Some technologies I love working with..."),i.a.createElement("div",Object(b.css)(e.tech_list),N.map(function(t){return i.a.createElement("div",Object.assign({key:t.name},Object(b.css)(e.tech_logo_container)),i.a.createElement("img",Object.assign({src:t.img,alt:t.name},Object(b.css)(e.tech_logo))))}))),i.a.createElement("section",Object.assign({id:"stocks"},Object(b.css)(e.stocks)),i.a.createElement("h1",null,"Why I Love Investing"),i.a.createElement("p",Object(b.css)(e.stocks_paragraph),"When I was 15 years old, I first learned about the stock market from my Grandpa. That summer, I would go over to his apartment every weekend to talk stocks and strategies with him. At 15, I built my first trading strategy and began to trade stocks with my own money. Since then I","'","ve been trading stocks and sharing my love of investing with others. I was President of the Society of Personal Investments in college at UW-Madison and I share my love of investing by investing money for my friends.",i.a.createElement("br",null),i.a.createElement("br",null),"I follow in the footsteps of my two favorite investors: Warren Buffet and Chamath Palihapitiya by focusing on long-term investments in premium businesses. I have a heavy focus on the tech sector because that is my area of expertise. I take a passive, long-term approach and below are a few of my favorite stocks that I","'","m holding for the long-term."),i.a.createElement("div",Object(b.css)(e.stocks_list),i.a.createElement("h2",null,"Some of my favorite stocks..."),i.a.createElement(A,{stocks:t}))),i.a.createElement("section",Object.assign({id:"contact"},Object(b.css)(e.contact)),i.a.createElement("h1",null,"Contact Me!"),i.a.createElement("p",Object(b.css)(e.contact_paragraph),"Please feel free to contact me for any reason, I","'","d love to talk!"),i.a.createElement("div",Object(b.css)(e.contact_img_container),i.a.createElement("img",Object.assign({src:"/images/people/einstein.png",alt:"Stephen Dorn"},Object(b.css)(e.contact_img)))),i.a.createElement("div",null,i.a.createElement(v.a,Object(b.css)(e.contact_icon),"email")," ","steve@moonshotinsights.com")))}}]),t}(i.a.Component),$=Object(b.withStyles)(function(e){var t=e.color;return{container:{marginTop:"-80px"},intro:{backgroundColor:t.primary,height:"calc(100vh)",minHeight:"600px","@media (max-width: 1000px)":{height:"700px"},"@media (max-width: 500px)":{height:"750px"}},typed_container:{verticalAlign:"middle",paddingTop:"15%",fontWeight:"800px",fontSize:"44px",color:"white","@media (max-width: 1000px)":{paddingTop:"150px",fontSize:"32px"},"@media (max-width: 500px)":{paddingTop:"150px",fontSize:"25px"}},icons:{position:"absolute",color:"white",bottom:"15%",right:"0",left:"0",marginLeft:"auto",marginRight:"auto","@media (max-width: 1000px)":{position:"relative",paddingTop:"50px",bottom:"auto"}},icon:{display:"inline-block",padding:"0 30px","@media (max-width: 1000px)":{padding:"10px 20px"}},icon_img:{padding:"10px 0",height:"120px","@media (max-width: 1000px)":{height:"70px"}},description:{fontSize:"18px",fontWeight:"600","@media (max-width: 1000px)":{fontSize:"15px"}},terminal:{display:"inline-block",verticalAlign:"middle",height:"60px",paddingRight:"30px","@media (max-width: 1000px)":{height:"45px",paddingRight:"15px"},"@media (max-width: 500px)":{height:"30px"}},typed:{display:"inline-block",verticalAlign:"middle"},social:{position:"absolute",bottom:"4%",right:"0",left:"0",marginLeft:"auto",marginRight:"auto","@media (max-width: 1000px)":{position:"relative",bottom:"auto",paddingTop:"20px"}},button:{display:"block","@media (max-width: 1000px)":{display:"none"}},button_link:{textDecoration:"none"},entrepreneur:{padding:"40px 0",color:t.black},entrepreneur_moonshot:{padding:"30px",display:"inline-flex",justifyContent:"space-around",flexWrap:"wrap"},entrepreneur_paws:{padding:"30px",display:"inline-flex",justifyContent:"space-around",flexWrap:"wrap-reverse"},company_logo_container:{height:"220px",width:"220px",backgroundColor:t.primary,borderRadius:"50%"},moonshot_description:{margin:"auto 0 auto 60px",maxWidth:"500px","@media (max-width: 940px)":{margin:"auto 30px"},"@media (max-width: 600px)":{margin:"auto 10px"}},paws_description:{margin:"auto 60px auto 0",maxWidth:"500px","@media (max-width: 940px)":{margin:"auto 30px"},"@media (max-width: 600px)":{margin:"auto 10px"}},company_title:{marginTop:"-10px",marginBottom:"10px",fontWeight:"600"},company_logo:{paddingTop:"60px",height:"100px"},company_icon_clickable:{margin:"0 5px",opacity:"0.4",":hover":{opacity:"0.6"}},company_icon:{height:"34px"},chip:{backgroundColor:t.primary,color:t.white,margin:"auto 3px 10px 3px"},tech:{padding:"50px 0 60px",backgroundColor:t.secondary,color:t.primary},tech_list:{padding:"20px 0"},tech_logo_container:{display:"inline-block",margin:"10px",height:"80px",width:"80px",backgroundColor:t.primary,borderRadius:"50%"},tech_logo:{paddingTop:"15px",height:"50px"},stocks:{padding:"60px 0"},stocks_paragraph:{margin:"auto",width:"92%",maxWidth:"800px",fontSize:"16px",marginBottom:"80px",textAlign:"left"},stocks_list:{color:t.primary,backgroundColor:t.secondary,padding:"60px 0",width:"100%"},contact:{padding:"60px 0"},contact_paragraph:{margin:"auto",width:"92%"},contact_img_container:{display:"inline-block",margin:"10px",height:"130px",width:"130px",backgroundColor:t.primary,borderRadius:"50%"},contact_img:{paddingTop:"15px",height:"90px"},contact_icon:{color:t.primary,verticalAlign:"middle",marginRight:"5px"}}})(V);var F=Object(b.withStyles)(function(e){e.color;return{container:{textAlign:"center",padding:"50px 0",font:"15px intercom-text,system-ui",scrollBehavior:"smooth"},header:{backgroundColor:"transparent"}}})(function(e){var t=e.styles;return i.a.createElement("div",null,i.a.createElement(y,Object(b.css)(t.header)),i.a.createElement("div",Object(b.css)(t.container),i.a.createElement($,null)),i.a.createElement(O,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[239,1,2]]]);
//# sourceMappingURL=main.988cb863.chunk.js.map