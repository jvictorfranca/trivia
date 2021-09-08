import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Trivia from './pages/Trivia';
import Configuracoes from './pages/Configuracoes';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <Switch>

      <Route exact path="/" component={ Login } />
      <Route path="/trivia" component={ Trivia } />
      <Route path="/configuracoes" component={ Configuracoes } />
      <Route path="/feedback" component={ Feedback } />

    </Switch>
  );
}
