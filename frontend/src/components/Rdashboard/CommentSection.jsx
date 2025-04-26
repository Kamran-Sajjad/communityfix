"use client"
import { useState, useRef, useEffect } from "react";
import SuccessMessage from "./SuccessMessage";
import CommentItem from "./CommentItem";
import logo from "../../assets/logo.png";
import { MessageCircle, Send } from "lucide-react";

export default function CommentSection({ 
  initialComments = [], 
  currentUser = { name: "You", avatar: logo },
  realTimeIndicator = true 
}) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(initialComments);
  const [successMessage, setSuccessMessage] = useState("");
  const commentsEndRef = useRef(null);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: comments.length + 1,
      user: currentUser,
      text: comment,
      timestamp: new Date(),
    };

    setComments([...comments, newComment]);
    setComment("");
    setSuccessMessage("Comment posted successfully!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  return (
    <div className="w-full bg-gray-200 rounded-lg p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold mb-4">Comments</h2>

      <div className="bg-white rounded-lg p-4 h-[400px] md:h-[450px] flex flex-col">
        {realTimeIndicator && (
          <div className="mb-3">
            <div className="flex items-center text-sm md:text-base font-medium">
              <span className="inline-flex items-center mr-2 relative">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute"></span>
              </span>
              Real time
            </div>
          </div>
        )}

        {successMessage && <SuccessMessage message={successMessage} />}

        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No comments yet. Be the first to comment!
            </div>
          )}
          <div ref={commentsEndRef} />
        </div>

        <form onSubmit={handleCommentSubmit} className="mt-auto">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <MessageCircle className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review..."
              className="flex-1 bg-transparent outline-none text-sm md:text-base"
            />
            <button 
              type="submit"
              disabled={!comment.trim()}
              className={`ml-2 p-1 rounded-full ${
                comment.trim()
                  ? "text-black hover:bg-gray-200"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
