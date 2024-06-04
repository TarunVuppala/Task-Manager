import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ selectedDate }) => {
  const [data, setData] = useState({
    labels: ['Important', 'Soon', 'Later'],
    datasets: [
      {
        data: [30, 10, 60],
        backgroundColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
        hoverBackgroundColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
      },
    ],
  });

  useEffect(() => {
    if (selectedDate) {
      // Fetch data based on the selectedDate or filter existing data
      // Here, you can update the `data` state based on the selected date.
    }
  }, [selectedDate]);

  const options = {
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-64 mx-auto mb-8">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
