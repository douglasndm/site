import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import App from './Pages/App';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import DirectLink from './Pages/DirectLink';
import PlayTicTacToe from './Pages/Games/TicTacToe';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/app/:app_id" component={App} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/direct/:appId" component={DirectLink} />
            <Route path="/play/tictactoe" component={PlayTicTacToe} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
