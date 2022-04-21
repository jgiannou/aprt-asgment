import React from "react";
import Highcharts from 'highcharts'
import PieChart from 'highcharts-react-official'

 
const UsersChart = (props) => {
  const users = props.users;
  const titles = {
      mr : Object.values(users).filter(i =>i.title === 'mr').length,
      miss: Object.values(users).filter(i =>i.title === 'miss').length,
      ms : Object.values(users).filter(i =>i.title === 'ms').length,
      mrs : Object.values(users).filter(i =>i.title === 'mrs').length,

  }

  const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Titles Distribution'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            showInLegend: true,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Titles',
        colorByPoint: true,
        data: [{
            name: 'Mr',
            y: titles.mr,
            sliced: true,
            selected: true
        }, {
            name: 'Miss',
            y: titles.miss
        }, {
            name: 'Ms',
            y: titles.ms
        }, {
            name: 'Mrs',
            y: titles.mrs
        }]
    }]
  }
   return (
   <PieChart
    highcharts={Highcharts}
    options={options}
  />

  )
}


export default UsersChart