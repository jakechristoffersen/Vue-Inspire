<template>
  <div id="app" :style="'background-image: url('+ image.url+')'">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    watch: {
      image: function (value) {
        // debugger
        document.body.style.backgroundImage = value.url
      }
    },
    mounted(){
      this.$store.dispatch('getImage')
    },
    computed:{
      image() {
      return this.$store.state.image
    }
    }
    
  }
</script>

<style>
  #app {
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
  }
</style>