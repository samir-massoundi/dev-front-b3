export const planetChartData = {
    type: "doughnut",
    data: {
      labels: ["Male", "Female"],
      datasets: [
        {
          data: [60, 40],
          backgroundColor: "rgba(54,73,93,.5)",
        },
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        
      }
    }
  };
  
  export default planetChartData;