<template>
  <section class="section">
    <p>{{ $store.state.filteredPeopleList.length }} Resultats</p>

    <!-- <recherche @champsrecherche="filteredList" /> -->
    <div class="container">
      <nav
        class="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <a class="pagination-previous" @click="previousPage">Précédent</a>

        <ul class="pagination-list">
          <li>
            <a class="pagination-link is-current">{{ currentPage }}</a>
          </li>
        </ul>
        <a class="pagination-next" @click="nextPage">Suivant</a>
      </nav>
    </div>
    <div class="container is-fluid table-container">
      <table class="table is-striped is-fullwidth is-hoverable">
        <thead>
          <tr>
            <!-- <th>id</th> -->
            <th>Prenom</th>
            <th>Nom</th>
            <th>Genre</th>
            <th>Mail</th>
            <th>Address</th>
            <th>Ville</th>
            <th>Pays</th>
            <th>Location</th>
            <th>Téléphone</th>
            <th>Animal Favori</th>
            <th>Fruit Favori</th>
            <th>Couleur Favori</th>
            <th>Film Favori</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in pagination" v-bind:key="person.id">
            <!-- <td>{{ person.id }}</td> -->
            <td>{{ person.firstname }}</td>
            <td>{{ person.lastname }}</td>
            <td>{{ person.gender }}</td>
            <td>{{ person.contact.email }}</td>
            <td>{{ person.contact.address }}</td>
            <td>{{ person.contact.city }}</td>
            <td>{{ person.contact.country }}</td>
            <td>
              {{ person.contact.location.lon }} :
              {{ person.contact.location.lon }}
            </td>
            <td>{{ person.contact.phone }}</td>
            <td>{{ person.preferences.favorite_pet }}</td>
            <td>{{ person.preferences.favorite_fruit }}</td>
            <td>{{ person.preferences.favorite_color }}</td>
            <td>{{ person.preferences.favorite_movie }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
// const fs = require('fs');

import { mapGetters, mapState } from 'vuex';
// import recherche from './recherche.vue';
export default {
  name: 'dataList',
  components: {
    // recherche,
  },
  data() {
    return {
      arraySearch: '',
      personPerPage: '5',
      currentPage: '1',
    };
  },
  props: {},
  methods: {
    nextPage() {
      if (
        this.currentPage * this.personPerPage <
        this.$store.state.peopleList.length
      ) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
  mounted() {},
  computed: {
    ...mapGetters(['getPersonById', 'getPersonCount']),
    ...mapState(['peopleList', 'filteredPeopleList']),
    filteredList(message) {
      console.log(message);
      return 0;
    },
    pagination() {
      return this.$store.state.peopleList.slice(
        (this.currentPage - 1) * this.personPerPage,
        this.currentPage * this.personPerPage
      );
    },
  },
};
</script>
<style></style>
