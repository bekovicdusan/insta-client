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

import { computed, onBeforeMount } from 'vue'
import axios from 'axios'

export default {
  components: {
    HeaderBar,
    FooterBar
  },
  setup () {
    const isAuthenticated = computed(() => store.state.isAuthenticated)

    onBeforeMount(() => {
      store.commit('isAuthenticated')

      if (isAuthenticated.value !== true) return

      axios.get(store.state.api_url + 'post/getposts')
        .then(res => {
          store.commit('getFeed', res.data)
          axios.post(store.state.api_url + 'user/getprofile', {
            auth: localStorage.getItem('jwt')
          })
            .then(res => {
              // console.log('instantiating user', res)
              store.commit('instantiateUser', res.data.details)
            })
            .catch(err => {
              if (err) throw err
            })
        })
        .catch(err => {
          if (err) throw err
        })
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
