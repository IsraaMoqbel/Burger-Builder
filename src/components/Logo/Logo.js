import React from 'react';
import './Logo.css';
import burgerLogo from './../../assets/images/burger-logo.png'
const logo = (props) => {
    return (
        <div className='Logo'>
            <img src={burgerLogo} alt='logo' style={{height: props.height}} />
        </div>
    );
}

export default logo;