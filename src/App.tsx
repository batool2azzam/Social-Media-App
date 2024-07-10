import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";
import { ToastContainer } from "react-toastify";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <ToastContainer position="bottom-right" />
          <div className="blur1"></div>
          <div className="blur2"></div>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile/:userId"
              element={<PrivateRoute element={<Profile />} />}
            />
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
