<template>
  <div>
    <personal />
    <hot-article />
    <visitor />
  </div>
</template>

<script>
import Personal from "./Personal.vue";
import HotArticle from "./HotArticle.vue";
import Visitor from "./Visitor.vue";
export default {
  name: "AppAside",
  components: {
    Personal,
    HotArticle,
    Visitor,
  },
};
</script>

<style>
</style>