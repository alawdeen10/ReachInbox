// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Onebox from "./Page/Onebox";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/onebox" element={<Onebox />} />
        <Route path="/onebox/:thread_id" element={<Onebox />} />
      </Routes>
    </Router>
  );
};

export default App;
