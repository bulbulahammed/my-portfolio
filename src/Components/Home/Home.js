import React from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import About from './../About/About';
import Contact from './../Contact/Contact';
const Home = () => {
    return (
        <div>
            <div className="text-center">
                <Navbar></Navbar>
                <Header></Header>
                <About></About>
                <Service></Service>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;