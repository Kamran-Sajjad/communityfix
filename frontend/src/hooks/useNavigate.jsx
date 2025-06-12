import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/Form/ForgotPassword";
import OtpVerification from "./pages/auth/OtpVerification"; // Import your OtpVerification page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/OtpVerification" element={<OtpVerification />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
