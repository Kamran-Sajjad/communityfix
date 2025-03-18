// // components/StatsCard.jsx
// export default function StatsCard({ title, value, description }) {
//     return (
//       <div className="bg-black text-white p-6 rounded-lg">
//         <h3 className="text-lg font-medium mb-2">{title}</h3>
//         <p className="text-3xl font-bold mb-1">{value}</p>
//         <p className="text-gray-400 text-sm">{description}</p>
//       </div>
//     );
//   }

// components/StatsCard.jsx
// components/StatsCard.jsx
// components/StatsCard.jsx
export default function StatsCard({ title, value, description }) {
  return (
    <div className="bg-black text-white p-4 lg:p-6 rounded-lg flex-1">
      <h3 className="text-sm lg:text-lg font-medium mb-2">{title}</h3>
      <p className="text-xl lg:text-3xl font-bold mb-1">{value}</p>
      <p className="text-gray-400 text-xs lg:text-sm">{description}</p>
    </div>
  );
}