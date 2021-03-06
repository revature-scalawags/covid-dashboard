import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';

export default function DoubleAxisBarChart({ data, label }) {

  const  chartContainer = useRef(null),
   [chartInstance, setChartInstance] = useState(null)

   //Initialize chart
   useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, getChartConfig(data))
      setChartInstance(newChartInstance)
    }
  }, [chartContainer])


  return (
    <div>
        <div className="card box-shadow m-5">
            <div className="card-body text-center">
                <canvas ref={chartContainer} />
                <p className="card-text">{label}</p>
            </div>
        </div>
    </div>
    
  );
}

const getChartConfig = (data) => {
   return ( {
    type: "bar",
    data: {
      labels: data.map(elem => Object.values(elem)[5].slice(0, 20)), 
      datasets: [
        {
          label: "Country",
          data: data.map(elem => Object.values(elem)[1]),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(163, 152, 171, 0.2)",
            "rgba(8, 255, 251, 0.2)",
            "rgba(28, 28, 26, 0.2)",
            "rgba(255, 253, 128, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(163, 152, 171, 0.2)",
            "rgba(8, 255, 251, 0.2)",
            "rgba(28, 28, 26, 0.2)",
            "rgba(255, 253, 128, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(163, 152, 171, 0.2)",
            "rgba(8, 255, 251, 0.2)",
            "rgba(28, 28, 26, 0.2)",
            "rgba(255, 253, 128, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(163, 152, 171, 1)",
            "rgba(8, 255, 251, 1)",
            "rgba(28, 28, 26, 1)",
            "rgba(255, 253, 128, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(163, 152, 171, 1)",
            "rgba(8, 255, 251, 1)",
            "rgba(28, 28, 26, 1)",
            "rgba(255, 253, 128, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(163, 152, 171, 1)",
            "rgba(8, 255, 251, 1)",
            "rgba(28, 28, 26, 1)",
            "rgba(255, 253, 128, 1)",
          ],
          borderWidth: 1
        },
        {
          label: "Bordering Country",
          data: data.map(elem => Object.values(elem)[3]),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(163, 152, 171, 0.2)",
            "rgba(8, 255, 251, 0.2)",
            "rgba(28, 28, 26, 0.2)",
            "rgba(255, 253, 128, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(163, 152, 171, 0.2)",
            "rgba(8, 255, 251, 0.2)",
            "rgba(28, 28, 26, 0.2)",
            "rgba(255, 253, 128, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(163, 152, 171, 0.2)",
            "rgba(8, 255, 251, 0.2)",
            "rgba(28, 28, 26, 0.2)",
            "rgba(255, 253, 128, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(163, 152, 171, 1)",
            "rgba(8, 255, 251, 1)",
            "rgba(28, 28, 26, 1)",
            "rgba(255, 253, 128, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(163, 152, 171, 1)",
            "rgba(8, 255, 251, 1)",
            "rgba(28, 28, 26, 1)",
            "rgba(255, 253, 128, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(163, 152, 171, 1)",
            "rgba(8, 255, 251, 1)",
            "rgba(28, 28, 26, 1)",
            "rgba(255, 253, 128, 1)",
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
      },
      animation: {
        animateScale: true,
        duration: 2000,
        easing: 'easeOutSine'
      }
    }
  })
}