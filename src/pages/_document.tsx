import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <Script src='https://platform.twitter.com/widgets.js' strategy='lazyOnload' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
