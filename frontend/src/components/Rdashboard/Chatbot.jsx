// import { useState, useEffect, useRef } from "react";
// import { Mic, MicOff, Send, MessageSquare } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Chatbot() {
//     const [isListening, setIsListening] = useState(false);
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([]);
//     const navigate = useNavigate();
//     const recognitionRef = useRef(null);
//     const chatContainerRef = useRef(null);

//     // Replace with your xAI Grok API key from https://x.ai/api
//     const API_KEY = "xai-ImOx8CS3dQxCiJNUunrtwMcaJC4qd9uRjZ91qpqqUNFTPZc2k8FRu2qvb55KV4viGFc4CPw2Vd93QzXe";
//     const API_URL = "https://api.x.ai/v1/grok/completions";

//     // Web app context for AI
//     const appContext = `
//     CommunityFix is a web platform that connects residents with local service providers to address community and household issues. Key features:
//     - Dashboard: View resolved/pending complaints, work statistics, and contact widget.
//     - Add Issue: Report societal or household issues with details, attachments (max 3, 10MB total), and submit for review.
//     - Listed Issues: View all issues, filter by status (pending, in_progress, resolved, closed).
//     - About Us: Information about mission, vision, and approach.
//     - FAQ: Answers to common questions (e.g., how to create an account, report issues).
//     - Feedback: Submit feedback via a form.
//     - Reviews and Comments: View and comment on specific issues (requires issue ID).
//     - Settings: Manage account settings.
//     Navigation routes:
//     - /residents/Dashboard
//     - /residents/AddIssuePage
//     - /residents/listedIssuesPage
//     - /residents/AboutUs
//     - /residents/FAQ
//     - /residents/FeedbackPage
//     - /residents/ReviewsAndComments (needs issue ID)
//     - /residents/SettingsPage
//   `;

//     // Load chat history from localStorage
//     useEffect(() => {
//         const savedHistory = localStorage.getItem("chatHistory");
//         if (savedHistory) {
//             setMessages(JSON.parse(savedHistory));
//         }
//     }, []);

//     // Save chat history to localStorage
//     useEffect(() => {
//         localStorage.setItem("chatHistory", JSON.stringify(messages));
//     }, [messages]);

//     // Initialize speech recognition
//     useEffect(() => {
//         if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//             const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//             recognitionRef.current = new SpeechRecognition();
//             recognitionRef.current.continuous = false;
//             recognitionRef.current.interimResults = false;
//             recognitionRef.current.lang = 'en-US';

//             recognitionRef.current.onstart = () => {
//                 setIsListening(true);
//                 console.log("Speech recognition started");
//             };

//             recognitionRef.current.onresult = (event) => {
//                 const transcriptText = event.results[0][0].transcript.toLowerCase();
//                 processCommand(transcriptText);
//                 console.log("Speech recognition result:", transcriptText);
//             };

//             recognitionRef.current.onend = () => {
//                 setIsListening(false);
//                 console.log("Speech recognition ended");
//             };

//             recognitionRef.current.onerror = (event) => {
//                 setIsListening(false);
//                 const errorMessage = `Speech recognition error: ${event.error}. Try again or type your command.`;
//                 addMessage(transcript, errorMessage);
//                 console.error("Speech recognition error:", event.error);
//                 if (event.error === "not-allowed") {
//                     addMessage(transcript, "Microphone access denied. Please allow microphone permissions in your browser settings.");
//                 } else if (event.error === "no-speech") {
//                     addMessage(transcript, "No speech detected. Try speaking clearly or type your command.");
//                 } else if (event.error === "network") {
//                     addMessage(transcript, "Network error. Check your internet connection and try again.");
//                 }
//             };
//         } else {
//             addMessage("", "Speech recognition is not supported in this browser. Please type your command or question.");
//             console.warn("Speech recognition not supported");
//         }

//         return () => {
//             if (recognitionRef.current) {
//                 recognitionRef.current.stop();
//             }
//         };
//     }, []);

//     // Scroll to bottom of chat when new messages are added
//     useEffect(() => {
//         if (chatContainerRef.current) {
//             chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//         }
//     }, [messages]);

//     const toggleListening = () => {
//         if (!recognitionRef.current) {
//             addMessage("", "Speech recognition is not supported in this browser.");
//             return;
//         }

//         if (isListening) {
//             recognitionRef.current.stop();
//             setIsListening(false);
//         } else {
//             try {
//                 recognitionRef.current.start();
//                 setIsListening(true);
//             } catch (error) {
//                 addMessage("", "Failed to start speech recognition. Try again or type your command.");
//                 console.error("Speech recognition start error:", error);
//             }
//         }
//     };

//     const toggleChatbot = () => {
//         setIsExpanded(!isExpanded);
//     };

//     const handleMessageSubmit = (e) => {
//         e.preventDefault();
//         if (message.trim()) {
//             processCommand(message.toLowerCase());
//             setMessage("");
//         }
//     };

//     const addMessage = (userInput, aiResponse) => {
//         setMessages((prev) => [
//             ...prev,
//             {
//                 id: Date.now(),
//                 user: userInput,
//                 ai: aiResponse,
//                 timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" }),
//             },
//         ]);
//     };

