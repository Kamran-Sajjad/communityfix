// import React, { useEffect, useRef, useState } from 'react';
// import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js';
// import axios from 'axios';

// // Register Chart.js components
// Chart.register(PieController, ArcElement, Tooltip, Legend);

// export const UserStats = () => {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);
//   const [counts, setCounts] = useState({
//     resident: 0,
//     serviceTeam: 0,
//     admin: 0
//   });

//   // Bold Card Colors
//   const CARD_COLORS = {
//     resident: '#10b981',     // Emerald
//     serviceTeam: '#3b82f6',  // Blue
//     admin: '#000000'         // Black
//   };

//   // Light Theme-Compatible Pie Chart Colors
//   const PIE_COLORS = {
//     resident: '#d1fae5',     // Light Green
//     serviceTeam: '#dbeafe',  // Light Blue
//     admin: '#e5e7eb'         // Light Gray
//   };

//   useEffect(() => {
//     const fetchUserStats = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/users/statistics', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         if (response.data.success) {
//           const data = response.data.data;

//           const stats = {};
//           data.labels.forEach((label, index) => {
//             const key = label.toLowerCase().replace(/\s/g, '');
//             stats[key] = data.data[index];
//           });

//           setCounts({
//             resident: stats.resident || 0,
//             serviceTeam: stats.serviceteam || 0,
//             admin: stats.admin || 0
//           });

//           createChart(data);
//         }
//       } catch (err) {
//         console.error("Error fetching user statistics:", err);
//       }
//     };

//     const createChart = (data) => {
//       if (!chartRef.current) return;
//       const ctx = chartRef.current.getContext('2d');
//       if (!ctx) return;

//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//         chartInstance.current = null;
//       }

//       chartInstance.current = new Chart(ctx, {
//         type: 'pie',
//         data: {
//           labels: data.labels,
//           datasets: [{
//             data: data.data,
//             backgroundColor: [
//               PIE_COLORS.resident,
//               PIE_COLORS.serviceTeam,
//               PIE_COLORS.admin
//             ],
//             borderWidth: 1,
//             borderColor: '#ffffff'
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             legend: {
//               position: 'right',
//               labels: {
//                 usePointStyle: true,
//                 pointStyle: 'circle',
//                 padding: 20
//               }
//             },
//             tooltip: {
//               callbacks: {
//                 label: function (context) {
//                   const label = context.label || '';
//                   const value = context.raw || 0;
//                   const total = context.dataset.data.reduce((a, b) => a + b, 0);
//                   const percentage = Math.round((value / total) * 100);
//                   return `${label}: ${value} (${percentage}%)`;
//                 }
//               }
//             }
//           }
//         }
//       });
//     };

//     fetchUserStats();

//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//         chartInstance.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h3 className="text-lg font-medium mb-4">User Account Types</h3>

//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//         <div className="p-4 rounded-xl shadow-md text-white" style={{ backgroundColor: CARD_COLORS.resident }}>
//           <h4 className="text-md">Residents</h4>
//           <p className="text-2xl font-bold">{counts.resident}</p>
//         </div>
//         <div className="p-4 rounded-xl shadow-md text-white" style={{ backgroundColor: CARD_COLORS.serviceTeam }}>
//           <h4 className="text-md">Service Team</h4>
//           <p className="text-2xl font-bold">{counts.serviceTeam}</p>
//         </div>
//         <div className="p-4 rounded-xl shadow-md text-white" style={{ backgroundColor: CARD_COLORS.admin }}>
//           <h4 className="text-md">Admins</h4>
//           <p className="text-2xl font-bold">{counts.admin}</p>
//         </div>
//       </div>

//       {/* Pie Chart */}
//       <div className="h-[300px] w-full">
//         <canvas
//           ref={chartRef}
//           id="userStatsChart"
//           width="400"
//           height="400"
//         />
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useRef, useState } from 'react';
import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js';
import axios from 'axios';

// Register Chart.js components
Chart.register(PieController, ArcElement, Tooltip, Legend);

export const UserStats = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [counts, setCounts] = useState({
    resident: 0,
    serviceTeam: 0,
    admin: 0
  });

  // Bold Card Colors
  const CARD_COLORS = {
    resident: '#10b981',     // Emerald
    serviceTeam: '#3b82f6',  // Blue
    admin: '#000000'         // Black
  };

  // Light Theme-Compatible Pie Chart Colors
  const PIE_COLORS = {
    resident: '#d1fae5',     // Light Green
    serviceTeam: '#dbeafe',  // Light Blue
    admin: '#e5e7eb'         // Light Gray
  };

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users/statistics', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.success) {
          const data = response.data.data;

          const stats = {};
          data.labels.forEach((label, index) => {
            const key = label.toLowerCase().replace(/\s/g, '');
            stats[key] = data.data[index];
          });

          setCounts({
            resident: stats.resident || 0,
            serviceTeam: stats.serviceteam || 0,
            admin: stats.admin || 0
          });

          createChart(data);
        }
      } catch (err) {
        console.error("Error fetching user statistics:", err);
      }
    };

    const createChart = (data) => {
      if (!chartRef.current) return;
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;

      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }

      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.labels,
          datasets: [{
            data: data.data,
            backgroundColor: data.labels.map(label => {
              const key = label.toLowerCase().replace(/\s/g, '');
              return PIE_COLORS[key] || '#ccc'; // Fallback color
            }),
            borderWidth: 1,
            borderColor: '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20
              }
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = Math.round((value / total) * 100);
                  return `${label}: ${value} (${percentage}%)`;
                }
              }
            }
          }
        }
      });
    };

    fetchUserStats();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-medium mb-4">User Account Types</h3>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl shadow-md text-white" style={{ backgroundColor: CARD_COLORS.resident }}>
          <h4 className="text-md">Residents</h4>
          <p className="text-2xl font-bold">{counts.resident}</p>
        </div>
        <div className="p-4 rounded-xl shadow-md text-white" style={{ backgroundColor: CARD_COLORS.serviceTeam }}>
          <h4 className="text-md">Service Team</h4>
          <p className="text-2xl font-bold">{counts.serviceTeam}</p>
        </div>
        <div className="p-4 rounded-xl shadow-md text-white" style={{ backgroundColor: CARD_COLORS.admin }}>
          <h4 className="text-md">Admins</h4>
          <p className="text-2xl font-bold">{counts.admin}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="h-[300px] w-full">
        <canvas
          ref={chartRef}
          id="userStatsChart"
          width="400"
          height="400"
        />
      </div>
    </div>
  );
};
