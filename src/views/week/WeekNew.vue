<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="新建周报"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-cell title="选择单个日期" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" :min-date="minDate" />

      <van-field
        v-model="week.content"
        name="周报内容"
        label="周报内容"
        rows="6"
        autosize
        type="textarea"
        placeholder="周报"
        :rules="[{ required: true, message: '请填写周报内容' }]"
      />
      <van-cell
        v-for="(item, i) in list_talk"
        :key="i"
        @click="seeTalk(item.id)"
        class="liebiao"
        center
        :label="item.content"
        size="large"
      >
        <div>
          <p>
            <van-tag round type="primary">{{ item.date }}</van-tag>
          </p>
          <p>{{ item.content }}</p>
        </div>
      </van-cell>
      <!-- <van-field
        v-model="communicate.creater"
        name="撰写人"
        label="撰写人"
        placeholder="撰写人"
      /> -->

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <div style="margin: 16px;">
      <van-button round block type="warning" @click="addTalk">
        添加交流记录
      </van-button>
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
      date: "",
      show: false,
      week: {
        content: "",
        createdate: "",
        userid: ""
      },
      list_talk: [],
      dateCalendar: "",
      minDate: new Date(2010, 0, 1)
    };
  },
  //方法集合
  methods: {
    addTalk() {
      this.$router.push({
        path: "/weekNewCommunicate"
      });
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },

    async onSubmit() {
      console.log("submit", this.week);
      const { data: dt } = await this.$http.post("/week", this.week);
      console.log(dt);
      if (dt.code !== 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.$router.push({ path: "/week" });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    async communicateData() {
      // let c_id = this.$route.query.id;
      let userid = window.sessionStorage.getItem("userid");
      let date = this.week.createdate;
      if (date == null || date == "") date = "1";

      // this.week.creater = window.sessionStorage.getItem("username");
      this.week.userid = Number(userid);
      const { data: dt } = await this.$http.get(
        `/week/finallyWeek/${userid}/${date}`
      );
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      console.log("week:", dt);
      // this.list = dt.data;

      this.list_talk = dt.data[1];
      console.log(this.list_talk);
    }
  },

  created() {
    // this.communicateData();
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
