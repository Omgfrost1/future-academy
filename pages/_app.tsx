import '../scss/reset.scss';
import '../scss/globals.scss';
import styles from '../scss/index.module.scss';
import type { AppProps } from 'next/app';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
        <>
          <Header/>
          <main className={styles.main}>
            <Component {...pageProps} />
          </main>
        </>
      )
}
