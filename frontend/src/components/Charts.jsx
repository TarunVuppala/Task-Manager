import React, { useState } from 'react';
import Chart from "react-apexcharts";

const Charts = () => {
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <Chart
      // Option 1: Destructuring
      {...chart} // spread the chart object
      type="bar"
      width="500"
    />

    // Option 2: Accessing Properties Directly
    /* <Chart
      options={chart.options}
      series={chart.series}
      type="bar"
      width="500"
    /> */
  );
}

export default Charts;
