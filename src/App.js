import React from "react";
import './App.css';
import Navbar from "./shared/navbar";
import Upload from "./components/upload";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Upload/>
    </div>
  );
}

export default App;
