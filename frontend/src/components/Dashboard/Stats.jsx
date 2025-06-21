
// // // // import React, { useState } from "react";
// // // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// // // // export const Stats = () => {
// // // //   const [selectedDays, setSelectedDays] = useState("7");

// // // //   // Sample dummy data
// // // //   const data = [
// // // //     { day: "Mon", value: 20 },
// // // //     { day: "Tue", value: 35 },
// // // //     { day: "Wed", value: 18 },
// // // //     { day: "Thu", value: 50 },
// // // //     { day: "Fri", value: 40 },
// // // //     { day: "Sat", value: 59 },
// // // //     { day: "Sun", value: 35 },
// // // //   ];

// // // //   return (
// // // //     <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
// // // //       {/* Title and dropdown container */}
// // // //       {/* <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-4"> */}
// // // //       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
// // // //   {/* Title and year navigation */}
// // // //   <div className="flex items-center gap-2">
// // // //     <h3 className="text-lg font-medium">Statistics</h3>
// // // //     <div className="flex items-center">
// // // //       <button className="p-2 hover:bg-gray-100 rounded">
// // // //         <ChevronLeft className="w-4 h-4" />
// // // //       </button>
// // // //       <span className="mx-2">2024</span>
// // // //       <button className="p-2 hover:bg-gray-100 rounded">
// // // //         <ChevronRight className="w-4 h-4" />
// // // //       </button>
// // // //     </div>
// // // //   </div>

// // // //   {/* Dropdown */}
// // // //   <div className="md:w-auto">
// // // //     <select
// // // //       value={selectedDays}
// // // //       onChange={(e) => setSelectedDays(e.target.value)}
// // // //       className="border border-gray-300 rounded px-2 py-1 sm:w-auto"
// // // //     >
// // // //       <option value="7">7 days</option>
// // // //       <option value="14">14 days</option>
// // // //       <option value="30">30 days</option>
// // // //     </select>
// // // //   </div>
// // // // </div>


// // // //       {/* Responsive chart section */}
// // // //       <div className="mt-4 h-[200px] w-full">
// // // //         <ResponsiveContainer width="100%" height="100%">
// // // //           <LineChart data={data}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="day" />
// // // //             <YAxis />
// // // //             <Tooltip />
// // // //             <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
// // // //           </LineChart>
// // // //         </ResponsiveContainer>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // import React, { useState, useEffect, useRef } from "react";
// // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

// // // // Register Chart.js components
// // // Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

// // // export const Stats = () => {
// // //   const [selectedYear, setSelectedYear] = useState(2024);
// // //   const [timeRange, setTimeRange] = useState("monthly"); // "monthly" or "daily"
// // //   const chartRef = useRef(null);

// // //   // Sample dummy data
// // //   const monthlyData = {
// // //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
// // //     totalIssues: [120, 150, 180, 200, 220, 250, 230, 210, 190, 170, 140, 100],
// // //     pendingIssues: [30, 45, 60, 50, 70, 80, 65, 55, 40, 35, 25, 20]
// // //   };

// // //   const dailyData = {
// // //     labels: Array.from({length: 30}, (_, i) => (i + 1).toString()),
// // //     totalIssues: Array.from({length: 30}, () => Math.floor(Math.random() * 20) + 5),
// // //     pendingIssues: Array.from({length: 30}, () => Math.floor(Math.random() * 10) + 1)
// // //   };

// // //   useEffect(() => {
// // //     const ctx = chartRef.current.getContext('2d');
    
// // //     // Destroy previous chart instance if it exists
// // //     if (chartRef.current.chart) {
// // //       chartRef.current.chart.destroy();
// // //     }

// // //     const data = timeRange === "monthly" ? monthlyData : dailyData;
// // //     const label = timeRange === "monthly" ? "Months" : "Days";

