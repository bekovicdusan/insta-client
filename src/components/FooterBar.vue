<template>
  <footer class="footer">
    <div class="icon-container">
      <button class="primary-button icon"><font-awesome-icon class="icon" icon="fa-house"/></button>
      <button class="primary-button icon"><font-awesome-icon class="icon" icon="fa-magnifying-glass"/></button>
      <button class="primary-button icon"><font-awesome-icon class="icon" icon="fa-images"/></button>
      <button class="primary-button icon"><font-awesome-icon class="icon" icon="fa-bell"/></button>
      <button class="primary-button icon"><font-awesome-icon class="icon" icon="fa-user"/></button>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>
