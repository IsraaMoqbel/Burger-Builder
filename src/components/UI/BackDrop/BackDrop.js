import React from 'react';
import './BackDrop.css';
const backDrop = (props) => {
    return (
        props.show ? <div className='BackDRop' onClick={props.clicked}></div> :null
    )
}

export default backDrop;