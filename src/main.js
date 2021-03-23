import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

createApp(App).use(store).use(Vue3ChartJs).mount('#app')
