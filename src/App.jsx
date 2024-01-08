import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tech from "./Tech";
import Toggle from "./Toggle";
import "./global.css"
import Home from "./Home";
import Business from "./Business";
import Apple from "./Apple";

const App = () => {
  return (
    <Router>
      <Toggle />
      <Routes>
        <Route path="/tech" element={<Tech />} />
        <Route path="/business" element={<Business />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
