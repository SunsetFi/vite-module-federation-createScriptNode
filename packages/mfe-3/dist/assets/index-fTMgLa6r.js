import{g as Y}from"./_commonjsHelpers-C932wzq6.js";function b(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const u in n)if(u!=="default"&&!(u in t)){const i=Object.getOwnPropertyDescriptor(n,u);i&&Object.defineProperty(t,u,i.get?i:{enumerable:!0,get:()=>n[u]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var S={exports:{}},o={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),T=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=T&&t[T]||t["@@iterator"],typeof t=="function"?t:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,P={};function l(t,e,r){this.props=t,this.context=e,this.refs=P,this.updater=r||j}l.prototype.isReactComponent={};l.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};l.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H(){}H.prototype=l.prototype;function v(t,e,r){this.props=t,this.context=e,this.refs=P,this.updater=r||j}var m=v.prototype=new H;m.constructor=v;h(m,l.prototype);m.isPureReactComponent=!0;var C=Array.isArray,f={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function R(t,e,r,n,u,i){return r=i.ref,{$$typeof:E,type:t,key:e,ref:r!==void 0?r:null,props:i}}function B(t,e){return R(t.type,e,void 0,void 0,void 0,t.props)}function d(t){return typeof t=="object"&&t!==null&&t.$$typeof===E}function W(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var g=/\/+/g;function y(t,e){return typeof t=="object"&&t!==null&&t.key!=null?W(""+t.key):e.toString(36)}function w(){}function Q(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(w,w):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function a(t,e,r,n,u){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(i){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case E:case M:s=!0;break;case O:return s=t._init,a(s(t._payload),e,r,n,u)}}if(s)return u=u(t),s=n===""?"."+y(t,0):n,C(u)?(r="",s!=null&&(r=s.replace(g,"$&/")+"/"),a(u,e,r,"",function(x){return x})):u!=null&&(d(u)&&(u=B(u,r+(u.key==null||t&&t.key===u.key?"":(""+u.key).replace(g,"$&/")+"/")+s)),e.push(u)),1;s=0;var p=n===""?".":n+":";if(C(t))for(var c=0;c<t.length;c++)n=t[c],i=p+y(n,c),s+=a(n,e,r,i,u);else if(c=K(t),typeof c=="function")for(t=c.call(t),c=0;!(n=t.next()).done;)n=n.value,i=p+y(n,c++),s+=a(n,e,r,i,u);else if(i==="object"){if(typeof t.then=="function")return a(Q(t),e,r,n,u);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function _(t,e,r){if(t==null)return t;var n=[],u=0;return a(t,n,"","",function(i){return e.call(r,i,u++)}),n}function X(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var A=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Z(){}o.Children={map:_,forEach:function(t,e,r){_(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return _(t,function(){e++}),e},toArray:function(t){return _(t,function(e){return e})||[]},only:function(t){if(!d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};o.Component=l;o.Fragment=k;o.Profiler=L;o.PureComponent=v;o.StrictMode=I;o.Suspense=z;o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f;o.act=function(){throw Error("act(...) is not supported in production builds of React.")};o.cache=function(t){return function(){return t.apply(null,arguments)}};o.cloneElement=function(t,e,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=h({},t.props),u=t.key,i=void 0;if(e!=null)for(s in e.ref!==void 0&&(i=void 0),e.key!==void 0&&(u=""+e.key),e)!$.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(n[s]=e[s]);var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){for(var p=Array(s),c=0;c<s;c++)p[c]=arguments[c+2];n.children=p}return R(t.type,u,void 0,void 0,i,n)};o.createContext=function(t){return t={$$typeof:U,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:D,_context:t},t};o.createElement=function(t,e,r){var n,u={},i=null;if(e!=null)for(n in e.key!==void 0&&(i=""+e.key),e)$.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(u[n]=e[n]);var s=arguments.length-2;if(s===1)u.children=r;else if(1<s){for(var p=Array(s),c=0;c<s;c++)p[c]=arguments[c+2];u.children=p}if(t&&t.defaultProps)for(n in s=t.defaultProps,s)u[n]===void 0&&(u[n]=s[n]);return R(t,i,void 0,void 0,null,u)};o.createRef=function(){return{current:null}};o.forwardRef=function(t){return{$$typeof:q,render:t}};o.isValidElement=d;o.lazy=function(t){return{$$typeof:O,_payload:{_status:-1,_result:t},_init:X}};o.memo=function(t,e){return{$$typeof:G,type:t,compare:e===void 0?null:e}};o.startTransition=function(t){var e=f.T,r={};f.T=r;try{var n=t(),u=f.S;u!==null&&u(r,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Z,A)}catch(i){A(i)}finally{f.T=e}};o.unstable_useCacheRefresh=function(){return f.H.useCacheRefresh()};o.use=function(t){return f.H.use(t)};o.useActionState=function(t,e,r){return f.H.useActionState(t,e,r)};o.useCallback=function(t,e){return f.H.useCallback(t,e)};o.useContext=function(t){return f.H.useContext(t)};o.useDebugValue=function(){};o.useDeferredValue=function(t,e){return f.H.useDeferredValue(t,e)};o.useEffect=function(t,e){return f.H.useEffect(t,e)};o.useId=function(){return f.H.useId()};o.useImperativeHandle=function(t,e,r){return f.H.useImperativeHandle(t,e,r)};o.useInsertionEffect=function(t,e){return f.H.useInsertionEffect(t,e)};o.useLayoutEffect=function(t,e){return f.H.useLayoutEffect(t,e)};o.useMemo=function(t,e){return f.H.useMemo(t,e)};o.useOptimistic=function(t,e){return f.H.useOptimistic(t,e)};o.useReducer=function(t,e,r){return f.H.useReducer(t,e,r)};o.useRef=function(t){return f.H.useRef(t)};o.useState=function(t){return f.H.useState(t)};o.useSyncExternalStore=function(t,e,r){return f.H.useSyncExternalStore(t,e,r)};o.useTransition=function(){return f.H.useTransition()};o.version="19.0.0";S.exports=o;var N=S.exports;const J=Y(N),F=b({__proto__:null,default:J},[N]);export{F as i};
//# sourceMappingURL=index-fTMgLa6r.js.map
