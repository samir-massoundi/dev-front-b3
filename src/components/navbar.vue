<template>
  <nav class="navbar is-link nav">
    <div class="navbar-brand ">
      <a class="navbar-item">
        <h1 class="">TP - Visualizer</h1>
      </a>
      <a
        role="button"
        class="navbar-burger"
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu  " id="navMenu">
      <div class="navbar-start is link">
        <a class="navbar-item" href="#">Home</a>
        <a class="navbar-item" href="#">Graphiques</a>
        <a class="navbar-item json-dl" @click="exporterJSON">Exporter JSON</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'navbar',
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
          el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
  },
  methods: {
    exporterJSON() {
      console.log(this.$store.state.peopleList);
      

      let dataStr = JSON.stringify({...this.$store.state.peopleList});
      let dataUri =
        "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

      let exportFileName = "list.json";

      let dlElement = document.createElement("a");
      dlElement.setAttribute("href", dataUri);
      dlElement.setAttribute("download", exportFileName);
      dlElement.click();
    },
  },
  computed: {
    ...mapState(['peopleList']),
  },
};
</script>
