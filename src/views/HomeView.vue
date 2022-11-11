<template>
  <div class="home">
    <post-component v-for="post in feed" :key="post.id" :post="post"/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import store from '@/store'
import { computed } from 'vue'
import PostComponent from '@/components/PostComponent'

export default {
  components: {
    PostComponent
  },
  setup () {
    const feed = computed(() => store.state.feed)

    const logout = () => {
      store.commit('logout')
    }

    return {
      feed,

      logout
    }
  }
}
</script>
