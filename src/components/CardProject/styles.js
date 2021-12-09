import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: rgba(28,29,33, .8);

    img{
      display: block;
      width: 100%;
      margin-bottom: 1.5rem;
    }

    h4{
      display: block;
      color: #FFF;
      font-weight: 600;
      font-size: 1.6rem;
      margin: 0 0 1.5rem 0;
    }

    p{
      display: block;
      min-height: 72px;
      color: #FFF;
      font-size: 1.4rem;
      line-height: 2.4rem;
      margin: 0 0 0.5rem 0;
    }

    .actions{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &.public{
        a{
          width: 40%;
        }
      }

      a{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 20rem;
        height: 5rem;
        background: ${theme.colors.secondaryColor};
        border-radius: 0.5rem;
        cursor: pointer;
        margin: 2rem auto 0 auto;
        transition: all ease-in-out 300ms;

        &:hover{
          background: #FFF;
          span{
            color: #000;
          }
        }

        &.outline{
          background-color: #000;

          &:hover{
            background-color: #000;
            span{
              color: ${theme.colors.secondaryColor};
            }
          }
        }

        svg{
          width: 2.5rem;
          margin-right: 1rem;
        }

        span{
          color: #FFF;
          font-size: 1.8rem;
        }
      }
    }
  `}
`;