// // //     chartRef.current.chart = new Chart(ctx, {
// // //       type: 'line',
// // //       data: {
// // //         labels: data.labels,
// // //         datasets: [
// // //           {
// // //             label: 'Total Issues',
// // //             data: data.totalIssues,
// // //             borderColor: '#4f46e5',
// // //             backgroundColor: 'rgba(79, 70, 229, 0.1)',
// // //             tension: 0.3,
// // //             borderWidth: 2,
// // //             pointRadius: 4,
// // //             pointBackgroundColor: '#4f46e5'
// // //           },
// // //           {
// // //             label: 'Pending Issues',
// // //             data: data.pendingIssues,
// // //             borderColor: '#e11d48',
// // //             backgroundColor: 'rgba(225, 29, 72, 0.1)',
// // //             tension: 0.3,
// // //             borderWidth: 2,
// // //             borderDash: [5, 5],
// // //             pointRadius: 4,
// // //             pointBackgroundColor: '#e11d48'
// // //           }
// // //         ]
// // //       },
// // //       options: {
// // //         responsive: true,
// // //         maintainAspectRatio: false,
// // //         scales: {
// // //           y: {
// // //             beginAtZero: true,
// // //             title: {
// // //               display: true,
// // //               text: 'Number of Issues'
// // //             }
// // //           },
// // //           x: {
// // //             title: {
// // //               display: true,
// // //               text: label
// // //             }
// // //           }
// // //         },
// // //         plugins: {
// // //           legend: {
// // //             position: 'top',
// // //           },
// // //           tooltip: {
// // //             mode: 'index',
// // //             intersect: false,
// // //           }
// // //         }
// // //       }
// // //     });

// // //     return () => {
// // //       if (chartRef.current.chart) {
// // //         chartRef.current.chart.destroy();
// // //       }
// // //     };
// // //   }, [timeRange, selectedYear]);

// // //   return (
// // //     <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
// // //       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
// // //         {/* Title and year navigation */}
// // //         <div className="flex items-center gap-2">
// // //           <h3 className="text-lg font-medium">Issue Statistics</h3>
// // //           <div className="flex items-center">
// // //             <button 
// // //               className="p-2 hover:bg-gray-100 rounded"
// // //               onClick={() => setSelectedYear(prev => prev - 1)}
// // //             >
// // //               <ChevronLeft className="w-4 h-4" />
// // //             </button>
// // //             <span className="mx-2">{selectedYear}</span>
// // //             <button 
// // //               className="p-2 hover:bg-gray-100 rounded"
// // //               onClick={() => setSelectedYear(prev => prev + 1)}
// // //             >
// // //               <ChevronRight className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Time range selector */}
// // //         <div className="flex gap-2">
// // //           <select
// // //             value={timeRange}
// // //             onChange={(e) => setTimeRange(e.target.value)}
// // //             className="border border-gray-300 rounded px-2 py-1 sm:w-auto"
// // //           >
// // //             <option value="monthly">Monthly</option>
// // //             <option value="daily">Daily</option>
// // //           </select>
// // //         </div>
// // //       </div>

// // //       {/* Chart container */}
// // //       <div className="mt-4 h-[300px] w-full">
// // //         <canvas ref={chartRef} />
// // //       </div>

// // //       {/* Summary statistics */}
// // //       <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
// // //         <div className="bg-blue-50 p-4 rounded-lg">
// // //           <h4 className="text-sm font-medium text-blue-800">Total Issues ({timeRange === "monthly" ? "Year" : "Month"})</h4>
// // //           <p className="text-2xl font-bold text-blue-600">
// // //             {timeRange === "monthly" 
// // //               ? monthlyData.totalIssues.reduce((a, b) => a + b, 0) 
// // //               : dailyData.totalIssues.reduce((a, b) => a + b, 0)}
// // //           </p>
// // //         </div>
// // //         <div className="bg-red-50 p-4 rounded-lg">
// // //           <h4 className="text-sm font-medium text-red-800">Pending Issues ({timeRange === "monthly" ? "Year" : "Month"})</h4>
// // //           <p className="text-2xl font-bold text-red-600">
// // //             {timeRange === "monthly" 
// // //               ? monthlyData.pendingIssues.reduce((a, b) => a + b, 0) 
// // //               : dailyData.pendingIssues.reduce((a, b) => a + b, 0)}
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // import React, { useState, useEffect, useRef } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// // import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
// // import axios from 'axios';
// // import { useAuth } from '../context/AuthContext'; // Assuming you have an auth context

