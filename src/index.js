// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Make sure this line is importing the Tailwind CSS file
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
