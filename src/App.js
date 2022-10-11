import './App.css';
import ReactDOM from "react-dom/client";

import react, {useEffect, useState} from "react";


import TopBar from './components/topBar';
import Clock from './components/Clock'
import Actions from "./components/Actions"
function App() {
  return (
    <div className="App">
      <p>Pomodor Clock</p>
        <TopBar />  
        <Clock /> 
        <Actions />
    </div>
  );
}

export default App;
