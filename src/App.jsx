import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import OTPInputWeb from "./pages/otp-verification/OTPInput";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OTPInputWeb />} />
        <Route path="/dashboard" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
