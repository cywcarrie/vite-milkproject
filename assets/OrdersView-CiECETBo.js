import{m as M,D as v}from"./DelModal-CilT4pQE.js";import{_ as y,o as r,c as n,a as t,t as s,k as b,F as _,j as g,S as h,r as m,b as f,n as P,f as x,G as B}from"./index-BqodoQ1R.js";import{P as L}from"./PaginationComponent-C3V5TTC3.js";const D={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[M],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},V={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},E={class:"modal-dialog modal-xl",role:"document"},S={class:"modal-content border-0"},N=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},j={class:"row"},q={class:"col-md-4"},F=t("h3",null,"用戶資料",-1),I={class:"table"},z={key:0},G=t("th",{style:{width:"100px"}},"姓名",-1),A=t("th",null,"Email",-1),H=t("th",null,"電話",-1),J=t("th",null,"地址",-1),K={class:"col-md-8"},Q=t("h3",null,"訂單細節",-1),R={class:"table"},T=t("th",{style:{width:"100px"}},"訂單編號",-1),W=t("th",null,"下單時間",-1),X=t("th",null,"付款時間",-1),Y={key:0},Z={key:1},tt=t("th",null,"付款狀態",-1),et={key:0,class:"text-success"},ot={key:1,class:"text-muted"},st=t("th",null,"總金額",-1),rt=t("h3",null,"選購商品",-1),nt={class:"table"},lt=t("thead",null,[t("tr")],-1),dt={class:"text-end"},it={class:"modal-footer"},at=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function ct(o,d,c,p,e,u){return r(),n("div",V,[t("div",E,[t("div",S,[N,t("div",U,[t("div",j,[t("div",q,[F,t("table",I,[e.tempOrder.user?(r(),n("tbody",z,[t("tr",null,[G,t("td",null,s(e.tempOrder.user.name),1)]),t("tr",null,[A,t("td",null,s(e.tempOrder.user.email),1)]),t("tr",null,[H,t("td",null,s(e.tempOrder.user.tel),1)]),t("tr",null,[J,t("td",null,s(e.tempOrder.user.address),1)])])):b("",!0)])]),t("div",K,[Q,t("table",R,[t("tbody",null,[t("tr",null,[T,t("td",null,s(e.tempOrder.id),1)]),t("tr",null,[W,t("td",null,s(o.$filters.date(e.tempOrder.create_at)),1)]),t("tr",null,[X,t("td",null,[e.tempOrder.paid_date?(r(),n("span",Y,s(o.$filters.date(e.tempOrder.paid_date)),1)):(r(),n("span",Z,"時間不正確"))])]),t("tr",null,[tt,t("td",null,[e.tempOrder.is_paid?(r(),n("strong",et,"已付款")):(r(),n("span",ot,"尚未付款"))])]),t("tr",null,[st,t("td",null,s(o.$filters.currency(e.tempOrder.total)),1)])])]),rt,t("table",nt,[lt,t("tbody",null,[(r(!0),n(_,null,g(e.tempOrder.products,i=>(r(),n("tr",{key:i.id},[t("th",null,s(i.product.title),1),t("td",null,s(i.qty)+" / "+s(i.product.unit),1),t("td",dt,s(o.$filters.currency(i.final_total)),1)]))),128))])])])])]),t("div",it,[at,t("button",{type:"button",class:"btn btn-primary",onClick:d[0]||(d[0]=i=>o.$emit("update-order",e.tempOrder))},"確認")])])])],512)}const ut=y(D,[["render",ct]]),ht={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:L,DelModal:v,OrderModal:ut},methods:{getOrders(o=1){this.currentPage=o;const d=`https://vue3-course-api.hexschool.io/api/funniecafeweb/admin/orders?page=${o}`;this.isLoading=!0,this.$http.get(d,this.tempProduct).then(c=>{this.orders=c.data.orders,this.pagination=c.data.pagination,this.isLoading=!1})},openModal(o){this.tempOrder={...o},this.$refs.orderModal.showModal()},openDelOrderModal(o){this.tempOrder={...o},this.$refs.delModal.showModal()},updatePaid(o){this.isLoading=!0;const d=`https://vue3-course-api.hexschool.io/api/funniecafeweb/admin/order/${o.id}`,c={is_paid:o.is_paid};this.$http.put(d,{data:c}).then(p=>{this.isLoading=!1,p.data.success?(this.getOrders(this.currentPage),h.fire({position:"top-end",icon:"success",title:"更新付款狀態成功",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})):h.fire({position:"top-end",icon:"error",title:"更新付款狀態失敗",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})}).catch(p=>{h.fire({position:"top-end",icon:"error",title:`${p.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})},delOrder(){const o=`https://vue3-course-api.hexschool.io/api/funniecafeweb/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(o).then(d=>{this.isLoading=!1,this.$refs.delModal.hideModal(),d.data.success?(h.fire({position:"top-end",icon:"success",title:"刪除成功",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0}),this.getOrders(this.currentPage)):h.fire({position:"top-end",icon:"error",title:"刪除失敗",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})}).catch(d=>{h.fire({position:"top-end",icon:"error",title:`${d.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}},created(){this.getOrders()}},pt={class:"table mt-4"},_t=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),mt=["textContent"],ft={class:"list-unstyled"},bt={class:"text-right"},gt={class:"form-check form-switch"},yt=["id","onUpdate:modelValue","onChange"],Ot=["for"],kt={key:0},$t={key:1},Ct={class:"btn-group"},wt=["onClick"],Mt=["onClick"];function vt(o,d,c,p,e,u){const i=m("LoadingVue"),O=m("OrderModal"),k=m("DelModal"),$=m("Pagination");return r(),n(_,null,[f(i,{active:e.isLoading,loader:"spinner",color:"#fca311",width:70,height:70},null,8,["active"]),t("table",pt,[_t,t("tbody",null,[(r(!0),n(_,null,g(e.orders,(l,C)=>(r(),n(_,{key:C},[e.orders.length?(r(),n("tr",{key:0,class:P({"text-secondary":!l.is_paid})},[t("td",null,s(o.$filters.date(l.create_at)),1),t("td",null,[l.user?(r(),n("span",{key:0,textContent:s(l.user.email)},null,8,mt)):b("",!0)]),t("td",null,[t("ul",ft,[(r(!0),n(_,null,g(l.products,(a,w)=>(r(),n("li",{key:w},s(a.product.title)+" 數量："+s(a.qty)+" "+s(a.product.unit),1))),128))])]),t("td",bt,s(l.total),1),t("td",null,[t("div",gt,[x(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${l.id}`,"onUpdate:modelValue":a=>l.is_paid=a,onChange:a=>u.updatePaid(l)},null,40,yt),[[B,l.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${l.id}`},[l.is_paid?(r(),n("span",kt,"已付款")):(r(),n("span",$t,"未付款"))],8,Ot)])]),t("td",null,[t("div",Ct,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:a=>u.openModal(l)},"檢視",8,wt),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:a=>u.openDelOrderModal(l)},"刪除",8,Mt)])])],2)):b("",!0)],64))),128))])]),f(O,{order:e.tempOrder,ref:"orderModal",onUpdatePaid:u.updatePaid},null,8,["order","onUpdatePaid"]),f(k,{item:e.tempOrder,ref:"delModal",onDelItem:u.delOrder},null,8,["item","onDelItem"]),f($,{pages:e.pagination,onEmitPages:u.getOrders},null,8,["pages","onEmitPages"])],64)}const Lt=y(ht,[["render",vt]]);export{Lt as default};