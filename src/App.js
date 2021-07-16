import React, { Component } from 'react';

import HomePage from './Components/Home/HomePage';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <HomePage/>
    </div> );
  }
}

export default App;