// 引入axios并配置
import axios from "axios";

import store from "./store/index.js";

// 请求拦截器
axios.interceptors.request.use(
  function(config) {
    store.commit("showLoading");
    return config;
  },
  function(error) {
    store.commit("hideLoading");
    return Promise.reject(error);
  }
);

//响应拦截器
axios.interceptors.response.use(
  response => {
    store.commit("hideLoading");
    return response;
  },
  error => {
    store.commit("hideLoading");
    return Promise.reject(error);
  }
);
// 给axios配置请求拦截器
axios.interceptors.request.use(
  function(config) {
    var token = window.sessionStorage.getItem("token");
    config.headers.token = token;
    return config;
  },
  function(ereor) {
    return Promise.reject(ereor);
  }
);
// 基准路径
// axios.defaults.withCredentials = true;

// axios.defaults.baseURL = "http://127.0.0.1:8001";
axios.defaults.baseURL = "http://192.168.11.52:8001";
// axios.defaults.baseURL = userIP;
export default axios;
