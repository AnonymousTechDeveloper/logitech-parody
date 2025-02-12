import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../css/Hero.css'
import heroBGDesktop from '../images/hero-bg-desktop.jpg'
import heroBGMobile from '../images/mx-brio-hpb-mobile.jpg'

function Hero() {

	const [sideMenuState, setSideMenuState] = useState(0);
	const [mobileView, setMobileView] = useState(0);

	const handleResize = (event) => {
		if (window.innerWidth >= 1025) setMobileView(0)
		else setMobileView(1);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize()
	}, [])

  	return (
		<div className='hero-section-wrapper' style={{backgroundImage: `url(${mobileView ? heroBGMobile : heroBGDesktop})`}}>
			<div className='hero-section'>
				<Navbar setSideMenuState={setSideMenuState} />
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