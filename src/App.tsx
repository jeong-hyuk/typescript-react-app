import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Section color="red" />
    </div>
  );
}

export default App;
