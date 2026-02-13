import React from 'react';

import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Navbar from '../Components/NavBar';

const Rot = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>

                <Outlet></Outlet>
            <Footer></Footer>

            
        </div>
    );
};

export default Rot;