import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  c = 'John'
  render() {
    return (
      <div>
        <Navbar />
        {/* hello my first class based components {this.c} */}
        <News />
      </div>
    )
  }
}

