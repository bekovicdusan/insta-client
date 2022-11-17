<template>
  <div class="header-container">
    <header class="header">
      <div class="search-div">
        <font-awesome-icon class="icon" icon="fa-magnifying-glass"/>
        <input type="text" placeholder="Search">
      </div>
      <router-link to="/">
        <h1 class="headline">PinkyPink</h1>
      </router-link>
      <img :src="profileImg" alt="profile img" class="profile-img" @click="showProfileMenu">
      <profile-menu v-if="showMenu" />
      <div class="modal-overlay profile-menu" v-if="showMenu" @click="showProfileMenu"></div>
    </header>
  </div>
</template>

<script>
import { computed } from 'vue'

import ProfileMenu from '@/components/ProfileMenu'
import store from '@/store'

export default {
  components: {
    ProfileMenu
  },
  setup () {
    const profileImg = computed(() => store.state.currentUser.profileImg)
    const showMenu = computed(() => store.state.showProfileMenu)

    const showProfileMenu = () => {
      store.commit('showProfileMenu')
    }

    return {
      profileImg,
      showMenu,

      showProfileMenu
    }
  }
}
</script>
