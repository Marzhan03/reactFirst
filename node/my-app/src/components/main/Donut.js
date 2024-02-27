import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = {
    labels: false,
    datasets: [{
      data: [50, 50, 50, 50],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(1, 205, 0)'],
      cutout: '82%',
      borderWidth: 25,
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
    onHover: (_event, chartElements) => {
      if (chartElements && chartElements.length) {
        const index = chartElements[0].index;
        setHoveredIndex(index);
      } else {
        setHoveredIndex(null);
      }
    },
    elements: {
      arc: {
        hoverBorderWidth: 25,
        hoverBorderColor: 'rgba(234, 248, 252, 1)',
        outerRadius: (context) => {
          return context.dataIndex === hoveredIndex ? context.outerRadius + 50 : context.outerRadius;
        },
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