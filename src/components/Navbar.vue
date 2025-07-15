<template>
  <header
    class="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 dark:bg-gray-900"
  >
    <div class="text-lg font-semibold text-gray-700 dark:text-gray-100">
      Dashboard
    </div>

    <div class="flex items-center space-x-4">
      <button
        class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Search"
      >
        <component
          :is="Icons.SearchSolid"
          class="w-6 h-6 text-gray-500 dark:text-gray-100"
        />
      </button>

      <button
        class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Profile"
      >
        <component
          :is="Icons.UserSolid"
          class="w-6 h-6 text-gray-500 dark:text-gray-100"
        />
      </button>
      <button
        @click="theme.toggleTheme()"
        class="p-2 rounded hover:bg-gray-100 dark:text-yellow-300 dark:hover:bg-gray-700"
      >
        <component
          :is="theme.dark ? Icons.SunSolid : Icons.MoonSolid"
          class="w-6 h-6 text-gray-500 dark:text-gray-100"
        />
      </button>
    </div>
  </header>
</template>

<script setup>
import { Icons } from "../assets/icons";
import { useThemeStore } from "../store/themeStore";
const theme = useThemeStore();
</script>

<style scoped></style>
