import React, { useEffect, useState } from 'react'
import '../css/MainCarousel.css'
import carouselData from '../js/crouselData'


function MainCarousel( {mobileView, tabletView} ) {

	const numberOfCarouselItems = carouselData.length;
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	const handleSwipe = (event) => {
		const item = event.currentTarget;
		const itemNext = document.getElementsByClassName("carousel-item")[activeItemIndex + 1];
		const itemPrev = document.getElementsByClassName("carousel-item")[activeItemIndex - 1];
		const initialXPos = event.clientX || event.touches[0].clientX;
		const swipeXThreshold = 100;

		item.style.transition = "";
		try {
			itemNext.style.transition = "";
			itemPrev.style.transition = "";
		} catch {}

		const handleSwipeEnd = (event) => {
			item.removeEventListener("mousemove", handleSwipeMovement);
			item.removeEventListener("touchmove", handleSwipeMovement);
			item.style.transition = "transform 0.5s ease-in-out";
			try {
				itemNext.style.transition = "transform 0.5s ease-in-out";
				itemPrev.style.transition = "transform 0.5s ease-in-out";
			} catch {}

			const finalXPos = event.x || event.changedTouches[0].clientX;
			const deltaX = finalXPos - initialXPos;

			if (deltaX > swipeXThreshold) 
				if (activeItemIndex == 0) setActiveItemIndex(numberOfCarouselItems - 1)
				else setActiveItemIndex(activeItemIndex - 1)
			else if (deltaX < -swipeXThreshold)
				if (activeItemIndex == numberOfCarouselItems - 1) setActiveItemIndex(0)
				else setActiveItemIndex(activeItemIndex + 1)
			else item.style.transform = `translateX(0%)`;		}

		const handleSwipeMovement = (event) => {

			item.style.transform = `translateX(${(event.x || event.touches[0].clientX) - initialXPos}px)`;
			try {
				itemNext.style.transform = `translateX(${(event.x || event.touches[0].clientX) - initialXPos + item.clientWidth}px)`;
				itemPrev.style.transform = `translateX(${(event.x || event.touches[0].clientX) - initialXPos - item.clientWidth}px)`;
			} catch {}
		}

		item.addEventListener("mouseup", handleSwipeEnd, {once: true});
		item.addEventListener("touchend", handleSwipeEnd, {once: true});
		item.addEventListener("mousemove", handleSwipeMovement);
		item.addEventListener("touchmove", handleSwipeMovement);
		item.addEventListener("mouseleave", handleSwipeEnd, {once: true});
	}

	return (
		<div className='main-carousel'>
			<div className='crousel-wrapper'>
				{
					carouselData.map((item, index) => 
						<div 
							className='carousel-item' 
							style={{
								backgroundImage: `url(${tabletView ? item.bgURLTablet : mobileView ? item.bgURLMobile : item.bgURLDesktop})`,
								zIndex: index == activeItemIndex ? 2 : Math.abs(index - activeItemIndex) === 1 ? 1 : 0,
								transform: index == activeItemIndex ? 'translateX(0)' : index > activeItemIndex ? 'translateX(100%)' : 'translateX(-100%)',
							}}
							onMouseDown={handleSwipe} onTouchStart={handleSwipe}>
							<div className={`caro-item-content ${item.theme == 1 ? 'dark' : null} ${item.theme == 2 ? 'carbon' : null}`}>
								{
									item.logoURL ? 
									<img className='caro-item-logo' src={item.logoURL}></img> : null
								}
								{  
									item.tag ? 
									<div className='caro-item-tag'>{item.tag}</div> : null
								}
								<div className='caro-item-title'>{item.title}</div>
								<div className='caro-item-desc' style={{fontWeight: `${index == 0 ? '100' : 'normal'}`}}>{item.description}</div>
								<div className='caro-button-container'>
									<a href={item.redirectURL}><button className='caro-item-button theme-button'>{item.buttonText}</button></a>
								</div>
							</div>
						</div>
					)
				}
			</div>
			<div className={`carousel-slider-container ${carouselData[activeItemIndex].theme == 1 ? null : 'light'}`}>
				{
					carouselData.map((item, index) => 
						<div 
							className={`scroller-dot ${activeItemIndex == index ? 'active-page' : null}`}
							onClick={() => setActiveItemIndex(index)}
							></div>
					)
			}
			</div>
		</div>
	)
}

export default MainCarousel