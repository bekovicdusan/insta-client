<template>
  <div class="account-edit-wrapper">
    <div class="account-edit-container">
      <account-edit-nav class="nav"/>
      <router-view></router-view>
    </div>
    <account-footer />
  </div>
</template>

<script>
import { onBeforeMount, onUnmounted } from 'vue'

import store from '@/store'

import AccountFooter from '@/components/AccountFooter'
import AccountEditNav from '@/components/AccountEditNav'

export default {
  components: {
    AccountFooter,
    AccountEditNav
  },
  setup () {
    onBeforeMount(() => {
      store.commit('isAccountPage', true)
    })
    onUnmounted(() => {
      store.commit('isAccountPage', false)
    })
  }
}
</script>
