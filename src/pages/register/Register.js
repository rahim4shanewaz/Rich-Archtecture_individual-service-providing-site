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
        <div className=" min-h-screen bg-base-200  lg:flex ">
           


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


                                <form onSubmit={handleSubmit}>
                                 
                                  <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Full Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered rounded-none input-sm w-full max-w-xs" />
                                    </div>
                                  
                                  

                                  <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>
                                        <input type="text" name='imgUrl' placeholder="URL" className="input input-bordered input-sm w-full rounded-none max-w-xs" />
                                    </div>



                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered rounded-none input-sm w-full max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="Password" name='password' placeholder="password" className="input input-bordered rounded-none input-sm w-full max-w-xs" />


                                          
                                            <button disabled={!accepted} className="btn mt-3 max-w-xs rounded-none btn-sm btn-outline">Register</button>

                                           
                                            <button onClick={handleGoogleSignIn} className="btn mt-3 max-w-xs rounded-none btn-sm btn-outline">Continue with Google</button>
                                            <div  className=" flex gap-2">
          
          <div> <input onClick={handleAccepted} type="checkbox"    />
          </div>
              <div>
              <span className="label-text"><NavLink className={ 'text-emerald-500'} to='/terms'>Terms and Conditions</NavLink></span>
              </div>


               </div>
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