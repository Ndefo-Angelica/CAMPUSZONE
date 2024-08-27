import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register"



const App: React.FC = () => {

  return (
    <Router>
      <div className="border-solid border-[2px] border-pink-200">


        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;