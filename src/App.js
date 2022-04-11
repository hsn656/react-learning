import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";

function App() {
  const [number, setNumber] = useState(parseFloat(0));

  return (
    <div className="App">
      <Counter number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
