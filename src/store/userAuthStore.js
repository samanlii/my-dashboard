import { defineStore } from "pinia";

export const useUserAuthStore = defineStore("userAuth", {
  state: () => ({
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
    username: localStorage.getItem("username"),
  }),

  getters: {
    isLoggedIn: (state) => !!state.username,
  },

  actions: {
    login(name) {
      this.isAuthenticated = true;
      this.username = name;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", name);
    },
    logout() {
      this.isAuthenticated = false;
      this.username = "";
      localStorage.setItem("isAuthenticated", "false");
      localStorage.removeItem("username");
    },
  },
});
