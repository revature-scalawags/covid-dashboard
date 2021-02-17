import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';

export default function BarChart({ data }) {
    console.log(data)

  const  chartContainer = useRef(null),
   [chartInstance, setChartInstance] = useState(null)

   //Initialize chart
   useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, getChartConfig(data))
      setChartInstance(newChartInstance)
    }
  }, [chartContainer])

  //not sure if i'll be useing this. 
  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };


  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
}

const getChartConfig = (data) => {
    console.log(data)
   return ( {
    type: "bar",
    data: {
      labels: data.map(elem => Object.values(elem)[0]),
      datasets: [
        {
          label: "# of Votes",
          data: data.map(elem => Object.values(elem)[1]),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  })
}