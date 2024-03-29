import { Routes, Route } from "react-router-dom";

import ValidateUser from "components/ValidateUser";
import ValidatePrize from "components/ValidatePrize";

import HomePage from "pages/HomePage";
import PrizePage from "pages/PrizePage";
import SignupPage from "pages/SignupPage";
import SocialPage from "pages/SocialPage";
import WheelPage from "pages/WheelPage";
import AdminPage from "pages/AdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/wheel"
          element={
            <ValidateUser>
              <WheelPage />
            </ValidateUser>
          }
        />
        <Route path="/social" element={<SocialPage />} />
        <Route
          path="/prize"
          element={
            <ValidatePrize>
              <PrizePage />
            </ValidatePrize>
          }
        />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