//     const processCommand = async (command) => {
//         // Navigation commands
//         if (command.includes("add issue") || command.includes("report issue")) {
//             navigate("/residents/AddIssuePage");
//             addMessage(command, "Navigating to Add Issue page...");
//         } else if (command.includes("listed issues") || command.includes("view issues")) {
//             navigate("/residents/listedIssuesPage");
//             addMessage(command, "Navigating to Listed Issues page...");
//         } else if (command.includes("about us")) {
//             navigate("/residents/AboutUs");
//             addMessage(command, "Navigating to About Us page...");
//         } else if (command.includes("faq") || command.includes("frequently asked questions")) {
//             navigate("/residents/FAQ");
//             addMessage(command, "Navigating to FAQ page...");
//         } else if (command.includes("feedback")) {
//             navigate("/residents/FeedbackPage");
//             addMessage(command, "Navigating to Feedback page...");
//         } else if (command.includes("reviews") || command.includes("comments")) {
//             navigate("/residents/ReviewsAndComments");
//             addMessage(command, "Navigating to Reviews and Comments.");
//         } else if (command.includes("dashboard") || command.includes("home")) {
//             navigate("/residents/Dashboard");
//             addMessage(command, "You are already on the Dashboard.");
//         } else if (command.includes("settings")) {
//             navigate("/residents/SettingsPage");
//             addMessage(command, "Navigating to Settings page...");
//         } else {
//             // General query: Send to xAI Grok API
//             try {
//                 const res = await axios.post(
//                     API_URL,
//                     {
//                         prompt: `${appContext}\nUser query: ${command}\nPlease provide a concise and accurate response related to the CommunityFix platform.`,
//                         max_tokens: 150,
//                         temperature: 0.7,
//                     },
//                     {
//                         headers: {
//                             Authorization: `Bearer ${API_KEY}`,
//                             "Content-Type": "application/json",
//                         },
//                     }
//                 );
//                 const aiResponse = res.data.choices[0].text.trim();
//                 addMessage(command, aiResponse || "Sorry, I couldn't process that. Try asking about CommunityFix features or navigation.");
//             } catch (error) {
//                 console.error("Grok API error:", error);
//                 addMessage(command, "Error connecting to AI service. Please try again or type a navigation command.");
//             }
//         }
//     };

//     return (
//         <div className="fixed bottom-4 right-4 z-50">
//             {isExpanded ? (
//                 <div className="bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 flex flex-col">
//                     <div className="flex justify-between items-center mb-2">
//                         <h3 className="text-lg font-semibold flex items-center">
//                             <MessageSquare className="w-5 h-5 mr-2" />
//                             AI Assistant
//                         </h3>
//                         <button
//                             onClick={toggleChatbot}
//                             className="p-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
//                             aria-label="Minimize chatbot"
//                         >
//                             <MessageSquare className="w-5 h-5" />
//                         </button>
//                     </div>
//                     <div
//                         ref={chatContainerRef}
//                         className="flex-1 overflow-y-auto mb-2 space-y-2"
//                     >
//                         {messages.map((msg) => (
//                             <div key={msg.id}>
//                                 {msg.user && (
//                                     <div className="flex justify-end">
//                                         <div className="bg-blue-100 text-gray-800 p-2 rounded-lg max-w-[70%]">
//                                             <p className="text-sm">{msg.user}</p>
//                                             <p className="text-xs text-gray-500">{msg.timestamp}</p>
//                                         </div>
//                                     </div>
//                                 )}
//                                 <div className="flex justify-start">
//                                     <div className="bg-gray-100 text-gray-800 p-2 rounded-lg max-w-[70%]">
//                                         <p className="text-sm">{msg.ai}</p>
//                                         <p className="text-xs text-gray-500">{msg.timestamp}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <form onSubmit={handleMessageSubmit} className="flex items-center gap-2">
//                         <input
//                             type="text"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             placeholder="Type a command or question..."
//                             className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <button
//                             type="submit"
//                             className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                             aria-label="Send message"
//                         >
//                             <Send className="w-5 h-5" />
//                         </button>
//                         <button
//                             type="button"
//                             onClick={toggleListening}
//                             className={`p-2 rounded-md ${isListening ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"} hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed`}
//                             aria-label={isListening ? "Stop listening" : "Start listening"}
//                             disabled={!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)}
//                         >
//                             {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
//                         </button>
//                     </form>
//                 </div>
//             ) : (
//                 <button
//                     onClick={toggleChatbot}
//                     className="bg-blue-500 text-white rounded-full p-3 flex items-center gap-2 hover:bg-blue-600 transition-colors"
//                     aria-label="Open chatbot"
//                 >
//                     <MessageSquare className="w-6 h-6" />
//                     <span className="text-sm font-medium">AI Assistant</span>
//                 </button>
//             )}
//         </div>
//     );
// }






// import { useState, useEffect, useRef } from "react";
// import { Mic, MicOff, Send, MessageSquare, Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// // import dotenv from 'dotenv';
// // dotenv.config();

// export default function Chatbot() {
//     const [isListening, setIsListening] = useState(false);
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([]);
//     const [isProcessing, setIsProcessing] = useState(false);
//     const navigate = useNavigate();
//     const recognitionRef = useRef(null);
//     const chatContainerRef = useRef(null);


//     const API_KEY = import.meta.env.VITE_GROK_API_KEY;


//     // App context for AI
//     const appContext = `
//     CommunityFix is a web platform that connects residents with local service providers to address community and household issues. Key features:
//     - Dashboard: View resolved/pending complaints, work statistics, and contact widget.
//     - Add Issue: Report societal or household issues with details, attachments (max 3, 10MB total), and submit for review.
//     - Listed Issues: View all issues, filter by status (pending, in_progress, resolved, closed).
//     - About Us: Information about mission, vision, and approach.
//     - FAQ: Answers to common questions (e.g., how to create an account, report issues).
//     - Feedback: Submit feedback via a form.
//     - Reviews and Comments: View and comment on specific issues (requires issue ID).
//     - Settings: Manage account settings.
//     Navigation routes:
//     - /residents/Dashboard
//     - /residents/AddIssuePage
//     - /residents/listedIssuesPage
//     - /residents/AboutUs
//     - /residents/FAQ
//     - /residents/FeedbackPage
//     - /residents/ReviewsAndComments (needs issue ID)
//     - /residents/SettingsPage
//     `;

//     // Load chat history from localStorage
//     useEffect(() => {
//         const savedHistory = localStorage.getItem("chatHistory");
//         if (savedHistory) {
//             setMessages(JSON.parse(savedHistory));
//         }
//     }, []);

//     // Save chat history to localStorage
//     useEffect(() => {
//         localStorage.setItem("chatHistory", JSON.stringify(messages));
//     }, [messages]);

//     // Initialize speech recognition
//     useEffect(() => {
//         if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//             const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//             recognitionRef.current = new SpeechRecognition();
//             recognitionRef.current.continuous = false;
//             recognitionRef.current.interimResults = false;
//             recognitionRef.current.lang = 'en-US';

//             recognitionRef.current.onstart = () => {
//                 setIsListening(true);
//                 addMessage("", "Listening... (Speak now)");
//             };

