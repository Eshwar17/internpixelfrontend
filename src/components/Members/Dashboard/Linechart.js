import React from "react";
import { Line } from "react-chartjs-2";

const students = ["Jun 23", "Jul 23", "Aug 23", "Sep 23", "Oct 23", "Nov 23", "Dec 23"];
const points = [112000, 150000, 210000, 346670, 230000];

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
