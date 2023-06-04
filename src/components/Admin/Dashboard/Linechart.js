import React from "react";
import { Line } from "react-chartjs-2";

const students = ["Hanisha(B9)", "Bharath(B3)", "Vyshnavi(B9)", "Kavya(B9)", "Vidhya(B9)"];
const points = [800, 950, 700, 850, 650];

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
