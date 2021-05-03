import React from 'react';
import './Header.css';
import TextAnimation from 'react-animate-text';

const Header = () => {
    return (
        <header id="banner" class="text-center">
            <div class="v-middle">
                <div class="container">
                    <div class="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <h3>Hello</h3>
                            <h1>I Am Bubul Ahammed</h1>
                            <TextAnimation>Junior Web developer</TextAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;