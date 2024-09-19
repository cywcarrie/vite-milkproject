# Funnie Milk - 鮮乳購物電商網站

## 專案說明

### Demo Website : [Link](https://cywcarrie.github.io/vite-milkproject/#/)

模擬電商網站，使用者可以將商品加入購物車、新增或刪除商品和送出訂單，以及可以輸入關鍵字搜尋商品，並且可以瀏覽個別商品的詳細資訊。後台則提供新增或修改商品和優惠券的功能。

## 使用技術

- 使用 Vue.js 框架搭配 Vite 和 Pinia 建立專案
- 引入 Vue Router 和 Vue Axios 等套件，以實現路由管理和 API 請求功能
- 配置 ESLint 符合 Standard 規範，確保程式碼品質
- 透過 Pinia 進行狀態管理，負責跨元件的數據操作與共享
- 使用 Bootstrap 5 和 SCSS 打造響應式界面，提升使用者體驗

## 網站功能

- 前台
   - 首頁
   - 商品列表：商品分類、用關鍵字搜尋商品
   - 商品詳情
   - 購物車：新增、刪除、修改商品功能
   - 結帳：建立及送出訂單
- 後台
   - 商品管理：新增、修改、刪除商品及上傳商品圖片功能
   - 訂單管理：新增、修改、刪除商品功能
   - 優惠券管理：新增、修改、刪除商品功能

## 安裝套件

```sh
npm install
```

### 運行專案

```sh
npm run dev
```

### 打包專案

```sh
npm run build
```

### 部署專案

```sh
sh deploy.sh
```

## 專案套件

- vue - v3.4.21
- vite - v5.1.6
- pinia - v2.1.7
- vue-router - v4.3.0
- axios - v1.6.8
- vue-axios - v3.5.2
- vue-loading-overlay - v6.0
- sweetalert2 - v11.10.8
- aos - v2.3.4
- swiper - v11.1.1
- vee-validate - v4.12.6
- bootstrap - v5.3.3
- bootstrap-icons - v1.11.3

## 使用版本

- Node.js - v18.16.1
- npm - v9.5.1
