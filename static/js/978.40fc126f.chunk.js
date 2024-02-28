"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[978],{5462:function(){},2564:function(t,e,n){n.d(e,{Ix:function(){return Y}});var o=n(4925),a=n(4942),r=n(9439),s=n(1413),i=n(3433),c=n(2791);function l(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(n=l(t[e]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n);return o}var u=function(){for(var t,e,n=0,o="",a=arguments.length;n<a;n++)(t=arguments[n])&&(e=l(t))&&(o&&(o+=" "),o+=e);return o},d=["theme","type","isLoading"],f=function(t){return"number"==typeof t&&!isNaN(t)},p=function(t){return"string"==typeof t},v=function(t){return"function"==typeof t},m=function(t){return p(t)||v(t)?t:null},g=function(t){return(0,c.isValidElement)(t)||p(t)||v(t)||f(t)};function y(t){var e=t.enter,n=t.exit,o=t.appendPosition,a=void 0!==o&&o,r=t.collapse,s=void 0===r||r,l=t.collapseDuration,u=void 0===l?300:l;return function(t){var o=t.children,r=t.position,l=t.preventExitTransition,d=t.done,f=t.nodeRef,p=t.isIn,v=t.playToast,m=a?"".concat(e,"--").concat(r):e,g=a?"".concat(n,"--").concat(r):n,y=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var t,e=f.current,n=m.split(" "),o=function t(o){var a;o.target===f.current&&(v(),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===y.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,i.Z)(n)))};(t=e.classList).add.apply(t,(0,i.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),s?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,a=t.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(e,n)}))}))}(t,d,u):d()};p||(l?e():(y.current=1,t.className+=" ".concat(g),t.addEventListener("animationend",e)))}),[p]),c.createElement(c.Fragment,null,o)}}function h(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}var E=new Map,T=[],b=new Set,_=function(t){return b.forEach((function(e){return e(t)}))},I=function(){return E.size>0};function Z(t,e){var n;if(e)return!(null==(n=E.get(e))||!n.isToastActive(t));var o=!1;return E.forEach((function(e){e.isToastActive(t)&&(o=!0)})),o}function C(t,e){g(t)&&(I()||T.push({content:t,options:e}),E.forEach((function(n){n.buildToast(t,e)})))}function L(t,e){E.forEach((function(n){null!=e&&null!=e&&e.containerId?(null==e?void 0:e.containerId)===n.id&&n.toggle(t,null==e?void 0:e.id):n.toggle(t,null==e?void 0:e.id)}))}function k(t){var e=(0,c.useRef)(function(t){var e=t.containerId||1;return{subscribe:function(n){var o=function(t,e,n){var o=1,a=0,l=[],u=[],d=[],y=e,E=new Map,T=new Set,b=function(){d=Array.from(E.values()),T.forEach((function(t){return t()}))},_=function(t){u=null==t?[]:u.filter((function(e){return e!==t})),b()},I=function(t){var e=t.props,o=e.toastId,a=e.onOpen,r=e.updateId,s=e.children,l=null==r;t.staleId&&E.delete(t.staleId),E.set(o,t),u=[].concat((0,i.Z)(u),[t.props.toastId]).filter((function(e){return e!==t.staleId})),b(),n(h(t,l?"added":"updated")),l&&v(a)&&a((0,c.isValidElement)(s)&&s.props)};return{id:t,props:y,observe:function(t){return T.add(t),function(){return T.delete(t)}},toggle:function(t,e){E.forEach((function(n){null!=e&&e!==n.props.toastId||v(n.toggle)&&n.toggle(t)}))},removeToast:_,toasts:E,clearQueue:function(){a-=l.length,l=[]},buildToast:function(e,i){if(!function(e){var n=e.containerId,o=e.toastId,a=e.updateId,r=n?n!==t:1!==t,s=E.has(o)&&null==a;return r||s}(i)){var u=i.toastId,d=i.updateId,T=i.data,Z=i.staleId,C=i.delay,L=function(){_(u)},k=null==d;k&&a++;var N,w,P=(0,s.Z)((0,s.Z)((0,s.Z)({},y),{},{style:y.toastStyle,key:o++},Object.fromEntries(Object.entries(i).filter((function(t){var e=(0,r.Z)(t,2);e[0];return null!=e[1]})))),{},{toastId:u,updateId:d,data:T,closeToast:L,isIn:!1,className:m(i.className||y.toastClassName),bodyClassName:m(i.bodyClassName||y.bodyClassName),progressClassName:m(i.progressClassName||y.progressClassName),autoClose:!i.isLoading&&(N=i.autoClose,w=y.autoClose,!1===N||f(N)&&N>0?N:w),deleteToast:function(){var t=E.get(u),e=t.props,o=e.onClose,r=e.children;v(o)&&o((0,c.isValidElement)(r)&&r.props),n(h(t,"removed")),E.delete(u),--a<0&&(a=0),l.length>0?I(l.shift()):b()}});P.closeButton=y.closeButton,!1===i.closeButton||g(i.closeButton)?P.closeButton=i.closeButton:!0===i.closeButton&&(P.closeButton=!g(y.closeButton)||y.closeButton);var A=e;(0,c.isValidElement)(e)&&!p(e.type)?A=(0,c.cloneElement)(e,{closeToast:L,toastProps:P,data:T}):v(e)&&(A=e({closeToast:L,toastProps:P,data:T}));var M={content:A,props:P,staleId:Z};y.limit&&y.limit>0&&a>y.limit&&k?l.push(M):f(C)?setTimeout((function(){I(M)}),C):I(M)}},setProps:function(t){y=t},setToggle:function(t,e){E.get(t).toggle=e},isToastActive:function(t){return u.some((function(e){return e===t}))},getSnapshot:function(){return y.newestOnTop?d.reverse():d}}}(e,t,_);E.set(e,o);var a=o.observe(n);return T.forEach((function(t){return C(t.content,t.options)})),T=[],function(){a(),E.delete(e)}},setProps:function(t){var n;null==(n=E.get(e))||n.setProps(t)},getSnapshot:function(){var t;return null==(t=E.get(e))?void 0:t.getSnapshot()}}}(t)).current,n=e.subscribe,o=e.getSnapshot;(0,e.setProps)(t);var a=(0,c.useSyncExternalStore)(n,o,o);return{getToastToRender:function(t){if(!a)return[];var e=new Map;return a.forEach((function(t){var n=t.props.position;e.has(n)||e.set(n,[]),e.get(n).push(t)})),Array.from(e,(function(e){return t(e[0],e[1])}))},isToastActive:Z,count:null==a?void 0:a.length}}function N(t){var e,n,o=(0,c.useState)(!1),a=(0,r.Z)(o,2),s=a[0],i=a[1],l=(0,c.useState)(!1),u=(0,r.Z)(l,2),d=u[0],f=u[1],p=(0,c.useRef)(null),v=(0,c.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,m=t.autoClose,g=t.pauseOnHover,y=t.closeToast,h=t.onClick,T=t.closeOnClick;function b(){i(!0)}function _(){i(!1)}function I(e){var n=p.current;v.canDrag&&n&&(v.didMove=!0,s&&_(),v.delta="x"===t.draggableDirection?e.clientX-v.start:e.clientY-v.start,v.start!==e.clientX&&(v.canCloseOnClick=!1),n.style.transform="translate3d(".concat("x"===t.draggableDirection?"".concat(v.delta,"px, var(--y)"):"0, calc(".concat(v.delta,"px + var(--y))"),",0)"),n.style.opacity=""+(1-Math.abs(v.delta/v.removalDistance)))}function Z(){document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",Z);var e=p.current;if(v.canDrag&&v.didMove&&e){if(v.canDrag=!1,Math.abs(v.delta)>v.removalDistance)return f(!0),t.closeToast(),void t.collapseAll();e.style.transition="transform 0.2s, opacity 0.2s",e.style.removeProperty("transform"),e.style.removeProperty("opacity")}}null==(n=E.get((e={id:t.toastId,containerId:t.containerId,fn:i}).containerId||1))||n.setToggle(e.id,e.fn),(0,c.useEffect)((function(){if(t.pauseOnFocusLoss)return document.hasFocus()||_(),window.addEventListener("focus",b),window.addEventListener("blur",_),function(){window.removeEventListener("focus",b),window.removeEventListener("blur",_)}}),[t.pauseOnFocusLoss]);var C={onPointerDown:function(e){if(!0===t.draggable||t.draggable===e.pointerType){v.didMove=!1,document.addEventListener("pointermove",I),document.addEventListener("pointerup",Z);var n=p.current;v.canCloseOnClick=!0,v.canDrag=!0,n.style.transition="none","x"===t.draggableDirection?(v.start=e.clientX,v.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(v.start=e.clientY,v.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(e){var n=p.current.getBoundingClientRect(),o=n.top,a=n.bottom,r=n.left,s=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&e.clientX>=r&&e.clientX<=s&&e.clientY>=o&&e.clientY<=a?_():b()}};return m&&g&&(C.onMouseEnter=_,t.stacked||(C.onMouseLeave=b)),T&&(C.onClick=function(t){h&&h(t),v.canCloseOnClick&&y()}),{playToast:b,pauseToast:_,isRunning:s,preventExitTransition:d,toastRef:p,eventHandlers:C}}function w(t){var e=t.delay,n=t.isRunning,o=t.closeToast,r=t.type,i=void 0===r?"default":r,l=t.hide,d=t.className,f=t.style,p=t.controlledProgress,m=t.progress,g=t.rtl,y=t.isIn,h=t.theme,E=l||p&&0===m,T=(0,s.Z)((0,s.Z)({},f),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused"});p&&(T.transform="scaleX(".concat(m,")"));var b=u("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":g}),_=v(d)?d({rtl:g,type:i,defaultClassName:b}):u(b,d),I=(0,a.Z)({},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){y&&o()});return c.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":E},c.createElement("div",{className:"Toastify__progress-bar--bg Toastify__progress-bar-theme--".concat(h," Toastify__progress-bar--").concat(i)}),c.createElement("div",(0,s.Z)({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:_,style:T},I)))}var P=1,A=function(){return""+P++};function M(t){return t&&(p(t.toastId)||f(t.toastId))?t.toastId:A()}function x(t,e){return C(t,e),e.toastId}function B(t,e){return(0,s.Z)((0,s.Z)({},e),{},{type:e&&e.type||t,toastId:M(e)})}function O(t){return function(e,n){return x(e,B(t,n))}}function D(t,e){return x(t,B("default",e))}D.loading=function(t,e){return x(t,B("default",(0,s.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},D.promise=function(t,e,n){var o,a=e.pending,r=e.error,i=e.success;a&&(o=p(a)?D.loading(a,n):D.loading(a.render,(0,s.Z)((0,s.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=function(t,e,a){if(null!=e){var r=(0,s.Z)((0,s.Z)((0,s.Z)({type:t},c),n),{},{data:a}),i=p(e)?{render:e}:e;return o?D.update(o,(0,s.Z)((0,s.Z)({},r),i)):D(i.render,(0,s.Z)((0,s.Z)({},r),i)),a}D.dismiss(o)},u=v(t)?t():t;return u.then((function(t){return l("success",i,t)})).catch((function(t){return l("error",r,t)})),u},D.success=O("success"),D.info=O("info"),D.error=O("error"),D.warning=O("warning"),D.warn=D.warning,D.dark=function(t,e){return x(t,B("default",(0,s.Z)({theme:"dark"},e)))},D.dismiss=function(t){!function(t){var e;if(I()){if(null==t||p(e=t)||f(e))E.forEach((function(e){e.removeToast(t)}));else if(t&&("containerId"in t||"id"in t)){var n;(null==(n=E.get(t.containerId))?void 0:n.removeToast(t.id))||E.forEach((function(e){e.removeToast(t.id)}))}}else T=T.filter((function(e){return null!=t&&e.options.toastId!==t}))}(t)},D.clearWaitingQueue=function(t){void 0===t&&(t={}),E.forEach((function(e){!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()}))},D.isActive=Z,D.update=function(t,e){void 0===e&&(e={});var n=function(t,e){var n,o=e.containerId;return null==(n=E.get(o||1))?void 0:n.toasts.get(t)}(t,e);if(n){var o=n.props,a=n.content,r=(0,s.Z)((0,s.Z)((0,s.Z)({delay:100},o),e),{},{toastId:e.toastId||t,updateId:A()});r.toastId!==t&&(r.staleId=t);var i=r.render||a;delete r.render,x(i,r)}},D.done=function(t){D.update(t,{progress:1})},D.onChange=function(t){return b.add(t),function(){b.delete(t)}},D.play=function(t){return L(!0,t)},D.pause=function(t){return L(!1,t)};var R="undefined"!=typeof window?c.useLayoutEffect:c.useEffect,S=function(t){var e=t.theme,n=t.type,a=(t.isLoading,(0,o.Z)(t,d));return c.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},a))},z={info:function(t){return c.createElement(S,(0,s.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(S,(0,s.Z)({},t),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(S,(0,s.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(S,(0,s.Z)({},t),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}},H=function(t){var e=N(t),n=e.isRunning,o=e.preventExitTransition,a=e.toastRef,r=e.eventHandlers,i=e.playToast,l=t.closeButton,d=t.children,f=t.autoClose,p=t.onClick,m=t.type,g=t.hideProgressBar,y=t.closeToast,h=t.transition,E=t.position,T=t.className,b=t.style,_=t.bodyClassName,I=t.bodyStyle,Z=t.progressClassName,C=t.progressStyle,L=t.updateId,k=t.role,P=t.progress,A=t.rtl,M=t.toastId,x=t.deleteToast,B=t.isIn,O=t.isLoading,D=t.closeOnClick,R=t.theme,S=u("Toastify__toast","Toastify__toast-theme--".concat(R),"Toastify__toast--".concat(m),{"Toastify__toast--rtl":A},{"Toastify__toast--close-on-click":D}),H=v(T)?T({rtl:A,position:E,type:m,defaultClassName:S}):u(S,T),F=function(t){var e=t.theme,n=t.type,o=t.isLoading,a=t.icon,r=null,i={theme:e,type:n};return!1===a||(v(a)?r=a((0,s.Z)((0,s.Z)({},i),{},{isLoading:o})):(0,c.isValidElement)(a)?r=(0,c.cloneElement)(a,i):o?r=z.spinner():function(t){return t in z}(n)&&(r=z[n](i))),r}(t),V=!!P||!f,X={closeToast:y,type:m,theme:R},Y=null;return!1===l||(Y=v(l)?l(X):(0,c.isValidElement)(l)?(0,c.cloneElement)(l,X):function(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,a=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":a},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(X)),c.createElement(h,{isIn:B,done:x,position:E,preventExitTransition:o,nodeRef:a,playToast:i},c.createElement("div",(0,s.Z)((0,s.Z)({id:M,onClick:p,"data-in":B,className:H},r),{},{style:b,ref:a}),c.createElement("div",(0,s.Z)((0,s.Z)({},B&&{role:k}),{},{className:v(_)?_({type:m}):u("Toastify__toast-body",_),style:I}),null!=F&&c.createElement("div",{className:u("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},F),c.createElement("div",null,d)),Y,c.createElement(w,(0,s.Z)((0,s.Z)({},L&&!V?{key:"pb-".concat(L)}:{}),{},{rtl:A,theme:R,delay:f,isRunning:n,isIn:B,closeToast:y,hide:g,type:m,style:C,className:Z,controlledProgress:V,progress:P||0}))))},F=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},V=y(F("bounce",!0)),X=(y(F("slide",!0)),y(F("zoom")),y(F("flip")),{position:"top-right",transition:V,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function Y(t){var e=(0,s.Z)((0,s.Z)({},X),t),n=t.stacked,o=(0,c.useState)(!0),a=(0,r.Z)(o,2),i=a[0],l=a[1],d=(0,c.useRef)(null),f=k(e),p=f.getToastToRender,g=f.isToastActive,y=f.count,h=e.className,E=e.style,T=e.rtl,b=e.containerId;function _(t){var e=u("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":T});return v(h)?h({position:t,rtl:T,defaultClassName:e}):u(e,m(h))}function I(){n&&(l(!0),D.play())}return R((function(){if(n){var t,o=d.current.querySelectorAll('[data-in="true"]'),a=null==(t=e.position)?void 0:t.includes("top"),r=0,s=0;Array.from(o).reverse().forEach((function(t,e){var n=t;n.classList.add("Toastify__toast--stacked"),e>0&&(n.dataset.collapsed="".concat(i)),n.dataset.pos||(n.dataset.pos=a?"top":"bot");var o=r*(i?.2:1)+(i?0:12*e);n.style.setProperty("--y","".concat(a?o:-1*o,"px")),n.style.setProperty("--g","".concat(12)),n.style.setProperty("--s",""+(1-(i?s:0))),r+=n.offsetHeight,s+=.025}))}}),[i,y,n]),c.createElement("div",{ref:d,className:"Toastify",id:b,onMouseEnter:function(){n&&(l(!1),D.pause())},onMouseLeave:I},p((function(t,e){var o=e.length?(0,s.Z)({},E):(0,s.Z)((0,s.Z)({},E),{},{pointerEvents:"none"});return c.createElement("div",{className:_(t),style:o,key:"container-".concat(t)},e.map((function(t){var e=t.content,o=t.props;return c.createElement(H,(0,s.Z)((0,s.Z)({},o),{},{stacked:n,collapseAll:I,isIn:g(o.toastId,o.containerId),style:o.style,key:"toast-".concat(o.key)}),e)})))})))}}}]);
//# sourceMappingURL=978.40fc126f.chunk.js.map