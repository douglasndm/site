import React from 'react';
import { useParams } from 'react-router-dom';
import { isAndroid, isIOS, isWindows } from 'react-device-detect';

import apps from '../../Data/Applications.json';

interface Params {
    appId: string;
}

const DirectLink: React.FC = () => {
    const params = useParams();
    const routeParams = params as Params;

    const findedApp = apps.find((app) => app.id === routeParams.appId);

    if (findedApp) {
        if (isAndroid && !!findedApp.GooglePlay) {
            window.location.href = findedApp.GooglePlay;
        } else if (isIOS && !!findedApp.AppStore) {
            window.location.href = findedApp.AppStore;
        } else if (isWindows && !!findedApp.MSStore) {
            window.location.href = findedApp.MSStore;
        } else {
            window.location.href = 'https://douglasndm.dev';
        }
    } else {
        window.location.href = 'https://douglasndm.dev';
    }

    return <h1>redirecting...</h1>;
};

export default DirectLink;
