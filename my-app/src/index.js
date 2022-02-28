import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MixItUp from './components/mixItUp';
import RingOfFire from './components/ringOfFire'
import Contribute from './components/contribute';
import TODOs from './components/todos';
import NeverEver from './components/neverever';
import Sexy from './components/sexy';


// <React.StrictMode><App /></React.StrictMode>,

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mixItUp" element={<MixItUp />} />
      <Route path="/ringOfFire" element={<RingOfFire />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/todos" element={<TODOs />} />
      <Route path="/neverever" element={<NeverEver />} />
      <Route path="/sexy" element={<Sexy />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
