<template>
    <span>
        <img :src="captcha" alt="" @click="Getcaptch()">
    </span>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
        name: "CaptchaImg",
      data(){
          return {
            captcha:'',
          }
      },
      methods:{
        async Getcaptch() {
          let req = await axios.get('api/getCaptcha/GenerateCaptchaHandler' , {});
          this.captcha = req.data.data.imageUrl
          this.captchaId = req.data.data.captchaId
        },
      }
    }
</script>

<style scoped>

</style>
