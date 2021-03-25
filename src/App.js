import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

//containers 
import ShopPage from './containers/Shop/Shop';
import SignInAndSignUpPage from './containers/Sign-in-and-Sign-up/sign-in-and-sign-up';
import Homepage from './containers/Homepage/Homepage';
//components
import Header from './components/header/header';
//APIs
import { auth, createUserProfileDocument } from './firebase/friebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {

  componentDidMount() {

    const { setCurrentUser } = this.props;

    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
      {/* Putting header outside of the switch allows
          it to appear on every render */}
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component= {ShopPage} />
          <Route 
            exact path='/signin' 
            render={
              () => this.props.currentUser ? 
                (<Redirect to='/'/>) :
                (<SignInAndSignUpPage/>)
            }
          />
        </Switch>
      </div>
    );
  }; 
}

const mapStateToProps = ({ user }) => {
  return({
    currentUser: user.currentUser
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
