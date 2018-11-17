import React, { Component } from 'react';
import Carrousel from './Carrousel';

const Featured = () => {
    return ( 
        <div style={{ position:'reletive' }}>

        <Carrousel />

        <div className="artist_name">
            <div className="wrapper">
                Ariana Grande
            </div>
        </div>

        </div>
     );
}
 
export default Featured;