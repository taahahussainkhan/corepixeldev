import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

export default function About() {
  return (
    <div className="about">
        <div className="about-left">
            <img className = "about-img"src={about_img} alt="" />
            <img className='play-icon' 
            src={play_icon} alt="" />
        </div>
        <div className="about-right">
            <h3>ABOUT COREPIXEL</h3>
            <h2>Nurturing Tomorrow's Leaders Today.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nostrum aliquam doloremque qui, quisquam perspiciatis optio magnam reprehenderit, ratione rem iste. Quia ullam veritatis qui explicabo assumenda ea impedit dolorem sequi mollitia exercitationem cupiditate architecto, labore molestiae inventore sit dolores minus ex cum, sint eveniet dignissimos hic. Veritatis, adipisci assumenda.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero suscipit reprehenderit dolore aliquam. Reprehenderit quasi omnis at illum exercitationem voluptatum mollitia! Voluptatem dignissimos cum ad animi, eos repellat voluptate expedita.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ipsum, alias vel numquam et saepe veritatis quam nostrum rem esse non, nulla aut, quas quibusdam eligendi impedit?</p>
        </div>
    </div>
  )
}
