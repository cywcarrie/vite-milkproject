import{_ as D,i as I,j as R,s as $,k as B,u as F,l as p,m as j,n as M,r as w,o as s,c,b as g,a as t,w as k,p as f,e as r,F as y,q as m,g as U,v as q,t as n,x as b,S as H}from"./index-Cn8zyKun.js";import{V as O}from"./VueLoading-DsjSPA5o.js";import{F as z}from"./FooterComponent-BCJGbDJc.js";var G={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:J,VITE_APP_PATH:K}=G,Q={components:{VueLoading:O,FooterComponent:z},setup(){const a=I("$axios"),i=R(),{isDone:x}=$(i),{addCart:o}=i,C=B(),P=F(),u=p([]),_=p(""),v=p([]),e=p(""),d=p(!1),N=p("");function T(){const l=`${J}api/${K}/products/all`;_.value="",d.value=!0,a.get(l).then(h=>{if(d.value=!1,h.data.success){u.value=h.data.products,A();const{productCategory:V}=C.params;V&&(e.value=V)}}).catch(h=>{H("error",`${h.response.data.message}`)})}function A(){const l=new Set;u.value.forEach(h=>{l.add(h.category)}),v.value=[...l]}function E(l){P.push(`/product/${l}`)}const L=j(()=>u.value.filter(l=>l.category.match(e.value))),S=j(()=>u.value.filter(l=>l.title.match(_.value)));return M(()=>{T()}),{products:u,search:_,categories:v,selectCategory:e,isLoading:d,id:N,getProduct:E,getProducts:T,filterProducts:L,searchProducts:S,isDone:x,addCart:o}}},W={class:"mb-5"},X={class:"container"},Y=t("div",{class:"d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid"},[t("h2",{class:"position-absolute text-center text-white fw-bolder banner-title"},"我們的商品")],-1),Z={"aria-label":"breadcrumb",class:"mt-3 mb-md-4 d-flex justify-content-start"},tt={class:"breadcrumb"},et={class:"breadcrumb-item"},ot=t("li",{class:"breadcrumb-item active","aria-current":"page"},"商品列表",-1),st={class:"row my-5"},ct={class:"col-lg-3 mb-4 mb-lg-0"},rt={class:"d-none d-md-block"},nt=t("h3",{class:"text-start pb-3 fw-bold fs-4 border-bottom border-primary border-2"}," 商品系列 ",-1),it={class:"list-group list-group-flush text-start"},at=t("i",{class:"bi bi-house-heart me-2"},null,-1),lt=["onClick"],dt=t("i",{class:"bi bi-house-heart me-2"},null,-1),ut={class:"dropdown d-block d-md-none w-100"},_t=t("button",{class:"btn btn-secondary dropdown-toggle w-100 fw-bold",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," 商品系列 ",-1),bt={class:"dropdown-menu w-100","aria-labelledby":"dropdownMenuButton1"},ht=t("i",{class:"bi bi-house-heart me-2"},null,-1),pt=["onClick"],ft=t("i",{class:"bi bi-house-heart me-2"},null,-1),gt={class:"input-group mt-4 mb-3"},yt={key:0,class:"col-lg-9"},vt={class:"mb-3"},mt={class:"fs-5"},wt={class:"fs-4 text-primary fw-bold"},kt=t("i",{class:"bi bi-x-circle pe-1"},null,-1),xt={class:"row row-cols-1 row-cols-md-2 row-cols-xl-3"},Ct={class:"card product-card w-100 h-100"},Pt=["onClick"],Tt=["src"],Vt=t("span",{class:"seemore-text d-flex justify-content-center align-items-center text-white fw-bold"},[t("i",{class:"bi bi-search pe-1"}),r(" 查看更多 ")],-1),jt={class:"card-body p-3"},Nt={class:"d-flex justify-content-start text-primary fw-bold"},At=t("i",{class:"bi bi-house-heart me-2"},null,-1),Et={class:"card-title fw-bolder text-primary mb-3"},Lt={class:"d-flex justify-content-between align-items-center mb-3"},St={key:0,class:"h5 text-secondary"},Dt={key:1,class:"h6 text-secondary"},It={key:2,class:"h5 text-primary fw-bold"},Rt={class:"card-footer border-0 bg-transparent pt-0 pb-3"},$t=["onClick"],Bt=t("i",{class:"bi bi-cart-fill"},null,-1),Ft={key:0,class:"col text-center mt-5"},Mt=t("h2",{class:"fw-bolder"},"查無商品",-1),Ut=t("i",{class:"bi bi-bag-x fs-1"},null,-1),qt=[Mt,Ut],Ht={key:1,class:"col-lg-9"},Ot={class:"row row-cols-1 row-cols-md-2 row-cols-xl-3"},zt={class:"card product-card w-100 h-100"},Gt=["onClick"],Jt=["src"],Kt=t("span",{class:"seemore-text d-flex justify-content-center align-items-center text-white fw-bold"},[t("i",{class:"bi bi-search pe-1"}),r(" 查看更多 ")],-1),Qt={class:"card-body p-3"},Wt={class:"d-flex justify-content-start text-primary fw-bold"},Xt=t("i",{class:"bi bi-house-heart me-2"},null,-1),Yt={class:"card-title fw-bolder text-primary mb-3"},Zt={class:"d-flex justify-content-between align-items-center mb-3"},te={key:0,class:"h5 text-secondary"},ee={key:1,class:"h6 text-secondary"},oe={key:2,class:"h5 text-primary fw-bold"},se={class:"card-footer border-0 bg-transparent pt-0 pb-3"},ce=["onClick"],re=t("i",{class:"bi bi-cart-fill"},null,-1);function ne(a,i,x,o,C,P){const u=w("VueLoading"),_=w("RouterLink"),v=w("FooterComponent");return s(),c(y,null,[g(u,{active:o.isLoading},null,8,["active"]),t("section",W,[t("div",X,[Y,t("nav",Z,[t("ol",tt,[t("li",et,[g(_,{to:"/",class:"text-dark hover-nav fw-bold"},{default:k(()=>[r("首頁")]),_:1})]),ot])]),t("div",st,[t("div",ct,[t("div",rt,[nt,t("div",it,[t("button",{type:"button",class:f(["list-group-item list-group-item-action fw-bold",{active:o.selectCategory===""}]),"aria-current":"true",onClick:i[0]||(i[0]=e=>o.selectCategory="")},[at,r(" 全部商品 ")],2),(s(!0),c(y,null,m(o.categories,e=>(s(),c("button",{key:e,type:"button",class:f(["list-group-item list-group-item-action fw-bold",{active:e===o.selectCategory}]),onClick:d=>o.selectCategory=e},[dt,r(" 只想喝"+n(e),1)],10,lt))),128))])]),t("div",ut,[_t,t("ul",bt,[t("li",null,[t("button",{onClick:i[1]||(i[1]=e=>o.selectCategory=""),class:f([{active:o.selectCategory===""},"dropdown-item fw-bold"]),type:"button"},[ht,r("全部商品 ")],2)]),t("li",null,[(s(!0),c(y,null,m(o.categories,e=>(s(),c("button",{key:e,class:f([{active:e===o.selectCategory},"dropdown-item fw-bold"]),onClick:d=>o.selectCategory=e,type:"button"},[ft,r("只想喝"+n(e),1)],10,pt))),128))])])]),t("div",gt,[U(t("input",{type:"text",class:"form-control border border-primary border-2 rounded-0",placeholder:"請輸入搜尋商品","onUpdate:modelValue":i[2]||(i[2]=e=>o.search=e)},null,512),[[q,o.search]])])]),o.search?(s(),c("div",yt,[t("div",vt,[t("div",mt,[r(" 以下為您顯示 "),t("span",wt,n(o.search),1),r(" 的結果 "),t("button",{type:"button",class:"btn btn-outline-danger btn-sm ms-2",onClick:i[3]||(i[3]=e=>o.getProducts())},[kt,r("取消搜尋 ")])])]),t("div",xt,[(s(!0),c(y,null,m(o.searchProducts,e=>(s(),c("div",{class:"col mb-4",key:e.id},[t("div",Ct,[g(_,{to:`/product/${e.id}`},{default:k(()=>[t("div",{class:"product-img cursor-pointer",onClick:d=>o.getProduct(e.id)},[t("img",{src:e.imageUrl,class:"card-img-top object-fit-cover",alt:"productImages"},null,8,Tt),Vt],8,Pt),t("div",jt,[t("div",Nt,[t("p",null,[At,r("只想喝"+n(e.category),1)])]),t("h5",Et,n(e.title),1),t("div",Lt,[e.price?b("",!0):(s(),c("div",St," NT$"+n(a.$filters.currency(e.origin_price)),1)),e.price?(s(),c("del",Dt,"NT$"+n(a.$filters.currency(e.origin_price)),1)):b("",!0),e.price?(s(),c("div",It," NT$"+n(a.$filters.currency(e.price)),1)):b("",!0)])])]),_:2},1032,["to"]),t("div",Rt,[t("button",{type:"button",class:f(["btn btn-outline-primary w-100",{disabled:o.isDone===e.id}]),onClick:d=>o.addCart(e.id,a.qty)},[Bt,r(" 加入購物車 ")],10,$t)])])]))),128))]),o.searchProducts.length===0?(s(),c("div",Ft,qt)):b("",!0)])):(s(),c("div",Ht,[t("div",Ot,[(s(!0),c(y,null,m(o.filterProducts,e=>(s(),c("div",{class:"col mb-4",key:e.id},[t("div",zt,[g(_,{to:`/product/${e.id}`},{default:k(()=>[t("div",{class:"product-img cursor-pointer",onClick:d=>o.getProduct(e.id)},[t("img",{src:e.imageUrl,class:"card-img-top object-fit-cover",alt:"productImages"},null,8,Jt),Kt],8,Gt),t("div",Qt,[t("div",Wt,[t("p",null,[Xt,r("只想喝"+n(e.category),1)])]),t("h5",Yt,n(e.title),1),t("div",Zt,[e.price?b("",!0):(s(),c("div",te," NT$"+n(a.$filters.currency(e.origin_price)),1)),e.price?(s(),c("del",ee,"NT$"+n(a.$filters.currency(e.origin_price)),1)):b("",!0),e.price?(s(),c("div",oe," NT$"+n(a.$filters.currency(e.price)),1)):b("",!0)])])]),_:2},1032,["to"]),t("div",se,[t("button",{type:"button",class:f(["btn btn-outline-primary w-100",{disabled:o.isDone===e.id}]),onClick:d=>o.addCart(e.id,a.qty)},[re,r(" 加入購物車 ")],10,ce)])])]))),128))])]))])])]),g(v)],64)}const de=D(Q,[["render",ne]]);export{de as default};
