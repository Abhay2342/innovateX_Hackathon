import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
