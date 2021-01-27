<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="交流记录"
      left-text="返回"
      right-text="新建"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="(item, i) in list"
        :key="i"
        @click="see(item.id)"
        class="liebiao"
        center
        :title="item.name"
        :label="item.content"
        size="large"
      >
        <div>
          <p>
            <van-tag round type="primary">{{ item.date }}</van-tag>
          </p>
          <p>{{ item.creater }}</p>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      value: "",
      loading: false,
      finished: false,
      list: []
    };
  },
  //方法集合
  methods: {
    see(id) {
      this.$router.push({
        path: "/communicateDetails",
        query: {
          id: id
        }
      });
    },
    async onLoad() {
      let id = this.$route.query.id;

      const { data: dt } = await this.$http.get(`/talk/all/${id}`);
      if (dt.code != 200) {
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
      this.$router.push({
        path: "/clientNewCommunicate",
        query: {
          id: this.$route.query.id,
          c_name: this.$route.query.c_name
        }
      });
    }
  },
  created() {
    this.$store.commit("SET_talkActive", true);
  },
  beforeDestroy() {
    this.$store.commit("SET_talkActive", false);
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
.liebiao {
  margin-top: 20px;
}
</style>
