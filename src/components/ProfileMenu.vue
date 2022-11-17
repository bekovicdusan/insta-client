<template>
  <ul class="menu-container">
    <router-link :to="`/profile/${username}`" @click="showProfileMenu" class="nav-item">
      <li class="menu-item profile-item">
        <font-awesome-icon class="icon" icon="fa-user"/>
        <span>Profile</span>
      </li>
    </router-link>
    <router-link :to="`/profile/${username}/saved`" @click="showProfileMenu" class="nav-item">
      <li class="menu-item">
        <font-awesome-icon class="icon" icon="fa-bookmark"/>
        <span>Saved</span>
      </li>
    </router-link>
    <router-link to="/account/edit" @click="showProfileMenu">
      <li class="menu-item">
        <font-awesome-icon class="icon" icon="fa-gear"/>
        <span>Settings</span>
      </li>
    </router-link>
    <li class="menu-item" @click="showProfileMenu">
      <font-awesome-icon class="icon" icon="fa-repeat"/>
      <span>Switch accounts</span>
    </li>
    <li class="menu-item logout" @click="logout">Log out</li>
  </ul>
</template>

<script>
import { computed } from 'vue'

import store from '@/store'

export default {
  setup () {
    const username = computed(() => store.state.currentUser.username)

    const logout = () => {
      store.commit('logout')
      showProfileMenu()
    }

    const showProfileMenu = () => {
      store.commit('showProfileMenu')
    }

    return {
      username,

      logout,
      showProfileMenu
    }
  }
}
</script>
