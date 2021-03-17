<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <navbar/>
  <!-- <firstComponent msg="Projet developpement Front-end"/> -->
  <DataList/>
</template>

<script>
// import FirstComponent from './components/FirstComponent.vue'
import DataList from './components/DataList.vue'
import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    // FirstComponent,
    DataList,
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
