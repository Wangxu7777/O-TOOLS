<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="新建/编辑交流活动记录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="communicate.name"
        name="主题"
        label="主题"
        placeholder="主题"
        :rules="[{ required: true, message: '请填写主题名称' }]"
      />
      <!-- <van-field
        v-model="communicate.creater"
        name="撰写人"
        label="撰写人"
        placeholder="撰写人"
      /> -->
      <van-field
        readonly
        clickable
        name="calendar"
        :value="communicate.date"
        label="日期"
        placeholder="点击选择日期"
        @click="dateCalendar = true"
      />
      <van-calendar
        :min-date="minDate"
        v-model="dateCalendar"
        @confirm="onConfirm"
      />
      <van-field
        type="textarea"
        rows="1"
        autosize
        readonly
        clickable
        name="c_id"
        :value="c_value"
        label="关联客户"
        placeholder="点击选择客户"
        @click="c_data"
      />
      <van-popup v-model="c_Picker" position="bottom">
        <van-picker
          show-toolbar
          :columns="c_columns"
          @confirm="c_xuanze"
          @cancel="c_Picker = false"
        />
      </van-popup>
      <van-field
        type="textarea"
        rows="1"
        autosize
        readonly
        clickable
        name="p_id"
        :value="p_value"
        label="关联项目"
        placeholder="点击选择项目"
        @click="p_data"
      />
      <van-popup v-model="p_Picker" position="bottom">
        <van-picker
          show-toolbar
          :columns="p_columns"
          @confirm="p_xuanze"
          @cancel="p_Picker = false"
        />
      </van-popup>
      <van-field
        type="textarea"
        rows="1"
        autosize
        readonly
        clickable
        name="f_id"
        :value="f_value"
        label="最终用户"
        placeholder="点击最终用户"
        @click="f_data"
      />
      <van-popup v-model="f_Picker" position="bottom">
        <van-picker
          show-toolbar
          :columns="f_columns"
          @confirm="f_xuanze"
          @cancel="f_Picker = false"
        />
      </van-popup>
      <!-- <van-field
        v-model="communicate.f_id"
        name="最终用户"
        label="最终用户"
        placeholder="最终用户"
        type="textarea"
        rows="1"
        autosize
      /> -->
      <van-field
        v-model="communicate.address"
        name="交流地点"
        label="交流地点"
        placeholder="交流地点"
        type="textarea"
        rows="1"
        autosize
      />
      <van-field
        v-model="communicate.persons"
        name="参与人员"
        label="参与人员"
        placeholder="参与人员"
        type="textarea"
        rows="1"
        autosize
      />
      <van-field
        v-model="communicate.content"
        name="交流要点"
        label="交流要点"
        placeholder="交流要点"
        type="textarea"
        rows="1"
        autosize
        :rules="[{ required: true, message: '请填写交流要点' }]"
      />
      <van-field
        v-model="communicate.follow"
        name="后续事项"
        label="后续事项"
        placeholder="后续事项"
        type="textarea"
        rows="1"
        autosize
        :rules="[{ required: true, message: '请填写后续事项' }]"
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
      communicate: {
        name: "",
        f_id: "",
        p_id: "",
        c_id: "",
        date: "",
        address: "",
        persons: "",
        content: "",
        follow: ""
      },
      minDate: new Date(2010, 0, 1),
      username: "",
      password: "",

      dateCalendar: false,
      c_Picker: false,
      p_Picker: false,
      f_Picker: false,
      c_value: "",
      p_value: "",
      f_value: "",
      c_columns: [],
      p_columns: [],
      f_columns: [],
      c_arr: [],
      p_arr: [],
      f_arr: []
    };
  },
  //方法集合
  methods: {
    async f_data() {
      this.f_Picker = true;

      let userid = window.sessionStorage.getItem("userid");
      const { data: dt } = await this.$http.get(`/customer/userid/${userid}`);

      if (dt.code !== 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.f_arr = dt.data;
      this.f_columns = [];
      this.f_arr.map(e => {
        return this.f_columns.push(e.customname);
      });
    },
    async p_data() {
      this.p_Picker = true;

      let userid = window.sessionStorage.getItem("userid");
      const { data: dt } = await this.$http.get(`/project/userid/${userid}`);

      if (dt.code !== 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.p_arr = dt.data;
      this.p_columns = [];
      this.p_arr.map(e => {
        return this.p_columns.push(e.projectname);
      });
    },
    async c_data() {
      this.c_Picker = true;

      let userid = window.sessionStorage.getItem("userid");
      const { data: dt } = await this.$http.get(`/customer/userid/${userid}`);

      if (dt.code !== 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.c_arr = dt.data;
      this.c_columns = [];
      this.c_arr.map(e => {
        return this.c_columns.push(e.customname);
      });
    },
    f_xuanze(value) {
      this.f_value = value;
      this.f_arr.filter(ele => {
        if (value == ele.customname) {
          return (this.communicate.f_id = ele.id);
        }
      });
      this.f_Picker = false;
    },
    p_xuanze(value) {
      this.p_value = value;
      this.p_arr.filter(ele => {
        if (value == ele.projectname) {
          return (this.communicate.p_id = ele.id);
        }
      });
      this.p_Picker = false;
    },
    c_xuanze(value) {
      this.c_value = value;
      this.c_arr.filter(ele => {
        if (value == ele.customname) {
          return (this.communicate.c_id = ele.id);
        }
      });

      this.c_Picker = false;
    },
    onConfirm(date) {
      this.communicate.date = `${date.getFullYear()}/${date.getMonth() +
        1}/${date.getDate()}`;
      this.dateCalendar = false;
    },
    async onSubmit() {
      this.communicate.creater = window.sessionStorage.getItem("username");
      console.log(this.communicate);
      const { data: dt } = await this.$http.post("/talk", this.communicate);
      console.log(dt);
      if (dt.code !== 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
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
