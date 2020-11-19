import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/Signup.vue"
import LoginPage from "../views/Login.vue";
import PostPage from "../views/Post.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signup-page",
    component: SignUpPage
  },
  
  {
    path: "/login",
    name: "login-page",
    component: LoginPage
  },
  {
    path: "/post",
    name: "post-page",
    component: PostPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
