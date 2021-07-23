import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/page/home/HomePage';
import Shop from './Components/page/Shop/Shop'
import SignInOut from './Components/FillForm/Sign-in-out/Sign-in-out';
import './App.css'
import { auth, createUserProfileDocument , } from './FireBase-utils/fireBase'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser: null
     }
    //  console.log(this.state);
  }
unSubscribeFromAuth = null;

componentDidMount() {
  this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => 
        {
        this.setState(
          {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log(snapShot, snapShot.data());});
      });
    }else{
      this.setState({ currentUser: userAuth})
    }
  })
}

componentWillUnmount(){
  this.unSubscribeFromAuth()
}

  render() { 
    return ( 
      <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>
      <Route exact path='/sign' component={SignInOut}/>
    </Switch>
    </div>
     );
  }
}
 
export default App;