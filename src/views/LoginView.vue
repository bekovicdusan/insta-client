<template>
  <div>
    <h3>Pinkie Pink</h3>
    <div class="form-group">
      <input type="text" id="email" v-model="email">
      <input type="text" id="password" v-model="password">
    </div>
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
