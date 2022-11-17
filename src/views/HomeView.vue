<template>
  <div class="home">
    <post-component v-for="post in feed" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import { computed } from 'vue'
import axios from 'axios'

import PostComponent from '@/components/PostComponent'
import store from '@/store'

export default {
  components: {
    PostComponent
  },
  setup () {
    const feed = computed(() => store.state.feed)

    axios.get(store.state.api_url + 'post/getposts')
      .then(res => {
        console.log('feed', res)
        store.commit('getFeed', res.data)
      })
      .catch(err => {
        if (err) throw err
      })

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
