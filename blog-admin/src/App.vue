<template>
  <app-nav />
  <div class="main">
    <div class="aside">
      <app-aside />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import AppNav from "@/components/AppNav";
import AppAside from "@/components/AppAside";
export default {
  name: "app",
  components: {
    AppNav,
    AppAside,
  },
};
</script>
<style lang="less" >
body {
  background: url("./assets/images/background/bg-left.png") no-repeat 0 50px
      fixed,
    url("./assets/images/background/bg-right.png") no-repeat right 50px fixed;
  background-color: #f2f2f2;
}
.main {
  display: flex;
  max-width: 1200px;
  margin: 65px auto;
  .aside {
    width: 270px;
    flex: 0 0 270px;
    margin-right: 15px;
  }
  .content {
    width: 100%;
  }
}
</style>
