import{d as l,e as a,c as e,r as u}from"./vendor.66a10b4c.js";import{u as t,f as o,h as s}from"./index.56f1fe70.js";var d=l({setup(){const[l,{toggle:d}]=t(!1),[r,{toggle:n}]=t(!1),i=a(!1);o((l=>{i.value="xs"===l}));const c=()=>{i.value?n():d()};return()=>e(u("a-layout"),{id:"layout",class:i.value?"mobile":"desk"},{default:()=>[i.value?e(u("a-drawer"),{class:"layout-drawer",placement:"left",closable:!1,visible:r.value,"onUpdate:visible":l=>r.value=l},{default:()=>[e(u("layout-asider"),{collapsed:!1},null)]}):e(u("a-layout-sider"),{class:"layout-asider",collapsed:l.value,"onUpdate:collapsed":a=>l.value=a,breakpoint:"md",width:256,trigger:null,collapsible:!0},{default:()=>[e(u("layout-asider"),{collapsed:l.value},null)]}),e(u("a-layout"),null,{default:()=>[e(u("layout-header"),{collapsed:l.value,onToggle:c},null),e(u("visited-tags"),null,null),e(s,null,{default:()=>[e(u("a-layout-content"),{class:"flex-1"},{default:()=>[e(u("router-view"),null,null)]})]})]})]})}});export default d;