<template>
  <div
    class="bg-white rounded-lg p-4 flex items-center space-x-4 m-2 dark:bg-gray-800"
  >
    <div class="text-blue-500 text-3xl">
      <component :is="icon" class="w-8 h-8 text-gray-500 dark:text-gray-100" />
    </div>
    <div>
      <p class="text-gray-400 text-sm">{{ title }}</p>
      <p class="text-2xl font-bold">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ title: String, value: [String, Number], icon: Object });
</script>
