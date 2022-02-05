import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import store from 'store';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'styles/globals.css';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
