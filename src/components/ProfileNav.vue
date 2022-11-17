<template>
  <div class="nav-container">
    <router-link :to="`/profile/${username}`" class="nav-item">
      <font-awesome-icon class="icon" icon="fa-image"/>
      <span>
        POSTS
      </span>
    </router-link>
    <router-link :to="`/profile/${username}/saved`" class="nav-item">
      <font-awesome-icon class="icon" icon="fa-bookmark"/>
      <span>
        SAVED
      </span>
    </router-link>
    <router-link :to="`/profile/${username}/tagged`" class="nav-item">
      <font-awesome-icon class="icon" icon="fa-user-tag"/>
      <span>
        TAGGED
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    }
  }
}
</script>
