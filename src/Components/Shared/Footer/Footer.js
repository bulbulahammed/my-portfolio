import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="footer-content">
                            <div class="footer-icon">
                                <a href="#" target="_blank">
                                    <span><i class="fab fa-facebook-f"></i></span>
                                </a>
                                <a href="#" target="_blank">
                                    <span><i class="fab fa-twitter"></i></span>
                                </a>
                                <a href="#" target="_blank">
                                    <span><i class="fab fa-linkedin-in"></i></span>
                                </a>
                                <a href="#" target="_blank">
                                    <span><i class="fab fa-behance"></i></span>
                                </a>
                                <a href="#" target="_blank">
                                    <span><i class="fab fa-instagram"></i></span>
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