import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react'

function MyApp({ Component, pageProps }) {
  return (
    <FpjsProvider
      loadOptions={{
        apiKey: 'IhR54LETYmdIUvcRfav4',
      }}
    >
      <Component {...pageProps} />
    </FpjsProvider>
  )
}

export default MyApp