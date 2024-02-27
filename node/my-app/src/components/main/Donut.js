import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = {
    labels: false,
    datasets: [{
      data: [50, 50, 50, 50],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(1, 205, 0)'],
      hoverOffset: 25,
      cutout: '82%',
      borderWidth: 25,
      borderColor: '#D0EEF7'
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
        hoverBorderWidth: 0,
      }
    }
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;