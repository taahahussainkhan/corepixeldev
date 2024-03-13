import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export default function Navbar() {

  const [sticky,setSticky] = React.useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false) 
    })
  },[])

  return (
    <nav className={`${sticky? 'dark-nav' : ''} fixed top-0 left-0 flex items-center justify-between z-10 w-full py-1 px-0 text-white mycontainer`}>
      <div className="corepixel">
      <img className='w-180 logo cursor-pointer' src={logo} alt=""/>
      </div>
      
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
