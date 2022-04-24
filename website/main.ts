import { createApp } from "vue";
import App from './app.vue';

import ZUI from 'z-ui';
// import ZUI from "../lib/index.esm";
// import Button from '../lib/button';
// import Icon from '../lib/icon';

import 'theme-chalk/src/index.scss';


createApp(App).use(ZUI).mount('#app');