<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;"
  >
    <van-nav-bar
      id="reset"
      title="客户编辑管理"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="clientForm.customname"
        name="客户名称"
        label="客户名称"
        placeholder="客户名称"
        :rules="[{ required: true, message: '请填写客户名称' }]"
      />
      <van-field
        v-model="clientForm.address"
        name="客户地址"
        label="客户地址"
        placeholder="客户地址"
        :rules="[{ required: true, message: '请填写客户地址' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          保存
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
      clientForm: {
        customname: "",
        address: ""
      }
    };
  },
  //方法集合
  methods: {
    async content() {
      let id = this.$route.query.id;

      const { data: dt } = await this.$http.get(`/customer/${id}`);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.clientForm = dt.data[0];
      console.log(this.clientForm);
    },
    async onSubmit() {
      this.clientForm.userid = window.sessionStorage.getItem("userid");
      const { data: dt } = await this.$http.put("/customer", this.clientForm);
      console.log(dt);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }

      this.$router.push({ path: "/clientEntry" });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      //   this.$router.push({ path: "/clientDetailsManagement" });
    }
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
