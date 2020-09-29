import '@/styles/tailwind.css'
import Head from 'next/head'
import { Html } from 'next/document'

export default function App({ Component, pageProps }) {
  return (
    <div className="antialiased leading-tight text-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Inter-roman.var-latin.woff2?3.13"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
