import{_ as m,d as Q,r as w,u as b,a as g,o as l,c as s,w as a,b as e,Q as k,e as v,g as C,f as u,aa as c,ag as _,af as d,h as L,ae as y,ab as D,R as V,ad as $}from"./index.14a7c722.js";import{Q as h,a as B,b as S,c as T,d as N,e as O}from"./QLayout.3bad7c66.js";import{Q as M}from"./QItemLabel.d7165eea.js";import{a as R,Q as p}from"./QItem.0cb08ef4.js";import{Q as q}from"./QSeparator.2e92d9dc.js";import{Q as H}from"./QList.0b3bac39.js";import"./use-prevent-scroll.49273e16.js";import"./use-dark.7ce8ffd6.js";import"./format.2a3572e1.js";const P=Q({name:"MainLayout",setup(){const r=w(!1),t=[{label:"Twitter",icon:"image",iconColor:"primary",link:"/scraper/twitter"},{label:"Hololewd",icon:"image",iconColor:"red-6",link:"/scraper/hololewd"}],n=b();return{leftDrawerOpen:r,menuList:t,toggleLeftDrawer(){r.value=!r.value},router:n}}});function x(r,t,n,E,F,U){const f=g("router-view");return l(),s(h,null,{default:a(()=>[e(T,{elevated:"",class:"bg-secondary"},{default:a(()=>[e(B,null,{default:a(()=>[e(k,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),e(S,null,{default:a(()=>[v("a",{onClick:t[0]||(t[0]=C(o=>r.router.replace("/scraper/"),["prevent"])),class:"text-white"},"Scraper")]),_:1})]),_:1})]),_:1}),e(N,{modelValue:r.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=o=>r.leftDrawerOpen=o),class:"q-pa-md bg-grey-4",bordered:""},{default:a(()=>[e(M,{header:""},{default:a(()=>[u(" Pages")]),_:1}),e(H,null,{default:a(()=>[(l(!0),c(d,null,_(r.menuList,(o,i)=>(l(),c(d,{key:i},[L((l(),s(R,{clickable:"",active:o.label==="Outbox",onClick:j=>r.router.replace(o.link)},{default:a(()=>[e(p,{avatar:""},{default:a(()=>[e(y,{name:o.icon,color:o.iconColor},null,8,["name","color"])]),_:2},1024),e(p,{class:"text-h6"},{default:a(()=>[u(D(o.label),1)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[V]]),o.separator?(l(),s(q,{key:"sep"+i})):$("",!0)],64))),128))]),_:1})]),_:1},8,["modelValue"]),e(O,null,{default:a(()=>[e(f,{class:"q-pa-md"})]),_:1})]),_:1})}var I=m(P,[["render",x]]);export{I as default};
