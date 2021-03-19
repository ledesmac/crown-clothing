import React from 'react';
import './App.scss';
import Homepage from './containers/Homepage/Homepage';
import { Link, Route, Switch } from 'react-router-dom';
import ShopPage from './containers/Shop/Shop';
import Header from './components/header/header';

function App() {
  return (
    <div>
    {/* Putting header outside of the switch allows
        it to appear on every render */}
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component= {ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
