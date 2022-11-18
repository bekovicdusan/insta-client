<template>
  <div class="edit-profile-container">
    <div class="profile-bar">
      <div class="profile-img-container">
        <profile-image :image="profileImg" :size="45" />
      </div>
      <div class="profile-actions">
        <h4 class="username">{{ username }}</h4>
        <span class="action">Change profile photo</span>
      </div>
    </div>
    <div class="form-input">
      <div class="left-side">
        <label for="forename">
          First name
        </label>
      </div>
      <div class="right-side">
        <input name="forename" type="text" :value="forename">
      </div>
    </div>
    <div class="form-input">
      <div class="left-side">
        <label for="surname">
          Last name
        </label>
      </div>
      <div class="right-side">
        <input name="surname" type="text" :value="surname">
        <p class="small-text">
          Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
        </p>
        <p class="small-text">
          You can only change your name within 14 days.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

import store from '@/store'

import ProfileImage from './ProfileImage'

export default {
  components: {
    ProfileImage
  },
  setup () {
    const profileImg = computed(() => store.state.currentUser.profileImg)
    const username = computed(() => store.state.currentUser.username)
    const forename = computed(() => store.state.currentUser.forename)
    const surname = computed(() => store.state.currentUser.surname)

    return {
      profileImg,
      username,
      forename,
      surname
    }
  }
}
</script>
