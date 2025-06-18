// export default function FormTextArea({ 
//     placeholder, 
//     value, 
//     name,
//     onChange,
//     rows = 4,
//     className = ""
//   }) {
//     return (
//       <textarea
//         placeholder={placeholder}
//         value={value}
//         name={name}
//         onChange={onChange}
//         rows={rows}
//         className={`w-full p-3 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black ${className}`}
//       />
//     );
//   }


import { useState, useRef } from "react";

export default function FormTextArea({
  placeholder,
  value,
  name,
  onChange,
  onSpeechToText,
  onConciseText,
  rows = 4,
  className = "",
}) {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const startSpeechToText = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US'; // Supports English; Roman Urdu is approximated as English text

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onSpeechToText(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
      alert("Error occurred in speech recognition: " + event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognition.start();
  };

  const stopSpeechToText = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  return (
    <div className="relative">
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        rows={rows}
        className={`w-full p-3 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black ${className}`}
      />
      <div className="flex space-x-2 mt-2">
        <button
          type="button"
          onClick={isListening ? stopSpeechToText : startSpeechToText}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            isListening
              ? "bg-red-500 text-white"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {isListening ? "Stop Listening" : "Speech to Text"}
        </button>
        {/* <button
          type="button"
          onClick={onConciseText}
          className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
        >
          Concise It
        </button> */}
      </div>
    </div>
  );
}