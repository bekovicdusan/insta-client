<template>
  <img :src="image" alt="profile img" class="profile-img" :style="{ width: size + 'px', height: size + 'px' }">
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>
