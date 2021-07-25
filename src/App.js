import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/page/home/HomePage";
import Shop from "./Components/page/Shop/Shop";
import SignInOut from "./Components/FillForm/Sign-in-out/Sign-in-out";
import "./App.css";
import { auth, createUserProfileDocument } from "./FireBase-utils/fireBase";
import CheckOut from './Components/page/checkout/checkout';
import { connect } from "react-redux";
import { setCurrentUser } from './Redux/user/user.actions';
import { selectCurrentUser } from './Redux/user/user.selector';
import { createStructuredSelector } from 'reselect'

class App extends  Component{

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data(),
            },
            () => {
              console.log(snapShot, snapShot.data());
            }
          );
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInOut />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
