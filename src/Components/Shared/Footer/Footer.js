import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeSquare, faExternalLinkAlt, faShoppingCart, faLinkedIn, faLink } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="footer-content">
                            <div class="footer-icon">
                                <a href="#" target="_blank">
                                    <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                </a>
                                <a href="#" target="_blank">
                                    <span><FontAwesomeIcon icon={faLink} /></span>
                                </a>
                            </div>
                            <p>&copy; bulbul 2021 & Made with love for great people.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;