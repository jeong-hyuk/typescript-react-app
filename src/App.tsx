import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import ChangeColor from "./components/ChangeColor";

function App() {
  return (
    <div className="App">
      <Counter />
      <Input />
      <ChangeColor />
    </div>
  );
}

export default App;
