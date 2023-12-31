import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Portfolio app homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='content-layout'>
        <h1>Home page</h1>
      </main>
    </>
  )
}
