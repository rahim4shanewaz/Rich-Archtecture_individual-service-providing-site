import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className=" min-h-screen bg-base-200 lg:flex">
           


                <div className='bg-green-700  lg:w-2/5 lg:flex justify-end items-center   lg:min-h-screen'>

                    <div className='sm:w-full lg:w-5/6 sm:h-full lg:h-4/5 bg-green-700 drop-shadow-xl sdw'>

                    <div className='m-10 flex flex-col justify-center items-center'>
                            <div>
                                <h1 className='text-2xl text-center mt-5 mb-5'>Log In</h1>
                            </div>
                            <div>


                                <form>
                                  
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered border-black rounded-none bg-green-700  input-sm w-full max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-black">Password</span>
                                            </label>
                                            <input type="Password" placeholder="password" className="input input-bordered border-black rounded-none input-sm bg-green-700 w-full max-w-xs" />


                                          
                                            <button className="btn mt-3  max-w-xs rounded-none btn-sm btn-outline">Log In</button>
                                                <div>
                                                <p> Don't Have account?<Link to='/register'><button className="text-green-400  btn btn-link">Register</button> </Link> </p>
                                                </div>
                                            
                                    </div>
        
                                </form>
                            </div>

                         </div>


                    </div>

                </div>




                <div className='bg-slate-50 lg:w-3/5 flex items-center  min-h-screen '>
                    <div className=' bg-white h-4/5 sm:w-full  lg:w-5/6 drop-shadow-xl flex justify-center items-center  sdw'>
                    </div>

                </div>



         
      </div>
    );
};

export default Login;