<!--  -->
<template>
  <div
    style="background-color: #f7f8fa;min-height: 100vh;max-height:auto;position: relative; padding-bottom: 50px"
  >
    <van-nav-bar
      id="reset"
      title="客户详情管理"
      left-text="返回"
      right-text="新增条目"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <p>基本信息</p>
    <div>
      <van-field
        v-model="clientForm.customname"
        name="客户名称"
        label="客户名称"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <van-field
        v-model="clientForm.address"
        name="客户地址"
        label="客户地址"
        autosize
        type="textarea"
        rows="1"
        readonly
      />
      <div class="btn">
        <van-button
          @click="modify"
          size="small"
          plain
          hairline
          icon="edit"
          type="info"
        >
          修改
        </van-button>
      </div>
    </div>
    <p>自定义条目</p>
    <div class="tiaomu" v-for="(item, i) in entry" :key="i">
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
      <div class="btn">
        <van-button
          @click="modify1(item.id)"
          size="small"
          plain
          hairline
          icon="edit"
          type="info"
        >
          修改
        </van-button>
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
      clientForm: {},
      entry: []
    };
  },
  //方法集合
  methods: {
    modify1(itemid) {
      this.$router.push({
        path: "/clientEntry",
        query: {
          id: this.$route.query.id,
          itemid: itemid
        }
      });
    },
    modify() {
      this.$router.push({
        path: "/clientEntry",
        query: {
          id: this.$route.query.id
        }
      });
    },
    async content() {
      let id = this.$route.query.id;

      const { data: dt } = await this.$http.get(`/customer/${id}`);
      console.log(dt);
      if (dt.code != 200) {
        return this.$toast.fail({
          message: dt.msg
        });
      }
      this.clientForm = dt.data[0];
      this.entry = dt.data[1];
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({
        path: "/clientEntry",
        query: {
          id: this.$route.query.id
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
p {
  font-size: 14px;
  padding: 15px;
}
.btn {
  overflow: hidden;
  background: #fff;
  padding: 0 20px;
  .van-button {
    float: right;
  }
}
.tiaomu {
  margin-bottom: 20px;
}
</style>
