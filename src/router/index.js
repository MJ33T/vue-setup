import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import ImageCrop from "../pages/ImageCrop.vue";
import ServiceOne from "../pages/ServiceOne.vue";
import ServiceThree from "../pages/ServiceThree.vue";
import ServiceTwo from "../pages/ServiceTwo.vue";
import AboutView from "../views/AboutView.vue";
import Authentication from "../views/Authentication.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  // {
  //   path: "/",
  //   component: Layout,

  //   children: [
  //     {
  //       path: "/",
  //       component: HomeView,
  //     },
  //     {
  //       path: "/about",
  //       component: AboutView,
  //     },
  //     {
  //       path: "/auth",
  //       component: Authentication,
  //     },
  //     {
  //       path: "/service-one",
  //       name: "service1",
  //       component: ServiceOne,
  //     },
  //     {
  //       path: "/service-two",
  //       name: "service2",
  //       component: ServiceTwo,
  //     },
  //     {
  //       path: "/service-three",
  //       name: "service3",
  //       component: ServiceThree,
  //     },
  //   ],
  // },
  {
    path: "/image-crop",
    name: "image-crop",
    component: ImageCrop,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
