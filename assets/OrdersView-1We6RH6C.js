import{m as w,D as x}from"./DelModal-B6Nzmld5.js";import{_ as P,o as r,c as n,a as t,t as s,k as O,F as _,j as y,S as h,r as m,b as f,n as B,f as L,G as D}from"./index-CLJaB914.js";import{P as V}from"./PaginationComponent-jRjoVtl1.js";const E={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[w],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},A={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},I={class:"modal-dialog modal-xl",role:"document"},S={class:"modal-content border-0"},T=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},N={class:"row"},j={class:"col-md-4"},R=t("h3",null,"用戶資料",-1),q={class:"table"},F={key:0},H=t("th",{style:{width:"100px"}},"姓名",-1),z=t("th",null,"Email",-1),G=t("th",null,"電話",-1),J=t("th",null,"地址",-1),K={class:"col-md-8"},Q=t("h3",null,"訂單細節",-1),W={class:"table"},X=t("th",{style:{width:"100px"}},"訂單編號",-1),Y=t("th",null,"下單時間",-1),Z=t("th",null,"付款時間",-1),tt={key:0},et={key:1},ot=t("th",null,"付款狀態",-1),st={key:0,class:"text-success"},rt={key:1,class:"text-muted"},nt=t("th",null,"總金額",-1),lt=t("h3",null,"選購商品",-1),dt={class:"table"},it=t("thead",null,[t("tr")],-1),at={class:"text-end"},ct={class:"modal-footer"},ut=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function ht(o,d,c,p,e,u){return r(),n("div",A,[t("div",I,[t("div",S,[T,t("div",U,[t("div",N,[t("div",j,[R,t("table",q,[e.tempOrder.user?(r(),n("tbody",F,[t("tr",null,[H,t("td",null,s(e.tempOrder.user.name),1)]),t("tr",null,[z,t("td",null,s(e.tempOrder.user.email),1)]),t("tr",null,[G,t("td",null,s(e.tempOrder.user.tel),1)]),t("tr",null,[J,t("td",null,s(e.tempOrder.user.address),1)])])):O("",!0)])]),t("div",K,[Q,t("table",W,[t("tbody",null,[t("tr",null,[X,t("td",null,s(e.tempOrder.id),1)]),t("tr",null,[Y,t("td",null,s(o.$filters.date(e.tempOrder.create_at)),1)]),t("tr",null,[Z,t("td",null,[e.tempOrder.paid_date?(r(),n("span",tt,s(o.$filters.date(e.tempOrder.paid_date)),1)):(r(),n("span",et,"時間不正確"))])]),t("tr",null,[ot,t("td",null,[e.tempOrder.is_paid?(r(),n("strong",st,"已付款")):(r(),n("span",rt,"尚未付款"))])]),t("tr",null,[nt,t("td",null,s(o.$filters.currency(e.tempOrder.total)),1)])])]),lt,t("table",dt,[it,t("tbody",null,[(r(!0),n(_,null,y(e.tempOrder.products,i=>(r(),n("tr",{key:i.id},[t("th",null,s(i.product.title),1),t("td",null,s(i.qty)+" / "+s(i.product.unit),1),t("td",at,s(o.$filters.currency(i.final_total)),1)]))),128))])])])])]),t("div",ct,[ut,t("button",{type:"button",class:"btn btn-primary",onClick:d[0]||(d[0]=i=>o.$emit("update-order",e.tempOrder))},"確認")])])])],512)}const pt=P(E,[["render",ht]]);var _t={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:b,VITE_APP_PATH:g}=_t,mt={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:V,DelModal:x,OrderModal:pt},methods:{getOrders(o=1){this.currentPage=o;const d=`${b}api/${g}/admin/orders?page=${o}`;this.isLoading=!0,this.$http.get(d,this.tempProduct).then(c=>{this.orders=c.data.orders,this.pagination=c.data.pagination,this.isLoading=!1})},openModal(o){this.tempOrder={...o},this.$refs.orderModal.showModal()},openDelOrderModal(o){this.tempOrder={...o},this.$refs.delModal.showModal()},updatePaid(o){this.isLoading=!0;const d=`${b}api/${g}/admin/order/${o.id}`,c={is_paid:o.is_paid};this.$http.put(d,{data:c}).then(p=>{this.isLoading=!1,p.data.success?(this.getOrders(this.currentPage),h.fire({position:"top-end",icon:"success",title:"更新付款狀態成功",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})):h.fire({position:"top-end",icon:"error",title:"更新付款狀態失敗",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})}).catch(p=>{h.fire({position:"top-end",icon:"error",title:`${p.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})},delOrder(){const o=`${b}api/${g}/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(o).then(d=>{this.isLoading=!1,this.$refs.delModal.hideModal(),d.data.success?(h.fire({position:"top-end",icon:"success",title:"刪除成功",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0}),this.getOrders(this.currentPage)):h.fire({position:"top-end",icon:"error",title:"刪除失敗",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})}).catch(d=>{h.fire({position:"top-end",icon:"error",title:`${d.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}},created(){this.getOrders()}},ft={class:"table mt-4"},bt=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),gt=["textContent"],Ot={class:"list-unstyled"},yt={class:"text-right"},Pt={class:"form-check form-switch"},kt=["id","onUpdate:modelValue","onChange"],$t=["for"],Ct={key:0},Mt={key:1},vt={class:"btn-group"},wt=["onClick"],xt=["onClick"];function Bt(o,d,c,p,e,u){const i=m("LoadingVue"),k=m("OrderModal"),$=m("DelModal"),C=m("Pagination");return r(),n(_,null,[f(i,{active:e.isLoading,loader:"spinner",color:"#fca311",width:70,height:70},null,8,["active"]),t("table",ft,[bt,t("tbody",null,[(r(!0),n(_,null,y(e.orders,(l,M)=>(r(),n(_,{key:M},[e.orders.length?(r(),n("tr",{key:0,class:B({"text-secondary":!l.is_paid})},[t("td",null,s(o.$filters.date(l.create_at)),1),t("td",null,[l.user?(r(),n("span",{key:0,textContent:s(l.user.email)},null,8,gt)):O("",!0)]),t("td",null,[t("ul",Ot,[(r(!0),n(_,null,y(l.products,(a,v)=>(r(),n("li",{key:v},s(a.product.title)+" 數量："+s(a.qty)+" "+s(a.product.unit),1))),128))])]),t("td",yt,s(l.total),1),t("td",null,[t("div",Pt,[L(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${l.id}`,"onUpdate:modelValue":a=>l.is_paid=a,onChange:a=>u.updatePaid(l)},null,40,kt),[[D,l.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${l.id}`},[l.is_paid?(r(),n("span",Ct,"已付款")):(r(),n("span",Mt,"未付款"))],8,$t)])]),t("td",null,[t("div",vt,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:a=>u.openModal(l)},"檢視",8,wt),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:a=>u.openDelOrderModal(l)},"刪除",8,xt)])])],2)):O("",!0)],64))),128))])]),f(k,{order:e.tempOrder,ref:"orderModal",onUpdatePaid:u.updatePaid},null,8,["order","onUpdatePaid"]),f($,{item:e.tempOrder,ref:"delModal",onDelItem:u.delOrder},null,8,["item","onDelItem"]),f(C,{pages:e.pagination,onEmitPages:u.getOrders},null,8,["pages","onEmitPages"])],64)}const Et=P(mt,[["render",Bt]]);export{Et as default};
