import styled, { css } from 'styled-components';

interface ContainerProps {
    backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
    flex: 1;

    ${(props) =>
        props.backgroundColor &&
        css`
            background-color: ${props.backgroundColor};
        `}
`;
