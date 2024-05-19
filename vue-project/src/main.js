import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useKakao } from "vue3-kakao-maps/@utils";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

// Create the app instance
const app = createApp(App);

// Register Pinia
app.use(createPinia());

// Register other plugins or utilities
useKakao(import.meta.env.VITE_KAKAO_MAP_SERVICE_KEY, ["clusterer"]);

// Register router
app.use(router);

// Mount the app
app.mount("#app");