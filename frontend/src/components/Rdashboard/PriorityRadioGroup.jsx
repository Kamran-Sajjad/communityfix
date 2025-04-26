"use client"

export default function PriorityRadioGroup({
  priority,
  setPriority,
  voteCount = 0,
  hasVoted = false
}) {
  const priorityOptions = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
    { value: "extremely-high", label: "Extremely High" }
  ]

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-3 flex items-center">
        Prioritize
        {hasVoted && (
          <span className="ml-2 flex items-center text-sm text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clipRule="evenodd"
              />
            </svg>
            {voteCount} vote{voteCount !== 1 ? "s" : ""}
          </span>
        )}
      </h3>
      <div className="flex flex-wrap gap-4 md:gap-6">
        {priorityOptions.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              name="priority"
              value={option.value}
              checked={priority === option.value}
              onChange={() => setPriority(option.value)}
              className="mr-2 h-4 w-4"
              disabled={hasVoted}
            />
            <span className="text-sm md:text-base">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}