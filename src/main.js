import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faMagnifyingGlass, faImages, faBell, faUser, faCamera, faXmark, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHouse, faMagnifyingGlass, faImages, faBell, faUser, faCamera, faXmark, faUpload)
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
