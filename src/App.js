import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Components/home/HomePage';

const HostPage = () =>(
    <div>
      <h1>Hats</h1>
    </div>
) 

function App(){
  return(
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HostPage}/>
    </Switch>
    </div>
  )
};

export default App;