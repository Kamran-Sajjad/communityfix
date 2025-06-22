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


// import { useState, useRef } from "react";

// export default function FormTextArea({
//   placeholder,
//   value,
//   name,
//   onChange,
//   onSpeechToText,
//   onConciseText,
//   rows = 4,
//   className = "",
// }) {
//   const [isListening, setIsListening] = useState(false);
//   const recognitionRef = useRef(null);

//   const startSpeechToText = () => {
//     if (!('webkitSpeechRecognition' in window)) {
//       alert("Your browser does not support speech recognition.");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognitionRef.current = recognition;
//     recognition.continuous = false;
//     recognition.interimResults = false;
//     recognition.lang = 'en-US'; // Supports English; Roman Urdu is approximated as English text

//     recognition.onstart = () => {
//       setIsListening(true);
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       onSpeechToText(transcript);
//       setIsListening(false);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setIsListening(false);
//       alert("Error occurred in speech recognition: " + event.error);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//       recognitionRef.current = null;
//     };

//     recognition.start();
//   };

//   const stopSpeechToText = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//     }
//   };

//   return (
//     <div className="relative">
//       <textarea
//         placeholder={placeholder}
//         value={value}
//         name={name}
//         onChange={onChange}
//         rows={rows}
//         className={`w-full p-3 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black ${className}`}
//       />
//       <div className="flex space-x-2 mt-2">
//         <button
//           type="button"
//           onClick={isListening ? stopSpeechToText : startSpeechToText}
//           className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
//             isListening
//               ? "bg-red-500 text-white"
//               : "bg-black text-white hover:bg-gray-800"
//           }`}
//         >
//           {isListening ? "Stop Listening" : "Speech to Text"}
//         </button>
//         {/* <button
//           type="button"
//           onClick={onConciseText}
//           className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
//         >
//           Concise It
//         </button> */}
//       </div>
//     </div>
//   );
// }








// import { useState, useRef } from "react";
// import { toast } from 'react-toastify';

// export default function FormTextArea({
//   placeholder,
//   value,
//   name,
//   onChange,
//   onSpeechToText,
//   rows = 4,
//   className = "",
// }) {
//   const [isListening, setIsListening] = useState(false);
//   const [isSummarizing, setIsSummarizing] = useState(false);
//   const recognitionRef = useRef(null);

//   const handleSummarize = async () => {
//     if (!value.trim()) {
//       toast.warning("Please enter some text to make concise");
//       return;
//     }

//     if (value.trim().split(/\s+/).length < 5) {
//       toast.warning("Text is too short to summarize effectively");
//       return;
//     }

//     setIsSummarizing(true);
    
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("Authentication required");
//       }

//       const userStatus = localStorage.getItem("status");
//       if (userStatus === "suspended") {
//         throw new Error("Your account is suspended");
//       }

//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), 10000);

//       const response = await fetch("http://localhost:5000/api/ai/concise", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ text: value }),
//         signal: controller.signal
//       });

