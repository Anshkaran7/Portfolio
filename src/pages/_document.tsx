import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
     <Head>
        <link rel="icon" href="/assets/karandev.png" /> 
        <title>Karan.Dev</title>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
