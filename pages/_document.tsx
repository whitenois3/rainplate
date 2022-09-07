import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

class Document extends NextDocument {
  render() {
    return (
      <Html >
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>Rainplate</title>
          <meta
            name="description"
            content="Rainplate"
          />
          <meta name="author" content="asnared <https://github.com/abigger87>" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode='dark' />
          <Main />
          <NextScript />
          <style jsx global>{`
            html, body {
              min-height: 100%;
              height: 100%;
            }

            #__next {
              height: 100%;
              min-height: 100%;
            }

            #__next div {
              height: 100%;
              min-height: 100%;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default Document;
