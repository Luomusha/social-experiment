var m=Object.defineProperty;var d=(o,e,r)=>e in o?m(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var i=(o,e,r)=>(d(o,typeof e!="symbol"?e+"":e,r),r);import{m as f,a as h,r as l,o as u,j as p,b as a,E as g,B as y,R as v,c as x,d as b,e as E}from"./vendor.bd6a5bd3.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};C();const A="_Home_b9lnn_1";var M={Home:A};const O=o=>Math.floor(Math.random()*o);class R{constructor(){i(this,"people",[]);i(this,"target",[{target:!0,money:50,name:"\u5BCC\u4E8C\u4EE3"}]);i(this,"count",20);i(this,"exchange",()=>{const e=this.people.slice().map(()=>O(this.people.length));this.people=this.people.map((r,s)=>({money:r.money-1+e.filter(t=>s===t).length,name:r.name,target:r.target}))});const e=[];for(let r=0;r<this.count;r+=1)e.push({money:30,name:f.exports.Random.cname(),target:!1});this.people=[...this.target,...e],h(this)}}var B=new R;const D={averageMoney:B},S=l.exports.createContext(D);function H(){const{averageMoney:o}=l.exports.useContext(S),e=t=>({title:{text:"\u8D22\u5BCC\u7EDF\u8BA1\u56FE"},tooltip:{},xAxis:{data:o.people.map(n=>n.name),axisLabel:{fontSize:10},inverse:!0},yAxis:{},series:[{realtimeSort:!0,label:{show:!0,position:"top",valueAnimation:!0},name:"\u8D22\u5BCC",type:"bar",data:o.people.map(n=>({value:n.money,itemStyle:{color:n.target?"#00ffff":"#a90000"}}))}],animationDuration:100,animationDurationUpdate:100,animationEasing:"linear",animationEasingUpdate:"linear"}),[r,s]=l.exports.useState(e(o.people));return l.exports.useEffect(()=>{s(e(o.people))},[o.people]),l.exports.useEffect(()=>{setInterval(()=>{o.exchange()},1e3)},[]),p("div",{className:M.Home,children:[a(g,{option:r,notMerge:!0,lazyUpdate:!0,theme:"theme_name"}),a("button",{onClick:o.exchange,children:"step"})]})}var L=u(H);function $(){return p(y,{children:["123",a(v,{children:a(x,{index:!0,element:a(L,{})})})]})}var j=u($);b.render(a(E.StrictMode,{children:a(j,{})}),document.getElementById("root"));