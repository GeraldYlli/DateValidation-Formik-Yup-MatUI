import React from "react";
import ReactDOM from "react-dom";
import Btn from "../src/component/Btn";

function App() {
  return (
    <div>
      <Btn />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
