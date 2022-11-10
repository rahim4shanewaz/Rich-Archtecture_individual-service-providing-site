import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import useHooks from '../../components/UseHooks';

import { AuthContext } from '../../Context/ContextApi';

const AddServices = () => {

    const {user} = useContext(AuthContext);
    const notify = () => toast("Service Added");
    useHooks('Add Service')


    const handlePlaceService = event => {


        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = parseInt(form.price.value)
        const length = parseInt(form.length.value);
        const img = form.img.value;
        const descriptions = form.descriptions.value;
        const rating = parseInt(form.rating.value)


        console.log(title,price,length,img,descriptions,rating );



        // send user data and added services data to database

        const service = {

            title: title,
            img: img,
            price: price,
            length: length,
            rating: rating,
            description: descriptions,
            email: user.email,
            reviews: {
                review:'',
                name:'',
                img:''
            },
            timestamp: new Date(),
           

            user
        }


        fetch('https://assignment-11-sever.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //get jwt token from local storage
                authorization: `Bearer ${localStorage.getItem('RC-token-login')}`
               
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    notify()
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
    }
    return ( 
        <div className='mt-20'>
            <div className='text-center headerFont mb-7'>
                <p className="text-2xl font-bold text-orange-600">Rich Architecture</p>
                <h2 className="text-5xl font-semibold">Add Your Services</h2>
                <p className='text-xl font-bold'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>





        <div className="  bg-white relative lg:flex ">
        
        <div className='bg-green-700   lg:w-2/5 lg:flex justify-end items-center absolute   '>
        </div>




        <div className='bg-white lg:w-full py-10 flex items-center  mx-auto  '>
        <div className=' bg-slate-50 sm:h-full   sm:w-full  lg:w-3/5 mx-auto drop-shadow border rounded-none flex justify-center items-center '>



        <div className=''>
                            <div>
                                <h1 className='text-2xl text-center mt-5 mb-5'>Add Your Services</h1>
                            </div>
                            <div>
                            <form onSubmit={handlePlaceService} >
                                 
                                 <div className="form-control">
                                       <label className="label">
                                           <span className="label-text"> Services Title </span>
                                       </label>
                                       <input required type="text" name='title' placeholder="title" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>

                                   <div className='flex gap-2'>
                                   <div className="form-control">
                                       <label className="label">
                                           <span className="label-text">Price</span>
                                       </label>
                                       <input required type="text" name='price' placeholder="price" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>
                                   <div className="form-control">
                                       <label className="label">
                                           <span className="label-text"> Duration Length (days)  </span>
                                       </label>
                                       <input required type="text" name='length' placeholder="length" className="input input-bordered rounded-none input-sm w-full " />
                                   </div>
                                   </div>
                                 
                                 

                                 <div className="form-control">
                                       <label className="label">
                                           <span className="label-text">Image URL</span>
                                       </label>
                                       <input required type="text" name='img' placeholder="URL" className="input input-bordered w-full rounded-none " />
                                   </div>



                                   <div className="form-control">
                                       <label className="label">
                                           <span className="label-text">Descriptions - <br /> <span className='text-red-400'>Must enter 150 Characters</span></span>
                                       </label>
                                       {/* <input type="text" name='email' placeholder="Descriptions" className="input input-bordered rounded-none  w-full " /> */}

                                       <textarea name="descriptions" className="textarea textarea-bordered h-24 w-full" placeholder="Descriptions" required></textarea>
                                   </div>








                                   <div className="form-control">
                                           <label className="label">
                                               <span className="label-text">Rating <br /> <span className='text-red-400'>Must enter out of 5</span></span>
                                           </label>
                                           <input type="text" name='rating' placeholder="rating" className="input input-bordered rounded-none  w-full max-w-xs" />


                                         
                                           <button className="btn mt-3 mb-10 max-w-xs rounded-none btn-sm outline-none border-none sdw bg-lime-500">Add Your Services</button>
  
                                   </div>
       
                               </form>

                            </div>

        </div>

        </div>

        </div>

        </div>
        </div>

    );
};

export default AddServices;