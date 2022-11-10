import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharedPages/footer/Footer';
import Header from '../pages/sharedPages/header/Header';
import NavBar from '../pages/sharedPages/header/NavBar';

const Main = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet>
            
           </Outlet>
          
           <Footer></Footer>
            
        </div>
    );
};

export default Main;
