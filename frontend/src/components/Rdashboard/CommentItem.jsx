import logo from "../../assets/logo.png"

export default function CommentItem({ comment }) {
  return (
    <div className="flex">
      <div className="mr-3 flex-shrink-0">
        <img
          src={comment.user.avatar || logo}
          alt={comment.user.name}
          className="w-8 h-8 rounded-full"
        />
      </div>
      <div>
        <div className="text-sm font-medium">{comment.user.name}</div>
        <p className="text-sm md:text-base">{comment.text}</p>
      </div>
    </div>
  )
}