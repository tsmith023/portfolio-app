import '../styles/index.css'
import { Suspense } from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>hi</div>}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Suspense>
  )
}

export default MyApp
