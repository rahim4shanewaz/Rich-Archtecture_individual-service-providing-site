import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (

        <div>

            <div className="flex flex-col w-full">
                <div className="flex flex-col justify-end drop-shadow px-28 card bg-base-300 rounded-none place-items-center h-40 ">
                            <div>
                            </div>
                        
                            <div className="navbar bg-neutral text-neutral-content">


                <div className="navbar-start ">
                    <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral  rounded-none w-52">

                        <li>hageg</li>
                        <li>hageg</li>
                        <li>hageg</li>
                        <li>hageg</li>
                       
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 p-0">
                       <Link to='/'> <button>Home</button> </Link>
                       <Link to='/blog'> <button>Blog</button> </Link>
                       <Link to='/login'> <button>LogIn</button> </Link>
                       <Link to='/register'> <button>Register</button> </Link>
                    
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>





                            </div>

                </div> 
            
            </div>
               
        </div>
    );
};

export default NavBar;