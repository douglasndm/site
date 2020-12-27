import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Privacy from './Pages/Privacy';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/privacy" component={Privacy} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
