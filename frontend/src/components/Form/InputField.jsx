export default function InputField({ label, type, name, value, onChange, placeholder, required }) {
    return (
      <div>
        <label className="block text-xs sm:text-sm font-medium mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          required={required}
        />
       
      </div>
    );
  }