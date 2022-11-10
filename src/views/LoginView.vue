<template>
  <div class="login-container">
    <div class="main">
      <h1 class="headline">PinkyPink</h1>
      <h3>Log In</h3>
      <div class="form-group">
        <input type="text" v-model="email" placeholder="Email" :class="isWrongEmail ? 'error' : ''">
        <input type="password" v-model="password" placeholder="Password" :class="isWrongPassword ? 'error' : ''">
        <button class="login-btn" @click="login">Log in</button>
        <div class="error-container" v-if="isWrongEmail || isWrongPassword">
          {{ error }}
        </div>
      </div>
    </div>
    <footer class="footer">
      <p>
        Don't have an account? <router-link class="link" to="/register">Sign up</router-link>
      </p>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import store from '@/store'
import axios from 'axios'

export default {
  setup () {
    const email = ref('')
    const password = ref('')
    const error = ref('')
    const isWrongEmail = ref(false)
    const isWrongPassword = ref(false)

    const login = () => {
      if (email.value === '' || password.value === '') return alert('Please fill in all fields')

      const data = {
        email: email.value,
        password: password.value
      }

      axios.post(store.state.api_url + 'user/login', data)
        .then(res => {
          if (res.data.auth) {
            store.commit('login', res.data.token)
          } else {
            const errorMsg = res.data.msg
            error.value = errorMsg

            if (errorMsg.includes('Email')) {
              isWrongEmail.value = true
              isWrongPassword.value = false
            } else if (errorMsg.includes('Password')) {
              isWrongPassword.value = true
              isWrongEmail.value = false
            }
          }
        })
        .catch(err => {
          console.error(err)
        })
    }

    return {
      email,
      password,
      error,
      isWrongEmail,
      isWrongPassword,

      login
    }
  }
}
</script>
