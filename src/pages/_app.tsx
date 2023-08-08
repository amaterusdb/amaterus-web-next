import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import GoogleAnalytics from '@/components/google_analytics'
import { createApolloClient } from '@/lib/apollo'

export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient()

  return (
    <>
      <GoogleAnalytics />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
