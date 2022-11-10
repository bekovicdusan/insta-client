<template>
  <article class="post">
    <header class="post-header">{{ post.username }}</header>
    <section class="post-content">
      <img :src="post.image" :alt="post.caption">
    </section>
    <footer class="post-feed">
      <p class="user-desc"><strong>{{post.username + ': '}}</strong> {{ post.caption }}</p>
      <span class="timestamp">Posted on {{ timestampToDate(post.timestamp) }}</span>
    </footer>
  </article>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup () {
    const timestampToDate = (timestamp) => {
      const d = new Date(timestamp)
      const year = d.getFullYear()
      let month = d.getMonth()
      if (month < 10) month = '0' + month
      let day = d.getDate()
      if (day < 10) day = '0' + day

      return month + '/' + day + '/' + year
    }

    return {
      timestampToDate
    }
  }
}
</script>
