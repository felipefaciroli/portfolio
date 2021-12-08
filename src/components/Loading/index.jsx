import * as Styled from './styles';

export const Loading = () => {
  return (
    <Styled.Container>
      <div className="spin"></div>
      <h4>Buscando Informações</h4>
    </Styled.Container>
  );
};
