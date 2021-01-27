<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="权限查看"
      left-text="返回"
      right-text="添加"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
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
        @click="see(item.id)"
        class="liebiao"
        center
        :title="item.u_data.name"
        :label="item.u_data.roleNames"
        size="large"
      >
        <div>
          <p>{{ item.auth }}</p>
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
      list: [],
      loading: false,
      finished: false
    };
  },
  //方法集合
  methods: {
    see(id) {
      this.$router.push({
        path: "/chanceAuthorityEdit",
        query: {
          id: this.$route.query.id,
          a_id: id
        }
      });
    },
    async onLoad() {
      let id = this.$route.query.id;

      const { data: dt } = await this.$http.get(`/auth/project/${id}`);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      dt.data.forEach(element => {
        element.u_data = JSON.parse(element.u_data);
        if (element.auth == 1) {
          element.auth = "维护";
        } else if (element.auth == 2) {
          element.auth = "查看";
        }
      });
      //   dt.data.u_data = JSON.parse(dt.data.u_data);

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
        path: "/chanceAuthorityAddto",
        query: {
          id: this.$route.query.id
        }
      });
    }
  },
  created() {}
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
</style>
