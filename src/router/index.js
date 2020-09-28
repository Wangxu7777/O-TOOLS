import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import BottomNav from "../views/BottomNav.vue";
BottomNav;
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "BottomNav",
    component: BottomNav,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: Index
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
