import React from 'react';
import './Layout.css'
const layout = (props) => (
    <React.Fragment>
        <div> toolbar, drawer, backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </React.Fragment>

)

export default layout;