import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        overflow-x: hidden;
        scroll-behavior: smooth;
    }
`;

export default GlobalStyles;
