const traffic = document.getElementById('traffic-chart');
const daily = document.getElementById('daily-chart');
const mobile = document.getElementById('mobile-chart');
const chartMenu = document.querySelector('.chart-menu');
const hourlyRadio = document.querySelector('.hourly');
const dailyRadio = document.querySelector('.daily');
const weeklyRadio = document.querySelector('.weekly');
const monthlyRadio = document.querySelector('.monthly');

const trafficData = {
  hourlyLabel: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
  dailyLabel: ['26-32', '33-59', '40-5', '16-32', '23-9', '30-56', '37-33', '11-40', '21-31', '28-43', '36-50'],
  weeklyLabel: ['33-42', '46-49', '54-25', '25-32', '31-39', '41-46', '44-23', '32-10', '31-45', '39-48', '42-57'],
  monthlyLabel: ['41-52', '51-59', '60-35', '36-42', '43-49', '53-56', '55-63', '9-32', '41-57', '45-55', '55-62'],

  hourlyData: [750, 1200, 1000, 2000, 1500, 1800, 1350, 1900, 2300, 1550, 2500],
  dailyData: [730, 1240, 1500, 2100, 1300, 1500, 2350, 1300, 2130, 1450, 3000],
  weeklyData: [550, 1500, 1950, 3000, 1100, 3100, 3350, 2900, 2800, 2550, 3500],
  monthlyData: [1750, 2200, 2200, 3000, 2500, 2800, 3850, 2450, 3300, 3550, 4000],
}

function addData(chart, label, newData) {
  chart.data.labels = label;
  chart.data.datasets.forEach((dataset) => {
      dataset.data = newData;
  });
  chart.update();
}

function removeData(chart) {
  chart.data.labels = [];
  chart.data.datasets.forEach((dataset) => {
    dataset.data = [];
  });
  chart.update();
}

chartMenu.addEventListener('click', (evt) => {
  let e = evt.target;
  if (e.classList.contains('hourly') && hourlyRadio.checked) {
    removeData(chartTrafic)
    addData(chartTrafic, trafficData.hourlyLabel, trafficData.hourlyData)
  }
  if (e.classList.contains('daily') && dailyRadio.checked) {
    removeData(chartTrafic)
    addData(chartTrafic, trafficData.dailyLabel, trafficData.dailyData)
  }
  if (e.classList.contains('weekly') && weeklyRadio.checked) {
    removeData(chartTrafic)
    addData(chartTrafic, trafficData.weeklyLabel, trafficData.weeklyData)
  }
  if (e.classList.contains('monthly') && monthlyRadio.checked) {
    removeData(chartTrafic)
    addData(chartTrafic, trafficData.monthlyLabel, trafficData.monthlyData)
  }
})


let chartTrafic = new Chart(traffic, {
  type: 'line',
  data: {
  labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
  datasets: [{
      label: '',
      data: [750, 1200, 1000, 2000, 1500, 1800, 1350, 1900, 2300, 1550, 2500],
      fill: {
              target: true,
              above: 'rgb(213, 214, 236, .5)',
      },
      borderColor: 'rgb(116, 119, 191, .5)',
      borderWidth: 1,
      tension: 0.5
  }]
},
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  },
});


new Chart(daily, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
    data: [75, 110, 175, 125, 225, 200, 100],
    backgroundColor: [
      'rgb(116, 119, 191)',
    ],
    borderColor: [
      'rgb(116, 119, 191)',
    ],
    borderWidth: 1
  }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    // aspectRatio: 2/1,
    plugins: {
      legend: {
        display: false
      }
    }
  },
});

new Chart(mobile, {
  type: 'doughnut',
  data: {
    labels: [
      'Desktop',
      'Tablet',
      'Phone'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 80, 70],
      backgroundColor: [
        'rgb(116, 119, 191)',
        'rgb(129, 201, 143)',
        'rgb(81, 182, 200)'
      ],
      hoverOffset: 4
    }]
  },
  options: {  
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: true,
        position: 'right'
      }
    }
  }
});





// new Chart(traffic, {
//   type: 'line',
//   data: {
//     labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
//     datasets: [{
//         label: '',
//         data: [750, 1200, 1000, 2000, 1500, 1800, 1350, 1900, 2300, 1550, 2500],
//         fill: {
//                 target: true,
//                 above: 'rgb(213, 214, 236, .5)',
//         },
//         borderColor: 'rgb(116, 119, 191, .5)',
//         borderWidth: 1,
//         tension: 0.5
//     }]
//   },
//   options: {
//     maintainAspectRatio: false,
//     // aspectRatio: 1/2,
//     plugins: {
//       legend: {
//         display: false
//       }
//     }
//   },
// });


// new Chart(daily, {
//   type: 'bar',
//   data: {
//     labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
//     datasets: [{
//     data: [75, 110, 175, 125, 225, 200, 100],
//     backgroundColor: [
//       'rgb(116, 119, 191)',
//     ],
//     borderColor: [
//       'rgb(116, 119, 191)',
//     ],
//     borderWidth: 1
//   }]
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     // aspectRatio: 2/1,
//     plugins: {
//       legend: {
//         display: false
//       }
//     }
//   },
// });

// new Chart(mobile, {
//   type: 'doughnut',
//   data: {
//     labels: [
//       'Desktop',
//       'Tablet',
//       'Phone'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 80, 70],
//       backgroundColor: [
//         'rgb(116, 119, 191)',
//         'rgb(129, 201, 143)',
//         'rgb(81, 182, 200)'
//       ],
//       hoverOffset: 4
//     }]
//   },
//   options: {  
//     maintainAspectRatio: false, 
//     plugins: {
//       legend: {
//         display: true,
//         position: 'right'
//       }
//     }
//   }
// });
