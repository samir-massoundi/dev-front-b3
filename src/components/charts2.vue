<template>
  <div class="columns">
    <div class="column is-half">
      <canvas id="genderChart"></canvas>
    </div>
    <div class="column is-half">
      <canvas id="animalChart"></canvas>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Chart from 'chart.js';

export default {
  name: 'charts2',
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['peopleList']),
    ...mapGetters(['getGenderStats', 'getPersonCount', 'getAnimalStats']),
    retrieveData() {
      return {
        male: this.getGenderStats('Male'),
        female: this.getGenderStats('Female'),

        cat: this.getAnimalStats('Cat'),
        dog: this.getAnimalStats('Dog'),
        bird: this.getAnimalStats('Bird'),
        rat: this.getAnimalStats('Rat'),
      };
    },
  },
  mounted() {
    new Chart(document.getElementById('genderChart').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Male', 'female'],
        datasets: [
          {
            label: 'Population en fonction du genre',
            data: [this.retrieveData.male, this.retrieveData.female],
            backgroundColor: ['rgb(255, 164, 0)', 'rgb(0, 159, 253)'],
            borderColor: ['rgb(255, 164, 0)', 'rgb(0, 159, 253)'],
            borderWidth: 1,
          },
        ],
      },
    });
    new Chart(document.getElementById('animalChart').getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Cat', 'Dog', 'Rat', 'Bird'],
        datasets: [
          {
            label: 'Favorite Animals',
            data: [this.retrieveData.cat, this.retrieveData.dog, this.retrieveData.bird, this.retrieveData.rat],
            backgroundColor: ['rgb(131, 33, 97)', 'rgb(155, 126, 222)', 'rgb(118, 231, 205)', 'rgb(82, 5, 10)'],
            borderColor: ['rgb(255, 164, 0)', 'rgb(0, 159, 253)'],
            borderWidth: 1,
          },
        ],
      },
    });
  },
};
</script>
