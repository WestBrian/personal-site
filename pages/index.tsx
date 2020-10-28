import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian West - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          style={{
            backgroundImage:
              'radial-gradient(circle at center center, transparent,rgb(255,255,255)),linear-gradient(309deg, rgba(90, 90, 90,0.05) 0%, rgba(90, 90, 90,0.05) 50%,rgba(206, 206, 206,0.05) 50%, rgba(206, 206, 206,0.05) 100%),linear-gradient(39deg, rgba(13, 13, 13,0.05) 0%, rgba(13, 13, 13,0.05) 50%,rgba(189, 189, 189,0.05) 50%, rgba(189, 189, 189,0.05) 100%),linear-gradient(144deg, rgba(249, 249, 249,0.05) 0%, rgba(249, 249, 249,0.05) 50%,rgba(111, 111, 111,0.05) 50%, rgba(111, 111, 111,0.05) 100%),linear-gradient(166deg, rgba(231, 231, 231,0.05) 0%, rgba(231, 231, 231,0.05) 50%,rgba(220, 220, 220,0.05) 50%, rgba(220, 220, 220,0.05) 100%),linear-gradient(212deg, rgba(80, 80, 80,0.05) 0%, rgba(80, 80, 80,0.05) 50%,rgba(243, 243, 243,0.05) 50%, rgba(243, 243, 243,0.05) 100%),radial-gradient(circle at center center, hsl(107,19%,100%),hsl(107,19%,100%));',
          }}
        >
          <div
            className={
              'container mx-auto flex justify-between items-center px-8 md:px-16 py-48 pb-0 flex-col md:flex-row'
            }
          >
            <div className={'mb-8 md:mb-0'}>
              <h1
                className={
                  'text-5xl md:text-6xl font-mono font-bold text-blue-600'
                }
              >
                Brian West
              </h1>
              <h2 className={'text-3xl md:text-4xl font-sans'}>
                Front-end developer
              </h2>
            </div>
            <div>
              <Image src={'/me_transparent.png'} width={250} height={250} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
