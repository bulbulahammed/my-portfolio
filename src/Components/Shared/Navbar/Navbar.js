import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a class="navbar-brand" href="/">BULBUL</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#custom_nav" aria-controls="custom_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="custom_nav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;