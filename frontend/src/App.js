import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainHeader from "components/MainHeader";

import HomePage from "pages/HomePage";
import PrizePage from "pages/PrizePage";
import SignupPage from "pages/SignupPage";
import SocialPage from "pages/SocialPage";
import WheelPage from "pages/WheelPage";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/wheel" element={<WheelPage />} />
          <Route path="/social-network" element={<SocialPage />} />
          <Route path="/win-prize" element={<PrizePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
