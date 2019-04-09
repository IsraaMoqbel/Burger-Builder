import React from 'react';
import './Layout.css';
import Toolbar from './../Navigation/Toolbar';
import SideDrawer from './../Navigation/SideDrawer';


class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <React.Fragment> 
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className='Content'>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;