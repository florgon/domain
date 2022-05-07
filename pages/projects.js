import Head from 'next/head'
import Link from 'next/link'

export default function Projects() {
  return (<>
    <Head>
      <meta name="title" content="Florgon" />
      <title>Projects</title>
    </Head>
    <div className="display-1">Projects</div>
    <div className="row mt-5 mb-5">
        <div className="col-lg ml-lg-5 text-center text-lg-left mb-3">
          <h2>Single sign-on</h2>
          <p><i>SSO</i> for all Florgon services using <i>Florgon Account</i>.</p>
          <Link href="https://profile.florgon.space"><a className="btn btn-outline-primary shadow">Open profile</a></Link>
        </div>
        <div className="col-lg ml-lg-5 text-center text-lg-right">
          <h2>Notes</h2>
          <span>Notes taking website. Absolutely free.</span>
          <p className="text-warning">Temporary broken, due to migration.</p>
          <Link href="https://notes.florgon.space"><a className="btn btn-outline-warning shadow">Open website</a></Link>
        </div>
    </div>
    <div className="row mt-5 mb-5">
        <div className="col-lg ml-lg-5 text-center text-lg-left mb-3">
          <h2>Gatey</h2>
          <span>Error logging service for developers.</span>
          <p className="text-danger">Work in progress, wait for updates.</p>
          <Link href="https://gatey.florgon.space"><a className="btn btn-outline-danger disabled shadow">Open website</a></Link>
        </div>
        <div className="col-lg ml-lg-5 text-center text-lg-right mb-3">
          <h2>Other</h2>
          <span>Other services that not listed above.</span>
          <p className="text-danger">Work in progress, wait for updates.</p>
          <Link href="https://chat.florgon.space"><a className="btn btn-outline-warning shadow">Chat</a></Link>&nbsp;
          <Link href="https://chat.florgon.space"><a className="btn btn-outline-danger shadow disabled">Messenger</a></Link>&nbsp;
          <Link href="https://videos.florgon.space"><a className="btn btn-outline-danger shadow disabled">Videos</a></Link>&nbsp;
          <Link href="https://cc.florgon.space"><a className="btn btn-outline-danger shadow disabled">CC</a></Link>
        </div>
    </div>
  </>)
}