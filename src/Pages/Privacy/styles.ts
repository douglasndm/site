import styled from 'styled-components';

export const Container = styled.div`
    background: #560886;
`;

export const PrivacyContainer = styled.div`
    margin: 10% 0 0 0;
    padding: 3% 10% 5% 10%;

    background: white;
    color: black;

    @media (max-width: 800px) {
        margin: 11% 0;
        padding: 6% 5%;
    }

    @media (max-width: 400px) {
        margin: 15% 0;
        padding: 6% 5%;
    }

    @media (max-width: 290px) {
        margin: 0;
    }
`;
