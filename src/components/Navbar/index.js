import React from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function SmoothScroll() {
    return (
        <section>
            <div className="navbar-fixed">
                <nav className="purple">
                    <div className="container">
                        <div className="nav-wrapper">
                            <AnchorLink href="#" className="brand-logo">NTKLFC</AnchorLink>
                            <AnchorLink href="#" className="sidenav-trigger" data-target="mobile-demo"><i className="material-icons">menu</i></AnchorLink>
                            <ul className="right hide-on-med-and-down">
                                <li><AnchorLink href="/home">Home</AnchorLink></li>
                                <li><AnchorLink href="/search">Search</AnchorLink></li>
                                <li><AnchorLink href="/explore">Explore</AnchorLink></li>
                                <li><AnchorLink href="/adventure">Adventure</AnchorLink></li>
                                <li><AnchorLink href="/gallery">Gallery</AnchorLink></li>
                                <li><AnchorLink href="/contact">Contact</AnchorLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <li><AnchorLink href="#home">Home</AnchorLink></li>
                <li><AnchorLink href="#search">Search</AnchorLink></li>
                <li><AnchorLink href="#explore">Explore</AnchorLink></li>
                <li><AnchorLink href="#adventure">Adventure</AnchorLink></li>
                <li><AnchorLink href="#gallery">Gallery</AnchorLink></li>
                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
            </ul>
        </section>
    )
}

export default function Navbar() {
    return (
        <div>
            <SmoothScroll />
        </div>
    )
}
