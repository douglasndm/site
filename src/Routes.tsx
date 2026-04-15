import React from 'react';
import { Routes, Route } from 'react-router';

import Home from './Pages/Home';
import App from './Pages/App';
import Privacy from './Pages/Privacy';
import DirectLink from './Pages/DirectLink';
import Error_404 from './Pages/Errors/404';

import Terms from './Pages/Terms';
import TermsAppExpiryTracker from './Pages/Terms/Applications/Mobile/ExpiryTracker';

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/:app_id" element={<App />} />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route
            path="/terms/expiry-tracker"
            element={<TermsAppExpiryTracker />}
        />
        <Route path="/direct/:appId" element={<DirectLink />} />
        <Route path="*" element={<Error_404 />} />
    </Routes>
);

export default AppRoutes;
