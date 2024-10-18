import { ModalProvider } from '@/Context/Modal';
import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ModalProvider>
    <Component {...pageProps} />
  </ModalProvider>
);

export default MyApp;
