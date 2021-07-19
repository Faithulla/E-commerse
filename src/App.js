import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/page/home/HomePage';
import Shop from './Components/Shop/Shop';
import SignInOut from './Components/FillForm/Sign-in-out/Sign-in-out';
import './App.css'
import { auth } from './Components/Storage/FireBase-utils/fireBase'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser: null
     }
  }
  unsubscibeFromAuth = null
  componentDidMount(){
    this.unsubscibeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    });
  }
  componentWillUnmount(){
    this.unsubscibeFromAuth();
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