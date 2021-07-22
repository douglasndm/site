import styled from 'styled-components';

export const Container = styled.a`
    text-decoration: none;
    background-color: white;
    padding: 25px;
    border-radius: 12px;
    transition: all 0.2s;
    text-align: center;
    overflow: hidden;

    &:hover {
        background-color: #c7c7c7;
    }

    @media (max-width: 1000px) {
        margin-right: 0;
    }

    @media (max-width: 600px) {
        width: 150px;
        height: 50px;
        padding: 2px;
        margin-top: 10px;
    }
`;

export const Text = styled.span`
    color: rgba(0, 0, 0, 0.7);
    font-family: 'Verdana', sans-serif;
    font-size: 16px;
    font-weight: bold;

    @media (max-width: 1000px) {
        margin-right: 0;
    }

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;
