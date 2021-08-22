import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeSquare, faExternalLinkAlt, faShoppingCart, faLinkedIn, faLink } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer>
            <div class="container footer-line footer-area">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <p>&copy; Copyright 2020-2021 All rights are Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;