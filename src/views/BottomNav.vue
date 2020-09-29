<!--  -->
<template>
  <div>
    <router-view />
    <van-tabbar route @change="onChange">
      <van-tabbar-item replace to="/client" icon="user-o" name="客户">
        客户
      </van-tabbar-item>
      <van-tabbar-item replace to="" icon="gem-o" name="机会">
        机会
      </van-tabbar-item>
      <van-tabbar-item replace to="/index" name="首页">
        <img
          v-if="this.display"
          src="../assets/img/a03-13a.png"
          alt=""
          class="shouye"
        />
        <img v-else src="../assets/img/a03-13.png" alt="" class="shouye" />
      </van-tabbar-item>
      <van-tabbar-item replace to="" icon="qr" name="项目">
        项目
      </van-tabbar-item>
      <van-tabbar-item replace to="" icon="comment-o" name="交流">
        交流
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      display: false
    };
  },
  //方法集合
  methods: {
    onChange(index) {
      if (index == "首页") {
        this.display = true;
      } else {
        this.display = false;
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.shouye {
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
}
.van-tabbar {
  background-color: #dcdee0 !important;
}
.van-tabbar-item--active {
  background-color: #dcdee0 !important;
}
[class*="van-hairline"]::after {
  border: 0 solid #fff;
}
</style>
