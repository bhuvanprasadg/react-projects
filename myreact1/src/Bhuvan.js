import React from "react";
import Child from "./Child";
import logo from "./logo.svg";
import "./Bhuvan.scss";

const Bhuvan = () => (
  <div>
    <h2>Bhuvan Component</h2>
    <img src={logo}></img>
    <Child />
  </div>
);
export default Bhuvan;