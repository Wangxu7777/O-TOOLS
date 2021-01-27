<!--  -->
<template>
  <div class="body_box">
    <div class="logo">
      <img src="../assets/img/a03-1.png" alt="" />
    </div>
    <div class="content">
      <p>HI，{{ this.username }}</p>
      <div class="cell clearfix" @click="kehuPush">
        <div class="left_box">
          <img src="../assets/img/a03-2.png" alt="" />
          <span>客户</span>
        </div>
        <div class="right_box">
          <!-- <i>今日更新五条数据</i><span></span> -->
        </div>
      </div>
      <div class="cell clearfix" @click="chancePush">
        <div class="left_box">
          <img src="../assets/img/a03-3.png" alt="" />
          <span>机会</span>
        </div>
        <div class="right_box"></div>
      </div>
      <div class="cell clearfix" @click="projectPush">
        <div class="left_box">
          <img src="../assets/img/a03-4.png" alt="" />
          <span>项目</span>
        </div>
        <div class="right_box"></div>
      </div>
      <div class="cell clearfix" @click="talkPush">
        <div class="left_box">
          <img src="../assets/img/a03-5.png" alt="" />
          <span>交流</span>
        </div>
        <div class="right_box"></div>
      </div>
      <div class="cell clearfix" @click="weekPush" style="margin-bottom:20px">
        <div class="left_box">
          <img src="../assets/img/a03-6.png" alt="" />
          <span>周报</span>
        </div>
        <!-- <div class="right_box"><i>已经五年没写周报了</i><span></span></div> -->
      </div>
      <div class="cell clearfix" @click="myPush" style="margin-bottom:20px">
        <div class="left_box">
          <img
            style="height:55.2px;width:55.2px"
            src="../assets/img/a01-3.png"
            alt=""
          />
          <span>我的</span>
        </div>
        <!-- <div class="right_box"><i>已经五年没写周报了</i><span></span></div> -->
      </div>
      <van-collapse v-model="activeNames" accordion>
        <div class="yuanjiao">
          <van-collapse-item title="消息" name="1" icon="chat-o">
            <van-swipe-cell>
              <template #left>
                <van-button square type="primary" text="选择" />
              </template>
              <van-cell :border="false" title="单元格" value="内容" />
              <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
              </template>
            </van-swipe-cell>
            <van-swipe-cell>
              <template #left>
                <van-button square type="primary" text="选择" />
              </template>
              <van-cell :border="false" title="单元格" value="内容" />
              <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
              </template>
            </van-swipe-cell>
            <van-swipe-cell>
              <template #left>
                <van-button square type="primary" text="选择" />
              </template>
              <van-cell :border="false" title="单元格" value="内容" />
              <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
              </template>
            </van-swipe-cell>
            <van-swipe-cell>
              <template #left>
                <van-button square type="primary" text="选择" />
              </template>
              <van-cell :border="false" title="单元格" value="内容" />
              <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
              </template>
            </van-swipe-cell>
          </van-collapse-item>
        </div>
        <div class="yuanjiao">
          <van-collapse-item title="待办事项" name="2" icon="notes-o">
            <van-swipe-cell>
              <template #left>
                <van-button square type="primary" text="选择" />
              </template>
              <van-cell :border="false" title="单元格" value="内容" />
              <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
              </template>
            </van-swipe-cell>
            <van-swipe-cell>
              <template #left>
                <van-button square type="primary" text="选择" />
              </template>
              <van-cell :border="false" title="单元格" value="内容" />
              <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
              </template>
            </van-swipe-cell>
            <van-swipe-cell>
              <template #left>
                <van-button square type="primary" text="选择" />
              </template>
              <van-cell :border="false" title="单元格" value="内容" />
              <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
              </template>
            </van-swipe-cell>
            <van-swipe-cell>
              <template #left>
                <van-button square type="primary" text="选择" />
              </template>
              <van-cell :border="false" title="单元格" value="内容" />
              <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
              </template>
            </van-swipe-cell>
          </van-collapse-item>
        </div>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      activeNames: ["1"],
      username: ""
    };
  },
  //方法集合
  methods: {
    myPush() {
      this.$router.push({ path: "/user" });
    },
    kehuPush() {
      this.$router.push({ path: "/client" });
    },
    chancePush() {
      this.$router.push({ path: "/chance" });
    },
    projectPush() {
      this.$router.push({ path: "/project" });
    },
    talkPush() {
      this.$router.push({
        path: "/communicate",
        query: {
          id: window.sessionStorage.getItem("userid")
        }
      });
    },
    weekPush() {
      this.$router.push({
        path: "/week",
        query: {
          id: window.sessionStorage.getItem("userid")
        }
      });
    }
  },
  created() {
    this.username = window.sessionStorage.getItem("username");
    this.$store.commit("SET_indexDisplay", true);
  }
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.body_box {
  height: auto;
  background: rgb(0, 102, 255);
  padding-bottom: 70px;

  .logo {
    padding: 20px 30px;
    padding-bottom: 10px;
    img {
      width: 250px;
    }
  }
  .content {
    background-color: #f7f8fa;
    min-height: 100vh;
    max-height: auto;

    border-radius: 50px 50px 0 0;
    padding: 0 15px;
    p {
      padding: 30px;
    }
    .cell {
      padding: 20px;
      background: #fff;
      border-radius: 30px;
      margin-bottom: 15px;
      .left_box {
        float: left;
        img {
          width: 100px;
          margin-right: 10px;
        }
      }
      .right_box {
        float: right;
        i {
          font-size: 12px;
        }
        span {
          margin-left: 5px;
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: red;
        }
      }
    }
    .van-collapse {
      padding-bottom: 20px;
    }
    .yuanjiao {
      height: auto;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 5px;
      padding-right: 5px;
      background: #fff;
      margin-bottom: 20px;
      border-radius: 30px !important;
    }
  }
}
</style>
