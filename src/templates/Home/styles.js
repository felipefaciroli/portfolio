import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  `}
`;


export const Hometop = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${theme.container.size};
    padding: 4rem 0;

    @media ${theme.media.medium} {
      flex-direction: column;
    }

    video{
      display: block;
      width: 50%;

      @media ${theme.media.medium} {
        width: 80%;
      }
    }
  `}
`;

export const About = styled.div`
  ${({ theme }) => css`
    width: 39%;
    color: #FFF;
    padding-left: 4rem;

    @media ${theme.media.medium} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90%;
      padding: 3rem 0;
    }

    p{
      display: block;
      margin: 0 0 10px 0;
      line-height: 3rem;
      font-size: 1.6rem;

      @media ${theme.media.medium} {
        text-align: center;
      }
    }
  `}
`;

export const AboutCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 35rem;
    background: -webkit-linear-gradient(
180.06deg,#2c204b -7.44%,#4f0732 99.94%);
    background: linear-gradient(
269.94deg,#2c204b -7.44%,#4f0732 99.94%);
    padding: 1.5rem;
    border-radius: 1.5rem;
    margin: 0 0 3rem 0;

    .profile{
      width: 7rem;
      overflow: hidden;
      border-radius: 100%;
      margin: 0 2rem;

      img{
        width: 100%;
      }
    }

    .inf{
      h1{
        display: block;
        font-size: 2rem;
        font-weight: 700;
        color: #FFF;
        margin: 0 0 0.5rem 0;
      }
      h2{
        display: block;
        font-size: 1.4rem;
        font-weight: 400;
        color: #FFF;
        margin: 0 0 1rem 0;
      }
      a{
        display: flex;
        flex-direction: row;
        align-items: center;

        svg{
          display: block;
          width: 2rem;
          margin-right: 0.5rem;
        }

        span{
          font-size: 1.3rem;
        }
      }
    }
  `}
`;

export const Skils = styled.div`
  ${({ theme }) => css`
    padding: 3rem 0;
    h3{
      display: block;
      width: 100%;
      color: #FFF;
      font-size: 1.8rem;
      font-weight: 700;
      text-align: center;
      backdrop-filter: blur(20px);
      background: -webkit-linear-gradient(
  180.06deg,rgba(255,0,142,.45) -7.44%,rgba(130,87,229,.45) 99.94%);
      background: linear-gradient(
  269.94deg,rgba(255,0,142,.45) -7.44%,rgba(130,87,229,.45) 99.94%);
      margin: 0 0 3rem 0;
      padding: 2rem 0;
    }

    .skils{
      padding: 0 1.5rem 5rem 1.5rem;

      .cardSkil{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #070707;
        border-radius: 1rem;
        padding: 2rem;
        cursor: crosshair;

        img{
          display: block;
          width: auto;
          max-width: 10rem;
          height: 8rem;
          margin: 0 0 1rem 0;
        }

        h4{
          display: block;
          font-size: 1.7rem;
          font-weight: 700;
          color: #FFF;

          @media ${theme.media.medium} {
            font-size: 1.4rem;
          }
        }
      }
    }
  `}
`;

export const FormContact = styled.div`
  ${({ theme }) => css`
    margin: 3rem 0;
    padding: 6rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 0.3rem solid ${theme.colors.secondaryColor};

    h3{
      display: block;
      font-size: 2.4rem;
      font-weight: 700;
      color: #FFF;
      text-align: center;
      margin: 0 0 3rem 0;
    }

    form{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50rem;

      @media ${theme.media.medium} {
        width: 85%;
      }

      button{
        display: block;
        width: 20rem;
        height: 50px;
        background: ${theme.colors.secondaryColor};
        color: #FFF;
        border: 0;
        border-radius: 0.5rem;
        cursor: pointer;
        margin-top: 2rem;
        transition: all ease-in-out 300ms;

        &:hover{
          background: ${theme.colors.secondaryColorHover};
        }
      }
    }
  `}
`;

export const Projects = styled.div`
  ${({ theme }) => css`
    margin: 3rem 0;
    padding: 6rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
      display: block;
      font-size: 2.4rem;
      font-weight: 700;
      color: #FFF;
      text-align: center;
      margin: 0 0 3rem 0;
    }

    .content{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .projects-list{
        width: 90%;
        padding: 3rem 0;
      }
    }
  `}
`;

