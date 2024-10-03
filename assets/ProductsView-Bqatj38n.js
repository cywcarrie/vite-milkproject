import{m as A,D as E}from"./DelModal-BWybEndV.js";import{_ as M,o as n,c as d,a as t,f as r,v as u,F as y,j as V,k as x,E as U,e as k,S as p,r as h,b,t as P}from"./index-CN3PlUx3.js";import{P as B}from"./PaginationComponent-CZcxSRV0.js";var I={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:D,VITE_APP_PATH:T}=I,$={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const l=this.$refs.fileInput.files[0],o=new FormData;o.append("file-to-upload",l);const i=`${D}api/${T}/admin/upload`;this.$http.post(i,o).then(m=>{m.data.success&&(this.tempProduct.imageUrl=m.data.imageUrl)})}},mixins:[A]},L={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},F={class:"modal-dialog modal-xl",role:"document"},S={class:"modal-content border-0"},j=t("div",{class:"modal-header bg-primary text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn btn-close btn-secondary","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},R={class:"row"},H={class:"col-sm-4"},O={class:"mb-3"},q=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),z={class:"mb-3"},G=t("label",{for:"customFile",class:"form-label"},[k("或 上傳圖片 "),t("i",{class:"fas fa-spinner fa-spin"})],-1),J=["src","alt"],K={key:0,class:"mt-5"},Q=["onUpdate:modelValue"],W=["src","alt"],X=["onClick"],Y={key:0},Z={class:"col-sm-8"},tt={class:"mb-3"},et=t("label",{for:"title",class:"form-label"},"標題",-1),ot={class:"row gx-2"},st={class:"mb-3 col-md-6"},lt=t("label",{for:"category",class:"form-label"},"分類",-1),it={class:"mb-3 col-md-6"},rt=t("label",{for:"price",class:"form-label"},"單位",-1),nt={class:"row gx-2"},dt={class:"mb-3 col-md-6"},ct=t("label",{for:"origin_price",class:"form-label"},"原價",-1),at={class:"mb-3 col-md-6"},ut=t("label",{for:"price",class:"form-label"},"售價",-1),pt=t("hr",null,null,-1),mt={class:"mb-3"},_t=t("label",{for:"description",class:"form-label"},"產品描述",-1),ft={class:"mb-3"},ht=t("label",{for:"content",class:"form-label"},"說明內容",-1),bt={class:"mb-3"},Pt={class:"form-check"},gt=t("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),vt={class:"modal-footer"},yt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function xt(l,o,i,m,e,c){return n(),d("div",L,[t("div",F,[t("div",S,[j,t("div",N,[t("div",R,[t("div",H,[t("div",O,[q,r(t("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),placeholder:"請輸入圖片連結"},null,512),[[u,e.tempProduct.imageUrl]])]),t("div",z,[G,t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:o[1]||(o[1]=(...s)=>c.uploadFile&&c.uploadFile(...s))},null,544)]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl,alt:`${e.tempProduct.title} 圖片`},null,8,J),e.tempProduct.images?(n(),d("div",K,[(n(!0),d(y,null,V(e.tempProduct.images,(s,_)=>(n(),d("div",{class:"mb-3 input-group",key:_},[r(t("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":f=>e.tempProduct.images[_]=f,placeholder:"請輸入連結"},null,8,Q),[[u,e.tempProduct.images[_]]]),t("div",null,[t("img",{class:"img-fluid",src:s,alt:`${e.tempProduct.title} 圖片`},null,8,W)]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:f=>e.tempProduct.images.splice(_,1)}," 移除 ",8,X)]))),128)),e.tempProduct.images[e.tempProduct.images.length-1]||!e.tempProduct.images.length?(n(),d("div",Y,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",type:"button",onClick:o[2]||(o[2]=s=>e.tempProduct.images.push(""))}," 新增圖片 ")])):x("",!0)])):x("",!0)]),t("div",Z,[t("div",tt,[et,r(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.title=s),placeholder:"請輸入標題"},null,512),[[u,e.tempProduct.title]])]),t("div",ot,[t("div",st,[lt,r(t("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.category=s),placeholder:"請輸入分類"},null,512),[[u,e.tempProduct.category]])]),t("div",it,[rt,r(t("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.unit=s),placeholder:"請輸入單位"},null,512),[[u,e.tempProduct.unit]])])]),t("div",nt,[t("div",dt,[ct,r(t("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.origin_price=s),placeholder:"請輸入原價"},null,512),[[u,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",at,[ut,r(t("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.price=s),placeholder:"請輸入售價"},null,512),[[u,e.tempProduct.price,void 0,{number:!0}]])])]),pt,t("div",mt,[_t,r(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.description=s),placeholder:"請輸入產品描述"},null,512),[[u,e.tempProduct.description]])]),t("div",ft,[ht,r(t("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.content=s),placeholder:"請輸入產品說明內容"},null,512),[[u,e.tempProduct.content]])]),t("div",bt,[t("div",Pt,[r(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.is_enabled=s),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[U,e.tempProduct.is_enabled]]),gt])])])])]),t("div",vt,[yt,t("button",{type:"button",class:"btn btn-primary",onClick:o[11]||(o[11]=s=>l.$emit("update-product",e.tempProduct))}," 確認 ")])])])],512)}const Mt=M($,[["render",xt]]);var Vt={VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb",BASE_URL:"/vite-milkproject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API:g,VITE_APP_PATH:v}=Vt,kt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:Mt,DelModal:E,Pagination:B},methods:{getProducts(l=1){const o=`${g}api/${v}/admin/products/?page=${l}`;this.isLoading=!0,this.$http.get(o).then(i=>{this.isLoading=!1,i.data.success&&(this.products=i.data.products,this.pagination=i.data.pagination)}).catch(i=>{p.fire({position:"top-end",icon:"error",title:`${i.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})},openModal(l,o){l?this.tempProduct={}:this.tempProduct={...o},this.isNew=l,this.$refs.productModal.showModal()},updateProduct(l){this.tempProduct=l;let o=`${g}api/${v}/admin/product`,i="post";this.isNew||(o=`${g}api/${v}/admin/product/${l.id}`,i="put");const m=this.$refs.productModal;this.$http[i](o,{data:this.tempProduct}).then(e=>{m.hideModal(),e.data.success?(this.getProducts(),p.fire({position:"top-end",icon:"success",title:"更新成功",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})):p.fire({position:"top-end",icon:"error",title:"更新失敗",text:e.data.message.join("、"),timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})}).catch(e=>{p.fire({position:"top-end",icon:"error",title:`${e.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})},openDelProductModal(l){this.tempProduct={...l},this.$refs.delModal.showModal()},delProduct(){const l=`${g}api/${v}/admin/product/${this.tempProduct.id}`,o=this.$refs.delModal;this.$http.delete(l).then(i=>{o.hideModal(),i.data.success?(this.getProducts(),p.fire({position:"top-end",icon:"success",title:"刪除商品成功",timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})):p.fire({position:"top-end",icon:"error",title:"刪除商品失敗",text:i.data.message.join("、"),timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})}).catch(i=>{p.fire({position:"top-end",icon:"error",title:`${i.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}},created(){this.getProducts()}},wt={class:"text-end mt-3"},Ct=t("i",{class:"bi bi-plus-lg pe-1"},null,-1),At={class:"table mt-4"},Et=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否上架"),t("th",{width:"200"},"編輯")])],-1),Ut={class:"text-right"},Bt={class:"text-right"},It={key:0,class:"text-success"},Dt={key:1,class:"text-muted"},Tt={class:"btn-group"},$t=["onClick"],Lt=["onClick"];function Ft(l,o,i,m,e,c){const s=h("LoadingVue"),_=h("Pagination"),f=h("ProductModal"),w=h("DelModal");return n(),d(y,null,[b(s,{active:e.isLoading,loader:"spinner",color:"#fca311",width:70,height:70},null,8,["active"]),t("div",wt,[t("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=a=>c.openModal(!0))},[Ct,k("新增產品 ")])]),t("table",At,[Et,t("tbody",null,[(n(!0),d(y,null,V(e.products,a=>(n(),d("tr",{key:a.id},[t("td",null,P(a.category),1),t("td",null,P(a.title),1),t("td",Ut,P(l.$filters.currency(a.origin_price)),1),t("td",Bt,P(l.$filters.currency(a.price)),1),t("td",null,[a.is_enabled?(n(),d("span",It,"上架")):(n(),d("span",Dt,"未上架"))]),t("td",null,[t("div",Tt,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:C=>c.openModal(!1,a)}," 編輯 ",8,$t),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:C=>c.openDelProductModal(a)}," 刪除 ",8,Lt)])])]))),128))])]),b(_,{pages:e.pagination,onEmitPages:c.getProducts},null,8,["pages","onEmitPages"]),b(f,{ref:"productModal",product:e.tempProduct,onUpdateProduct:c.updateProduct},null,8,["product","onUpdateProduct"]),b(w,{item:e.tempProduct,ref:"delModal",onDelItem:c.delProduct},null,8,["item","onDelItem"])],64)}const Rt=M(kt,[["render",Ft]]);export{Rt as default};