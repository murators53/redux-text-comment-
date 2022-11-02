import React from "react";
import TextList from "./components/TextList";
import TextDetails from "./components/TextDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div>
          <header></header>
          <div className="ui raised very padded text container segment">
      <Routes>
            <Route path="/" element={<TextList />} />
            <Route path="/posts/:id" element={<TextDetails/>} />
      </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
