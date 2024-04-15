import "./App.css";
import Main from "./Main";
import DisplayWeather from "./componets/DisplayWeather";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="//weatherDetail" element={<DisplayWeather />}></Route>
    </Routes>
  );
}

export default App;
