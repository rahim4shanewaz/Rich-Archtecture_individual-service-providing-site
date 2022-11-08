import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextApi';
import './Login.css'

const Login = () => {
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    //login function

    const HandleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        
        
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password)
       
    
        signIn(email,password)
        .then(result => {
          const user = result.user;
          
          form.reset();
          setError('');
          navigate(from, {replace: true});
          
          
      })
      .catch( error => {
          console.error(error);
          setError(error.message)
      })
    
        
      }



    return (
        <div className=" min-h-screen bg-base-200 lg:flex">
           


                <div className='bg-green-700  lg:w-2/5 lg:flex justify-end items-center   lg:min-h-screen'>

                    <div className='sm:w-full lg:w-5/6 sm:h-full lg:h-4/5 bg-green-700 drop-shadow-xl sdw'>

                    <div className='m-10 flex flex-col justify-center items-center'>
                            <div>
                                <h1 className='text-2xl text-center mt-5 mb-5'>Log In</h1>
                            </div>
                            <div>


                                <form onSubmit={HandleSubmit}>
                                  
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Email</span>
                                        </label>
                                        <input type="email"
                                        name='email' placeholder="email" className="input input-bordered border-black rounded-none bg-green-700  input-sm w-full max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-black">Password</span>
                                            </label>
                                            <input type="Password" 
                                            name='password' placeholder="password" className="input input-bordered border-black rounded-none input-sm bg-green-700 w-full max-w-xs" />


                                          
                                            <button className="btn mt-3  max-w-xs rounded-none btn-sm btn-outline">Log In</button>
                                            <div ><p className='text-red'>{error}</p></div>
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