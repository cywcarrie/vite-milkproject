import{V as C}from"./VueLoading-Ca-cu07Q.js";import{m as x,D as L}from"./DelModal-BJA_kp2_.js";import{_ as P,o as l,c as n,a as t,t as o,k as O,F as p,j as y,S as _,r as m,b,n as V,f as w,E as D}from"./index-Cxg8NEl6.js";import{P as E}from"./PaginationComponent-BcePHMEc.js";const A={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[x],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},I={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},S={class:"modal-dialog modal-xl",role:"document"},T={class:"modal-content border-0"},N=t("div",{class:"modal-header bg-primary text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},B={class:"row"},j={class:"col-md-4"},R=t("h3",null,"用戶資料",-1),q={class:"table"},F={key:0},H=t("th",{class:"order-modal-table"},"姓名",-1),z=t("th",null,"Email",-1),G=t("th",null,"電話",-1),J=t("th",null,"地址",-1),K={class:"col-md-8"},Q=t("h3",null,"訂單細節",-1),W={class:"table"},X=t("th",{class:"order-modal-table"},"訂單編號",-1),Y=t("th",null,"下單時間",-1),Z=t("th",null,"付款時間",-1),tt={key:0},et={key:1},st=t("th",null,"付款狀態",-1),ot={key:0,class:"text-success"},lt={key:1,class:"text-muted"},nt=t("th",null,"總金額",-1),dt=t("h3",null,"選購商品",-1),rt={class:"table"},at=t("thead",null,[t("tr")],-1),it={class:"text-end"},ct={class:"modal-footer"},ut=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function _t(s,r,c,h,e,u){return l(),n("div",I,[t("div",S,[t("div",T,[N,t("div",U,[t("div",B,[t("div",j,[R,t("table",q,[e.tempOrder.user?(l(),n("tbody",F,[t("tr",null,[H,t("td",null,o(e.tempOrder.user.name),1)]),t("tr",null,[z,t("td",null,o(e.tempOrder.user.email),1)]),t("tr",null,[G,t("td",null,o(e.tempOrder.user.tel),1)]),t("tr",null,[J,t("td",null,o(e.tempOrder.user.address),1)])])):O("",!0)])]),t("div",K,[Q,t("table",W,[t("tbody",null,[t("tr",null,[X,t("td",null,o(e.tempOrder.id),1)]),t("tr",null,[Y,t("td",null,o(s.$filters.date(e.tempOrder.create_at)),1)]),t("tr",null,[Z,t("td",null,[e.tempOrder.paid_date?(l(),n("span",tt,o(s.$filters.date(e.tempOrder.paid_date)),1)):(l(),n("span",et,"時間不正確"))])]),t("tr",null,[st,t("td",null,[e.tempOrder.is_paid?(l(),n("strong",ot,"已付款")):(l(),n("span",lt,"尚未付款"))])]),t("tr",null,[nt,t("td",null,o(s.$filters.currency(e.tempOrder.total)),1)])])]),dt,t("table",rt,[at,t("tbody",null,[(l(!0),n(p,null,y(e.tempOrder.products,a=>(l(),n("tr",{key:a.id},[t("th",null,o(a.product.title),1),t("td",null,o(a.qty)+" / "+o(a.product.unit),1),t("td",it,o(s.$filters.currency(a.final_total)),1)]))),128))])])])])]),t("div",ct,[ut,t("button",{type:"button",class:"btn btn-primary",onClick:r[0]||(r[0]=a=>s.$emit("update-order",e.tempOrder))}," 確認 ")])])])],512)}const ht=P(A,[["render",_t]]);var pt={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:f,VITE_APP_PATH:g}=pt,mt={components:{VueLoading:C,Pagination:E,DelModal:L,OrderModal:ht},data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},methods:{getOrders(s=1){this.currentPage=s;const r=`${f}api/${g}/admin/orders?page=${s}`;this.isLoading=!0,this.$http.get(r,this.tempProduct).then(c=>{this.orders=c.data.orders,this.pagination=c.data.pagination,this.isLoading=!1})},openModal(s){this.tempOrder={...s},this.$refs.orderModal.showModal()},openDelOrderModal(s){this.tempOrder={...s},this.$refs.delModal.showModal()},updatePaid(s){const r=`${f}api/${g}/admin/order/${s.id}`,c={is_paid:s.is_paid};this.isLoading=!0,this.$http.put(r,{data:c}).then(h=>{this.isLoading=!1,h.data.success?(this.getOrders(this.currentPage),_("success","更新付款狀態成功")):_("error","更新付款狀態失敗")}).catch(h=>{_("error",`${h.response.data.message}`)})},delOrder(){const s=`${f}api/${g}/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(s).then(r=>{this.isLoading=!1,this.$refs.delModal.hideModal(),r.data.success?(_("success","刪除成功"),this.getOrders(this.currentPage)):_("error","刪除失敗")}).catch(r=>{_("error",`${r.response.data.message}`)})}},created(){this.getOrders()}},bt={class:"table mt-4"},ft=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),gt=["textContent"],Ot={class:"list-unstyled"},yt={class:"text-right"},Pt={class:"form-check form-switch"},$t=["id","onUpdate:modelValue","onChange"],kt=["for"],Mt={key:0},vt={key:1},Ct={class:"btn-group"},xt=["onClick"],Lt=["onClick"];function Vt(s,r,c,h,e,u){const a=m("VueLoading"),$=m("OrderModal"),k=m("DelModal"),M=m("Pagination");return l(),n(p,null,[b(a,{active:e.isLoading},null,8,["active"]),t("table",bt,[ft,t("tbody",null,[(l(!0),n(p,null,y(e.orders,d=>(l(),n(p,{key:`orders ${d.id}`},[e.orders.length?(l(),n("tr",{key:0,class:V({"text-secondary":!d.is_paid})},[t("td",null,o(s.$filters.date(d.create_at)),1),t("td",null,[d.user?(l(),n("span",{key:0,textContent:o(d.user.email)},null,8,gt)):O("",!0)]),t("td",null,[t("ul",Ot,[(l(!0),n(p,null,y(d.products,(i,v)=>(l(),n("li",{key:v},o(i.product.title)+" 數量："+o(i.qty)+" "+o(i.product.unit),1))),128))])]),t("td",yt,o(d.total),1),t("td",null,[t("div",Pt,[w(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${d.id}`,"onUpdate:modelValue":i=>d.is_paid=i,onChange:i=>u.updatePaid(d)},null,40,$t),[[D,d.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${d.id}`},[d.is_paid?(l(),n("span",Mt,"已付款")):(l(),n("span",vt,"未付款"))],8,kt)])]),t("td",null,[t("div",Ct,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:i=>u.openModal(d)}," 檢視 ",8,xt),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:i=>u.openDelOrderModal(d)}," 刪除 ",8,Lt)])])],2)):O("",!0)],64))),128))])]),b($,{order:e.tempOrder,ref:"orderModal",onUpdatePaid:u.updatePaid},null,8,["order","onUpdatePaid"]),b(k,{item:e.tempOrder,ref:"delModal",onDelItem:u.delOrder},null,8,["item","onDelItem"]),b(M,{pages:e.pagination,onEmitPages:u.getOrders},null,8,["pages","onEmitPages"])],64)}const It=P(mt,[["render",Vt]]);export{It as default};