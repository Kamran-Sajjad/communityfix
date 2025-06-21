// import { useState, useEffect, useRef } from "react";
// import { Mic, MicOff, Send, MessageSquare } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Chatbot() {
//   const [isListening, setIsListening] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [transcript, setTranscript] = useState("");
//   const [message, setMessage] = useState("");
//   const [response, setResponse] = useState("Say or type a command (e.g., 'Add Issue', 'Listed Issues').");
//   const navigate = useNavigate();
//   const recognitionRef = useRef(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//       const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//       recognitionRef.current = new SpeechRecognition();
//       recognitionRef.current.continuous = false;
//       recognitionRef.current.interimResults = false;
//       recognitionRef.current.lang = 'en-US';

//       recognitionRef.current.onstart = () => {
//         setIsListening(true);
//         setResponse("Listening...");
//         console.log("Speech recognition started");
//       };

//       recognitionRef.current.onresult = (event) => {
//         const transcriptText = event.results[0][0].transcript.toLowerCase();
//         setTranscript(transcriptText);
//         processCommand(transcriptText);
//         console.log("Speech recognition result:", transcriptText);
//       };

//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//         console.log("Speech recognition ended");
//       };

//       recognitionRef.current.onerror = (event) => {
//         setIsListening(false);
//         setResponse(`Speech recognition error: ${event.error}. Try again or type your command.`);
//         console.error("Speech recognition error:", event.error);
//         if (event.error === "not-allowed") {
//           setResponse("Microphone access denied. Please allow microphone permissions in your browser settings.");
//         } else if (event.error === "no-speech") {
//           setResponse("No speech detected. Try speaking clearly or type your command.");
//         }
//       };
//     } else {
//       setResponse("Speech recognition is not supported in this browser. Please type your command.");
//       console.warn("Speech recognition not supported");
//     }

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.stop();
//       }
//     };
//   }, []);

//   const toggleListening = () => {
//     if (!recognitionRef.current) {
//       setResponse("Speech recognition is not supported in this browser.");
//       return;
//     }

//     if (isListening) {
//       recognitionRef.current.stop();
//       setIsListening(false);
//     } else {
//       try {
//         recognitionRef.current.start();
//         setIsListening(true);
//       } catch (error) {
//         setResponse("Failed to start speech recognition. Try again or type your command.");
//         console.error("Speech recognition start error:", error);
//       }
//     }
//   };

//   const toggleChatbot = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleMessageSubmit = (e) => {
//     e.preventDefault();
//     if (message.trim()) {
//       setTranscript(message.toLowerCase());
//       processCommand(message.toLowerCase());
//       setMessage("");
//     }
//   };

