<template>
  <div class="post-frame" :style="`background-image: url(${post.image})`">
    <!-- <img :src="post.image" :alt="post.caption"> -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
