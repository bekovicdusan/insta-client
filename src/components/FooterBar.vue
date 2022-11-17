<template>
  <footer class="footer">
    <div class="icon-container">
      <button class="primary-button icon" @click="goTo('/')"><font-awesome-icon class="icon" icon="fa-house"/></button>
      <button class="primary-button icon"><font-awesome-icon class="icon" icon="fa-compass"/></button>
      <button class="primary-button icon" @click="goTo('/newpost')"><font-awesome-icon class="icon" icon="fa-images"/></button>
      <button class="primary-button icon"><font-awesome-icon class="icon" icon="fa-bell"/></button>
      <button class="primary-button icon" @click="goTo('Profile', storeVar.state.currentUser.username)"><font-awesome-icon class="icon" icon="fa-user"/></button>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from '@/router'
import store from '@/store'

export default {
  components: {
    FontAwesomeIcon
  },
  setup () {
    const storeVar = store

    const goTo = (path, params) => {
      if (params) {
        router.push({ name: path, params: { username: params } })
      } else {
        router.push(path)
      }
    }

    return {
      storeVar,

      goTo
    }
  }
}
</script>
