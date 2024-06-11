import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";
import { UserProvider } from "./contexts/UserContext";
import "./App.css";
const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <div className="blur1"></div>
          <div className="blur2"></div>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
