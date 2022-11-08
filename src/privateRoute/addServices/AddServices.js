import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const AddServices = () => {
    return (
        <div className=" min-h-screen  bg-base-200 relative  lg:flex ">
        
        <div className='bg-green-700   lg:w-2/5 lg:flex justify-end items-center absolute   lg:min-h-screen'>
        </div>




        <div className='bg-slate-50 lg:w-full py-10 flex items-center  mx-auto  min-h-screen '>
        <div className=' bg-white sm:h-full   sm:w-full rounded-xl  lg:w-3/5 mx-auto drop-shadow-xl flex justify-center items-center  sdw'>



        <div className=''>
                            <div>
                                <h1 className='text-2xl text-center mt-5 mb-5'>Add Your Services</h1>
                            </div>
                            <div>
                            <form >
                                 
                                 <div className="form-control">
                                       <label className="label">
                                           <span className="label-text"> Services Title </span>
                                       </label>
                                       <input type="text" name='name' placeholder="title" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>

                                   <div className='flex gap-2'>
                                   <div className="form-control">
                                       <label className="label">
                                           <span className="label-text">Price</span>
                                       </label>
                                       <input type="text" name='name' placeholder="price" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>
                                   <div className="form-control">
                                       <label className="label">
                                           <span className="label-text"> Time Duration </span>
                                       </label>
                                       <input type="text" name='name' placeholder="time" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>
                                   </div>
                                 
                                 

                                 <div className="form-control">
                                       <label className="label">
                                           <span className="label-text">Image URL</span>
                                       </label>
                                       <input type="text" name='imgUrl' placeholder="URL" className="input input-bordered w-full rounded-none " />
                                   </div>



                                   <div className="form-control">
                                       <label className="label">
                                           <span className="label-text">Descriptions</span>
                                       </label>
                                       <input type="text" name='email' placeholder="Descriptions" className="input input-bordered rounded-none  w-full " />
                                   </div>
                                   <div className="form-control">
                                           <label className="label">
                                               <span className="label-text">Password</span>
                                           </label>
                                           <input type="Password" name='password' placeholder="password" className="input input-bordered rounded-none  w-full max-w-xs" />


                                         
                                           <button className="btn mt-3 max-w-xs rounded-none btn-sm btn-outline">Add Your Services</button>
  
                                   </div>
       
                               </form>

                            </div>

        </div>

        </div>

        </div>

        </div>
    );
};

export default AddServices;