//       clearTimeout(timeoutId);

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(
//           errorData.error || 
//           `Request failed with status ${response.status}`
//         );
//       }

//       const data = await response.json();
      
//       if (!data.summary || typeof data.summary !== "string") {
//         throw new Error("Invalid response format from server");
//       }

//       const originalText = value;
//       onChange({ target: { name, value: data.summary } });
      
//       toast.success("Text made concise successfully!", {
//         action: {
//           text: "Undo",
//           onClick: () => {
//             onChange({ target: { name, value: originalText } });
//             toast.info("Original text restored");
//           }
//         }
//       });

//     } catch (error) {
//       console.error("Concise error:", error);
      
//       const errorMessage = error.message.includes("Failed to fetch") 
//         ? "Network error - please check your connection"
//         : error.message.includes("aborted")
//         ? "Request timed out - please try again"
//         : error.message.includes("suspended")
//         ? "Your account is suspended. You cannot use this feature."
//         : error.message.includes("Authentication")
//         ? "Please login to use this feature"
//         : "Failed to create concise version";

//       toast.error(errorMessage);

//       if (error.message.includes("NetworkError") || error.message.includes("Failed to fetch")) {
//         toast.info("Please try again", {
//           autoClose: 3000,
//           closeButton: false,
//         });
//       }
//     } finally {
//       setIsSummarizing(false);
//     }
//   };

//   const startSpeechToText = () => {
//     if (!('webkitSpeechRecognition' in window)) {
//       alert("Your browser does not support speech recognition.");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognitionRef.current = recognition;
//     recognition.continuous = false;
//     recognition.interimResults = false;
//     recognition.lang = 'en-US';

//     recognition.onstart = () => {
//       setIsListening(true);
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       onSpeechToText(transcript);
//       setIsListening(false);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setIsListening(false);
//       alert("Error occurred in speech recognition: " + event.error);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//       recognitionRef.current = null;
//     };

//     recognition.start();
//   };

//   const stopSpeechToText = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//     }
//   };

//   return (
//     <div className="relative">
//       <textarea
//         placeholder={placeholder}
//         value={value}
//         name={name}
//         onChange={onChange}
//         rows={rows}
//         className={`w-full p-3 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black ${className}`}
//       />
//       <div className="flex space-x-2 mt-2">
//         <button
//           type="button"
//           onClick={isListening ? stopSpeechToText : startSpeechToText}
//           className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
//             isListening
//               ? "bg-red-500 text-white"
//               : "bg-black text-white hover:bg-gray-800"
//           }`}
//         >
//           {isListening ? "Stop Listening" : "Speech to Text"}
//         </button>
//         <button
//           type="button"
//           onClick={handleSummarize}
//           disabled={isSummarizing}
//           className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
//             isSummarizing
//               ? "bg-gray-400 text-white"
//               : "bg-blue-500 text-white hover:bg-blue-600"
//           }`}
//         >
//           {isSummarizing ? (
//             <>
//               <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Processing...
//             </>
//           ) : "Make Concise"}
//         </button>
//       </div>
//     </div>
//   );
// }











// import { useState, useRef } from "react";
// import { toast } from 'react-toastify';

// export default function FormTextArea({
//   placeholder,
//   value,
//   name,
//   onChange,
//   onSpeechToText,
//   rows = 4,
//   className = "",
// }) {
//   const [isListening, setIsListening] = useState(false);
//   const [isSummarizing, setIsSummarizing] = useState(false);
//   const recognitionRef = useRef(null);

//   // Local summarization fallback function
//   const localSummarize = (text) => {
//     try {
//       const sentences = text.split(/[.!?]+/)
//         .map(s => s.trim())
//         .filter(s => s.length > 0);

//       if (sentences.length <= 3) return text;

//       const importantSentences = [
//         sentences[0], // First sentence (usually main idea)
//         sentences[Math.floor(sentences.length/2)], // Middle sentence
//         sentences[sentences.length-1] // Last sentence (often conclusion)
//       ].filter(s => s);

//       return importantSentences.join('. ') + (text.endsWith('.') ? '' : '.');
//     } catch (e) {
//       console.error("Local summarization failed:", e);
//       return text; // Return original if error occurs
//     }
//   };

//   const handleSummarize = async () => {
//     if (!value.trim()) {
//       toast.warning("Please enter some text to summarize");
//       return;
//     }

//     setIsSummarizing(true);
    
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("Please login to use this feature");
//       }

//       // First try the OpenAI API
//       try {
//         const response = await fetch("http://localhost:5000/api/ai/concise", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ text: value }),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           if (data.summary && typeof data.summary === "string") {
//             onChange({ target: { name, value: data.summary } });
//             toast.success("AI concise version generated!", {
//               autoClose: 3000,
//               hideProgressBar: false,
//             });
//             return;
//           }
//         }
//       } catch (apiError) {
//         console.log("API error, falling back to local method:", apiError);
//       }

//       // Fallback to local summarization
//       const summary = localSummarize(value);
//       onChange({ target: { name, value: summary } });
//       toast.info("Basic concise version generated", {
//         autoClose: 3000,
//         hideProgressBar: false,
//       });

//     } catch (error) {
//       console.error("Concise error:", error);
//       toast.error(error.message || "Failed to generate concise version", {
//         autoClose: 5000,
//       });
//     } finally {
//       setIsSummarizing(false);
//     }
//   };

//   const startSpeechToText = () => {
//     if (!('webkitSpeechRecognition' in window)) {
//       alert("Your browser does not support speech recognition.");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognitionRef.current = recognition;
//     recognition.continuous = false;
//     recognition.interimResults = false;
//     recognition.lang = 'en-US';

//     recognition.onstart = () => {
//       setIsListening(true);
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       onSpeechToText(transcript);
//       setIsListening(false);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setIsListening(false);
//       alert("Error occurred in speech recognition: " + event.error);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//       recognitionRef.current = null;
//     };

//     recognition.start();
//   };

//   const stopSpeechToText = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//     }
//   };

//   return (
//     <div className="relative">
//       <textarea
//         placeholder={placeholder}
//         value={value}
//         name={name}
//         onChange={onChange}
//         rows={rows}
//         className={`w-full p-3 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-black ${className}`}
//       />
//       <div className="flex space-x-2 mt-2">
//         <button
//           type="button"
//           onClick={isListening ? stopSpeechToText : startSpeechToText}
//           className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
//             isListening
//               ? "bg-red-500 text-white"
//               : "bg-black text-white hover:bg-gray-800"
//           }`}
//         >
//           {isListening ? "Stop Listening" : "Speech to Text"}
//         </button>
//         <button
//           type="button"
//           onClick={handleSummarize}
//           disabled={isSummarizing}
//           className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
//             isSummarizing
//               ? "bg-gray-400 text-white cursor-not-allowed"
//               : "bg-blue-500 text-white hover:bg-blue-600"
//           }`}
//         >
//           {isSummarizing ? (
//             <>
//               <svg 
//                 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24"
//               >
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Processing...
//             </>
//           ) : "Make Concise"}
//         </button>
//       </div>
//     </div>
//   );
// }






import { useState, useRef } from "react";
import { toast } from 'react-toastify';

export default function FormTextArea({
  placeholder,
  value,
  name,
  onChange,
  onSpeechToText,
  rows = 4,
  className = "",
}) {
  const [isListening, setIsListening] = useState(false);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const recognitionRef = useRef(null);

  // Local summarization fallback
  const summarizeLocally = (text) => {
    if (!text) return "";
    
    const sentences = text.split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    if (sentences.length <= 3) return text;

    const importantSentences = [
      sentences[0],
      sentences[Math.floor(sentences.length/2)],
      sentences[sentences.length-1]
    ].filter(Boolean);

    return importantSentences.join('. ') + (text.endsWith('.') ? '' : '.');
  };

  const handleSummarize = async () => {
    if (!value.trim()) {
      toast.warning("Please enter some text to summarize");
      return;
    }

    setIsSummarizing(true);
    
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Please login to use this feature");
      }

      const response = await fetch("http://localhost:5000/api/ai/concise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ text: value }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If API fails but provides fallback summary
        if (data.summary) {
          onChange({ target: { name, value: data.summary } });
          toast.info(data.message || "Used basic concise method");
          return;
        }
        throw new Error(data.error || "Failed to generate concise version");
      }

      if (!data.summary) {
        throw new Error("Received empty summary from server");
      }

      onChange({ target: { name, value: data.summary } });
      toast.success("Concise version generated!");

    } catch (error) {
      console.error("Concise error:", error);
      
      // Fallback to local method
      const localSummary = summarizeLocally(value);
      onChange({ target: { name, value: localSummary } });
      
      toast.error(
        error.message.includes("Failed to fetch") 
          ? "Network error - used basic concise method" 
          : error.message
      );
    } finally {
      setIsSummarizing(false);
    }
  };

  const startSpeechToText = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

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
        <button
          type="button"
          onClick={handleSummarize}
          disabled={isSummarizing}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            isSummarizing
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isSummarizing ? (
            <>
              <svg 
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : "Make Concise"}
        </button>
      </div>
    </div>
  );
}