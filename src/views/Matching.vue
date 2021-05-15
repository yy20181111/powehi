<template>
  <div class="match-container">
    <Header></Header>
    <!-- 开始匹配页 -->

    <div class="match-content">
      <!-- 开始匹配框 -->
      <div class="box">
        <div class="match">开始匹配</div>
        <div class="add" @click="dialogVisible = true">添加标签</div>
      </div>
      <!-- 添加弹出框 -->
      <el-dialog
        title="请选择要添加的分类"
        :visible.sync="dialogVisible"
        width="30%"
      >
        <!-- 选择器 -->
        <el-select v-model="value" placeholder="请选择" @change="selectChanged">
          <el-option
            v-for="item in options"
            :key="item.index"
            :label="item.label"
            :value="item"
          ></el-option>
        </el-select>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addIcon()">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 动态添加小标签 -->
      <div
        class="icon"
        v-for="item in arr"
        :key="item.label"
        :class="item.value"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
export default {
  data() {
    return {
      dialogVisible: false,
      arr: [],
      options: [
        {
          value: "sm",
          label: "私密",
        },
        {
          value: "fz",
          label: "肥宅快乐",
        },
        {
          value: "ym",
          label: "隐秘角落",
        },
        {
          value: "tx",
          label: "同性恋",
        },
        {
          value: "wy",
          label: "午夜失眠",
        },
        {
          value: "sg",
          label: "我是帅哥",
        },
        {
          value: "mv",
          label: "我是美女",
        },
        {
          value: "wz",
          label: "王者荣耀",
        },
      ],
      value: "",
    };
  },
  methods: {
    selectChanged(value) {
      console.log(value);
    },

    addIcon() {
      this.dialogVisible = false;
      if (this.arr.indexOf(this.value) > -1) {
        return;
      } else {
        this.arr.push(this.value);
      }

      // console.log("你是猪");
    },
  },
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
.match-container {
  height: 100%;
}
.match-content {
  width: 100%;
  height: calc(100% - 122px);
  // background-image: url("../assets/images/bg2.png");
  background: url("../assets/images/bg2.png") no-repeat fixed 0 0;
  background-size: cover;
  overflow: hidden;
  position: relative;
  .box {
    width: 668px;
    height: 485px;
    background-color: #8870e0;
    border-radius: 25px;
    position: absolute;
    top: 120px;
    left: 50%;
    margin-left: -383px;
    overflow: hidden;
    opacity: 0.99;
    box-shadow: #8870e0 -2px -3px 5px 5px; //边框阴影
    .match {
      width: 405px;
      height: 125px;
      margin: 0 auto;
      margin-top: 120px;
      border: 3px solid #fff;
      border-radius: 70px;
      color: #fff;
      font-size: 77px;
      text-align: center;
      line-height: 125px;
      font-weight: 700;
      letter-spacing: 5px;
      cursor: pointer;
    }
    .add {
      width: 160px;
      height: 30px;
      margin: 0 auto;
      margin-top: 80px;
      border: 3px solid #fff;
      border-radius: 25px;
      color: #fff;
      font-size: 20px;
      text-align: center;
      line-height: 30px;
      font-weight: 700;
      letter-spacing: 3px;
      cursor: pointer;
    }
  }
  // 动态添加小标签
  .icon {
    // display: none;
    position: fixed;
    width: 150px;
    height: 50px;
    background-image: linear-gradient(to right, #e5e5e5, #6348c9);
    border-radius: 25px;
    box-shadow: #8870e0 3px 3px 8px 2px;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
    letter-spacing: 5px;
    color: #fff;
    opacity: 0.88;
  }
  .sm {
    top: 266px;
    left: 205px;
  }
  .fz {
    top: 457px;
    left: 74px;
  }
  .ym {
    top: 673px;
    left: 278px;
  }
  .tx {
    bottom: 100px;
    left: 550px;
  }
  .wy {
    bottom: 131px;
    right: 647px;
  }
  .sg {
    bottom: 233px;
    right: 134px;
  }
  .mv {
    top: 470px;
    right: 300px;
  }
  .wz {
    top: 202px;
    right: 420px;
  }
}
</style>