import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./Components/Login/Login";
import reportWebVitals from "./reportWebVitals";
import Profil from "./Components/Profil/Profil.js";

ReactDOM.render(
  <React.StrictMode>
    <Profil />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
