import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 30000;
    background-color: rgba(106, 10, 170, .7);

    .spin{
      width: 6rem;
      height: 6rem;
      position: relative;
      margin-bottom: 3rem;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-width: 0.5rem;
        border-color: transparent;
        border-style: solid;
        border-radius: 50%;
      }

      &:after {
        width: 4.5rem;
        height: 4.5rem;
        border-left: 0.5rem solid #FFF;
        border-top: 0.5rem solid #FFF;
        animation: ${rotate()} 600ms linear infinite;
      }

      &:before {
        width: 1.5rem;
        height: 1.5rem;
        border-left: 0.5rem solid #FFF;
        border-top: 0.5rem solid #FFF;
        animation: ${rotate()} 1s linear reverse infinite;
      }
    }

    h4{
      color: #FFF;
      font-size: 2.2rem;
      font-weight: 300;
    }
  `}
`;
