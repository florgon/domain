import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (<>
    <Head>
      <meta name="title" content="Florgon" />
      <title>Florgon</title>
    </Head>
    <div className="display-1">Software solutions for <b>everyone</b>.</div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center text-lg-left mb-3">
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
  </>)
}