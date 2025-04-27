"use client"
import { useState } from "react"
import SuccessMessage from "./SuccessMessage"
import PriorityRadioGroup from "./PriorityRadioGroup"

export default function VoteCard({ 
  title = "Road Maintenance", 
  imageSrc, 
  initialVotes = 0 
}) {
  const [priority, setPriority] = useState(null)
  const [voteCount, setVoteCount] = useState(initialVotes)
  const [voteSuccessMessage, setVoteSuccessMessage] = useState("")
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = () => {
    if (!priority) {
      alert("Please select a priority level")
      return
    }

    setVoteCount(voteCount + 1)
    setHasVoted(true)
    setVoteSuccessMessage(`Successfully voted with ${priority} priority!`)

    setTimeout(() => {
      setVoteSuccessMessage("")
    }, 3000)
  }

  return (
    <div className="w-full bg-gray-200 rounded-lg p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold mb-4">Vote an issue</h2>

      <div className="bg-gray-300 rounded-lg overflow-hidden mb-6">
        <div className="flex flex-col sm:flex-row">
          <div className="p-4 sm:w-1/2 flex items-center">
            <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          </div>
          {imageSrc && (
            <div className="sm:w-1/2 h-40 sm:h-auto bg-teal-100 flex items-center justify-center">
              <img
                src={imageSrc}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <PriorityRadioGroup 
        priority={priority}
        setPriority={setPriority}
        voteCount={voteCount}
        hasVoted={hasVoted}
      />

      {voteSuccessMessage && (
        <SuccessMessage message={voteSuccessMessage} />
      )}

      <div className="flex justify-end">
        <button
          onClick={handleVote}
          disabled={hasVoted}
          className={`bg-black text-white px-6 py-2 rounded-full text-sm md:text-base ${
            hasVoted ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {hasVoted ? "Voted" : "Vote"}
        </button>
      </div>
    </div>
  )
}
