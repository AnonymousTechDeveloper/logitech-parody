import React from 'react'
import '../css/ShopSeries.css'

function ShopSeries() {

	const tileData = [
		{
			title: "Ergo Series",
			description: "",
			imageURL: "Meet the Ergo products designed to enhance your comfort and productivity.",
		},
		{
			title: "MX Master Series",
			description: "Unleash your capability to create, make, and do. Transform the way you work woth MX Mice, Keyboards, Webcams & more.",
			imageURL: "",
		},
		{
			title: "For Coders",
			description: "Master your workflow until your last line of code is written and compiled.",
			imageURL: "",
		},
		{
			title: "For Creatives",
			description: "Logi products are built for every step of the create process - from designs that inspire focus, to customizations that keep you in your creative, and file transfer that makes cross-computer work totally seamless.",
			imageURL: "",
		},
		{
			title: "On the Go",
			description: "Discover the mobile products and portable tools designed to work and play on the go.",
			imageURL: "",
		},
	]

	return (
		<div className='shop-series-section'>
			<div className='shop-series-container'>
				<h1 className='shop-series-title'>Shop Series</h1>
				<div className='shop-series-tile-grid'>

				</div>
			</div>
		</div>
	)
}

export default ShopSeries