<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="客户"
      left-text="返回"
      right-text="新建"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-search
      v-model="searchValue"
      shape="round"
      placeholder="请输入搜索关键词"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="(item, i) in list"
        :key="i"
        :title="item.customname"
        @click="see(item.id)"
      >
        <div class="neirong3">
          <p>{{ username }}</p>
        </div>
      </van-cell>
    </van-list>
    <div class="btn">
      <van-button round block type="default" @click="news"> 新建</van-button>
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
      searchValue: "",
      loading: false,
      finished: false,
      username: "",
      list: []
    };
  },
  //方法集合
  methods: {
    news() {
      this.$router.push({ path: "/clientDetailsManagement" });
    },
    see(id) {
      // var w = e.currentTarget.innerText;
      // var a = w.trim().split("\n");
      // // console.log(a);
      this.$router.push({
        path: "/clientDetails",
        query: {
          id: id
        }
      });
    },
    async onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      let userid = window.sessionStorage.getItem("userid");
      // let id = {
      //   userid: userid
      // };
      const { data: dt } = await this.$http.get(`/customer/userid/${userid}`);

      if (dt.code !== 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.list = dt.data;
      // 加载状态结束
      this.loading = false;
      this.finished = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({ path: "/clientDetailsManagement" });
    }
  },
  created() {
    this.username = window.sessionStorage.getItem("username");
  }
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.van-nav-bar {
  background: rgb(0, 102, 255);
}
#reset /deep/ .van-ellipsis {
  color: #fff !important;
}
#reset /deep/ .van-icon {
  color: #fff !important;
}
#reset /deep/ .van-nav-bar__text {
  color: #fff !important;
}
.btn {
  //   width: 100%;
  padding: 16px;
  margin-top: 20px;
  //   position: absolute;
  //   bottom: 10%;
  //   box-sizing: border-box;
}
</style>
