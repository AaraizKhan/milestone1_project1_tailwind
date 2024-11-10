import React from 'react'

const Navbar = () => {
  return (
 <div className="bg-blue-900 p-4">
  <nav className="flex justify-between items-center">
    <div className="text-white text-lg font-bold">Aaraiz portfolio tailwind</div>
    <ul className="flex space-x-10 ml-auto">
      <li><a href="http://localhost:3000/" className="text-white hover:text-gray-400">Home</a></li>
      <li><a href="/About" className="text-white hover:text-gray-400">About</a></li>
      <li><a href="/Contact" className="text-white hover:text-gray-400">Contact</a></li>
    </ul>
  </nav>
</div>
  )
}

export default Navbar