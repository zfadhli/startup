import '@/assets/tailwind.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Inter-roman.var-latin.woff2?3.13"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
