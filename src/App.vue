<template>
  <div class="app">
    <header-bar v-if="isAuthenticated" />
    <div class="main-content">
      <router-view />
    </div>
    <footer-bar v-if="isAuthenticated" />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'

import store from '@/store'

import { computed, onMounted } from 'vue'

export default {
  components: {
    HeaderBar,
    FooterBar
  },
  setup () {
    const isAuthenticated = computed(() => store.state.isAuthenticated)

    onMounted(() => {
      store.commit('isAuthenticated')
    })

    return {
      isAuthenticated
    }
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
