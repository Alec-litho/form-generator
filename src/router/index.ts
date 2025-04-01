import AdvancedFormView from "@/views/AdvancedFormView.vue";
import FormList from "@/views/FormList.vue";
import HomeView from "@/views/HomeView.vue";
import SimpleFormView from "@/views/SimpleFormView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/advanced-form",
    component: AdvancedFormView,
  },
  { path: "/simple-form", component: SimpleFormView },

  {
    path: "/forms",
    component: FormList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
