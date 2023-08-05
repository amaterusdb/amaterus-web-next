"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const inter = Inter({ subsets: ['latin'] })

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_AMATERUS_HASURA_GRAPHQL_SCHEMA_URL,
    }),
    cache: new InMemoryCache(),
  })
 }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = createApolloClient()

  return (
    <html>
      <body className={inter.className}>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
        </body>
    </html>
  )
}
