import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
