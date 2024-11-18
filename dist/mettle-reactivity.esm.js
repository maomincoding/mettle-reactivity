/*!
 * Mettle-reactivity v0.1.1
 * (c) 2024-2024 maomincoding
 * Released under the MIT License.
 */
import{effect as t}from"@vue/reactivity";export*from"@vue/reactivity";function e(t){const e=Object.create(null),n=t.split(",");for(let t=0;t<n.length;t++)e[n[t]]=!0;return function(t){return e[t]}}const n=e("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),o=e("svg,animate,circle,clippath,cursor,image,defs,desc,ellipse,filter,font-faceforeignobject,g,glyph,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feFlood,feGaussianBlur,feImage,feMerge,feMorphology,feOffset,feSpecularLighting,feTile,feTurbulence,feDistantLight,fePointLight,feSpotLight,linearGradient,stop,radialGradient,animateTransform,animateMotion");function i(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)}const r={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function s(t){return Object.prototype.toString.call(t).match(/\[object (.+?)\]/)[1].toLowerCase()}const l=["object","array","function","regexp","date","math"];function c(t){return l.includes(s(t))}function a(t){return null==t}function u(t,e){return t.tag===e.tag&&t.key===e.key}function f(t,e){return t.hasOwnProperty(e)}function h(t){if(t)return f(t,"tag")&&f(t,"props")&&f(t,"children")&&f(t,"key")&&f(t,"el")}function p(t){return Array.isArray(t)?function(t){return t.every(h)}(t):h(t)}function m(t){console.warn(`[mettle-reactivity warn]: ${t}`)}function d(t,e){Object.assign(t.style,e)}function g(t,e,n){const o=e.slice(2).toLowerCase();"function"==typeof n&&t.addEventListener(o,n)}function b(t,e,n){const o=e.slice(2).toLowerCase();"function"==typeof n&&t.removeEventListener(o,n)}function y(t,e,n){if(i(e)){const o="http://www.w3.org/1999/xlink";t.setAttributeNS(o,e,n.toString())}else"boolean"!=typeof n?t.setAttribute(e,n.toString()):n?t.setAttribute(e,""):t.removeAttribute(e)}function w(t,e){var n;i(e)?t.removeAttributeNS("http://www.w3.org/1999/xlink",i(n=e)?n.slice(6,n.length):""):t.removeAttribute(e)}function v(t){switch(!0){case n(t):return document.createElement(t);case o(t):return e=function(t){return o(t)?"svg":"math"===t?"math":void 0}(t),i=t,document.createElementNS(r[e],i);case"fragment"===t||"component"===t:return document.createDocumentFragment();case"comment"===t||"null"===t:return document.createComment(t);default:return document.createElement(t)}var e,i}const k="0.1.1",M=["$ref","$is"],j=new WeakMap;let C=new WeakMap;function S(t,e){let n="";if(Array.isArray(t))if(t.length>1){let e=[];for(let n=0;n<t.length;n++){const o=t[n];e.push(c(o)?JSON.stringify(o):o)}n=e.join("")}else n=0===t.length?"":JSON.stringify(t).replace(/,/g,"");else n=c(t)?JSON.stringify(t):t;e.textContent=n}function A(t,e,n){const{tag:o,props:i,children:r}=t;if(!a(o)){const l=v(o);if(t.el=l,!a(i)){const t=Object.keys(i);for(let e=0;e<t.length;e++){const n=t[e],o=i[n],r=s(o);if(n.startsWith("on")&&g(l,n,o),"function"===r||"key"===n||M.includes(n)||y(l,n,o),"style"===n&&"object"===r&&d(l,o),n===M[1]&&"object"===r){const t=o.template();A(t,l),C.set(o,t)}n===M[0]&&"object"===r&&j.set(o,l)}}if("component"!==o&&!a(r))if(p(r)){const t=s(r);if("array"===t)for(let t=0;t<r.length;t++){const e=r[t];h(e)&&A(e,l)}else"object"===t&&A(r,l)}else l&&S(r,l);if(n)e.insertBefore(l,n);else{if(!e)return l;e.appendChild(l)}}}function x(t,e){if(function(t,e){return"component"!==e.tag&&"component"!==t.tag}(t,e))if(u(t,e)){const n=e.el=t.el,o=t.props||{},i=e.props||{},r=Object.keys(i),l=Object.keys(o);for(let t=0;t<r.length;t++){const e=r[t],l=i[e],c=o[e],u=s(l);l!==c&&(a(l)?w(n,e):("function"===u||"key"===e||M.includes(e)||y(n,e,l),"style"===e&&"object"===u&&d(n,l),"function"===u&&l.toString()!==c.toString()&&(b(n,e,c),g(n,e,l))))}for(let t=0;t<l.length;t++){const e=l[t];r.includes(e)||w(n,e)}const c=t.children,f=e.children;"array"===s(c)&&"array"===s(f)?function(t,e,n){const o=e.length;let i=0,r=t.length-1,s=o-1;for(;i<=r&&i<=s&&u(t[i],e[i]);)x(t[i],e[i]),i++;for(;i<=r&&i<=s&&u(t[r],e[s]);)x(t[r],e[s]),r--,s--;if(i>r){if(i<=s){const t=s+1,r=t<o?e[t].el:null;for(;i<=s;)n.insertBefore(A(e[i]),r),i++}}else if(i>s)for(;i<=r;)n.removeChild(t[i].el),i++;else{const l=i,c=i,a=new Map;for(i=c;i<=s;i++){const t=e[i];null!=t.key&&a.set(t.key,i)}let f,h=0;const p=s-c+1;let m=!1,d=0;const g=new Array(p);for(i=0;i<p;i++)g[i]=0;for(let o=l;o<=r;o++){if(h>=p){n.removeChild(t[o].el);continue}let i;if(null!==t[o].key)i=a.get(t[o].key);else for(f=c;f<=s;f++)if(0===g[f-c]&&u(t[o],e[f])){i=f;break}void 0===i?n.removeChild(t[o].el):(g[i-c]=o+1,i>d?d=i:m=!0,x(t[o],e[i]),h++)}const b=m?function(t){const e=t.slice(),n=[0];let o,i,r,s,l;const c=t.length;for(o=0;o<c;o++){const c=t[o];if(0!==c){if(i=n[n.length-1],t[i]<c){e[o]=i,n.push(o);continue}for(r=0,s=n.length-1;r<s;)l=(r+s)/2|0,t[n[l]]<c?r=l+1:s=l;c<t[n[r]]&&(r>0&&(e[o]=n[r-1]),n[r]=o)}}for(r=n.length,s=n[r-1];r-- >0;)n[r]=s,s=e[s];return n}(g):[];f=b.length-1;for(let t=p-1;t>=0;t--){const i=t+c,r=i+1<o?e[i+1].el:null;0===g[t]?n.insertBefore(A(e[i]),r):m&&(f<0||t!==b[f]?n.insertBefore(e[i].el,r):f--)}}}(c,f,n):h(c)&&h(f)?x(c,f):p(c)||p(f)||c===f||S(f,n)}else{const n=t.el.parentNode,o=t.el.nextSibling;n.removeChild(t.el),A(e,n,o)}}let L=[],O=0,E=0;function T(t=null){null!==t&&("function"==typeof t?L.push(t):console.warn("The parameter of onMounted is not a function!"))}function N(){if(L.length>0)for(let t=0,e=L.length;t<e;t++)L[t]&&L[t]();E=O,O=0,L=[]}let B=[];function W(t=null){null!==t&&("function"==typeof t?(O+=1,B.push(t)):console.warn("The parameter of onUnmounted is not a function!"))}let D=Object.create(null);function $(t){!function(){if(B.length>0){for(let t=0;t<E;t++)B[t]&&B[t]();B.splice(0,E)}E=O}(),D.innerHTML="",C=null,C=new WeakMap;const e=t.template();A(e,D),C.set(t,e),N()}function q(e,n){"function"==typeof e&&(n=e,e=Object.create(null));class o{template;isMounted;isMountedComponent;static instance;constructor(){const o={content:this},i=n.call(this,o);if(this.template=i,this.isMounted=!1,this.isMountedComponent=!1,e.mount){const n=function(t){if("string"==typeof t){const e=document.querySelector(t);if(!e){let e=null;return t.startsWith("#")?(e=document.createElement("div"),e.setAttribute("id",t.substring(1,t.length))):t.startsWith(".")?(e=document.createElement("div"),e.setAttribute("class",t.substring(1,t.length))):m(`Failed to mount app: mount target selector "${t}" returned null.`),document.body.insertAdjacentElement("afterbegin",e),e}return e}return t instanceof HTMLElement?t:window.ShadowRoot&&t instanceof window.ShadowRoot&&"closed"===t.mode?(m('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs.'),null):null}(e.mount),o=i();t((()=>{this.isMounted||(A(o,n),D=n,C.set(this,o),this.isMounted=!0,N())}))}else t((()=>{const t=this.template();if(this.isMountedComponent){x(C.get(this),t),C.set(this,t)}else C.set(this,t),this.isMountedComponent=!0}))}static getInstance(){return this.instance||(this.instance=new o),this.instance}}return o.getInstance()}export{q as defineComponent,j as domInfo,T as onMounted,W as onUnmounted,$ as resetView,k as version};
