<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <firstComponent msg="Projet developpement Front-end"/>
  <json/>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
import json from './components/json.vue'

export default {
  name: 'App',
  components: {
    FirstComponent,
    json,
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
  margin-top: 60px;
}
</style>
