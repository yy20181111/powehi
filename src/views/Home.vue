<template>
  <div style="height: 100%" class="container">
    <div class="side-bar">
      <div class="uItem" v-for="(item,path) in sideImg" :key="path" @click="goRouter(item)">
        <img :src="item.src" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideImg: [
        {
          title: "开始匹配",
          src: require("../assets/images/u1.gif"),
          path: "/matching"
        },
        {
          title: "话题小馆",
          src: require("../assets/images/u2.gif"),
          path: "/topic"
        },
        {
          title: "个人中心",
          src: require("../assets/images/u3.gif"),
          path: "/personal"
        },
        {
          title: "关于我们",
          src: require("../assets/images/u4.gif"),
          path: "/about"
        }
      ]
    };
  },
  methods: {
    goRouter(item) {
      this.$router.push({ path: item.path });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  background-image: url("../assets/images/bg.png");
  overflow: hidden;
  .side-bar {
    width: 191px;
    height: 553px;
    margin-top: 320px;
    margin-left: 101px;
    .uItem {
      width: 191px;
      height: 62px;
      margin-bottom: 82px;
      cursor: pointer;
    }
  }
}
</style>