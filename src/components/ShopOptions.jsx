import React from 'react'
import '../css/ShopOptions.css'
import image1 from '../images/keys-to-go-2-hpb-secondary.webp';
import image2 from '../images/combo-touch-ipad-air-12.9-inch-hpb-desktop1.webp';
import image3 from '../images/pop-icon-hpb-secondary.webp';
import { IoIosArrowForward } from 'react-icons/io';

function ShopOptions() {

    const shopOptionObjectList = [
        {
            imageURL: image1,
            title: 'Powerfully portable. For tablets.',
            description: 'A slim, ultra-portable tablet keyboard that goes anywhere.',
            linkText: 'Shop Keys-To-Go 2',
            linkURL: '',
        },
        {
            imageURL: image2,
            title: 'Take iPad further',
            description: 'Type, sketch, view and read with Combo Touch keyboard case for the new iPad Pro and iPad Air.',
            linkText: 'Learn More',
            linkURL: '',
        },
        {
            imageURL: image3,
            title: 'Start with a POP',
            description: 'Add an extra pop to your desk with the POP Icon combo, a wireless keyboard and mouse that are stylish, compact and customizable.',
            linkText: 'Shop Now',
            linkURL: '',
        }
    ]

    return (
        <div className='shop-options-container'>
            {
                shopOptionObjectList.map((shopOptionObject) => 
                    <div className='shop-option-card' key={shopOptionObject.title}>
                        <a href={shopOptionObject.linkURL}>
                            <div className='shop-option-image-container'>
                                <img className='shop-option-image' src={shopOptionObject.imageURL} />
                            </div>
                            <div className='shop-option-text-container'>
                                <h2 className='shop-option-card-title'>{shopOptionObject.title}</h2>
                                <p className='shop-option-card-desc'>{shopOptionObject.description}</p>
                                <div className='shop-option-card-link'>
                                    <div>{shopOptionObject.linkText}</div>
                                    <IoIosArrowForward className='forward-icon' />
                                </div>
                            </div>
                        </a>
                    </div>
                )
            }
        </div>
    )
}

export default ShopOptions