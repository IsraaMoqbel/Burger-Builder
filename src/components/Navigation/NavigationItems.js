import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem';

const navigationItems = () => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem link='/' active>Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>

    );
}

export default navigationItems;