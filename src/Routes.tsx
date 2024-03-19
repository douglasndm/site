import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import App from './Pages/App';
import ExpiryTrackerXML from './Pages/Docs/ExpiryTracker/XML';
import Privacy from './Pages/Privacy';
import DirectLink from './Pages/DirectLink';
import Error_404 from './Pages/Errors/404';

import Terms from './Pages/Terms';
import TermsAppExpiryTracker from './Pages/Terms/Applications/Mobile/ExpiryTracker';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/app/:app_id" component={App} />

            <Route
                path="/docs/expiry-tracker/xml"
                component={ExpiryTrackerXML}
            />

            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" exact component={Terms} />
            <Route
                path="/terms/expiry-tracker"
                component={TermsAppExpiryTracker}
            />
            <Route path="/direct/:appId" component={DirectLink} />
            <Route path="*" component={Error_404} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
