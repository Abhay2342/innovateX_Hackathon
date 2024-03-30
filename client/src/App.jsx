import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import "./App.css";
import Header from "./components/Header/Header";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignupPage";
import JobsPage from "./pages/jobs/JobsPage";

function App() {
  return (
    <Router>
      <Header />
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/profile-settings"
          element={<SettingsPage path={"PROFILE"} />}
        />
        <Route
          path="/create-job"
          element={<SettingsPage path={"CREATE JOB"} />}
        />
      </Routes>
    </Router>
  );
}
import SettingsPage from "./pages/settings/SettingsPage";

export default App;
