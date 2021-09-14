<template>
  <div class="appnav">
    <div class="appmain">
      <div class="logo">
        <a href="/" title="个人博客"></a>
      </div>
      <ul class="apptab">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/article">文章</router-link></li>
        <li><router-link to="/message">留言</router-link></li>
        <li><router-link to="/link">友链</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
      <div class="login">
        <el-button type="primary" size="small">登录/注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNav",
};
</script>

<style lang="less" scoped>
.appnav {
  width: 100%;
  height: 50px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  .appmain {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  .logo {
    width: 50px;
    height: 50px;

    a {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: url("../..//assets/logo.png") no-repeat center/cover;
    }
  }
  .apptab {
    display: flex;
    li {
      padding: 0 10px;
      a {
        display: block;
        height: 50px;
        line-height: 50px;
        padding: 0 30px;
        color: #000;
        border-bottom: 3px solid transparent;
        &.router-link-active {
          color: #409eff;
          border-bottom-color: #409eff;
        }
        &:hover {
          color: #409eff;
        }
      }
    }
  }
  .login{
    display: flex;
    align-items: center;
  }
}
</style>