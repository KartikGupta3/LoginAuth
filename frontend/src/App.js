import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SingUp from "./Components/SingUp";
import HomePage from "./Components/HomePage";
import LogInSuccessPage from "./Components/LogInSuccess";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/SignUp" element={<SingUp />} />
        <Route path="/Success" element={<LogInSuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
