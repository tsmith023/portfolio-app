import Head from 'next/head'

type DashboardLayoutProps = {
  children: React.ReactNode,
}

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Head>
        <title>T.B.S. PH.D.</title>
        <meta name="description" content="The personal portfolio website of Tommy Smith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="
        min-h-screen min-w-screen flex justify-center items-center
        bg-gradient-to-br from-neutral via-neutral to-neutral
      ">
        { children }
      </main>
    </>
  )
}

export default Layout