import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import App from '../App'
import About from './About'

function NavBar() {
  return (
    <>
    <nav >

        <ul className='navBar'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<></>}/>
        <Route path='/about' element={<About/>}/>
        <Route />
      </Routes>
    
    </>
  )
}

export default NavBar