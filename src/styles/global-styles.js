import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  strong{
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.primary};
    background-color: ${({ theme }) => theme.colors.backgroundBody}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font};
  }

  p {
    font-size: 14px;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor};
    transition: all ease-in-out 300ms;
    &:hover{
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondaryColor};
    }
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }

  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal {
    font-size: 100%;
  }
`;
