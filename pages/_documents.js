import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

class MyDocument extends Document {
    render() {
      return (
        <>
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <body>
            <header>
              <nav>
                <ul>
                </ul>
              </nav>
            </header>
            <Main />
            <NextScript />
          </body>
        </>
      );
    }
  }
  
  export default MyDocument;