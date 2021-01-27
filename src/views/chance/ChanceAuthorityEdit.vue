<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="权限管理"
      left-text="返回"
      right-text="添加"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-form>
      <van-field
        readonly
        clickable
        name="picker"
        :value="userForm.name"
        label="姓名"
      />
      <van-field
        readonly
        clickable
        name="picker"
        :value="userForm.roleNames"
        label="职务"
      />
      <van-field
        readonly
        clickable
        name="picker"
        :value="userForm.deptName"
        label="部门"
      />
      <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="分配权限"
        placeholder="点击选择权限功能"
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
      <div class="btn">
        <van-button @click="del" round block type="danger">
          删除
        </van-button>
      </div>
      <div class="btn">
        <van-button
          @click="onSubmit"
          round
          block
          type="info"
          native-type="submit"
        >
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
      authForm: {},
      userForm: {},
      value: "",
      columns: ["查看", "维护"],
      showPicker: false
    };
  },
  //方法集合
  methods: {
    async del() {
      let id = this.$route.query.a_id;
      const { data: dt } = await this.$http.delete(`/auth/${id}`);
      console.log(dt);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.$router.go(-1);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    async onSubmit() {
      this.authForm.id = this.$route.query.a_id;
      if (this.value == "维护") {
        this.authForm.auth = 1;
      } else if (this.value == "查看") {
        this.authForm.auth = 2;
      }

      const { data: dt } = await this.$http.put("/auth", this.authForm);
      console.log(dt);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.$router.push({
        path: "/chanceAuthority",
        query: { id: this.$route.query.id, a_id: this.$route.query.a_id }
      });
    },
    async content() {
      let id = this.$route.query.a_id;
      const { data: dt } = await this.$http.get(`/auth/${id}`);
      console.log(dt);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.userForm = JSON.parse(dt.data.u_data);
      if (dt.data.auth == 1) {
        this.value = "维护";
      } else if (dt.data.auth == 2) {
        this.value = "查看";
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({
        path: "/chanceAuthorityAddto",
        query: {
          id: this.$route.query.id,
          a_id: this.$route.query.a_id
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
.btn {
  margin: 16px;
  margin-top: 20px;
}
</style>