// // // Register Chart.js components
// // Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

// // export const Stats = () => {
// //   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
// //   const [timeRange, setTimeRange] = useState("monthly");
// //   const [chartData, setChartData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const chartRef = useRef(null);
// //   const { authToken } = useAuth(); // Get auth token from context

// //   useEffect(() => {
// //     const fetchIssueStatistics = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get('/api/issues/statistics', {
// //           params: {
// //             year: selectedYear,
// //             timeRange: timeRange
// //           },
// //           headers: {
// //             Authorization: `Bearer ${authToken}`
// //           }
// //         });

// //         if (response.data.success) {
// //           setChartData(response.data.data);
// //         } else {
// //           setError("Failed to fetch data");
// //         }
// //       } catch (err) {
// //         console.error("Error fetching statistics:", err);
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchIssueStatistics();
// //   }, [selectedYear, timeRange, authToken]);

// //   useEffect(() => {
// //     if (!chartData || loading) return;

// //     const ctx = chartRef.current.getContext('2d');
    
// //     // Destroy previous chart instance if it exists
// //     if (chartRef.current.chart) {
// //       chartRef.current.chart.destroy();
// //     }

// //     const label = timeRange === "monthly" ? "Months" : "Days";

// //     chartRef.current.chart = new Chart(ctx, {
// //       type: 'line',
// //       data: {
// //         labels: chartData.labels,
// //         datasets: [
// //           {
// //             label: 'Total Issues',
// //             data: chartData.totalIssues,
// //             borderColor: '#4f46e5',
// //             backgroundColor: 'rgba(79, 70, 229, 0.1)',
// //             tension: 0.3,
// //             borderWidth: 2,
// //             pointRadius: 4,
// //             pointBackgroundColor: '#4f46e5'
// //           },
// //           {
// //             label: 'Pending Issues',
// //             data: chartData.pendingIssues,
// //             borderColor: '#e11d48',
// //             backgroundColor: 'rgba(225, 29, 72, 0.1)',
// //             tension: 0.3,
// //             borderWidth: 2,
// //             borderDash: [5, 5],
// //             pointRadius: 4,
// //             pointBackgroundColor: '#e11d48'
// //           }
// //         ]
// //       },
// //       options: {
// //         responsive: true,
// //         maintainAspectRatio: false,
// //         scales: {
// //           y: {
// //             beginAtZero: true,
// //             title: {
// //               display: true,
// //               text: 'Number of Issues'
// //             }
// //           },
// //           x: {
// //             title: {
// //               display: true,
// //               text: label
// //             }
// //           }
// //         },
// //         plugins: {
// //           legend: {
// //             position: 'top',
// //           },
// //           tooltip: {
// //             mode: 'index',
// //             intersect: false,
// //           }
// //         }
// //       }
// //     });

// //     return () => {
// //       if (chartRef.current.chart) {
// //         chartRef.current.chart.destroy();
// //       }
// //     };
// //   }, [chartData, loading, timeRange]);

// //   if (loading) {
// //     return (
// //       <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center h-[300px]">
// //         <p>Loading statistics...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center h-[300px]">
// //         <p className="text-red-500">Error: {error}</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
// //       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
// //         {/* Title and year navigation */}
// //         <div className="flex items-center gap-2">
// //           <h3 className="text-lg font-medium">Issue Statistics</h3>
// //           <div className="flex items-center">
// //             <button 
// //               className="p-2 hover:bg-gray-100 rounded"
// //               onClick={() => setSelectedYear(prev => prev - 1)}
// //             >
// //               <ChevronLeft className="w-4 h-4" />
// //             </button>
// //             <span className="mx-2">{selectedYear}</span>
// //             <button 
// //               className="p-2 hover:bg-gray-100 rounded"
// //               onClick={() => setSelectedYear(prev => prev + 1)}
// //             >
// //               <ChevronRight className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Time range selector */}
// //         <div className="flex gap-2">
// //           <select
// //             value={timeRange}
// //             onChange={(e) => setTimeRange(e.target.value)}
// //             className="border border-gray-300 rounded px-2 py-1 sm:w-auto"
// //           >
// //             <option value="monthly">Monthly</option>
// //             <option value="daily">Daily</option>
// //           </select>
// //         </div>
// //       </div>

