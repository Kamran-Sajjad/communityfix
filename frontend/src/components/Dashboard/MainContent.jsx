import React from 'react';
import ComplaintsSection from './ComplaintsSection';
import WorkStatistics from './WorkStatistics';
import ChatSection from './ChatSection';

const MainContent = () => {
  return (
    <main className="flex-1 p-4">
      <ComplaintsSection />
      <WorkStatistics />
      <ChatSection />
    </main>
  );
};

export default MainContent;