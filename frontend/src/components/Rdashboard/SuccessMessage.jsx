export default function SuccessMessage({ message }) {
    return (
      <div className="mb-4 bg-green-100 border border-green-300 text-green-700 px-4 py-2 rounded-md text-sm">
        {message}
      </div>
    )
  }