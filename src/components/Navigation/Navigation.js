import React from 'react';
import Logo from '../Logo/Logo'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Logo />
                <p onClick={() => onRouteChange('signin')} className='f4 link dim pa3 pt3 pr4 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Logo />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p onClick={() => onRouteChange('signin')} className='f4 link dim pa3 pt3 pr2 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f4 link dim pa3 pt3 pr4 pointer'>Register</p>
                </div>
            </nav>
        );
    }
}

export default Navigation;