(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{26:function(e,t,a){e.exports=a(58)},31:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),o=a(8),s=a(7),m=a(1),i=a(16);a(31);var u=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var E=function({children:e}){return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},e)},d=a(9),g=a.n(d),p=function(){return g.a.get("/api/books")},b=function(e){return g.a.get("/api/books/"+e)},f=function(e){return g.a.delete("/api/books/"+e)},h=function(e){return g.a.post("/api/books",e)},v=function(e){return g.a.post("/api/user/login",e)},N=function(){return g.a.get("/api/user/logout")},j=function(e){return g.a.post("/api/user/signup",e)};function O({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function y({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}function x({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}a(50);function k({children:e}){return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},e))}function w({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}function C(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function I(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function S(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var L=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),m=Object(o.a)(c,2),d=m[0],g=m[1];function b(){p().then(e=>r(e.data)).catch(e=>console.log(e))}function v(e){var t=e.target,a=t.name,n=t.value;g(Object(i.a)(Object(i.a)({},d),{},{[a]:n}))}return Object(n.useEffect)(()=>{b()},[]),l.a.createElement(O,{fluid:!0},l.a.createElement(y,null,l.a.createElement(x,{size:"md-6"},l.a.createElement(E,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(C,{onChange:v,name:"title",placeholder:"Title (required)"}),l.a.createElement(C,{onChange:v,name:"author",placeholder:"Author (required)"}),l.a.createElement(I,{onChange:v,name:"synopsis",placeholder:"Synopsis (Optional)"}),l.a.createElement(S,{disabled:!(d.author&&d.title),onClick:function(e){e.preventDefault(),d.title&&d.author&&h({title:d.title,author:d.author,synopsis:d.synopsis}).then(e=>b()).catch(e=>console.log(e))}},"Submit Book"))),l.a.createElement(x,{size:"md-6 sm-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"Books On My List")),a.length?l.a.createElement(k,null,a.map(e=>l.a.createElement(w,{key:e._id},l.a.createElement(s.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(u,{onClick:()=>{return t=e._id,void f(t).then(e=>b()).catch(e=>console.log(e));var t}})))):l.a.createElement("h3",null,"No Results to Display"))))};var F=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(m.h)().bookid;return Object(n.useEffect)(()=>{b(i).then(e=>c(e.data)).catch(e=>console.log(e))},[i]),l.a.createElement(O,{fluid:!0},l.a.createElement(y,null,l.a.createElement(x,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,r.title," by ",r.author)))),l.a.createElement(y,null,l.a.createElement(x,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,r.synopsis)))),l.a.createElement(y,null,l.a.createElement(x,{size:"md-2"},l.a.createElement(s.b,{to:"/"},"\u2190 Back to Authors"))))};var R=function(){return l.a.createElement(O,{fluid:!0},l.a.createElement(y,null,l.a.createElement(x,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},z=Object(n.createContext)({email:"",setEmail:()=>{},loggedIn:!1,setLoggedIn:()=>{}});a(56);var B=function(e){var t=Object(n.useContext)(z),a=t.email,r=t.setEmail,c=t.loggedIn,o=t.setLoggedIn,s=Object(m.g)(),i=Object(n.useRef)(),u=Object(n.useRef)(),E={};e.className&&(E.className=e.className);var d=e.className?e.className+"-login-email":"login-email",g=e.className?e.className+"-login-email-help":"login-email-help",p=e.className?e.className+"-login-password":"login-password",b=e=>{e.preventDefault(),v({email:i.current.value,password:u.current.value}).then(e=>{r(e.data.email),o(!0),s.push("/")}).catch(e=>{console.log(e)})};return l.a.createElement(n.Fragment,null,c?l.a.createElement("h3",null,a):l.a.createElement("form",Object.assign({},E,{onSubmit:b}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:d},"Email address"),l.a.createElement("input",{ref:i,type:"email",className:"form-control",id:d,"aria-describedby":g}),l.a.createElement("small",{id:g,className:"email-help-text form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:p},"Password"),l.a.createElement("input",{ref:u,type:"password",className:"form-control",id:p})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")))};a(57);var D=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(z),m=c.email,i=c.loggedIn;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"),i?l.a.createElement("p",{className:"logged-in-text"},"Logged in as ",m," ",l.a.createElement(s.b,{to:"/logout",onClick:()=>r(!1)},"Logout")," "):a?l.a.createElement(n.Fragment,null,l.a.createElement(B,{className:"top-menu-login"}),l.a.createElement("button",{onClick:()=>r(!1)},"X")):l.a.createElement("button",{onClick:()=>r(!0)},"Login"))};var P=function(e){var t=Object(n.useContext)(z).loggedIn;return l.a.createElement("div",{className:"container"},t&&l.a.createElement(m.a,{to:"/"}),l.a.createElement("h1",null,"Login"),l.a.createElement(B,{className:"full-page-login"}))};var W=function(e){var t=Object(n.useContext)(z),a=t.email,r=t.setEmail,c=t.loggedIn,o=t.setLoggedIn,s=Object(n.useRef)(),m=Object(n.useRef)(),i={};e.className&&(i.className=e.className);var u=e.className?e.className+"-signup-email":"signup-email",E=e.className?e.className+"-signup-email-help":"signup-email-help",d=e.className?e.className+"-signup-password":"signup-password",g=e=>{e.preventDefault(),j({email:s.current.value,password:m.current.value}).then(e=>{r(e.data.email),o(!0)}).catch(e=>{console.log(e)})};return l.a.createElement(n.Fragment,null,c?l.a.createElement("h3",null,a):l.a.createElement("form",Object.assign({},i,{onSubmit:g}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:u},"Email address"),l.a.createElement("input",{ref:s,type:"email",className:"form-control",id:u,"aria-describedby":E}),l.a.createElement("small",{id:E,className:"email-help-text form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:d},"Password"),l.a.createElement("input",{ref:m,type:"password",className:"form-control",id:d})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))};var A=function(e){var t=Object(n.useContext)(z).loggedIn;return l.a.createElement("div",{className:"container"},t&&l.a.createElement(m.a,{to:"/"}),l.a.createElement("h1",null,"SignUp"),l.a.createElement(W,{className:"full-page-signup"}))};var _=function(e){var t=Object(n.useContext)(z),a=t.setEmail,r=t.setLoggedIn;return Object(n.useEffect)(()=>{N().then(e=>{r(!1),a("")}).catch(e=>{console.log(e)})},[a,r]),l.a.createElement("div",null,l.a.createElement("p",null,"You are now logged out."))};var q=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),u=i[0],E=i[1];return l.a.createElement(s.a,null,l.a.createElement(z.Provider,{value:{email:a,setEmail:r,loggedIn:u,setLoggedIn:E}},l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:["/","/books"]},l.a.createElement(L,null)),l.a.createElement(m.b,{exact:!0,path:"/books/:bookid"},l.a.createElement(F,null)),l.a.createElement(m.b,{exact:!0,path:"/login"},l.a.createElement(P,null)),l.a.createElement(m.b,{exact:!0,path:"/signup"},l.a.createElement(A,null)),l.a.createElement(m.b,{exact:!0,path:"/logout"},l.a.createElement(_,null)),l.a.createElement(m.b,null,l.a.createElement(R,null))))))};c.a.render(l.a.createElement(q,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.39da9403.chunk.js.map