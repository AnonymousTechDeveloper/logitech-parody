import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { updateObjectState } from './js/common';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { GiEarthAsiaOceania } from 'react-icons/gi';
import Hero from './components/Hero';
import ShopOptions from './components/ShopOptions';
import ProductHighlights from './components/ProductHighlights';
import ShopSeries from './components/ShopSeries';
import ProductHighlightsMobile from './components/ProductHighlightsMobile';
import MainCarousel from './components/MainCarousel';
import mainLogo from './icons/logitechg.svg';
import mainLogoGrey from './icons/logitechg-grey.svg';
import streamlabsLogo from './icons/streamlabs.svg';
import streamlabsLogoGrey from './icons/streamlabs-grey.svg';
import ultimateLabsLogo from './icons/ultimate-ears.svg';
import ultimateLabsLogoBlue from './icons/ultimate-ears-grey.svg';

function App() {

	//const [navbarState, setNavbarState] = useState(1);
	const mobileBreakpointWidth = 1025;
	const hamburgerRenderBreakpointWidth = 715;
	const [hamburgerState, setHamburgerState] = useState(0);
	const [titleBarLogoHovered, settitleBarLogoHovered] = useState(0);
	const [brandDDSteamLabsLogoHovered, setBrandDDSteamLabsLogoHovered] = useState(0);
	const [brandDDUltimateEarsLogoHovered, setBrandDDUltimateEarsLogoHovered] = useState(0);
	const [brandsDDState, setBrandDDState] = useState(0);
	const [mobileView, setMobileView] = useState(window.innerWidth < mobileBreakpointWidth ? 1 : 0);

	function resizehandler() {
		const windowWidth = window.innerWidth;
		if (windowWidth < mobileBreakpointWidth) {
			if (mobileView != 1) setMobileView(1);
		}
		else if (mobileView == 1) setMobileView(0);
		if (windowWidth < hamburgerRenderBreakpointWidth) {
			if (hamburgerState != 1) setHamburgerState(1);
		}
		else if (hamburgerState == 1) setHamburgerState(0);
	}

	useEffect(() => {
		window.addEventListener("resize", resizehandler);
		return () => window.removeEventListener("resize", resizehandler);
	})

    return (
        <div className="App">
		{		
			mobileView ? null :
				<div className='title-bar'>
					<div className='title-bar-section'>
						<span onMouseEnter={() => settitleBarLogoHovered(1)} onMouseLeave={() => settitleBarLogoHovered(0)}>
							{
								titleBarLogoHovered ? 
								<img className='y-centered' src={mainLogo}></img>
								: 
								<img className='y-centered' src={mainLogoGrey}></img>
							}
						</span>
						<hr />
						<div className='y-centered brand-ddown-trigger'>
							<div className='y-centered brand-ddown-trigger-text' onClick={() => setBrandDDState(!brandsDDState)}>
								<span>Our Brands</span>
								<span>
									{
										brandsDDState ? 
										<IoIosArrowUp className='icon' /> :
										<IoIosArrowDown className='icon' />
									}
								</span>
							</div>
							{
								brandsDDState ? 
								<div className='brand-ddown'>
									<div className="brand-ddown-item" onMouseEnter={() => setBrandDDSteamLabsLogoHovered(1)} onMouseLeave={() => setBrandDDSteamLabsLogoHovered(0)}>
										{
											brandDDSteamLabsLogoHovered ? 
											<img src={streamlabsLogo}></img> 
											:
											<img src={streamlabsLogoGrey}></img>
										}
									</div>
									<div className="brand-ddown-item" onMouseEnter={() => setBrandDDUltimateEarsLogoHovered(1)} onMouseLeave={() => setBrandDDUltimateEarsLogoHovered(0)}>
										{
											brandDDUltimateEarsLogoHovered ? 
											<img src={ultimateLabsLogo}></img> 
											:
											<img src={ultimateLabsLogoBlue}></img>
										}
									</div>
								</div> : null
							}
						</div>
					</div>
					<div className='title-bar-section'>
						<div className='loc-changer'>
							<span className='y-centered'><GiEarthAsiaOceania className='globe-icon icon' /></span>
							<span className='y-centered'>India</span>
						</div>
					</div>
				</div>
			}
			<Hero />
			<ShopOptions />
			{
				hamburgerState == 1 ? 
					<ProductHighlightsMobile />
					: 
					<ProductHighlights />
			}
			<ShopSeries mobileView={mobileView} />
			<MainCarousel tabletView={mobileView} mobileView={hamburgerState} />
        </div>
    );
}

export default App;
