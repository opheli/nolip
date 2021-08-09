import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Desserts from './components/Desserts'
import Calculateur from './components/Calculateur'
import PageNotFound from './components/PageNotFound'
//import './App.css';






function App() {
  return (
    <BrowserRouter>   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/desserts" component={Desserts} />
        <Route path="/calculateur" component={Calculateur} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

