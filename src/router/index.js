import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Repositories from "../views/Repositories.vue";
import Repository from "../views/Repository.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/repositories",
    name: "Repositories",
    component: Repositories,
  },
  {
    path: "/repositories/:repoId",
    name: "Repository",
    component: Repository,
  },
  { path: "/:catchall(.*)*", name: "PageNotFound", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
