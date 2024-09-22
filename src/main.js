import "swiper/css";
import "swiper/css/pagination";
import { createApp } from "vue";
import "vue-select/dist/vue-select.css";
import "vue3-toastify/dist/index.css";
import App from "./App.vue";
import "./app.css";
import "./main.css";
import router from "./router";

const CLIENT_ID =
  "471047266152-7b6uervq11v8qepvgqjrj95ndhanthml.apps.googleusercontent.com";

const app = createApp(App);
app.use(router);
// app.use(store);
// app.use(VueFire, {
//   firebaseApp,
//   modules: [VueFireAuth()],
// });
// app.use(Vue3Toastify);
// app.use(vue3GoogleLogin, {
//   clientId: CLIENT_ID,
// });
// app.use(VueVideoPlayer)
app.mount("#app");
