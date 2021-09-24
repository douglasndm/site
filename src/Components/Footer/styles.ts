import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);

    padding: 7px;
`;

export const Text = styled.span`
    font-family: 'Roboto Condensed', sans-serif;

    font-size: 18px;
    color: #fff;
`;

export const Link = styled.a`
    font-family: 'Roboto Condensed', sans-serif;

    font-size: 16px;
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
