import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';

import { GlobalStyles } from '../styles/global-styles';
import '../styles/main.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../styles/swipper.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default MyApp;

MyApp.propTypes = AppProps;
