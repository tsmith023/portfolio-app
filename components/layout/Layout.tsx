import Head from 'next/head'
import { useEffect, useState } from 'react'

import Navbar from './navbar'

type DashboardLayoutProps = {
  children: React.ReactNode,
}

const Layout = (props: DashboardLayoutProps) => {
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
      <div className="font-sans bg-primary">
        <nav className="container bg-secondary rounded-b-2xl md:rounded-2xl mx-auto text-primary-content">
          { mounted ? <Navbar /> : <div className="navbar"></div> }
        </nav>
        <main className="container bg-primary mx-auto rounded-none md:rounded-2xl text-primary-content">
          <div className="h-children m-auto w-full">
            { props.children }
          </div>
        </main>
      </div>
    </>
  )
}

export default Layout