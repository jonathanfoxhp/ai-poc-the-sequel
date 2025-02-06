import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler // Enables the fill option for the area chart
);

const Equalizer = ({
  eqData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // eqData = [0.5, 3.2, -2, 3, 0, -1, -0.2, 1, 2, 1],

  ...other
}) => {
  const data = {
    labels: ["32", "64", "125", "250", "500", "1k", "2k", "4k", "8k", "16k"],

    datasets: [
      {
        label: "Dataset 2",
        data: eqData,
        // [0.5, 3.2, -2, 3, 0, -1, -0.2, 1, 2, 1],
        pointRadius: 8, // Default size of points
        pointHoverRadius: 8, // Size of points when hovered
        pointBackgroundColor: "rgba(71, 89, 245, 1)", // Point color
        //  borderColor: "rgba(71, 89, 245, 0.5)", // Line color
        borderWidth: 0,
        // borderColor: "rgb(53, 162, 235)",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null; // Return early if the chart area is not available
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(71, 89, 245, 0.5)"); // Top color
          gradient.addColorStop(0.25, "rgba(71, 89, 245, 0.3)"); // Top color
          gradient.addColorStop(1, "rgba(71, 89, 245, 0)"); // Bottom color
          return gradient;
        },

        fill: "start", // Set the fill options
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    tension: 0.3,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0,0,0,0.1)",
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.1)",
        },
        border: {
          dash: [2, 4],
        },
      },
    },
    y: {
      min: -6, // Minimum value on Y-axis
      max: 6, // Maximum value on Y-axis
      ticks: {
        stepSize: 3, // Defines the interval between tick marks
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Equalizer;
