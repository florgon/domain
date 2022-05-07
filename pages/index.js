import Link from 'next/link'

export default function Home() {
  return (<>
    <div className="display-1">Software solutions for <b>everyone</b>.</div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center">
            <h2>Single account for all</h2>
            <p>Use single <i>Florgon Account</i> for all Florgon services and applications (SSO).</p>
            <Link href="https://profile.florgon.space"><a className="btn btn-primary shadow">Open profile</a></Link>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center mb-3">
            <h2>About us</h2>
            <p>We are working on different applications, websites, software solutions and services for users. Different websites for everyone, services for developers, and much more</p>
            <Link href="/about"><a className="btn btn-outline-primary disabled shadow">Learn more</a></Link>
        </div>
        <div className="col-lg ml-lg-5 text-center">
            <h2>Our projects</h2>
            <p>
                Websites, Applications, APIs and much more.
            </p>
            <Link href="/projects"><a className="btn btn-outline-primary shadow">See all projects</a></Link>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center mb-3">
            <h2>Have any questions?</h2>
            <p>Contact support and ask any question that you want.</p>
            <Link href={`mailto: ${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}><a className="btn btn-outline-secondary shadow">{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</a></Link>
        </div>
        <div className="col-lg ml-lg-5 text-center">
            <h2>Developer?</h2>
            <p>See our developers portal.</p>
            <Link href={process.env.NEXT_PUBLIC_FOR_DEVELOPERS_LINK}><a className="btn btn-outline-secondary disabled shadow">Open website</a></Link>
        </div>
    </div>
  </>)
}