/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from 'react';
import '../resource/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="container-fluid ">
                        <div className="footer-social-link row justify-content-between">
                            <ul className="left">
                                <li>
                                    <a href="https://www.facebook.com/vyomjss/" target="_blank" rel="noreferrer"><i className="facebook">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/vyomjss" target="_blank" rel="noreferrer"><i className="twitter">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCPL_az14u9iX-VH-fMlf3yA" target="_blank" rel="noreferrer"><i
                                        className="youtube">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linktr.ee/vyomjssate" target="_blank" rel="noreferrer"><i className="links">
                                        <FontAwesomeIcon icon={faLink} />
                                    </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/vyomjss/" target="_blank" rel="noreferrer"><i className="instagram">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </i>
                                    </a>
                                </li>
                            </ul>
                            <div id="copyright" className="right pt-2">
                                <a >Copyright © 2022, All Right Reserved VYOMTechnical</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;