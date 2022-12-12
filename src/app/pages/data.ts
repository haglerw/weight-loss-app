import { ChartType } from './model';

const goalChart: ChartType = {
  series: [{
    name: 'Goal for week',
    type: 'column',
    data: [12, 11, 5, 8, 10, 4, 6]
  }],
  chart: {
    height: 150,
    type: 'bar',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false
  },
  colors: ['#C3FF4D', '#C3FF4D', '#D7D1FF', '#D7D1FF', '#C3FF4D', '#D7D1FF', '#D7D1FF'],
  xaxis: {
    categories: ['t', 'w', 't', 'f', 's', 's', 'm'],
    labels: {
      style: {
        colors: ['#C3FF4D'],
        cssClass: 'text-white-50'
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    min: 2,
    max: 12,
    forceNiceScale: true
  }
};

const statData = [
  {
    icon: 'mdi mdi-watch',
    text: 'Left today',
    value: '27',
    progress: 70
  }, {
    icon: 'mdi mdi-fire',
    text: 'Calories burn',
    value: '866',
    progress: 50
  }, {
    icon: 'mdi mdi-walk',
    text: 'Steps',
    value: '7 579',
    progress: 70
  }
];

export { goalChart, statData };
