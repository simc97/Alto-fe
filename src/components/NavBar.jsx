import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/Alto.png';
import profileLogo from '../assets/images/Profile_icon.png';
import vibesLogo from '../assets/images/Vibes_icon.png'


const NavBar = () => {

    const className= ['nav-container', 'sticky-top', 'shadow']
    return(
        <nav className={className.join(' ')}>
            <Link className="" to="/">
                <div className="nav-logo"><img src={logo} /></div>
            </Link>
            <div className="header-icon-container">
                <img src={profileLogo} alt="profile logo"/>
                <img src={vibesLogo} alt="vibes logo"/>
            </div>
            
        </nav>
    )
}

export default NavBar;