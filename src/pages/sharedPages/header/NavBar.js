import { faLandmark, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/ContextApi';
import Header from './Header';

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const notify = () => toast("Successfully Logout");
   
    
    const handleLogout = () => {
        logOut()
          .then(() =>{})
         
          .catch( error => console.error(error));
          notify()
      }

    return (
        

        <div className=''>
         <div className="flex flex-col w-full">


              <div className=" relative drop-shadow shadow-black lg:flex justify-center item-between  card bg-white rounded-none   place-items-center h-36">
                           
                           
                           
                            <div className='lg:absolute lg:left-20 sm:mb-10  lg:flex justify-center bg-white drop-shadow border  -bottom-16' >
                                <div className='p-1   '><h1 className='text-black text-2xl logoFont font-bold   p-4 '>R | A</h1>
                                </div>
                            </div>

                          
                              
                <div className="navbar drop-shadow border bg-white text-neutral-content absolute -bottom-6 right-0 w-4/5">
                    
                      <div className="navbar-start ">
                          <div className="dropdown text-black">
                          <label tabIndex={0} className="btn btn-ghost lg:hidden">
                              <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                          </label>
                          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white  rounded-none w-52">


                          <div>
                                          { user?.uid &&
                                            <div className='img-box' title={user.displayName}>
                                            { <span><img className='w-100 h-100' src={user.photoURL} alt="" /> </span> }
                                            </div>
                                          }
                                     </div>

                          <div className=''>
                            <div>
                            <NavLink to='/'> <button className=' px-3 py-2 hover:bg-lime-400'>Home</button> </NavLink>
                            </div>
                            
                            
                            <div>
                            <NavLink to='/allservices'> <button className=' px-3 py-2 hover:bg-lime-400'>All Services</button> </NavLink>
                            </div>
                           
                            <div>
                            <NavLink to='/blog'> <button className=' px-3 py-2 hover:bg-lime-400'>Blog</button> </NavLink>
                            </div>

                          </div>
                          <br />
                              
                                <div>
                                      

                                      <div className=''>

                                          { user?.uid ?

                                          <div >
                                          

                                            <div>
                                                <NavLink to='/service.reviews'> <button className=' px-3 py-2 hover:bg-lime-400'> My Services & Reviews</button> </NavLink>
                                            </div>
                                          <div>
                                                   <NavLink to='/addservices'> <button className=' px-3 py-2 hover:bg-lime-400'>Add Services</button> </NavLink>
                                          </div>
                                          <div className="divider"></div>
                                        

                                          <button className=' px-3 py-2  hover:bg-lime-400' onClick={handleLogout}>Logout</button>
                                          
                                          </div> 


                                          :


                                          <div >
                                            <div>
                                                <NavLink to='/service.reviews'> <button className=' px-3 py-2 hover:bg-lime-400'> My Services & Reviews</button> </NavLink>
                                          </div>
                                          <div>
                                          <NavLink to='/addservices'> <button className=' px-3 py-2 hover:bg-lime-400'>Add Services</button> </NavLink>
                                          </div>
                                         
                                          
                                          
                                            <div>
                                              <NavLink to='/login'> <button className=' px-3 py-2 hover:bg-lime-400'>LogIn</button> </NavLink>
                                              </div>
                                              <div>
                                              <NavLink to='/register'> <button className=' px-3 py-2 hover:bg-lime-400'>Register</button> </NavLink>
                                              </div>



                                          </div>


                                                }
                                      </div>
                                 
                           
                                </div>

                               
                  
                          </ul>
                          </div>
                        
                        
                      </div>

                      <div className="navbar-center hidden lg:flex">

                       <div className='absolute w-full left-0'>
                       <small> 
                          <ul className="menu text-black menu-horizontal navFonts gap-3 p-0">

                            <div className='flex px-5'>
                            <div>
                            <NavLink to='/'> <button className=' px-3 py-2 hover:bg-lime-400'>Home</button> </NavLink>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            
                            <div>
                            <NavLink to='/allservices'> <button className=' px-3 py-2 hover:bg-lime-400'>All Services</button> </NavLink>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div>
                            <NavLink to='/blog'> <button className=' px-3 py-2 hover:bg-lime-400'>Blog</button> </NavLink>
                            </div>

                            </div>
                            
                             <div className='flex absolute right-0 px-5'>

                              { user?.uid ?

                            <div className='flex'>
                                <div>
                                     <NavLink to='/service.reviews'> <button className=' px-3 py-2 hover:bg-lime-400'> My Services and Reviews</button> </NavLink>
                               </div>
                            <div>
                            <NavLink to='/addservices'> <button className=' px-3 py-2 hover:bg-lime-400'>Add Services</button> </NavLink>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            
                            <button className=' px-3 py-2 mx-2 hover:bg-lime-400' onClick={handleLogout}>Logout</button>
                            <div>
                                    { user?.uid &&
                                      <div className='img-box' title={user.displayName}>
                                      { <span><img className='w-100 h-100' src={user.photoURL} alt="" /> </span> }
                                      </div>
                                    }
                            </div>
                            </div> 
                            
                            
                            :

                          
                          <div className='flex'>
                            <div>
                            <NavLink to='/addservices'> <button className=' px-3 py-2 hover:bg-lime-400'>Add Services</button> </NavLink>
                            </div>
                            <div>
                                     <NavLink to='/service.reviews'> <button className=' px-3 py-2 hover:bg-lime-400'> My Services and Reviews</button> </NavLink>
                               </div>
                               <div className="divider divider-horizontal"></div>
                                <div>
                                  <NavLink to='/login'> <button className=' px-3 py-2 hover:bg-lime-400'>LogIn</button> </NavLink>
                                  </div>
                                  <div>
                                  <NavLink to='/register'> <button className=' px-3 py-2 hover:bg-lime-400'>Register</button> </NavLink>
                                  </div>

                          

                            </div>


                                    }
                            </div>

                            
                          </ul> 
                        </small>
                       </div>

                  
                      </div>
                </div>



            <div className='sm:hidden lg:flex justify-end gap-10 lg:absolute lg:right-20 w-3/5 lg:top-5 '>
                           <div className='flex items-center gap-3 fonts'>
                                <div><FontAwesomeIcon className='text-4xl text-slate-400' icon={faLocationDot}></FontAwesomeIcon></div>
                                <div>
                                    <h1 className='text-slate-400'>Nikunja 1, Uttara 1250</h1>
                                    <h1>Dhaka, Bangladesh</h1>
                                </div>
                           </div>

                            <div className='flex items-center gap-3'>
                                <div><FontAwesomeIcon className='text-4xl text-slate-400' icon={faMobile}></FontAwesomeIcon></div>
                                <div>
                                   
                                        <h1 className='text-slate-400'> Call Us Anytime</h1>
                                        <h1 className='font-black'>+880 0000000000</h1>
                                    
                                    
                                </div>
                            </div>
              </div>
                            
              </div> 
              

            
          </div>     
        </div>
    );
};

export default NavBar;