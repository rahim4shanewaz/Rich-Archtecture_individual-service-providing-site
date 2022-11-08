import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextApi';



const Register = () => {

    const {createUser, signInWithGoogle,updateUserprofile} = useContext(AuthContext);
    const navigate =useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || '/';
    const [accepted, setAccepted] = useState(false); 



    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imgUrl= form.imgUrl.value;
        const email= form.email.value;
        const password= form.password.value;
        // console.log(name, imgUrl,email,password)



        // creating firebase user

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            handleUpadetUserProfile(name, imgUrl);
            navigate(from, {replace: true});
          })
          .catch(error => {
            console.error(error);
          })
        }


        // Update user firebase
        const  handleUpadetUserProfile = (name, imgUrl) =>{
            const profile = {
              displayName: name,
              photoURL: imgUrl
            }
            updateUserprofile(profile)
            .then(() =>{})
            .catch(error => console.error(error));
          }


          //google sign in
          const handleGoogleSignIn = () =>{
            signInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, {replace: true});
                
                
            })
            .catch( error => {
                console.error(error);
            })
        
        }


        // terms and condition function
        const handleAccepted = event =>{
            setAccepted(event.target.checked);
          }



    return (
        <div className=" min-h-screen w-full">
            <div className='flex flex-col min-h-screen w-full justify-center items-center'>
                    <div className='text-2xl'>
                        <h1>Register</h1>
                    </div>


                    <div className='w-2/5 flex flex-col justify-around '>
                        <form onSubmit={handleSubmit}>
                                    
                                    <div className="form-control">
                                        
                                        <input type="text" name='name' placeholder="Full  Name" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
                                    </div>
                                    
                                    

                                    



                                    <div className='flex gap-5'>
                                    <div className="form-control w-full">
                                        
                                        <input type="email" name='email' placeholder="Email" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400"/>
                                    </div>
                                            <div className="form-control w-full">
                                            
                                            <input type="Password" name='password' placeholder="Password" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
                                            </div>  
                                            </div>     


                                            <div className="form-control">
                                        
                                        <input type="text" name='imgUrl' placeholder="Image URL" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
                                    </div>


                                            
            
                                            
                                    
        
                        </form>

                        <div className='flex gap-2'>
                            <div> <input onClick={handleAccepted} type="checkbox"    />
                            </div>
                                <div>
                                <span className="label-text"><NavLink className={ 'text-emerald-500'} to='/terms'>Terms and Conditions</NavLink></span>
                                </div>
                        </div>




                                         <div className='w-full'>
                                          <button disabled={!accepted} className="btn mt-3 w-full  max-w-xs rounded-xl btn-sm outline-none border-none sdw bg-lime-500">Register</button>
                                          </div>
                                          <div className='w-full'>
                                           <button onClick={handleGoogleSignIn} className="btn w-full mt-3  max-w-xs rounded-xl btn-sm outline-none border-none sdw bg-lime-500">Continue with Google</button>
                                           </div>


                                           <div className='mt-10'>
                                               <p> Already have an account?<Link to='/login'><button className="text-green-400  btn btn-link">Login</button> </Link> </p>
                                            </div>
                    </div>
            
            


                    <div className='w-full flex flex-col items-center justify-center'>

                    
                                            {/* <div className='w-full flex flex-col items-center justify-center'>
                                          <div className='w-full'>
                                          <button disabled={!accepted} className="btn mt-3 w-full  max-w-xs rounded-xl btn-sm outline-none border-none sdw bg-lime-500">Register</button>
                                          </div>

                                          
                                           <div className='w-full'>
                                           <button onClick={handleGoogleSignIn} className="btn w-full mt-3  max-w-xs rounded-xl btn-sm outline-none border-none sdw bg-lime-500">Continue with Google</button>
                                           </div>
                                            </div> */}
                                              
                                        
         
        {/* <div className='flex'>
        <div> <input onClick={handleAccepted} type="checkbox"    />
         </div>
             <div>
             <span className="label-text"><NavLink className={ 'text-emerald-500'} to='/terms'>Terms and Conditions</NavLink></span>
             </div>
        </div> */}


              
             {/* <div>
                                               <p> Already have an account?<Link to='/login'><button className="text-green-400  btn btn-link">Login</button> </Link> </p>
            </div> */}
                    </div>
            </div>

            

           
      </div>
    );
};

export default Register;