// //       {/* Chart container */}
// //       <div className="mt-4 h-[300px] w-full">
// //         <canvas ref={chartRef} />
// //       </div>

// //       {/* Summary statistics */}
// //       {chartData && (
// //         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div className="bg-blue-50 p-4 rounded-lg">
// //             <h4 className="text-sm font-medium text-blue-800">Total Issues ({timeRange === "monthly" ? "Year" : "Month"})</h4>
// //             <p className="text-2xl font-bold text-blue-600">
// //               {chartData.totalIssues.reduce((a, b) => a + b, 0)}
// //             </p>
// //           </div>
// //           <div className="bg-red-50 p-4 rounded-lg">
// //             <h4 className="text-sm font-medium text-red-800">Pending Issues ({timeRange === "monthly" ? "Year" : "Month"})</h4>
// //             <p className="text-2xl font-bold text-red-600">
// //               {chartData.pendingIssues.reduce((a, b) => a + b, 0)}
// //             </p>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };
// // import React, { useState, useEffect, useRef } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// // import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
// // import axios from 'axios';

// // // Register Chart.js components
// // Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

// // export const Stats = () => {
// //   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
// //   const [timeRange, setTimeRange] = useState("monthly");
// //   const [chartData, setChartData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const chartRef = useRef(null);

// //   useEffect(() => {
// //     const fetchIssueStatistics = async () => {
// //       try {
// //         setLoading(true);
// //         const token = localStorage.getItem('token'); // Get token from localStorage
// //         const response = await axios.get('/api/issues/statistics', {
// //           params: {
// //             year: selectedYear,
// //             timeRange: timeRange
// //           },
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });

// //         if (response.data.success) {
// //           setChartData(response.data.data);
// //         } else {
// //           setError("Failed to fetch data");
// //         }
// //       } catch (err) {
// //         console.error("Error fetching statistics:", err);
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchIssueStatistics();
// //   }, [selectedYear, timeRange]);

// //   useEffect(() => {
// //     if (!chartData || loading) return;

// //     const ctx = chartRef.current.getContext('2d');
    
// //     // Destroy previous chart instance if it exists
// //     if (chartRef.current.chart) {
// //       chartRef.current.chart.destroy();
// //     }

// //     const label = timeRange === "monthly" ? "Months" : "Days";

// //     chartRef.current.chart = new Chart(ctx, {
// //       type: 'line',
// //       data: {
// //         labels: chartData.labels,
// //         datasets: [
// //           {
// //             label: 'Total Issues',
// //             data: chartData.totalIssues,
// //             borderColor: '#4f46e5',
// //             backgroundColor: 'rgba(79, 70, 229, 0.1)',
// //             tension: 0.3,
// //             borderWidth: 2,
// //             pointRadius: 4,
// //             pointBackgroundColor: '#4f46e5'
// //           },
// //           {
// //             label: 'Pending Issues',
// //             data: chartData.pendingIssues,
// //             borderColor: '#e11d48',
// //             backgroundColor: 'rgba(225, 29, 72, 0.1)',
// //             tension: 0.3,
// //             borderWidth: 2,
// //             borderDash: [5, 5],
// //             pointRadius: 4,
// //             pointBackgroundColor: '#e11d48'
// //           }
// //         ]
// //       },
// //       options: {
// //         responsive: true,
// //         maintainAspectRatio: false,
// //         scales: {
// //           y: {
// //             beginAtZero: true,
// //             title: {
// //               display: true,
// //               text: 'Number of Issues'
// //             }
// //           },
// //           x: {
// //             title: {
// //               display: true,
// //               text: label
// //             }
// //           }
// //         },
// //         plugins: {
// //           legend: {
// //             position: 'top',
// //           },
// //           tooltip: {
// //             mode: 'index',
// //             intersect: false,
// //           }
// //         }
// //       }
// //     });

