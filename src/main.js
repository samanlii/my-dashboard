import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.css";

import { createPinia } from "pinia";
import router from "./router";

import { useThemeStore } from "./store/themeStore";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
const themeStore = useThemeStore();
themeStore.applyTheme();
