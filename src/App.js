import React from 'react';

import { Switch, Route } from "react-router-dom";

import MainPage from './pages/main-page/main-page'
import Map from './components/map/map'

import './App.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/compass" component={Map} />
    </Switch>
  );
}

export default App;
