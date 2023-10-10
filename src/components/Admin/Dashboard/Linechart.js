import React from "react";
import { Line } from "react-chartjs-2";

const students = ["Aarav Patel(B24)", "Bharath(B13)", "Riya Sharma(B23)", "Arjun Gupta(B14)", "Siddharth Reddy(B15)"];
const points = [1900, 1800, 1150, 1950, 1850];

const Linechart = () => {
  const data = {
    labels: students,
    datasets: [
      {
        label: "Points",
        data: points,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Linechart;
