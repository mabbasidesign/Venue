import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/headre-footer/Header';
import Footer from './components/headre-footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:'1500px', background:'brown' }} >
        <Header />
      </div>
    );
  }
}

export default App;
