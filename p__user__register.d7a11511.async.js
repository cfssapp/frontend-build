(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{a3w7:function(M,E,a){"use strict";a.r(E);var de=a("14J3"),K=a("BMrR"),le=a("+L6B"),R=a("2/Rp"),me=a("jCWc"),U=a("kPKH"),ue=a("Q9mQ"),F=a("diRs"),ce=a("MXD1"),w=a("CFYs"),D=a("VTBJ"),Ee=a("miYZ"),S=a("tsqr"),u=a("ODXe"),ge=a("5NDa"),d=a("5rEg"),pe=a("OaEy"),y=a("2fM7"),Pe=a("y8nQ"),g=a("Vl3Y"),i=a("q1tI"),e=a.n(i),r=a("9kvl"),N=a("uYtH"),x=a("sYde"),_=a.n(x),l=g.a.Item,C=y.a.Option,z=d.a.Group,V={ok:e.a.createElement("div",{className:_.a.success},e.a.createElement(r.a,{id:"userandregister.strength.strong"})),pass:e.a.createElement("div",{className:_.a.warning},e.a.createElement(r.a,{id:"userandregister.strength.medium"})),poor:e.a.createElement("div",{className:_.a.error},e.a.createElement(r.a,{id:"userandregister.strength.short"}))},J={ok:"success",pass:"normal",poor:"exception"},Y=function(c){var P=c.submitting,G=c.dispatch,f=c.userAndregister,Q=Object(i.useState)(0),j=Object(u.a)(Q,2),h=j[0],A=j[1],X=Object(i.useState)(!1),I=Object(u.a)(X,2),v=I[0],b=I[1],$=Object(i.useState)("86"),B=Object(u.a)($,2),T=B[0],H=B[1],Z=Object(i.useState)(!1),L=Object(u.a)(Z,2),k=L[0],q=L[1],ee=!1,O,ae=g.a.useForm(),te=Object(u.a)(ae,1),o=te[0];Object(i.useEffect)(function(){if(!f)return;var n=o.getFieldValue("mail");f.status==="ok"&&(S.b.success("\u6CE8\u518C\u6210\u529F\uFF01"),r.e.push({pathname:"/user/register-result",state:{account:n}}))},[f]),Object(i.useEffect)(function(){return function(){clearInterval(O)}},[]);var re=function(){var t=59;A(t),O=window.setInterval(function(){t-=1,A(t),t===0&&clearInterval(O)},1e3)},W=function(){var t=o.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},se=function(t){G({type:"userAndregister/submit",payload:Object(D.a)(Object(D.a)({},t),{},{prefix:T})})},_e=function(t,s){var m=Promise;return s&&s!==o.getFieldValue("password")?m.reject(Object(r.d)({id:"userandregister.password.twice"})):m.resolve()},ne=function(t,s){var m=Promise;return s?(v||b(!!s),q(!k),s.length<6?m.reject(""):(s&&ee&&o.validateFields(["confirm"]),m.resolve())):(b(!!s),m.reject(Object(r.d)({id:"userandregister.password.required"})))},oe=function(t){H(t)},ie=function(){var t=o.getFieldValue("password"),s=W();return t&&t.length?e.a.createElement("div",{className:_.a["progress-".concat(s)]},e.a.createElement(w.a,{status:J[s],className:_.a.progress,strokeWidth:6,percent:t.length*10>100?100:t.length*10,showInfo:!1})):null};return e.a.createElement("div",{className:_.a.main},e.a.createElement("h3",null,e.a.createElement(r.a,{id:"userandregister.register.register"})),e.a.createElement(g.a,{form:o,name:"UserRegister",onFinish:se},e.a.createElement(l,{name:"mail",rules:[{required:!0,message:Object(r.d)({id:"userandregister.email.required"})},{type:"email",message:Object(r.d)({id:"userandregister.email.wrong-format"})}]},e.a.createElement(d.a,{size:"large",placeholder:Object(r.d)({id:"userandregister.email.placeholder"})})),e.a.createElement(F.a,{getPopupContainer:function(t){return t&&t.parentNode?t.parentNode:t},content:v&&e.a.createElement("div",{style:{padding:"4px 0"}},V[W()],ie(),e.a.createElement("div",{style:{marginTop:10}},e.a.createElement(r.a,{id:"userandregister.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:v},e.a.createElement(l,{name:"password",className:o.getFieldValue("password")&&o.getFieldValue("password").length>0&&_.a.password,rules:[{validator:ne}]},e.a.createElement(d.a,{size:"large",type:"password",placeholder:Object(r.d)({id:"userandregister.password.placeholder"})}))),e.a.createElement(l,{name:"confirm",rules:[{required:!0,message:Object(r.d)({id:"userandregister.confirm-password.required"})},{validator:_e}]},e.a.createElement(d.a,{size:"large",type:"password",placeholder:Object(r.d)({id:"userandregister.confirm-password.placeholder"})})),e.a.createElement(z,{compact:!0},e.a.createElement(y.a,{size:"large",value:T,onChange:oe,style:{width:"20%"}},e.a.createElement(C,{value:"86"},"+86"),e.a.createElement(C,{value:"87"},"+87")),e.a.createElement(l,{style:{width:"80%"},name:"mobile",rules:[{required:!0,message:Object(r.d)({id:"userandregister.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(r.d)({id:"userandregister.phone-number.wrong-format"})}]},e.a.createElement(d.a,{size:"large",placeholder:Object(r.d)({id:"userandregister.phone-number.placeholder"})}))),e.a.createElement(K.a,{gutter:8},e.a.createElement(U.a,{span:16},e.a.createElement(l,{name:"captcha",rules:[{required:!0,message:Object(r.d)({id:"userandregister.verification-code.required"})}]},e.a.createElement(d.a,{size:"large",placeholder:Object(r.d)({id:"userandregister.verification-code.placeholder"})}))),e.a.createElement(U.a,{span:8},e.a.createElement(R.a,{size:"large",disabled:!!h,className:_.a.getCaptcha,onClick:re},h?"".concat(h," s"):Object(r.d)({id:"userandregister.register.get-verification-code"})))),e.a.createElement(l,null,e.a.createElement(R.a,{size:"large",loading:P,className:_.a.submit,type:"primary",htmlType:"submit"},e.a.createElement(r.a,{id:"userandregister.register.register"})),e.a.createElement(N.a,{className:_.a.login,to:"/user/login"},e.a.createElement(r.a,{id:"userandregister.register.sign-in"})))))};E.default=Object(r.c)(function(p){var c=p.userAndregister,P=p.loading;return{userAndregister:c,submitting:P.effects["userAndregister/submit"]}})(Y)},sYde:function(M,E,a){M.exports={main:"main___2kx2N",password:"password___2JDrd",getCaptcha:"getCaptcha___1oboe",submit:"submit___34wM2",login:"login___1qBuj",success:"success___3hl98",warning:"warning___2i2r2",error:"error___3JfQo","progress-pass":"progress-pass___BM1Xu",progress:"progress___2s68u"}}}]);
