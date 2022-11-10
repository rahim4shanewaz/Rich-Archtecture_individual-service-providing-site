import { faEnvelope, faLock, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useHooks from '../../components/UseHooks';
import { AuthContext } from '../../Context/ContextApi';
import './Login.css'

const Login = () => {
  const [loading, setLoading] = useState(false);


    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const notify = () => toast("Login Successful");
    const notify1 = () => toast("Incorrect Email or Password");
    useHooks('Login')



    //login function
   
    const HandleSubmit = event =>{

      
     
     
        event.preventDefault();
        const form = event.target;
        
        
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password)
      
   

 setLoading(true)

        signIn(email,password)
        .then(result => {
          const user = result.user;


          const currentUser = {
            email: user.email
        }
        // console.log(currentUser)

        fetch('https://assignment-11-sever.vercel.app/jwt', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('RC-token-login', data.token);
                      
        
          notify()
          form.reset();
          setError('');
         
          
          navigate(from, {replace: true});
                    });
                  




                   
          
                  
      })
    
      .catch( error => {
        notify1()
          console.error(error);
          setError(error.message)
          setLoading(false)
      })
    
     
      }
      
     



    return (
     <div className='w-full min-h-screen mt-10'>
      { loading ? 
      <Circles loading={loading}></Circles>
      :

     <div>
     
      <div className='flex justify-center'>      
      </div>
     


        <div className='flex flex-col min-h-screen w-full justify-center items-center'>
            <div className='text-2xl text-center'>
                <FontAwesomeIcon className='text-6xl' icon={faUser}></FontAwesomeIcon>
               <div className='p-10'>
               <h1 className='headerFont font-bold text-4xl'>Login</h1>
               </div>
            </div>
       <div className='w-1/4 flex flex-col justify-around gap-28'>
       <form onSubmit={HandleSubmit}>
                                  
                                  <div className="form-control">
                                   <div className='flex justify-center items-center gap-5'>
                                   <FontAwesomeIcon className='text-4xl' icon={faEnvelope}></FontAwesomeIcon>
                                      
            <input  type="email" name='email' placeholder="Email" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
                                   </div>
                                  </div>

                                  
                                  <div className="form-control">
                                          
                                         <div className='flex justify-center items-center gap-5'>
                                          <FontAwesomeIcon className='text-4xl' icon={faLock}></FontAwesomeIcon>
                                         <input type="Password" 
                                          name='password' placeholder="Password" className=" mt-5 outline-none border-gray-400 mb-10 border-b-2 p-2 pl-0  w-full" />
                                         </div>


                                        
                                          <button className="btn mt-3  max-w-xs rounded-none btn-sm outline-none border-none sdw bg-lime-500">Log In</button>


                                          <div className='mt-5' ><p className='text-red'>{error}</p></div>
                                              
                                          
                                  </div>
      
         </form>

                                            <div className=''>
                                                <p><small className='text-stone-700'>Forgot</small> <small className='text-lime-500'><button disabled  className=''>USERNAME/PASSWORD?</button></small></p>
                                              <p> <small className='text-stone-700'>Don't Have account?</small>
                                                <NavLink to='/register'><button className="text-lime-500  btn btn-link">Register</button> </NavLink> 
                                                </p>
                                              </div>
       </div>
        </div>
        </div>

}
     </div>
    );
};

export default Login;