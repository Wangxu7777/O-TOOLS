<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="周报详情"
      left-text="返回"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-form @submit="onSubmit">
      <van-field v-model="communicate.name" name="主题" label="主题" readonly />

      <van-field
        readonly
        clickable
        name="calendar"
        :value="communicate.createdate"
        label="日期"
      />

      <van-field
        type="textarea"
        rows="1"
        autosize
        readonly
        clickable
        name="p_id"
        :value="communicate.content"
        label="周报内容"
      />
    </van-form>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      communicate: {}
    };
  },
  //方法集合
  methods: {
    async content() {
      console.log("week detail", id);
      let id = this.$route.query.id;
      const { data: dt } = await this.$http.get(`week/${id}`);
      console.log(dt);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.communicate = dt.data;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({
        path: "/weekEdit",
        query: {
          id: this.$route.query.id
        }
      });
    },
    onSubmit() {}
  },
  created() {
    this.content();
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
</style>
