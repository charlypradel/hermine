import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Landingpage from './components/landingpage';
import MixItUp from './components/mixItUp';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: "",
    }
  }
  render() {
    return (
      <Router>
        <div className="App" >
          <Header />
          <Routes>
            <Route exact path='/' component={Landingpage} />
            <Route exact path='/mixItUp' component={MixItUp} category={this.state.category} />
          </Routes>

        </div>

      </Router>

    )
  }
}

export default App;
