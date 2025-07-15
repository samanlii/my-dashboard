<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900"
  >
    <div class="bg-white dark:bg-gray-800 p-6 rounded shadow max-w-sm w-full">
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          class="w-full border p-2 rounded dark:bg-gray-700"
          required
        />
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full border p-2 rounded dark:bg-gray-700"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full border p-2 rounded dark:bg-gray-700"
          required
        />
        <button
          type="submit"
          class="w-full bg-yellow-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserAuthStore } from "../store/userAuthStore";

const username = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();
const auth = useUserAuthStore();
console.log(auth.isAuthenticated);

const handleLogin = () => {
  if (username.value && email.value && password.value) {
    auth.login(username.value);
    console.log("isAuthenticated:", auth.isAuthenticated);
    router.push("/users");
  }
};
</script>
