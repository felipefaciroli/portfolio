import styled, { css } from 'styled-components';

export const FieldCustom = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 0;
    label{
      display: block;
      color: #FFF;
      margin-bottom: 1rem;
    }
    input{
      display: block;
      min-width: 30rem;
      width: 100%;
      color: #FFF;
      height: 5rem;
      border: 1px solid transparent;
      padding: 0 0 0 1rem;
      background: #1c1b1b;
      transition: all ease-in-out 300ms;
      &:focus{
        outline: none;
        border-color: ${theme.colors.secondaryColor};
      }
    }
  `}
`;
