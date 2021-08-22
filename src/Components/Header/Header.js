import React from 'react';
import './Header.css';
import banner from '../../images/programming.png';

const Header = () => {
    return (
        <header id="banner" class="text-center">
            <div class="container">
                <div class="banner-area">
                    <div class="row justify-content-between">
                        <div className="col-md-4 banner-text text-left">
                            <h4>I'm Bulbul</h4>
                            <h2>Web Developer</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt rem facere
                                necessitatibus fugiat distinctio?</h6>
                            <a href="#hero">
                                <button className="buttonfx curtainup">Learn More</button>
                            </a>
                        </div>
                        <div className="col-md-2 banner-scroll-btn">
                            <a href="#hero">
                                <div class="mouse_scroll">
                                    <div class="mouse">
                                        <div class="wheel"></div>
                                    </div>
                                    <div>
                                        <span class="m_scroll_arrows unu"></span>
                                        <span class="m_scroll_arrows doi"></span>
                                        <span class="m_scroll_arrows trei"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 banner-image">
                            <img className="w-100" src={banner} alt="Banner photo" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;