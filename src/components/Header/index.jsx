import * as Styled from './styles';
const Logo = '/assets/images/logo.png';

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.Container>
        <h1>
          <a href="/">
            <span>Felipe Faciroli</span>
            <em> / Programming ...</em>
          </a>
        </h1>

        <Styled.Menu>
          <li>
            <a href="/#about">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects">
              Projetos
            </a>
          </li>
          <li>
            <a href="/#skils">
              Skils
            </a>
          </li>
          <li>
            <a href="#contact">
              Contato
            </a>
          </li>
        </Styled.Menu>
      </Styled.Container>
    </Styled.Header>
  );
};
