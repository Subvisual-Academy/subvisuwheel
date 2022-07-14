import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import MainHeader from "./components/MainHeader";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import WheelPage from "./pages/Wheel";
import SocialNetworks from "./pages/SocialNetworks";
import WinPrize from "./pages/WinPrize";
import Articles from "./pages/Articles";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wheel" element={<WheelPage />} />
          <Route path="/social-network" element={<SocialNetworks />} />
          <Route path="/win-prize" element={<WinPrize />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
