<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <div class="select is-rounded v-model-select">
        <select v-model="categorie" @:change="recherche">
          <option disabled value="">Selectionnez une catégorie</option>
          <option>Nom</option>
          <option>Prénom</option>
          <option>Genre</option>
          <option>Mail</option>
          <option>Address</option>
          <option>Ville</option>
          <option>Pays</option>
          <option>Location</option>
          <option>Animal Favori</option>
          <option>Fruit Favori</option>
          <option>Couleur Favori</option>
          <option>Film Favori</option>
        </select>
      </div>
    </div>
    <div class="column ">
      <input class="input is-primary is-rounded" v-model="inputRecherche" type="text" @keyup.enter="recherche" placeholder="Recherche"  />
    </div>
  </div>
  <p> Categorie selectionnée : {{ categorie }} </p>
  <p> Recherche : {{ inputRecherche }} </p>
</template>

<script>
export default {
  name: 'recherche',
  data() {
    return { categorie: '',
    inputRecherche: ''
    };
  },
  methods:{
      recherche(){
        this.$emit('champs-recherche', this.inputRecherche );
        console.log("we emit");
      }
  },
  emits:[ 'champs-recherche']
};
</script>

<style>
</style>