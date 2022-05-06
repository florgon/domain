import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Projects() {
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
      <title>Florgon</title>
    </Head>
    <Navbar/>
    <Container className="mt-5 text-center">
      <div className="display-1">Projects</div>
      <div className="row mt-5">
          <div className="col-lg ml-lg-5 text-center text-lg-left mb-5">
            <h2>Single sign-on</h2>
              <p><i>SSO</i> for all Florgon services using <i>Florgon Account</i>.</p>
              <Link href="https://profile.florgon.space"><a className="btn btn-outline-primary">Open profile</a></Link>
          </div>
          <div className="col-lg ml-lg-5 text-center text-lg-right">
          </div>
      </div>

      <Footer/>
    </Container>
  </>)
}