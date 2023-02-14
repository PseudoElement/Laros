import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import '../src/styles/globals.scss'
import Script from 'next/script'

import type { AppProps } from 'next/app'
import { Layout } from 'features'
import { Provider } from 'react-redux'
import { store } from 'store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-352042472'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-352042472');
        `}
      </Script>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
