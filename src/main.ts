import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import utils from "./utils";
import "element-plus/theme-chalk/index.css";

const app = createApp(App);
app.use(router);
app.use(utils);

app.mount("#app");
