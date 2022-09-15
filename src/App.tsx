import { useState } from "react";
import "./App.css";
import Header from "./components/Header_dir/Header";
import Header_title from "./components/Header_title";
import Main_body from "./components/Main_body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Header_title />
      <Main_body />
    </div>
  );
}

export default App;
