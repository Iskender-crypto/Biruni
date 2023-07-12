import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import "primevue/resources/themes/saga-blue/theme.css"
import "primeicons/primeicons.css";
import "primevue/resources/primevue.css";
import "primeflex/primeflex.css";
import "jquery/dist/jquery.min.js"
const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.component("Card", Card);
app.component("Dialog", Dialog);
app.component("Button", Button);
app.mount("#app");
