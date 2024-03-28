import "./assets/style/css/style.css";
import image from "./assets/hero.jpg";

import React from "react";
import Header from "./ui/header";
import Home from "./routes/home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
