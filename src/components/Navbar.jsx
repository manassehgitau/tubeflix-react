import React from 'react'

function Navbar() {
  return (
    <div className="w-full fixed top-0 z-50 bg-[#0d0c11]" >
      <nav className="flex flex-row justify-around items-center text-base px-0">
        <a className="w-30 h-30 p-0 cursor-pointer" href="#">
          <img src="./assets/icons/tubeflix-removebg.png" alt="TubeFlix Logo" className="object-cover" />
        </a>
        <div
          className="nav-items hidden lg:flex flex-col lg:flex-row justify-center items-center text-md lg:justify-around text-center shadow-2xl rounded-3xl bg-[#0e151d] px-10 py-5 ">
          <a href="#home" className="mx-5 text-[#fff] hover:text-[#f6101f] transition-colors duration-300 cursor-pointer">
            Home
          </a>
          <a href="#tvShows"
            className="mx-5 text-[#64748b] hover:text-[#f6101f] transition-colors duration-300 cursor-pointer">
            TV Shows
          </a>
          <a href="#movies"
            className="mx-5 text-[#64748b] hover:text-[#f6101f] transition-colors duration-300 cursor-pointer">
            Movies
          </a>
          <a href="#contact"
            className="mx-5 text-[#64748b] hover:text-[#f6101f] transition-colors duration-300 cursor-pointer">
            Contact
          </a>
        </div>

        <div className="nav-items Sign-in hidden lg:flex flex-row justify-between content-center">
          <button
            className="px-4 py-2 bg-[#f6101f] rounded-2xl hover:bg-white hover:text-black transition-colors duration-300 lg:block"><a
              href="#trending">Favorites List</a></button>
        </div>

        <div className="hamburger lg:hidden">
          <a href="#" id="hamburger-icon"
            className="text-xl text-[#f6101f] hover:text-white transition-colors duration-300 px-3 cursor-pointer"><i
              className="fa-solid fa-bars"></i></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar