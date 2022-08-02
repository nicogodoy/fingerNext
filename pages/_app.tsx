import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react'

function App({ Component, pageProps }:any) {
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

export default App