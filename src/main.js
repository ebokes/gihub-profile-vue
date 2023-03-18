import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAt,
  faBars,
  faBriefcase,
  faCodeBranch,
  faCodeCommit,
  faCodeFork,
  faFolderBlank,
  faMapMarkerAlt,
  faTimes,
  faUserFriends,
  faUserGroup,
  faUsers,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(
  faUserSecret,
  faFolderBlank,
  faCodeCommit,
  faUserGroup,
  faUserFriends,
  faCodeFork,
  faCodeBranch,
  faUsers,
  faGithub,
  faTimes,
  faBars,
  faBriefcase,
  faMapMarkerAlt,

  faTwitter,
  faEnvelope
);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
