import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import BottomNav from "../views/BottomNav.vue";
import Client from "../views/Client.vue";
import ClientDetails from "../views/ClientDetails.vue";
import ClientDetailsManagement from "../views/ClientDetailsManagement.vue";
import Communicate from "../views/Communicate.vue";
import ClientEntry from "../views/ClientEntry.vue";
import ClientModify from "../views/ClientModify.vue";
import ClientNewCommunicate from "../views/ClientNewCommunicate.vue";
import CommunicateDetails from "../views/CommunicateDetails.vue";
import CommunicateEdit from "../views/CommunicateEdit.vue";
import ClientAuthority from "../views/ClientAuthority.vue";
import ClientAuthorityEdit from "../views/ClientAuthorityEdit.vue";
import ClientAuthorityAddto from "../views/ClientAuthorityAddto.vue";
import ClientMaintain from "../views/ClientMaintain.vue";

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
      },
      {
        path: "/client",
        name: "Client",
        component: Client
      },
      {
        path: "/clientDetails",
        name: "ClientDetails",
        component: ClientDetails
      },
      {
        path: "/clientDetailsManagement",
        name: "ClientDetailsManagement",
        component: ClientDetailsManagement
      },
      {
        path: "/communicate",
        name: "Communicate",
        component: Communicate
      },
      {
        path: "/clientEntry",
        name: "ClientEntry",
        component: ClientEntry
      },
      {
        path: "/clientModify",
        name: "ClientModify",
        component: ClientModify
      },
      {
        path: "/clientNewCommunicate",
        name: "ClientNewCommunicate",
        component: ClientNewCommunicate
      },
      {
        path: "/communicateDetails",
        name: "CommunicateDetails",
        component: CommunicateDetails
      },
      {
        path: "/communicateEdit",
        name: "CommunicateEdit",
        component: CommunicateEdit
      },
      {
        path: "/clientAuthority",
        name: "ClientAuthority",
        component: ClientAuthority
      },
      {
        path: "/clientAuthorityEdit",
        name: "ClientAuthorityEdit",
        component: ClientAuthorityEdit
      },
      {
        path: "/clientAuthorityAddto",
        name: "ClientAuthorityAddto",
        component: ClientAuthorityAddto
      },
      {
        path: "/clientMaintain",
        name: "ClientMaintain",
        component: ClientMaintain
      }
    ]
  }
];

const router = new VueRouter({
  routes
});
// 路由守卫设置
router.beforeEach(function(to, from, next) {
  var token = window.sessionStorage.getItem("token");
  if (token === null && to.path !== "/login") {
    // if (
    //   to.path.includes("/apply") ||
    //   to.path.includes("/verification") ||
    //   to.path.includes("/smsVerification") ||
    //   to.path.includes("/modify") ||
    //   to.path.includes("/complete")
    // ) {
    //   next();
    // } else {
    //   return next("/login");
    // }
    return next("/login");
  }
  next(); // 放行
});

export default router;
