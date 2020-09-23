import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Runnables from './pages/Runnables';

const routes = [
  {
    path: '/',
    component: Runnables,
  }
];

const Routes: React.FC<{}> = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;