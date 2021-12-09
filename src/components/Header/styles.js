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

    @media ${theme.media.medium} {
      flex-direction: column;
      justify-content: center;
    }

    h1{
      @media ${theme.media.medium} {
        margin-bottom: 3rem;
      }

      a{
        span{
          color: ${theme.colors.secondaryColor};
          font-family: ${theme.font.secondary};
          text-transform: uppercase;
          font-weight: 500;

          @media ${theme.media.small} {
            font-size: 1.8rem;
          }
        }
        em{
          color: ${theme.colors.primaryColor};
          font-family: ${theme.font.primary};
          font-weight: 300;
          font-size: 1.4rem;
          font-style: normal;

          @media ${theme.media.small} {
            font-size: 1.2rem;
          }
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

        @media ${theme.media.medium} {
          font-size: 1.6rem;
        }

        @media ${theme.media.small} {
          font-size: 1.4rem;
          padding: 0 1rem;
        }
      }
    }
  `}
`;
