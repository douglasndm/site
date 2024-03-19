import styled from 'styled-components';

import XMLExport from '../../../Assets/Images/Docs/XMLExport.png';

export const Container = styled.div`
    background: #560886;
`;

export const ExplainContainer = styled.div`
    margin: 10% 0 0 0;
    padding: 3% 10% 5% 10%;
    background-color: #ffffff;
`;

export const XMLExportImage = styled.img.attrs(() => ({
    src: XMLExport,
}))`
    height: 50vw;
`;
