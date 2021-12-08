import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: ${theme.container.size};
    height: 100vh;
    margin: 0 auto;

    h1 {
      display: block;
      font-size: 18px;
      color: ${theme.colors.gray};
      margin: 0 0 3rem 0;
    }

    a {
      display: block;
      width: 200px;
      height: 4rem;
      text-align: center;
      line-height: 4rem;
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
      transition: all ease-in-out 300ms;
      border-radius: 0.5rem;
      margin: ${theme.spacings.medium};
      &:hover {
        opacity: 0.8;
      }
    }
  `}
`;