//   const processCommand = (command) => {
//     setTranscript(command);
//     if (command.includes("add issue") || command.includes("report issue")) {
//       navigate("/residents/AddIssuePage");
//       setResponse("Navigating to Add Issue page...");
//     } else if (command.includes("listed issues") || command.includes("view issues")) {
//       navigate("/residents/listedIssuesPage");
//       setResponse("Navigating to Listed Issues page...");
//     } else if (command.includes("about us")) {
//       navigate("/residents/AboutUs");
//       setResponse("Navigating to About Us page...");
//     } else if (command.includes("faq") || command.includes("frequently asked questions")) {
//       navigate("/residents/FAQ");
//       setResponse("Navigating to FAQ page...");
//     } else if (command.includes("feedback")) {
//       navigate("/residents/FeedbackPage");
//       setResponse("Navigating to Feedback page...");
//     } else if (command.includes("reviews") || command.includes("comments")) {
//       navigate("/residents/ReviewsAndComments");
//       setResponse("Navigating to Reviews and Comments.");
//     } else if (command.includes("dashboard") || command.includes("home")) {
//       navigate("/residents/Dashboard");
//       setResponse("You are already on the Dashboard.");
//     } else if (command.includes("settings")) {
//       navigate("/residents/SettingsPage");
//       setResponse("Navigating to Settings page...");
//     } else {
//       setResponse("Command not recognized. Try saying or typing 'Add Issue', 'Listed Issues', 'About Us', 'FAQ', 'Feedback', 'Reviews', or 'Settings'.");
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {isExpanded ? (
//         <div className="bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 flex flex-col">
//           <div className="flex justify-between items-center mb-2">
//             <h3 className="text-lg font-semibold flex items-center">
//               <MessageSquare className="w-5 h-5 mr-2" />
//               AI Assistant
//             </h3>
//             <button
//               onClick={toggleChatbot}
//               className="p-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
//               aria-label="Minimize chatbot"
//             >
//               <MessageSquare className="w-5 h-5" />
//             </button>
//           </div>
//           <div className="flex-1 overflow-y-auto mb-2">
//             <p className="text-sm text-gray-600">You: {transcript}</p>
//             <p className="text-sm text-blue-600 mt-2">AI: {response}</p>
//           </div>
//           <form onSubmit={handleMessageSubmit} className="flex items-center gap-2">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type a command..."
//               className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//               aria-label="Send message"
//             >
//               <Send className="w-5 h-5" />
//             </button>
//             <button
//               type="button"
//               onClick={toggleListening}
//               className={`p-2 rounded-md ${isListening ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"} hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed`}
//               aria-label={isListening ? "Stop listening" : "Start listening"}
//               disabled={!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)}
//             >
//               {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
//             </button>
//           </form>
//         </div>
//       ) : (
//         <button
//           onClick={toggleChatbot}
//           className="bg-blue-500 text-white rounded-full p-3 flex items-center gap-2 hover:bg-blue-600 transition-colors"
//           aria-label="Open chatbot"
//         >
//           <MessageSquare className="w-6 h-6" />
//           <span className="text-sm font-medium">AI Assistant</span>
//         </button>
//       )}
//     </div>
//   );
// }



import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Send, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Chatbot() {
    const [isListening, setIsListening] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    const recognitionRef = useRef(null);
    const chatContainerRef = useRef(null);

    // Replace with your xAI Grok API key from https://x.ai/api
    const API_KEY = "xai-ImOx8CS3dQxCiJNUunrtwMcaJC4qd9uRjZ91qpqqUNFTPZc2k8FRu2qvb55KV4viGFc4CPw2Vd93QzXe";
    const API_URL = "https://api.x.ai/v1/grok/completions";

    // Web app context for AI
    const appContext = `
    CommunityFix is a web platform that connects residents with local service providers to address community and household issues. Key features:
    - Dashboard: View resolved/pending complaints, work statistics, and contact widget.
    - Add Issue: Report societal or household issues with details, attachments (max 3, 10MB total), and submit for review.
    - Listed Issues: View all issues, filter by status (pending, in_progress, resolved, closed).
    - About Us: Information about mission, vision, and approach.
    - FAQ: Answers to common questions (e.g., how to create an account, report issues).
    - Feedback: Submit feedback via a form.
    - Reviews and Comments: View and comment on specific issues (requires issue ID).
    - Settings: Manage account settings.
    Navigation routes:
    - /residents/Dashboard
    - /residents/AddIssuePage
    - /residents/listedIssuesPage
    - /residents/AboutUs
    - /residents/FAQ
    - /residents/FeedbackPage
    - /residents/ReviewsAndComments (needs issue ID)
    - /residents/SettingsPage
  `;

    // Load chat history from localStorage
    useEffect(() => {
        const savedHistory = localStorage.getItem("chatHistory");
        if (savedHistory) {
            setMessages(JSON.parse(savedHistory));
        }
    }, []);

    // Save chat history to localStorage
    useEffect(() => {
        localStorage.setItem("chatHistory", JSON.stringify(messages));
    }, [messages]);

    // Initialize speech recognition
    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onstart = () => {
                setIsListening(true);
                console.log("Speech recognition started");
            };

            recognitionRef.current.onresult = (event) => {
                const transcriptText = event.results[0][0].transcript.toLowerCase();
                processCommand(transcriptText);
                console.log("Speech recognition result:", transcriptText);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
                console.log("Speech recognition ended");
            };

            recognitionRef.current.onerror = (event) => {
                setIsListening(false);
                const errorMessage = `Speech recognition error: ${event.error}. Try again or type your command.`;
                addMessage(transcript, errorMessage);
                console.error("Speech recognition error:", event.error);
                if (event.error === "not-allowed") {
                    addMessage(transcript, "Microphone access denied. Please allow microphone permissions in your browser settings.");
                } else if (event.error === "no-speech") {
                    addMessage(transcript, "No speech detected. Try speaking clearly or type your command.");
                } else if (event.error === "network") {
                    addMessage(transcript, "Network error. Check your internet connection and try again.");
                }
            };
        } else {
            addMessage("", "Speech recognition is not supported in this browser. Please type your command or question.");
            console.warn("Speech recognition not supported");
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    // Scroll to bottom of chat when new messages are added
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            addMessage("", "Speech recognition is not supported in this browser.");
            return;
        }

        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        } else {
            try {
                recognitionRef.current.start();
                setIsListening(true);
            } catch (error) {
                addMessage("", "Failed to start speech recognition. Try again or type your command.");
                console.error("Speech recognition start error:", error);
            }
        }
    };

    const toggleChatbot = () => {
        setIsExpanded(!isExpanded);
    };

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            processCommand(message.toLowerCase());
            setMessage("");
        }
    };

    const addMessage = (userInput, aiResponse) => {
        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                user: userInput,
                ai: aiResponse,
                timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" }),
            },
        ]);
    };

    const processCommand = async (command) => {
        // Navigation commands
        if (command.includes("add issue") || command.includes("report issue")) {
            navigate("/residents/AddIssuePage");
            addMessage(command, "Navigating to Add Issue page...");
        } else if (command.includes("listed issues") || command.includes("view issues")) {
            navigate("/residents/listedIssuesPage");
            addMessage(command, "Navigating to Listed Issues page...");
        } else if (command.includes("about us")) {
            navigate("/residents/AboutUs");
            addMessage(command, "Navigating to About Us page...");
        } else if (command.includes("faq") || command.includes("frequently asked questions")) {
            navigate("/residents/FAQ");
            addMessage(command, "Navigating to FAQ page...");
        } else if (command.includes("feedback")) {
            navigate("/residents/FeedbackPage");
            addMessage(command, "Navigating to Feedback page...");
        } else if (command.includes("reviews") || command.includes("comments")) {
            navigate("/residents/ReviewsAndComments");
            addMessage(command, "Navigating to Reviews and Comments.");
        } else if (command.includes("dashboard") || command.includes("home")) {
            navigate("/residents/Dashboard");
            addMessage(command, "You are already on the Dashboard.");
        } else if (command.includes("settings")) {
            navigate("/residents/SettingsPage");
            addMessage(command, "Navigating to Settings page...");
        } else {
            // General query: Send to xAI Grok API
            try {
                const res = await axios.post(
                    API_URL,
                    {
                        prompt: `${appContext}\nUser query: ${command}\nPlease provide a concise and accurate response related to the CommunityFix platform.`,
                        max_tokens: 150,
                        temperature: 0.7,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${API_KEY}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                const aiResponse = res.data.choices[0].text.trim();
                addMessage(command, aiResponse || "Sorry, I couldn't process that. Try asking about CommunityFix features or navigation.");
            } catch (error) {
                console.error("Grok API error:", error);
                addMessage(command, "Error connecting to AI service. Please try again or type a navigation command.");
            }
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isExpanded ? (
                <div className="bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold flex items-center">
                            <MessageSquare className="w-5 h-5 mr-2" />
                            AI Assistant
                        </h3>
                        <button
                            onClick={toggleChatbot}
                            className="p-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
                            aria-label="Minimize chatbot"
                        >
                            <MessageSquare className="w-5 h-5" />
                        </button>
                    </div>
                    <div
                        ref={chatContainerRef}
                        className="flex-1 overflow-y-auto mb-2 space-y-2"
                    >
                        {messages.map((msg) => (
                            <div key={msg.id}>
                                {msg.user && (
                                    <div className="flex justify-end">
                                        <div className="bg-blue-100 text-gray-800 p-2 rounded-lg max-w-[70%]">
                                            <p className="text-sm">{msg.user}</p>
                                            <p className="text-xs text-gray-500">{msg.timestamp}</p>
                                        </div>
                                    </div>
                                )}
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 text-gray-800 p-2 rounded-lg max-w-[70%]">
                                        <p className="text-sm">{msg.ai}</p>
                                        <p className="text-xs text-gray-500">{msg.timestamp}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleMessageSubmit} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a command or question..."
                            className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            aria-label="Send message"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={toggleListening}
                            className={`p-2 rounded-md ${isListening ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"} hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed`}
                            aria-label={isListening ? "Stop listening" : "Start listening"}
                            disabled={!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)}
                        >
                            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                        </button>
                    </form>
                </div>
            ) : (
                <button
                    onClick={toggleChatbot}
                    className="bg-blue-500 text-white rounded-full p-3 flex items-center gap-2 hover:bg-blue-600 transition-colors"
                    aria-label="Open chatbot"
                >
                    <MessageSquare className="w-6 h-6" />
                    <span className="text-sm font-medium">AI Assistant</span>
                </button>
            )}
        </div>
    );
}