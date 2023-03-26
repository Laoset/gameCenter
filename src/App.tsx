import React from "react";
import { Routes, Route } from "react-router-dom";
import GameCenter from "./games/GameCenter";
import Memotest from "./games/Memotest";
import Pokemon from "./games/Pokemon";
import WordsPerMinute from "./games/wordsPerMinute";
function App() {
  return (
    <Routes>
      <Route path="/" element={<GameCenter />} />
      {/* <Route path="/memotest" element={<Memotest />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/wpm" element={<WordsPerMinute />} /> */}
    </Routes>
  );
}

export default App;
