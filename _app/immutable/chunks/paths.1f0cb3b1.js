import{n as c,s as g}from"./scheduler.7a274a43.js";const e=[];function d(i,l=c){let n;const o=new Set;function r(t){if(g(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,f)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_ibj9fg)==null?void 0:u.base)??"";var a;const q=((a=globalThis.__sveltekit_ibj9fg)==null?void 0:a.assets)??h;export{q as a,h as b,d as w};
