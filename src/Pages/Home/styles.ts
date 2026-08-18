import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const MainContent = styled.main`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 1.25rem 4rem;
    flex: 1;
`;

export const AppSectionList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0;
    margin: 0;
`;

export const AppSectionItem = styled.li`
    width: 100%;
`;
