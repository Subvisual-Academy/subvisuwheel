import { Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import PrizePage from "pages/PrizePage";
import SignupPage from "pages/SignupPage";
import SocialPage from "pages/SocialPage";
import WheelPage from "pages/WheelPage";
import PolicyPage from "pages/PolicyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/wheel" element={<WheelPage />} />
        <Route path="/social-network" element={<SocialPage />} />
        <Route path="/win-prize" element={<PrizePage />} />
      </Routes>
    </>
  );
}

export default App;
