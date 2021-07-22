import React, { useMemo } from 'react';
import { UnityContext } from 'react-unity-webgl';

import { Container, Unity } from './styles';

const TicTacToe: React.FC = () => {
    const unityContext = useMemo(() => {
        const baseUrl = `https://tictactoe-edad7.firebaseapp.com/`;

        return new UnityContext({
            loaderUrl: `${baseUrl}/Web.loader.js`,
            dataUrl: `${baseUrl}/Web.data`,
            frameworkUrl: `${baseUrl}/Web.framework.js`,
            codeUrl: `${baseUrl}/Web.wasm`,
            companyName: 'douglasndm',
            productName: 'TicTacToe',
            productVersion: '0.2',
        });
    }, []);

    return (
        <Container>
            <Unity unityContext={unityContext} matchWebGLToCanvasSize />
        </Container>
    );
};

export default TicTacToe;
