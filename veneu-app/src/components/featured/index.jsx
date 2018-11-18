import React, { Component } from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return ( 
        <div style={{ position:'reletive' }}>

        <Carrousel />

        <div className="artist_name">
            <div className="wrapper">
                Ariana Grande
            </div>
        </div>

        <TimeUntil/>
        </div>
     );
}
 
export default Featured;