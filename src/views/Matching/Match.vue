<template>
  <div class="container">
    <div class="header">
      <div class="logo">POWEHI</div>
    </div>
    <div class="content">
      <div class="chatBox">
        <div class="ctbox">
          <div class="ct-l">当前标签:旅游</div>
          <div class="ct-r" @click="tomatching">返回</div>
        </div>
        <div class="chatContainer">
          <!-- 左边聊天部分 -->
          <div class="cct-l">
            <div
              class="cctl-item"
              v-for="item in cctlListIcon"
              :key="item.index"
            >
              <img src="../../assets/images/chaticon_03.gif" />
              <span class="time">{{ item.time }}</span>
              <div class="mes">{{ item.message }}</div>
            </div>
          </div>
          <!-- 右边聊天部分 -->
          <div class="cct-r">
            <div
              class="cctl-item"
              v-for="item in cctlListIconR"
              :key="item.index"
            >
              <img src="../../assets/images/123_03.gif" />
              <span class="time">{{ item.time }}</span>
              <div class="mes">{{ item.message }}</div>
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <div class="bt">
          <div class="iconfont icon-jia"></div>
          <div class="input">
            请输入你要说的话
            <div class="iconfont icon-xiaolian"></div>
          </div>
          <div class="iconfont icon-feiji ml15"></div>
          <div class="pb ml15">屏蔽不雅词汇</div>
          <div class="xh ml15">喜欢</div>
          <div class="jb ml15" @click="toJb">举报</div>
          <div class="dk ml15">断开</div>
          <div class="dkk" >已断开连接,消息发送失败.......</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      cctlListIcon: [
        {
          time: "2022.22.22",
          message: "hi,你好啊",
        },
        {
          time: "2022.22.22",
          message: "哈哈哈我也是",
        },
        {
          time: "2022.22.22",
          message: "对呀你也喜欢吗",
        },
        {
          time: "2022.22.22",
          message: "对呀你也喜欢吗",
        },
        {
          time: "2022.22.22",
          message: "对呀你也喜欢吗",
        },
      ],
      cctlListIconR: [
        {
          time: "1111.11.22.3",
          message: "很高兴认识你",
        },
        {
          time: "2022.22.22",
          message: "你喜欢旅游是吗",
        },
        {
          time: "2022.22.22",
          message: "你去过哪些地方呢",
        },
        {
          time: "2022.22.22",
          message: "你去过哪些地方呢",
        },
        {
          time: "2022.22.22",
          message: "你去过哪些地方呢",
        },
      ],
    };
  },
  methods: {
    tomatching() {
      this.$router.push("/matching");
    },
  
toJb(){
  this.$router.push('/jb')
}
    
  },
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  .ml15{
   margin-left: 15px
  }
  .header {
    height: 122px;
    width: 100%;
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
  }
  .content {
    width: 100%;
    height: calc(100% - 122px);
    background: url("../../assets/images/bgmatch.gif") no-repeat fixed 0 -10px;
    background-size: cover;
    overflow: hidden;
    display: flex;
    .chatBox {
      box-sizing: border-box;
      flex: 1;
      margin: 35px 65px;
      background-color: #765dbb;
      opacity: 0.9;
      border-radius: 80px;
      border: 5px solid #fff;
      .ctbox {
        //当前标签盒子
        height: 50px;
        margin: 20px 60px 20px 60px;
        border: 3px solid #fff;
        border-radius: 55px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        color: #fff;
        font-size: 20px;
        .ct-l {
          letter-spacing: 5px;
        }
        .ct-r {
          width: 75px;
          height: 32px;
          border-radius: 15px;
          background-color: #fff;
          cursor: pointer;
          line-height: 32px;
          text-align: center;
          color: #765dbb;
          &:hover {
            font-weight: 700;
          }
        }
      }
      .chatContainer {
        // border: 3px solid #fff;
        margin: 0 30px;
        height: calc(100% - 170px);
        border-radius: 60px;
        display: flex;
        justify-content: space-between;
        padding: 0 40px;
        overflow: hidden;
        .cct-l {
          padding: 10px 0;
          overflow: hidden;
          .cctl-item {
            color: #fff;
            margin-bottom: 30px;

            img {
              width: 50px;
              height: 35px;
              vertical-align: middle;
            }
            .time {
              margin-left: 15px;
            }
            .mes {
              margin-top: 5px;
              font-size: 25px;
              letter-spacing: 6px;
            }
          }
        }
        .cct-r {
          padding: 30px 0;
          overflow: hidden;
          .cctl-item {
            color: #fff;
            margin-bottom: 30px;

            img {
              width: 50px;
              height: 35px;
              vertical-align: middle;
            }
            .time {
              margin-left: 15px;
            }
            .mes {
              margin-top: 5px;
              font-size: 25px;
              letter-spacing: 6px;
            }
          }
        }
      }
      .bt {
        position: relative;
        width: 95%;
        margin: 0 auto;
        // margin-top: -10px;
        line-height: 50px;
        border-radius: 25px;
        align-items: center;
        height: 50px;
        // border: 3px solid #fff;
        display: flex;
        .dkk{
          // display: none;
          width:300px;
          // height:80px;
          color: #eee;
          position: absolute;
          left:50%;
          margin-left: -155px;
          top: -70px;
        }
    
        .icon-jia {
          font-size: 50px;
          color: #fff;
          margin-left: 15px;
        }
      }
      .input {
        width: 70%;
        height: 50px;
        border: 3px solid #fff;
        color: #fff;
        border-radius: 25px;
        margin-left: 15px;
        padding-left: 25px;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        .icon-xiaolian{
          font-size: 45px;
          font-weight: 700;
          margin-right: 20px;
        }
      }
      .icon-feiji{
        font-size: 25px;
        color: #fff;
      }
      .pb,.xh,.jb,.dk{
        height: 30px;
        background-color: #fff;
        line-height: 30px;
        padding: 0 8px;
        color: #8870E0;
        font-weight: 700;
        border-radius: 15px;
        cursor: pointer;
      }
    }
  }
}
</style>
