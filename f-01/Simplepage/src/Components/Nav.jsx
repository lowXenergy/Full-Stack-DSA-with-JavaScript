import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-10 py-4 bg-white">
      
      {/* Logo / Title */}
      <div className="text-xl font-semibold text-gray-800">
        Horizon Courts
      </div>

      {/* Center Links */}
      <ul className="flex items-center gap-15 text-gray-600 font-medium">
        <li className="px-4 py-1 border rounded-full text-gray-800">
          About Us
        </li>
        <li className="hover:text-black cursor-pointer">Services</li>
        <li className="hover:text-black cursor-pointer">Coaches</li>
        <li className="hover:text-black cursor-pointer">Events</li>
        <li className="hover:text-black cursor-pointer">Contacts</li>
      </ul>

      {/* Right Button */}
      <button className="bg-[#0b1c2c] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:opacity-90">
        Book now
        <span>↗</span>
      </button>

    </nav>
    </div>
  )
}

export default Nav
