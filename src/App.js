import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Aperos from './components/Aperos'
import Entrees from './components/Entrees'
import Plats from './components/Plats'
import Desserts from './components/Desserts'
import Calculateur from './components/Calculateur'
import Login from './components/Login'
import PageNotFound from './components/PageNotFound'
import AddDesserts from './components/AddDesserts';
//import './App.css';






function App() {
  return (
    <BrowserRouter>   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aperos" component={Aperos} />
        <Route path="/entrees" component={Entrees} />
        <Route path="/plats" component={Plats} />
        <Route path="/desserts" component={Desserts} />
        <Route path="/calculateur" component={Calculateur} />
        <Route path="/login" component={Login} />
        <Route path="/add-desserts" component={AddDesserts} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

