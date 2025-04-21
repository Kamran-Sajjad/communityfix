export default function Chart() {
    return (
      <div className="h-48 md:h-64 relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs md:text-sm text-gray-500">
          <div>5</div>
          <div>4</div>
          <div>3</div>
          <div>2</div>
          <div>1</div>
          <div>0</div>
        </div>
  
        {/* Chart area */}
        <div className="ml-6 md:ml-8 h-full relative">
          {/* Line chart (simplified) */}
          <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
            <path
              d="M0,180 C20,170 40,150 60,140 C80,130 100,110 120,80 C140,50 160,90 180,30 C200,60 220,90 240,110 C260,130 280,150 300,160"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
            {/* Data points */}
            <circle cx="0" cy="180" r="4" fill="black" />
            <circle cx="60" cy="140" r="4" fill="black" />
            <circle cx="120" cy="80" r="4" fill="black" />
            <circle cx="180" cy="30" r="4" fill="black" />
            <circle cx="240" cy="110" r="4" fill="black" />
            <circle cx="300" cy="160" r="4" fill="black" />
  
            {/* Hour labels */}
            <text x="0" y="195" textAnchor="middle" fontSize="8" className="md:text-[10px]">
              0h
            </text>
            <text x="60" y="195" textAnchor="middle" fontSize="8" className="md:text-[10px]">
              1.5h
            </text>
            <text x="120" y="195" textAnchor="middle" fontSize="8" className="md:text-[10px]">
              2.5h
            </text>
            <text x="180" y="195" textAnchor="middle" fontSize="8" className="md:text-[10px]">
              4h
            </text>
            <text x="240" y="195" textAnchor="middle" fontSize="8" className="md:text-[10px]">
              3h
            </text>
            <text x="300" y="195" textAnchor="middle" fontSize="8" className="md:text-[10px]">
              2h
            </text>
          </svg>
  
          {/* X-axis labels */}
          <div className="flex justify-between text-xs md:text-sm text-gray-500 mt-2">
            <div>mon</div>
            <div>tue</div>
            <div>wed</div>
            <div>thu</div>
            <div>fri</div>
            <div>sat</div>
            <div>sun</div>
          </div>
        </div>
      </div>
    );
  }