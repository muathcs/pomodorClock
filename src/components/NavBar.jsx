import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import App from '../App'
import About from './About'
import Home from './Home'

function NavBar() {
  return (
    <>
    <nav >

        <ul className='navBar'>
            <li>
                <Link to="/pomodorClock">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path='/pomodorClock' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="*" element={<Home/>}/>
        <Route />
      </Routes>
    
    </>
  )
}

export default NavBar