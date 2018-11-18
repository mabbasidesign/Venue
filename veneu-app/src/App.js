import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/headre-footer/Header';
import Footer from './components/headre-footer/footer';
import Featured from './components/featured/index';
import VunueNfo from './components/venueInfo/index';
import Highlights from './components/Highlights/index';
import Pricing from './components/pricing/index';
import Location from './components/location/index';

class App extends Component {
  render() {
    return (
      <div className="App"  >
        <Header />
        <Featured />
        <VunueNfo />
        <Highlights />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