//             recognitionRef.current.onresult = (event) => {
//                 const transcript = event.results[0][0].transcript;
//                 setMessage(transcript);
//                 processCommand(transcript.toLowerCase());
//             };

//             recognitionRef.current.onend = () => {
//                 setIsListening(false);
//             };

//             recognitionRef.current.onerror = (event) => {
//                 setIsListening(false);
//                 handleSpeechError(event.error);
//             };
//         } else {
//             addMessage("", "Speech recognition is not supported in this browser. Please type your command.");
//         }

//         return () => {
//             if (recognitionRef.current) {
//                 recognitionRef.current.stop();
//             }
//         };
//     }, []);

//     // Scroll to bottom of chat when new messages are added
//     useEffect(() => {
//         if (chatContainerRef.current) {
//             chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//         }
//     }, [messages]);

//     const handleSpeechError = (error) => {
//         let errorMessage = "Speech recognition error. Please try again.";

//         switch(error) {
//             case "not-allowed":
//                 errorMessage = "Microphone access denied. Please enable microphone permissions in your browser settings.";
//                 break;
//             case "no-speech":
//                 errorMessage = "No speech detected. Please speak clearly or check your microphone.";
//                 break;
//             case "audio-capture":
//                 errorMessage = "No microphone found. Please check your audio devices.";
//                 break;
//             case "network":
//                 errorMessage = "Network error occurred. Please check your internet connection.";
//                 break;
//         }

//         addMessage("", errorMessage);
//     };

//     const toggleListening = () => {
//         if (!recognitionRef.current) {
//             addMessage("", "Speech recognition is not available.");
//             return;
//         }

//         if (isListening) {
//             recognitionRef.current.stop();
//         } else {
//             try {
//                 recognitionRef.current.start();
//             } catch (error) {
//                 addMessage("", "Failed to start speech recognition. Please try again.");
//                 console.error("Speech recognition error:", error);
//             }
//         }
//     };

//     const toggleChatbot = () => {
//         setIsExpanded(!isExpanded);
//     };

//     const handleMessageSubmit = async (e) => {
//         e.preventDefault();
//         if (message.trim()) {
//             await processCommand(message.toLowerCase());
//             setMessage("");
//         }
//     };

//     const addMessage = (userInput, aiResponse) => {
//         setMessages((prev) => [
//             ...prev,
//             {
//                 id: Date.now(),
//                 user: userInput,
//                 ai: aiResponse,
//                 timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//             },
//         ]);
//     };

//     const handleNavigation = (command, path) => {
//         navigate(path);
//         addMessage(command, `Navigating to ${path.split('/').pop()}...`);
//     };

//     const getLocalResponse = (command) => {
//         const lowerCmd = command.toLowerCase();

//         if (lowerCmd.includes("add issue") || lowerCmd.includes("report issue")) {
//             return "You can report issues at the Add Issue page. I can take you there if you'd like.";
//         }
//         if (lowerCmd.includes("issue") || lowerCmd.includes("problem")) {
//             return "For reporting issues, please visit the Add Issue page. Would you like me to navigate you there?";
//         }
//         if (lowerCmd.includes("help") || lowerCmd.includes("support")) {
//             return "I can help you navigate the CommunityFix platform. Try asking about specific features or say 'Add Issue' to report a problem.";
//         }

//         return "I'm not sure how to help with that. Try asking about reporting issues, checking listed issues, or other platform features.";
//     };

//     const processCommand = async (command) => {
//         if (!command.trim()) return;

//         setIsProcessing(true);

//         // Navigation commands
//         if (command.includes("add issue") || command.includes("report issue")) {
//             handleNavigation(command, "/residents/AddIssuePage");
//         } 
//         else if (command.includes("listed issues") || command.includes("view issues")) {
//             handleNavigation(command, "/residents/listedIssuesPage");
//         } 
//         else if (command.includes("about us")) {
//             handleNavigation(command, "/residents/AboutUs");
//         } 
//         else if (command.includes("faq") || command.includes("frequently asked questions")) {
//             handleNavigation(command, "/residents/FAQ");
//         } 
//         else if (command.includes("feedback")) {
//             handleNavigation(command, "/residents/FeedbackPage");
//         } 
//         else if (command.includes("reviews") || command.includes("comments")) {
//             handleNavigation(command, "/residents/ReviewsAndComments");
//         } 
//         else if (command.includes("dashboard") || command.includes("home")) {
//             handleNavigation(command, "/residents/Dashboard");
//         } 
//         else if (command.includes("settings")) {
//             handleNavigation(command, "/residents/SettingsPage");
//         } 
//         else {
//             // Try AI service first, then fallback to local responses
//             try {
//                 // Replace with your actual AI service call
//                 // const aiResponse = await getAIResponse(command);
//                 // Simulated delay for demo purposes
//                 await new Promise(resolve => setTimeout(resolve, 1000));
//                 const aiResponse = getLocalResponse(command);
//                 addMessage(command, aiResponse);
//             } catch (error) {
//                 console.error("AI service error:", error);
//                 addMessage(command, getLocalResponse(command));
//             }
//         }

//         setIsProcessing(false);
//     };

//     return (
//         <div className="fixed bottom-4 right-4 z-50">
//             {isExpanded ? (
//                 <div className="bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 flex flex-col border border-gray-200">
//                     <div className="flex justify-between items-center mb-2">
//                         <h3 className="text-lg font-semibold flex items-center">
//                             <MessageSquare className="w-5 h-5 mr-2" />
//                             CommunityFix Assistant
//                         </h3>
//                         <button
//                             onClick={toggleChatbot}
//                             className="p-1 rounded-full hover:bg-gray-100"
//                             aria-label="Minimize chatbot"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                     </div>

