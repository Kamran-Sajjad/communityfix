"use client"
import { useState } from "react"
import Sidebar from "../../components/Rdashboard/Sidebar";
import Header from "../../components/Rdashboard/Header";
import VoteCard from "../../components/Rdashboard/VoteCard"
import CommentSection from "../../components/Rdashboard/CommentSection"
import logo from "../../assets/logo.png"

const initialComments = [
  // ... your initial comments array
]

export default function ReviewsAndComments() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <div className="flex-1 md:ml-[80px]">
        <Header 
          setMobileMenuOpen={setMobileMenuOpen} 
          mobileMenuOpen={mobileMenuOpen} 
        />

        <div className="p-4 md:p-6">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <VoteCard 
              title="Road Maintenance"
              imageSrc={logo}
              initialVotes={0}
            />
            
            <CommentSection initialComments={initialComments} />
          </div>
        </div>
      </div>
    </div>
  )
}
