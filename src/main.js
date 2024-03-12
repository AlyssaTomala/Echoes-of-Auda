import { createApp } from "vue";
import App from "./App.vue";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

createApp(App).mount("#app");
