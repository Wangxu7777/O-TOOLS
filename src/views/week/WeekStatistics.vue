<template>
  <div
    class=""
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="个人周报统计"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell title="周报提交共计100人" label="2020年第一周 11.11-12.12">
      <template #right-icon>
        <van-tag type="success">已提交20人</van-tag>
        <van-tag type="warning">未提交50人</van-tag>
      </template>
    </van-cell>
    <van-tabs v-model="active">
      <van-tab title="未提交8人">
        <van-cell
          v-for="(item, i) in list"
          :key="i"
          :title="item.name"
          :label="item.text1"
          :value="item.text2"
        >
        </van-cell>
      </van-tab>
      <van-tab title="未按时提交人" disabled> </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      active: 2,
      list: []
    };
  },
  //方法集合
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    listData() {
      this.list = [
        { name: "小王", text1: "部门", text2: "职位" },
        { name: "小王", text1: "部门", text2: "职位" },
        { name: "小王", text1: "部门", text2: "职位" }
      ];
    }
  },

  created() {
    this.listData();
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
