import React from 'react';

import useDashboardData from '../../hooks/useDashboardData';

const Test = () => {
  const { userName } = useDashboardData();

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      Hello I am Basit
      
    </div>
  );
};

export default Test;