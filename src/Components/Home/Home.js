import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <Navbar></Navbar>
                <h1>Hello This is Not Home</h1>
            </div>
        </div>
    );
};

export default Home;