//                     <div
//                         ref={chatContainerRef}
//                         className="flex-1 overflow-y-auto mb-3 space-y-3 pr-2"
//                     >
//                         {messages.length === 0 ? (
//                             <div className="text-center text-sm text-gray-500 py-4">
//                                 How can I help you today? Try saying:<br />
//                                 "Report an issue" or<br />
//                                 "Show me listed issues"
//                             </div>
//                         ) : (
//                             messages.map((msg) => (
//                                 <div key={msg.id} className="space-y-1">
//                                     {msg.user && (
//                                         <div className="flex justify-end">
//                                             <div className="bg-blue-500 text-white p-2 rounded-lg max-w-[80%]">
//                                                 <p className="text-sm">{msg.user}</p>
//                                             </div>
//                                         </div>
//                                     )}
//                                     {msg.ai && (
//                                         <div className="flex justify-start">
//                                             <div className="bg-gray-100 text-gray-800 p-2 rounded-lg max-w-[80%]">
//                                                 <p className="text-sm">{msg.ai}</p>
//                                                 <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))
//                         )}
//                     </div>

//                     <form onSubmit={handleMessageSubmit} className="flex items-center gap-2 mt-auto">
//                         <input
//                             type="text"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             placeholder="Type a message..."
//                             className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             disabled={isProcessing}
//                         />
//                         <button
//                             type="button"
//                             onClick={toggleListening}
//                             className={`p-2 rounded-md ${isListening ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"} hover:opacity-80 transition-opacity`}
//                             aria-label={isListening ? "Stop listening" : "Start listening"}
//                             disabled={isProcessing || !('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)}
//                         >
//                             {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
//                         </button>
//                         <button
//                             type="submit"
//                             className={`p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${isProcessing ? "opacity-70" : ""}`}
//                             disabled={isProcessing || !message.trim()}
//                             aria-label="Send message"
//                         >
//                             {isProcessing ? (
//                                 <Loader2 className="w-4 h-4 animate-spin" />
//                             ) : (
//                                 <Send className="w-4 h-4" />
//                             )}
//                         </button>
//                     </form>
//                 </div>
//             ) : (
//                 <button
//                     onClick={toggleChatbot}
//                     className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
//                     aria-label="Open chatbot"
//                 >
//                     <MessageSquare className="w-5 h-5" />
//                     <span className="sr-only">AI Assistant</span>
//                 </button>
//             )}
//         </div>
//     );
// }




// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Mic, MicOff, Send, MessageSquare, Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Chatbot() {
//     const [isListening, setIsListening] = useState(false);
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([]);
//     const [isProcessing, setIsProcessing] = useState(false);
//     const [awaitingConfirmation, setAwaitingConfirmation] = useState({
//         isAwaiting: false,
//         action: null,
//         data: null
//     });

// //   const API_KEY = "xai-ImOx8CS3dQxCiJNUunrtwMcaJC4qd9uRjZ91qpqqUNFTPZc2k8FRu2qvb55KV4viGFc4CPw2Vd93QzXe";
// //   const API_URL = "https://api.x.ai/v1/grok/completions";


//     const navigate = useNavigate();
//     const recognitionRef = useRef(null);
//     const chatContainerRef = useRef(null);

//     const positiveConfirmations = ["yes", "yeah", "sure", "ok", "okay", "yep", "go ahead"];
//     const negativeConfirmations = ["no", "nope", "not now", "later"];

//     // Handle confirmation
//     const handleConfirmation = (command) => {
//         if (awaitingConfirmation.isAwaiting) {
//             if (positiveConfirmations.some(word => command.includes(word))) {
//                 // Proceed with the action (i.e., navigate)
//                 if (awaitingConfirmation.action === "navigate") {
//                     handleNavigation("", awaitingConfirmation.data.path);  // Navigate to the correct path
//                 }
//                 setAwaitingConfirmation({ isAwaiting: false, action: null, data: null });
//                 addMessage("", "Action confirmed. Proceeding...");
//             } else if (negativeConfirmations.some(word => command.includes(word))) {
//                 // Cancel action
//                 setAwaitingConfirmation({ isAwaiting: false, action: null, data: null });
//                 addMessage("", "Action canceled.");
//             } else {
//                 addMessage("", "I didn't catch that. Please confirm with 'yes' or 'no'.");
//             }
//         }
//     };

//     // Add message to chat
//     const addMessage = (userInput, aiResponse) => {
//         setMessages((prev) => [
//             ...prev,
//             {
//                 id: Date.now(),
//                 user: userInput,
//                 ai: aiResponse,
//                 timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//             },
//         ]);
//     };

//     // Handle navigation
//     const handleNavigation = (command, path) => {
//         navigate(path);
//         addMessage(command, `Navigating to ${path.split('/').pop()}...`);
//     };

//     // Get local response or fallback to AI response
//     const getLocalResponse = (command) => {
//         const lowerCmd = command.toLowerCase();

//         // Handle specific queries with tailored responses
//         if (lowerCmd.includes("how should i report an issue")) {
//             return "To report an issue, go to the 'Add Issue' page, provide details, and submit your report. Would you like me to navigate you there?";
//         }

//         if (lowerCmd.includes("how do i check listed issues")) {
//             return "To check listed issues, visit the 'Listed Issues' page. You can view all your reported issues there, along with their statuses.";
//         }

//         if (lowerCmd.includes("how do i give feedback")) {
//             return "To give feedback, go to the 'Feedback' page, fill out the form, and submit it. Would you like me to navigate you there?";
//         }

//         if (lowerCmd.includes("how do i find faqs")) {
//             return "You can find FAQs on the 'FAQ' page. Would you like me to guide you there?";
//         }

//         if (lowerCmd.includes("how do i contact support")) {
//             return "You can contact support through the 'Help' section or by submitting a ticket on the 'Feedback' page.";
//         }

//         // Handle the confirmation responses
//         if (lowerCmd.includes("yes") || lowerCmd.includes("no")) {
//             handleConfirmation(command);  // Handle the confirmation
//         }

//         return "I'm not sure how to help with that. Try asking about reporting issues, checking listed issues, or other platform features.";
//     };

//     // Process command
//     const processCommand = async (command) => {
//         if (!command.trim()) return;

//         setIsProcessing(true);

//         // Navigation commands: we now dynamically handle all pages
//         if (command.includes("add issue") || command.includes("report issue")) {
//             addMessage(command, "You can report issues at the Add Issue page. Would you like me to navigate you there?");
//             setAwaitingConfirmation({
//                 isAwaiting: true,
//                 action: "navigate",
//                 data: { path: "/residents/AddIssuePage" }
//             });

