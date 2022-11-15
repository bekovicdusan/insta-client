<template>
  <div class="post-frame"
    :style="`background-image: url(${post.image})`"
    @mouseover="showIcons = !showIcons"
    @mouseleave="showIcons = !showIcons"
    >
    <div class="icon-container" v-if="showIcons">
      <div class="icon">
        <font-awesome-icon icon="fa-heart"/>
        <span>{{ likes }}</span>
      </div>
      <div class="icon">
        <font-awesome-icon icon="fa-comment"/>
        <span>{{ comments }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup () {
    const likes = ref(0)
    const comments = ref(0)
    const showIcons = ref(false)

    return {
      likes,
      comments,
      showIcons
    }
  }
}
</script>
