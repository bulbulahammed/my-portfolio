import React from 'react';
import Header from '../Header/Header';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import About from './../About/About';

const Home = () => {
    return (
        <div>
            <div className="text-center">
                <Navbar></Navbar>
                <Header></Header>
                <About></About>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;