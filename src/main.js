import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(CkeditorPlugin);
app.use(ElementPlus);
app.mount('#app');
