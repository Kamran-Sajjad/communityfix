


import ProgressCircle from "./ProgressCircle";

export default function ProgressCard({ title, subTitle, progress, icon }) {
  return (
    <div className="bg-gray-100 rounded-lg p-2 sm:p-3 md:p-4 lg:p-5">
      <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
        {/* Left side - Icon and Text */}
        <div className="flex items-center min-w-0 flex-1">
          {/* Icon container */}
          {/* <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
            <div >
              {attachments}
            </div>
          </div> */}

            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 overflow-hidden">
              {icon[0]?.url ? (
                <img
                  src={icon[0].url}
                  alt="issue"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-xl md:text-2xl">{icon[0]}</span>
              )}
            </div>

          
          {/* Text content */}
          <div className="min-w-0">
            <div className="font-bold text-xs sm:text-sm md:text-base truncate">
              {title}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 truncate">
              {subTitle}
            </div>
          </div>
        </div>

        {/* Right side - Progress Circle */}
        <div className="flex-shrink-0 ml-2">
          <ProgressCircle 
            progress={progress} 
            size={36}
            smSize={40}
            mdSize={44}
            strokeWidth={3}
          />
        </div>
      </div>
    </div>
  );
}