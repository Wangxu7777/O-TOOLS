import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import BottomNav from "../views/BottomNav.vue";
import Client from "../views/client/Client.vue";
import ClientDetails from "../views/client/ClientDetails.vue";
import ClientDetailsManagement from "../views/client/ClientDetailsManagement.vue";

import ClientEntry from "../views/client/ClientEntry.vue";
import ClientModify from "../views/client/ClientModify.vue";
import ClientNewCommunicate from "../views/client/ClientNewCommunicate.vue";

import ClientAuthority from "../views/client/ClientAuthority.vue";
import ClientAuthorityEdit from "../views/client/ClientAuthorityEdit.vue";
import ClientAuthorityAddto from "../views/client/ClientAuthorityAddto.vue";
import ClientMaintain from "../views/client/ClientMaintain.vue";
import ClientDetailsManagementEdit from "../views/client/ClientDetailsManagementEdit.vue";
import Chance from "../views/chance/Chance.vue";
import ChanceDetails from "../views/chance/ChanceDetails.vue";
import ChanceDetailsManagement from "../views/chance/ChanceDetailsManagement.vue";
import ChanceDetailsManagementEdit from "../views/chance/ChanceDetailsManagementEdit.vue";
import ChanceEntry from "../views/chance/ChanceEntry.vue";
import ChanceAuthority from "../views/chance/ChanceAuthority.vue";
import ChanceAuthorityEdit from "../views/chance/ChanceAuthorityEdit.vue";
import ChanceAuthorityAddto from "../views/chance/ChanceAuthorityAddto.vue";
import ChanceMaintain from "../views/chance/ChanceMaintain.vue";
import ChanceModify from "../views/chance/ChanceModify.vue";
import Project from "../views/project/Project.vue";
import ProjectDetails from "../views/project/ProjectDetails.vue";
import ProjectDetailsManagement from "../views/project/ProjectDetailsManagement.vue";
import ProjectDetailsManagementEdit from "../views/project/ProjectDetailsManagementEdit.vue";
import ProjectEntry from "../views/project/ProjectEntry.vue";
import ProjectAuthority from "../views/project/ProjectAuthority.vue";
import ProjectAuthorityEdit from "../views/project/ProjectAuthorityEdit.vue";
import ProjectAuthorityAddto from "../views/project/ProjectAuthorityAddto.vue";
import ProjectMaintain from "../views/project/ProjectMaintain.vue";
import ProjectModify from "../views/project/ProjectModify.vue";

import Communicate from "../views/talk/Communicate.vue";

import CommunicateDetails from "../views/talk/CommunicateDetails.vue";
import CommunicateEdit from "../views/talk/CommunicateEdit.vue";

import Week from "../views/week/Week.vue";
import WeekDetails from "../views/week/WeekDetails.vue";

import WeekNew from "../views/week/WeekNew.vue";
import WeekNewCommunicate from "../views/week/WeekNewCommunicate.vue";
import WeekStatistics from "../views/week/WeekStatistics.vue";
import User from "../views/my/User.vue";
import ChangePassword from "../views/my/ChangePassword.vue";

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
        path: "/ClientDetailsManagementEdit",
        name: "ClientDetailsManagementEdit",
        component: ClientDetailsManagementEdit
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
      },
      {
        path: "/chance",
        name: "chance",
        component: Chance
      },
      {
        path: "/chanceDetails",
        name: "chanceDetails",
        component: ChanceDetails
      },
      {
        path: "/chanceDetailsManagement",
        name: "chanceDetailsManagement",
        component: ChanceDetailsManagement
      },
      {
        path: "/chanceDetailsManagementEdit",
        name: "chanceDetailsManagementEdit",
        component: ChanceDetailsManagementEdit
      },
      {
        path: "/chanceEntry",
        name: "chanceDetailsManagementEdit",
        component: ChanceEntry
      },
      {
        path: "/chanceAuthority",
        name: "chanceAuthority",
        component: ChanceAuthority
      },
      {
        path: "/chanceAuthorityEdit",
        name: "chanceAuthorityEdit",
        component: ChanceAuthorityEdit
      },
      {
        path: "/chanceAuthorityAddto",
        name: "chanceAuthorityAddto",
        component: ChanceAuthorityAddto
      },
      {
        path: "/chanceMaintain",
        name: "chanceMaintain",
        component: ChanceMaintain
      },
      {
        path: "/chanceModify",
        name: "chanceModify",
        component: ChanceModify
      },
      {
        path: "/project",
        name: "project",
        component: Project
      },
      {
        path: "/projectDetails",
        name: "projectDetails",
        component: ProjectDetails
      },
      {
        path: "/projectDetailsManagement",
        name: "projectDetailsManagement",
        component: ProjectDetailsManagement
      },
      {
        path: "/projectDetailsManagementEdit",
        name: "projectDetailsManagementEdit",
        component: ProjectDetailsManagementEdit
      },
      {
        path: "/projectEntry",
        name: "projectDetailsManagementEdit",
        component: ProjectEntry
      },
      {
        path: "/projectAuthority",
        name: "projectAuthority",
        component: ProjectAuthority
      },
      {
        path: "/projectAuthorityEdit",
        name: "projectAuthorityEdit",
        component: ProjectAuthorityEdit
      },
      {
        path: "/projectAuthorityAddto",
        name: "projectAuthorityAddto",
        component: ProjectAuthorityAddto
      },
      {
        path: "/projectMaintain",
        name: "projectMaintain",
        component: ProjectMaintain
      },
      {
        path: "/projectModify",
        name: "projectModify",
        component: ProjectModify
      },

      {
        path: "/week",
        name: "week",
        component: Week
      },
      {
        path: "/weekDetails",
        name: "weekDetails",
        component: WeekDetails
      },

      {
        path: "/weekNew",
        name: "weekNew",
        component: WeekNew
      },
      {
        path: "/weekNewCommunicate",
        name: "WeekNewCommunicate",
        component: WeekNewCommunicate
      },
      {
        path: "/weekStatistics",
        name: "WeekStatistics",
        component: WeekStatistics
      },
      {
        path: "/user",
        name: "User",
        component: User
      },
      {
        path: "/changePassword",
        name: "ChangePassword",
        component: ChangePassword
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