//             // Set timeout to clear confirmation state if no response after 15 seconds
//             setTimeout(() => {
//                 if (awaitingConfirmation.isAwaiting) {
//                     setAwaitingConfirmation({ isAwaiting: false, action: null, data: null });
//                     addMessage("", "I'll wait for your response. Say 'help' if you need assistance.");
//                 }
//             }, 15000); // 15 second timeout
//         } else if (command.includes("listed issues") || command.includes("view issues")) {
//             addMessage(command, "You can view listed issues. Would you like me to navigate you there?");
//             setAwaitingConfirmation({
//                 isAwaiting: true,
//                 action: "navigate",
//                 data: { path: "/residents/listedIssuesPage" }
//             });
//         } else if (command.includes("about us")) {
//             addMessage(command, "You can view information about us. Would you like me to navigate you there?");
//             setAwaitingConfirmation({
//                 isAwaiting: true,
//                 action: "navigate",
//                 data: { path: "/residents/AboutUs" }
//             });
//         } 
//         else if (command.includes("faq") || command.includes("frequently asked questions")) {
//             addMessage(command, "You can view FAQs. Would you like me to navigate you there?");
//             setAwaitingConfirmation({
//                 isAwaiting: true,
//                 action: "navigate",
//                 data: { path: "/residents/FAQ" }
//             });
//         } 
//         else if (command.includes("feedback")) {
//             addMessage(command, "You can provide feedback. Would you like me to navigate you there?");
//             setAwaitingConfirmation({
//                 isAwaiting: true,
//                 action: "navigate",
//                 data: { path: "/residents/FeedbackPage" }
//             });
//         } 
//         else if (command.includes("reviews") || command.includes("comments")) {
//             addMessage(command, "You can view reviews and comments. Would you like me to navigate you there?");
//             setAwaitingConfirmation({
//                 isAwaiting: true,
//                 action: "navigate",
//                 data: { path: "/residents/ReviewsAndComments" }
//             });
//         } 
//         else if (command.includes("dashboard") || command.includes("home")) {
//             addMessage(command, "You can visit your dashboard. Would you like me to navigate you there?");
//             setAwaitingConfirmation({
//                 isAwaiting: true,
//                 action: "navigate",
//                 data: { path: "/residents/Dashboard" }
//             });
//         } 
//         else if (command.includes("settings")) {
//             addMessage(command, "You can view settings. Would you like me to navigate you there?");
//             setAwaitingConfirmation({
//                 isAwaiting: true,
//                 action: "navigate",
//                 data: { path: "/residents/SettingsPage" }
//             });
//         } 
//         else {
//             // Try AI service first, then fallback to local responses
//             try {
//                 await new Promise(resolve => setTimeout(resolve, 1000));
//                 const aiResponse = getLocalResponse(command);
//                 addMessage(command, aiResponse);
//             } catch (error) {
//                 console.error("AI service error:", error);
//                 addMessage(command, getLocalResponse(command));
//             }
//         }

//         setIsProcessing(false);
//     };

//     // Initialize speech recognition
//     useEffect(() => {
//         if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//             const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//             recognitionRef.current = new SpeechRecognition();
//             recognitionRef.current.continuous = false;
//             recognitionRef.current.interimResults = false;
//             recognitionRef.current.lang = 'en-US';

//             recognitionRef.current.onstart = () => {
//                 setIsListening(true);
//                 addMessage("", "Listening... (Speak now)");
//             };

//             recognitionRef.current.onresult = (event) => {
//                 const transcript = event.results[0][0].transcript;
//                 setMessage(transcript);
//                 processCommand(transcript.toLowerCase());
//             };

//             recognitionRef.current.onend = () => {
//                 setIsListening(false);
//             };

//             recognitionRef.current.onerror = (event) => {
//                 setIsListening(false);
//                 handleSpeechError(event.error);
//             };
//         } else {
//             addMessage("", "Speech recognition is not supported in this browser. Please type your command.");
//         }

//         return () => {
//             if (recognitionRef.current) {
//                 recognitionRef.current.stop();
//             }
//         };
//     }, []);

//     const handleSpeechError = (error) => {
//         let errorMessage = "Speech recognition error. Please try again.";

//         switch(error) {
//             case "not-allowed":
//                 errorMessage = "Microphone access denied. Please enable microphone permissions in your browser settings.";
//                 break;
//             case "no-speech":
//                 errorMessage = "No speech detected. Please speak clearly or check your microphone.";
//                 break;
//             case "audio-capture":
//                 errorMessage = "No microphone found. Please check your audio devices.";
//                 break;
//             case "network":
//                 errorMessage = "Network error occurred. Please check your internet connection.";
//                 break;
//         }

//         addMessage("", errorMessage);
//     };

//     const toggleListening = () => {
//         if (!recognitionRef.current) {
//             addMessage("", "Speech recognition is not available.");
//             return;
//         }

//         if (isListening) {
//             recognitionRef.current.stop();
//         } else {
//             try {
//                 recognitionRef.current.start();
//             } catch (error) {
//                 addMessage("", "Failed to start speech recognition. Please try again.");
//                 console.error("Speech recognition error:", error);
//             }
//         }
//     };

//     const toggleChatbot = () => {
//         setIsExpanded(!isExpanded);
//     };

//     const handleMessageSubmit = async (e) => {
//         e.preventDefault();
//         if (message.trim()) {
//             await processCommand(message.toLowerCase());
//             setMessage("");
//         }
//     };

//     return (
//         <div className="fixed bottom-4 right-4 z-50">
//             {isExpanded ? (
//                 <div className="bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 flex flex-col border border-gray-200">
//                     <div className="flex justify-between items-center mb-2">
//                         <h3 className="text-lg font-semibold flex items-center">
//                             <MessageSquare className="w-5 h-5 mr-2" />
//                             CommunityFix Assistant
//                         </h3>
//                         <button
//                             onClick={toggleChatbot}
//                             className="p-1 rounded-full hover:bg-gray-100"
//                             aria-label="Minimize chatbot"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                     </div>

