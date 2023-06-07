import { createApp } from 'vue'
import Toast, { PluginOptions } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(Toast).mount('#app')
