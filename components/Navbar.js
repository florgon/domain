import {Navbar as BootstrapNavbar, Nav as BootstrapNav} from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar(){
    return (
        <BootstrapNavbar bg="light" expand="sm" className="border-bottom container-fluid navbar shadow-sm">
            <BootstrapNavbar.Brand>
                Florgon Space
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Collapse id="navbarCollapse">
                <BootstrapNav>
                    <Link href="/"><a className="nav-link">Home</a></Link>
                    <Link href="/about"><a className="nav-link disabled">About</a></Link>
                    <Link href="/projects"><a className="nav-link">Projects</a></Link>
                    <Link href={process.env.NEXT_PUBLIC_PROFILE_LINK}><a className="nav-link">Profile</a></Link>
                </BootstrapNav>
            </BootstrapNavbar.Collapse>
            <BootstrapNavbar.Toggle aria-controls="navbarCollapse" />
        </BootstrapNavbar>
    )
}