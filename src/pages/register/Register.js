import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faG, faLink, faLock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useHooks from '../../components/UseHooks';
import { AuthContext } from '../../Context/ContextApi';



const Register = () => {

    const {createUser, signInWithGoogle,updateUserprofile} = useContext(AuthContext);
    const navigate =useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || '/';
    const [accepted, setAccepted] = useState(false); 
    const [loading, setLoading] = useState(false)
    const notify = () => toast("Register Successful");
    useHooks('Register')



    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imgUrl= form.imgUrl.value;
        const email= form.email.value;
        const password= form.password.value;

        console.log(name, imgUrl,email,password)



        // creating firebase user
        setLoading(true)

        createUser(email, password)
        .then(result => {
            const user = result.user;

            const currentUser = {
                email: user.email
            }
            console.log(currentUser)
            fetch('https://assignment-11-sever.vercel.app/jwt', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
      })

      .then(res => res.json())
      .then(data => {
        // console.log(data);
        // local storage is the easiest but not the best place to store jwt token
        localStorage.setItem('RC-token-login', data.token);
        
        notify()
form.reset();

navigate(from, {replace: true});
    });
      


        

   
            form.reset();
            handleUpadetUserProfile(name, imgUrl);
            setLoading(false)
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

            setLoading(true)
            signInWithGoogle()
           

            .then(result => {
                const user = result.user;
                
                console.log(user.email)

                const currentUser = {
                    email: user.email
                    
                }
                console.log(currentUser)

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
                    setLoading(false)
                   
                    navigate(from, {replace: true});
                })
                
            
                
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
        <div className=" min-h-screen w-full mt-10">

            {
            loading ?
            <Circles loading={loading}></Circles>
            :




            <div className='flex flex-col min-h-screen w-full justify-center items-center'>
            <div className='text-2xl text-center'>
                <FontAwesomeIcon className='text-6xl' icon={faUser}></FontAwesomeIcon>
               <div className='p-10'>
               <h1 className='headerFont font-bold text-4xl'>Register</h1>
               </div>
            </div>


                    <div className='w-2/5 flex flex-col justify-around '>
                        <form onSubmit={handleSubmit}>
                                    
                                    <div className="form-control">
                                        
                                        <input type="text" name='name' placeholder="Full  Name" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
                                    </div>
                                    
                                    

                                    



                                    <div className='flex gap-7'>
                                    <div className="form-control w-full">
                                        
                                        <input type="email" name='email' placeholder="Email" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400"/>
                                    </div>
                                            <div className="form-control w-full">
                                           <div className='flex gap-3'>
                                          
                                            
                                            <input type="Password" name='password' placeholder="Password" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
                                           </div>
                                            </div>  
                                            </div>     


                                            <div className="form-control">
                                        
                                      <div className='flex gap-3 items-center justify-center '>
                                    
                                      <input type="text" name='imgUrl' placeholder="Image URL" className=" p-2 pl-0 outline-none  w-full mb-5  border-b-2 border-gray-400" />
                                      </div>
                                    </div>


                                            
                                    <div className='w-full'>
                                          <button disabled={!accepted} className="btn mt-3 w-full  max-w-xs rounded-none btn-sm outline-none border-none sdw bg-lime-500">Register</button>
                                          </div>
                                            
                                    
        
                        </form>

                        <div className='flex gap-2 mt-3'>
                            <div> <input onClick={handleAccepted} type="checkbox"    />
                            </div>
                                <div>
                                <span className="label-text"><NavLink  className='text-lime-500'to='/terms'><button disabled>Terms and Conditions</button></NavLink></span>
                                </div>
                        </div>




                                        
                                          <div className='w-full'>
                                           <button onClick={handleGoogleSignIn} className="btn w-full mt-3  max-w-xs rounded-none btn-sm outline-none border-none sdw bg-lime-500"><span className='text-2xl font-bold text-black mr-10'> <FontAwesomeIcon icon={faG}></FontAwesomeIcon></span> Continue with Google</button>
                                           </div>


                                           <div className='mt-10'>
                                               <p> Already have an account?<NavLink to='/login'><button className="text-lime-500  btn btn-link">Login</button> </NavLink> </p>
                                            </div>
                                           
                    </div>
            
            


                    <div className='w-full flex flex-col items-center justify-center'>

                    
                                   
                                        
      


              
        
                    </div>
            </div>

            
        }
           
      </div>
    );
};

export default Register;