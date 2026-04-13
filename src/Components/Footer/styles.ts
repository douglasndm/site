import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    max-width: 1180px;
    margin: 0 auto;
    padding: 1.5rem 1rem 2.5rem;
    color: ${({ theme }) => theme.colors.textMuted};

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

export const Text = styled.span`
    font-size: 0.95rem;
    line-height: 1.6;
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    a {
        color: ${({ theme }) => theme.colors.text};
        font-weight: 700;
        text-decoration: none;
    }
`;
