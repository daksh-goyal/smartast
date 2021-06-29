import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return (
        <div className='mr4 ml2 mb2 mt2'>
            <Tilt className="Tilt" options={{ max: 100 }} style={{ height: 125, width: 150 }} >
                <a href="https://daksh-goyal.github.io/smartast/"><div className="Tilt-inner"> <img className='logo-image' alt='Logo' src={brain} /> </div></a>
            </Tilt>
        </div>
    );
}

export default Logo;
