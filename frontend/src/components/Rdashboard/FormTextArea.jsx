export default function FormTextArea({ 
    placeholder, 
    value, 
    name,
    onChange,
    rows = 4,
    className = ""
  }) {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        rows={rows}
        className={`w-full p-3 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black ${className}`}
      />
    );
  }