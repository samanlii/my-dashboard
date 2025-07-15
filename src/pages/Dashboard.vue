<template>
  <DefaultLayout>
    <div>
      <div class="p-4 max-w-md">
        <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
        <p class="flex">Welcome, {{ auth.username }}!</p>
      </div>
      <Card title="Users" value="142" :icon="Icons.UserSolid" />
      <Card title="Sales" value="8,648$" :icon="Icons.DollarSolid" />
      <Card title="Visits" value="751" :icon="Icons.ChartSolid" />
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Card from "../components/Card.vue";
import { Icons } from "../assets/icons";
import { useUserAuthStore } from "../store/userAuthStore";

const auth = useUserAuthStore();
</script>