//                     <div
//                         ref={chatContainerRef}
//                         className="flex-1 overflow-y-auto mb-3 space-y-3 pr-2"
//                     >
//                         {messages.length === 0 ? (
//                             <div className="text-center text-sm text-gray-500 py-4">
//                                 How can I help you today? Try saying:<br />
//                                 "Report an issue" or<br />
//                                 "Show me listed issues"
//                             </div>
//                         ) : (
//                             messages.map((msg) => (
//                                 <div key={msg.id} className="space-y-1">
//                                     {msg.user && (
//                                         <div className="flex justify-end">
//                                             <div className="bg-blue-500 text-white p-2 rounded-lg max-w-[80%]">
//                                                 <p className="text-sm">{msg.user}</p>
//                                             </div>
//                                         </div>
//                                     )}
//                                     {msg.ai && (
//                                         <div className="flex justify-start">
//                                             <div className="bg-gray-100 text-gray-800 p-2 rounded-lg max-w-[80%]">
//                                                 <p className="text-sm">{msg.ai}</p>
//                                                 <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))
//                         )}
//                     </div>

//                     <form onSubmit={handleMessageSubmit} className="flex items-center gap-2 mt-auto">
//                         <input
//                             type="text"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             placeholder="Type a message..."
//                             className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             disabled={isProcessing}
//                         />
//                         <button
//                             type="button"
//                             onClick={toggleListening}
//                             className={`p-2 rounded-md ${isListening ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"} hover:opacity-80 transition-opacity`}
//                             aria-label={isListening ? "Stop listening" : "Start listening"}
//                             disabled={isProcessing || !('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)}
//                         >
//                             {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
//                         </button>
//                         <button
//                             type="submit"
//                             className={`p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${isProcessing ? "opacity-70" : ""}`}
//                             disabled={isProcessing || !message.trim()}
//                             aria-label="Send message"
//                         >
//                             {isProcessing ? (
//                                 <Loader2 className="w-4 h-4 animate-spin" />
//                             ) : (
//                                 <Send className="w-4 h-4" />
//                             )}
//                         </button>
//                     </form>
//                 </div>
//             ) : (
//                 <button
//                     onClick={toggleChatbot}
//                     className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
//                     aria-label="Open chatbot"
//                 >
//                     <MessageSquare className="w-5 h-5" />
//                     <span className="sr-only">AI Assistant</span>
//                 </button>
//             )}
//         </div>
//     );
// }

//-------------------------------------------------





// import { useState, useEffect } from "react";
// import { Mic, MicOff, Send, MessageSquare, Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Chatbot() {
//     const [isListening, setIsListening] = useState(false);
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([]);
//     const [isProcessing, setIsProcessing] = useState(false);
//     const [awaitingConfirmation, setAwaitingConfirmation] = useState({
//         isAwaiting: false,
//         action: null,
//         data: null
//     });

//     const navigate = useNavigate();
//     const recognitionRef = useRef(null);
//     const chatContainerRef = useRef(null);

//     const positiveConfirmations = ["yes", "yeah", "sure", "ok", "okay", "yep", "go ahead"];
//     const negativeConfirmations = ["no", "nope", "not now", "later"];

//     // Send message to backend
//     const sendMessageToBackend = async (command) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/chatbot/query', {
//                 query: command
//             });

//             addMessage(command, response.data.response);
//         } catch (error) {
//             addMessage(command, "Sorry, I couldn't process that.");
//             console.error(error);
//         }
//     };

//     // Add message to chat
//     const addMessage = (userInput, aiResponse) => {
//         setMessages((prev) => [
//             ...prev,
//             {
//                 id: Date.now(),
//                 user: userInput,
//                 ai: aiResponse,
//                 timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//             },
//         ]);
//     };

//     // Process command
//     const processCommand = async (command) => {
//         if (!command.trim()) return;

//         setIsProcessing(true);
//         sendMessageToBackend(command);  // Send command to backend for processing
//         setIsProcessing(false);
//     };

//     const handleMessageSubmit = async (e) => {
//         e.preventDefault();
//         if (message.trim()) {
//             await processCommand(message.toLowerCase());
//             setMessage("");
//         }
//     };

//     return (
//         <div className="fixed bottom-4 right-4 z-50">
//             {isExpanded ? (
//                 <div className="bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 flex flex-col border border-gray-200">
//                     {/* Chat UI */}
//                     <div className="flex justify-between items-center mb-2">
//                         <h3 className="text-lg font-semibold flex items-center">
//                             <MessageSquare className="w-5 h-5 mr-2" />
//                             CommunityFix Assistant
//                         </h3>
//                         <button
//                             onClick={() => setIsExpanded(!isExpanded)}
//                             className="p-1 rounded-full hover:bg-gray-100"
//                             aria-label="Minimize chatbot"
//                         >
//                             {/* Minimize Icon */}
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                     </div>
//                     {/* Chat Messages */}
//                     <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-3 space-y-3 pr-2">
//                         {messages.length === 0 ? (
//                             <div className="text-center text-sm text-gray-500 py-4">
//                                 How can I help you today? Try saying:<br />
//                                 "Report an issue" or<br />
//                                 "Show me listed issues"
//                             </div>
//                         ) : (
//                             messages.map((msg) => (
//                                 <div key={msg.id} className="space-y-1">
//                                     {msg.user && (
//                                         <div className="flex justify-end">
//                                             <div className="bg-blue-500 text-white p-2 rounded-lg max-w-[80%]">
//                                                 <p className="text-sm">{msg.user}</p>
//                                             </div>
//                                         </div>
//                                     )}
//                                     {msg.ai && (
//                                         <div className="flex justify-start">
//                                             <div className="bg-gray-100 text-gray-800 p-2 rounded-lg max-w-[80%]">
//                                                 <p className="text-sm">{msg.ai}</p>
//                                                 <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                     <form onSubmit={handleMessageSubmit} className="flex items-center gap-2 mt-auto">
//                         <input
//                             type="text"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             placeholder="Type a message..."
//                             className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             disabled={isProcessing}
//                         />
//                         <button
//                             type="submit"
//                             className={`p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${isProcessing ? "opacity-70" : ""}`}
//                             disabled={isProcessing || !message.trim()}
//                             aria-label="Send message"
//                         >
//                             {isProcessing ? (
//                                 <Loader2 className="w-4 h-4 animate-spin" />
//                             ) : (
//                                 <Send className="w-4 h-4" />
//                             )}
//                         </button>
//                     </form>
//                 </div>
//             ) : (
//                 <button
//                     onClick={() => setIsExpanded(!isExpanded)}
//                     className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
//                     aria-label="Open chatbot"
//                 >
//                     <MessageSquare className="w-5 h-5" />
//                     <span className="sr-only">AI Assistant</span>
//                 </button>
//             )}
//         </div>
//     );
// }








