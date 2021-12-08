import Head from 'next/head';
import Link from 'next/link';

import * as Styled from './styles';

export const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Página não encontrada | Em Franca</title>
      </Head>

      <Styled.Container>
        <h1>Não encontramos essa página :/</h1>
        <p>
          Confira se você digitou direitinho o endereço que queria. Se estiver
          tudo certo, pode ser que o conteúdo tenha sido removido.
        </p>

        <Link href="/" passHref>
          <a href>Ir para página inicial</a>
        </Link>
      </Styled.Container>
    </>
  );
};
