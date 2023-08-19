import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Signin from './pages/Signin';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import Home from './pages/home';


function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/Signin">
          <Signin />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home/>
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
