<template>
  <DefaultLayout>
    <div class="p-4 max-w-xl mx-auto">
      <h2 class="text-xl font-bold mb-4">User List</h2>

      <form @submit.prevent="addNewUser" class="space-y-2 mb-6">
        <input
          v-model="newName"
          class="border p-2 w-full rounded dark:bg-gray-800"
          placeholder="Name"
        />
        <input
          v-model="newEmail"
          class="border p-2 w-full rounded dark:bg-gray-800"
          placeholder="Email"
          required
        />
        <select
          v-model="newRole"
          class="border p-2 w-full rounded dark:bg-gray-800"
          required
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </select>
        <button class="bg-yellow-600 text-white px-4 py-2 rounded w-full">
          Add User
        </button>
      </form>

      <input
        v-model="searchUser"
        class="border p-2 rounded w-full mb-4 dark:bg-gray-800"
        placeholder="Search by name..."
      />

      <ul v-if="filteredUsers.length" class="space-y-2">
        <li
          v-for="user in filteredUsers"
          :key="user.id"
          class="bg-white p-3 rounded shadow flex justify-between items-center dark:bg-gray-800"
        >
          <div>
            <div class="font-semibold">{{ user.name }}</div>
            <div class="text-sm text-gray-500 dark:text-gray-300">
              {{ user.email }} — {{ user.role }}
            </div>
          </div>
          <div class="flex gap-2 items-center">
            <button @click="userStore.removeUser(user.id)">
              <component :is="Icons.TrashSolid" class="w-5 h-5 text-red-500" />
            </button>
            <button @click="openModal(user)">
              <component :is="Icons.EditSolid" class="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </li>
      </ul>

      <div
        v-else
        class="text-gray-500 text-center mt-4 flex justify-center items-center"
      >
        Not Found!
        <component :is="Icons.ErrorSolid" class="w-5 h-5 text-gray-500 ml-2" />
      </div>

      <EditUserModal
        v-if="modalUser"
        :user="modalUser"
        @update="editUser"
        @close="closeModal"
      />
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import { Icons } from "../assets/icons";
import { useUserStore } from "../store/userStore";
import { ref, computed } from "vue";
import EditUserModal from "../components/EditUserModal.vue";

const userStore = useUserStore();

const modalUser = ref(null);
const searchUser = ref("");

const newName = ref("");
const newEmail = ref("");
const newRole = ref("");

const addNewUser = () => {
  if (!newName.value.trim()) return;

  userStore.addUser(
    newName.value.trim(),
    newEmail.value.trim(),
    newRole.value || "viewer"
  );

  newName.value = "";
  newEmail.value = "";
  newRole.value = "";
};

const filteredUsers = computed(() =>
  userStore.users.filter((user) =>
    user.name.toLowerCase().includes(searchUser.value.toLowerCase())
  )
);

const openModal = (user) => {
  modalUser.value = { ...user };
};

const closeModal = () => {
  modalUser.value = null;
};

const editUser = (updatedData) => {
  userStore.editUser(modalUser.value.id, updatedData);
  closeModal();
};
</script>
