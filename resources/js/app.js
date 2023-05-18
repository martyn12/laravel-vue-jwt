import {createApp} from "vue";
import './bootstrap'
import Index from "@/Index.vue";
import router from "@/router";


const app = createApp(Index)
    .use(router)
    .mount('#app')
