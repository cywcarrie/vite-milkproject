import{_ as f,l as m,u as b,r as _,o as h,c as P,a as c,b as i,w as d,e as p,i as v,S as l,d as g,n as k,F as A}from"./index-If2eL0tu.js";var x={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:$}=x,V={setup(){const s=m({}),a=b();function t(){const e=`${$}logout`;v.post(e,s.value).then(o=>{o.data.success?(l("success","登出成功"),a.push("/login")):l("error","登出失敗")}).catch(o=>{l("error",`${o.response.data.message}`)})}return{logout:t}}},E={class:"navbar navbar-expand-lg navbar-dark bg-secondary"},w={class:"container-fluid"},I=g('<a class="navbar-brand" href="#"><h1 class="logo text-primary fs-2 mb-0 fw-bolder me-3"><i class="bi bi-house-heart pe-2"></i>Fun<span class="text-primary">nie</span></h1></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>',2),T={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},N={class:"navbar-nav"};function R(s,a,t,e,o,n){const r=_("RouterLink");return h(),P("nav",E,[c("div",w,[I,c("div",T,[c("div",N,[i(r,{to:"/admin/products",class:"nav-link text-primary fw-bold admin-navbar-hover"},{default:d(()=>[p("產品")]),_:1}),i(r,{to:"/admin/orders",class:"nav-link text-primary fw-bold admin-navbar-hover"},{default:d(()=>[p("訂單")]),_:1}),i(r,{to:"/admin/coupons",class:"nav-link text-primary fw-bold admin-navbar-hover"},{default:d(()=>[p("優惠券")]),_:1}),c("a",{href:"#",onClick:a[0]||(a[0]=(...u)=>e.logout&&e.logout(...u)),class:"nav-link text-primary fw-bold admin-navbar-hover"},"登出")])])])])}const S=f(V,[["render",R]]);var y={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:D}=y,B={components:{Navbar:S},setup(){const s=m(null),a=b();function t(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");v.defaults.headers.common.Authorization=e;const o=`${D}api/user/check`;v.post(o,s.value).then(n=>{n.data.success||a.push("/login")}).catch(n=>{l("error",`${n.response.data.message}`)})}return k(()=>{t()}),{checkUser:t}}},M={class:"container-fluid mt-3 position-relative"};function L(s,a,t,e,o,n){const r=_("Navbar"),u=_("RouterView");return h(),P(A,null,[i(r),c("div",M,[i(u)])],64)}const C=f(B,[["render",L]]);export{C as default};
