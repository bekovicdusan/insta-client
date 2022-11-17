import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false,
    currentUser: {},
    feed: [],
    showProfileMenu: false
  },
  getters: {
  },
  mutations: {
    getFeed (state, feed) {
      state.feed = feed
    },
    showProfileMenu (state) {
      state.showProfileMenu = !state.showProfileMenu
    },
    isAuthenticated (state) {
      if (localStorage.getItem('jwt') !== null) {
        state.isAuthenticated = true
      } else {
        state.isAuthenticated = false
      }
    },
    login (state, token) {
      state.isAuthenticated = true
      localStorage.setItem('jwt', token)

      router.push('/')
    },
    logout (state) {
      state.isAuthenticated = false
      localStorage.removeItem('jwt')
      state.currentUser = {}
      router.push('/login')
    },
    instantiateUser (state, user) {
      console.log('user is instantiated', user)
      state.currentUser.email = user.email
      state.currentUser.display_name = user.display_name
      state.currentUser.forename = user.forename
      state.currentUser.surname = user.surname
      state.currentUser.username = user.username
      state.currentUser._id = user._id
      state.currentUser.numberOfPosts = user.posts ? user.posts.length : 0
      state.currentUser.bio = user.bio ? user.bio : ''
      state.currentUser.profileImg = user.profile_img
      console.log('instantiated user', state.currentUser)
    }
  },
  actions: {
  }
})
