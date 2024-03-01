import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 flex items-center justify-between z-10 w-full py-4 px-0 text-white mycontainer '>
      <img className='w-180 logo cursor-pointer' src={logo} alt=""/>
      <ul>
        <li>Home</li>
        <li>Events</li>
        <li>Join Us</li>
        <li>About Us</li>
        <li><button className='bg-white text-green-950 py-3 px-4 text-s rounded-3xl border-0'>Contact Us</button></li>
      </ul>
    </nav>
  )
}
