import React from "react";
import Waves from "./Wave.js"; // Import Waves component
import "./App.css"; // Add your general styles if needed

function App() {
  return (
    <div className="app-container">
      {/* Background Waves Animation */}
      <Waves
        lineColor="rgba(255, 255, 255, 0.5)"
        backgroundColor="rgba(0, 0, 0, 0.8)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      {/* Glassmorphic Login Form */}
      <div className="login-container">
        <h2>Welcome</h2>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="button primary">Sign In</button>
        <button className="button secondary">Sign Up</button>
        <button className="button google">Continue with Google</button>
      </div>
    </div>
  );
}

export default App;
