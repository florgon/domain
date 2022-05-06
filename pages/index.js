import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
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
      <div className="display-1">Software solutions for <b>everyone</b>.</div>
      <div className="row mt-5">
          <div className="col-lg ml-lg-5 text-center text-lg-left">
              <h2>About</h2>
              <p>We providing software solutions and services for users, like you.</p>
              <Link href="/about"><a className="btn btn-outline-primary disabled shadow">Learn more</a></Link>
          </div>
          <div className="col-lg ml-lg-5 text-center text-lg-right">
              <h2>Projects</h2>
              <p>
                  Websites, Applications, APIs and many more.
              </p>
              <Link href="/projects"><a className="btn btn-outline-primary shadow">All projects</a></Link>
          </div>
      </div>
      <div className="row mt-5 mb-5">
          <div className="col-lg ml-lg-5 text-center">
              <h2>Single account</h2>
              <p>Use single <i>Florgon Account</i> for all Florgon services.</p>
              <Link href="https://profile.florgon.space"><a className="btn btn-outline-primary shadow">Open profile</a></Link>
          </div>
      </div>
      
      <Footer/>
    </Container>
  </>)
}