import{_ as d,S as p,o as u,c as m,a as s,f as a,v as l,g as f,e as h}from"./index-BqodoQ1R.js";const _={data(){return{user:{username:"",password:""}}},methods:{signIn(){this.$http.post("https://vue3-course-api.hexschool.io/admin/signin",this.user).then(e=>{if(e.data.success){const{token:r,expired:n}=e.data;document.cookie=`hexToken=${r}; expires=${new Date(n)}`,this.$router.push("/admin/products")}}).catch(()=>{p.fire({position:"top-end",icon:"error",title:"登入失敗",text:"抱歉，出現系統問題，請聯絡我們！",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}}},b={class:"container my-5 py-5"},w={class:"col-md-7 col-lg-4 bg-light p-5 rounded-2"},x=s("h2",{class:"h3 mb-3 text-center text-nowrap font-weight-normal fw-bold text-primary"},[s("i",{class:"bi bi-person-circle pe-2"}),h("管理者後台登入")],-1),g={class:"mb-2"},y=s("label",{for:"inputEmail",class:"sr-only"},"Email",-1),v={class:"mb-2"},k=s("label",{for:"inputPassword",class:"sr-only"},"密碼",-1),B=s("div",{class:"text-center mt-4"},[s("button",{class:"btn btn-secondary btn-block px-4 fw-bold",type:"submit"},"登入")],-1);function E(c,e,r,n,o,i){return u(),m("div",b,[s("form",{class:"row justify-content-center py-5 px-3",onSubmit:e[2]||(e[2]=f((...t)=>i.signIn&&i.signIn(...t),["prevent"]))},[s("div",w,[x,s("div",g,[y,a(s("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=t=>o.user.username=t)},null,512),[[l,o.user.username]])]),s("div",v,[k,a(s("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>o.user.password=t)},null,512),[[l,o.user.password]])]),B])],32)])}const P=d(_,[["render",E]]);export{P as default};