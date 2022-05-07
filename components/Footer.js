import Link from 'next/link'

export default function Footer(){
    return (
        <footer className="bg-light mt-auto fixed-bottom">
            <div className="text-center p-2 border-top">
                <div className="mx-auto row ">
                    <div className="col-lg mb-1">
                        <Link href={`mailto: ${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}><a className="btn btn-outline-secondary shadow-sm">Contact support</a></Link>
                    </div>
                    <div className="col-lg mb-1">
                        <Link href={process.env.NEXT_PUBLIC_LEGAL_PRIVACY_POLICY_URL}><a className="btn btn-outline-secondary disabled shadow-sm">Privacy Policy</a></Link>&nbsp;
                        <Link href={process.env.NEXT_PUBLIC_LEGAL_TERMS_OF_USE_URL}><a className="btn btn-outline-secondary disabled shadow-sm">Terms Of Use</a></Link>
                    </div>
                    <div className="col-lg mb-1">
                        <Link href={process.env.NEXT_PUBLIC_FOR_DEVELOPERS_LINK}><a className="btn btn-outline-secondary disabled shadow-sm">For developers</a></Link>
                    </div>
                    <div className="col-lg mb-1">
                        <Link href={process.env.NEXT_PUBLIC_SOCIALS_VK_LINK}><a className="btn btn-outline-secondary shadow-sm">VK</a></Link>&nbsp;
                        <Link href={process.env.NEXT_PUBLIC_SOCIALS_GITHUB_LINK}><a className="btn btn-outline-secondary shadow-sm">Github</a></Link>&nbsp;
                        <Link href={process.env.NEXT_PUBLIC_SOCIALS_YOUTUBE_LINK}><a className="btn btn-outline-secondary shadow-sm">Youtube</a></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}