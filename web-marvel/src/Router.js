import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './app/home/Home';
export default function Router() {
  return (
    <Switch>
      <Route exact path={["", "/"]} component={Home} />
    </Switch>
  )
}