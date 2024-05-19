import { createApp } from "vue";
import { createPinia } from "pinia";

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
app.use(createPinia());
app.use(router);

app.mount("#app");
