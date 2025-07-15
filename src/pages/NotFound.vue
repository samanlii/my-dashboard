<template>
  <DefaulLayout>
    <div class="text-center py-20">
      <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p class="text-lg text-gray-600 mb-6">Page Not Found!</p>
      <RouterLink to="/dashboard">Return to Dashboard.</RouterLink>
    </div>
  </DefaulLayout>
</template>

<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>
