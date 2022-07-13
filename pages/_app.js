import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head';


function App({ Component, pageProps }) {
  return (
    <Layout title="Florgon">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App