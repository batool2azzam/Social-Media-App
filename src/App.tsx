import React from "react";
import Register from "./pages/Register/Register";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "35%", left: "-8rem" }}></div>
      <Register />
    </div>
  );
};

export default App;
