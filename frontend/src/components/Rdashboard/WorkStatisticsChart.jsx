import { ChevronDown } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { day: 'mon', hours: 2 },
  { day: 'tue', hours: 1.5 },
  { day: 'wed', hours: 2.9 },
  { day: 'thu', hours: 2 },
  { day: 'fri', hours: 4 },
  { day: 'sat', hours: 1 },
  { day: 'sun', hours: 1.5 }
];

export default function WorkStatisticsChart() {
  return (
    <div className="h-64 w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold"> </h3>
        <div className="flex space-x-2">
          <button className="text-sm font-medium border-b-2 border-black pb-1">
            Working Hours
          </button>
          <button className="text-sm text-gray-500 pb-1">
            My work
          </button>
          <button className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded ml-auto">
            Weekly <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `${value}h`}
          />
          <Tooltip 
            formatter={(value) => [`${value} hours`, 'Duration']}
            labelFormatter={(label) => `Day: ${label}`}
          />
          <Bar 
            dataKey="hours" 
            fill="#000" 
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}