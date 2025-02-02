import React from 'react'
import Navbar from './Navbar'
import '../css/Hero.css'
import heroBG from '../images/hero-bg-desktop.jpg'

function Hero() {
  return (
    <div className='hero-section-wrapper' style={{backgroundImage: `url(${heroBG})`}}>
        <div className='hero-section'>
            <Navbar />
			<div className='hero-static-content'>
				<div className='hero-content y-centered'>
					<div className='hero-title'>
						<h1>Meet. Stream. Master.</h1>
					</div>
					<div className='hero-desc'>
						<p>Introducing MX Brio. Experience sharp ultra HD 4K video with our most advanced webcam yet.</p>
					</div>
					<div className='hero-button-container'>
						<button className='theme-button'>LEARN MORE</button>
						<button className='theme-button'>SHOP NOW</button>
					</div>
				</div>
			</div>
        </div>
    </div>
  )
}

export default Hero