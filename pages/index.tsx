import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian West - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={'text-6xl font-mono font-bold'}>Brian West</h1>
        <h2 className={'text-4xl font-sans'}>Front-end developer</h2>
      </main>
    </div>
  )
}
