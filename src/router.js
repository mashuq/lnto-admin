import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/curriculum",
      name: "curriculum",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Curriculum.vue")
    },
    {
      path: "/graph",
      name: "graph",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Graph.vue")
    }
  ]
});
