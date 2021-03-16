<template>
  <p>Composant table.vue </p>
  <!-- <button v-on:click='importJson'>GET DATA</button>
  <p>{{ peopleList }}</p> -->
  <section class="section">
    <p>{{peopleList.length}} Resultats</p>
    <div class="container table-container">
      <table class="table is-striped is-fullwidth is-hoverable">
        <thead>
          <tr>
            <!-- <th>id</th> -->
            <th>Nom</th>
            <th>Prénom</th>
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
          <tr v-for="person in peopleList" v-bind:key="person.id">
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
          <li><a class="pagination-link" aria-label="Goto page `{{(peopleList.length)/10}}`">{{(peopleList.length)/10}}</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "json",
  data() {
    return { peopleList: [] };
  },
  methods: {
    importJson() {
      console.log("hello");
    },
  },
  mounted() {
    var requestURL =
      "https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7";
    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => (this.peopleList = data.people));
  },
};
</script>

<style>
</style>