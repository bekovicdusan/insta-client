<template>
  <div>
    <div class="user-bar">
      <h2 class="username">{{ username }}</h2>
      <router-link to="/account/edit">
        <button class="tertiary-button">Edit profile</button>
      </router-link>
      <font-awesome-icon class="icon settings" icon="fa-gear" @click="showModal = !showModal"/>
    </div>
    <div class="user-stats">
      <span><strong>{{ numberOfPosts }}</strong>posts</span>
      <span><strong>{{ followers }}</strong>followers</span>
      <span><strong>{{ following }}</strong>following</span>
    </div>
    <div class="user-bio">
      <span><strong>{{ displayName }}</strong></span>
      <p>
        {{ bio }}
      </p>
    </div>
    <Teleport to="body">
      <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
      </transition>
    </Teleport>
    <Teleport to="body">
      <transition name="modal" appear>
        <div class="settings-modal" v-if="showModal">
          <div class="settings-item"><span>Change password</span></div>
          <div class="settings-item"><span>QR Code</span></div>
          <div class="settings-item"><span>Apps and websites</span></div>
          <div class="settings-item"><span>Notifications</span></div>
          <div class="settings-item"><span>Privacy and security</span></div>
          <div class="settings-item"><span>Supervision</span></div>
          <div class="settings-item"><span>Login activity</span></div>
          <div class="settings-item"><span>Emails from PinkyPink</span></div>
          <div class="settings-item" @click="logout"><span>Log out</span></div>
          <div class="settings-item" @click="showModal = false"><span>Cancel</span></div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

import store from '@/store'

export default {
  setup () {
    const username = computed(() => store.state.currentUser.username ? store.state.currentUser.username : '')
    const numberOfPosts = computed(() => store.state.currentUser.numberOfPosts)
    const displayName = computed(() => store.state.currentUser.display_name ? store.state.currentUser.display_name : '')
    const followers = computed(() => store.state.currentUser.followers ? store.state.currentUser.followers : 0)
    const following = computed(() => store.state.currentUser.following ? store.state.currentUser.following : 0)
    const bio = computed(() => store.state.currentUser.bio ? store.state.currentUser.bio : '')
    const showModal = ref(false)

    const logout = () => {
      store.commit('logout')
    }

    return {
      username,
      numberOfPosts,
      displayName,
      followers,
      following,
      bio,
      showModal,

      logout
    }
  }
}
</script>
