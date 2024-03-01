import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

export default function Hero() {
  return (
    <div className='hero mycontainer'>
      <div className="hero-text">
        <h1 className='text-4xl font-bold tracking-wide'>
          A Community Of Developers, By Developers, For Developers
        </h1>
        <p className='max-w-700px mt-10 mx-auto mb-20 leading-14'>
        Welcome to our vibrant tech community, where innovation thrives and collaboration reigns supreme. Join us in fostering a dynamic ecosystem 'By Developers, For Developers.' Explore limitless opportunities, share knowledge, and connect with like-minded enthusiasts. Together, we're building more than just code; we're shaping the future of technology.
        </p>
        <button className='mybtn bg-white text-green-950 py-3 px-4 text-s rounded-3xl border-0'>Explore More
         <img src={dark_arrow} alt="" srcset="" /></button>
      </div>
    </div>
  )
}
