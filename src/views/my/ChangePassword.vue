<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="修改密码"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="passwordFrom.oldPassword"
        name="旧密码"
        label="旧密码"
        placeholder="旧密码"
        :rules="[{ required: true, message: '请填写旧密码' }]"
      />
      <van-field
        v-model="passwordFrom.newPassword"
        type="password"
        name="新密码"
        label="新密码"
        placeholder="新密码"
        :rules="[{ required: true, message: '请填写新密码' }]"
      />
      <van-field
        v-model="passwordFrom.password"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写确认密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
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
      passwordFrom: {
        oldPassword: "",
        newPassword: "",
        password: ""
      }
    };
  },
  //方法集合
  methods: {
    async onSubmit() {
      const { data: dt } = await this.$http.post("/loginM", this.passwordFrom);
      if (dt.code !== 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      console.log(dt.data[1]);

      this.$toast.success("修改成功");
      this.$router.push({ name: "Index" });
    },
    onClickLeft() {
      this.$router.go(-1);
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
