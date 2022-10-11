import './App.css';
import ReactDOM from "react-dom/client";

import react, {useEffect, useState} from "react";


import TopBar from './components/topBar';


function App() {
  return (
    <div className="App">
      <p>Pomodor Clock</p>
      <TopBar />   
    </div>
  );
}

export default App;
