import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import App from './Pages/App';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import DirectLink from './Pages/DirectLink';
import Error_404 from './Pages/Errors/404';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/app/:app_id" component={App} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/direct/:appId" component={DirectLink} />
            <Route path="*" component={Error_404} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
