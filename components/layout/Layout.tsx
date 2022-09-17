import Head from 'next/head'
import { useEffect, useState } from 'react'

import Navbar from './navbar'

type DashboardLayoutProps = {
  children: React.ReactNode,
}

const Layout = ({ children }: DashboardLayoutProps) => {
  const [ mounted, setMounted ] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Head>
        <title>T.B.S. PH.D.</title>
        <meta name="description" content="The personal portfolio website of Tommy Smith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-primaryLight h-screen w-screen font-sans">
        <div className="container mx-auto rounded-2xl h-full text-primary-content">
          <div className="h-18">
            { mounted ? <Navbar /> : <div className="navbar"></div> }
          </div>
          <div className="h-[calc(100%-64px)] m-auto w-full">
            { children }
          </div>
        </div>
      </main>
    </>
  )
}

export default Layout