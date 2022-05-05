import {Navbar as BootstrapNavbar, Nav as BootstrapNav} from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar(){
    return (
        <BootstrapNavbar expand="sm" className="border-bottom container-fluid">
            <BootstrapNavbar.Brand>
                Florgon
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Collapse id="navbarCollapse">
                <BootstrapNav navbarCollapse>
                    <Link href="/"><a className="nav-link">Home</a></Link>
                    <Link href="/about"><a className="nav-link">About</a></Link>
                    <Link href="https://profile.florgon.space/"><a className="nav-link">Profile</a></Link>
                </BootstrapNav>
            </BootstrapNavbar.Collapse>
            <BootstrapNavbar.Toggle aria-controls="navbarCollapse" />
        </BootstrapNavbar>
    )
}