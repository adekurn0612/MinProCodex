import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './shared/layout';
import Store from '@/redux/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}
