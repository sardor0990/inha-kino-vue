import { createApp } from 'vue'
import App from './App.vue'
import router from './routers' // <---






import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import jQuery from 'jquery';
window.$ = window.Jquery = jQuery;

import 'popper.js';
import 'bootstrap';






// import {library} from '@fortawesome/fontawesome-svg-core'
// import {fas} from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
//
// library.add(fas);
// vue.component('font-awesome-icon', FontAwesomeIcon);

createApp(App).use(router).mount('#app')
