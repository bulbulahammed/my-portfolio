import React from 'react';
import Header from '../Header/Header';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <div className="text-center">
                <Navbar></Navbar>
                <Header></Header>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;