import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './pages/Details';
import Main from './pages/Main';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />

        <Route path='/:id/details' component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
