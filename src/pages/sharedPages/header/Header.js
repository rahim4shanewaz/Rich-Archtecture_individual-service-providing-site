import { faAward, faHandshake, faMugHot, faProjectDiagram, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Sections from '../../../components/Sections';
import NavBar from './NavBar';

const Header = () => {
    return ( 
        <div className='mt-28 '>
           <div className='w-full '>
                <div className='w-full    bg-white h-screen grid grid-cols-2  '>
                    <div className=' ml-10 p-10 '>
                    <h1 className='logoFont text-6xl font-semibold '>Rich <br /> Architecture</h1>
                    <br />
                    <br />
                    <h2 className='text-5xl headerFont'>We <span className='underline underline-offset'>design</span> <br />  &  <span className='underline'>deliver</span>  beautiful hotels,  <br /> luxury homes <br /> and <br /> innovative workplace interiors</h2>
                    </div>

                <div className='w-full h-full bg-black  drop-shadow shadow-black '>
                <img className='h-full opacity-50  object-cover w-full' src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80" alt="" />
                </div>
                </div>
              
           
                <div className=''>
                    <Sections></Sections>

                </div>
           </div> 




           

           <div className='w-full h-64 text-center mb-20 bg-rose-300  bg-opacity-50'>
           
            <h1 className='text-teal-600 text-xl fonts'>SERVICES & <br />
                            FREQUENTLY ASKED QUESTIONS</h1>
                           
                           
                            <br />
                            <h1>
                                <FontAwesomeIcon className='text-6xl' icon={faQuoteLeft}></FontAwesomeIcon>

                            </h1>
                            <h1>Our signature design process is a highly-organized, <br /> client-driven plan that delivers bespoke solutions for full-service, turnkey projects.</h1>

                            <div className='h-28  w-4/5 mx-auto mt-5 border bg-teal-600 rounded-lg '>
                                <div className='flex justify-around items-center headerFont h-full text-white'>
                                            <div >
                                            <FontAwesomeIcon className='text-4xl' icon={faMugHot}></FontAwesomeIcon>
                                               
                                                <h1 className='font-bold text-center'>CLIENT <br />416+</h1>
                                                
                                            </div>
                                            <div>
                                                <FontAwesomeIcon className='text-4xl' icon={faProjectDiagram}></FontAwesomeIcon>
                                                <h1 className='font-bold text-center'>PROJECTS <br />279+</h1>
                                            </div>
                                            <div>
                                            <FontAwesomeIcon className='text-4xl' icon={faHandshake}></FontAwesomeIcon>
                                            <h1 className='font-bold text-center'>BUSINESS PARTNERS<br />21+</h1>
                                            </div>
                                            <div>
                                            <FontAwesomeIcon className='text-4xl' icon={faAward}></FontAwesomeIcon>
                                            <h1 className='font-bold text-center'>AWARDS WINING <br />39+</h1>
                                            </div>
                                </div>

                            </div>
                          
            

           </div>
         
           
        </div>
    );
};

export default Header;