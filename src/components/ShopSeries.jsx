import React, { useEffect, useState } from 'react'
import '../css/ShopSeries.css'
import image1 from '../images/ergo-series-horizontal-gallery-desktop-a.webp';
import image2 from '../images/mx-master-series-vertical-gallery-desktop-b.webp';
import image3 from '../images/mx-for-coders-vertical-gallery-desktop-d.webp';
import image4 from '../images/mx-for-creatives-horizontal-gallery-desktop-f.webp';
import image5 from '../images/on-the-go-horizontal-gallery-desktop-e.webp';

function ShopSeries() {

	const tileData = [
		{
			title: "Ergo Series",
			description: "Meet the Ergo products designed to enhance your comfort and productivity.",
			imageURL: image1,
		},
		{
			title: "MX Master Series",
			description: "Unleash your capability to create, make, and do. Transform the way you work woth MX Mice, Keyboards, Webcams & more.",
			imageURL: image2,
		},
		{
			title: "For Coders",
			description: "Master your workflow until your last line of code is written and compiled.",
			imageURL: image3,
		},
		{
			title: "For Creatives",
			description: "Logi products are built for every step of the create process - from designs that inspire focus, to customizations that keep you in your creative, and file transfer that makes cross-computer work totally seamless.",
			imageURL: image4,
		},
		{
			title: "On the Go",
			description: "Discover the mobile products and portable tools designed to work and play on the go.",
			imageURL: image5,
		},
	]

	const [activePages, setActivePage] = useState(1);

	useEffect(() => {
		window.addEventListener("resize", () => {

		})	

		window.removeEventListener("resize", this)
	})

	return (
		<div className='shop-series-section'>
			<div className='shop-series-container'>
				<h1 className='shop-series-title'>Shop Series</h1>
				<div className='shop-series-tile-grid'>
					{
						tileData.map((tile, index, tileDataList) => 
							<div className='shop-series-tile'>
								<img className='shop-series-img' src={tileData[index].imageURL}></img>
								<div className='shop-series-img-overlay'>
									<div className='y-centered'>
										<div className="shop-series-img-title">{tileData[index].title}</div>
										<p className='shop-series-img-desc'>{tileData[index].description}</p>
									</div>
								</div>
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default ShopSeries