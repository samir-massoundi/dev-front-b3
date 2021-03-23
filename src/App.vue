<template>
  <navbar/>
  <!-- <firstComponent msg="Projet developpement Front-end"/> -->
  <data-list/>
  <charts2 />
</template>

<script>
// import FirstComponent from './components/FirstComponent.vue'
import dataList from './components/DataList.vue'
import navbar from './components/navbar.vue'
import charts2 from './components/charts2.vue'


export default {
  name: 'App',
  components: {
    // FirstComponent,
    dataList,
    navbar,
    charts2,

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
.hidden{
    display: none;
}
#hidden{
    display: none;
}
</style>
