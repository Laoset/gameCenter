import React from "react";
import { Routes, Route } from "react-router-dom";
import GameCenter from "./games/GameCenter";
function App() {
  return (
    <Routes>
      <Route path="/" element={<GameCenter />} />
    </Routes>
  );
}

export default App;
