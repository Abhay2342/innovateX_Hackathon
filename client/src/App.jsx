import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import "./App.css";
import Header from "./components/Header/Header";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignupPage";

function App() {
  return (
    <Router>
      <Header />
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
