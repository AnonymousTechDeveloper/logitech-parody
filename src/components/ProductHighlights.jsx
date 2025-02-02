import React, { useEffect, useState } from 'react'
import '../css/ProductHighlights.css';
import  { newProductsList, bestSellersList, recommendedList } from '../js/productsList.js'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

function ProductHighlights() {

	const tabs = ['New', 'Best Sellers', 'Recommended'];
	const [activePageList, setActivePageList] = useState([0, 0, 0]);
	const [numberofPages, setNumberOfPages] = useState(2);
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [renderProductList, setRenderProductList] = useState(newProductsList); // Product List to be rendered, 'New' products by default
	const visibleCards = 5;

	useEffect(() => {
		switch (activeTabIndex) {
			case 0: 
				setRenderProductList(newProductsList);
				setNumberOfPages(Math.ceil(newProductsList.length/visibleCards));
				break;
			case 1:
				setRenderProductList(bestSellersList);
				setNumberOfPages(Math.ceil(bestSellersList.length/visibleCards));
				break;
			case 2:
				setRenderProductList(recommendedList);
				setNumberOfPages(Math.ceil(recommendedList.length/visibleCards));
				break;
		};
	}, [activeTabIndex]);
	
	useEffect(() => {
		const productCardContainer = document.getElementsByClassName("product-hls-tab-content")[0];
		productCardContainer.scrollTo({left: productCardContainer.clientWidth*activePageList[activeTabIndex], top: 0, behavior: "smooth"})
	}, [activePageList]);

	const changeProductColor = (colorIndex, prodIndex) => {
		const tempProdList = [...renderProductList];
		tempProdList[prodIndex].activeColor = colorIndex;
		setRenderProductList(tempProdList);
	};

	//TODO: Do something of this shit 
	const scrollHandler = (event) => {
		const initialXPos = event.x;
		const xThreshold = 40;
		const productCardContainer = event.target;
		const leftSpace = (window.innerWidth - productCardContainer.innerWidth)/2;
		window.addEventListener("mousemove", (event) => {
			//console.log(event);
		})
		event.target.onmouseup = function(event) {
			console.log(initialXPos)
			const finalXPos = event.x;
			const deltaX = finalXPos - initialXPos;
			console.log(deltaX, finalXPos, initialXPos)
			if (Math.abs(finalXPos - initialXPos) > xThreshold) console.log("Scrolled!")
			return finalXPos;
		}
		event.target.addEventListener("mouseup", (event) => {
		}, {once: true})
	}

	return (
		<div className='product-highlights-section'>
			<div className='product-hightlights-scroller' onClick={() => {
				const tempActivePageList = [...activePageList];
				if (activePageList[activeTabIndex] != 0) tempActivePageList[activeTabIndex]--;
				else tempActivePageList[activeTabIndex] = numberofPages - 1;
				setActivePageList(tempActivePageList);
			}}>
				<SlArrowLeft className='product-highlights-arrow-icon' />
			</div>
			<div className='product-highlights-container'>
				<div className='product-hls-tabs-container'>
					{
						tabs.map((tabName, index, list) => 
							<div className={`product-hls-tab ${activeTabIndex == index ? 'active-tab' : null}`} onClick={() => setActiveTabIndex(index)}>
								<span>{tabName}</span>
							</div>
						)
					}
				</div>
				<div className='product-hls-tab-content' onMouseDown={(event) => scrollHandler(event)}>
					{
						renderProductList.map((product, prodIndex, prodList) => 
							<div className='product-hls-card'>
								<div className='product-hls-card-image-container'>
									<img 
										className='product-hls-card-image y-centered' 
										src={product.colorList[product.activeColor].imageDefURL} 
										onMouseEnter={(event) => {setTimeout(() => event.target.src = product.colorList[product.activeColor].imageHovURL, 300)}}
										onMouseLeave={(event) => {setTimeout(() => event.target.src = product.colorList[product.activeColor].imageDefURL, 300)}}
									/>
								</div>
								<div className='product-hls-card-content'>
									{	
										product.colorList[0].color != null ?
										<div className='product-hls-card-color-container'>
											{
												product.colorList.map((color, colorIndex, _colorList) => 
													<div 
														className={`product-hls-card-color ${colorIndex == product.activeColor ? 'active-color' : null}`} 
														style={{backgroundColor: color.color}} 
														title={color.name}
														onClick={() => changeProductColor(colorIndex, prodIndex)}
														tabIndex={-1}
													></div>
												)
											}
										</div>
										: null
									}
									<div className='product-hls-card-tag'>{product.tag}</div>
									<div className='product-hls-card-title'>{product.name}</div>
								</div>
							</div>
						)
					}
				</div>
				<div className='product-hls-scroll-container'>
					{
						Array(numberofPages).fill().map((value, pageIndex, list) => 
							<div 
								className={`product-hls-scroll ${pageIndex == activePageList[activeTabIndex] ? 'active-page' : null}`}
								onClick={() => {
									const tempPageList = [...activePageList];
									tempPageList[activeTabIndex] = pageIndex;
									setActivePageList(tempPageList);
								}}
							></div>
						)
					}
				</div>
			</div>
			<div className='product-hightlights-scroller'>
				<SlArrowRight className='product-highlights-arrow-icon' onClick={() => {
						const tempActivePageList = [...activePageList];
						if (activePageList[activeTabIndex] != numberofPages - 1) tempActivePageList[activeTabIndex]++;
						else tempActivePageList[activeTabIndex] = 0;
						setActivePageList(tempActivePageList);
				}} />
			</div>
		</div>
	)
}

export default ProductHighlights