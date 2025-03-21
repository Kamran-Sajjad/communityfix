import StarRating from "./StarRating";

export default function ReviewCard({ quote, title, description, author, rating }) {
  return (
    <div className="bg-gray-200 rounded-lg p-6">
      <div className="text-5xl text-gray-500 mb-2">❝</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="mb-6 text-gray-700">{description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">{author}</span>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}