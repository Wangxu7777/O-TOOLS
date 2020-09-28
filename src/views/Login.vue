<!--  -->
<template>
  <div class="box">
    <div class="login_box">
      <van-form @submit="onSubmit">
        <van-field
          v-model="loginFrom.username"
          name="用户名"
          label="用户名"
          placeholder="用户名/手机号"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="loginFrom.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="btn">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
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
      loginFrom: {
        username: "",
        password: ""
      }
    };
  },
  //方法集合
  methods: {
    onSubmit(values) {
      console.log(values);
      this.$router.push({ name: "Index" });
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.box {
  width: 100%;
  height: 100%;
  background: url("../assets/img/a01-1.png") no-repeat;
  background-size: 100%;
  .login_box {
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 50px 50px 0 0;
    background: #fff;
  }
  .van-form {
    margin-top: 50px;
  }
  .van-field {
    margin-top: 20px;
  }
  .btn {
    margin: 16px;
    margin-top: 60px;
  }
}
</style>
