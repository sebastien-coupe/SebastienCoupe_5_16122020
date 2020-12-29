import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import store from './store'

createApp(App).use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app')
