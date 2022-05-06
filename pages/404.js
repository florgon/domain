import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (<>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="author" content="https://kirillzhosul.site" />
      
      <meta name="description" content="Software solutions for everyone." />
      <meta name="keywords" content="florgon, space, portal, services, kirillzhosul" />

      <link rel="canonical" href="https://florgon.space" />
      <link rel="alternate" hrefLang="x-default" href="https://florgon.space" />
      
      <meta name="title" content="Florgon" />
      <title>Not Found | 404</title>
    </Head>
    <Navbar/>
    <Container className="mt-5 text-center">
      <div className="display-1 text-danger"><b>404</b></div>
      <div className="row mt-5 mb-5">
          <div className="col-lg ml-lg-5 text-center">
            <h2></h2>
            <h2><b>Oops...</b></h2>
            <p>Page you are looking for <i>not exists</i> or <i>unavaliable</i>!</p>
            <Link href="/"><a className="btn btn-lg btn-primary mt-3 shadow">Go back to Home</a></Link>
          </div>
      </div>


    </Container>
  </>)
}