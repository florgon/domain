import Head from 'next/head'
import Link from 'next/link'

export default function Projects() {
  return (<>
    <Head>
      <meta name="title" content="Projects" />
      <title>Projects</title>
    </Head>
    <div className="display-1">Projects</div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center">
            <h2 className="text-warning">Important notice!</h2>
            <p>Florgon mostly developed by one person, and currently being in hard work, Florgon is still requires a lot of work, which is currently in process.</p>
        </div>
    </div>
    <div className="row mt-5 mb-5">
        <div className="col-lg ml-lg-5 text-center mb-3">
          <h2>Florgon Account</h2>
          <p>Use <i>Florgon SSO Account</i> for all Florgon services and applications.</p>
          <Link href="https://profile.florgon.space"><a className="btn btn-outline-primary shadow">Open profile</a></Link>
        </div>
        <div className="col-lg ml-lg-5 text-center">
          <h2>Florgon Notes</h2>
          <p>Notes taking website, and application (Not yet released). Absolutely free and open. Supports markdown, and other cool stuff. <span className="text-warning">Temporary broken, due to migration.</span></p>
          <Link href="https://notes.florgon.space"><a className="btn btn-outline-warning shadow">Open website</a></Link>
        </div>
    </div>
    <div className="row mt-5 mb-5">
        <div className="col-lg ml-lg-5 text-center mb-3">
          <h2>Gatey</h2>
          <span>Error logging service for developers. Allows you to collect and analyse your application crash reports and problems.</span>
          <p className="text-danger">Work in progress, wait for updates.</p>
          <Link href="https://gatey.florgon.space"><a className="btn btn-outline-danger disabled shadow">Open website</a></Link>
        </div>
        <div className="col-lg ml-lg-5 text-center mb-3">
          <h2>Other</h2>
          <span>Other services that not listed above but may require your attention.</span>
          <p className="text-danger">Work in progress, wait for updates.</p>
          <Link href="https://chat.florgon.space"><a className="btn btn-outline-warning shadow">Chat</a></Link>&nbsp;
          <Link href="https://messenger.florgon.space"><a className="btn btn-outline-danger shadow disabled">Messenger</a></Link>&nbsp;
          <Link href="https://videos.florgon.space"><a className="btn btn-outline-danger shadow disabled">Video hosting</a></Link>&nbsp;
          <Link href="https://cc.florgon.space"><a className="btn btn-outline-danger shadow disabled">Link shortening</a></Link>
        </div>
    </div>
  </>)
}