import "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Components/Quiz";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </div>
  );
};

export default App;
