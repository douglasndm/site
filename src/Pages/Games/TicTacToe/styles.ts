import styled from 'styled-components';
import UnityView from 'react-unity-webgl';

export const Container = styled.div`
    background-color: #2277e9;
    display: flex;
    flex: 1;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

export const Unity = styled(UnityView)`
    width: 100vw;
    height: 100vh;
`;