"use client";

import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Mic, MicOff, Send, MessageSquare, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Chatbot() {
    const { user } = useSelector((state) => state.auth);
    const [isListening, setIsListening] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [awaitingConfirmation, setAwaitingConfirmation] = useState({
        isAwaiting: false,
        action: null,
        data: null
    });
    const [lastPrompt, setLastPrompt] = useState(null);

    const navigate = useNavigate();
    const recognitionRef = useRef(null);
    const chatContainerRef = useRef(null);

    const positiveConfirmations = ["yes", "yeah", "sure", "ok", "okay", "yep", "go ahead", "please", "do it"];
    const negativeConfirmations = ["no", "nope", "not now", "later", "cancel", "stop"];



    // Handle confirmation
    const handleConfirmation = (command) => {
        const lowerCmd = command.toLowerCase();

        if (awaitingConfirmation.isAwaiting) {
            if (positiveConfirmations.some(word => lowerCmd.includes(word))) {
                if (awaitingConfirmation.action === "navigate") {
                    navigate(awaitingConfirmation.data.path);
                    addMessage("", `Taking you to ${awaitingConfirmation.data.path.split('/').pop().replace(/([A-Z])/g, ' $1').trim()}...`);
                }
                setAwaitingConfirmation({ isAwaiting: false, action: null, data: null });
                setLastPrompt(null);
                return true;
            }
            else if (negativeConfirmations.some(word => lowerCmd.includes(word))) {
                setAwaitingConfirmation({ isAwaiting: false, action: null, data: null });
                addMessage("", "Okay, action cancelled.");
                setLastPrompt(null);
                return true;
            }
        }
        return false;
    };

    // Add message to chat
    const addMessage = (userInput, aiResponse) => {
        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                user: userInput,
                ai: aiResponse,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
        ]);
    };

    // Get local response or fallback
    const getLocalResponse = (command) => {
        const lowerCmd = command.toLowerCase();

        //Additional responses
        // Handle greetings
        if (/^(hi|hello|hey|greetings)/.test(lowerCmd)) {
            return "Hello! I'm your CommunityFix assistant. I can help you:\n- Report issues\n- Check complaint status\n- Navigate the app\nHow can I help you today?";
        }

        // Handle how-are-you
        if (/how are you|how's it going/.test(lowerCmd)) {
            return "I'm an AI here to help with community issues. What would you like assistance with today?";
        }

        // Handle unclear/nonsense input
        if (/asdf|jkl|^[^a-z0-9]+$/i.test(lowerCmd)) {
            return "I'm not sure what you're asking. Try questions like:\n- How do I report an issue?\n- Where can I check complaints?\n- Take me to the feedback page";
        }

        // Handle demand for concise responses
        if (/concise|shorter|brief/.test(lowerCmd)) {
            return "I can help with:\n1. Reporting issues\n2. Checking complaints\n3. Navigation\nWhat do you need?";
        }

        // Handle "answer me" type demands
        if (/answer me|respond now|reply/.test(lowerCmd)) {
            return "I'm happy to help! Please ask about:\n- Reporting community issues\n- Checking complaint status\n- Giving feedback";
        }

        // Handle work context
        if (/at work|working|on shift/.test(lowerCmd)) {
            return "If you're reporting a work-related community issue, you can:\n1. 'Report a new issue'\n2. 'Check existing complaints'\n3. 'Contact support'";
        }

        

        // Handle greetings
        if (/^(hi|hello|hey)/.test(lowerCmd)) {
            return "Hello! I can help you report issues, check status, or answer questions. What would you like to do?";
        }

        // Handle how-are-you
        if (/how are you|how's it going/.test(lowerCmd)) {
            return "I'm an AI assistant here to help with community issues. How can I assist you today?";
        }

        // Handle help requests
        if (/help|what can you do|support/.test(lowerCmd)) {
            return `I can help with:
- Reporting new issues
- Checking existing issues
- Navigating the app
- Answering questions

Try saying:
"Report a plumbing issue"
"Show my existing issues"
"Take me to the feedback form"`;
        }

        // Handle issue reporting questions
        if (/how.*report|how.*add|want.*report/.test(lowerCmd)) {
            return "You can report issues at the Add Issue page. Would you like me to navigate you there?";
        }

        // Handle issue viewing questions
        if (/how.*check|how.*view|how.*see.*issue|where.*issue/.test(lowerCmd)) {
            return "You can view all your reported issues on the Listed Issues page. Would you like to go there now?";
        }

        // Handle feedback questions
        if (/how.*feedback|where.*feedback|give.*feedback/.test(lowerCmd)) {
            return "You can provide feedback on the Feedback page. Would you like me to take you there?";
        }

        // Handle confirmation responses
        if (positiveConfirmations.some(word => lowerCmd.includes(word)) && lastPrompt) {
            return "Please respond to my previous question with either 'yes' or 'no'.";
        }

        return "I can help with community issues. Try asking about:\n- Reporting problems\n- Checking issue status\n- Giving feedback";
    };

    // Process command with BERT integration
    const processCommand = async (command) => {
        if (!command.trim()) return;

        setIsProcessing(true);

        // First check if this is a confirmation response
        if (handleConfirmation(command)) {
            setIsProcessing(false);
            return;
        }

        const lowerCmd = command.toLowerCase();

        // Navigation commands with expanded patterns
        if (lowerCmd.match(/add|report|create|submit.*issue|problem|complaint/) ||
            lowerCmd.match(/how.*report/) ||
            lowerCmd.match(/want.*report/) ||
            lowerCmd.match(/plumbing|electrical|water.*issue/)) {

            addMessage(command, "You can report issues at the Add Issue page. Would you like me to navigate you there?");
            setAwaitingConfirmation({
                isAwaiting: true,
                action: "navigate",
                data: { path: "/residents/AddIssuePage" }
            });
            setLastPrompt("navigate-add-issue");
        }
        else if (lowerCmd.match(/list|view|check|see.*issue|my.*issue|existing.*issue/)) {
            addMessage(command, "You can view your reported issues. Would you like me to navigate you there?");
            setAwaitingConfirmation({
                isAwaiting: true,
                action: "navigate",
                data: { path: "/residents/listedIssuesPage" }
            });
            setLastPrompt("navigate-list-issues");
        }
        else if (lowerCmd.match(/feedback|suggestion|compliment/)) {
            addMessage(command, "You can provide feedback. Would you like me to navigate you there?");
            setAwaitingConfirmation({
                isAwaiting: true,
                action: "navigate",
                data: { path: "/residents/FeedbackPage" }
            });
            setLastPrompt("navigate-feedback");
        }
        else if (lowerCmd.match(/faq|frequently asked|question/)) {
            addMessage(command, "You can view FAQs. Would you like me to navigate you there?");
            setAwaitingConfirmation({
                isAwaiting: true,
                action: "navigate",
                data: { path: "/residents/FAQ" }
            });
            setLastPrompt("navigate-faq");
        }
        else {
            try {
                // First try to get response from backend AI service
                const config = {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    },
                };

                const response = await axios.post('/api/ai', { message: command }, config);
                addMessage(command, response.data.response);
            } catch (error) {
                console.error("AI service error:", error);
                // Fallback to local responses
                const localResponse = getLocalResponse(command);
                addMessage(command, localResponse);

                if (error.response?.status !== 401) {
                    toast.error("AI service is temporarily unavailable. Using basic responses.");
                }
            }
        }

        setIsProcessing(false);
    };

    // [Rest of the component code remains the same as in previous implementation]
    // This includes:
    // - Speech recognition setup
    // - Toggle functions
    // - Form submission
    // - UI rendering


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
                addMessage("", "Listening... (Speak now)");
            };

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setMessage(transcript);
                processCommand(transcript.toLowerCase());
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };

            recognitionRef.current.onerror = (event) => {
                setIsListening(false);
                handleSpeechError(event.error);
            };
        } else {
            addMessage("", "Speech recognition is not supported in this browser. Please type your command.");
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    const handleSpeechError = (error) => {
        let errorMessage = "Speech recognition error. Please try again.";

        switch (error) {
            case "not-allowed":
                errorMessage = "Microphone access denied. Please enable microphone permissions in your browser settings.";
                break;
            case "no-speech":
                errorMessage = "No speech detected. Please speak clearly or check your microphone.";
                break;
            case "audio-capture":
                errorMessage = "No microphone found. Please check your audio devices.";
                break;
            case "network":
                errorMessage = "Network error occurred. Please check your internet connection.";
                break;
        }

        addMessage("", errorMessage);
    };

    const toggleListening = () => {
        if (!recognitionRef.current) {
            addMessage("", "Speech recognition is not available.");
            return;
        }

        if (isListening) {
            recognitionRef.current.stop();
        } else {
            try {
                recognitionRef.current.start();
            } catch (error) {
                addMessage("", "Failed to start speech recognition. Please try again.");
                console.error("Speech recognition error:", error);
            }
        }
    };

    const toggleChatbot = () => {
        setIsExpanded(!isExpanded);
    };

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        if (message.trim()) {
            await processCommand(message.toLowerCase());
            setMessage("");
        }
    };

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isExpanded ? (
                <div className="bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 flex flex-col border border-gray-200">
                    {/* Chat header */}
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold flex items-center">
                            <MessageSquare className="w-5 h-5 mr-2" />
                            CommunityFix Assistant
                        </h3>
                        <button
                            onClick={toggleChatbot}
                            className="p-1 rounded-full hover:bg-gray-100"
                            aria-label="Minimize chatbot"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {/* Chat messages */}
                    <div
                        ref={chatContainerRef}
                        className="flex-1 overflow-y-auto mb-3 space-y-3 pr-2"
                    >
                        {messages.length === 0 ? (
                            <div className="text-center text-sm text-gray-500 py-4">
                                How can I help you today? Try saying:<br />
                                "Report an issue" or<br />
                                "Show me my listed issues"
                            </div>
                        ) : (
                            messages.map((msg) => (
                                <div key={msg.id} className="space-y-1">
                                    {msg.user && (
                                        <div className="flex justify-end">
                                            <div className="bg-blue-500 text-white p-2 rounded-lg max-w-[80%]">
                                                <p className="text-sm">{msg.user}</p>
                                            </div>
                                        </div>
                                    )}
                                    {msg.ai && (
                                        <div className="flex justify-start">
                                            <div className="bg-gray-100 text-gray-800 p-2 rounded-lg max-w-[80%]">
                                                <p className="text-sm whitespace-pre-line">{msg.ai}</p>
                                                <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    {/* Input form */}
                    <form onSubmit={handleMessageSubmit} className="flex items-center gap-2 mt-auto">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={isProcessing}
                        />
                        <button
                            type="button"
                            onClick={toggleListening}
                            className={`p-2 rounded-md ${isListening ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"} hover:opacity-80 transition-opacity`}
                            aria-label={isListening ? "Stop listening" : "Start listening"}
                            disabled={isProcessing || !('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)}
                        >
                            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                        </button>
                        <button
                            type="submit"
                            className={`p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${isProcessing ? "opacity-70" : ""}`}
                            disabled={isProcessing || !message.trim()}
                            aria-label="Send message"
                        >
                            {isProcessing ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <Send className="w-4 h-4" />
                            )}
                        </button>
                    </form>
                </div>
            ) : (
                <button
                    onClick={toggleChatbot}
                    className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                    aria-label="Open chatbot"
                >
                    <MessageSquare className="w-5 h-5" />
                    <span className="sr-only">AI Assistant</span>
                </button>
            )}
        </div>
    );
}