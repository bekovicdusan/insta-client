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
      <profile-image :image="profileImg" :size="35" @click="showProfileMenu"/>
      <profile-menu v-if="showMenu" />
      <div class="modal-overlay profile-menu" v-if="showMenu" @click="showProfileMenu"></div>
    </header>
  </div>
</template>

<script>
import { computed } from 'vue'

import store from '@/store'

import ProfileMenu from '@/components/ProfileMenu'
import ProfileImage from '@/components/ProfileImage'

export default {
  components: {
    ProfileMenu,
    ProfileImage
  },
  setup () {
    const profileImg = computed(() => store.state.currentUser.profileImg ? store.state.currentUser.profileImg : 'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png')
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
