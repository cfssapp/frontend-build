(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{a3w7:function(M,E,t){"use strict";t.r(E);var $=t("+L6B"),D=t("2/Rp"),Z=t("14J3"),y=t("BMrR"),G=t("jCWc"),C=t("kPKH"),k=t("Q9mQ"),A=t("diRs"),q=t("5NDa"),u=t("5rEg"),ee=t("MXD1"),I=t("CFYs"),B=t("VTBJ"),te=t("miYZ"),T=t("tsqr"),g=t("ODXe"),re=t("y8nQ"),d=t("Vl3Y"),m=t("q1tI"),e=t.n(m),a=t("9kvl"),L=t("uYtH"),W=t("sYde"),_=t.n(W),c=d.a.Item,K={ok:e.a.createElement("div",{className:_.a.success},e.a.createElement(a.a,{id:"userandregister.strength.strong"})),pass:e.a.createElement("div",{className:_.a.warning},e.a.createElement(a.a,{id:"userandregister.strength.medium"})),poor:e.a.createElement("div",{className:_.a.error},e.a.createElement(a.a,{id:"userandregister.strength.short"}))},F={ok:"success",pass:"normal",poor:"exception"},j=function(l){var P=l.submitting,b=l.dispatch,f=l.userAndregister,w=Object(m.useState)(!1),h=Object(g.a)(w,2),v=h[0],O=h[1],N=Object(m.useState)(!1),R=Object(g.a)(N,2),S=R[0],V=R[1],x=!1,J,Y=d.a.useForm(),Q=Object(g.a)(Y,1),n=Q[0];Object(m.useEffect)(function(){if(!f)return;var o=n.getFieldValue("email");f.status===!0&&(T.b.success("\u6CE8\u518C\u6210\u529F\uFF01"),a.e.push({pathname:"/user/register-result",state:{account:o}}))},[f]),Object(m.useEffect)(function(){return function(){clearInterval(J)}},[]);var U=function(){var r=n.getFieldValue("password");return r&&r.length>9?"ok":r&&r.length>5?"pass":"poor"},z=function(r){b({type:"userAndregister/submit",payload:Object(B.a)({},r)})},ae=function(r,s){var i=Promise;return s&&s!==n.getFieldValue("password")?i.reject(Object(a.d)({id:"userandregister.password.twice"})):i.resolve()},X=function(r,s){var i=Promise;return s?(v||O(!!s),V(!S),s.length<6?i.reject(""):(s&&x&&n.validateFields(["confirm"]),i.resolve())):(O(!!s),i.reject(Object(a.d)({id:"userandregister.password.required"})))},H=function(){var r=n.getFieldValue("password"),s=U();return r&&r.length?e.a.createElement("div",{className:_.a["progress-".concat(s)]},e.a.createElement(I.a,{status:F[s],className:_.a.progress,strokeWidth:6,percent:r.length*10>100?100:r.length*10,showInfo:!1})):null};return e.a.createElement("div",{className:_.a.main},e.a.createElement("h3",null,e.a.createElement(a.a,{id:"userandregister.register.register"})),e.a.createElement(d.a,{form:n,name:"UserRegister",onFinish:z},e.a.createElement(c,{name:"email",rules:[{required:!0,message:Object(a.d)({id:"userandregister.email.required"})},{type:"email",message:Object(a.d)({id:"userandregister.email.wrong-format"})}]},e.a.createElement(u.a,{size:"large",placeholder:Object(a.d)({id:"userandregister.email.placeholder"})})),e.a.createElement(A.a,{getPopupContainer:function(r){return r&&r.parentNode?r.parentNode:r},content:v&&e.a.createElement("div",{style:{padding:"4px 0"}},K[U()],H(),e.a.createElement("div",{style:{marginTop:10}},e.a.createElement(a.a,{id:"userandregister.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:v},e.a.createElement(d.a.Item,{name:"user_name",rules:[{required:!0,message:"Please input your username!"}]},e.a.createElement(u.a,{placeholder:"Username"})),e.a.createElement(c,{name:"password",className:n.getFieldValue("password")&&n.getFieldValue("password").length>0&&_.a.password,rules:[{validator:X}]},e.a.createElement(u.a,{size:"large",type:"password",placeholder:Object(a.d)({id:"userandregister.password.placeholder"})}))),e.a.createElement(y.a,{gutter:8},e.a.createElement(C.a,{span:16})),e.a.createElement(c,null,e.a.createElement(D.a,{size:"large",loading:P,className:_.a.submit,type:"primary",htmlType:"submit"},e.a.createElement(a.a,{id:"userandregister.register.register"})),e.a.createElement(L.a,{className:_.a.login,to:"/user/login"},e.a.createElement(a.a,{id:"userandregister.register.sign-in"})))))};E.default=Object(a.c)(function(p){var l=p.userAndregister,P=p.loading;return{userAndregister:l,submitting:P.effects["userAndregister/submit"]}})(j)},sYde:function(M,E,t){M.exports={main:"main___2kx2N",password:"password___2JDrd",getCaptcha:"getCaptcha___1oboe",submit:"submit___34wM2",login:"login___1qBuj",success:"success___3hl98",warning:"warning___2i2r2",error:"error___3JfQo","progress-pass":"progress-pass___BM1Xu",progress:"progress___2s68u"}}}]);
