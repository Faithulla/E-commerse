import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/home/HomePage';
import Shop from './Components/Shop/Shop';
import SignInOut from './Components/FillForm/Sign-in-out/Sign-in-out';
import './App.css'
function App(){
  return(
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>
      <Route exact path='/shop/sign' component={SignInOut}/>
    </Switch>
    </div>
  )
};

export default App;