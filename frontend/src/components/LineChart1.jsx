import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const LineChart = ({ selectedDate }) => {
  const [data, setData] = useState({
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Data',
        data: [10, 20, 15, 30],
        fill: false,
        backgroundColor: '#4bc0c0',
        borderColor: '#4bc0c0',
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
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Weeks',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values',
        },
      },
    },
  };

  return (
    <div className="w-full h-64 mx-auto mb-8">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
