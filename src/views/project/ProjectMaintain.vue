<!--  -->
<template>
  <div>
    <van-nav-bar
      id="reset"
      title="机会维护要求"
      left-text="返回"
      right-text="提交"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell
      v-for="(item, i) in list"
      :key="i"
      is-link
      :title="item.u_data.name"
      :value="item.access"
      @click="dianji(item.id)"
    />

    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @select="xuanzhong"
    />
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      authFrom: {
        id: ""
      },

      list: [],
      show: false,
      actions: [
        { name: "无要求" },
        { name: "每周一次" },
        { name: "每两周一次" },
        { name: "每月一次" },
        { name: "每季度一次" },
        { name: "每半年一次" },
        { name: "每年一次" }
      ]
    };
  },
  //方法集合
  methods: {
    dianji(id) {
      this.authFrom.id = id;
      this.show = true;
    },
    async xuanzhong(action) {
      if (action.name == "无要求") {
        this.authFrom.access = 0;
      } else if (action.name == "每周一次") {
        this.authFrom.access = 1;
      } else if (action.name == "每两周一次") {
        this.authFrom.access = 2;
      } else if (action.name == "每月一次") {
        this.authFrom.access = 3;
      } else if (action.name == "每季度一次") {
        this.authFrom.access = 4;
      } else if (action.name == "每半年一次") {
        this.authFrom.access = 5;
      } else if (action.name == "每年一次") {
        this.authFrom.access = 6;
      }
      console.log("auth:", this.authFrom);
      const { data: dt } = await this.$http.put("/auth", this.authFrom);
      console.log(dt);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.$toast.success("修改成功");
      this.content();
    },

    async content() {
      let c_id = this.$route.query.id;
      console.log("req maintain :", c_id);
      const { data: dt } = await this.$http.get(`/auth/project/${c_id}`);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      dt.data.forEach(element => {
        element.u_data = JSON.parse(element.u_data);
        if (element.access == 0) {
          element.access = "无要求";
        } else if (element.access == 1) {
          element.access = "每周一次";
        } else if (element.access == 2) {
          element.access = "每两周一次";
        } else if (element.access == 3) {
          element.access = "每月一次";
        } else if (element.access == 4) {
          element.access = "每季度一次";
        } else if (element.access == 5) {
          element.access = "每半年一次";
        } else if (element.access == 6) {
          element.access = "每年一次";
        }
      });
      this.list = dt.data;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    async onClickRight() {
      //   const {data:dt} = await this.$http.put()
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
