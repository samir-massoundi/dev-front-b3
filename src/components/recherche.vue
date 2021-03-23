<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <div class="select is-rounded v-model-select">
        <select v-model="categorie" @change="recherche">
          <option disabled value="">Selectionnez une catégorie</option>
          <option>Nom</option>
          <option>Prénom</option>
          <option>Pays</option>
          <option>Animal Favori</option>
          <option>Fruit Favori</option>
          <option>Couleur Favori</option>
          <option>Film Favori</option>
        </select>
      </div>
    </div>
    <div class="column ">
      <input
        class="input is-primary is-rounded"
        v-model="inputRecherche"
        type="text"
        @change="getElemRecherche"
        placeholder="Recherche"
      />
    </div>
  </div>
  <p>Categorie selectionnée : {{ categorie }}</p>
  <p>Recherche : {{ inputRecherche }}</p>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'recherche',
  data() {
    return { categorie: '', inputRecherche: '' };
  },
  computed:{
    ...mapState(['peopleList']),

  },
  methods: {
    getElemRecherche() {
      this.$emit('champsrecherche', this.inputRecherche);
      console.log('we emit');
    },
  },
  emits: ['champsrecherche'],
};
</script>

<style></style>
