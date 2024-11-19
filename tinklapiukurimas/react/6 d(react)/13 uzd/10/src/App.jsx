import { useState } from "react";
import viteLogo from "./public/vite.svg" ;
import "./App.css";
import Card from "/components/Card.jsx";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card></Card>
    </>
  );
}

export default App;