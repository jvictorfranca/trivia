import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

export default function App() {
  return (
    <Switch>

      <Route exact path="/" component={ Login } />

    </Switch>
  );
}
