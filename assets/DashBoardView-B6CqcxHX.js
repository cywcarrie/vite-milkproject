import{_,R as f,r as u,o as d,c as p,a as t,b as n,w as i,e as l,E as m,S as b,F as P}from"./index-CLJaB914.js";var g={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:$}=g,k={components:{RouterLink:f},methods:{logout(){const a=`${$}logout`;this.$http.post(a,this.user).then(e=>{e.data.success&&this.$router.push("/login")})}}},A={class:"navbar navbar-expand-lg navbar-dark bg-secondary"},V={class:"container-fluid"},E=t("a",{class:"navbar-brand",href:"#"},"後臺管理",-1),R=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),I={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},T={class:"navbar-nav"};function x(a,e,o,v,h,r){const s=u("RouterLink");return d(),p("nav",A,[t("div",V,[E,R,t("div",I,[t("div",T,[n(s,{to:"/admin/products",class:"nav-link"},{default:i(()=>[l("產品")]),_:1}),n(s,{to:"/admin/orders",class:"nav-link"},{default:i(()=>[l("訂單")]),_:1}),n(s,{to:"/admin/coupons",class:"nav-link"},{default:i(()=>[l("優惠券")]),_:1}),t("button",{type:"button",onClick:e[0]||(e[0]=(...c)=>r.logout&&r.logout(...c)),class:"nav-link"},"登出")])])])])}const w=_(k,[["render",x]]);var N={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:B}=N,S={components:{RouterView:m,Navbar:w},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const e=`${B}api/user/check`;this.$http.post(e,this.user).then(o=>{o.data.success||this.$router.push("/login")}).catch(o=>{b.fire({position:"top-end",icon:"error",title:`${o.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}},D={class:"container-fluid mt-3 position-relative"};function L(a,e,o,v,h,r){const s=u("Navbar"),c=u("RouterView");return d(),p(P,null,[n(s),t("div",D,[n(c)])],64)}const C=_(S,[["render",L]]);export{C as default};