// //     return () => {
// //       if (chartRef.current.chart) {
// //         chartRef.current.chart.destroy();
// //       }
// //     };
// //   }, [chartData, loading, timeRange]);

// //   if (loading) {
// //     return (
// //       <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center h-[300px]">
// //         <p>Loading statistics...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center h-[300px]">
// //         <p className="text-red-500">Error: {error}</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
// //       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
// //         {/* Title and year navigation */}
// //         <div className="flex items-center gap-2">
// //           <h3 className="text-lg font-medium">Issue Statistics</h3>
// //           <div className="flex items-center">
// //             <button 
// //               className="p-2 hover:bg-gray-100 rounded"
// //               onClick={() => setSelectedYear(prev => prev - 1)}
// //             >
// //               <ChevronLeft className="w-4 h-4" />
// //             </button>
// //             <span className="mx-2">{selectedYear}</span>
// //             <button 
// //               className="p-2 hover:bg-gray-100 rounded"
// //               onClick={() => setSelectedYear(prev => prev + 1)}
// //             >
// //               <ChevronRight className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Time range selector */}
// //         <div className="flex gap-2">
// //           <select
// //             value={timeRange}
// //             onChange={(e) => setTimeRange(e.target.value)}
// //             className="border border-gray-300 rounded px-2 py-1 sm:w-auto"
// //           >
// //             <option value="monthly">Monthly</option>
// //             <option value="monthly">Daily</option>
// //           </select>
// //         </div>
// //       </div>

// //       {/* Chart container */}
// //       <div className="mt-4 h-[300px] w-full">
// //         <canvas ref={chartRef} />
// //       </div>

// //       {/* Summary statistics */}
// //       {chartData && (
// //         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div className="bg-blue-50 p-4 rounded-lg">
// //             <h4 className="text-sm font-medium text-blue-800">Total Issues ({timeRange === "monthly" ? "Year" : "Month"})</h4>
// //             <p className="text-2xl font-bold text-blue-600">
// //               {chartData.totalIssues.reduce((a, b) => a + b, 0)}
// //             </p>
// //           </div>
// //           <div className="bg-red-50 p-4 rounded-lg">
// //             <h4 className="text-sm font-medium text-red-800">Pending Issues ({timeRange === "monthly" ? "Year" : "Month"})</h4>
// //             <p className="text-2xl font-bold text-red-600">
// //               {chartData.pendingIssues.reduce((a, b) => a + b, 0)}
// //             </p>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };
// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
// import axios from 'axios';

// // Register Chart.js components
// Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

// const months = [
//   { value: 1, label: 'January' },
//   { value: 2, label: 'February' },
//   { value: 3, label: 'March' },
//   { value: 4, label: 'April' },
//   { value: 5, label: 'May' },
//   { value: 6, label: 'June' },
//   { value: 7, label: 'July' },
//   { value: 8, label: 'August' },
//   { value: 9, label: 'September' },
//   { value: 10, label: 'October' },
//   { value: 11, label: 'November' },
//   { value: 12, label: 'December' }
// ];

