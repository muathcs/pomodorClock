import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import { BiCheckboxSquare} from "react-icons/bi";


function About() {
  return (

      <div>
          <h1>Welcome to the About page! </h1>

          <h2 style={{textAlign: "left", marginLeft:"10px"}}>How to use this clock?</h2>

          <p style={{textAlign: "left", marginLeft:"10px", fontSize:"20px", marginBottom:"30px"}}>Welcome to our pomodoro clock website! Here, you can use our timer to efficiently manage your time using the Pomodoro Technique. <br/> This time management method involves breaking down your work into focused, 25-minute intervals called "pomodoros," followed by<br/> short breaks. Our website allows you to customize the length of your pomodoros and breaks to fit your needs. Simply set the timer and get to work, <br/> with our helpful alerts to let you know when it's time to take a break. Start boosting your productivity today with our pomodoro clock!</p>
          <ul style={{textAlign: "left", marginLeft:"5px", fontSize:"20px", padding:"0px"}}>How Does It Work!<br/><br/>
            <li style={{marginBottom:"5px"}}><span style={{position:"relative",top:"2px", color:"#1F5156"}}><BiCheckboxSquare/></span>Create new project by clicking the add button</li>
            <li style={{marginBottom:"5px"}}><span style={{position:"relative",top:"2px", color:"#1F5156"}}><BiCheckboxSquare/></span>Choose a project name, and how many pomodors you wish to complete.<br/>1 pomodoro equals two tallys, but you're able to change this through the settings button</li>
            <li style={{marginBottom:"5px"}}> <span style={{position:"relative",top:"2px", color:"#1F5156"}}><BiCheckboxSquare/></span>Use the setting button on the top bar to change the clock time, short break time, and long break time</li>
          </ul>
      </div>

  )
}

export default About

// BiCheckboxSquare