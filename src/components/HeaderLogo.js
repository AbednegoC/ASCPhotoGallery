import React from 'react'
import logo from '../images/logo.png';

const HeaderLogo = () => {
    return (
        <div className='title'>
            <h2>
                ASC <span id="gallery-text">Photo Gallery</span>
                <img src={logo} alt='ASC Logo'/>
            </h2>
        </div>
    )
}

export default HeaderLogo
