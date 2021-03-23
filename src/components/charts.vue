<template>
  <div class="columns">
    <div class="column is-half">
      <vue3-chart-js
        :id="genderChart.id"
        :type="genderChart.type"
        :data="genderChart.data"
      />
    </div>
    <div class="column is-half">
      <vue3-chart-js
        :id="doughnutChart.id"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
      />
    </div>
  </div>
  <div class="columns">
    <div class="column is-half">
      <vue3-chart-js
        :id="doughnutChart.id"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
      />
    </div>
    <div class="column is-half">
      <vue3-chart-js
        :id="doughnutChart.id"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

export default {
  name: 'charts',
  components: Vue3ChartJs,
  setup() {
    const chartRef = ref(null);

    const genderChart = {
      id: 'genderChart',
      type: 'bar',
      data: {
        labels: ['Male', 'Female'],
        datasets: [
          {
            backgroundColor: ['blue', 'yellow'],
            data:[50,40 ]
          },
        ],
      },
    };

    const doughnutChart = {
      id: 'doughnut',
      type: 'bar',
      data: {
        labels: ['Male', 'Fema', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [50, 20, 80, 10],
          },
        ],
      },
    };

    return {
      doughnutChart,
      genderChart,
      chartRef,
    };
  },
};
</script>
<style></style>9
