"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { ApolloProvider } from "@apollo/client"

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createApolloClient } from '@/lib/apollo'

const inter = Inter({ subsets: ['latin'] })

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
