import "./index.css";
import ReactDOM from "react-dom/client";

import react, { useEffect, useState, useRef } from "react";

import TopBar from "./components/topBar";
import Clock from "./components/Clock";
import Actions from "./components/Actions";
import Settings from "./components/settings";
import Projects from "./components/Projects";
import AddPro from "./components/AddPro";
import ProjectList from "./components/ProjectList";
import { ProjectContext } from "./Contexts/ProjectContext";
import NavBar from "./components/NavBar";
// import counterReducer from "./"
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
function App() {
  return (
    <div className="App h-full border-2 border-black bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500">
      <NavBar />
      {/* <About /> */}
    </div>
  );
}

export default App;
