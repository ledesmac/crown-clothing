import React from 'react';
import './App.scss';
import Homepage from './containers/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/friebase.utils';
//containers 
import ShopPage from './containers/Shop/Shop';
import SignInAndSignUpPage from './containers/Sign-in-and-Sign-up/sign-in-and-sign-up';
//components
import Header from './components/header/header';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  
 unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      !this.state.currentUser ?
        console.log('Null') :
        console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      {/* Putting header outside of the switch allows
          it to appear on every render */}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component= {ShopPage} />
          <Route path='/signin' component= {SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }; 
}

export default App;
