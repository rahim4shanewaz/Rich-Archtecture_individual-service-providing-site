import { faLandmark, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/ContextApi';
import Header from './Header';

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
          .then(() =>{})
          .catch( error => console.error(error));
      }

    return (
        

        <div className=''>

            <div className="flex flex-col w-full">
                <div className=" relative drop-shadow shadow-black flex justify-center item-between  card bg-white rounded-none place-items-center h-36">
                           
                           
                           
                            <div className='absolute left-20 top-5 flex' >
                            <div className='p-1 border border-black'><h1 className='text-black text-xl logoFont font-bold border border-black  p-4 '>R | A</h1></div>
                            </div>

                          
                        
                            <div className="navbar drop-shadow border bg-white text-neutral-content absolute -bottom-6 right-0 w-4/5">


                <div className="navbar-start ">
                    <div className="dropdown text-black">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral  rounded-none w-52">

                        <li>hageg</li>
                        <li>hageg</li>
                        <li>hageg</li>
                        <li>hageg</li>
                       
                    </ul>
                    </div>
                   
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                   <small> <ul className="menu text-black menu-horizontal navFonts gap-3 p-0">
                       <Link to='/'> <button className=' px-3 py-2 hover:bg-lime-400'>Home</button> </Link>
                       <Link to='/blog'> <button className='border px-3 py-2 hover:bg-lime-400'>Blog</button> </Link>
                       <Link to='/addreview'> <button className=' px-3 py-2 hover:bg-lime-400'>Add Review</button> </Link>
                       <Link to='/addservices'> <button className=' px-3 py-2 hover:bg-lime-400'>Add Services</button> </Link>



                       <Link to='/service.reviews'> <button className=' px-3 py-2 hover:bg-lime-400'>Services and Reviews</button> </Link>



                       <Link to='/login'> <button className=' px-3 py-2 hover:bg-lime-400'>LogIn</button> </Link>
                       <Link to='/register'> <button className=' px-3 py-2 hover:bg-lime-400'>Register</button> </Link>
                       <button className='border px-3 py-2 hover:bg-lime-400' onClick={handleLogout}>Logout</button>

                       <div>
                       { user?.uid &&
                <div className='img-box' >
                { <span><p>{user.displayName}</p></span> }
                </div>
              }
                       </div>

                    
                    </ul> </small>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}





                            </div>

                            <div className='flex justify-end gap-10 absolute right-20 w-3/5 top-5 '>
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
                                   
                                        <h1 lassName='text-slate-400'> Call Us Anytime</h1>
                                        <h1 className='font-black'>+880 0000000000</h1>
                                    
                                    
                                </div>
                            </div>
                           </div>
                            
                </div> 
              

            
            </div>
            {/* <Header></Header> */}
               
        </div>
    );
};

export default NavBar;