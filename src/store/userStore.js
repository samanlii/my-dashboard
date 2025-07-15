import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    const stored = JSON.parse(localStorage.getItem("users"));
    return {
      users:
        stored && Array.isArray(stored) && stored.length
          ? stored
          : [
              {
                id: 1,
                name: "Saman Torabli",
                email: "saman@gmail.com",
                role: "admin",
              },
              {
                id: 2,
                name: "Diba Rafienejad",
                email: "diba@gmail.com",
                role: "editor",
              },
              {
                id: 3,
                name: "Hamid Meyari",
                email: "hamid@gmail.com",
                role: "viewer",
              },
            ],
    };
  },

  actions: {
    addUser(name, email = "", role = "viewer") {
      const id = Math.floor(Math.random() * 1000);
      this.users.push({ id, name, email, role });
      this.saveToLocalStorage();
    },

    removeUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
      this.saveToLocalStorage();
    },

    editUser(id, newData) {
      const user = this.users.find((u) => u.id === id);
      if (user) {
        Object.assign(user, newData);
        this.saveToLocalStorage();
      }
    },

    saveToLocalStorage() {
      localStorage.setItem("users", JSON.stringify(this.users));
    },
  },
});
