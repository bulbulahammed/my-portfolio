import React from 'react';
import Header from '../Header/Header';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import About from './../About/About';
import Skills from './../Skills/Skills';
import Contact from './../Contact/Contact';
import './Home.css';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
const Home = () => {
    return (
        <div className="full-body">
            <div className="text-center">
                <Navbar></Navbar>
                <Header></Header>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Blog></Blog>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;