import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1.25rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textMuted};

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const Text = styled.span`
    font-size: 0.9rem;
    line-height: 1.5;
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;

    a {
        color: ${({ theme }) => theme.colors.textMuted};
        font-size: 0.9rem;
        font-weight: 500;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: ${({ theme }) => theme.colors.text};
        }
    }
`;
