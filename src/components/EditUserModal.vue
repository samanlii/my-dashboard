<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-lg shadow p-6 w-80">
      <h2 class="text-lg font-bold mb-4">Edit User</h2>

      <input
        v-model="form.name"
        class="w-full border rounded px-3 py-2 mb-4"
        placeholder="New Name"
      />

      <div class="flex justify-end gap-2">
        <button @click="$emit('close')" class="text-gray-500 hover:underline">
          Close
        </button>
        <button @click="save" class="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";

const props = defineProps({ user: Object });
const emit = defineEmits(["update", "close"]);

const form = reactive({
  name: "",
  email: "",
  role: "",
});

watch(
  () => props.user,
  (user) => {
    if (user) {
      form.name = user.name;
      form.email = user.email;
      form.role = user.role;
    }
  },
  { immediate: true }
);
const save = () => {
  emit("update", {
    name: form.name,
    email: form.email,
    role: form.role,
  });
};
</script>
