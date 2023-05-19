import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import App from '../App'
import About from './About'
import Home from './Home'

function NavBar() {
  return (
    <>
 
  <header>
     <nav
        className="
        
          flex flex-wrap
          items-center
          justify-between
          w-[]
          py-4
          md:py-2
          px-4
          text-lg text-gray-700
          bg-white
          
          mb-10
          shadow-md
        "
      >
       <div>
      
        </div>
            
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
       
          
            <li>

              <Link
              className='md:p-4 py-2 block hover:text-purple-400 text-purple-500'
              to="/pomodorClock"
              >
                Home
              
              </Link>
                </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/about"
                >About</Link>
            </li>
          </ul>
        </div>
    </nav>
  </header>
  
  
  



    <Routes>
        <Route path='/pomodorClock' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/*" element={<Home/>}/>
        <Route path="/chips" element={<Home/>}/>
        <Route />
      </Routes>
    
    </>
  )
}

export default NavBar