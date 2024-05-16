import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useKakao } from "vue3-kakao-maps/@utils";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

useKakao(import.meta.env.VITE_KAKAO_MAP_SERVICE_KEY, ["clusterer"]);
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
