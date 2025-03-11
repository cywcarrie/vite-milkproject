import{_ as F,i as S,u as L,j as C,s as I,l as h,f as N,A,n as R,r as v,o as f,c as u,b as a,a as e,F as P,q as j,t as V,x as p,w as T,S as E,d as O,e as i,p as m,g as D,v as B}from"./index-Cn8zyKun.js";import{V as H}from"./VueLoading-DsjSPA5o.js";import{F as Y}from"./FooterComponent-BCJGbDJc.js";var z={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:G,VITE_APP_PATH:J}=z,K={components:{VueLoading:H,FooterComponent:Y},setup(){const x=S("$axios"),s=L(),k=C(),{cart:l}=I(k),g=h(!1),U=h(0),w=h(0),r=h(""),d=h(""),_=h(""),y=h(""),b=N({user:{name:"",email:"",tel:"",address:"",delivery:"",pay:"",bill:"",billNum:""},message:""});A(_,(n,c)=>{n.length<c.length&&n.charAt(n.length-1)===" "&&(_.value=c.slice(0,-2)),n.length>c.length&&(n.length+1)%5===0&&_.value.length!==0&&_.value.length<19&&(_.value=n+" ")}),A(()=>b.user.delivery,o),A(d,(n,c)=>{n.length===2&&n.length>c.length?d.value+="/":n.length<c.length&&c.charAt(2)==="/"&&c.length===3&&(d.value=c.slice(0,1))});function t(){const n=`${G}api/${J}/order`,c=b;g.value=!0,x.post(n,{data:c}).then(q=>{g.value=!1,s.push(`/checkorder/${q.data.orderId}`),k.getCart()}).catch(q=>{g.value=!1,E("error",`${q.response.data.message}`)})}function o(){const{delivery:n}=b.user;n!=="外送"&&(y.value=n)}function M(){b.user.address===""&&(b.user.address=y.value),t()}return R(()=>{k.getCart()}),{isLoading:g,total:U,final_total:w,form:b,coupon_code:r,expiryDate:d,cardNumber:_,cart:l,createOrder:t,tempAddress:y,sendDelivery:o,createOrderData:M}}},Q={class:"mb-5"},W={class:"container"},X=O('<div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"><h2 class="position-absolute text-center text-white fw-bolder banner-title">結帳流程</h2></div><div class="d-flex justify-content-center align-items-center my-5 mt-3"><h5 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header active"><i class="bi bi-1-circle mb-1"></i><span>填寫資料</span></h5><i class="bi bi-caret-right-fill fs-5 mx-1 mx-md-2 text-secondary"></i><h5 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"><i class="bi bi-2-circle mb-1"></i><span>確認訂單</span></h5><i class="bi bi-caret-right-fill fs-5 mx-1 mx-md-2 text-secondary"></i><h5 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"><i class="bi bi-3-circle mb-1"></i><span>訂單完成</span></h5></div>',2),Z={class:"row my-5 py-5 rounded-2"},$={class:"col-lg-6"},ee=e("h3",{class:"text-center fw-bold mb-4"},"商品明細",-1),le={class:"table-responsive-md mb-5 mb-lg-0"},se={class:"table align-middle table-borderless"},oe=e("thead",{class:"text-center table-secondary"},[e("tr",{class:"table-nowrap"},[e("th",null,"商品名稱"),e("th",{class:"text-nowrap"},"數量"),e("th",{class:"text-end"},"價格")])],-1),ae={class:"text-center"},te={class:"table-nowrap fw-bold text-primary"},re={class:"text-end text-nowrap"},de={key:0,class:"text-danger text-end"},ne=e("td",{colspan:"2",class:"text-end fs-5"},"總計",-1),ie={class:"text-end fs-5 text-primary fw-bold"},ce={key:0},me=e("td",{colspan:"2",class:"text-end text-danger fs-5"},"優惠價",-1),fe={class:"text-end text-danger fs-5 fw-bold"},ue={class:"row col-lg-6"},_e=e("h3",{class:"text-center fw-bold mb-4"},"訂購人資訊",-1),be={class:"mb-3"},he=e("label",{for:"name",class:"form-label"},[i("姓名"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),ve={class:"mb-3"},pe=e("label",{for:"email",class:"form-label"},[i("Email"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),xe={class:"mb-3"},ge=e("label",{for:"tel",class:"form-label"},[i("電話"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),ye={class:"col-12 d-flex align-items-center mb-3"},Ve=e("legend",{class:"form-label me-3 me-md-4 mb-0 fs-6 fs-md-5 w-auto"},[i(" 取貨方式"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),ke={class:"d-flex"},we={class:"form-check form-radio me-3"},qe=e("label",{class:"form-check-label",for:"本店自取"},"本店自取",-1),Ae={class:"form-check form-radio"},Ue=e("label",{class:"form-check-label",for:"外送"},"外送",-1),Pe={key:0,class:"mb-3"},Te=e("p",{class:"fw-bold mb-1 mb-md-2"},"本店位址: 台南市東東區中中路000號",-1),Me=e("p",{class:"fw-bold"},"聯絡電話: 06-12345678",-1),Fe=[Te,Me],Se={key:1,class:"mb-3"},Le=e("label",{for:"address",class:"form-label"},[i("地址"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),Ce={class:"col-12 d-flex flex-md-row flex-column align-md-items-center mb-3"},Ie=e("legend",{class:"form-label me-3 me-md-4 fs-6 fs-md-5 w-auto mb-md-0 mb-2"},[i(" 付款方式"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),Ne={class:"d-flex"},Re={class:"form-check form-radio me-3"},je=e("label",{class:"form-check-label",for:"信用卡"},"信用卡",-1),Ee={class:"form-check form-radio me-3"},Oe=e("label",{class:"form-check-label",for:"ATM 轉帳"},"ATM 轉帳",-1),De={class:"form-check form-radio"},Be=e("label",{class:"form-check-label",for:"貨到付款"},"貨到付款",-1),He={class:"mb-2 mb-md-0"},Ye={key:2,class:"mb-3"},ze=e("label",{for:"cardNum",class:"form-label"},[i("信用卡號"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),Ge={class:"row"},Je={class:"col-12"},Ke={class:"my-3 col-12 col-md-6"},Qe=e("label",{for:"period",class:"form-label required"},[i("有效日期"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),We={class:"mb-3 col-12 col-md-6"},Xe=e("label",{for:"checkCode",class:"form-label required"},[i("檢查碼"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),Ze={class:"col-12 d-flex align-items-center mb-3"},$e=e("legend",{class:"form-label me-3 me-md-4 mb-0 fs-6 fs-md-5 w-auto"},[i(" 發票類型"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1),el={class:"d-flex"},ll={class:"form-check form-radio me-3"},sl=e("label",{class:"form-check-label",for:"紙本發票"},"紙本發票",-1),ol={class:"form-check form-radio"},al=e("label",{class:"form-check-label",for:"電子載具"},"電子載具",-1),tl={key:3,class:"mb-3"},rl={class:"mb-3"},dl=e("label",{for:"message",class:"form-label"},"備註",-1),nl={class:"d-flex justify-content-between"},il=e("i",{class:"bi bi-caret-left-fill"},null,-1),cl=e("button",{type:"submit",class:"btn btn-secondary check-btn"},[i(" 確認訂單"),e("i",{class:"bi bi-caret-right-fill"})],-1);function ml(x,s,k,l,g,U){const w=v("VueLoading"),r=v("FieldVue"),d=v("ErrorMessage"),_=v("RouterLink"),y=v("FormVue"),b=v("FooterComponent");return f(),u(P,null,[a(w,{active:l.isLoading},null,8,["active"]),e("section",Q,[e("div",W,[X,e("div",Z,[e("div",$,[ee,e("div",le,[e("table",se,[oe,e("tbody",ae,[(f(!0),u(P,null,j(l.cart.carts,t=>(f(),u("tr",{class:"table-nowrap",key:t.id},[e("td",te,V(t.product.title),1),e("td",null,V(t.qty),1),e("td",re,[l.cart.final_total!==l.cart.total?(f(),u("small",de,"優惠價：")):p("",!0),i(" "+V(x.$filters.currency(t.final_total)),1)])]))),128))]),e("tfoot",null,[e("tr",null,[ne,e("td",ie,V(x.$filters.currency(l.cart.total)),1)]),l.cart.final_total!==l.cart.total?(f(),u("tr",ce,[me,e("td",fe,V(x.$filters.currency(l.cart.final_total)),1)])):p("",!0)])])])]),e("div",ue,[_e,a(y,{onSubmit:l.createOrderData},{default:T(({errors:t})=>[e("div",be,[he,a(r,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":s[0]||(s[0]=o=>l.form.user.name=o)},null,8,["class","modelValue"]),a(d,{name:"姓名",class:"invalid-feedback"})]),e("div",ve,[pe,a(r,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":s[1]||(s[1]=o=>l.form.user.email=o)},null,8,["class","modelValue"]),a(d,{name:"email",class:"invalid-feedback"})]),e("div",xe,[ge,a(r,{id:"tel",name:"電話",type:"tel",class:m(["form-control",{"is-invalid":t.電話}]),placeholder:"不含 - 符號的手機或室話",rules:"required|numeric|min:8|max:10",modelValue:l.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=o=>l.form.user.tel=o)},null,8,["class","modelValue"]),a(d,{name:"電話",class:"invalid-feedback"})]),e("fieldset",ye,[Ve,e("div",{class:m(["normal-input",{error:t.取貨方式}])},[e("div",ke,[e("div",we,[a(r,{class:"form-check-input",type:"radio",name:"取貨方式",rules:"required",id:"本店自取",value:"本店自取",modelValue:l.form.user.delivery,"onUpdate:modelValue":s[3]||(s[3]=o=>l.form.user.delivery=o)},null,8,["modelValue"]),qe]),e("div",Ae,[a(r,{class:"form-check-input",type:"radio",name:"取貨方式",rules:"required",id:"外送",value:"外送",modelValue:l.form.user.delivery,"onUpdate:modelValue":s[4]||(s[4]=o=>l.form.user.delivery=o)},null,8,["modelValue"]),Ue])]),a(d,{name:"取貨方式",class:"error-text position-absolute text-danger"})],2)]),l.form.user.delivery==="本店自取"?(f(),u("div",Pe,Fe)):p("",!0),l.form.user.delivery==="外送"?(f(),u("div",Se,[Le,a(r,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":s[5]||(s[5]=o=>l.form.user.address=o)},null,8,["class","modelValue"]),a(d,{name:"地址",class:"invalid-feedback"})])):p("",!0),e("fieldset",Ce,[Ie,e("div",{class:m(["normal-input",{error:t.付款方式}])},[e("div",Ne,[e("div",Re,[a(r,{class:"form-check-input",type:"radio",name:"付款方式",rules:"required",id:"信用卡",value:"信用卡",modelValue:l.form.user.pay,"onUpdate:modelValue":s[6]||(s[6]=o=>l.form.user.pay=o)},null,8,["modelValue"]),je]),e("div",Ee,[a(r,{class:"form-check-input",type:"radio",name:"付款方式",rules:"required",id:"ATM 轉帳",value:"ATM 轉帳",modelValue:l.form.user.pay,"onUpdate:modelValue":s[7]||(s[7]=o=>l.form.user.pay=o)},null,8,["modelValue"]),Oe]),e("div",De,[a(r,{class:"form-check-input",type:"radio",name:"付款方式",rules:"required",id:"貨到付款",value:"貨到付款",modelValue:l.form.user.pay,"onUpdate:modelValue":s[8]||(s[8]=o=>l.form.user.pay=o)},null,8,["modelValue"]),Be])]),e("div",He,[a(d,{name:"付款方式",class:"error-text position-absolute text-danger mb-2 mb-md-0"})])],2)]),l.form.user.pay==="信用卡"?(f(),u("div",Ye,[ze,e("div",Ge,[e("div",Je,[a(r,{id:"cardNum",name:"卡號",type:"tel",class:m(["form-control",{"is-invalid":t.卡號}]),maxlength:"19",placeholder:"**** **** **** ****",rules:"required",modelValue:l.cardNumber,"onUpdate:modelValue":s[9]||(s[9]=o=>l.cardNumber=o)},null,8,["class","modelValue"]),a(d,{name:"卡號",class:"invalid-feedback"}),e("div",Ke,[Qe,a(r,{id:"period",name:"有效日期",type:"tel",class:m(["form-control",{"is-invalid":t.有效日期}]),placeholder:"MM/YY",maxlength:"5",modelValue:l.expiryDate,"onUpdate:modelValue":s[10]||(s[10]=o=>l.expiryDate=o),rules:"required"},null,8,["modelValue","class"]),a(d,{name:"有效日期",class:"invalid-feedback"})]),e("div",We,[Xe,a(r,{id:"checkCode",name:"檢查碼",type:"text",class:m(["form-control",{"is-invalid":t.檢查碼}]),maxlength:"3",placeholder:"CVC/CVV",rules:"required|length:3|numeric:true"},null,8,["class"]),a(d,{name:"檢查碼",class:"invalid-feedback"})])])])])):p("",!0),e("fieldset",Ze,[$e,e("div",{class:m(["normal-input",{error:t.發票類型}])},[e("div",el,[e("div",ll,[a(r,{class:"form-check-input",type:"radio",name:"發票類型",rules:"required",id:"紙本發票",value:"紙本發票",modelValue:l.form.user.bill,"onUpdate:modelValue":s[11]||(s[11]=o=>l.form.user.bill=o)},null,8,["modelValue"]),sl]),e("div",ol,[a(r,{class:"form-check-input",type:"radio",name:"發票類型",rules:"required",id:"電子載具",value:"電子載具",modelValue:l.form.user.bill,"onUpdate:modelValue":s[12]||(s[12]=o=>l.form.user.bill=o)},null,8,["modelValue"]),al])]),a(d,{name:"發票類型",class:"error-text position-absolute text-danger"})],2)]),l.form.user.bill==="電子載具"?(f(),u("div",tl,[a(r,{name:"電子載具",type:"text",class:m(["form-control",{"is-invalid":t.電子載具}]),placeholder:"請輸入  '/'  開頭的載具號碼",rules:"required",modelValue:l.form.user.billNum,"onUpdate:modelValue":s[13]||(s[13]=o=>l.form.user.billNum=o)},null,8,["class","modelValue"]),a(d,{name:"電子載具",class:"invalid-feedback"})])):p("",!0),e("div",rl,[dl,D(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[14]||(s[14]=o=>l.form.message=o)},null,512),[[B,l.form.message]])]),e("div",nl,[a(_,{class:"btn btn-outline-primary",to:"/cart"},{default:T(()=>[il,i("回上一頁")]),_:1}),cl])]),_:1},8,["onSubmit"])])])])]),a(b)],64)}const bl=F(K,[["render",ml]]);export{bl as default};
