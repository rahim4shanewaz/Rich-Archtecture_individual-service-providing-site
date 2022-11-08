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
     <div className='w-full min-h-screen'>
        <div className='flex flex-col min-h-screen w-full justify-center items-center'>
            <div className='text-2xl'>
                <h1>Login</h1>
            </div>
       <div className='w-1/4 flex flex-col justify-around gap-28'>
       <form onSubmit={HandleSubmit}>
                                  
                                  <div className="form-control">
                                      
                                      <input type="email"
                                      name='email' placeholder="Email" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
                                  </div>

                                  
                                  <div className="form-control">
                                          
                                          <input type="Password" 
                                          name='password' placeholder="Password" className="outline-none border-gray-400 mb-10 border-b-2 p-2 pl-0  w-full" />


                                        
                                          <button className="btn mt-3  max-w-xs rounded-xl btn-sm outline-none border-none sdw bg-lime-500">Log In</button>


                                          <div className='mt-5' ><p className='text-red'>{error}</p></div>
                                              
                                          
                                  </div>
      
         </form>

                                            <div className=''>
                                                <p><small className='text-stone-700'>Forgot</small> <small className='text-lime-500'><button className=''>USERNAME/PASSWORD?</button></small></p>
                                              <p> <small className='text-stone-700'>Don't Have account?</small>
                                                <Link to='/register'><button className="text-lime-500  btn btn-link">Register</button> </Link> 
                                                </p>
                                              </div>
       </div>
        </div>
     </div>
    );
};

export default Login;