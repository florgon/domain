import {Navbar as BootstrapNavbar, Nav as BootstrapNav, Container, Button} from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar(){
    return (
        <BootstrapNavbar bg="light" expand="sm" className="border-bottom container-fluid navbar shadow-sm">
            <Container fluid>
            <BootstrapNavbar.Brand href="/">
                Florgon Space
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Collapse id="navbarCollapse">
                <BootstrapNav className="justify-content-end" style={{ width: "100%" }}>
                    <Link href="/"><Button variant="outline-secondary">Home</Button></Link>&nbsp;
                    <Link href="/about"><Button variant="outline-secondary">About</Button></Link>&nbsp;
                    <Link href="/projects"><Button variant="outline-secondary">Projects</Button></Link>&nbsp;
                    <Link href={process.env.NEXT_PUBLIC_PROFILE_LINK}><Button variant="outline-primary">Profile</Button></Link>
                </BootstrapNav>
            </BootstrapNavbar.Collapse>
            <BootstrapNavbar.Toggle aria-controls="navbarCollapse" />
            </Container>
        </BootstrapNavbar>
    )
    z
}
