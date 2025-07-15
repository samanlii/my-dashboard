import { createRouter, createWebHistory } from "vue-router";
import { useUserAuthStore } from "../store/userAuthStore";

const routes = [
  { path: "/", redirect: "/dashboard" },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../pages/Dashboard.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../pages/Users.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/users/create",
    name: "CreateUser",
    component: () => import("../pages/CreateUser.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../pages/Settings.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useUserAuthStore();
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
