import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ReadLinkPage from './pages/ReadLinkPage';
import CreateLinkPage from './pages/CreateLinkPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <CreateLinkPage/>
        </Route>

        <Route exact path='/r/:id'>
          <ReadLinkPage/>
        </Route>
      
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;