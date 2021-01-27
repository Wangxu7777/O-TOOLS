<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="机会新建管理"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-notice-bar
      wrapable
      :scrollable="false"
      text="新建机会保存之后，可新增自定义条目内容"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="chanceForm.projectname"
        name="项目名称"
        label="项目名称"
        placeholder="项目名称"
        :rules="[{ required: true, message: '请填写项目名称' }]"
      />
      <van-field
        v-model="chanceForm.customerfinalname"
        name="最终用户"
        label="最终用户"
        placeholder="最终用户"
        :rules="[{ required: true, message: '请填写最终用户' }]"
      />
      <van-field
        v-model="chanceForm.customername"
        name="合作用户"
        label="合作用户"
        placeholder="合作用户"
        :rules="[{ required: true, message: '请填写合作用户' }]"
      />
      <van-field
        v-model="chanceForm.amount"
        name="预算金额"
        label="预算金额"
        placeholder="预算金额"
        :rules="[{ required: true, message: '请填写预算金额' }]"
      />
      <van-field
        v-model="chanceForm.tech_keys"
        name="包含"
        label="包含"
        placeholder="包含"
        :rules="[{ required: true, message: '请填写包含：平台，数据，开发' }]"
      />
      <!-- <van-field
        v-model="chanceForm.projectstartdate"
        name="预计启动时间"
        label="预计启动时间"
        placeholder="预计启动时间"
        :rules="[{ required: true, message: '请填写预计启动时间' }]"
      /> -->
      <van-cell title="预计启动时间" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirmDate" />
      <!-- <van-field
        v-model="chanceForm.project_state"
        name="项目当前阶段"
        label="项目当前阶段"
        placeholder="项目当前阶段"
        :rules="[
          {
            required: true,
            message: '请填写项目当前阶段：机会，售前，售中，售后'
          }
        ]"
      /> -->
      <van-field
        readonly
        clickable
        name="项目当前阶段"
        :value="value"
        label="项目当前阶段"
        placeholder="项目当前阶段"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        v-model="chanceForm.prj_possible"
        name="机会度"
        label="机会度"
        placeholder="机会度"
        :rules="[{ required: true, message: '请填写机会度' }]"
      />
      <!-- <van-field
        v-model="chanceForm.state"
        name="状态"
        label="状态"
        placeholder="状态"
        :rules="[
          { required: true, message: '请填写状态：进行中，暂停，停止，结束' }
        ]"
      /> -->

      <van-field
        readonly
        clickable
        name="状态"
        :value="valueState"
        label="状态"
        placeholder="状态"
        @click="showPickerState = true"
      />
      <van-popup v-model="showPickerState" position="bottom">
        <van-picker
          show-toolbar
          :columns="columnsState"
          @confirm="onConfirmState"
          @cancel="showPickerState = false"
        />
      </van-popup>
      <van-field
        v-model="chanceForm.discription"
        name="需求描述"
        label="需求描述"
        placeholder="需求描述"
        :rules="[{ required: true, message: '请填写需求描述' }]"
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
      chanceForm: {
        projectname: "",
        customerfinalname: "",
        customername: "",
        amount: "",
        tech_keys: "",
        projectstartdate: "",
        prj_state: "",
        prj_possible: "",
        state: "",
        description: ""
      },
      value: "",
      // columns: ["交流", "招标", "暂停", "结束", "中标"],
      columns: ["1", "2", "3", "4", "5"],
      showPicker: false,
      valueState: "",
      // columnsState: ["进行中", "停止"],
      columnsState: ["1", "2"],
      showPickerState: false,
      date: "",
      show: false
    };
  },
  //方法集合
  methods: {
    async onSubmit() {
      this.chanceForm.userid = window.sessionStorage.getItem("userid");
      const { data: dt } = await this.$http.post("/project", this.chanceForm);
      console.log(dt);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }

      this.$router.push({ path: "/projectEntry" });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      //   this.$router.push({ path: "/clientDetailsManagement" });
    },
    onConfirm(value) {
      this.value = value;
      console.log("value:", value);
      this.showPicker = false;
      this.chanceForm.prj_state = value;
    },
    onConfirmState(value) {
      this.valueState = value;
      console.log("value:", value);
      this.showPickerState = false;
      this.chanceForm.state = value;
    },
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirmDate(date) {
      this.show = false;
      this.date = this.formatDate(date);
      this.chanceForm.projectstartdate = this.date + "T00:00:00";
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
