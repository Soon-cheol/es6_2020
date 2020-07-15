<template>
  <div id="app">
    <h1>2014 월드컵 나라별 포메이션</h1>
    <div id="nav">
      <router-link to="/Germany">
        <button>Germany</button>
      </router-link>
      <router-link to="/France">
        <button>France</button>
      </router-link>
    </div>
    <div id="content">
      <div class="infomation">
        <Infomation />
      </div>
      <div class="ground position433">
        <router-view :props="data"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import data from "./data";
import Germany from "./components/Germany.vue"; // 컴포넌트
import France from "./components/France.vue"; // 컴포넌트
import Infomation from "./Infomation.vue"; // 컴포넌트
import eventBus from "./eventBus"; // 플러그인
import vueRouter from "vue-router"; // 모듈

const router = new vueRouter({
  routes: [
    { path: "/Germany", component: Germany },
    { path: "/France", component: France },
  ],
});

export default {
  name: "app",
  router,
  components: {
    // Germany,
    // France,
    Infomation,
  },
  props: {
    props: {},
  },
  watch: {
    $route(to, from) {
      eventBus.$emit("player-info", 0);
    },
  },
  data: function() {
    return {
      data: data,
    };
  },
};
</script>
