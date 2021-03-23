import React from 'react';
import './App.scss';
import Homepage from './containers/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/friebase.utils';
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
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        console.log("userRef:", userRef);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth});
      }
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
