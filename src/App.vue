<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <navbar/>
  <!-- <firstComponent msg="Projet developpement Front-end"/> -->
  <data-list/>
  <!-- <charts/> -->
</template>

<script>
// import FirstComponent from './components/FirstComponent.vue'
import dataList from './components/DataList.vue'
import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    // FirstComponent,
    dataList,
    navbar,
  },
   created: function () {
    // `this` est une référence à l'instance de vm
    console.log('App instance created')
    this.$store.dispatch('peopleListToStore')
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
