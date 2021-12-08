import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.container.size};
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  `}
`;
