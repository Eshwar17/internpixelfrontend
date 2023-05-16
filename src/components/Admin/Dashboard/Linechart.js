import React from "react";
import { Line } from "react-chartjs-2";

const students = ["Sameena(B3)", "Aman(B7)", "Vidhya(B9)", "Nandini(B9)", "Archana(B3)"];
const points = [100, 200, 300, 250, 150];

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
