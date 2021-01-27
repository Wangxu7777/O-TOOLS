<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="权限添加"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
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
        @click="see(item)"
        class="liebiao"
        center
        :title="item.name"
        :label="item.deptName"
        size="large"
      >
        <div>
          <p>
            {{ item.roleNames }}
          </p>
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
      searchValue: "",
      list: [],
      loading: false,
      finished: false,
      authFrom: {}
    };
  },
  //方法集合
  methods: {
    see(e) {
      this.$dialog
        .confirm({
          message: `是否确定选择` + e.name
        })
        .then(async () => {
          this.authFrom.u_id = e.id;
          let p_id = this.$route.query.id;
          this.authFrom.p_id = Number(p_id);
          this.authFrom.u_data = JSON.stringify(e);
          const { data: dt } = await this.$http.post("/auth", this.authFrom);
          console.log(dt);
          if (dt.code != 200) {
            return this.$toast.fail({
              message: dt.msg
            });
          }
          this.$router.push({
            path: "/projectAuthorityEdit",
            query: { id: p_id, a_id: dt.data }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    async onLoad() {
      const { data: dt } = await this.$http.post(`/user/findUser`);
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
        path: "../CommunicateEdit",
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
