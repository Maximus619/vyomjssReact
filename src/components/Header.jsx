/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from 'react';
import { NavLink } from 'react-router-dom';
import '../resource/css/style.css';
import VyomLogo from '../resource/images/icons/vylogo.png';
import JSSLogo from '../resource/images/jsslogo.png';
function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" id="header">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <a className="navbar-brand" href="/"><img className="rounded-circle" src={VyomLogo} height="35"
                        width="41" alt='logovyom' /></a>
                    <button className=" navbar-toggler ml-3" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar01"
                        aria-controls="Navbar01" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list text-dark"></i>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="Navbar01">

                        <ul className="navbar-nav">

                            <NavLink className="nav-link mb-2" to="/"><i className="bi bi-house-door pr-1"></i>Home</NavLink>
                            {/* <NavLink className="nav-item" activeclassname="active" > */}
                            <NavLink className="nav-link mb-2" to="/events"><i className="bi bi-calendar-check pr-1"></i>Events</NavLink>

                            <NavLink className="nav-link mb-2" to="/art"><i className="bi bi-palette pr-1 "></i>Art</NavLink>

                            <NavLink className="nav-link mb-2" to="/gallery"> <i className="bi bi-folder pr-1"></i>Gallery</NavLink>

                            <NavLink className="nav-link mb-2" to="/about"> <i className="bi bi-info-circle pr-1"></i>About</NavLink>

                            <NavLink className="nav-link mb-2" to="/team"> <i className="bi bi-people pr-1"></i>team</NavLink>

                            <NavLink className="nav-link mb-2" to="/contact"><i className="bi bi-journal-bookmark pr-1"></i>Contact</NavLink>

                        </ul>
                    </div>
                    <a className="navbar-brand d-none d-lg-block"><img className="rounded-circle"
                        src={JSSLogo} height="25" width="41" alt='logojss' /></a>

                </div>
            </nav>
        </>
    );
}

export default Header;
