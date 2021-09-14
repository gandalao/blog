<template>
  <div class="personal">
    <div class="baseinfo">
      <img :src="headimg" alt="" />
      <div class="info">
        <h4>个人博客</h4>
        <p>web develop</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal",
  data() {
    return {
      headimg: require("@/assets/logo.png"),
    };
  },
};
</script>

<style lang="less" scoped>
.personal {
  width: 100%;
  height: 220px;
  box-shadow: 0 0 4px #ddd;
  .baseinfo {
    padding-top: 20px;
    background-color: #bfe2e6;
    text-align: center;
    img {
      width: 60px;
      height: 60px;
      border: 2px solid #fff;
      border-radius: 50%;
      vertical-align: middle;
    }
    .info {
      display: inline-block;
      margin-left: 15px;
      text-align: center;
      vertical-align: middle;
      h4 {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 5px;
      }
      p {
        font-size: 14px;
        margin-top: 2px;
        color: #555;
        letter-spacing: 2px;
      }
    }
  }
}
</style>