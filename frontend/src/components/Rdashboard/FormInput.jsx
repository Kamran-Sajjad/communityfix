export default function FormInput({ 
    placeholder, 
    value, 
    name,
    onChange, 
    className = "",
    type = "text"
  }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        
        onChange={onChange}
        className={`w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-black ${className}`}
      />
    );
  }