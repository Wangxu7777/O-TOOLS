<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="交流记录详情"
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
        :value="communicate.date"
        label="日期"
      />

      <van-field
        type="textarea"
        rows="1"
        autosize
        readonly
        clickable
        name="c_id"
        :value="communicate.c_name"
        label="关联客户"
      />

      <van-field
        type="textarea"
        rows="1"
        autosize
        readonly
        clickable
        name="p_id"
        :value="communicate.p_name"
        label="关联项目"
      />

      <van-field
        type="textarea"
        rows="1"
        autosize
        readonly
        clickable
        name="f_id"
        :value="communicate.f_name"
        label="最终用户"
      />

      <van-field
        v-model="communicate.address"
        name="交流地点"
        label="交流地点"
        type="textarea"
        rows="1"
        autosize
        readonly
      />
      <van-field
        v-model="communicate.persons"
        name="参与人员"
        label="参与人员"
        type="textarea"
        rows="1"
        autosize
        readonly
      />
      <van-field
        v-model="communicate.content"
        name="交流要点"
        label="交流要点"
        type="textarea"
        rows="1"
        autosize
        readonly
      />
      <van-field
        v-model="communicate.follow"
        name="后续事项"
        label="后续事项"
        type="textarea"
        rows="1"
        autosize
        readonly
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
      let id = this.$route.query.id;
      const { data: dt } = await this.$http.get(`talk/${id}`);
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
        path: "/CommunicateEdit",
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
