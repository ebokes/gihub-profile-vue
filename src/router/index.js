import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Repository from "../views/Repository.vue";
import Dashboard from "../views/Dashboard.vue";
import PageNotFound from "../views/PageNotFound.vue";
import ProfilesSearch from "../views/ProfilesSearch.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/profiles-search",
    name: "ProfilesSearch",
    component: ProfilesSearch,
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
