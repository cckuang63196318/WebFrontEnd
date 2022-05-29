# HCM Web UI
## Package & Tool Install
1. Install Nodejs 16 LTS for Use "npm" tool
2. Install Vue package - npm install vue
3. Install HCMebUI package - npm install (先Clone /HCMWebUI 專案目錄並在專案目錄中執行, 若專案中有node_modules可跳過此步驟抓取專案相依package)
4.  編輯IDE - VS Code (開啟HCMWebUI文件夾)

## 本機端專案啟動測試
1. npm run dev

## Online佈屬
1. npm run build:prod
2. 將產生的文件夾 /dist 內容複製到Web Server (Nginx Server or Container)

## Online佈署到Innolux Cloud (*DNS : thcm.cminl.oa*)
1. 在專案目錄中建立Dockerfile
2. npm run build:prod
3. docker build -t hcmwebuiimg . --no-cache
4. docker save -o hcmwebuiimg.tar hcmwebuiimg
5. hcmwebuiimg.tar 依上雲流程上傳到Harbor及啟動Container Service


## 專案開發結構說明
* 新增Web Page
1. /view 新增newPage.vue (依/OM, /PA, /PT...階層結構新增)
2. /api 新增相對的Web API function (依/OM, /PA, /PT...結構。注意URL設定值for OM,PA,PT...process.env.VUE_APP_OM_BASE_API, process.env.VUE_APP_PA_BASE_API)
3. /router newPage.vue相對的Component設定 (若role屬性與SAM V4的URL依樣, 可在右邊菜單中顯示)
4. SAM V4 Console新增new Page (注意URL設定與route中的role屬性要一致)

* 本機開發模擬資料測試 (攔截Web API Send並回覆內容)
1. /mock中 (在相對的OM, PA, PT中設定攔截的URL, Method, Response...)
2. 注意相同Method的URL在檔案中的順序(/AAAA/BBBB要排在/AAAA前)

***
## 基礎學習內容
* Vue 框架
1. Vue Component (template, script, css 組成)
```
<template>
    <el-input />
    ....
</template>

<script>
    ...
</script>

<style scoped>
    .form-bottom{
        text-align: right;
    }
</style>
```
2. Vue Router (SPA Page Control)
3. Vuex (響應式全域變數)

* 專案樣板 ue-element-admin (admin template)

* 專案使用UI元件 element-ui



