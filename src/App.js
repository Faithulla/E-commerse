import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Components/home/HomePage';
import Shop from './Components/Shop/Shop';
import './App.css'
function App(){
  return(
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>
    </Switch>
    </div>
  )
};

export default App;