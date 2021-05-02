import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header id="banner" class="text-center">
            <div class="v-middle">
                <div class="container">
                    <div class="row">
                        <div class="intro-text">
                            <h3>Hello</h3>
                            <h1>I Am Bulbul Ahammed</h1>
                            <h4 class="cd-headline clip">
                                <span class="blc"></span>
                                <span class="cd-words-wrapper">
                                    <b class="is-visible">photographer</b>
                                    <b>Developer</b>
                                    <b>Designer</b>
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;