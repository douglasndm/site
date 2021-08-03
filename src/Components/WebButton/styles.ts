import styled from 'styled-components';

export const Container = styled.a`
    text-decoration: none;
    background-color: #000;
    padding: 25px;
    border-radius: 10px;
    transition: all 0.2s;
    text-align: center;
    overflow: hidden;

    &:hover {
        background-color: #454545;
    }

    @media (max-width: 1000px) {
        margin-right: 0;
    }

    @media (max-width: 800px) {
        margin-top: 2%;
        width: 175px;
        height: 55px;
        padding: 7px;
    }

    @media (max-width: 600px) {
        width: 150px;
        height: 50px;
        padding: 3px;
    }
`;

export const Text = styled.span`
    color: #fff;
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
