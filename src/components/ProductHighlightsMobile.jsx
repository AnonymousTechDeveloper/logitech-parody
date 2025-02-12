import React, { useState } from 'react'
import { updateObjectListState, updateObjectState } from '../js/common.js';
import '../css/ProductHighlights.css'
import  { newProductsList, bestSellersList, recommendedList } from '../js/productsList.js'
import { FaMinus, FaPlus } from 'react-icons/fa6';

function ProductHighlightsMobile() {
    
    const visibleCards = 2;
    const tabs = ['New', 'Best Sellers', 'Recommended'];
    const [productList, setProductList] = useState([newProductsList, bestSellersList, recommendedList])
    const [tabList, setTabList] = useState(tabs.map((tabName, index) => {
        return {
            name: tabName,
            tabActive: 0,
            activePage: 0,
            numberOfPages: Math.ceil(productList[index].length/visibleCards),
        }   
    }));

	const changeProductColor = (tabIndex, colorIndex, prodIndex) => {
		const tempProdList = [...productList];
		tempProdList[tabIndex][prodIndex].activeColor = colorIndex;
		setProductList(tempProdList);
	};

    return (
        <div className='product-hlts-mobile-container'>
            {
                tabList.map((tab, tabIndex) => 
                    <div className='product-hlts-mobile-tab-container'>
                        <div className='product-hlts-mobile-tab' onClick={() => setTabList(updateObjectListState(tabList, tabIndex, 'tabActive', !tab.tabActive))}>
                            <div className='product-hlts-mobile-tab-name'>{tab.name}</div>
                            <div className='product-hlts-mobile-tab-icon'>
                                {
                                    tab.tabActive ? 
                                    <FaMinus /> : <FaPlus />
                                }
                            </div>
                        </div>
                        <div className={`product-hls-tab-content mobile-tab-content`} style={{maxHeight: tab.tabActive ? '930px' : '0px'}}> 
                            {
                                productList[tabIndex].map((product, prodIndex, prodList) => 
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
                                                                onClick={() => changeProductColor(tabIndex, colorIndex, prodIndex)}
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
                    </div>
                )
            }
        </div>
    )
}

export default ProductHighlightsMobile