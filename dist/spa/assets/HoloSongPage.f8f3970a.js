import{r as g,_ as H,d as j,k as _,a as G,o as t,c as f,w as r,e as n,aa as i,b as u,ac as J,ad as m,g as S,ae as D,af as E,ag as Q,Q as U,ab as F}from"./index.14a7c722.js";import{Q as A}from"./QRadio.d2ea2ae3.js";import{Q as N}from"./QPagination.51a6a30d.js";import{Q as P}from"./QCardSection.d3461790.js";import{Q as I}from"./QCard.856b109b.js";import{Q as $}from"./QSelect.c55664e6.js";import{u as K,Q as W}from"./use-quasar.7a6bd282.js";import{c as X,a as O,Q as z,b as T}from"./QTable.8542a644.js";import{Q as R}from"./QDialog.946db96e.js";import{Q as Z}from"./QPage.82e76fcb.js";import{a as Y}from"./HoloSongApi.0cd4f589.js";import{Y as x}from"./vue3-youtube.umd.1f7ea524.js";import"./use-dark.7ce8ffd6.js";import"./use-checkbox.812d2cd3.js";import"./format.2a3572e1.js";import"./QField.3dd07fc9.js";import"./BaseApi.ab9ec937.js";import"./focus-manager.02955f48.js";import"./QChip.15935488.js";import"./QItem.0cb08ef4.js";import"./QItemLabel.d7165eea.js";import"./position-engine.ef89f240.js";import"./use-tick.7b8fea28.js";import"./use-prevent-scroll.49273e16.js";import"./QSeparator.2e92d9dc.js";import"./QList.0b3bac39.js";import"./QCheckbox.9468544f.js";function ee(){const{getVideoId:e,getImageLink:l,getAlterImageLink:M,getDisplayName:L}=oe(),d=K(),h=[{name:"member",label:"\u30E1\u30F3\u30D0\u30FC",field:"member",sortable:!0},{name:"songName",label:"\u66F2\u540D",field:"songName",sortable:!0},{name:"date",label:"\u6295\u7A3F\u65E5",field:"date",sortable:!0},{name:"detail",label:"\u8A73\u7D30",field:"detail",sortable:!0}],v=g([]),o=g("gallery"),a=g([]),c=g({selectLink:"",pageNo:1,totalPages:1,pageSize:20,records:[]}),C=g([]),k=async function(){C.value.splice(0),await Y.holoList().then(p=>{p&&(console.log("holo member",p),p.forEach(s=>C.value.push(s)),console.log("max length",Math.max(...C.value.map(s=>s.length))))}).catch(p=>{console.log(p),d.notify({color:"red",position:"top",message:"\u30C7\u30FC\u30BF\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F"})})},y=g([]),b=g(!1),B=g(!1),w=async function(){b.value=!0,k(),a.value.splice(0),await Y.search().then(p=>{p&&(p.records.forEach(s=>{if(s.link.includes("you")&&!s.detail.includes("\u975E\u516C\u958B")){const q={date:s.date,member:s.member,link:s.link.replace("youtu.be/","www.youtube.com/watch?v="),songName:s.songName,detail:s.detail,imageLink:l(s.link),alterLink:M(s.link),videoId:e(s.link)};a.value.push(q)}}),a.value.reverse(),console.log("add list",a.value.length),c.value.totalPages=Math.ceil(a.value.length/c.value.pageSize),V(),v.value.splice(0),a.value.forEach(s=>{v.value.push({member:s.member,displayMember:L(s.member),songName:s.songName,date:s.date,detail:s.detail,link:s.link})}),y.value.splice(0),y.value=[...new Set(a.value.map(s=>s.songName.trim()))],y.value.sort(),console.log("songs",y.value.length))}).catch(p=>{console.log(p),d.notify({color:"red",position:"top",message:"\u30C7\u30FC\u30BF\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F"})}),b.value=!1},V=function(){c.value.records.splice(0);const p=Math.max(c.value.pageNo-1,-1)*c.value.pageSize,s=Math.min(p+c.value.pageSize-1,a.value.length);a.value.slice(p,s).forEach(q=>{c.value.records.push(q)}),console.log("data",c.value)};return{quasar:d,records:a,holoMembers:C,pageState:c,isLoading:b,searchOptionShow:B,rows:v,columns:h,displayMode:o,songList:y,select:w,selectPage:V,getMembers:k}}function oe(){const e=function(d){const h=d.split("v=")[1];return h!=null?h:d.split("/")[d.split("/").length-1]};return{getVideoId:e,getImageLink:function(d){return"https://img.youtube.com/vi/query/maxresdefault.jpg".replace("query",e(d))},getAlterImageLink:function(d){return"https://img.youtube.com/vi/query/default.jpg".replace("query",e(d))},getDisplayName:function(d){return d.length>19?d.substring(0,19)+"...":d}}}const le=j({name:"holosong-page",components:{YouTube:x},setup(){const{records:e,pageState:l,isLoading:M,searchOptionShow:L,rows:d,columns:h,displayMode:v,holoMembers:o,songList:a,select:c,selectPage:C}=ee();c();const k=g(""),y=g("");_(k,()=>{k.value!=""&&(y.value=k.value,k.value="")});const b=g([]);a.value.forEach(V=>b.value.push(V));const B=(V,p)=>{p(()=>{const s=V.toLowerCase();b.value=a.value.filter(q=>q.toLowerCase().indexOf(s)>-1)})},w=g("");return _(w,()=>{w.value!=""&&(y.value=w.value,w.value="")}),{filter:y,selectedMember:k,records:e,pageState:l,isLoading:M,searchOptionShow:L,rows:d,columns:h,displayMode:v,holoMembers:o,songList:a,selectPage:C,songOptions:b,filterFn:B,songInput:w,songModalShow:g(!1)}}}),ae=n("div",{class:"text-h5 q-pb-md"},"\u30DB\u30ED\u30E9\u30A4\u30D6\u6B4C\u307F\u305F\u307E\u3068\u3081",-1),te={key:0,id:"holo-page-loading",class:"row q-gutter-md"},se=n("div",{class:"text-subtitle1 text-primary"},"\u691C\u7D22\u4E2D...",-1),ne={key:1,class:"q-pa-md row q-gutter-md"},ue={key:0,class:"row q-gutter-md q-pb-md"},ie={key:2,id:"holo-song-cards",style:{"min-height":"780px"}},de={class:"row q-gutter-md"},re=["href","onClick"],pe=["src"],me={key:3,class:"row q-gutter-md q-pt-md"},ge={class:"q-pa-md"},ce={class:"holosong-container"},he={class:"holosong-left-content"},ve={key:0},ye={key:1},fe={key:0,class:"holosong-video-container"},ke=n("div",{class:"holosong-video-placeholder"},[n("i",{class:"holosong-play-icon"},"\u25B6\uFE0F"),n("div",{class:"text-white"},"\u52D5\u753B\u306F\u3053\u3053\u3067\u518D\u751F\u3055\u308C\u308B\u3088")],-1),be=[ke],we={class:"holosong-right-content"},Se={class:"q-pr-md no-shadow"},Ce=n("div",{class:"q-pl-md"},null,-1),Ve={key:0,style:{width:"200px"}},Fe={key:1,style:{width:"200px"}},Me={key:2,style:{width:"100px"}},Le={key:3,style:{width:"100px"}},qe={class:"no-shadow"},De={style:{"white-space":"normal","text-align":"left"}},Ee=n("div",{class:"text-h5"},"\u30DA\u30FC\u30B8\u9078\u629E",-1),Qe=n("hr",null,null,-1),Be=n("div",{class:"text-h6"},"\u66F2\u4E00\u89A7",-1),Ne={class:"q-pa-md"},Pe=["onClick"],Ie={class:"holo-song-songli"};function _e(e,l,M,L,d,h){const v=G("YouTube");return t(),f(Z,{class:""},{default:r(()=>[n("div",null,[ae,e.isLoading?(t(),i("div",te,[u(J,{color:"primary",size:"3em"}),se])):m("",!0),e.pageState.selectLink!=""?(t(),i("div",ne,[!e.isLoading&&e.displayMode=="gallery"?(t(),f(v,{key:0,src:e.pageState.selectLink,onReady:o=>!0,ref:"youtube",vars:{autoplay:1,rel:0}},null,8,["src"])):m("",!0)])):m("",!0),n("div",null,[e.pageState.totalPages!=1?(t(),i("div",ue,[n("div",null,[u(A,{modelValue:e.displayMode,"onUpdate:modelValue":l[0]||(l[0]=o=>e.displayMode=o),val:"gallery",label:"\u30B5\u30E0\u30CD\u30A4\u30EB",dense:"",class:"q-pr-xs"},null,8,["modelValue"]),u(A,{modelValue:e.displayMode,"onUpdate:modelValue":l[1]||(l[1]=o=>e.displayMode=o),val:"table",label:"\u30C6\u30FC\u30D6\u30EB",dense:""},null,8,["modelValue"])]),!e.isLoading&&e.displayMode=="gallery"?(t(),f(N,{key:0,modelValue:e.pageState.pageNo,"onUpdate:modelValue":l[2]||(l[2]=o=>e.pageState.pageNo=o),max:e.pageState.totalPages,"direction-links":"","max-pages":10,onClick:S(e.selectPage,["prevent"]),class:"q-pl-md",outlined:""},null,8,["modelValue","max","onClick"])):m("",!0),!e.isLoading&&e.displayMode=="gallery"?(t(),i("a",{key:1,href:"#",onClick:l[3]||(l[3]=S(o=>e.searchOptionShow=!0,["prevent","stop"]))},[u(D,{name:"view_list",color:"primary",size:"md"})])):m("",!0)])):m("",!0)]),e.displayMode=="gallery"?(t(),i("div",ie,[n("div",de,[(t(!0),i(E,null,Q(e.pageState.records,o=>(t(),i("div",{key:o.link,class:"q-pa-sm"},[u(I,{style:{width:"100%","max-width":"250px"}},{default:r(()=>[u(P,null,{default:r(()=>[n("a",{href:o.link,onClick:S(a=>e.pageState.selectLink=o.link,["prevent"])},[n("img",{src:o.imageLink,style:{width:"100%","max-width":"250px"}},null,8,pe)],8,re)]),_:2},1024)]),_:2},1024)]))),128))])])):m("",!0),e.pageState.totalPages!=1&&!e.isLoading&&e.displayMode=="gallery"?(t(),i("div",me,[u(N,{modelValue:e.pageState.pageNo,"onUpdate:modelValue":l[4]||(l[4]=o=>e.pageState.pageNo=o),max:e.pageState.totalPages,"direction-links":"","max-pages":10,onClick:S(e.selectPage,["prevent"]),class:"q-pb-md",outlined:""},null,8,["modelValue","max","onClick"]),n("a",{href:"#",onClick:l[5]||(l[5]=S(o=>e.searchOptionShow=!0,["prevent","stop"]))},[u(D,{name:"view_list",color:"primary",size:"md"})])])):m("",!0)]),n("div",ge,[n("div",ce,[n("div",he,[e.pageState.selectLink!=""?(t(),i("div",ve,[!e.isLoading&&e.displayMode=="table"?(t(),f(v,{key:0,src:e.pageState.selectLink,onReady:o=>!0,ref:"youtube",vars:{autoplay:1,rel:0}},null,8,["src"])):m("",!0)])):(t(),i("div",ye,[e.displayMode=="table"?(t(),i("div",fe,be)):m("",!0)]))]),n("div",we,[!e.isLoading&&e.displayMode=="table"?(t(),f(X,{key:0,rows:e.rows,columns:e.columns,"row-key":"link",filter:e.filter,separator:"cell","rows-per-page-label":"\u8868\u793A\u884C\u6570","no-results-label":"\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F...",pagination:{rowsPerPage:0},"rows-per-page-options":[0],class:"holosong-list-table"},{"top-right":r(()=>[n("div",Se,[u(U,{icon:"queue_music",dense:"",onClick:l[6]||(l[6]=o=>e.songModalShow=!0),round:""})]),u($,{modelValue:e.songInput,"onUpdate:modelValue":l[7]||(l[7]=o=>e.songInput=o),style:{width:"200px"},dense:"","use-input":"","stack-label":"",label:"\u66F2\u540D",class:"q-pr-md",options:e.songOptions,onFilter:e.filterFn},null,8,["modelValue","options","onFilter"]),u($,{modelValue:e.selectedMember,"onUpdate:modelValue":l[8]||(l[8]=o=>e.selectedMember=o),style:{width:"200px"},dense:"","stack-label":"",label:"\u30E1\u30F3\u30D0\u30FC",class:"q-pr-md",options:e.holoMembers},null,8,["modelValue","options"]),Ce,u(W,{dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":l[9]||(l[9]=o=>e.filter=o),placeholder:"\u691C\u7D22"},{append:r(()=>[e.filter.length==0?(t(),f(D,{key:0,name:"search"})):(t(),f(D,{key:1,name:"search",color:"primary"}))]),_:1},8,["modelValue"])]),header:r(o=>[u(z,{props:o},{default:r(()=>[u(O,{style:{width:"50px"}}),(t(!0),i(E,null,Q(o.cols,a=>(t(),f(O,{key:a.name,props:o},{default:r(()=>[a.label=="\u30E1\u30F3\u30D0\u30FC"?(t(),i("div",Ve,F(a.label),1)):m("",!0),a.label=="\u66F2\u540D"?(t(),i("div",Fe,F(a.label),1)):m("",!0),a.label=="\u6295\u7A3F\u65E5"?(t(),i("div",Me,F(a.label),1)):m("",!0),a.label=="\u8A73\u7D30"?(t(),i("div",Le,F(a.label),1)):m("",!0)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:r(o=>[u(z,{props:o},{default:r(()=>[u(T,{style:{width:"50px"}},{default:r(()=>[n("div",qe,[u(U,{size:"md",onClick:a=>e.pageState.selectLink=o.row.link,icon:"play_arrow","text-color":"primary",outline:""},null,8,["onClick"])])]),_:2},1024),(t(!0),i(E,null,Q(o.cols,a=>(t(),f(T,{key:a.name,props:o},{default:r(()=>[n("div",De,F(a.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter"])):m("",!0)])])]),u(R,{modelValue:e.searchOptionShow,"onUpdate:modelValue":l[11]||(l[11]=o=>e.searchOptionShow=o)},{default:r(()=>[u(I,{style:{width:"400px"}},{default:r(()=>[u(P,null,{default:r(()=>[Ee,Qe,u(N,{modelValue:e.pageState.pageNo,"onUpdate:modelValue":l[10]||(l[10]=o=>e.pageState.pageNo=o),max:e.pageState.totalPages,onClick:S(e.selectPage,["prevent"]),class:"q-pb-md",outlined:"",style:{width:"300px"}},null,8,["modelValue","max","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),u(R,{modelValue:e.songModalShow,"onUpdate:modelValue":l[12]||(l[12]=o=>e.songModalShow=o)},{default:r(()=>[u(I,{style:{width:"400px"}},{default:r(()=>[u(P,null,{default:r(()=>[Be,n("div",Ne,[(t(!0),i(E,null,Q(e.songList,o=>(t(),i("ul",{key:o},[n("a",{href:"#",class:"holo-song-songitem text-subtitle1",onClick:S(a=>{e.filter=o,e.songModalShow=!1},["prevent"])},[n("li",Ie,F(o),1)],8,Pe)]))),128))])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var po=H(le,[["render",_e]]);export{po as default};
