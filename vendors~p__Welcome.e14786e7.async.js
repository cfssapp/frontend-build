(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+KLJ":function(N,s,e){"use strict";var v=e("pVnL"),h=e.n(v),f=e("lSNA"),c=e.n(f),d=e("J4zp"),B=e.n(d),R=e("q1tI"),V=e("V/uB"),P=e.n(V),A=e("0G8d"),Z=e.n(A),G=e("xddM"),H=e.n(G),te=e("ESPI"),ye=e.n(te),ve=e("Z/ur"),u=e.n(ve),i=e("J84W"),p=e.n(i),C=e("sKbD"),L=e.n(C),Y=e("72Ab"),k=e.n(Y),x=e("kbBi"),m=e.n(x),I=e("8XRh"),E=e("TSYQ"),U=e.n(E),ce=e("H84U");function T(q){return Object.keys(q).reduce(function(M,D){return(D.substr(0,5)==="data-"||D.substr(0,5)==="aria-"||D==="role")&&D.substr(0,7)!=="data-__"&&(M[D]=q[D]),M},{})}var ue=e("lwsE"),J=e.n(ue),y=e("W8MJ"),X=e.n(y),z=e("7W2i"),Q=e.n(z),_e=e("LQ03"),he=e.n(_e),Oe=function(q){Q()(D,q);var M=he()(D);function D(){var b;return J()(this,D),b=M.apply(this,arguments),b.state={error:void 0,info:{componentStack:""}},b}return X()(D,[{key:"componentDidCatch",value:function(w,se){this.setState({error:w,info:se})}},{key:"render",value:function(){var w=this.props,se=w.message,Pe=w.description,ge=w.children,Se=this.state,Re=Se.error,De=Se.info,We=De&&De.componentStack?De.componentStack:null,F=typeof se=="undefined"?(Re||"").toString():se,Be=typeof Pe=="undefined"?We:Pe;return Re?R.createElement(Ze,{type:"error",message:F,description:R.createElement("pre",null,Be)}):ge}}]),D}(R.Component),ne=e("0n0R"),fe=function(q,M){var D={};for(var b in q)Object.prototype.hasOwnProperty.call(q,b)&&M.indexOf(b)<0&&(D[b]=q[b]);if(q!=null&&typeof Object.getOwnPropertySymbols=="function")for(var w=0,b=Object.getOwnPropertySymbols(q);w<b.length;w++)M.indexOf(b[w])<0&&Object.prototype.propertyIsEnumerable.call(q,b[w])&&(D[b[w]]=q[b[w]]);return D},Ne={success:p.a,info:k.a,error:m.a,warning:L.a},pe={success:Z.a,info:ye.a,error:u.a,warning:H.a},Le=function(M){var D,b=M.description,w=M.prefixCls,se=M.message,Pe=M.banner,ge=M.className,Se=ge===void 0?"":ge,Re=M.style,De=M.onMouseEnter,We=M.onMouseLeave,F=M.onClick,Be=M.afterClose,ae=M.showIcon,Je=M.closable,ie=M.closeText,Ke=M.action,Ce=fe(M,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),ze=R.useState(!1),He=B()(ze,2),be=He[0],de=He[1],we=R.useRef(),Fe=R.useContext(ce.b),Ee=Fe.getPrefixCls,Ae=Fe.direction,$=Ee("alert",w),$e=function(le){var Ye;de(!0),(Ye=Ce.onClose)===null||Ye===void 0||Ye.call(Ce,le)},et=function(){var le=Ce.type;return le!==void 0?le:Pe?"warning":"info"},Ie=ie?!0:Je,Ge=et(),tt=function(){var le=Ce.icon,Ye=(b?pe:Ne)[Ge]||null;return le?Object(ne.c)(le,R.createElement("span",{className:"".concat($,"-icon")},le),function(){return{className:U()("".concat($,"-icon"),c()({},le.props.className,le.props.className))}}):R.createElement(Ye,{className:"".concat($,"-icon")})},nt=function(){return Ie?R.createElement("button",{type:"button",onClick:$e,className:"".concat($,"-close-icon"),tabIndex:0},ie?R.createElement("span",{className:"".concat($,"-close-text")},ie):R.createElement(P.a,null)):null},Xe=Pe&&ae===void 0?!0:ae,oe=U()($,"".concat($,"-").concat(Ge),(D={},c()(D,"".concat($,"-with-description"),!!b),c()(D,"".concat($,"-no-icon"),!Xe),c()(D,"".concat($,"-banner"),!!Pe),c()(D,"".concat($,"-rtl"),Ae==="rtl"),D),Se),xe=T(Ce);return R.createElement(I.b,{visible:!be,motionName:"".concat($,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(le){return{maxHeight:le.offsetHeight}},onLeaveEnd:Be},function(Ue){var le=Ue.className,Ye=Ue.style;return R.createElement("div",h()({ref:we,"data-show":!be,className:U()(oe,le),style:h()(h()({},Re),Ye),onMouseEnter:De,onMouseLeave:We,onClick:F,role:"alert"},xe),Xe?tt():null,R.createElement("div",{className:"".concat($,"-content")},R.createElement("div",{className:"".concat($,"-message")},se),R.createElement("div",{className:"".concat($,"-description")},b)),Ke?R.createElement("div",{className:"".concat($,"-action")},Ke):null,nt())})};Le.ErrorBoundary=Oe;var Ze=s.a=Le},"/hEp":function(N,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var v=h(e("CrYe"));function h(c){return c&&c.__esModule?c:{default:c}}var f=v;s.default=f,N.exports=f},"14J3":function(N,s,e){"use strict";var v=e("cIOH"),h=e.n(v),f=e("1GLa")},"15/o":function(N,s,e){},"5OYt":function(N,s,e){"use strict";var v=e("J4zp"),h=e.n(v),f=e("q1tI"),c=e.n(f),d=e("ACnJ");function B(){var R=Object(f.useState)({}),V=h()(R,2),P=V[0],A=V[1];return Object(f.useEffect)(function(){var Z=d.a.subscribe(function(G){A(G)});return function(){return d.a.unsubscribe(Z)}},[]),P}s.a=B},AOa7:function(N,s,e){},BMrR:function(N,s,e){"use strict";var v=e("qrJ5");s.a=v.a},CrYe:function(N,s,e){"use strict";var v=e("TqRt"),h=e("284h");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var f=h(e("q1tI")),c=v(e("r4ZK")),d=v(e("KQxl")),B=function(P,A){return f.createElement(d.default,Object.assign({},P,{ref:A,icon:c.default}))};B.displayName="ArrowRightOutlined";var R=f.forwardRef(B);s.default=R},FKOd:function(N,s,e){"use strict";var v=e("cIOH"),h=e("15/o"),f=e("pVnL"),c=e.n(f),d=e("lSNA"),B=e.n(d),R=e("lwsE"),V=e.n(R),P=e("W8MJ"),A=e.n(P),Z=e("7W2i"),G=e.n(Z),H=e("LQ03"),te=e.n(H),ye=e("cDf5"),ve=e.n(ye),u=e("q1tI"),i=e.n(u),p=e("TSYQ"),C=e.n(p),L=e("BGR+"),Y=e("t23M"),k=e("H84U"),x=e("RIqP"),m=e.n(x),I=e("wgJM");function E(r){var n,a=function(l){return function(){n=null,r.apply(void 0,m()(l))}},t=function(){if(n==null){for(var l=arguments.length,O=new Array(l),_=0;_<l;_++)O[_]=arguments[_];n=Object(I.a)(a(O))}};return t.cancel=function(){return I.a.cancel(n)},t}function U(){return function(n,a,t){var o=t.value,l=!1;return{configurable:!0,get:function(){if(l||this===n.prototype||this.hasOwnProperty(a))return o;var _=E(o.bind(this));return l=!0,Object.defineProperty(this,a,{value:_,configurable:!0,writable:!0}),l=!1,_}}}}var ce=e("zT1h");function T(r){return r!==window?r.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ue(r,n,a){return a!==void 0&&n.top>r.top-a?a+n.top:void 0}function J(r,n,a){if(a!==void 0&&n.bottom<r.bottom+a){var t=window.innerHeight-n.bottom;return a+t}return}var y=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],X=[];function z(){return X}function Q(r,n){if(!r)return;var a=X.find(function(t){return t.target===r});a?a.affixList.push(n):(a={target:r,affixList:[n],eventHandlers:{}},X.push(a),y.forEach(function(t){a.eventHandlers[t]=Object(ce.a)(r,t,function(){a.affixList.forEach(function(o){o.lazyUpdatePosition()})})}))}function _e(r){var n=X.find(function(a){var t=a.affixList.some(function(o){return o===r});return t&&(a.affixList=a.affixList.filter(function(o){return o!==r})),t});n&&n.affixList.length===0&&(X=X.filter(function(a){return a!==n}),y.forEach(function(a){var t=n.eventHandlers[a];t&&t.remove&&t.remove()}))}var he=function(r,n,a,t){var o=arguments.length,l=o<3?n:t===null?t=Object.getOwnPropertyDescriptor(n,a):t,O;if((typeof Reflect=="undefined"?"undefined":ve()(Reflect))==="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,n,a,t);else for(var _=r.length-1;_>=0;_--)(O=r[_])&&(l=(o<3?O(l):o>3?O(n,a,l):O(n,a))||l);return o>3&&l&&Object.defineProperty(n,a,l),l};function Oe(){return typeof window!="undefined"?window:null}var ne;(function(r){r[r.None=0]="None",r[r.Prepare=1]="Prepare"})(ne||(ne={}));var fe=function(r){G()(a,r);var n=te()(a);function a(){var t;return V()(this,a),t=n.apply(this,arguments),t.state={status:ne.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var o=t.props.offsetBottom,l=t.props.offsetTop;return o===void 0&&l===void 0&&(l=0),l},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(o){t.placeholderNode=o},t.saveFixedNode=function(o){t.fixedNode=o},t.measure=function(){var o=t.state,l=o.status,O=o.lastAffix,_=t.props.onChange,g=t.getTargetFunc();if(l!==ne.Prepare||!t.fixedNode||!t.placeholderNode||!g)return;var W=t.getOffsetTop(),j=t.getOffsetBottom(),K=g();if(!K)return;var S={status:ne.None},ee=T(K),re=T(t.placeholderNode),Te=ue(re,ee,W),Me=J(re,ee,j);Te!==void 0?(S.affixStyle={position:"fixed",top:Te,width:re.width,height:re.height},S.placeholderStyle={width:re.width,height:re.height}):Me!==void 0&&(S.affixStyle={position:"fixed",bottom:Me,width:re.width,height:re.height},S.placeholderStyle={width:re.width,height:re.height}),S.lastAffix=!!S.affixStyle,_&&O!==S.lastAffix&&_(S.lastAffix),t.setState(S)},t.prepareMeasure=function(){if(t.setState({status:ne.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var o},t.render=function(){var o=t.context.getPrefixCls,l=t.state,O=l.affixStyle,_=l.placeholderStyle,g=t.props,W=g.prefixCls,j=g.children,K=C()(B()({},o("affix",W),O)),S=Object(L.a)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return u.createElement(Y.a,{onResize:function(){t.updatePosition()}},u.createElement("div",c()({},S,{ref:t.savePlaceholderNode}),O&&u.createElement("div",{style:_,"aria-hidden":"true"}),u.createElement("div",{className:K,ref:t.saveFixedNode,style:O},u.createElement(Y.a,{onResize:function(){t.updatePosition()}},j))))},t}return A()(a,[{key:"getTargetFunc",value:function(){var o=this.context.getTargetContainer,l=this.props.target;return l!==void 0?l:o||Oe}},{key:"componentDidMount",value:function(){var o=this,l=this.getTargetFunc();l&&(this.timeout=setTimeout(function(){Q(l(),o),o.updatePosition()}))}},{key:"componentDidUpdate",value:function(o){var l=this.state.prevTarget,O=this.getTargetFunc(),_=null;O&&(_=O()||null),l!==_&&(_e(this),_&&(Q(_,this),this.updatePosition()),this.setState({prevTarget:_})),(o.offsetTop!==this.props.offsetTop||o.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),_e(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var o=this.getTargetFunc(),l=this.state.affixStyle;if(o&&l){var O=this.getOffsetTop(),_=this.getOffsetBottom(),g=o();if(g&&this.placeholderNode){var W=T(g),j=T(this.placeholderNode),K=ue(j,W,O),S=J(j,W,_);if(K!==void 0&&l.top===K||S!==void 0&&l.bottom===S)return}}this.prepareMeasure()}}]),a}(u.Component);fe.contextType=k.b,he([U()],fe.prototype,"updatePosition",null),he([U()],fe.prototype,"lazyUpdatePosition",null);var Ne=fe,pe=e("GNNt"),Le=e("wEI+"),Ze=e("YV/h"),q=e("AOa7"),M=e("lUTK"),D=e("qVdP"),b=e("Telt"),w=e("J4zp"),se=e.n(w),Pe=e("h4NZ"),ge=e.n(Pe),Se=e("/hEp"),Re=e.n(Se),De=e("Zm9Q"),We=e("HQEm"),F=e.n(We),Be=e("XBQK"),ae=function(r,n){var a={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&n.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(r);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(a[t[o]]=r[t[o]]);return a},Je=function(n){var a=n.prefixCls,t=n.separator,o=t===void 0?"/":t,l=n.children,O=n.overlay,_=n.dropdownProps,g=ae(n,["prefixCls","separator","children","overlay","dropdownProps"]),W=u.useContext(k.b),j=W.getPrefixCls,K=j("breadcrumb",a),S=function(Te){return O?u.createElement(Be.a,c()({overlay:O,placement:"bottomCenter"},_),u.createElement("span",{className:"".concat(K,"-overlay-link")},Te,u.createElement(F.a,null))):Te},ee;return"href"in g?ee=u.createElement("a",c()({className:"".concat(K,"-link")},g),l):ee=u.createElement("span",c()({className:"".concat(K,"-link")},g),l),ee=S(ee),l?u.createElement("span",null,ee,o&&o!==""&&u.createElement("span",{className:"".concat(K,"-separator")},o)):null};Je.__ANT_BREADCRUMB_ITEM=!0;var ie=Je,Ke=function(n){var a=n.children,t=u.useContext(k.b),o=t.getPrefixCls,l=o("breadcrumb");return u.createElement("span",{className:"".concat(l,"-separator")},a||"/")};Ke.__ANT_BREADCRUMB_SEPARATOR=!0;var Ce=Ke,ze=e("BvKs"),He=e("uaoM"),be=e("0n0R"),de=function(r,n){var a={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&n.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(r);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(a[t[o]]=r[t[o]]);return a};function we(r,n){if(!r.breadcrumbName)return null;var a=Object.keys(n).join("|"),t=r.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),function(o,l){return n[l]||o});return t}function Fe(r,n,a,t){var o=a.indexOf(r)===a.length-1,l=we(r,n);return o?u.createElement("span",null,l):u.createElement("a",{href:"#/".concat(t.join("/"))},l)}var Ee=function(n,a){return n=(n||"").replace(/^\//,""),Object.keys(a).forEach(function(t){n=n.replace(":".concat(t),a[t])}),n},Ae=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,o=m()(n),l=Ee(a,t);return l&&o.push(l),o},$=function(n){var a=n.prefixCls,t=n.separator,o=t===void 0?"/":t,l=n.style,O=n.className,_=n.routes,g=n.children,W=n.itemRender,j=W===void 0?Fe:W,K=n.params,S=K===void 0?{}:K,ee=de(n,["prefixCls","separator","style","className","routes","children","itemRender","params"]),re=u.useContext(k.b),Te=re.getPrefixCls,Me=re.direction,Qe,qe=Te("breadcrumb",a);if(_&&_.length>0){var je=[];Qe=_.map(function(me){var at=Ee(me.path,S);at&&je.push(at);var dt;return me.children&&me.children.length&&(dt=u.createElement(ze.a,null,me.children.map(function(ot){return u.createElement(ze.a.Item,{key:ot.path||ot.breadcrumbName},j(ot,S,_,Ae(je,ot.path,S)))}))),u.createElement(ie,{overlay:dt,separator:o,key:at||me.breadcrumbName},j(me,S,_,je))})}else g&&(Qe=Object(De.a)(g).map(function(me,at){return me&&(Object(He.a)(me.type&&(me.type.__ANT_BREADCRUMB_ITEM===!0||me.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(be.a)(me,{separator:o,key:at}))}));var rt=C()(qe,B()({},"".concat(qe,"-rtl"),Me==="rtl"),O);return u.createElement("div",c()({className:rt,style:l},ee),Qe)};$.Item=ie,$.Separator=Ce;var $e=$,et=$e,Ie=e("Tckk"),Ge=e("4IlW"),tt=function(r,n){var a={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&n.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(r);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(a[t[o]]=r[t[o]]);return a},nt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Xe=u.forwardRef(function(r,n){var a=function(j){var K=j.keyCode;K===Ge.a.ENTER&&j.preventDefault()},t=function(j){var K=j.keyCode,S=r.onClick;K===Ge.a.ENTER&&S&&S()},o=r.style,l=r.noStyle,O=r.disabled,_=tt(r,["style","noStyle","disabled"]),g={};return l||(g=c()({},nt)),O&&(g.pointerEvents="none"),g=c()(c()({},g),o),u.createElement("div",c()({role:"button",tabIndex:0,ref:n},_,{onKeyDown:a,onKeyUp:t,style:g}))}),oe=Xe,xe=e("YMnH"),Ue=function(n,a,t){return!a||!t?null:u.createElement(xe.a,{componentName:"PageHeader"},function(o){var l=o.back;return u.createElement("div",{className:"".concat(n,"-back")},u.createElement(oe,{onClick:function(_){t&&t(_)},className:"".concat(n,"-back-button"),"aria-label":l},a))})},le=function(n){return u.createElement(et,n)},Ye=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return n.backIcon!==void 0?n.backIcon:a==="rtl"?u.createElement(Re.a,null):u.createElement(ge.a,null)},ct=function(n,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",o=a.title,l=a.avatar,O=a.subTitle,_=a.tags,g=a.extra,W=a.onBack,j="".concat(n,"-heading"),K=o||O||_||g;if(!K)return null;var S=Ye(a,t),ee=Ue(n,S,W),re=ee||l||K;return u.createElement("div",{className:j},re&&u.createElement("div",{className:"".concat(j,"-left")},ee,l&&u.createElement(Ie.a,l),o&&u.createElement("span",{className:"".concat(j,"-title"),title:typeof o=="string"?o:void 0},o),O&&u.createElement("span",{className:"".concat(j,"-sub-title"),title:typeof O=="string"?O:void 0},O),_&&u.createElement("span",{className:"".concat(j,"-tags")},_)),g&&u.createElement("span",{className:"".concat(j,"-extra")},g))},ut=function(n,a){return a?u.createElement("div",{className:"".concat(n,"-footer")},a):null},ft=function(n,a){return u.createElement("div",{className:"".concat(n,"-content")},a)},Et=function(n){var a=u.useState(!1),t=se()(a,2),o=t[0],l=t[1],O=function(g){var W=g.width;l(W<768)};return u.createElement(k.a,null,function(_){var g,W=_.getPrefixCls,j=_.pageHeader,K=_.direction,S=n.prefixCls,ee=n.style,re=n.footer,Te=n.children,Me=n.breadcrumb,Qe=n.className,qe=!0;"ghost"in n?qe=n.ghost:j&&"ghost"in j&&(qe=j.ghost);var je=W("page-header",S),rt=Me&&Me.routes?le(Me):null,me=C()(je,Qe,(g={"has-breadcrumb":rt,"has-footer":re},B()(g,"".concat(je,"-ghost"),qe),B()(g,"".concat(je,"-rtl"),K==="rtl"),B()(g,"".concat(je,"-compact"),o),g));return u.createElement(Y.a,{onResize:O},u.createElement("div",{className:me,style:ee},rt,ct(je,n,K),Te&&ft(je,Te),ut(je,re)))})},mt=Et,xt=e("Znn+"),lt=e("ZTPi"),vt=e("jYQm"),_t=e("HTcj"),ht=e("x3PY"),Ut=e("lN3h"),Pt=e("tbuW");function st(r,n){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),a.push.apply(a,t)}return a}function Ve(r){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?st(Object(a),!0).forEach(function(t){it(r,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):st(Object(a)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(a,t))})}return r}function it(r,n,a){return n in r?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,r}function yt(r,n){if(r==null)return{};var a=Ot(r,n),t,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(o=0;o<l.length;o++){if(t=l[o],n.indexOf(t)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(r,t))continue;a[t]=r[t]}}return a}function Ot(r,n){if(r==null)return{};var a={},t=Object.keys(r),o,l;for(l=0;l<t.length;l++){if(o=t[l],n.indexOf(o)>=0)continue;a[o]=r[o]}return a}function ke(){return ke=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},ke.apply(this,arguments)}var pt=function(n){var a=n.tabList,t=n.tabActiveKey,o=n.onTabChange,l=n.tabBarExtraContent,O=n.tabProps,_=n.prefixedClassName;return a&&a.length?i.a.createElement(lt.a,ke({className:"".concat(_,"-tabs"),activeKey:t,onChange:function(W){o&&o(W)},tabBarExtraContent:l},O),a.map(function(g,W){return i.a.createElement(lt.a.TabPane,ke({},g,{tab:g.tab,key:g.key||W}))})):null},gt=function(n,a,t){return!n&&!a?null:i.a.createElement("div",{className:"".concat(t,"-detail")},i.a.createElement("div",{className:"".concat(t,"-main")},i.a.createElement("div",{className:"".concat(t,"-row")},n&&i.a.createElement("div",{className:"".concat(t,"-content")},n),a&&i.a.createElement("div",{className:"".concat(t,"-extraContent")},a))))},Rt=function(n,a){var t=n.title,o=n.content,l=n.pageHeaderRender,O=n.header,_=n.extraContent,g=n.style,W=n.prefixCls,j=yt(n,["title","content","pageHeaderRender","header","extraContent","style","prefixCls"]);if(l===!1)return null;if(l)return l(Ve(Ve({},n),a));var K=t;return!t&&t!==!1&&(K=a.title),i.a.createElement(mt,ke({},a,{title:K},j,{footer:pt(Ve(Ve({},j),{},{prefixedClassName:a.prefixedClassName}))},O,{prefixCls:W}),(O==null?void 0:O.children)||gt(o,_,a.prefixedClassName))},Ct=function(n){var a=n.children,t=n.loading,o=n.style,l=n.footer,O=n.affixProps,_=n.ghost,g=n.fixedHeader,W=Object(u.useContext)(vt.a),j=Object(u.useContext)(Le.a.ConfigContext),K=j.getPrefixCls,S=n.prefixCls||K("pro"),ee="".concat(S,"-page-container"),re=C()(ee,n.className,it({},"".concat(S,"-page-container-ghost"),_)),Te=a?i.a.createElement("div",null,i.a.createElement("div",{className:"".concat(ee,"-children-content")},a),W.hasFooterToolbar&&i.a.createElement("div",{style:{height:48,marginTop:24}})):null,Me=Rt(n,Ve(Ve({},W),{},{prefixCls:void 0,prefixedClassName:ee})),Qe=Me?i.a.createElement("div",{className:"".concat(ee,"-warp")},Me):null;return i.a.createElement("div",{style:o,className:re},g&&Qe?i.a.createElement(Ne,ke({offsetTop:W.hasHeader&&W.fixedHeader?W.headerHeight:0},O),Qe):Qe,i.a.createElement(_t.a,null,t?i.a.createElement(Pt.a,null):Te),l&&i.a.createElement(ht.a,{prefixCls:S},l))},Tt=s.a=Ct},HQEm:function(N,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var v=h(e("Sj0X"));function h(c){return c&&c.__esModule?c:{default:c}}var f=v;s.default=f,N.exports=f},HTcj:function(N,s,e){"use strict";var v=e("GNNt"),h=e("wEI+"),f=e("kZZr"),c=e.n(f),d=e("q1tI"),B=e.n(d),R=e("TSYQ"),V=e.n(R),P=e("jYQm"),A=function(G){var H=Object(d.useContext)(P.a),te=G.children,ye=G.contentWidth,ve=G.className,u=G.style,i=Object(d.useContext)(h.a.ConfigContext),p=i.getPrefixCls,C=G.prefixCls||p("pro"),L=ye||H.contentWidth,Y="".concat(C,"-grid-content");return B.a.createElement("div",{className:V()(Y,ve,{wide:L==="Fixed"}),style:u},B.a.createElement("div",{className:"".concat(C,"-grid-content-children")},te))};s.a=A},IzEo:function(N,s,e){"use strict";var v=e("cIOH"),h=e.n(v),f=e("lnY3"),c=e.n(f),d=e("Znn+"),B=e("14J3"),R=e("jCWc")},NZ0x:function(N,s,e){},Q9mQ:function(N,s,e){"use strict";var v=e("cIOH"),h=e.n(v),f=e("UADf"),c=e.n(f)},Sj0X:function(N,s,e){"use strict";var v=e("TqRt"),h=e("284h");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var f=h(e("q1tI")),c=v(e("XuBP")),d=v(e("KQxl")),B=function(P,A){return f.createElement(d.default,Object.assign({},P,{ref:A,icon:c.default}))};B.displayName="DownOutlined";var R=f.forwardRef(B);s.default=R},Tckk:function(N,s,e){"use strict";var v=e("pVnL"),h=e.n(v),f=e("lSNA"),c=e.n(f),d=e("cDf5"),B=e.n(d),R=e("J4zp"),V=e.n(R),P=e("q1tI"),A=e("TSYQ"),Z=e.n(A),G=e("t23M"),H=e("c+Xe"),te=e("H84U"),ye=e("uaoM"),ve=e("ACnJ"),u=e("5OYt"),i=P.createContext("default"),p=function(y){var X=y.children,z=y.size;return P.createElement(i.Consumer,null,function(Q){return P.createElement(i.Provider,{value:z||Q},X)})},C=i,L=function(J,y){var X={};for(var z in J)Object.prototype.hasOwnProperty.call(J,z)&&y.indexOf(z)<0&&(X[z]=J[z]);if(J!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Q=0,z=Object.getOwnPropertySymbols(J);Q<z.length;Q++)y.indexOf(z[Q])<0&&Object.prototype.propertyIsEnumerable.call(J,z[Q])&&(X[z[Q]]=J[z[Q]]);return X},Y=function(y,X){var z,Q,_e=P.useContext(C),he=P.useState(1),Oe=V()(he,2),ne=Oe[0],fe=Oe[1],Ne=P.useState(!1),pe=V()(Ne,2),Le=pe[0],Ze=pe[1],q=P.useState(!0),M=V()(q,2),D=M[0],b=M[1],w=P.useRef(),se=P.useRef(),Pe=Object(H.a)(X,w),ge=P.useContext(te.b),Se=ge.getPrefixCls,Re=function(){if(!se.current||!w.current)return;var oe=se.current.offsetWidth,xe=w.current.offsetWidth;if(oe!==0&&xe!==0){var Ue=y.gap,le=Ue===void 0?4:Ue;le*2<xe&&fe(xe-le*2<oe?(xe-le*2)/oe:1)}};P.useEffect(function(){Ze(!0)},[]),P.useEffect(function(){b(!0),fe(1)},[y.src]),P.useEffect(function(){Re()},[y.gap]);var De=function(){var oe=y.onError,xe=oe?oe():void 0;xe!==!1&&b(!1)},We=y.prefixCls,F=y.shape,Be=y.size,ae=y.src,Je=y.srcSet,ie=y.icon,Ke=y.className,Ce=y.alt,ze=y.draggable,He=y.children,be=L(y,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),de=Be==="default"?_e:Be,we=Object(u.a)(),Fe=P.useMemo(function(){if(B()(de)!=="object")return{};var Xe=ve.b.find(function(xe){return we[xe]}),oe=de[Xe];return oe?{width:oe,height:oe,lineHeight:"".concat(oe,"px"),fontSize:ie?oe/2:18}:{}},[we,de]);Object(ye.a)(!(typeof ie=="string"&&ie.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(ie,"` at https://ant.design/components/icon"));var Ee=Se("avatar",We),Ae=Z()((z={},c()(z,"".concat(Ee,"-lg"),de==="large"),c()(z,"".concat(Ee,"-sm"),de==="small"),z)),$=P.isValidElement(ae),$e=Z()(Ee,Ae,(Q={},c()(Q,"".concat(Ee,"-").concat(F),F),c()(Q,"".concat(Ee,"-image"),$||ae&&D),c()(Q,"".concat(Ee,"-icon"),ie),Q),Ke),et=typeof de=="number"?{width:de,height:de,lineHeight:"".concat(de,"px"),fontSize:ie?de/2:18}:{},Ie;if(typeof ae=="string"&&D)Ie=P.createElement("img",{src:ae,draggable:ze,srcSet:Je,onError:De,alt:Ce});else if($)Ie=ae;else if(ie)Ie=ie;else if(Le||ne!==1){var Ge="scale(".concat(ne,") translateX(-50%)"),tt={msTransform:Ge,WebkitTransform:Ge,transform:Ge},nt=typeof de=="number"?{lineHeight:"".concat(de,"px")}:{};Ie=P.createElement(G.a,{onResize:Re},P.createElement("span",{className:"".concat(Ee,"-string"),ref:function(oe){se.current=oe},style:h()(h()({},nt),tt)},He))}else Ie=P.createElement("span",{className:"".concat(Ee,"-string"),style:{opacity:0},ref:function(oe){se.current=oe}},He);return delete be.onError,delete be.gap,P.createElement("span",h()({},be,{style:h()(h()(h()({},et),Fe),be.style),className:$e,ref:Pe}),Ie)},k=P.forwardRef(Y);k.displayName="Avatar",k.defaultProps={shape:"circle",size:"default"};var x=k,m=e("Zm9Q"),I=e("0n0R"),E=e("diRs"),U=function(y){var X=P.useContext(te.b),z=X.getPrefixCls,Q=X.direction,_e=y.prefixCls,he=y.className,Oe=he===void 0?"":he,ne=y.maxCount,fe=y.maxStyle,Ne=y.size,pe=z("avatar-group",_e),Le=Z()(pe,c()({},"".concat(pe,"-rtl"),Q==="rtl"),Oe),Ze=y.children,q=y.maxPopoverPlacement,M=q===void 0?"top":q,D=Object(m.a)(Ze).map(function(Pe,ge){return Object(I.a)(Pe,{key:"avatar-key-".concat(ge)})}),b=D.length;if(ne&&ne<b){var w=D.slice(0,ne),se=D.slice(ne,b);return w.push(P.createElement(E.a,{key:"avatar-popover-key",content:se,trigger:"hover",placement:M,overlayClassName:"".concat(pe,"-popover")},P.createElement(x,{style:fe},"+".concat(b-ne)))),P.createElement(p,{size:Ne},P.createElement("div",{className:Le,style:y.style},w))}return P.createElement(p,{size:Ne},P.createElement("div",{className:Le,style:y.style},D))},ce=U,T=x;T.Group=ce;var ue=s.a=T},Telt:function(N,s,e){"use strict";var v=e("cIOH"),h=e.n(v),f=e("ifDB"),c=e.n(f),d=e("Q9mQ")},UADf:function(N,s,e){},XuBP:function(N,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};s.default=v},"YV/h":function(N,s,e){},YkAm:function(N,s,e){},ayqn:function(N,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};s.default=v},bx4M:function(N,s,e){"use strict";var v=e("lSNA"),h=e.n(v),f=e("pVnL"),c=e.n(f),d=e("q1tI"),B=e("TSYQ"),R=e.n(B),V=e("BGR+"),P=e("H84U"),A=function(x,m){var I={};for(var E in x)Object.prototype.hasOwnProperty.call(x,E)&&m.indexOf(E)<0&&(I[E]=x[E]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,E=Object.getOwnPropertySymbols(x);U<E.length;U++)m.indexOf(E[U])<0&&Object.prototype.propertyIsEnumerable.call(x,E[U])&&(I[E[U]]=x[E[U]]);return I},Z=function(m){var I=m.prefixCls,E=m.className,U=m.hoverable,ce=U===void 0?!0:U,T=A(m,["prefixCls","className","hoverable"]);return d.createElement(P.a,null,function(ue){var J=ue.getPrefixCls,y=J("card",I),X=R()("".concat(y,"-grid"),E,h()({},"".concat(y,"-grid-hoverable"),ce));return d.createElement("div",c()({},T,{className:X}))})},G=Z,H=function(x,m){var I={};for(var E in x)Object.prototype.hasOwnProperty.call(x,E)&&m.indexOf(E)<0&&(I[E]=x[E]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,E=Object.getOwnPropertySymbols(x);U<E.length;U++)m.indexOf(E[U])<0&&Object.prototype.propertyIsEnumerable.call(x,E[U])&&(I[E[U]]=x[E[U]]);return I},te=function(m){return d.createElement(P.a,null,function(I){var E=I.getPrefixCls,U=m.prefixCls,ce=m.className,T=m.avatar,ue=m.title,J=m.description,y=H(m,["prefixCls","className","avatar","title","description"]),X=E("card",U),z=R()("".concat(X,"-meta"),ce),Q=T?d.createElement("div",{className:"".concat(X,"-meta-avatar")},T):null,_e=ue?d.createElement("div",{className:"".concat(X,"-meta-title")},ue):null,he=J?d.createElement("div",{className:"".concat(X,"-meta-description")},J):null,Oe=_e||he?d.createElement("div",{className:"".concat(X,"-meta-detail")},_e,he):null;return d.createElement("div",c()({},y,{className:z}),Q,Oe)})},ye=te,ve=e("ZTPi"),u=e("BMrR"),i=e("kPKH"),p=e("3Nzz"),C=function(x,m){var I={};for(var E in x)Object.prototype.hasOwnProperty.call(x,E)&&m.indexOf(E)<0&&(I[E]=x[E]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,E=Object.getOwnPropertySymbols(x);U<E.length;U++)m.indexOf(E[U])<0&&Object.prototype.propertyIsEnumerable.call(x,E[U])&&(I[E[U]]=x[E[U]]);return I};function L(x){var m=x.map(function(I,E){return d.createElement("li",{style:{width:"".concat(100/x.length,"%")},key:"action-".concat(E)},d.createElement("span",null,I))});return m}var Y=function(m){var I,E,U=d.useContext(P.b),ce=U.getPrefixCls,T=U.direction,ue=d.useContext(p.b),J=function($){m.onTabChange&&m.onTabChange($)},y=function(){var $;return d.Children.forEach(m.children,function($e){$e&&$e.type&&$e.type===G&&($=!0)}),$},X=m.prefixCls,z=m.className,Q=m.extra,_e=m.headStyle,he=_e===void 0?{}:_e,Oe=m.bodyStyle,ne=Oe===void 0?{}:Oe,fe=m.title,Ne=m.loading,pe=m.bordered,Le=pe===void 0?!0:pe,Ze=m.size,q=m.type,M=m.cover,D=m.actions,b=m.tabList,w=m.children,se=m.activeTabKey,Pe=m.defaultActiveTabKey,ge=m.tabBarExtraContent,Se=m.hoverable,Re=m.tabProps,De=Re===void 0?{}:Re,We=C(m,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),F=ce("card",X),Be=ne.padding===0||ne.padding==="0px"?{padding:24}:void 0,ae=d.createElement("div",{className:"".concat(F,"-loading-block")}),Je=d.createElement("div",{className:"".concat(F,"-loading-content"),style:Be},d.createElement(u.a,{gutter:8},d.createElement(i.a,{span:22},ae)),d.createElement(u.a,{gutter:8},d.createElement(i.a,{span:8},ae),d.createElement(i.a,{span:15},ae)),d.createElement(u.a,{gutter:8},d.createElement(i.a,{span:6},ae),d.createElement(i.a,{span:18},ae)),d.createElement(u.a,{gutter:8},d.createElement(i.a,{span:13},ae),d.createElement(i.a,{span:9},ae)),d.createElement(u.a,{gutter:8},d.createElement(i.a,{span:4},ae),d.createElement(i.a,{span:3},ae),d.createElement(i.a,{span:16},ae))),ie=se!==void 0,Ke=c()(c()({},De),(I={},h()(I,ie?"activeKey":"defaultActiveKey",ie?se:Pe),h()(I,"tabBarExtraContent",ge),I)),Ce,ze=b&&b.length?d.createElement(ve.a,c()({size:"large"},Ke,{className:"".concat(F,"-head-tabs"),onChange:J}),b.map(function(Ae){return d.createElement(ve.a.TabPane,{tab:Ae.tab,disabled:Ae.disabled,key:Ae.key})})):null;(fe||Q||ze)&&(Ce=d.createElement("div",{className:"".concat(F,"-head"),style:he},d.createElement("div",{className:"".concat(F,"-head-wrapper")},fe&&d.createElement("div",{className:"".concat(F,"-head-title")},fe),Q&&d.createElement("div",{className:"".concat(F,"-extra")},Q)),ze));var He=M?d.createElement("div",{className:"".concat(F,"-cover")},M):null,be=d.createElement("div",{className:"".concat(F,"-body"),style:ne},Ne?Je:w),de=D&&D.length?d.createElement("ul",{className:"".concat(F,"-actions")},L(D)):null,we=Object(V.a)(We,["onTabChange"]),Fe=Ze||ue,Ee=R()(F,(E={},h()(E,"".concat(F,"-loading"),Ne),h()(E,"".concat(F,"-bordered"),Le),h()(E,"".concat(F,"-hoverable"),Se),h()(E,"".concat(F,"-contain-grid"),y()),h()(E,"".concat(F,"-contain-tabs"),b&&b.length),h()(E,"".concat(F,"-").concat(Fe),Fe),h()(E,"".concat(F,"-type-").concat(q),!!q),h()(E,"".concat(F,"-rtl"),T==="rtl"),E),z);return d.createElement("div",c()({},we,{className:Ee}),Ce,He,be,de)};Y.Grid=G,Y.Meta=ye;var k=s.a=Y},diRs:function(N,s,e){"use strict";var v=e("pVnL"),h=e.n(v),f=e("q1tI"),c=e("3S7+"),d=e("H84U"),B=function(Z){if(!Z)return null;var G=typeof Z=="function";return G?Z():Z},R=function(A,Z){var G={};for(var H in A)Object.prototype.hasOwnProperty.call(A,H)&&Z.indexOf(H)<0&&(G[H]=A[H]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var te=0,H=Object.getOwnPropertySymbols(A);te<H.length;te++)Z.indexOf(H[te])<0&&Object.prototype.propertyIsEnumerable.call(A,H[te])&&(G[H[te]]=A[H[te]]);return G},V=f.forwardRef(function(A,Z){var G=A.prefixCls,H=A.title,te=A.content,ye=R(A,["prefixCls","title","content"]),ve=f.useContext(d.b),u=ve.getPrefixCls,i=function(L){return f.createElement(f.Fragment,null,H&&f.createElement("div",{className:"".concat(L,"-title")},B(H)),f.createElement("div",{className:"".concat(L,"-inner-content")},B(te)))},p=u("popover",G);return f.createElement(c.a,h()({},ye,{prefixCls:p,ref:Z,overlay:i(p)}))});V.displayName="Popover",V.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var P=s.a=V},fOrg:function(N,s,e){"use strict";var v=e("cIOH"),h=e.n(v),f=e("YkAm"),c=e.n(f)},h4NZ:function(N,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var v=h(e("jw4T"));function h(c){return c&&c.__esModule?c:{default:c}}var f=v;s.default=f,N.exports=f},ifDB:function(N,s,e){},jCWc:function(N,s,e){"use strict";var v=e("cIOH"),h=e.n(v),f=e("1GLa")},jYQm:function(N,s,e){"use strict";var v=e("q1tI"),h=e.n(v),f=Object(v.createContext)({});s.a=f},jw4T:function(N,s,e){"use strict";var v=e("TqRt"),h=e("284h");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var f=h(e("q1tI")),c=v(e("ayqn")),d=v(e("KQxl")),B=function(P,A){return f.createElement(d.default,Object.assign({},P,{ref:A,icon:c.default}))};B.displayName="ArrowLeftOutlined";var R=f.forwardRef(B);s.default=R},kPKH:function(N,s,e){"use strict";var v=e("/kpp");s.a=v.a},kZZr:function(N,s,e){},lN3h:function(N,s,e){},lnY3:function(N,s,e){},r4ZK:function(N,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};s.default=v},x3PY:function(N,s,e){"use strict";var v=e("GNNt"),h=e("wEI+"),f=e("q1tI"),c=e.n(f),d=e("TSYQ"),B=e.n(d),R=e("BGR+"),V=e("NZ0x"),P=e.n(V),A=e("jYQm");function Z(){return Z=Object.assign||function(i){for(var p=1;p<arguments.length;p++){var C=arguments[p];for(var L in C)Object.prototype.hasOwnProperty.call(C,L)&&(i[L]=C[L])}return i},Z.apply(this,arguments)}function G(i,p){var C=Object.keys(i);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(i);p&&(L=L.filter(function(Y){return Object.getOwnPropertyDescriptor(i,Y).enumerable})),C.push.apply(C,L)}return C}function H(i){for(var p=1;p<arguments.length;p++){var C=arguments[p]!=null?arguments[p]:{};p%2?G(Object(C),!0).forEach(function(L){te(i,L,C[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(C)):G(Object(C)).forEach(function(L){Object.defineProperty(i,L,Object.getOwnPropertyDescriptor(C,L))})}return i}function te(i,p,C){return p in i?Object.defineProperty(i,p,{value:C,enumerable:!0,configurable:!0,writable:!0}):i[p]=C,i}function ye(i,p){if(i==null)return{};var C=ve(i,p),L,Y;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(i);for(Y=0;Y<k.length;Y++){if(L=k[Y],p.indexOf(L)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(i,L))continue;C[L]=i[L]}}return C}function ve(i,p){if(i==null)return{};var C={},L=Object.keys(i),Y,k;for(k=0;k<L.length;k++){if(Y=L[k],p.indexOf(Y)>=0)continue;C[Y]=i[Y]}return C}var u=function(p){var C=p.children,L=p.className,Y=p.extra,k=p.style,x=p.renderContent,m=ye(p,["children","className","extra","style","renderContent"]),I=Object(f.useContext)(h.a.ConfigContext),E=I.getPrefixCls,U=p.prefixCls||E("pro"),ce="".concat(U,"-footer-bar"),T=Object(f.useContext)(A.a),ue=Object(f.useMemo)(function(){var y=T.hasSiderMenu,X=T.isMobile,z=T.siderWidth;return y?z?X?"100%":"calc(100% - ".concat(z,"px)"):"100%":void 0},[T.collapsed,T.hasSiderMenu,T.isMobile,T.siderWidth]),J=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"".concat(ce,"-left")},Y),c.a.createElement("div",{className:"".concat(ce,"-right")},C));return Object(f.useEffect)(function(){return!T||!(T==null?void 0:T.setHasFooterToolbar)?function(){}:(T==null||T.setHasFooterToolbar(!0),function(){if(!T||!(T==null?void 0:T.setHasFooterToolbar))return;T==null||T.setHasFooterToolbar(!1)})},[]),c.a.createElement("div",Z({className:B()(L,"".concat(ce)),style:H({width:ue},k)},Object(R.a)(m,["prefixCls"])),x?x(H(H(H({},p),T),{},{leftWidth:ue}),J):J)};s.a=u}}]);
