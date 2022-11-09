<template>
  <div class="register-container">
    <div class="main">
      <h1 class="headline">PinkyPink</h1>
      <h3>Register</h3>
      <div class="form-group">
        <input type="text" v-model="forename" placeholder="First Name">
        <input type="text" v-model="surname" placeholder="Last Name">
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <button class="register-btn" @click="register">Register</button>
        <div class="error-container" v-if="hasErrors">
          {{ error }}
        </div>
      </div>
    </div>
    <footer class="footer">
      <p>
        Already have an account? <router-link class="link" to="/login">Log in</router-link>
      </p>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import store from '@/store'
import router from '@/router'

export default {
  setup () {
    const forename = ref('')
    const surname = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref('')
    const hasErrors = ref(false)

    const register = () => {
      if (email.value === '' ||
       password.value === '' ||
       forename.value === '' ||
       surname.value === '') return alert('Please fill in all fields')

      const data = {
        forename: forename.value,
        surname: surname.value,
        email: email.value,
        password: password.value
      }

      axios.post(store.state.api_url + 'user/register', data)
        .then(res => {
          if (res.data.auth) {
            localStorage.setItem('jwt', res.data.token)
            router.push('/')
          } else {
            error.value = res.data.msg
            hasErrors.value = true
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
    return {
      forename,
      surname,
      email,
      password,
      error,
      hasErrors,

      register
    }
  }
}
</script>
