<template>
  <div class="app">
    <header-bar v-if="isAuthenticated" />
    <router-view />
    <footer-bar v-if="isAuthenticated" />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'

import store from '@/store'

import { computed } from 'vue'

export default {
  components: {
    HeaderBar,
    FooterBar
  },
  setup () {
    const isAuthenticated = computed(() => store.state.isAuthenticated)

    return {
      isAuthenticated
    }
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
