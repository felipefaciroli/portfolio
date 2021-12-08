import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 1.5rem;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1{
      a{
        span{
          color: ${theme.colors.secondaryColor};
          font-family: ${theme.font.secondary};
          text-transform: uppercase;
          font-weight: 500;
        }
        em{
          color: ${theme.colors.primaryColor};
          font-family: ${theme.font.primary};
          font-weight: 300;
          font-size: 14px;
          font-style: normal;
        }
      }
    }
  `}
`;

export const Menu = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;

    li{
      a{
        padding: 0 1.5rem;
        font-size: 2rem;
        font-weight: 500;
        text-transform: uppercase;
        font-family: ${theme.font.secondary};
      }
    }
  `}
`;
