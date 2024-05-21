import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import { useKakao } from "vue3-kakao-maps/@utils";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

useKakao(import.meta.env.VITE_KAKAO_MAP_SERVICE_KEY, ["clusterer"]);
const app = createApp(App);
// register QuillEditor component
app.component("QuillEditor", QuillEditor);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

// Register other plugins or utilities
useKakao(import.meta.env.VITE_KAKAO_MAP_SERVICE_KEY, ["clusterer"]);

// Register router
app.use(router);

// Mount the app
app.mount("#app");
