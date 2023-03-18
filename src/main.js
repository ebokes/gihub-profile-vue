import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCodeBranch,
  faCodeCommit,
  faCodeFork,
  faFolderBlank,
  faUserFriends,
  faUserGroup,
  faUsers,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faFolderBlank,
  faCodeCommit,
  faUserGroup,
  faUserFriends,
  faCodeFork,
  faCodeBranch,
  faUsers,
  faGithub
);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
