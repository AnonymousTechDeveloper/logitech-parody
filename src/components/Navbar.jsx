import React, { useState } from 'react'
import '../css/Navbar.css'
import navLogoLight from '../images/logi-logo-anim-light.png'
import { CiSearch } from 'react-icons/ci';
import { FiSearch } from 'react-icons/fi';
import { RiCloseLargeLine, RiUserLine } from 'react-icons/ri';

function Navbar() {

	const [mainLogoClass, setMainLogoClass] = useState('navbar-logo');
	const [searchFieldState, setSearchFieldState] = useState(0);
	const [searchQuery, setSearchQuery] = useState('');

	return (			
		<div className='navbar-main contained-navbar'>
			{
				searchFieldState ?
				<div className='navbar-search-container'>
					<div className='navbar-search-wrapper'>
						<input className='navbar-search-input' placeholder='SEARCH' onChange={(event) => setSearchQuery(event.target.value)} value={searchQuery} autoFocus={true} />
						<RiCloseLargeLine className='nav-close-icon' onClick={() => setSearchFieldState(0)} />
					</div>
				</div>
				:
				<div className='navbar-content-wrapper'>
					<div className='navbar-logo-container'>
						<div className='y-centered'>
							<div className={mainLogoClass} onMouseEnter={() => {
								if (mainLogoClass.includes('navbar-logo-play')) return;
								setMainLogoClass('navbar-logo navbar-logo-play');
								setTimeout(() => setMainLogoClass('navbar-logo'), 1200);
								}} style={{backgroundImage: `url(${navLogoLight})`}}></div>
						</div>
					</div>
					<div className='navbar-tablist-container'>
						<div className='navbar-tab-container'>
							<div className='navbar-tab y-centered'>SHOP</div>
						</div>
						<div className='navbar-tab-container'>
							<div className='navbar-tab y-centered'>DISCOVER</div>
						</div>
						<div className='navbar-tab-container'>
							<div className='navbar-tab y-centered'>BUSINESS</div>
						</div>
						<div className='navbar-tab-container'>
							<div className='navbar-tab y-centered'>SUPPORT</div>
						</div>
					</div>
					<div className='navbar-other-container'>
						<div className='navbar-searchbox-container'>
							<div className='navbar-searchbox y-centered' onClick={() => setSearchFieldState(1)}>
								<div className='navbar-search'>Search...</div>
								<FiSearch className='nav-search-icon' />
							</div>
						</div>
						<div className='navbar-user-container'>
							<div className='navbar-user-button y-centered'>
								<RiUserLine className='nav-user-icon' />
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}

export default Navbar