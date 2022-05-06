import Link from 'next/link'

export default function Footer(){
    return (
        <div className="row text-center">
            <hr/>
            <div className="col-lg mb-1">
                <Link href="mailto: support@florgon.space"><a className="btn btn-outline-secondary">Contact support</a></Link>
            </div>
            <div className="col-lg mb-1">
                <Link href=""><a className="btn btn-outline-secondary disabled">Privacy Policy</a></Link>&nbsp;
                <Link href=""><a className="btn btn-outline-secondary disabled">Terms Of Use</a></Link>
            </div>
            <div className="col-lg mb-1">
                <Link href="https://dev.florgon.space"><a className="btn btn-outline-secondary disabled">For developers</a></Link>
            </div>
            <div className="col-lg mb-1">
                <Link href="https://vk.com/florgon"><a className="btn btn-outline-secondary">VK</a></Link>&nbsp;
                <Link href="https://github.com/florgon"><a className="btn btn-outline-secondary">Github</a></Link>&nbsp;
                <Link href="https://www.youtube.com/channel/UCDg8QTjdjybDM9KYjIVFo6g"><a className="btn btn-outline-secondary">Youtube</a></Link>
            </div>
            <hr className="mt-3"/>
        </div>
    )
}