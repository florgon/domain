import Link from 'next/link'

export default function About() {
  return (<>
    <div className="display-1">About us</div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center">
            <h2>Software solutions for <b>everyone</b>.</h2>
            <p>Florgon is project aimed to create new services, applications for users. Currently Florgon is developed mostly by one person. Florgon includes all projects under *.florgon.space domain, connected with SSO authentication. Currently Florgon being in fresh state, when there almost all breaks, and requires a lot of work.</p>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center">
            <h2>Our projects</h2>
            <p>
                We are working on almost all types of projects, but mostly we aimed on Websites, APIs and a bit of Applications.
            </p>
            <Link href="/projects"><a className="btn btn-outline-secondary shadow">See all projects</a></Link>
        </div>
        <div className="col-lg ml-lg-5 text-center">
            <h2>Socials</h2>
            <p>
                Connect us in social networks.
            </p>
            <Link href={process.env.NEXT_PUBLIC_SOCIALS_VK_LINK}><a className="btn btn-outline-secondary shadow-sm">VK</a></Link>&nbsp;
            <Link href={process.env.NEXT_PUBLIC_SOCIALS_GITHUB_LINK}><a className="btn btn-outline-secondary shadow-sm">Github</a></Link>&nbsp;
            <Link href={process.env.NEXT_PUBLIC_SOCIALS_YOUTUBE_LINK}><a className="btn btn-outline-secondary shadow-sm">Youtube</a></Link>
        </div>
    </div>
    <div className="row mt-5 mb-5">
        <div className="col-lg ml-lg-5 text-center mb-3">
            <h2>Have any questions?</h2>
            <p>Contact support and ask any question that you want.</p>
            <Link href={`mailto: ${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}><a className="btn btn-outline-secondary shadow">{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</a></Link>
        </div>
        <div className="col-lg ml-lg-5 text-center">
            <h2>Legal information</h2>
            <p>Specific information.</p>
            <Link href="/legal/privacy-policy"><a className="btn btn-outline-secondary shadow">Privacy Policy</a></Link>&nbsp;
            <Link href="/"><a className="btn btn-outline-secondary disabled shadow">Terms Of Use</a></Link>
        </div>
    </div>
  </>)
}