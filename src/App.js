import flower from "./flower.png";
import "./App.css";
import Dictionary from "./Dictionary";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={flower} className="flower" alt="purple flower" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Andrea Dubuc</small>
        </footer>
      </div>
    </div>
  );
}
