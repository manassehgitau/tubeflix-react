import React from 'react'

function Footer() {
  return (
    <div className='bg-[#0d0c11] text-white py-20'>
      <div className="flex justify-center items-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-bl from-[#dfb9b9] to-[#f6101f] bg-clip-text text-transparent">About TubeFlix</h3>
            <p className="text-gray-400 text-sm sm:text-base lg:w-55">Get the best movie recommendations</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-bl from-[#dfb9b9] to-[#f6101f] bg-clip-text text-transparent">Quick Links</h3>
            <ul className="text-sm sm:text-base">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Tv Shows</a></li>
              <li><a href="#" className="hover:underline">movies</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-bl from-[#dfb9b9] to-[#f6101f] bg-clip-text text-transparent">Contact</h3>
            <ul className="text-sm sm:text-base">
              <li><a href="mailto:info@bithealth.com" className="hover:underline">info@tubeflix.com</a></li>
              <li><a href="tel:+123456789" className="hover:underline">+254 734 567 891</a></li>
              <li><a href="tel:+123456789" className="hover:underline">Location: Kipro Centre, Westlands</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-bl from-[#dfb9b9] to-[#f6101f] bg-clip-text text-transparent">Follow Us</h3>
            <div className="icons">
              <ul className="icon flex flex-row justify-start content-center">
                <li><a href="#"
                    className="text-lg text-[#f6101f] hover:text-white transition-colors duration-300 px-3 cursor-pointer"><i
                      className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"
                    className="text-lg text-[#f6101f] hover:text-white transition-colors duration-300 px-3 cursor-pointer"><i
                      className="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"
                    className="text-lg text-[#f6101f] hover:text-white transition-colors duration-300 px-3 cursor-pointer"><i
                      className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"
                    className="text-lg text-[#f6101f] hover:text-white transition-colors duration-300 px-3 cursor-pointer"><i
                      className="fa-brands fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer