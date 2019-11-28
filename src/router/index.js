import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index.vue";
import Search from "../components/search/index";
import About from "../components/about/index";
import Advertising from "../components/advertising/index";
import Case from "../components/case/index";
import EventPlanning from "../components/eventPlanning/index";
import News from "../components/news/index";
import Callus from "../components/callus/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/advertising",
    name: "advertising",
    component: Advertising
  },
  {
    path: "/case",
    name: "case",
    component: Case
  },
  {
    path: "/eventPlanning",
    name: "eventPlanning",
    component: EventPlanning
  },
  {
    path: "/news",
    name: "news",
    component: News
  },
  {
    path: "/callus",
    name: "callus",
    component: Callus
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
