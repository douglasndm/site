import styled from 'styled-components';

export const Container = styled.div`
    background-color: #710ad1;
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 5%;
    border-radius: 15px;
`;

export const TitleContainer = styled.div`
    width: 15vw;
    height: 50vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Title = styled.h1`
    color: white;
    font-size: 96px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    margin-right: 5vw;
`;

export const DescriptionContainer = styled.div`
    width: 40vw;
    height: 50vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Description = styled.p`
    color: white;
    font-size: 22px;
    font-family: 'Open Sans', sans-serif;
`;

export const Link = styled.a`
    color: white;
    font-size: 22px;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
`;
