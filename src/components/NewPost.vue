<template>
  <main class="new-post">
    <section class="stream">
      <video ref="video" id="video" width="400" height="400" autoplay :class="!isCaptured ? 'show' : 'hide'"></video>
      <span id="close" @click="close" v-if="isCaptured">
        <font-awesome-icon class="icon" icon="fa-xmark"/>
      </span>
    </section>
    <section class="capture" :class="isCaptured ? 'show' : 'hide'">
      <canvas ref="canvas" id="canvas" width="400" height="400"></canvas>
      <textarea ref="textarea" id="myTextarea" cols="30" rows="2" placeholder="Write your caption here..." v-model="caption"></textarea>
    </section>
    <button id="capture" class="secondary-button icon" @click="capture" v-if="!isCaptured">
      <font-awesome-icon class="icon" icon="fa-camera"/>
    </button>
    <button id="upload" class="secondary-button icon" @click="upload" v-if="isCaptured">
      <font-awesome-icon class="icon" icon="fa-upload"/>
    </button>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'

import store from '@/store'
import router from '@/router'

export default {
  components: {
    FontAwesomeIcon
  },
  setup () {
    const video = ref()
    const canvas = ref()
    const textarea = ref()

    const capturedImg = ref('')
    const caption = ref('')
    const icon = ref('fa-camera')

    const isCaptured = ref(false)

    const constraints = ref({})

    const capture = () => {
      canvas.value.getContext('2d').drawImage(video.value, 0, 0, canvas.value.width, canvas.value.width)
      capturedImg.value = canvas.value.toDataURL('image/png')
      isCaptured.value = true
    }

    const close = () => {
      isCaptured.value = false
      capturedImg.value = ''
      textarea.value.value = ''
    }

    const upload = () => {
      axios.post(store.state.api_url + 'post/newpost', {
        auth_token: localStorage.getItem('jwt'),
        image: capturedImg.value,
        caption: caption.value
      })
        .then(res => {
          console.log('res ', res)
          isCaptured.value = false
          caption.value = ''
          capturedImg.value = ''
          textarea.value.value = ''

          router.push('/')
        })
        .catch(err => {
          console.log('err: ', err)
        })
    }

    onMounted(() => {
      constraints.value = {
        width: 400,
        height: 400
      }

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
          video: constraints.value
        }).then(stream => {
          video.value.srcObject = stream
          video.value.play()
        })
      }
    })

    return {
      video,
      canvas,
      textarea,
      icon,
      capturedImg,
      caption,
      isCaptured,
      constraints,

      capture,
      close,
      upload
    }
  }
}
</script>
