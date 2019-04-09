import React from 'react';
import './Toolbar.css';
import Logo from './../Logo/Logo';
import NavigationItems from './NavigationItems';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const toolbar = (props)=> {
    return (
        <header className='Toolbar'>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo height='80%'/>
            <NavigationItems />
        </header>
    );
}

export default toolbar;