// export const Stats = () => {
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
//   const [timeRange, setTimeRange] = useState("monthly");
//   const [chartData, setChartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const fetchIssueStatistics = async () => {
//       try {
//         setLoading(true);
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/issues/statistics', {
//           params: {
//             year: selectedYear,
//             month: timeRange === 'daily' ? selectedMonth : undefined,
//             timeRange: timeRange
//           },
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         if (response.data.success) {
//           setChartData(response.data.data);
//         } else {
//           setError("Failed to fetch data");
//         }
//       } catch (err) {
//         console.error("Error fetching statistics:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIssueStatistics();
//   }, [selectedYear, selectedMonth, timeRange]);

//   useEffect(() => {
//     if (!chartData || loading) return;

//     const ctx = chartRef.current.getContext('2d');
    
//     // Destroy previous chart instance if it exists
//     if (chartRef.current.chart) {
//       chartRef.current.chart.destroy();
//     }

//     const label = timeRange === "monthly" ? "Months" : "Days";
//     const isDaily = timeRange === "daily";

//     chartRef.current.chart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: isDaily 
//           ? chartData.labels.map(label => label.split('/')[1]) // Show just day number
//           : chartData.labels,
//         datasets: [
//           {
//             label: 'Total Issues',
//             data: chartData.totalIssues,
//             borderColor: '#4f46e5',
//             backgroundColor: 'rgba(79, 70, 229, 0.1)',
//             tension: 0.3,
//             borderWidth: 2,
//             pointRadius: 4,
//             pointBackgroundColor: '#4f46e5'
//           },
//           {
//             label: 'Pending Issues',
//             data: chartData.pendingIssues,
//             borderColor: '#e11d48',
//             backgroundColor: 'rgba(225, 29, 72, 0.1)',
//             tension: 0.3,
//             borderWidth: 2,
//             borderDash: [5, 5],
//             pointRadius: 4,
//             pointBackgroundColor: '#e11d48'
//           },
//           ...(isDaily ? [{
//             label: 'Resolved Issues',
//             data: chartData.resolvedIssues || [],
//             borderColor: '#10b981',
//             backgroundColor: 'rgba(16, 185, 129, 0.1)',
//             tension: 0.3,
//             borderWidth: 2,
//             pointRadius: 4,
//             pointBackgroundColor: '#10b981'
//           }] : [])
//         ]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: 'Number of Issues'
//             }
//           },
//           x: {
//             title: {
//               display: true,
//               text: label
//             }
//           }
//         },
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           tooltip: {
//             mode: 'index',
//             intersect: false,
//             callbacks: {
//               title: (context) => {
//                 if (isDaily) {
//                   const fullDate = chartData.labels[context[0].dataIndex];
//                   return `Day ${fullDate.split('/')[1]}, ${months[selectedMonth - 1].label} ${selectedYear}`;
//                 }
//                 return context[0].label;
//               }
//             }
//           }
//         }
//       }
//     });

//     return () => {
//       if (chartRef.current.chart) {
//         chartRef.current.chart.destroy();
//       }
//     };
//   }, [chartData, loading, timeRange, selectedMonth, selectedYear]);

//   const handleTimeRangeChange = (e) => {
//     setTimeRange(e.target.value);
//     // Reset to current month when switching to daily view
//     if (e.target.value === 'daily') {
//       setSelectedMonth(new Date().getMonth() + 1);
//     }
//   };

//   const handleMonthChange = (e) => {
//     setSelectedMonth(parseInt(e.target.value));
//   };

//   if (loading) {
//     return (
//       <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center h-[300px]">
//         <p>Loading statistics...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center h-[300px]">
//         <p className="text-red-500">Error: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//         {/* Title and year navigation */}
//         <div className="flex items-center gap-2">
//           <h3 className="text-lg font-medium">Issue Statistics</h3>
//           <div className="flex items-center">
//             <button 
//               className="p-2 hover:bg-gray-100 rounded"
//               onClick={() => setSelectedYear(prev => prev - 1)}
//             >
//               <ChevronLeft className="w-4 h-4" />
//             </button>
//             <span className="mx-2">{selectedYear}</span>
//             <button 
//               className="p-2 hover:bg-gray-100 rounded"
//               onClick={() => setSelectedYear(prev => prev + 1)}
//             >
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Time range and month selectors */}
//         <div className="flex flex-col sm:flex-row gap-2">
//           {timeRange === 'daily' && (
//             <select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               className="border border-gray-300 rounded px-2 py-1"
//             >
//               {months.map(month => (
//                 <option key={month.value} value={month.value}>
//                   {month.label}
//                 </option>
//               ))}
//             </select>
//           )}
//           <select
//             value={timeRange}
//             onChange={handleTimeRangeChange}
//             className="border border-gray-300 rounded px-2 py-1"
//           >
//             <option value="monthly">Monthly View</option>
//             <option value="daily">Daily View</option>
//           </select>
//         </div>
//       </div>

//       {/* Chart container */}
//       <div className="mt-4 h-[300px] w-full">
//         <canvas ref={chartRef} />
//       </div>

//       {/* Summary statistics */}
//       {chartData && (
//         <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="bg-blue-50 p-4 rounded-lg">
//             <h4 className="text-sm font-medium text-blue-800">Total Issues</h4>
//             <p className="text-2xl font-bold text-blue-600">
//               {chartData.totalIssues.reduce((a, b) => a + b, 0)}
//             </p>
//           </div>
//           <div className="bg-red-50 p-4 rounded-lg">
//             <h4 className="text-sm font-medium text-red-800">Pending Issues</h4>
//             <p className="text-2xl font-bold text-red-600">
//               {chartData.pendingIssues.reduce((a, b) => a + b, 0)}
//             </p>
//           </div>
//           {timeRange === 'daily' && (
//             <div className="bg-green-50 p-4 rounded-lg">
//               <h4 className="text-sm font-medium text-green-800">Resolved Issues</h4>
//               <p className="text-2xl font-bold text-green-600">
//                 {chartData.resolvedIssues?.reduce((a, b) => a + b, 0) || 0}
//               </p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import axios from 'axios';

// Register Chart.js components
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const months = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' }
];

