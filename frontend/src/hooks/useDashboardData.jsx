import { useState, useEffect } from 'react';

const useDashboardData = () => {
  const [userName, setUserName] = useState('Kamran');
  const [workStats, setWorkStats] = useState([]);

  useEffect(() => {
    // Fetch data from backend here
    setWorkStats([
      { day: 'mon', hours: 5 },
      { day: 'tue', hours: 4 },
      { day: 'wed', hours: 3 },
      { day: 'thu', hours: 2 },
      { day: 'fri', hours: 1 },
      { day: 'sat', hours: 0 },
      { day: 'sun', hours: 0 },
    ]);
  }, []);

  return { userName, workStats };
};

export default useDashboardData;