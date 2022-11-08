import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className=" min-h-screen bg-base-200  lg:flex sdw">
           


                <div className='bg-green-700  lg:w-2/5 lg:flex justify-end items-center   lg:min-h-screen'>

                    <div className='sm:w-full lg:w-5/6 sm:h-full lg:h-4/5 bg-green-700 drop-shadow-xl sdw'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat iure ex, iusto voluptatibus ad labore fuga maxime possimus, laborum quae. Deleniti sed laboriosam ipsam nemo recusandae sapiente impedit dolore.</p>
                    </div>

                </div>
                <div className='bg-slate-50 lg:w-3/5 flex items-center  min-h-screen '>
                    <div className=' bg-white sm:h-full lg:h-4/5 sm:w-full  lg:w-5/6 drop-shadow-xl flex justify-center items-center  sdw'>



                         <div className='m-10 '>
                            <div>
                                <h1 className='text-2xl text-center mt-5 mb-5'>Register</h1>
                            </div>
                            <div>


                                <form>
                                  <div className='flex gap-2'>
                                  <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> First Name</span>
                                        </label>
                                        <input type="text" placeholder="first name" className="input input-bordered rounded-none input-sm w-full max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" placeholder="last name" className="input input-bordered rounded-none input-sm w-full max-w-xs" />
                                    </div>
                                  </div>

                                  <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>
                                        <input type="text" placeholder="URL" className="input input-bordered input-sm w-full rounded-none max-w-xs" />
                                    </div>



                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered rounded-none input-sm w-full max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="Password" placeholder="password" className="input input-bordered rounded-none input-sm w-full max-w-xs" />


                                          
                                            <button className="btn mt-3 max-w-xs rounded-none btn-sm btn-outline">Register</button>
                                            <button className="btn mt-3 max-w-xs rounded-none btn-sm btn-outline">Continue with Google</button>
                                                <div>
                                                <p> Already have an account?<Link to='/login'><button className="text-green-400  btn btn-link">Login</button> </Link> </p>
                                                </div>
                                            
                                    </div>
        
                                </form>
                            </div>

                         </div>




                    </div>

                </div>



         
      </div>
    );
};

export default Register;