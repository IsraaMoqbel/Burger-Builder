import React from 'react';
import Logo from './../Logo/Logo';
import NavigationItems from './NavigationItems';
import Backdrop from './../UI/BackDrop/BackDrop';

import './SideDrawer.css';

const sideDrawer = (props)=> {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <Logo height='11%'/>
            <nav>
                <NavigationItems />
            </nav>

        </div>
        </React.Fragment>

    );
}

export default sideDrawer;