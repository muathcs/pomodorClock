import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import { BiCheckboxSquare} from "react-icons/bi";


function About() {

  const styling = "relative top-[2px] text-[#1F5156]"
  const styling2 = "mb-[30px] text-[20px] ml-[10[px]"
  return (

      <div className='relative top-[50%]'>
          <h1>Welcome to the About page! </h1>

          <h2 style={{textAlign: "left", marginLeft:"10px"}}>How to use this clock?</h2>

          <p className={styling2 + "mb-[30px]"}>Welcome to our pomodoro clock website! Here, you can use our timer to efficiently manage your time using the Pomodoro Technique. <br/> This time management method involves breaking down your work into focused, 35-minute intervals called "pomodoros," followed by<br/> short breaks. Our website allows you to customize the length of your pomodoros and breaks to fit your needs. Simply set the timer and get to work, <br/> with our helpful alerts to let you know when it's time to take a break. Start boosting your productivity today with our pomodoro clock!</p>
          <ul className={styling2}>How Does It Work!<br/><br/>
            <li className='mb-[5px]' style={{marginBottom:"5px"}}><span className='relative top-[2px] text-[#1F5156]'><BiCheckboxSquare/></span>Create new project by clicking the add button</li>
            <li className='mb-[5px]'><span className='  relative top-[2px] text-[#1F5156]'><BiCheckboxSquare/></span>Choose a project name, and how many pomodors you wish to complete.<br/>1 pomodoro equals two tallys, but you're able to change this through the settings button</li>
            <li className='mb-[5px]'> <span className='relative top-[2px] text-[#1F5156]'><BiCheckboxSquare/></span>Use the setting button on the top bar to change the clock time, short break time, and long break time</li>
          </ul>
      </div>

  )
}

export default About

// BiCheckboxSquare