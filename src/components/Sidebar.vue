<template>
  <aside
    class="w-64 bg-white border-r border-gray-200 h-screen p-4 flex flex-col dark:bg-gray-800 dark:text-gray-100"
  >
    <div class="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-100">
      MyDashboard
    </div>

    <nav class="flex flex-col space-y-2">
      <RouterLink
        to="/dashboard"
        class="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        :class="{
          'bg-gray-200 dark:bg-gray-800 font-semibold': isActive('/dashboard'),
        }"
      >
        Dashboard
      </RouterLink>

      <RouterLink
        to="/users"
        class="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        :class="{
          'bg-gray-200 dark:bg-gray-800 font-semibold': isActive('/users'),
        }"
      >
        Users
      </RouterLink>

      <RouterLink
        to="/settings"
        class="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        :class="{
          'bg-gray-200 dark:bg-gray-800 font-semibold': isActive('/settings'),
        }"
      >
        Settings
      </RouterLink>
      <button
        @click="logout"
        class="flex justify-start px-4 py-2 rounded hover:bg-red-200 dark:hover:bg-red-500"
      >
        Exit
      </button>
    </nav>
  </aside>
</template>

<script setup>
import { useRoute, RouterLink } from "vue-router";
import { useUserAuthStore } from "../store/userAuthStore.js";
import { useRouter } from "vue-router";

const auth = useUserAuthStore();
const router = useRouter();

const route = useRoute();
const logout = () => {
  auth.logout();
  router.push("/login");
};

const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped></style>
