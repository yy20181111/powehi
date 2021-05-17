<template>
  <div class="container">
    <div class="header">
      <div class="logo">POWEHI</div>
    </div>
    <div class="content">
      <div class="chatBox">
        <div class="fx user">
          用户：<el-input
            v-model="input"
            style="width: 450px"
            placeholder="请输入被举报人用户ID"
          ></el-input>
        </div>
        <div class="fx reason">
          原因：
          <el-input
            type="textarea"
            placeholder="请输入举报原因.."
            v-model="reason"
          >
          </el-input>
        </div>
        <div class="btn">
          <div class="return bt" @click="tochat">返回</div>
          <div class="emit bt" @click='ok'>提交</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      reason: "",
    };
  },
  methods:{
    tochat(){
      this.$router.push("/Match")
    },
    ok(){
alert('已举报')
  this.$router.push("/Match")
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  .fx {
    display: flex;
    margin-left: 50px;
  }
  .header {
    height: 122px;
    width: 100%;
    background-image: linear-gradient(to right, #767aff, #e1a5ff);

    .logo {
      color: white;
      font-family: "Microsoft YaHei UI";
      font-size: 70px;
      font-weight: bold;
      line-height: 122px;
      margin-left: 40px;
      margin-right: 77px;
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 122px);
    background: url("../../assets/images/bgmatch.gif") no-repeat fixed 0 -10px;
    background-size: cover;
    overflow: hidden;
    display: flex;
    .chatBox {
      height: 390px;
      width: 600px;
      margin: 50px auto;
      padding: 50px 40px 13px 6px;
      background-color: #765dbb;
      border-radius: 80px;
      border: 5px solid #fff;
      color: #fff;
      font-weight: 700;
      .user {
        align-items: center;
      }
      .reason {
        margin-top: 20px;
      }
      .btn {
        width: 170px;
        height: 50px;
        margin-top: 15px;
        margin-right: 15px;
        float: right;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        .bt{
          color:#765dbb;
          background-color: #fff;
          font-size: 20px;
          font-weight: 700;
          border-radius: 25px;
          padding:5px 18px;
          cursor: pointer;
        }
      }
    }
  }
  /deep/ .el-textarea__inner {
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    border-radius: 15px;
    border: 2px solid #fff;
    height: 250px;
  }
  /deep/ .el-input__inner {
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    border-radius: 15px;
    border: 2px solid #fff;
  }
  /deep/ .el-textarea {
    width: 450px;
  }
}
</style>
