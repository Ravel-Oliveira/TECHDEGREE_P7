const traffic = document.getElementById('traffic-chart');
const daily = document.getElementById('daily-chart');
const mobile = document.getElementById('mobile-chart');


new Chart(traffic, {
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
    // aspectRatio: 1/2,
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
