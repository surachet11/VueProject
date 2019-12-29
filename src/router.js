import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Form from "./views/Form.vue";
import Photo from "./views/Photo.vue";
import User from "./views/User.vue";
import UserProfile from "./views/UserProfile.vue";

import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/form",
    component: Form
  },
  {
    path: "/photo",
    component: Photo
  },
  {
    path: "/users",
    component: User
  },
  {
    path: "/users/:id",
    component: UserProfile
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

export default router;
