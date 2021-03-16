<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <navbar/>
  <firstComponent msg="Projet developpement Front-end"/>
  <json/>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import json from './components/json.vue'
import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    FirstComponent,
    json,
    navbar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
