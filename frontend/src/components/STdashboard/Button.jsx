"use client";

export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`px-4 py-1 rounded-full bg-gray-200 text-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}