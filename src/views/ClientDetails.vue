<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;"
  >
    <van-nav-bar
      id="reset"
      title="客户详情"
      left-text="返回"
      right-text="交流记录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field
        v-model="username"
        name="客户地址"
        label="客户名称"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="password"
        name="客户地址"
        label="客户地址"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
    </van-cell-group>
    <div class="btn_box">
      <div class="btn" style="margin-bottom:10px;margin-top:15px">
        <van-button round block type="default"> 管理</van-button>
      </div>
      <div class="btn" style="margin-bottom:10px">
        <van-button round block type="default"> 权限</van-button>
      </div>
      <div class="btn" style="margin-bottom:10px">
        <van-button round block type="default"> 维护要求</van-button>
      </div>
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
      username: "客户名称",
      password: "客户地址"
    };
  },
  //方法集合
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {}
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
.van-cell-group {
  padding: 15px;
}
.btn_box {
  width: 100%;
  padding: 15px;
  position: absolute;
  bottom: 10%;
  box-sizing: border-box;
}
</style>
