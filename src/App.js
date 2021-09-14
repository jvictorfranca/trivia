import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Trivia from './pages/Trivia';
import Configuracoes from './pages/Configuracoes';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Switch>

      <Route exact path="/trivia" component={ Login } />
      <Route path="/trivia-game" component={ Trivia } />
      <Route path="/configuracoes" component={ Configuracoes } />
      <Route path="/feedback" component={ Feedback } />
      <Route path="/ranking" component={ Ranking } />

    </Switch>
  );
}
