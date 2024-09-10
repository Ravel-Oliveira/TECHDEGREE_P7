const ctx = document.getElementById('traffic-chart');


new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],
    datasets: [{
        label: 'My First Dataset',
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
});

