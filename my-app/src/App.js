import './App.css';
import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Landingpage from './components/landingpage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Landingpage />
        <Footer />
      </div>
    )
  }
}

export default App;
