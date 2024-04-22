import{_ as w,R as y,S as h,r as l,o,c as r,b as d,a as t,n as p,k as i,g,F as u,j as v,t as n,w as k,e as b}from"./index-BqodoQ1R.js";import{F as C}from"./FooterComponent-BC0nTRLy.js";const L={components:{RouterLink:y,FooterComponent:C},data(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder(){const a=`https://vue3-course-api.hexschool.io/api/funniecafeweb/order/${this.orderId}`;this.$http.get(a).then(s=>{s.data.success&&(this.order=s.data.order)}).catch(s=>{h.fire({position:"top",icon:"error",title:`${s.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})},payOrder(){const a=`https://vue3-course-api.hexschool.io/api/funniecafeweb/pay/${this.orderId}`;this.$http.post(a).then(s=>{s.data.success&&this.getOrder()}).catch(s=>{h.fire({position:"top",icon:"error",title:`${s.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},B={class:"mb-5"},O={class:"container"},j=t("div",{class:"d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"},[t("h2",{class:"position-absolute text-center text-white fw-bolder banner-title"},"結帳流程")],-1),F={class:"d-flex justify-content-center align-items-center mb-5 mt-3"},V=t("h5",{class:"fw-bold mb-0 text-secondary pay-header"},"填寫資料",-1),I=t("i",{class:"bi bi-caret-right-fill fs-5 mx-2 text-secondary"},null,-1),N=t("i",{class:"bi bi-caret-right-fill fs-5 mx-2 text-secondary"},null,-1),R={class:"row justify-content-center align-items-center"},S={class:"col-md-10"},E={key:0,class:"d-flex justify-content-center align-items-center"},P=t("i",{class:"bi bi-check-circle-fill fs-2 pe-2 text-success"},null,-1),q=t("h2",{class:"fw-bold mb-0 text-success"},"付款成功 !",-1),z=[P,q],D={key:1,class:"fw-bold mt-4 mb-5 text-center"},M={class:"my-5 row justify-content-center"},T=t("h3",{class:"text-center fw-bold mb-4"},"訂單明細",-1),U={class:"table align-middle table-light table-borderless mb-4"},A=t("thead",{class:"text-center bg-light"},[t("th",{class:"text-nowrap"},"商品名稱"),t("th",{class:"text-center text-nowrap"},"數量"),t("th",{class:"text-nowrap"},"價格")],-1),G={class:"text-center text-primary fw-bold"},H={class:"text-center text-nowrap"},J={class:"text-center text-nowrap"},K=t("td",{colspan:"2",class:"text-end text-nowrap"},"總計",-1),Q={class:"fs-5 text-primary fw-bold text-nowrap"},W=t("h3",{class:"text-center fw-bold mb-4"},"訂購人資訊",-1),X={class:"table table-light table-borderless mb-4"},Y={class:"table-nowrap"},Z=t("th",{width:"100",class:"text-nowrap"},"Email",-1),$={class:"text-nowrap"},tt={class:"table-nowrap"},et=t("th",{class:"text-nowrap"},"姓名",-1),st={class:"text-nowrap"},ot={class:"table-nowrap"},rt=t("th",{class:"text-nowrap"},"電話",-1),nt={class:"text-nowrap"},ct={class:"table-nowrap"},at=t("th",null,"地址",-1),it={class:"text-nowrap"},lt={class:"table-nowrap"},dt=t("th",null,"付款狀態",-1),_t={key:0,class:"text-nowrap text-danger fw-bold"},ht={key:1,class:"text-success fw-bold text-nowrap"},pt={key:0,class:"text-end"},ut=t("button",{class:"btn btn-primary ms-auto",type:"submit"},[b("確認付款"),t("i",{class:"bi bi-caret-right-fill"})],-1),bt=[ut],ft={key:1,class:"text-end"},mt=t("i",{class:"bi bi-cart4 pe-1 fs-5"},null,-1);function xt(a,s,wt,yt,e,_){const f=l("LoadingVue"),m=l("RouterLink"),x=l("FooterComponent");return o(),r(u,null,[d(f,{active:e.isLoading,loader:"spinner",color:"#fca311",width:70,height:70},null,8,["active"]),t("section",B,[t("div",O,[j,t("div",F,[V,I,t("h5",{class:p(["fw-bold mb-0 text-secondary pay-header",{active:e.order.is_paid===!1}])},"確認付款",2),N,t("h5",{class:p(["fw-bold mb-0 text-secondary pay-header",{active:e.order.is_paid===!0}])},"訂單完成",2)]),t("div",R,[t("div",S,[e.order.is_paid===!0?(o(),r("div",E,z)):i("",!0),e.order.is_paid===!0?(o(),r("h6",D,"感謝您的訂購，訂單明細將會寄送至您的電子信箱 !")):i("",!0),t("div",M,[T,t("form",{class:"col-lg-6",onSubmit:s[0]||(s[0]=g((...c)=>_.payOrder&&_.payOrder(...c),["prevent"]))},[t("table",U,[A,t("tbody",null,[(o(!0),r(u,null,v(e.order.products,c=>(o(),r("tr",{key:c.id},[t("td",G,n(c.product.title),1),t("td",H,n(c.qty)+"/"+n(c.product.unit),1),t("td",J,n(c.final_total),1)]))),128))]),t("tfoot",null,[t("tr",null,[K,t("td",Q,n(e.order.total),1)])])]),W,t("table",X,[t("tbody",null,[t("tr",Y,[Z,t("td",$,n(e.order.user.email),1)]),t("tr",tt,[et,t("td",st,n(e.order.user.name),1)]),t("tr",ot,[rt,t("td",nt,n(e.order.user.tel),1)]),t("tr",ct,[at,t("td",it,n(e.order.user.address),1)]),t("tr",lt,[dt,t("td",null,[e.order.is_paid?(o(),r("span",ht,"付款完成")):(o(),r("span",_t,"尚未付款"))])])])]),e.order.is_paid===!1?(o(),r("div",pt,bt)):i("",!0),e.order.is_paid===!0?(o(),r("div",ft,[d(m,{to:"/products",class:"btn btn-primary ms-auto"},{default:k(()=>[mt,b("繼續選購")]),_:1})])):i("",!0)],32)])])])])]),d(x)],64)}const kt=w(L,[["render",xt]]);export{kt as default};