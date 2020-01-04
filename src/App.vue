<template>
  <div id="app" style="height: 100%">
    <el-container style="width:100%;height: 100%">
      <nav-menu/>
      <el-container>
      <el-header class="header">
        <v-header/>
      </el-header>
        <a-bread-crumb></a-bread-crumb>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from '@/components/NavMenu'
  import Header from '@/components/Header'
  import ABreadCrumb from '@/components/A-BreadCrumb'
  export default {
    name: 'app',
    components: {
      'navMenu': NavMenu,
      'vHeader': Header,
      'aBreadCrumb':ABreadCrumb
    }
  }

</script>

<style>

  .header {
    background-color: #fff;
    /*color: #fff;*/
    margin-bottom: 3px;
    height: 60px;
    line-height: 60px;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }

  html,body,#app,.el-container{
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0;
    /*外部间距也是如此设置*/
    margin: 0;
    /*统一设置高度为100%*/
    height: 100%;
    background-color: #f0f2f5;
  }
  .container {

  }
</style>
