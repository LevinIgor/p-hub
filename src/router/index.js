import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/person/:id",
      name: "person-page",
      component: () => import("@/views/PersonView.vue"),
    },
  ],
});

export default router;
