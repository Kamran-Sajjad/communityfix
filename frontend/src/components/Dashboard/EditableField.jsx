"use client"

export default function EditableField({name, label, type = "text", placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-sm md:text-base font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
  )
}