export const Stats = () => {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth() + 1);
  const [timeRange, setTimeRange] = useState("monthly");
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Store chart instance separately

  // Create default empty data structure
  const getDefaultData = () => {
    if (timeRange === 'monthly') {
      return {
        labels: months.map(m => m.label),
        totalIssues: Array(12).fill(0),
        pendingIssues: Array(12).fill(0),
        resolvedIssues: Array(12).fill(0)
      };
    } else {
      const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
      return {
        labels: Array.from({length: daysInMonth}, (_, i) => `${selectedMonth}/${i+1}/${selectedYear}`),
        totalIssues: Array(daysInMonth).fill(0),
        pendingIssues: Array(daysInMonth).fill(0),
        resolvedIssues: Array(daysInMonth).fill(0)
      };
    }
  };

  useEffect(() => {
    const fetchIssueStatistics = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        
        // Set default data immediately
        setChartData(getDefaultData());
        
        const response = await axios.get('/api/issues/statistics', {
          params: {
            year: selectedYear,
            month: timeRange === 'daily' ? selectedMonth : undefined,
            timeRange: timeRange
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.success) {
          // Merge the API data with our default structure
          const mergedData = getDefaultData();
          
          if (response.data.data) {
            response.data.data.labels?.forEach((label, index) => {
              const position = mergedData.labels.indexOf(label);
              if (position !== -1) {
                mergedData.totalIssues[position] = response.data.data.totalIssues[index] || 0;
                mergedData.pendingIssues[position] = response.data.data.pendingIssues[index] || 0;
                mergedData.resolvedIssues[position] = response.data.data.resolvedIssues?.[index] || 0;
              }
            });
          }
          
          setChartData(mergedData);
        } else {
          setError("Failed to fetch data");
        }
      } catch (err) {
        console.error("Error fetching statistics:", err);
        setError(err.message);
        // Ensure we always have data to display
        setChartData(getDefaultData());
      } finally {
        setLoading(false);
      }
    };

    fetchIssueStatistics();
  }, [selectedYear, selectedMonth, timeRange]);

  useEffect(() => {
    // Cleanup function to destroy chart instance
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!chartData || loading || !chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const label = timeRange === "monthly" ? "Months" : "Days";
    const isDaily = timeRange === "daily";

    try {
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: isDaily 
            ? chartData.labels.map(label => label.split('/')[1]) // Show just day number
            : chartData.labels,
          datasets: [
            {
              label: 'Total Issues',
              data: chartData.totalIssues,
              borderColor: '#4f46e5',
              backgroundColor: 'rgba(79, 70, 229, 0.1)',
              tension: 0.3,
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: '#4f46e5'
            },
            {
              label: 'Pending Issues',
              data: chartData.pendingIssues,
              borderColor: '#e11d48',
              backgroundColor: 'rgba(225, 29, 72, 0.1)',
              tension: 0.3,
              borderWidth: 2,
              borderDash: [5, 5],
              pointRadius: 4,
              pointBackgroundColor: '#e11d48'
            },
            ...(isDaily ? [{
              label: 'Resolved Issues',
              data: chartData.resolvedIssues || [],
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              tension: 0.3,
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: '#10b981'
            }] : [])
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Issues'
              }
            },
            x: {
              title: {
                display: true,
                text: label
              }
            }
          },
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              callbacks: {
                title: (context) => {
                  if (isDaily) {
                    const fullDate = chartData.labels[context[0].dataIndex];
                    return `Day ${fullDate.split('/')[1]}, ${months[selectedMonth - 1].label} ${selectedYear}`;
                  }
                  return context[0].label;
                }
              }
            }
          }
        }
      });
    } catch (err) {
      console.error("Error creating chart:", err);
      setError("Failed to display chart");
    }
  }, [chartData, loading, timeRange, selectedMonth, selectedYear]);

  const handleTimeRangeChange = (e) => {
    const newTimeRange = e.target.value;
    setTimeRange(newTimeRange);
    
    // Reset to current month/year if switching to daily view and selected year is in the future
    if (newTimeRange === 'daily') {
      const currentDate = new Date();
      if (selectedYear > currentDate.getFullYear()) {
        setSelectedYear(currentDate.getFullYear());
        setSelectedMonth(currentDate.getMonth() + 1);
      }
    }
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (increment) => {
    const newYear = selectedYear + increment;
    setSelectedYear(newYear);
    
    // If in daily view and new year is in the future, reset to current month
    if (timeRange === 'daily' && newYear > currentDate.getFullYear()) {
      setSelectedMonth(currentDate.getMonth() + 1);
    }
  };

  if (loading) {
    return (
      <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center h-[300px]">
        <p>Loading statistics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center h-[300px]">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Title and year navigation */}
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">Issue Statistics</h3>
          <div className="flex items-center">
            <button 
              className="p-2 hover:bg-gray-100 rounded"
              onClick={() => handleYearChange(-1)}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="mx-2">{selectedYear}</span>
            <button 
              className="p-2 hover:bg-gray-100 rounded"
              onClick={() => handleYearChange(1)}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Time range and month selectors */}
        <div className="flex flex-col sm:flex-row gap-2">
          {timeRange === 'daily' && (
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {months.map(month => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          )}
          <select
            value={timeRange}
            onChange={handleTimeRangeChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="monthly">Monthly View</option>
            <option value="daily">Daily View</option>
          </select>
        </div>
      </div>

      {/* Chart container */}
      <div className="mt-4 h-[300px] w-full">
        <canvas ref={chartRef} />
      </div>

      {/* Summary statistics */}
      {chartData && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-blue-800">Total Issues</h4>
            <p className="text-2xl font-bold text-blue-600">
              {chartData.totalIssues.reduce((a, b) => a + b, 0)}
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-red-800">Pending Issues</h4>
            <p className="text-2xl font-bold text-red-600">
              {chartData.pendingIssues.reduce((a, b) => a + b, 0)}
            </p>
          </div>
          {timeRange === 'daily' && (
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-green-800">Resolved Issues</h4>
              <p className="text-2xl font-bold text-green-600">
                {chartData.resolvedIssues?.reduce((a, b) => a + b, 0) || 0}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};