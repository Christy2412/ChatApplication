import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Signin from './pages/Signin';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return <Switch>
    <PublicRoute path="/Signin">
      <Signin/>
    </PublicRoute>
    <PrivateRoute path="/">
      <home/>
    </PrivateRoute>
  </Switch>;
}

export default App;
