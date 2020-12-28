// import React, { useEffect, createRef } from 'react'
// import Chart from "chart.js"
// import Canvas from 'react-native-canvas'

// require("./RoundedCustom")

// function BarChart() {

//   let chartRef = createRef()

//   useEffect(() => {
//     const ref = chartRef.current.getContext("2d")
//     const barChartData = {
//       labels: ["Sat", "Sun", "Mon", "Tue", "Wen", "Thu", "Fri"],
//       datasets: [
//         {
//           maxBarThickness: 20,
//           label: "Balance",
//           backgroundColor: [
//             "#6379F4",
//             "#6379F4",
//             "#9DA6B5",
//             "#9DA6B5",
//             "#9DA6B5",
//             "#6379F4",
//             "#9DA6B5",
//           ],
//           borderColor: "#fff",
//           data: [9, 3, 5, 7, 4, 8, 6],
//         },
//       ],
//     };

//     new Chart(ref, {
//       type: "bar",
//       data: barChartData,
//       options: {
//         legend: {
//           display: false,
//         },
//         responsive: true,
//         scales: {
//           xAxes: [
//             {
//               gridLines: {
//                 lineWidth: 0,
//                 display: false,
//               },
//             },
//           ],
//           yAxes: [
//             {
//               ticks: {
//                 display: false,
//                 min: 0,
//               },
//               gridLines: {
//                 lineWidth: 0,
//                 display: false,
//               },
//             },
//           ],
//         },
//       },
//     })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return (
//     <Canvas ref={chartRef} style={{width: 100, height: 300}}></Canvas>
//   )
// }

// export default BarChart
