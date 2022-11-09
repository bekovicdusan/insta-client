<template>
  <div class="register-container">
    <div class="main">
      <h1 class="headline">PinkyPink</h1>
      <h3>Register</h3>
      <div class="form-group">
        <input type="text" id="forename" v-model="forename" placeholder="First Name">
        <input type="text" id="surname" v-model="surname" placeholder="Last Name">
        <input type="text" id="email" v-model="email" placeholder="Email">
        <input type="text" id="password" v-model="password" placeholder="Password">
        <button class="register-btn">Register</button>
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

export default {
  setup () {
    const forename = ref('')
    const surname = ref('')
    const email = ref('')
    const password = ref('')

    return {
      forename,
      surname,
      email,
      password
    }
  }
}
</script>

<style lang="scss">
@import url('../styles/colors.scss');

body {
  margin: 0;
}

.register-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    .headline {
      color: #e0218a;
    }
    .form-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      input {
        margin-bottom: 10px;
        padding: 5px 10px;
        min-width: 185px;
      }
    }
    input {
      border-radius: 10px;
      outline: none;
      box-shadow: none;
      border: 1px solid #e0218a;
    }
    .register-btn {
      transition: .4s;
      font-weight: bold;
      font-size: 16px;
      margin-top: 5px;
      border-radius: 50%;
      border: 1px solid #e0218a;
      background-color: white;
      color: #e0218a;
      width: 75px;
      height: 75px;
      &:hover {
        transition: .4s;
        color: white;
        background-color: #e0218a;
        cursor: pointer;
      }
    }
  }
}

</style>
