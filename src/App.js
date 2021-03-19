import React from 'react';
import './App.scss';
import Homepage from './containers/Homepage/Homepage';
import { Link, Route } from 'react-router-dom';
import ShopPage from './containers/Shop/Shop';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>);  
}

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component= {ShopPage} />
      
    </div>
  );
}

export default App;
