<template>
  <div class="container">
    <div class="header">
      <div class="logo">POWEHI</div>
      <div class="nav">
        <router-link tag="div" class="nav-item" active-class="active" :to="item.path" v-for="item in navList" :key="item.title"
        >{{ item.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "首页",
          src: require("../assets/images/u1.gif"),
          path: "/home"
        },
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
    toRouter(item) {
      this.$router.push({ path: item.path });
    }
  }
};
</script>



<style lang="less" scoped>
.header {
  display: flex;
  width: 100%;
  height: 122px;
  background-image: linear-gradient(to right, #767aff, #e1a5ff);
  .logo {
    // width: 324px;
    // height: 59px;
    color: white;
    font-family: "Microsoft YaHei UI";
    font-size: 70px;
    font-weight: bold;
    line-height: 122px;
    margin-left: 40px;
    margin-right: 77px;
  }
  .nav {
    display: flex;
    align-items: center;
    margin-top: 25px;
    .nav-item {
      margin-right: 40px;
      font-weight: 700;
      font-size: 24px;
      color: #fff;
      cursor: pointer;
      padding: 8px 20px;

      &.active {
        background-color: #fff;
        border-radius: 25px;
        color: #9d8afe;
      }
    }
  }
}
</style>
