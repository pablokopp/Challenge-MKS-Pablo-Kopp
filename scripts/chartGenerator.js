const chartFb = document.getElementById("chart-facebook").getContext("2d");
const chartTw = document.getElementById("chart-twitter").getContext("2d");
const chartIg = document.getElementById("chart-instagram").getContext("2d");
const chartYt = document.getElementById("chart-youtube").getContext("2d");

const chartFacebook = new Chart(chartFb, {
  type: "line",
  data: {
    labels: ["", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    datasets: [
      {
        label: "",
        data: [4, 3, 2, 6, 8, 9, 10, 9, 10, 12, 12],
        fill: false,
        borderColor: "hsl(243, 51%, 70%)",
        borderCapStyle: "round",
        circular: true,
        tension: 0.4,
        backgroundColor: "hsl(232, 19%, 15%)",
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 4,
    elements: {
      point: {
        backgroundColor: "transparent",
        radius: 5,
        pointHoverRadius: 7,
        pointBorderWidth: 1,
        pointHoverBackgroundColor: "hsl(243, 51%, 70%)",
      },
      line: {
        borderWidth: 2,
        cubicInterpolationMode: "default",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        padding: 10,
        caretSize: 0,
        caretPadding: 20,
        borderColor: "hsl(243, 51%, 70%)",
        backgroundColor: "hsl(232, 19%, 15%)",
        bodyAlign: "center",
        borderWidth: 2,
        xAlign: "center",
        yAlign: "top",
        displayColors: false,
        callbacks: {
          title: function (context) {
            return "";
          },

          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + " new followers";
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        display: true,
        ticks: {
          color: "#9299B6",
          stepSize: 2,
          padding: 10,
        },

        grid: {
          drawBorder: true,
          borderDash: [5, 5],
          color: "#9299B6",
          borderColor: "#9299B6",
          tickLength: 0,
        },
      },

      x: {
        ticks: {
          color: "#9299B6",
          padding: 16,
        },

        grid: {
          drawBorder: true,
          borderDash: [5, 5],
          color: "#9299B6",
          borderColor: "#9299B6",
          tickLength: 0,
        },
      },
    },
  },
});
const chartTwitter = new Chart(chartTw, {
  type: "line",
  data: {
    labels: ["", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    datasets: [
      {
        label: "",
        data: [4, 3, 2, 6, 8, 9, 10, 9, 10, 12, 12],
        fill: false,
        borderColor: "hsl(243, 51%, 70%)",
        borderCapStyle: "round",
        circular: true,
        tension: 0.4,
        backgroundColor: "hsl(232, 19%, 15%)",
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 4,
    elements: {
      point: {
        backgroundColor: "transparent",
        radius: 5,
        pointHoverRadius: 7,
        pointBorderWidth: 1,
        pointHoverBackgroundColor: "hsl(243, 51%, 70%)",
      },
      line: {
        borderWidth: 2,
        cubicInterpolationMode: "default",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        padding: 10,
        caretSize: 0,
        caretPadding: 20,
        borderColor: "hsl(243, 51%, 70%)",
        backgroundColor: "hsl(232, 19%, 15%)",
        bodyAlign: "center",
        borderWidth: 2,
        xAlign: "center",
        yAlign: "top",
        displayColors: false,
        callbacks: {
          title: function (context) {
            return "";
          },

          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + " new followers";
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        display: true,
        ticks: {
          color: "#9299B6",
          stepSize: 2,
          padding: 10,
        },

        grid: {
          drawBorder: true,
          borderDash: [5, 5],
          color: "#9299B6",
          borderColor: "#9299B6",
          tickLength: 0,
        },
      },

      x: {
        ticks: {
          color: "#9299B6",
          padding: 16,
        },

        grid: {
          drawBorder: true,
          borderDash: [5, 5],
          color: "#9299B6",
          borderColor: "#9299B6",
          tickLength: 0,
        },
      },
    },
  },
});
const chartInstagram = new Chart(chartIg, {
  type: "line",
  data: {
    labels: ["", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    datasets: [
      {
        label: "",
        data: [4, 3, 2, 6, 8, 9, 10, 9, 10, 12, 12],
        fill: false,
        borderColor: "hsl(243, 51%, 70%)",
        borderCapStyle: "round",
        circular: true,
        tension: 0.4,
        backgroundColor: "hsl(232, 19%, 15%)",
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 4,
    elements: {
      point: {
        backgroundColor: "transparent",
        radius: 5,
        pointHoverRadius: 7,
        pointBorderWidth: 1,
        pointHoverBackgroundColor: "hsl(243, 51%, 70%)",
      },
      line: {
        borderWidth: 2,
        cubicInterpolationMode: "default",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        padding: 10,
        caretSize: 0,
        caretPadding: 20,
        borderColor: "hsl(243, 51%, 70%)",
        backgroundColor: "hsl(232, 19%, 15%)",
        bodyAlign: "center",
        borderWidth: 2,
        xAlign: "center",
        yAlign: "top",
        displayColors: false,
        callbacks: {
          title: function (context) {
            return "";
          },

          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + " new followers";
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        display: true,
        ticks: {
          color: "#9299B6",
          stepSize: 2,
          padding: 10,
        },

        grid: {
          drawBorder: true,
          borderDash: [5, 5],
          color: "#9299B6",
          borderColor: "#9299B6",
          tickLength: 0,
        },
      },

      x: {
        ticks: {
          color: "#9299B6",
          padding: 16,
        },

        grid: {
          drawBorder: true,
          borderDash: [5, 5],
          color: "#9299B6",
          borderColor: "#9299B6",
          tickLength: 0,
        },
      },
    },
  },
});
const chartYoutube = new Chart(chartYt, {
  type: "line",
  data: {
    labels: ["", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
    datasets: [
      {
        label: "",
        data: [4, 3, 2, 6, 8, 9, 10, 9, 10, 12, 12],
        fill: false,
        borderColor: "hsl(243, 51%, 70%)",
        borderCapStyle: "round",
        circular: true,
        tension: 0.4,
        backgroundColor: "hsl(232, 19%, 15%)",
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 4,
    elements: {
      point: {
        backgroundColor: "transparent",
        radius: 5,
        pointHoverRadius: 7,
        pointBorderWidth: 1,
        pointHoverBackgroundColor: "hsl(243, 51%, 70%)",
      },
      line: {
        borderWidth: 2,
        cubicInterpolationMode: "default",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        padding: 10,
        caretSize: 0,
        caretPadding: 20,
        borderColor: "hsl(243, 51%, 70%)",
        backgroundColor: "hsl(232, 19%, 15%)",
        bodyAlign: "center",
        borderWidth: 2,
        xAlign: "center",
        yAlign: "top",
        displayColors: false,
        callbacks: {
          title: function (context) {
            return "";
          },

          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + " new followers";
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        display: true,
        ticks: {
          color: "#9299B6",
          stepSize: 2,
          padding: 10,
        },

        grid: {
          drawBorder: true,
          borderDash: [5, 5],
          color: "#9299B6",
          borderColor: "#9299B6",
          tickLength: 0,
        },
      },

      x: {
        ticks: {
          color: "#9299B6",
          padding: 16,
        },

        grid: {
          drawBorder: true,
          borderDash: [5, 5],
          color: "#9299B6",
          borderColor: "#9299B6",
          tickLength: 0,
        },
      },
    },
  },
});
