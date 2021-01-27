<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="机会详情"
      left-text="返回"
      right-text="交流记录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field
        v-model="chanceForm.projectname"
        name="项目名称"
        label="项目名称"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="chanceForm.customerfinalname"
        name="最终客户"
        label="最终客户"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="chanceForm.customername"
        name="合作客户"
        label="合作客户"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="chanceForm.amount"
        name="预算金额"
        label="预算金额"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="chanceForm.tech_keys"
        name="包含"
        label="包含"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="chanceForm.projectstartdate"
        name="预计启动时间"
        label="预计启动时间"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="chanceForm.prj_state"
        name="项目当前阶段"
        label="项目当前阶段"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="chanceForm.prj_possible"
        name="机会度"
        label="机会度"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="chanceForm.state"
        name="状态"
        label="状态"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="chanceForm.description"
        name="描述"
        label="描述"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
    </van-cell-group>
    <van-cell-group class="tiaomu" v-for="(item, i) in entry" :key="i">
      <van-field
        :value="item.content"
        :name="item.name"
        :label="item.name"
        autosize
        type="textarea"
        readonly
      />
      <van-field
        :value="item.remark"
        name="备注"
        label="备注"
        autosize
        type="textarea"
        readonly
      />
    </van-cell-group>
    <div class="btn_box">
      <div class="btn" style="margin-bottom:10px;margin-top:15px">
        <van-button @click="guanli" round block type="default">
          管理</van-button
        >
      </div>
      <div class="btn" style="margin-bottom:10px">
        <van-button round block type="default" @click="quanxian">
          权限</van-button
        >
      </div>
      <div class="btn" style="margin-bottom:10px">
        <van-button @click="weihu" round block type="default">
          维护要求</van-button
        >
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
      chanceForm: {},
      entry: []
    };
  },
  //方法集合
  methods: {
    weihu() {
      this.$router.push({
        path: "/projectMaintain",
        query: {
          id: this.$route.query.id
        }
      });
    },
    quanxian() {
      this.$router.push({
        path: "/projectAuthority",
        query: {
          id: this.$route.query.id
        }
      });
    },
    guanli() {
      this.$router.push({
        path: "/projectModify",
        query: {
          id: this.$route.query.id
        }
      });
    },
    async content() {
      let id = this.$route.query.id;

      const { data: dt } = await this.$http.get(`/project/detail/${id}`);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.chanceForm = dt.data;
      console.log(this.chanceForm);
    },

    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({
        path: "../communicate",
        query: {
          id: this.$route.query.id,
          c_name: this.chanceForm.customername
        }
      });
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
.van-cell-group {
  padding: 15px;
}
.btn_box {
  width: 100%;
  padding: 15px;

  box-sizing: border-box;
}
.van-cell-group {
  margin-bottom: 20px;
}
</style>
