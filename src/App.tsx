// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import "./App.css";
import Home from "./pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
