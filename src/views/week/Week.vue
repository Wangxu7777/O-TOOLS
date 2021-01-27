<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="个人周报"
      left-text="返回"
      right-text="新建"
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
      <van-collapse v-model="activeNames">
        <van-collapse-item
          v-for="(item, i) in list_talk"
          :key="i"
          :title="'2020年第' + i + '周' + item.date"
          :name="i"
        >
          <van-cell>
            <template #title>
              <span class="custom-title" style="color:##1989fa"
                >热心市民的周报内容</span
              >
            </template>
            <template #right-icon>
              <van-button plain type="info" size="mini" @click="edit(item.id)"
                >编辑</van-button
              >
              <van-button
                plain
                type="warning"
                size="mini"
                @click="statistics(item.id)"
                >统计</van-button
              >
            </template>
          </van-cell>
          <van-field
            readonly
            v-model="item.content"
            rows="1"
            autosize
            :label="item.date + '交流记录'"
            type="textarea"
          />
        </van-collapse-item>
      </van-collapse>
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
      list_week: [],
      list_talk: [],
      activeNames: ["1"]
    };
  },
  //方法集合
  methods: {
    statistics(id) {
      alert("本条id" + id);
      this.$router.push({
        path: "/WeekStatistics"
      });
    },
    edit(id) {
      alert("本条id" + id);
    },
    seeWeek(id) {
      console.log("week id:", id);
      this.$router.push({
        path: "/weekDetails",
        query: {
          id: id
        }
      });
    },
    seeTalk(id) {
      this.$router.push({
        path: "/talk",
        query: {
          id: id
        }
      });
    },
    async onLoad() {
      let userid = this.$route.query.id;
      console.log("week userid:", userid);
      const { data: dt } = await this.$http.get(
        `/week/finallyWeek/${userid}/1`
      );
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      console.log("week:", dt.data.length);
      // this.list = dt.data;
      if (dt.data.length > 0) {
        this.list_week = dt.data[0];
        this.list_talk = dt.data[1];
        console.log("week list:", this.list_week);
        console.log("week talk:", this.list_talk);
        // 加载状态结束
      }
      this.loading = false;
      this.finished = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({
        path: "/weekNew",
        query: {
          id: this.$route.query.id
        }
      });
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
.liebiao {
  margin-top: 20px;
}
</style>
