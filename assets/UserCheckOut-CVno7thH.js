import{_ as P,m as C,h,S as E,i as S,r as i,o as c,c as d,b as o,a as e,F as p,j as A,t as m,k as g,w as v,d as F,e as n,n as b,f as L,v as T}from"./index-xOi40QED.js";import{F as I}from"./FooterComponent-CgYEiMNp.js";var U={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:B,VITE_APP_PATH:j}=U,q={components:{FooterComponent:I},data(){return{isLoading:!1,total:0,final_total:0,form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},methods:{...C(h,["getCart"]),createOrder(){const t=`${B}api/${j}/order`,s=this.form;this.$http.post(t,{data:s}).then(f=>{this.$router.push(`/checkorder/${f.data.orderId}`),this.getCart()}).catch(f=>{E.fire({position:"top-end",icon:"error",title:`${f.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}},computed:{...S(h,["cart"])},created(){this.getCart()}},D={class:"mb-5"},N={class:"container"},O=F('<div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"><h2 class="position-absolute text-center text-white fw-bolder banner-title">結帳流程</h2></div><div class="d-flex justify-content-center align-items-center my-5 mt-3"><h5 class="fw-bold mb-0 text-secondary pay-header active">填寫資料</h5><i class="bi bi-caret-right-fill fs-5 mx-2 text-secondary"></i><h5 class="fw-bold mb-0 text-secondary pay-header">確認付款</h5><i class="bi bi-caret-right-fill fs-5 mx-2 text-secondary"></i><h5 class="fw-bold mb-0 text-secondary pay-header">訂單完成</h5></div>',2),R={class:"row my-5 py-5 bg-light rounded-2"},M={class:"col-lg-7"},H=e("h3",{class:"text-center fw-bold mb-4"},"商品明細",-1),z={class:"table-responsive-md mb-5 mb-lg-0"},$={class:"table align-middle table-light table-borderless"},G=e("thead",{class:"text-center table-secondary"},[e("tr",{class:"table-nowrap"},[e("th",null,"商品名稱"),e("th",{class:"text-nowrap"},"數量"),e("th",{class:"text-end"},"價格")])],-1),J={class:"text-center"},K={class:"table-nowrap fw-bold text-primary"},Q={class:"text-end text-nowrap"},W={key:0,class:"text-danger text-end"},X=e("td",{colspan:"2",class:"text-end fs-5"},"總計",-1),Y={class:"text-end fs-5 text-primary fw-bold"},Z={key:0},ee=e("td",{colspan:"2",class:"text-end text-danger fs-5"},"優惠價",-1),te={class:"text-end text-danger fs-5 fw-bold"},se={class:"row col-lg-5"},oe=e("h3",{class:"text-center fw-bold mb-4"},"訂購人資訊",-1),le={class:"mb-3"},ae=e("label",{for:"email",class:"form-label"},[n("Email"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),re={class:"mb-3"},ne=e("label",{for:"name",class:"form-label"},[n("訂購人姓名"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),ie={class:"mb-3"},ce=e("label",{for:"tel",class:"form-label"},[n("訂購人電話"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),de={class:"mb-3"},me=e("label",{for:"address",class:"form-label"},[n("訂購人地址"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),fe={class:"mb-3"},ue=e("label",{for:"message",class:"form-label"},"留言",-1),_e={class:"d-flex justify-content-between"},be=e("i",{class:"bi bi-caret-left-fill"},null,-1),he=e("button",{type:"submit",class:"btn btn-secondary check-btn"},[n("確認訂單"),e("i",{class:"bi bi-caret-right-fill"})],-1);function pe(t,s,f,ge,l,x){const y=i("LoadingVue"),u=i("FieldVue"),_=i("ErrorMessage"),w=i("RouterLink"),V=i("FormVue"),k=i("FooterComponent");return c(),d(p,null,[o(y,{active:l.isLoading,loader:"spinner",color:"#fca311",width:70,height:70},null,8,["active"]),e("section",D,[e("div",N,[O,e("div",R,[e("div",M,[H,e("div",z,[e("table",$,[G,e("tbody",J,[(c(!0),d(p,null,A(t.cart.carts,a=>(c(),d("tr",{class:"table-nowrap",key:a.id},[e("td",K,m(a.product.title),1),e("td",null,m(a.qty),1),e("td",Q,[t.cart.final_total!==t.cart.total?(c(),d("small",W,"優惠價：")):g("",!0),n(" "+m(t.$filters.currency(a.final_total)),1)])]))),128))]),e("tfoot",null,[e("tr",null,[X,e("td",Y,m(t.$filters.currency(t.cart.total)),1)]),t.cart.final_total!==t.cart.total?(c(),d("tr",Z,[ee,e("td",te,m(t.$filters.currency(t.cart.final_total)),1)])):g("",!0)])])])]),e("div",se,[oe,o(V,{onSubmit:x.createOrder},{default:v(({errors:a})=>[e("div",le,[ae,o(u,{id:"email",name:"email",type:"email",class:b(["form-control",{"is-invalid":a.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=r=>l.form.user.email=r)},null,8,["class","modelValue"]),o(_,{name:"email",class:"invalid-feedback"})]),e("div",re,[ne,o(u,{id:"name",name:"姓名",type:"text",class:b(["form-control",{"is-invalid":a.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=r=>l.form.user.name=r)},null,8,["class","modelValue"]),o(_,{name:"姓名",class:"invalid-feedback"})]),e("div",ie,[ce,o(u,{id:"tel",name:"電話",type:"tel",class:b(["form-control",{"is-invalid":a.電話}]),placeholder:"請輸入電話",rules:"required|numeric|min:8|max:10",modelValue:l.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=r=>l.form.user.tel=r)},null,8,["class","modelValue"]),o(_,{name:"電話",class:"invalid-feedback"})]),e("div",de,[me,o(u,{id:"address",name:"地址",type:"text",class:b(["form-control",{"is-invalid":a.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=r=>l.form.user.address=r)},null,8,["class","modelValue"]),o(_,{name:"地址",class:"invalid-feedback"})]),e("div",fe,[ue,L(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=r=>l.form.message=r)},null,512),[[T,l.form.message]])]),e("div",_e,[o(w,{class:"btn btn-outline-primary",to:"/cart"},{default:v(()=>[be,n("回上一頁")]),_:1}),he])]),_:1},8,["onSubmit"])])])])]),o(k)],64)}const ye=P(q,[["render",pe]]);export{ye as default};
