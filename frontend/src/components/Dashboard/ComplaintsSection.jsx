import React from 'react';

const ComplaintsSection = () => {
  const complaints = [
    { type: 'Electric repairs', by: 'home technicians' },
    { type: 'Construction', by: 'society management' },
    { type: 'Cleaning', by: 'society management' },
    { type: 'Renovation', by: 'society management' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Complaints</h2>
      <div className="space-y-2">
        {complaints.map((complaint, index) => (
          <div key={index} className="flex justify-between items-center">
            <span>{complaint.type}</span>
            <span className="text-gray-500">by {complaint.by}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintsSection;