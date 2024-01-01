import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "../App";
import About from "./About";
import Home from "./Home";

function NavBar() {
  return (
    <>
      <header>
        <nav
          className="
          flex flex-wrap items-center justify-center py-4 md:py-2 px-4 text-lg text-gray-700  mb-10 shadow-md  
        "
        >
          <div className="w-1/4 flex justify-end border-b border-orange-600 p-1">
            <div
              className="hidden w-full md:flex md:items-center md:w-auto h-full"
              id="menu"
            >
              <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 gap-3">
                <li className="">
                  <Link
                    className="md:p-4 py-2 block  text-black bg-[#ff6347] hover:bg-gradient rounded-xl  "
                    to="/pomodorClock"
                  >
                    Report
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="md:p-4 py-2 block hover:bg-gradient bg-[#ff6347] rounded-xl text-black "
                    to="/about"
                  >
                    Settings
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/pomodorClock" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Home />} />
        <Route path="/chips" element={<Home />} />
        <Route />
      </Routes>
    </>
  );
}

export default NavBar;
