import P from 'prop-types';
import Head from 'next/head';
import * as Styled from './styles';
import { Header } from '../../components/Header';

export const Base = ({ children }) => {
  return (
    <>
      <Head>
        <title>Desenvolvedor Frontend Sênior VTEX | Felipe Faciroli</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Styled.Container>
        <Header />
        {children}
      </Styled.Container>
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
};
