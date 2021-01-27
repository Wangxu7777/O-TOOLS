<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="交流记录选择"
      left-text="返回"
      right-text="选择"
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
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell
            v-for="(item, i) in list"
            clickable
            :key="i"
            @click="toggle(i)"
            :title="item.name"
            :label="item.content"
          >
            <template #right-icon>
              <van-tag round type="primary">{{ item.date }}</van-tag>
              <van-checkbox :name="item" ref="checkboxes" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
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
      list: [],
      result: []
    };
  },
  //方法集合
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
      alert(index);
    },
    see(id) {
      this.$router.push({
        path: "/communicateDetails",
        query: {
          id: id
        }
      });
    },
    async onLoad() {
      let id = window.sessionStorage.getItem("userid");

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
      alert("选择成功");
      this.$router.push({
        path: "/weekNew",
        query: {
          id: window.sessionStorage.getItem("userid"),
          c_name: this.$route.query.c_name
        }
      });
    }
  },
  created() {},
  beforeDestroy() {}
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
.van-tag {
  background-color: #fff;
  color: #000;
}
</style>
