import React from 'react';

const WorkStatistics = () => {
  const stats = [
    { day: 'mon', hours: 5 },
    { day: 'tue', hours: 4 },
    { day: 'wed', hours: 3 },
    { day: 'thu', hours: 2 },
    { day: 'fri', hours: 1 },
    { day: 'sat', hours: 0 },
    { day: 'sun', hours: 0 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Work Statistics</h2>
      <div className="flex justify-between">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="h-12 w-12 bg-blue-200 rounded-full flex items-center justify-center">
              {stat.hours}h
            </div>
            <p className="mt-2">{stat.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkStatistics;