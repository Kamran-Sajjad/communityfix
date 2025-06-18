
export default function ComplaintCard({ title, subTitle, icon, time, count, onViewProgress }) {
    return (
      <div className="bg-gray-100 rounded-lg p-3 md:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 overflow-hidden">
            {Array.isArray(icon) && icon[0]?.url ? (
              <img
                src={icon[0].url}
                alt="issue"
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-2xl md:text-3xl">{icon[0]}</span>
            )}
          </div>


            <div>
              <div className="font-bold text-sm md:text-base">{title}</div>
              <div className="text-xs md:text-sm text-gray-600">{subTitle}</div>
            </div>
          </div>
  
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-2 md:space-x-4">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 mr-1">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-xs md:text-sm">{time}</span>
            </div>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 mr-1">
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs md:text-sm">{count}</span>
            </div>
            <button
              onClick={onViewProgress}
              className="border border-black rounded-md px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm"
            >
              View progress
            </button>
          </div>
        </div>
      </div>
    );
  }