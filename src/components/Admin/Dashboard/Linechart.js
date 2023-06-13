import React from "react";
import { Line } from "react-chartjs-2";

const students = ["Nandini(B9)", "Bharath(B3)", "Vyshnavi(B9)", "Sneha(B11)", "Ravindra(B9)"];
const points = [900, 1000, 1150, 950, 850];

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
