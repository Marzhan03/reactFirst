import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement } from "chart.js";

const DoughnutChart = () => {

  const data = {
    labels: false,
    datasets: [{
      data: [50, 65, 65, 50],
      hoverOffset: 75,
      cutout: '87%',
      borderWidth: 15,
      borderColor: '#EAF8FC'
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      doughnutlabel: {},
    },
    elements: {
      arc: {
        backgroundColor: ['#47DAAC', '#50D3FF', '#EB5652', '#FFD542'],
        hoverBorderColor: ['rgba(71, 218, 172, 1)', 'rgba(80, 211, 255, 1)', 'rgba(235, 86, 82, 1)', 'rgba(255, 206, 86, 1)'], 
        hoverBackgroundColor: ['rgba(71, 218, 172, 1)', 'rgba(80, 211, 255, 1)', 'rgba(235, 86, 82, 1)', 'rgba(255, 206, 86, 1)'],
        hoverBorderWidth: 20,
        hoverBorderRadius: 1,
        borderSkipped: 'top' // установите направление треугольника
      }
    },
    layout: {
      padding: {
        left: 25,
        right: 25,
        top: 25,
        bottom: 25
      }
    }
  };

  return (
    <div style={{ width: '760px', height: '760px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;