<template>
  <!-- <button v-on:click='importJson'>GET DATA</button>
  <p>{{ peopleList }}</p> -->
  <section class="section">
    <p>{{ $store.state._peopleList.length}} Resultats</p>

    <!-- <p>{{$store.state._peopleList}}</p> -->

    <recherche @champsrecherche="filteredList" v-model="arraySearch"/>

    
    <button @click="exportJSON">Exporter JSON</button>
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
          <tr v-for="person in filteredList" v-bind:key="person.id">
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
    <div class="container">
      <nav
        class="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
          <li><span class="pagination-ellipsis">&hellip;</span></li>
          <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
          <li>
            <a
              class="pagination-link is-current"
              aria-label="Page 46"
              aria-current="page"
              >46</a
            >
          </li>
          <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
          <li><span class="pagination-ellipsis">&hellip;</span></li>
          <li>
            <a
              class="pagination-link"
              aria-label="Goto page `{{(peopleList.length)/10}}`"
              >{{ peopleList.length / 10 }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
const fs = require("fs");
import recherche from './recherche.vue';
export default {
  name: 'dataList',
  components: {
    recherche,
  }, 
  data() {
    return {
      peopleList: [],
      arraySearch: '',
    };
  },
  props:
  {

  },
  methods: {
    // filtrer(searchedWord, searchedField) {
    //   console.log('we received the emit');
    //   console.log(searchedWord);
    //   console.log(searchedField);

    //   let tempPeopleList = this.peopleList;

    //   if (searchedWord != '' && searchedWord) {
    //     tempPeopleList = tempPeopleList.filter((person) => {
    //       return person.firstname
    //         .toUpperCase()
    //         .includes(searchedWord.toUpperCase());
    //     });
    //   }
    //   return tempPeopleList;
    // },
    exportJson(){
        let data = JSON.stringify(this.peopleList);
        fs.writeFileSync("people.json", data);
    }
  },
  mounted() {
    var requestURL =
      'https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7';
    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => (this.peopleList = data.people));
  },
  computed: {
    filteredList() {
        console.log("we receive");
      let tempPeopleList = this.peopleList;
        let i=2
      if (i==2) {
        tempPeopleList = tempPeopleList.filter((person) => {
          return person.lastname.includes('');
        });
      }
      return tempPeopleList;
    },


  },
};
</script>

<style></style>
