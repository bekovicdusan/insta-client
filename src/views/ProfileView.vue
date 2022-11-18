<template>
  <div class="profile" ref="profile">
    <div class="profile-info-container">
      <div class="profile-img-container">
        <profile-image :image="profileImg" :size="150" @click="showModalUpdate = !showModalUpdate"/>
      </div>
      <div class="profile-details-container">
        <profile-details />
      </div>
    </div>
    <hr class="divider profile-nav">
    <profile-nav :username="profileUsername"/>
    <router-view />
    <div class="posts-container" v-if="showPosts">
      <post-square  v-for="post in posts" :key="post.id" :post="post"/>
    </div>
    <transition name="postModal">
      <post-modal v-if="showModal"/>
    </transition>
    <transition name="pop" appear>
      <div v-if="showModalUpdate" class="update-profile">
        <h4>Update your profile image</h4>
        <input type="text" placeholder="Add your img url here" v-model="newImage">
        <button ref="upload" class="secondary-button icon" @click="updateImage"><font-awesome-icon class="icon" icon="fa-upload"/></button>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import axios from 'axios'
import store from '@/store'
import router from '@/router'

import PostModal from '@/components/PostModal'
import PostSquare from '@/components/PostSquare'
import ProfileDetails from '@/components/ProfileDetails'
import ProfileNav from '@/components/ProfileNav'
import ProfileImage from '@/components/ProfileImage'

export default {
  components: {
    PostModal,
    PostSquare,
    ProfileDetails,
    ProfileNav,
    ProfileImage
  },
  setup () {
    const showModal = ref(false)
    const showModalUpdate = ref(false)
    const showPosts = computed(() => {
      if (router.currentRoute.value.path.includes('/saved') ||
        router.currentRoute.value.path.includes('/tagged')
      ) return false
      else return true
    })

    const posts = ref([])
    const profile = ref()
    const upload = ref()
    const profileImg = ref('https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png')
    const profileUsername = ref('')
    const newImage = ref('')

    const getPosts = () => {
      axios.post(store.state.api_url + 'user/getprofile', {
        auth: localStorage.getItem('jwt')
      })
        .then(({ data }) => {
          posts.value = data.details.posts
          profileUsername.value = data.details.username
          if (data.details.profile_img !== '' && data.details.profile_img) {
            profileImg.value = data.details.profile_img
          } else {
            profileImg.value = 'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'
          }
        })
        .catch(err => {
          if (err) {
            console.log('err: ', err)
          }
        })
    }

    const updateImage = () => {
      upload.value.value = 'Uploading...'
      axios.post(store.state.api_url + 'user/updateprofileimg', {
        username: profileUsername.value,
        profile_img: newImage.value
      })
        .then(res => {
          showModalUpdate.value = false
          profileImg.value = newImage.value

          console.log(res)
        })
        .catch(err => {
          if (err) {
            console.log('err: ', err)
          }
        })
    }

    const showPost = (event) => {
      console.log(event)

      // router.push({ name: PostModal, params: { username: post.user, post_id: post.id } })
    }

    onBeforeMount(() => {
      getPosts()
    })

    return {
      showModal,
      showModalUpdate,
      showPosts,
      posts,
      profileImg,
      newImage,
      profileUsername,
      profile,
      upload,

      showPost,
      getPosts,
      updateImage
    }
  }
}
</script>
