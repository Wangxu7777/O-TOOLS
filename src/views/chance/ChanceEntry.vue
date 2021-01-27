<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative;padding-bottom:50px"
  >
    <van-nav-bar
      id="reset"
      title="条目编辑"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-notice-bar
      wrapable
      :scrollable="false"
      text="无需添加、修改条目可点击取消返回列表页"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="clientForm.name"
        name="条目名称"
        label="条目名称"
        placeholder="条目名称"
        :rules="[{ required: true, message: '请填写条目名称' }]"
      />
      <van-field
        v-model="clientForm.content"
        name="条目内容"
        label="条目内容"
        placeholder="条目内容"
        type="textarea"
        autosize
        :rules="[{ required: true, message: '请填写条目内容' }]"
      />
      <van-field
        v-model="clientForm.remark"
        name="条目备注"
        label="条目备注"
        placeholder="条目备注"
        type="textarea"
        autosize
      />
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="item"
            :title="`${item}`"
            @click="toggle(index)"
          >
            <template #right-icon>
              <van-checkbox :name="item" ref="checkboxes" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          保存
        </van-button>
      </div>
    </van-form>
    <div style="margin: 16px;">
      <van-button @click="fanhui" round block type="default">
        取消
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
      clientForm: {
        name: "",
        content: "",
        remark: "",
        //1未选2选中
        is_enable: 1,
        is_pre_sale: 1,
        is_sale: 1,
        //1客户2工程
        type: 1
      },
      list: ["逻辑删除（显示否）", "售前可见", "销售可见"],
      result: []
    };
  },
  //方法集合
  methods: {
    async content() {
      let itemid = this.$route.query.itemid;
      if (itemid) {
        const { data: dt } = await this.$http.get(`/item/findItem/${itemid}`);
        console.log(dt);
        if (dt.code != 200) {
          return this.$toast.fail({
            message: dt.msg
          });
        }
        this.clientForm = dt.data;
        if (this.clientForm.is_enable == 0) {
          this.result.push("逻辑删除（显示否）");
        }
        if (this.clientForm.is_pre_sale == 0) {
          this.result.push("售前可见");
        }
        if (this.clientForm.is_sale == 0) {
          this.result.push("销售可见");
        }
      }
    },
    fanhui() {
      this.$router.push({ path: "/chance" });
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    async onSubmit() {
      let itemid = this.$route.query.itemid;
      this.result.forEach(element => {
        if (element == "销售可见") {
          this.clientForm.is_sale = 0;
        } else if (element == "售前可见") {
          this.clientForm.is_pre_sale = 0;
        } else if (element == "逻辑删除（显示否）") {
          this.clientForm.is_enable = 0;
        }
      });

      this.clientForm.u_id = window.sessionStorage.getItem("userid");
      this.clientForm.c_id = this.$route.query.id;

      if (itemid) {
        const { data: dt } = await this.$http.put("/item", this.clientForm);

        if (dt.code != 200) {
          return this.$toast.fail({
            message: dt.msg
          });
        }

        this.$router.push({
          path: "/chanceModify",
          query: {
            id: this.$route.query.id
          }
        });
      } else {
        const { data: dt } = await this.$http.post("/item", this.clientForm);

        if (dt.code != 200) {
          return this.$toast.fail({
            message: dt.msg
          });
        }

        this.$router.push({
          path: "/chanceModify",
          query: {
            id: this.$route.query.id
          }
        });
      }
    },
    onClickLeft() {
      this.$router.go(-1);
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
