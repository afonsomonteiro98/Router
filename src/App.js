import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import History from './History';
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/our-history" component={History}/>
        </Switch>
      </BrowserRouter>  
        
    </div>
  );
}

export default App;
