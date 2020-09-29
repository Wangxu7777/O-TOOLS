<template>
  <div id="app">
    <loading v-show="LOADING"></loading>
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Loading from "./views/loading.vue";
export default {
  name: "App",
  computed: {
    ...mapState(["LOADING"])
  },
  components: {
    Loading
  }
};
</script>
<style lang="less">
html,
body,
#app {
  height: 100%;
}
</style>
