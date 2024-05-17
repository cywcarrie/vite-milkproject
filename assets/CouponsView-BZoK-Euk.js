import{m as k,D as w}from"./DelModal-B_dkEWBT.js";import{_ as C,o as r,c as u,a as o,f as p,v as c,G as y,S as d,r as f,b as _,F as P,j as B,t as b}from"./index-B_3VajgM.js";const x={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[k]},D={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},V={class:"modal-dialog",role:"document"},L={class:"modal-content"},A=o("div",{class:"modal-header"},[o("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),T={class:"modal-body"},I={class:"mb-3"},E=o("label",{for:"title"},"標題",-1),S={class:"mb-3"},U=o("label",{for:"coupon_code"},"優惠碼",-1),N={class:"mb-3"},O=o("label",{for:"due_date"},"到期日",-1),j={class:"mb-3"},R=o("label",{for:"price"},"折扣百分比",-1),F={class:"mb-3"},H={class:"form-check"},G=o("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),q={class:"modal-footer"},z=o("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function J(s,e,l,g,t,a){return r(),u("div",D,[o("div",V,[o("div",L,[A,o("div",T,[o("div",I,[E,p(o("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=n=>t.tempCoupon.title=n),placeholder:"請輸入標題"},null,512),[[c,t.tempCoupon.title]])]),o("div",S,[U,p(o("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=n=>t.tempCoupon.code=n),placeholder:"請輸入優惠碼"},null,512),[[c,t.tempCoupon.code]])]),o("div",N,[O,p(o("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=n=>t.due_date=n)},null,512),[[c,t.due_date]])]),o("div",j,[R,p(o("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[3]||(e[3]=n=>t.tempCoupon.percent=n),placeholder:"請輸入折扣百分比"},null,512),[[c,t.tempCoupon.percent,void 0,{number:!0}]])]),o("div",F,[o("div",H,[p(o("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=n=>t.tempCoupon.is_enabled=n),id:"is_enabled"},null,512),[[y,t.tempCoupon.is_enabled]]),G])])]),o("div",q,[z,o("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=n=>s.$emit("update-coupon",t.tempCoupon))},"更新優惠券 ")])])])],512)}const K=C(x,[["render",J]]);var Q={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:m,VITE_APP_PATH:h}=Q,W={components:{CouponModal:K,DelModal:w},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{openCouponModal(s,e){this.isNew=s,this.isNew?this.tempCoupon={due_date:new Date().getTime()/1e3}:this.tempCoupon={...e},this.$refs.couponModal.showModal()},openDelCouponModal(s){this.tempCoupon={...s},this.$refs.delModal.showModal()},getCoupons(){this.isLoading=!0;const s=`${m}api/${h}/admin/coupons`;this.$http.get(s,this.tempProduct).then(e=>{this.coupons=e.data.coupons,this.isLoading=!1})},updateCoupon(s){if(this.isNew){const e=`${m}api/${h}/admin/coupon`;this.$http.post(e,{data:s}).then(l=>{l.data.success?(d.fire({position:"top-end",icon:"success",title:"新增優惠劵成功",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0}),this.getCoupons(),this.$refs.couponModal.hideModal()):d.fire({position:"top-end",icon:"error",title:"新增優惠劵失敗",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}else{const e=`${m}api/${h}/admin/coupon/${this.tempCoupon.id}`;this.$http.put(e,{data:this.tempCoupon}).then(l=>{l.data.success?(d.fire({position:"top-end",icon:"success",title:"更新優惠劵成功",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0}),this.getCoupons(),this.$refs.couponModal.hideModal()):d.fire({position:"top-end",icon:"error",title:"更新優惠劵失敗",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})}).catch(l=>{d.fire({position:"top-end",icon:"error",title:`${l.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}},delCoupon(){const s=`${m}api/${h}/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(s).then(e=>{e.data.success?(d.fire({position:"top-end",icon:"success",title:"刪除優惠劵成功",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0}),this.$refs.delModal.hideModal(),this.getCoupons()):d.fire({position:"top-end",icon:"error",title:"刪除優惠劵失敗",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})}).catch(e=>{d.fire({position:"top-end",icon:"error",title:`${e.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}},created(){this.getCoupons()}},X={class:"text-end mt-4"},Y={class:"table mt-4"},Z=o("thead",null,[o("tr",null,[o("th",null,"名稱"),o("th",null,"折扣百分比"),o("th",null,"到期日"),o("th",null,"是否啟用"),o("th",null,"編輯")])],-1),oo={key:0,class:"text-success"},eo={key:1,class:"text-muted"},to={class:"btn-group"},so=["onClick"],no=["onClick"];function lo(s,e,l,g,t,a){const n=f("LoadingVue"),v=f("couponModal"),M=f("DelModal");return r(),u("div",null,[_(n,{active:t.isLoading,loader:"spinner",color:"#fca311",width:70,height:70},null,8,["active"]),o("div",X,[o("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=i=>a.openCouponModal(!0))}," 建立新的優惠券 ")]),o("table",Y,[Z,o("tbody",null,[(r(!0),u(P,null,B(t.coupons,i=>(r(),u("tr",{key:`coupon ${i.id}`},[o("td",null,b(i.title),1),o("td",null,b(i.percent)+"%",1),o("td",null,b(s.$filters.date(i.due_date)),1),o("td",null,[i.is_enabled===1?(r(),u("span",oo,"啟用")):(r(),u("span",eo,"未起用"))]),o("td",null,[o("div",to,[o("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:$=>a.openCouponModal(!1,i)},"編輯",8,so),o("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:$=>a.openDelCouponModal(i)},"刪除",8,no)])])]))),128))])]),_(v,{coupon:t.tempCoupon,ref:"couponModal",onUpdateCoupon:a.updateCoupon},null,8,["coupon","onUpdateCoupon"]),_(M,{item:t.tempCoupon,ref:"delModal",onDelItem:a.delCoupon},null,8,["item","onDelItem"])])}const ro=C(W,[["render",lo]]);export{ro as default};
