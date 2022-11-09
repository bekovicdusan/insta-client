<template>
  <div class="login-container">
    <div class="main">
      <h1 class="headline">PinkyPink</h1>
      <h3>Log In</h3>
      <div class="form-group">
        <input type="text" id="email" v-model="email" placeholder="Email">
        <input type="text" id="password" v-model="password" placeholder="Password">
        <button class="login-btn">Log in</button>
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

export default {
  setup () {
    const email = ref('')
    const password = ref('')

    return {
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

input {
  min-width: 185px;
  border-radius: 10px;
  outline: none;
  box-shadow: none;
  border: 1px solid #e0218a;
}

.link {
  text-decoration: none;
  color: #e0218a;
}

.login-container {
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
      }
    }
    .login-btn {
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
