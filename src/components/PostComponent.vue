<template>
  <article class="post" :userid="post.user_id">
    <header class="post-header">
      <img :src="profileImg" alt="profile img" class="profile-img">
      <strong>{{ post.username }}</strong>
    </header>
    <section class="post-content">
      <img :src="post.image" :alt="post.caption">
    </section>
    <footer class="post-feed">
      <p class="user-desc"><strong>{{ post.username }}</strong> {{ post.caption }}</p>
      <span class="timestamp">Posted on {{ timestampToDate(post.timestamp) }}</span>
    </footer>
  </article>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import store from '@/store'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const profileImg = ref('https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png')

    onMounted(() => {
      // console.log(store.state.currentUser)
      axios.post(store.state.api_url + 'user/getprofile', {
        user_id: props.post.user_id
      })
        .then(({ data }) => {
          profileImg.value = data.details.profile_img
        })
        .catch(err => {
          if (err) throw err

          console.log('error fetching profile', err)
        })
    })

    const timestampToDate = (timestamp) => {
      const d = new Date(parseInt(timestamp))
      const year = d.getFullYear()
      let month = d.getMonth()
      if (month < 10) month = '0' + month
      let day = d.getDate()
      if (day < 10) day = '0' + day

      return month + '/' + day + '/' + year
    }

    return {
      profileImg,

      timestampToDate
    }
  }
}
</script>
